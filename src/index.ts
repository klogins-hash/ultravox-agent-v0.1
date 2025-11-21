import { UltravoxClient } from "@ultravox/sdk";

/**
 * Ultravox Agent v0.1
 * A voice AI agent powered by the Ultravox API
 */

const apiKey = process.env.ULTRAVOX_API_KEY;

if (!apiKey) {
  throw new Error("ULTRAVOX_API_KEY environment variable is not set");
}

const client = new UltravoxClient({
  apiKey: apiKey,
});

/**
 * Main function to initialize and run the Ultravox agent
 */
async function main() {
  console.log("🎤 Ultravox Agent v0.1 initialized");
  console.log("API Key:", apiKey.substring(0, 8) + "...");

  try {
    // Get account information
    const account = await client.getAccount();
    console.log("✅ Connected to Ultravox API");
    console.log("Account:", account);
  } catch (error) {
    console.error("❌ Failed to connect to Ultravox API:", error);
    process.exit(1);
  }
}

main().catch(console.error);
