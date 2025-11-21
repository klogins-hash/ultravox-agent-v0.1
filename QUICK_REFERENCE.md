# Ultravox Agent - Quick Reference Guide

## 🚀 Getting Started Fast

### Initialize Project
```bash
cd /Users/franksimpson/CascadeProjects/ultravox-agent-v0.1
export ULTRAVOX_API_KEY=GnfASaPx.Hzq2OqJE7rYEjqRfD4esMTlkEUVmVbOb
npm install
npm run dev
```

### Documentation Structure
- **DOCS_INDEX.md** - Full index of all documentation (most comprehensive)
- **docs/** - Complete Ultravox documentation files (MDX format)
- **gettingstarted/** - Quickstart guides
- **api-reference/** - REST API endpoints
- **agents/** - Agent building & management
- **tools/** - Tool integration guides
- **telephony/** - Phone call features
- **voices/** - Voice cloning & management

---

## 🔑 Key API Endpoints

### Account Management
```
GET  /api/accounts/me                    # Get account info
GET  /api/accounts/me/usage/calls        # Get call usage
PATCH /api/accounts/me/tts-api-keys      # Set TTS keys
PATCH /api/accounts/me/telephony-config  # Set phone config
```
📄 See: `docs/api-reference/accounts/`

### Creating Agents
```
POST   /api/agents                 # Create agent
GET    /api/agents                 # List agents
GET    /api/agents/{agent_id}      # Get agent
PATCH  /api/agents/{agent_id}      # Update agent
DELETE /api/agents/{agent_id}      # Delete agent
```
📄 See: `docs/api-reference/agents/`

### Making Calls
```
POST /api/calls                 # Create call
GET  /api/calls                 # List calls
GET  /api/calls/{call_id}       # Get call details
GET  /api/calls/{call_id}/messages      # Get messages
GET  /api/calls/{call_id}/recording     # Get recording
```
📄 See: `docs/api-reference/calls/`

### Managing Tools
```
GET    /api/tools              # List tools
POST   /api/tools              # Create tool
GET    /api/tools/{tool_id}    # Get tool
PUT    /api/tools/{tool_id}    # Replace tool
PATCH  /api/tools/{tool_id}    # Update tool
DELETE /api/tools/{tool_id}    # Delete tool
POST   /api/tools/{tool_id}/test        # Test tool
```
📄 See: `docs/api-reference/tools/`

### Voice Management
```
GET    /api/voices              # List available voices
GET    /api/voices/{voice_id}   # Get voice details
POST   /api/voices              # Clone voice
DELETE /api/voices/{voice_id}   # Delete voice
PATCH  /api/voices/{voice_id}   # Update voice
```
📄 See: `docs/api-reference/voices/`

### Webhooks
```
GET    /api/webhooks            # List webhooks
POST   /api/webhooks            # Create webhook
GET    /api/webhooks/{webhook_id}      # Get webhook
PATCH  /api/webhooks/{webhook_id}      # Update webhook
DELETE /api/webhooks/{webhook_id}      # Delete webhook
```
📄 See: `docs/api-reference/webhooks/`

---

## 📋 Common Tasks

### How to Make an Outbound Call
📄 **File**: `docs/agents/making-calls.mdx`
📄 **Quickstart**: `docs/gettingstarted/examples/outbound-phone-call.mdx`
📄 **API**: `docs/api-reference/calls/calls-post.mdx`

### How to Handle Inbound Calls
📄 **File**: `docs/agents/making-calls.mdx`
📄 **Quickstart**: `docs/gettingstarted/examples/inbound-phone-call.mdx`
📄 **Telephony**: `docs/telephony/inbound-calls.mdx`

### How to Add Tools to Agent
📄 **File**: `docs/tools/custom/overview.mdx`
📄 **Tutorial**: `docs/tutorials/clienttools.mdx`
📄 **API**: `docs/api-reference/tools/tools-post.mdx`

### How to Clone a Voice
📄 **File**: `docs/voices/cloning.mdx`
📄 **API**: `docs/api-reference/voices/voices-post.mdx`

### How to Use RAG (Knowledge Base)
📄 **File**: `docs/tools/rag/overview.mdx`
📄 **Crawl Websites**: `docs/tools/rag/crawling-websites.mdx`
📄 **Static Docs**: `docs/tools/rag/using-static-documents.mdx`
📄 **API**: `docs/api-reference/corpora/`

### How to Set Up Webhooks
📄 **File**: `docs/webhooks/overview.mdx`
📄 **Events**: `docs/webhooks/available-webhooks.mdx`
📄 **Security**: `docs/webhooks/securing-webhooks.mdx`
📄 **Error Handling**: `docs/webhooks/errors-and-retries.mdx`

### How to Handle Call Stages
📄 **File**: `docs/agents/call-stages.mdx`
📄 **Tutorial**: `docs/tutorials/callstages.mdx`

### How to Set Up SIP
📄 **File**: `docs/telephony/sip.mdx`
📄 **API**: `docs/api-reference/sip/`

---

## 🎯 Best Practices

### Prompting
📄 **File**: `docs/gettingstarted/prompting.mdx`

### Call Concurrency Limits
📄 **File**: `docs/gettingstarted/concurrency.mdx`

### Testing & Debugging
📄 **File**: `docs/agents/testing-and-debugging.mdx`

### Guiding Agent Behavior
📄 **File**: `docs/agents/guiding-agents.mdx`

### Noise & Background Speakers
📄 **File**: `docs/noise/overview.mdx`

---

## 🔐 Authentication

All API calls require the `X-API-Key` header:

```bash
curl https://api.ultravox.ai/api/calls \
  -H "X-API-Key: GnfASaPx.Hzq2OqJE7rYEjqRfD4esMTlkEUVmVbOb"
```

---

## 📊 Rate Limits

- **Account**: 500 requests/second
- **API Key**: 200 requests/second
- **Free/PAYGO Plan**: 5 calls/sec, 30 calls/min
- **Pro Plan**: 10 calls/sec, 120 calls/min
- **Scale Plan**: 30 calls/sec, 360 calls/min

📄 **See**: `docs/api-reference/introduction.mdx`

---

## 🆘 Getting Help

- **Documentation**: https://docs.ultravox.ai
- **Discord Community**: https://discord.gg/62X253zeWB
- **Help & Support**: `docs/gettingstarted/getting-help.mdx`
- **GitHub Issues**: https://github.com/fixie-ai/ultravox

---

## 📝 Project Structure

```
ultravox-agent-v0.1/
├── src/                    # Source code
│   └── index.ts            # Main entry point
├── dist/                   # Compiled output
├── docs/                   # Complete Ultravox documentation
│   ├── agents/             # Agent guides
│   ├── api-reference/      # REST API docs
│   ├── gettingstarted/     # Getting started guides
│   ├── tools/              # Tool guides
│   ├── telephony/          # Phone features
│   ├── voices/             # Voice management
│   ├── webhooks/           # Webhook guides
│   └── ...
├── DOCS_INDEX.md           # Full documentation index
├── QUICK_REFERENCE.md      # This file
├── README.md               # Project overview
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── .env.example            # Environment template
```

---

## 🚦 Next Steps

1. **Set up environment**: `export ULTRAVOX_API_KEY=your_key`
2. **Install dependencies**: `npm install`
3. **Read quickstart**: `docs/gettingstarted/quickstart/agent-console.mdx`
4. **Explore examples**: `docs/gettingstarted/examples/`
5. **Build your first agent**: `docs/agents/building-and-editing-agents.mdx`
6. **Review this guide**: Check DOCS_INDEX.md for full reference

---

## 💡 Pro Tips

- Use `Ctrl/Cmd+F` in DOCS_INDEX.md to search for what you need
- API Reference has full endpoint documentation with examples
- Check `docs/changelog/news.mdx` for latest updates
- Join Discord for community support
- Test endpoints in the [Ultravox Dashboard](https://app.ultravox.ai)
