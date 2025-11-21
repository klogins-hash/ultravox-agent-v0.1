# Ultravox Documentation Index

## Quick Navigation

This is a comprehensive index of the Ultravox documentation for quick reference. Use `Ctrl/Cmd+F` to search.

---

## 📚 Documentation Categories

### **Getting Started**
- `docs/overview.mdx` - Overview of Ultravox
- `docs/gettingstarted/how-ultravox-works.mdx` - How Ultravox works
- `docs/gettingstarted/prompting.mdx` - Prompting guide
- `docs/gettingstarted/concurrency.mdx` - Call concurrency limits
- `docs/gettingstarted/getting-help.mdx` - Getting help resources

#### Quickstarts
- `docs/gettingstarted/quickstart/agent-console.mdx` - Agent console quickstart
- `docs/gettingstarted/quickstart/telephony-outbound.mdx` - Outbound calls
- `docs/gettingstarted/quickstart/telephony-inbound.mdx` - Inbound calls
- `docs/gettingstarted/quickstart/apikeys.mdx` - API keys setup
- `docs/gettingstarted/quickstart/web-app.mdx` - Web app integration
- `docs/gettingstarted/quickstart/tools.mdx` - Tools integration

#### Examples
- `docs/gettingstarted/examples.mdx` - Examples overview
- `docs/gettingstarted/examples/outbound-phone-call.mdx` - Outbound phone call example
- `docs/gettingstarted/examples/inbound-phone-call.mdx` - Inbound phone call example

#### Tutorials
- `docs/tutorials/callstages.mdx` - Call stages tutorial
- `docs/tutorials/clienttools.mdx` - Client tools tutorial

---

### **Agents & Calls**
- `docs/agents/overview.mdx` - Agents overview
- `docs/agents/building-and-editing-agents.mdx` - Building agents
- `docs/agents/making-calls.mdx` - Making calls with agents
- `docs/agents/call-management.mdx` - Managing calls
- `docs/agents/guiding-agents.mdx` - Guiding agent behavior
- `docs/agents/call-stages.mdx` - Call stages workflow
- `docs/agents/testing-and-debugging.mdx` - Testing & debugging

---

### **Telephony** 🆕
- `docs/telephony/overview.mdx` - Telephony overview
- `docs/telephony/supported-providers.mdx` - Supported phone providers
- `docs/telephony/outbound-calls.mdx` - Making outbound calls
- `docs/telephony/inbound-calls.mdx` - Receiving inbound calls
- `docs/telephony/call-transfers.mdx` - Call transfers
- `docs/telephony/ivr-flows.mdx` - IVR flows
- `docs/telephony/sip.mdx` - SIP configuration
- `docs/telephony/outbound-call-scheduler.mdx` - Call scheduler

---

### **Web, Apps, Websockets**
- `docs/apps/overview.mdx` - Web apps overview
- `docs/apps/sdks.mdx` - SDK overview
- `docs/apps/websockets.mdx` - WebSocket integration
- `docs/apps/datamessages.mdx` - Data messages protocol

---

### **Tools**
- `docs/tools/overview.mdx` - Tools overview
- `docs/tools/built-in-tools.mdx` - Built-in tools
- `docs/tools/async-tools.mdx` - Async tools

#### Custom Tools
- `docs/tools/custom/overview.mdx` - Custom tools overview
- `docs/tools/custom/parameters.mdx` - Tool parameters
- `docs/tools/custom/authentication.mdx` - Tool authentication
- `docs/tools/custom/agent-responses.mdx` - Agent responses
- `docs/tools/custom/changing-call-state.mdx` - Changing call state
- `docs/tools/custom/http-vs-client-tools.mdx` - HTTP vs Client tools
- `docs/tools/custom/durable-vs-temporary-tools.mdx` - Durable vs Temporary tools
- `docs/tools/custom/parameter-overrides.mdx` - Parameter overrides

#### RAG (Retrieval Augmented Generation)
- `docs/tools/rag/overview.mdx` - RAG overview
- `docs/tools/rag/crawling-websites.mdx` - Crawling websites
- `docs/tools/rag/using-static-documents.mdx` - Using static documents

---

### **Voices**
- `docs/voices/overview.mdx` - Voices overview
- `docs/voices/cloning.mdx` - Voice cloning
- `docs/voices/bring-your-own.mdx` - Bring your own voice

---

### **Webhooks**
- `docs/webhooks/overview.mdx` - Webhooks overview
- `docs/webhooks/available-webhooks.mdx` - Available webhook events
- `docs/webhooks/errors-and-retries.mdx` - Error handling & retries
- `docs/webhooks/securing-webhooks.mdx` - Securing webhooks

---

### **Noise & VAD**
- `docs/noise/overview.mdx` - Noise handling overview
- `docs/noise/understanding-vad.mdx` - Voice Activity Detection
- `docs/noise/handling-background-noise.mdx` - Background noise handling
- `docs/noise/handling-background-speakers.mdx` - Background speaker handling

---

### **Integrations**
- `docs/integrations/voximplant.mdx` - Voximplant integration

---

### **Changelog**
- `docs/changelog/news.mdx` - Latest news & updates
- `docs/changelog/deprecation.mdx` - Deprecation notices
- `docs/changelog/migration/firstspeaker.mdx` - Migration guide

---

## 📖 API Reference

### Accounts
- `docs/api-reference/accounts/accounts-me-get.mdx` - Get account
- `docs/api-reference/accounts/accounts-me-usage-calls-get.mdx` - Get call usage
- `docs/api-reference/accounts/accounts-me-tts-api-keys-*` - TTS API keys
- `docs/api-reference/accounts/accounts-me-telephony-config-*` - Telephony config

### Agents
- `docs/api-reference/agents/agents-list.mdx` - List agents
- `docs/api-reference/agents/agents-post.mdx` - Create agent
- `docs/api-reference/agents/agents-get.mdx` - Get agent
- `docs/api-reference/agents/agents-patch.mdx` - Update agent
- `docs/api-reference/agents/agents-delete.mdx` - Delete agent
- `docs/api-reference/agents/agents-calls-*.mdx` - Agent calls endpoints

#### Scheduled Call Batches 🆕
- `docs/api-reference/agents/agents-scheduled-batches-*.mdx` - Batch call endpoints

### Calls, Messages, Stages
- `docs/api-reference/calls/overview.mdx` - Calls overview
- `docs/api-reference/calls/calls-list.mdx` - List calls
- `docs/api-reference/calls/calls-get.mdx` - Get call
- `docs/api-reference/calls/calls-post.mdx` - Create call
- `docs/api-reference/calls/calls-delete.mdx` - Delete call
- `docs/api-reference/calls/calls-messages-*.mdx` - Message endpoints
- `docs/api-reference/calls/calls-stages-*.mdx` - Call stage endpoints
- `docs/api-reference/calls/calls-tools-list.mdx` - List call tools
- `docs/api-reference/calls/calls-recording-get.mdx` - Get recording
- `docs/api-reference/calls/calls-events-list.mdx` - List events
- `docs/api-reference/calls/calls-sip-logs-get.mdx` - SIP logs

### Corpora, Query, Sources (RAG)
- `docs/api-reference/corpora/overview.mdx` - Corpora overview
- `docs/api-reference/corpora/corpora-*.mdx` - Corpus endpoints
- `docs/api-reference/corpora/corpora-sources-*.mdx` - Source endpoints
- `docs/api-reference/corpora/corpus-query.mdx` - Query corpus
- `docs/api-reference/corpora/corpora-uploads-post.mdx` - Upload files

### Tools
- `docs/api-reference/tools/tools-list.mdx` - List tools
- `docs/api-reference/tools/tools-get.mdx` - Get tool
- `docs/api-reference/tools/tools-post.mdx` - Create tool
- `docs/api-reference/tools/tools-put.mdx` - Replace tool
- `docs/api-reference/tools/tools-patch.mdx` - Update tool
- `docs/api-reference/tools/tools-delete.mdx` - Delete tool
- `docs/api-reference/tools/tools-test-post.mdx` - Test tool
- `docs/api-reference/tools/tools-history-get.mdx` - Get tool history

### Voices
- `docs/api-reference/voices/voices-list.mdx` - List voices
- `docs/api-reference/voices/voices-get.mdx` - Get voice
- `docs/api-reference/voices/voices-post.mdx` - Create/clone voice
- `docs/api-reference/voices/voices-delete.mdx` - Delete voice
- `docs/api-reference/voices/voices-put.mdx` - Replace voice
- `docs/api-reference/voices/voices-patch.mdx` - Update voice
- `docs/api-reference/voices/voice-preview-post.mdx` - Preview voice
- `docs/api-reference/voices/voices-preview-get.mdx` - Get voice sample

### Webhooks
- `docs/api-reference/webhooks/webhooks-list.mdx` - List webhooks
- `docs/api-reference/webhooks/webhooks-get.mdx` - Get webhook
- `docs/api-reference/webhooks/webhooks-post.mdx` - Create webhook
- `docs/api-reference/webhooks/webhooks-put.mdx` - Replace webhook
- `docs/api-reference/webhooks/webhooks-patch.mdx` - Update webhook
- `docs/api-reference/webhooks/webhooks-delete.mdx` - Delete webhook

### SIP Configuration
- `docs/api-reference/sip/sip-get.mdx` - Get SIP config
- `docs/api-reference/sip/sip-partial-update.mdx` - Update SIP config
- `docs/api-reference/sip/sip-registrations-*.mdx` - SIP registration endpoints

### Schema & Other
- `docs/api-reference/schema/call-definition.mdx` - Call definition schema
- `docs/api-reference/schema/base-tool-definition.mdx` - Tool definition schema
- `docs/api-reference/schema/datamessages.mdx` - Data message protocol
- `docs/api-reference/other/models-get.mdx` - List available models
- `docs/api-reference/other/schema-get.mdx` - Get OpenAPI schema

---

## 🔍 How to Search the Docs

1. **By Task**: Find what you need under the main categories above
2. **By API Endpoint**: Look in the API Reference section
3. **By Feature**: Check Getting Started, Agents, Tools, Telephony, etc.

## 📝 File Format

All documentation files are in `.mdx` format (Markdown with React components). They're organized following the Mintlify documentation structure.

---

## 🚀 Common Quick Lookups

| Need | File |
|------|------|
| Start building | `docs/gettingstarted/quickstart/agent-console.mdx` |
| Make a call | `docs/agents/making-calls.mdx` |
| Add tools | `docs/tools/custom/overview.mdx` |
| Webhook events | `docs/webhooks/available-webhooks.mdx` |
| Voice cloning | `docs/voices/cloning.mdx` |
| API keys | `docs/gettingstarted/quickstart/apikeys.mdx` |
| Call limits | `docs/gettingstarted/concurrency.mdx` |
| SIP setup | `docs/telephony/sip.mdx` |
| RAG/Search | `docs/tools/rag/overview.mdx` |
| Error handling | `docs/webhooks/errors-and-retries.mdx` |
