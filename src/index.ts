/**
 * Ultravox Agent v0.1
 * A voice AI agent powered by the Ultravox API with Cohere RAG
 */

const apiKey = process.env.ULTRAVOX_API_KEY || "";

if (!apiKey) {
  throw new Error("ULTRAVOX_API_KEY environment variable is not set");
}

/**
 * Main function to initialize and run the Ultravox agent
 */
async function main() {
  console.log("🎤 Ultravox Agent v0.1 initialized");
  console.log("API Key:", (apiKey as string).substring(0, 8) + "...");
  console.log("\nAvailable commands:");
  console.log("  npm run rag:build   - Build RAG index from documentation");
  console.log("  npm run rag:search -- <query> - Search documentation using RAG");
  console.log("\nAgent is ready! 🚀");
}

main().catch(console.error);
