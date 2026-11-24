# Sorana: Desktop AI Knowledge Workspace & Agent Harness That Never Forgets

> Sorana is a personal desktop AI knowledge workspace and agent harness: it learns from your documents, conversations, and actions and uses that memory to chat, dispatch AI agents, manage email and calendar, browse the web, analyze Git history and system logs, and run local models all in one private workspace. Give it a goal and the harness plans the steps, dispatches specialized subagents, acts with 90+ tools, and reviews its own work. Agent Sync links agents so their memory, documents, and chat sessions stay in step, on demand or on a schedule. It runs entirely on your machine and never forgets a project, preference, or decision.
>
> **Start for $0**, OpenRouter's free tier gives you a free API key (no subscription, no credits) and auto-picks the best free model for every request. Pair it with Sorana and put the agentic AI to work before adding anything else.

---

## What Is Sorana?

Sorana is a personal desktop AI knowledge workspace and agent harness for Windows, Linux, and MacOS. It learns from your documents, conversations, and actions, building a lasting memory of your projects, files, and thinking style. Open it tomorrow and it already knows where you left off. Assign any model to eight roles, from Primary and Quick to Memory, Grouping, Embed, Vision, Reviewer, and Judge, so routine work can use smaller models and keep paid cloud API costs down. When a task needs it, the harness dispatches specialized subagents to work in parallel then reviews the results before answering. Unlike chatbots that answer one question and stop, Sorana follows through on goals.

Visualize your entire knowledge base on a spatial 2D canvas. Chat with any document in plain language. Let your AI handle repetitive tasks. Organize files and music archives, analyze Git history and system logs, research topics, manage emails and your calendar, all without leaving your workspace.

**Everything runs on your machine. Your data stays yours.**

---

## Who Is Sorana For?

- **Researchers & academics**, Chat with hundreds of papers, books, and scanned notes in one place.
- **Writers & journalists**, Build a living reference library that remembers your style, sources, and ideas.
- **Consultants & freelancers**, Maintain full AI context across multiple long-running client projects.
- **Students**, Turn notes, PDFs, and lecture slides into a personal knowledge base you can talk to.
- **Job hunters**, Research companies, tailor CVs and cover letters, draft applications, send from Gmail, and add interviews to your calendar.
- **Household & personal admin**, Manage landlords, energy, telecom, repairs, doctors, and banking. Keep sensitive letters, bills, and health records off the cloud by switching to private, local models.
- **Obsidian & Notion users**, Add an AI layer that learns from your vault and can act on it.
- **Privacy-conscious professionals**, Full AI power with zero data leaving your machine.

---

## Why Sorana?

### Your AI can't think strategically
Most AI does one thing at a time. Sorana breaks a goal into steps and dispatches specialized subagents, research, code, fact-check, to work parts in parallel, then reviews the results.

- Multi-step planning for complex questions
- Parallel searches, file reads, and web fetches
- Self-review and automatic fallback strategies
- Reviews its own output before answering

### You re-explain yourself every day
Sorana quietly learns from every conversation, project, and preference. Next time you open it, you pick up exactly where you left off.

- Proactive context from recent work
- Persistent personal profile across the workspace
- No setup, no copy-pasting

### Your AI talks but can't act
Tell Sorana what to do in plain language. It organizes files, searches the web, and manages Gmail and Google Calendar, all from one conversation.

- Connect Google Drive, GitHub, Gmail, read, write, search, and manage from chat
- Read, write, move, search, edit via chat
- Web search that shows its sources

### Your knowledge lives on someone else's server
Sorana runs AI models locally. Your notes, files, and conversations never leave your machine unless you want them to.

- Lemonade, Ollama, Llama.cpp, LM Studio
- Portable: runs from a USB stick
- Cloud only when you choose

### Long conversations get slow and expensive
Auto-compaction compresses old conversations into tight summaries, cutting token use by over 90% while preserving full context.

- Dozens of messages condensed into a short paragraph
- Smart document search across your archive
- Stays fast after months of use

### Half your knowledge is locked in PDFs and images
Built-in OCR and vision AI make scanned documents, screenshots, and images searchable and chattable.

- Extract text from PDFs and images
- Vision results become searchable documents
- JPEG, PNG, GIF, WEBP, BMP

### Make the AI work your way
Do not spend a powerful model on simple steps. When your AI plans strategically, reviews its own answers, fetches web results, and routes between tools, every internal step uses a model. Sorana gives each kind of work its own role, so routine steps can run on a small, fast model while the main conversation and quality checks use stronger models. That keeps the workspace responsive and lowers paid cloud API bills.

- Quick model for fast answers and internal operations like tool calls and routing
- Memory and Grouping models for background extraction and board classification
- Embed model for RAG and semantic search
- Vision model for images, scans, and OCR fallback
- Reviewer and Judge models for independent answer quality checks
- Primary model for user conversations
- Backup per role plus one global Spare for automatic failover
- Hardware acceleration when available

### Your AI is a black box
You ask a question and get an answer, but you have no idea how it got there. Did it search your files? Read the right documents? Did it check its work or just guess? Sorana shows you every step it took: what it searched, what it found, why it chose that answer, and when it changed its mind.

- Step by step trace of searches, reads, and tool calls
- See what the AI considered and what it discarded
- Full reasoning shown before every answer
- Understand and trust the result, or tweak the approach

---

## Core Features

### A workspace that thinks for itself
Sorana breaks complex requests into step-by-step plans, runs searches and file reads in parallel, reviews its own output, and switches tactics when it gets stuck. When a task needs specialized help, the workspace dispatches subagents then assembles and reviews the results.

### Projects Canvas
A second canvas beside your Workspace board. Every project gets its own card, its own assistant, its own folder that Sorana keeps and looks after, and its own notes. Right-click the canvas to start a project, right-click a card to open or chat with it. Each canvas keeps its own view, zoom, pan, grid density, and remembered positions, and each one comes back exactly the way you left it.

### Desktop & Folder Grouping
Each board keeps its own grouping, so a desktop scan no longer wipes a folder's categories and forces a full rebuild. Start an update or a rebuild straight from the Desktop tab, watch live progress while it runs, and read the item and group counts in the toolbar for the board you are looking at.

### Music Archive Grouping
Open a Spotify export folder through Open Workspace and it behaves like any other folder. Sorana reads the zips where they are, keeps every artist rather than only the first sample, consolidates and classifies them, and lays the groups out on the canvas. A ListenBrainz history archive opens from its folder the same way. Review the categories before grouping, compare them with the original findings, and rename or drop what does not fit. The board belongs to that folder, so you can drag it, edit groups, and reopen it later. When a folder already holds a board, choose Rebuild or Update, and an Update keeps the names you reviewed. A Spotify import also becomes a listening history you can question in plain language, answered from the archive itself with no account to connect.

### Multi-source Workspace
Open Workspace now holds more than one folder at a time. Add folder... puts another folder beside the root, and every visible folder is drawn as its own frame on the same canvas. Each frame is a complete board with its own groups, grid, agent cards, grouping context and intel, so nothing is merged, copied or overwritten. Folders that really sit inside one another are joined by a folder connector, and the layer map jumps to any frame. Composition view keeps every frame on screen with one shared camera, and whole groups and agent cards can be dragged inside any writable frame. Open layer gives that folder its own full view, and the Graph button opens the whole composition as one 3D graph with layer nodes and inter-layer links, or a single layer's own graph.

### Agent Budgets & Limits
Set a daily usage limit per agent from the Health Dashboard through a guided wizard, and track it in real time. Leave the field blank to use the app default or set 0 for no per-agent limit. Usage refreshes automatically and spend resets at local midnight, and withheld calls are reported honestly rather than silently truncated.

### Local & Global Memory
A living knowledge profile captures facts and project context. Remembers what matters, spots contradictions, and scores importance automatically. Maintain both scoped local memories and a persistent global memory, and sync them anytime. When you decline a proposed action, the agent remembers the pattern and adapts future suggestions to your preferences.

### Visual Knowledge Canvas
See your files arranged by topic on a 2D canvas. Drag, drop, resize, and generate mind maps to reveal hidden relationships.

### 3D Knowledge Graph
Draw a grouped folder, or your agent memory, as a 3D scene with one hub per category and everything shaded from its hub. Dim what does not match a text or category filter, reshape the scene with size, runtime and age filters, and click any item to open an inspector. The graph reads the saved grouping and never moves anything on the board.

### Chat with Documents & OCR
Extract text from PDFs, documents, and images with built-in OCR. Chat with any document to get answers and make your whole archive searchable. Double-click a document in the Library to read its text; Show Content and View Details are separate actions in the context menu.

### RAG Knowledge Base
Turn your documents, notes, and web pages into a searchable knowledge base. Sorana retrieves the right context automatically so answers stay grounded in your own data. Every answer lists the sources it used, filtered by relevance so you only see what mattered.

### Publication Ledger
Every research answer arrives with structured citation claims, and the app keeps a ledger of what was published with a daily report. Attach several files to one message, let independent tools run in parallel, and approve agent actions in a dedicated dialog before anything goes out.

### Supercharged Chat & MCP Tools
Your AI brain connected to your knowledge and everything you can act on: web, email, calendar, files, and any other tool you connect. You stay in control while your agent works across all of them at once. Swap agent personas on the fly with the Prompt Manager. Every session is archived with full Markdown, reasoning, and tables, so you never lose context. A prompt rail down the chat's right edge shows one dash per prompt: hover to read it, click to jump there, or step with Alt+Up and Alt+Down. The Manage Agent Chats tab lists every chat with its message and compaction counts, where you can read a transcript, compact several behind one confirmation, or delete from the row menu.

### Calendar & Scheduling
Connect Google Calendar and manage your schedule from chat. Create events, find free slots, and let Sorana plan your day.

### Model Manager
Browse, expand, and collapse models from 25+ providers and local sources. Assign any model to eight role slots: Primary, Quick, Memory, Grouping, Embed, Vision, Reviewer, and Judge. Put smaller models on routine roles to keep work fast and cloud AI bills low, then set a Backup per role plus one global Spare for automatic failover. Mark favorites, sort by any column, and probe capabilities before you commit.

### Specialized Subagents
When a task needs it, Sorana dispatches specialized subagents, web research, code analysis, and fact-check to work in parallel with their own budgets, then reviews the results before answering.

### Agent Sync
Link one anchor agent to other agents and keep their memory, documents, and chat sessions in step. The System Agent and every project agent are listed automatically, and a workspace agent joins when you point at its folder. Members are not linked to each other. Each link can carry memory, documents, chats, or any combination, with Memory only as the recommended default. A stream can push from the anchor to its members, pull from a member into the anchor, or run both ways, and each member can override the direction. Run a sync by hand, use Dry run first to preview the changes, or sync automatically every 5 minutes, 15 minutes, hour, 6 hours, or once a day while Sorana is open. Every run reports copied, updated, skipped, and error counts, and a moved workspace can be relinked without losing the saved constellation.

See the [Agent Sync FAQ](https://tetramatrix.github.io/Sorana/#agent-sync-faq) for the short version.

### Eight Model Roles + Failover
Assign any model to eight role slots: Primary (main conversation), Quick (fast answers and internal operations), Memory (extracts memories), Grouping (classifies boards), Embed (indexes documents for search), Vision (reads images and scans), Reviewer (independent second opinion on answer quality), and Judge (scores the final answer). Put a smaller, carefully selected model on Quick, Memory, Grouping, and Embed to make routine work faster and cheaper, including lower bills when those roles use paid cloud services, and keep a stronger model on Primary, Reviewer, or Judge where quality matters. Set a Backup model per role and one global Spare so a dead provider never interrupts your work; Sorana hops to healthy alternatives automatically.

### Model Probing
One click tests if a model can reason, see images, or handle audio, so you know what it can do before relying on it.

### Prompt Manager
Create, organize, and assign prompt pairs to any agent from a central library. 20+ categories, one-click assignment, no file editing.

### MCP Manager & Marketplace
Browse, install, and manage MCP servers from a central marketplace. Extend Sorana with new tools and integrations without touching configuration files. See the MCP Servers section below for what ships today.

### Health Dashboard
Monitor system health, model status, and AI performance at a glance. Each card opens a mini wizard for guided installation and configuration of every dependency, including backends, OCR, search engines, HuggingFace cache, codebase search, MCP, and more.

### Report a Bug From Inside the App
A Report A Bug button on the top bar opens a dialog with four ways to send it: an anonymous report, a prefilled GitHub issue, copy to clipboard, or Discord. Recent log diagnostics are attached, so the report arrives with the evidence.

### Obsidian Export
Use Sorana as your AI workspace, then export spatial groupings and graph relationships straight into your Obsidian vault.

### Agent guardrails
Oversee and control what your agent can do. Set permissions for tasks like writing files, reading data, or sending email, so the AI stays within the boundaries you define.

### Themes
Choose the look that fits your workflow. Pick from different color schemes and visual themes to make Sorana feel like yours.

### Agent Trace & Debug
Watch your AI think step by step. See what it searched, what it found, and why it chose each answer. Helps you trust the result or tweak the approach.

### Code Explorer
Got a folder of code? Sorana reads it, searches it, and answers questions about it, like a teammate who already knows the project. It can also find where a symbol is defined and where it is used, and one search can cover more than one project root.

### Git Repository Analysis
Open a local Git repository in place, or paste a remote https, ssh, git or file URL and Sorana keeps a local clone. It reads the commit history, groups commits by the area of the codebase or the kind of work they describe, and lays them out as a workspace board. Each item carries its authors, changed files and date range. Reopen the board later, inspect it in the 3D graph, and ask which area changed most, when a feature landed, or what a release contained.

### System Log Analysis
Open a log file, a folder of logs, or a platform system log such as Windows System, Windows Application, journald, or macOS. Sorana aggregates thousands of events, groups them by event kind, and lays them out on the workspace canvas. Ask what failed, what changed, or when a service last restarted, with the event details attached.

### Tesseract Image OCR

Use Tesseract for image OCR on scanned photos, screenshots, and other images. When a vision-capable model is available, it can read the image directly as a fallback.

---

## Examples in Action

Real things you can say to Sorana. No special syntax, no prompts to craft.

### Memory & Knowledge
- "Remember that my preferred working hours are 9am to 4pm"
- "What did I learn about project budgeting last week?"
- "Research electric car trends and save the key facts so I can find them later"
- "Read this research paper and save the key findings to my notes"
- "Compare what I know about option A versus option B from past research"

### Research & Writing
- "Summarize this document for me"
- "Read these three articles and draft a summary memo, then save it to my project folder"
- "Find relevant studies on this topic and add them to my knowledge base"
- "Search my notes for the client meeting summary and send a follow up email"
- "Organize this folder of research papers into topic groups and summarize each one"

### Tasks & Scheduling
- "Send an email to the team about the project update"
- "What meetings do I have today?"
- "Review the project brief, draft a response, and add the deadline to my calendar"
- "Find free slots this week for a team review"
- "Remind me about the invoice deadline next Friday"

### Job Hunting
- "Research this company's recent projects and leadership"
- "Draft a cover letter using my CV and the job description I saved"
- "Review my application and suggest improvements"
- "Send a follow up email to the hiring manager"
- "Add the interview date to my calendar and set a reminder"

### Email & Calendar
- "Show me unread emails from today"
- "Draft a reply to this email about the project timeline"
- "Schedule a meeting with the team next Tuesday at 2pm"
- "Find my dentist appointment this month"
- "Send meeting notes to everyone who attended"

### Files & Documents
- "Show me all files in the project folder"
- "Rename report_draft.docx to report_final.docx"
- "Find all PDFs created this week"
- "Create a new folder called Budget 2026"
- "Copy the meeting notes to the shared folder"

### Household & Personal
- "What bills are due this month?"
- "Compare internet plans from local providers and save the best option"
- "Scan this letter and extract the important details to my knowledge base"
- "Search my archives for the insurance policy and summarize the coverage"

### Music & Listening History
- "Open this Spotify export and group the artists on the canvas"
- "Who are my top 20 artists this year?"
- "Which artists did I love years ago but never play anymore?"
- "Show my listening and skip statistics for the last month"
- "Search my plays for an artist and tell me how much of the export is covered"
- "What did I play most this week?"

### Multi-source Workspace
- "Add a second folder beside the root and see both boards on one canvas"
- "Switch to composition view and drag a group between frames"
- "Open the composition graph to see every layer and its links"
- "Jump to any frame from the layer map"

### Agent Sync
- "Link the System Agent to my project agent and sync memory both ways"
- "Preview this sync with Dry run and show me what would move"
- "Sync this link every hour while Sorana is open"

### Git & System Logs
- "Open this repository and group its commits by area"
- "Which part of the codebase changed most last month?"
- "When did the authentication work land?"
- "Open the Windows System log and show me what failed after the last update"
- "Which security events happened in the last 24 hours?"

### Crypto & Market Data
- "What is bitcoin's price in USD right now?"
- "What is Bitcoin Cash trading at right now?"
- "Show ethereum's 24h change and market cap"
- "Compare bitcoin and ethereum by market cap"
- "List the top 10 coins by market cap"
- "Show bitcoin's price over the last 30 days"

### ToolForest
- "Summarize the most recent emails across all my connected Gmail accounts"
- "Using GDELT, what is the most-reported event in Iran this week, and which outlets covered it?"
- "According to my Oura data, am I recovered enough to train hard today?"
- "What moved this Kalshi market, and when?"
- "Map the collaboration web around this band on MusicBrainz"
- "Turn this article into clean flashcards in a new Anki deck"

### I Ching Oracle
- "When will this run of bad luck end? Let the oracle answer."
- "Should I take the job offer? Ask the I Ching."
- "What does the hexagram say about my relationship?"
- "What should I focus on this week? Consult the oracle."
- "Is now a good time to start something new? Ask the I Ching."
- "Which hexagram speaks to my situation right now?"
- "Twenty months of bad luck and still no job: hundreds of applications, hundreds of invitations, only rejections. When does this streak end?"

### Workflows & Pipelines
- "Draft a project report, review it for gaps, and polish the final version"
- "Research this topic, write a blog post, and have a second agent fact check every claim"
- "Read these requirements, draft a technical spec, and review it for clarity"
- "Analyze this customer feedback, summarize the key themes, and draft a response plan"
- "Review this code change for bugs, suggest improvements, and generate a summary"

---

## How Sorana Compares

| What you get | Sorana | Obsidian / Notion | ChatGPT / Claude / others |
|---|---|---|---|
| Runs fully offline & private | Your machine, your data. No internet needed. | Obsidian local / Notion cloud | Cloud only. Your data on their servers. |
| Model flexibility | 25+ providers + capability probing | N/A | Locked to one vendor |
| Eight Model Roles + Failover | Assign any model to eight role slots (Primary, Quick, Memory, Grouping, Embed, Vision, Reviewer, and Judge). Put smaller models on routine roles to lower paid cloud bills, and set a Backup per role plus one global Spare for automatic failover. | N/A | One model for everything |
| Multi-agent orchestration | Specialized subagents work in parallel with their own budgets when the workspace needs them. | Simple automations only | Basic workflows / skills (paid) |
| Agent Sync | Link one anchor agent to other agents and keep memory, documents, and chat sessions in step, by hand or on a schedule, with per member direction overrides. | Not available | Not available |
| Agent Trace & Debug | Watch your AI think step by step. See what it searched, what it found, and why it chose each answer. | No AI agent transparency | No agent tracing available |
| Sources you can verify | Every answer lists the web pages and documents it used, filtered by relevance. | N/A | Basic citations on paid tier only |
| Portable | Runs from a USB stick | App install required | Cloud / web only |
| AI takes action | Built-in automation on files, web, email | View & edit only | Paid connectors with separate setup |
| Goal-driven autonomy | Plans multi-step work, dispatches subagents when needed, acts with tools, and reviews its own work before answering | No autonomous agent | Agent mode / workflows (paid) |
| Visual knowledge canvas | AI-organised 2D canvas | Manual (Obsidian Canvas) | Chat only |
| Chat with documents | Workspace-wide RAG indexing | Plugin required | Project uploads + per-session |
| Image OCR & Vision AI | Built-in OCR + AI fallback | External tools required | Cloud-only vision |
| Tool integrations | Built-in MCP servers incl. Spotify and ListenBrainz music history and the I Ching oracle, plus ToolForest with 30+ toolkits over one connection, keyless CoinGecko crypto market data, and the TMDB movie and TV database | No native AI agents | Connector marketplaces (paid) |
| Calendar & Scheduling | Manage via chat | View-only plugins | Connector (paid) |
| AI remembers you | Automatic memory across sessions, all categories free | Manual notes only | Basic free notes only; full memory paid |
| Stays fast over months | Auto-compaction | No AI context | Varies (Claude yes, others no) |
| Cost | Free app today (planned premium optional) + OpenRouter's free tier or your API keys (or free local) | Free + paid tiers | $8-200/month included |

---

## Quick Start

1. **Download** for [Windows](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana.exe), [Linux (portable)](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana), Linux [.deb](https://github.com/Tetramatrix/Sorana/releases/latest), Linux [.rpm](https://github.com/Tetramatrix/Sorana/releases/latest), or [MacOS](https://github.com/Tetramatrix/Sorana/releases/latest)
2. **Run** anywhere, desktop, USB, external drive
3. **Choose a model**, use a free cloud model with your own API key (OpenRouter's free tier costs nothing), or run local models through Lemonade, Ollama, or LM Studio
4. **Start working**, add your files, chat with documents, and let Sorana remember your projects and preferences

**Download**: [Sorana.exe](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana.exe) · [Linux portable](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana) · [Linux .deb](https://github.com/Tetramatrix/Sorana/releases/latest) · [Linux .rpm](https://github.com/Tetramatrix/Sorana/releases/latest) · [Sorana.zip (MacOS)](https://github.com/Tetramatrix/Sorana/releases/latest)  
**Microsoft Store**: [Get from Store](https://apps.microsoft.com/detail/9n8c43pzc1rn)

**Linux checksums**

Linux package names carry the version, so their SHA-256 values change on every release. Open the Linux option on the [website](https://tetramatrix.github.io/Sorana/) to see the checksums for the current release.

---

## System Requirements

| Component | Minimum |
|---|---|
| OS | Windows 11 (64-bit), modern Linux (Ubuntu 20.04+, glibc-based), or MacOS |
| RAM | 4 GB (8 GB+ recommended for local AI models) |
| Storage | 2 GB (app + model) + `.sorana/` data folder |
| AI | Built-in offline model included; local or cloud AI optional |

### AI Model Options
- **Built-in model** (~806 MB), works fully offline out of the box
- **Recommended**: Llama 3.1 8B Instruct or higher for best results (requires 8 GB RAM / 4 GB VRAM)
- **Cloud**: OpenAI, Mistral, Gemini, DeepSeek, NVIDIA, OpenRouter (free tiers available), no local hardware required
- **Local servers**: Lemonade (NPU acceleration), Ollama, LM Studio, Llama.cpp

**30+ free cloud models** from every major provider, plus unlimited local models. Just add your API key.

---

## Obsidian Integration

Sorana connects directly to your Obsidian vault:

- **Export to Canvas**, bring your AI-organized workspace layout into Obsidian's infinite Canvas
- **Export to Graph View**, generate a knowledge graph from your workspace structure, compatible with Obsidian's Graph View
- Full compatibility with Dataview, Templater, Excalidraw, and all other Obsidian plugins
- Standard Markdown files, no lock-in

---

## MCP Servers

Sorana reaches tools over MCP on three paths, all managed from the **MCP Manager** with no config files to hand-edit.

### Built-in servers

These servers ship with the app. Most are enabled by default, and each can be switched per agent.

| Server | What it gives the agent |
|---|---|
| **Memory** | Long-term memory storage, search, consolidation, and export |
| **Filesystem** | Read, write, search, and move local files and folders |
| **Web search** | Search the web and read the pages it finds |
| **Gmail** | List, read, send, label, trash, and archive email |
| **Calendar** | Read schedules, create and update events, find free slots |
| **Chat sessions** | Inspect and manage session messages, context usage, and compaction |
| **ListenBrainz** | Your music listening history (new, see below) |
| **Spotify** | Your imported Spotify listening history and artist board (new, see below) |
| **I Ching oracle** | Cast and read hexagrams in plain language (new, see below) |

### ListenBrainz (built-in, new)

Ask your assistant about years of music listening in plain language. 54 tools cover public charts, your own listening history, and a full local archive of everything you have ever played.

- **Public charts and top artists** — the sitewide chart plus your own most played artists over a week, month, year or all time
- **Now playing and recent listens** — what is playing right now, and your last 100 listens with time bounds and paging
- **Full history export** — ListenBrainz only releases a complete history through its export API, so Sorana queues the export as a background job, downloads it, and imports it locally. The import resumes automatically if it is interrupted, never double counts, and keeps running while you keep working
- **Queries across the imported archive** — top artists over any date range, full history for one artist, and a rediscovery tool that finds artists you played heavily years ago and have not played since

Setup is one step: paste your ListenBrainz user token (found in your ListenBrainz profile settings) into the Configure dialog. Ask things like "my top 50 artists this year", "what am I playing right now", "export my full history", or "which artists did I love years ago but never play anymore".

### Spotify archive (new)

Open a Spotify export through Open Workspace and Sorana treats it like any other folder: it reads the zips where they are, keeps every artist, and classifies them into groups on the workspace canvas. Review the categories before grouping, then drag the saved board or reopen it later; when the folder already holds a board, choose Rebuild or Update, and an Update keeps the names you reviewed. The same import turns those plays into a listening history you can question in plain language, so the answers come from the export itself with no account to connect and nothing to sync.

- **Artist grouping** — the export's artists consolidated, classified, and laid out on the canvas, ready to drag, rename, and reopen with the folder
- **Listening history** — top artists, tracks, and albums in a period, recent plays, listening and skip statistics, and a search across your plays
- **Forgotten favourites** — artists you played heavily years ago and have not played since
- **Coverage** — how much of the export the imported history covers

Ask things like "Open this Spotify export and group the artists", "Who are my top 20 artists this year?", "Which artists did I love years ago but never play anymore?", or "Show my listening and skip statistics for the last month".

### I Ching oracle (built-in, new)

Ask in your own words and Sorana casts the reading and then reads it back: what was drawn, what it says about your situation, where the moving lines are heading, and one step worth taking next. The more of the situation you give, the more there is to read against. The classical translations stay underneath, the Wilhelm and Talis English versions plus a German translation, for when you want to read the source yourself.

- **Draws and readings** — a full interpretation packet with the primary draw, or a simple reading with the primary and derived hexagrams
- **Moving lines and derived hexagrams** — the changing hexagram, the nuclear hexagram, and where the moving lines are heading
- **Classical texts** — the Wilhelm, Talis English and German translations under the plain words
- **A browser home** — [tetramatrix.github.io/hexagram](https://tetramatrix.github.io/hexagram/) is the standalone hexagram reader, for looking one up without the chat

The reading is offered as a mirror for reflection rather than a forecast you should bet on, and Sorana says so when it matters. Ask things like "When will this run of bad luck end? Let the oracle answer.", "Should I take the job offer? Ask the I Ching.", "What should I focus on this week? Consult the oracle.", or "Which hexagram speaks to my situation right now?".

### CoinGecko (marketplace, new)

Ask for crypto prices in plain language. Every price comes straight from CoinGecko's API, so it is today's number rather than one the model remembered. The endpoint needs no account and no API key, so you can add it from the marketplace and start asking straight away.

- **Live prices** — the current price of any coin in any supported currency
- **Market cap and volume** — market capitalisation, 24 hour change and trading volume, plus the top coins by market cap or by volume
- **Price history** — how a coin's price moved over a period such as the last 30 days
- **Coin metadata** — name, symbol, rank and related details

Setup is one step: add CoinGecko from the marketplace and enable it for the agent. Ask things like "What is bitcoin's price in USD right now?", "What is Bitcoin Cash trading at right now?", "Compare bitcoin and ethereum by market cap", or "List the top 10 coins by market cap".

### ToolForest (marketplace, new)

ToolForest is a hosted MCP aggregator that gives you 30+ toolkits over a single remote connection, with nothing to install. Add your API key, authorize the toolkits you want at [app.toolforest.io](https://app.toolforest.io), and Sorana discovers the available tools step by step before calling them. ToolForest tools are separate from the built-in Gmail, Calendar, ListenBrainz and Spotify servers above.

Toolkits grouped in domains:

- **Google Workspace** — Docs, Sheets, Slides, Gmail, Calendar, Tasks, Drive
- **Music** — ListenBrainz, MusicBrainz, Last.fm, Apple Music
- **Health & Fitness** — Fitbit, Oura Ring, Google Health
- **Prediction Markets** — Kalshi, Polymarket, Gemini, Metaculus, Rothera
- **Social** — X (Twitter), Reddit
- **Learning** — Anki, Mochi
- **Planet Earth** — GDELT, Geo, Earth Observation, Google Earth Engine
- **Other** — GitHub, Notion

Highlights:

- **GDELT** — global news coverage and machine-coded events by place, actor, theme and tone, including the headlines and the outlets behind each event. No API key needed.
- **Kalshi and Polymarket** — public prediction market odds and price history. No account needed.
- **Earth Observation** — Sentinel satellite imagery of an area over time, so you can ask what changed on a coastline.

Ask things like "Summarize the most recent emails across all my connected Gmail accounts", "Using GDELT, what is the most-reported event in Iran this week, and which outlets covered it?", "According to my Oura data, am I recovered enough to train hard today?", or "What moved this Kalshi market, and when?".

### TMDB (marketplace, new)

The marketplace ships TMDB, The Movie Database for films, series and people. Search any title, show or person and get the full record, discover by genre, date or rating, see what is trending, and find out where a title streams in your region. Every tool is read only.

- **Search and details** — resolve a name to a title, then pull the movie, show, season or person record with cast and crew, ratings, trailers and recommendations
- **Discover** — filtered queries by genre, release date, vote average, cast, crew, network or streaming provider
- **Trending** — what is hot today or this week
- **Watch providers** — streaming, rent and buy providers for a region such as US or DE

Setup is one step: paste your free TMDB read access token from the TMDB settings page into the Configure dialog. TMDB labels both values an API key there; the v4 read access token is the one that works. Node.js 24 or newer is required. Ask things like "What is trending this week?", "Where can I stream Dune Part Two in Germany?", "Show me the cast of The Wire.", or "Find movies like Blade Runner 2049."

---

## Using MCP Automation

1. Open **MCP Manager** and enable the servers you need
2. Create an **agent** in your workspace
3. Right-click the agent title → **Chat**
4. Give instructions in plain language, files, web, email, all accessible

Add external servers from the marketplace: the ToolForest aggregator for 30+ toolkits over one connection, the keyless CoinGecko server for crypto market data, or the TMDB movie and TV database for films and series.

---

## OCR for Scanned Documents

To enable OCR on PDFs with embedded images, install [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) and ensure it is in your system PATH. Once installed, Sorana processes scanned documents automatically, making your entire paper archive searchable. A vision-capable model can read images directly as a fallback.

---

## Links

- **Website**: [tetramatrix.github.io/Sorana](https://tetramatrix.github.io/Sorana)
- **Agent Sync FAQ**: [tetramatrix.github.io/Sorana/#agent-sync-faq](https://tetramatrix.github.io/Sorana/#agent-sync-faq)
- **Changelog**: [tetramatrix.github.io/Sorana/Changelog.html](https://tetramatrix.github.io/Sorana/Changelog.html)
- **Release feed**: [feed.xml](https://tetramatrix.github.io/Sorana/feed.xml)
- **Download**: [Windows](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana.exe) / [Linux portable](https://github.com/Tetramatrix/Sorana/releases/latest/download/Sorana) / [Linux .deb](https://github.com/Tetramatrix/Sorana/releases/latest) / [Linux .rpm](https://github.com/Tetramatrix/Sorana/releases/latest) / [MacOS](https://github.com/Tetramatrix/Sorana/releases/latest)
- **Source**: [GitHub Repository](https://github.com/Tetramatrix/Sorana)
- **Discord**: [discord.gg/4QkQSfSATF](https://discord.gg/4QkQSfSATF)
- **Microsoft Store**: [apps.microsoft.com](https://apps.microsoft.com/detail/9n8c43pzc1rn)
- **Support**: [Support Page](support.html)

---

## Reviews & Coverage

Independent reviews of Sorana, with the score each outlet gives where it publishes one:

| Outlet | Date | Score |
|---|---|---|
| [MalwareTips Forums](https://malwaretips.com/threads/sorana-the-desktop-ai-knowledge-workspace-free.148839/) | 2026-11-14 | not scored |
| [MajorGeeks](https://www.majorgeeks.com/files/details/sorana.html) | 2026-11-11 | 5/5 |
| [CHIP](https://www.chip.de/download/office-produktivitaet-finanzen/sorana_58681706-33e8-4241-b0d2-7c59e561efc9.html) | 2026-11-11 | 4/5 |
| [wischtig.de](https://wischtig.de/blog/dateien-mit-sorana-sortieren) | 2026-08-19 | not scored |
| [Warp2Search](https://www.warp2search.net/story/sorana-10770-released/) | 2026-07-30 | not scored |
| [TrishTech](https://www.trishtech.com/2026/05/sorana-the-private-ai-workspace-that-never-forgets-you/) | 2026-05-27 | not scored |
| [Softpedia](https://www.softpedia.com/get/System/File-Management/Sorana.shtml) | not stated | 4/5 editorial, 4.8/5 from 213 reader votes |
| [PoweredByAI](https://poweredbyai.app/project/sorana) | not stated | not scored |
| [MCPMarket](https://mcpmarket.com/es/server/sorana) | not stated | not scored |

Each score is the outlet's own, on the scale that outlet publishes. Softpedia publishes two: the editorial rating its tester gave, and the average of its readers' votes, so both are listed. Where an outlet has not scored Sorana, the table says so instead of estimating one. Short quotes from these reviews appear in the [testimonials section of the site](https://tetramatrix.github.io/Sorana/#testimonials).

---

## Other Tools by Tetramatrix

- **TabNeuron**, AI spatial tab manager & browser research workspace
- **Aicono**, AI intelligent desktop icon organizer
- **RyzenZPilot**, AMD Ryzen power management tool
- **Spaceship!**, Retro 2D arcade game

---

## Chat experience

Sorana is designed to make AI conversations useful, readable, and easy to continue:

- **Clear, easy-to-scan answers**, important details stand out instead of getting lost in a wall of text. Comparisons can be presented as clean, readable tables.
- **Context that stays with your work**, Sorana remembers relevant facts, preferences, and project details, so you spend less time repeating yourself.
- **Chat with your files**, ask questions about PDFs, documents, scans, and images in plain language. Sorana finds the useful information inside your archive.
- **Goal-driven execution from one conversation**, give Sorana a goal and it plans and works through it across your files, email, and calendar while you stay in control.
- **Long conversations stay on track**, older parts are quietly condensed while important details remain available, keeping long-running projects easier to continue.
- **Workflows for bigger tasks**, break complex work into connected steps, using a ready-made template or creating your own.
- **A clearer view of the work**, when available, follow what Sorana searched, found, and used to build an answer, so you can better understand and guide the result.

Formatted responses can include headings, emphasis, links, and comparison tables, making research, planning, writing, and document work easier to follow from the first question to the final result.

---

Developed by **Tetramatrix** | Your desktop AI knowledge workspace and agent harness | Portable and private
