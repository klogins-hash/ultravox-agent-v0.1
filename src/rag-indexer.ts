import fs from "fs";
import path from "path";
import { CohereClient } from "cohere-ai";

interface DocumentChunk {
  id: string;
  title: string;
  content: string;
  category: string;
  filePath: string;
  embedding?: number[];
}

interface RagIndex {
  chunks: DocumentChunk[];
  metadata: {
    totalChunks: number;
    totalDocuments: number;
    indexedAt: string;
    version: string;
  };
}

const CHUNK_SIZE = 1000; // characters per chunk
const OVERLAP = 200; // overlap between chunks
const DOCS_DIR = path.join(process.cwd(), "docs");

/**
 * Extract category from file path
 */
function getCategoryFromPath(filePath: string): string {
  const parts = filePath.split(path.sep);
  if (parts.length > 1) {
    return parts[1];
  }
  return "general";
}

/**
 * Read all documentation files
 */
function readDocFiles(): { path: string; content: string }[] {
  const files: { path: string; content: string }[] = [];

  function walkDir(dir: string, relativePath = "") {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relPath = path.join(relativePath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!item.startsWith(".") && item !== "node_modules") {
          walkDir(fullPath, relPath);
        }
      } else if (item.endsWith(".mdx") || item.endsWith(".md")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        files.push({ path: relPath, content });
      }
    }
  }

  walkDir(DOCS_DIR);
  return files;
}

/**
 * Split document into overlapping chunks
 */
function chunkDocument(
  filePath: string,
  content: string
): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];
  const title = path.basename(filePath, path.extname(filePath));
  const category = getCategoryFromPath(filePath);

  // Split into chunks with overlap
  for (let i = 0; i < content.length; i += CHUNK_SIZE - OVERLAP) {
    const chunk = content.substring(i, i + CHUNK_SIZE);
    if (chunk.trim().length > 50) {
      // Only include meaningful chunks
      chunks.push({
        id: `${filePath}#${chunks.length}`,
        title,
        content: chunk,
        category,
        filePath,
      });
    }
  }

  return chunks;
}

/**
 * Create embeddings using Cohere
 */
async function createEmbeddings(
  cohere: CohereClient,
  chunks: DocumentChunk[]
): Promise<DocumentChunk[]> {
  console.log(`Creating embeddings for ${chunks.length} chunks...`);

  // Batch process chunks (Cohere recommends batches of up to 96)
  const batchSize = 90;
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, Math.min(i + batchSize, chunks.length));
    const texts = batch.map((c) => c.content);

    try {
      const response = await cohere.embed({
        texts,
        model: "embed-english-v3.0",
        inputType: "search_document",
      });

      batch.forEach((chunk, idx) => {
        const embeddingsArray = Array.isArray(response.embeddings)
          ? (response.embeddings as number[][])
          : ((response.embeddings as any)[0] as number[][]);
        chunk.embedding = embeddingsArray[idx];
      });

      console.log(
        `✓ Processed chunks ${i + 1}-${Math.min(
          i + batchSize,
          chunks.length
        )} of ${chunks.length}`
      );
    } catch (error) {
      console.error(`Error embedding batch ${i}:`, error);
    }
  }

  return chunks;
}

/**
 * Main RAG indexing function
 */
async function buildRagIndex() {
  const apiKey = process.env.COHERE_API_KEY;
  if (!apiKey) {
    throw new Error("COHERE_API_KEY environment variable is not set");
  }

  const cohere = new CohereClient({ token: apiKey });

  console.log("🔍 Reading documentation files...");
  const docFiles = readDocFiles();
  console.log(`Found ${docFiles.length} documentation files`);

  console.log("📄 Creating document chunks...");
  let allChunks: DocumentChunk[] = [];
  for (const file of docFiles) {
    const chunks = chunkDocument(file.path, file.content);
    allChunks = allChunks.concat(chunks);
  }
  console.log(`Created ${allChunks.length} document chunks`);

  console.log("🤖 Generating embeddings with Cohere...");
  const chunksWithEmbeddings = await createEmbeddings(cohere, allChunks);

  const ragIndex: RagIndex = {
    chunks: chunksWithEmbeddings,
    metadata: {
      totalChunks: chunksWithEmbeddings.length,
      totalDocuments: docFiles.length,
      indexedAt: new Date().toISOString(),
      version: "1.0.0",
    },
  };

  // Save index
  const indexPath = path.join(process.cwd(), "rag-index.json");
  fs.writeFileSync(indexPath, JSON.stringify(ragIndex, null, 2));
  console.log(`✅ RAG index saved to ${indexPath}`);

  return ragIndex;
}

/**
 * Search the RAG index using Cohere
 */
async function searchRagIndex(query: string, topK: number = 5) {
  const apiKey = process.env.COHERE_API_KEY;
  if (!apiKey) {
    throw new Error("COHERE_API_KEY environment variable is not set");
  }

  const cohere = new CohereClient({ token: apiKey });

  // Load index
  const indexPath = path.join(process.cwd(), "rag-index.json");
  if (!fs.existsSync(indexPath)) {
    throw new Error("RAG index not found. Run buildRagIndex first.");
  }

  const index: RagIndex = JSON.parse(fs.readFileSync(indexPath, "utf-8"));

  // Embed query
  console.log(`🔍 Searching for: "${query}"`);
  const queryResponse = await cohere.embed({
    texts: [query],
    model: "embed-english-v3.0",
    inputType: "search_query",
  });

  const embeddingsArray = Array.isArray(queryResponse.embeddings)
    ? (queryResponse.embeddings as number[][])
    : ((queryResponse.embeddings as any)[0] as number[][]);
  const queryEmbedding = embeddingsArray[0] as number[];

  // Calculate similarity scores (cosine similarity)
  const scores = index.chunks.map((chunk) => {
    if (!chunk.embedding) return { chunk, score: 0 };

    const dotProduct = queryEmbedding.reduce(
      (sum: number, val: number, idx: number) => sum + val * chunk.embedding![idx],
      0
    );
    const magnitude1 = Math.sqrt(
      queryEmbedding.reduce((sum: number, val: number) => sum + val * val, 0)
    );
    const magnitude2 = Math.sqrt(
      chunk.embedding.reduce((sum: number, val: number) => sum + val * val, 0)
    );

    const cosineSimilarity =
      dotProduct / (magnitude1 * magnitude2 || 1);

    return { chunk, score: cosineSimilarity };
  });

  // Return top K results
  const results = scores
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((r) => ({
      ...r.chunk,
      relevanceScore: r.score,
    }));

  return results;
}

// CLI interface
if (require.main === module) {
  const command = process.argv[2];

  if (command === "build") {
    buildRagIndex()
      .then(() => {
        console.log("✨ RAG index built successfully!");
        process.exit(0);
      })
      .catch((error) => {
        console.error("❌ Error building RAG index:", error);
        process.exit(1);
      });
  } else if (command === "search") {
    const query = process.argv.slice(3).join(" ");
    if (!query) {
      console.error("Please provide a search query");
      process.exit(1);
    }

    searchRagIndex(query)
      .then((results) => {
        console.log(`\n📚 Top ${results.length} results:\n`);
        results.forEach((result, idx) => {
          console.log(`${idx + 1}. ${result.title} (${result.category})`);
          console.log(`   Score: ${(result.relevanceScore * 100).toFixed(1)}%`);
          console.log(`   File: ${result.filePath}`);
          console.log(
            `   Preview: ${result.content.substring(0, 100)}...\n`
          );
        });
        process.exit(0);
      })
      .catch((error) => {
        console.error("❌ Error searching RAG index:", error);
        process.exit(1);
      });
  } else {
    console.log("Usage:");
    console.log("  npm run rag:build   - Build RAG index from documentation");
    console.log("  npm run rag:search -- <query> - Search the RAG index");
    process.exit(1);
  }
}

export { buildRagIndex, searchRagIndex, RagIndex, DocumentChunk };
