# Ultravox Agent v0.1

A voice AI agent powered by the Ultravox REST API.

## Overview

This project demonstrates how to build a voice AI agent using the Ultravox API. Ultravox is a fast multimodal LLM designed for real-time voice interactions.

## Prerequisites

- Node.js 18+
- npm or yarn
- Ultravox API key (get one at [app.ultravox.ai](https://app.ultravox.ai))

## Setup

1. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Add your API key:**
   ```bash
   export ULTRAVOX_API_KEY=your_api_key_here
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Development

Run the agent in development mode:

```bash
npm run dev
```

## Build

Build the TypeScript project:

```bash
npm run build
```

## Start

Run the compiled agent:

```bash
npm start
```

## API Documentation

For more information about the Ultravox API, visit:
- [API Reference](https://docs.ultravox.ai/api-reference/introduction)
- [Getting Started](https://docs.ultravox.ai/overview)
- [SDK Reference](https://docs.ultravox.ai/sdk-reference/introduction)

## Project Structure

```
ultravox-agent-v0.1/
├── src/
│   └── index.ts          # Main agent entry point
├── dist/                 # Compiled output
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── .env.example
```

## Features

- ✅ Ultravox API client setup
- ✅ Account information retrieval
- 🚧 Agent configuration
- 🚧 Voice call management
- 🚧 Tool definitions
- 🚧 Webhook handling

## License

MIT
