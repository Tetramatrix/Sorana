🚀 Sorana - The AI Visual Workspace 🚀

Sorana finds files by topic instead of folder paths, lets you chat with documents and web content, automate file tasks through conversation, and process scanned documents with OCR so they become searchable for AI. AI memory extracts facts, skills, and preferences from your chats — making answers more accurate over time. Run AI models locally so nothing leaves your machine, or connect to cloud AI.

✨ Inspiration ✨

We were frustrated by the limitations of traditional file managers. For decades, we've been forced to organize digital lives into rigid, list-based hierarchies and nested folders that hide information rather than reveal it. Our brains don't work in lists; they work through associations and spatial relationships. We wanted to build a system that reflects this—moving away from "where did I save that file?" to "what is this project about?" by using semantic and visual grouping to reveal the hidden structure of our data.

💡 What Sorana Solves 💡

• "Where did I save that file?" → Find files by topic on a visual 2D canvas within your workspace — no folder diving
• Opening and reading documents takes too long → Chat with files — ask questions, get instant answers
• Research means opening tabs, comparing, copying → One query → AI fetches, compares, saves result locally
• Repetitive file tasks are tedious → Automate via conversation: "Create folder X, move Y, rename Z"
• Scanned PDFs are blind to AI → OCR extracts text → documents become searchable
• Email management is manual and slow → Chat to search, send, label, archive emails
• AI forgets who you are after every session → Extracts facts, skills, preferences automatically — gets better over time
• Long chats are expensive and slow → Old conversations auto-compact → 93% token savings
• "Does the AI know what's in my documents?" → Adaptive document search: semantic → keyword → full-text fallback
• Data goes to cloud providers — no privacy → Run AI models locally → nothing leaves your machine
• Every answer costs the same regardless of complexity → Only relevant context loaded → fast, token-efficient answers
• "What did we discuss last time?" → All chats saved, searchable, instantly reloadable
• Only works in English → German, English, 25+ languages — auto-detected

🔑 Features in Detail 🔑

🆚 How Sorana Compares 🆚

• Local Models: ✅ Full | ❌ Cloud only (Gemini/Perplexity, ChatGPT) | ✅ Yes (OpenWebUI)
• Runs Offline: ✅ Yes | ❌ No (Cloud) | ✅ Yes (OpenWebUI)
• No Subscription: ✅ Free | ❌ $20+/month (Gemini/Perplexity, ChatGPT)
• Portable (USB): ✅ Yes | ❌ No (Cloud, Server)
• Visual File Canvas: ✅ 2D Desktop | ❌ No (all others)
• RAG (Documents): ✅ Adaptive 4-Tier | ⚠️ Upload & chat (Cloud) | ⚠️ Basic (OpenWebUI)
• Short-Term Context: ✅ Adaptive (2-20 msgs) | ✅ Session (all)
• Mid-Term Memory: ✅ Iterative summaries, smooth transition | ❌ No (all others)
• Long-Term Memory: ✅ Auto, visible, editable | ⚠️ Black box (Cloud) | ❌ None (OpenWebUI)
• Memory Export: ✅ Full control | ❌ Hidden (Cloud)
• Context Compaction: ✅ 93% token savings | ❌ No (all others)
• Only Relevant Context: ✅ Loaded first | ❌ Full context (Cloud)
• MCP Integrations: ✅ Files/Web/Gmail | ❌ Limited/Plugins (Cloud) | ⚠️ Basic (OpenWebUI)
• Vision/Image Analysis: ✅ Local + Region Selector, auto-index to RAG | ✅ Cloud only, chat only | ⚠️ Limited
• Agent Orchestration: ✅ Pipelines | ❌ No (all others)
• Agent Memory Sharing: ✅ Cross-Agent | ❌ No (all others)
• Data Privacy: ✅ 100% Local | ❌ Cloud stored (Cloud) | ✅ Local (OpenWebUI)

Note: Sorana Community Edition includes all core features. Gmail automation is slightly limited.

📂 Find Files by Topic — AI maps your files onto a 2D canvas within your workspace
Problem: "Where did I save that file?" — Navigating nested folders to find documents.
Solution: AI maps your files onto a 2D canvas by topic and relationship. See your entire project at a glance. Visually locate files by what they're about, not where they're saved.

💬 Chat with Documents
Problem: Opening, reading, and understanding documents takes too long.
Solution: Chat directly with your files (PDFs, code, text). Ask questions, get instant answers from the content — no manual reading required.

🌐 Web Content Tools
Problem: Research requires opening multiple tabs, comparing information, copying data, saving results.
Solution: Built-in web tools give your AI direct access. Fetch content, scrape pages, search the web, extract data — all through conversation. One query → complete result saved locally.
Examples: "What's the weather in Berlin?", "Compare iPhone 16 vs Samsung S25", "Fetch latest AI news and summarize"

👁️ Vision / Image Analysis
Problem: "What's in this image/screenshot/document?" — Opening images, trying to extract text or understand content manually.
Solution: Analyze images, screenshots, and documents with local AI vision models. Ask questions about image content, extract text from photos, analyze diagrams, understand charts — all through conversation. Or add image analysis results directly to your document index for future RAG searches.
Supported formats: JPEG, PNG, GIF, WEBP, BMP
How it works: Requires a vision-capable local model (Qwen3.5, Gemma 4, Llama 4 Scout, etc.). Cloud vision support coming soon.

📁 File Automation
Problem: Repetitive file tasks — creating folders, moving files, renaming, editing content — require manual clicking and navigation.
Solution: Automate file operations through natural language. "Create a folder called 'Project_X', move report.docx there, rename it to 'final_report.docx'" — done in one message.
Available operations: read, write, edit, move, search, list, create directories, get file info, get filesystem info.

📄 Document OCR
Problem: Scanned PDFs and images are invisible to AI — no text content to search or chat with.
Solution: OCR extracts text from scanned documents, images, and PDFs. Once processed, documents become fully searchable and available for AI chat and document indexing (RAG).
Supported: Text PDFs, scanned PDFs with images (requires Tesseract OCR), plain text files (UTF-8, Latin-1), source code files (.py, .cpp, .js, .java, etc.).
Note: OCR is the intermediate step — processed documents are then indexed via adaptive retrieval (semantic search → keywords → full-text fallback) so AI can find precise answers from your documents.

📧 Gmail Integration
Problem: Managing emails — searching, labeling, archiving, sending — requires manual navigation through Gmail's interface.
Solution: Full agentic Gmail control through chat. Search emails by label or date, read content, send new emails, add/remove labels, trash, or archive emails to disk (JSON, EML, MBOX formats).
Example: "Archive all project emails from 2024" — done via natural language.

🧠 AI Memory (Facts, Skills, Preferences, Personas)
Problem: AI starts from scratch every session — forgets who you are, what you do, what you prefer.
Solution: Automatically extracts facts, skills, preferences, and persona data from every conversation. Builds long-term profiles that improve answer quality over time. Memories are shared across all agents, importable/exportable, and fully manageable.

⚡ Auto-Compaction (93% Token Savings)
Problem: Long conversations become expensive and slow. AI loses context when conversations exceed token limits.
Solution: Old conversations are automatically summarized and compacted. Full context preserved at 93% fewer tokens. Configurable thresholds give you control over when compaction happens.

🔍 Adaptive Document Search (RAG)
Problem: "Does the AI know what's in my documents?" — Traditional search is rigid, either semantic OR keyword-based, and fails if one method doesn't match.
Solution: Documents are indexed with adaptive retrieval — semantic search for meaning, keyword matching for precision, full-text fallback for completeness. Extremely precise, works offline, supports 15+ languages auto-detected.

🔒 Local AI Models (Full Privacy)
Problem: Cloud AI sends your data to third-party servers. No control over what happens to your information.
Solution: Run AI models locally on your machine. Nothing leaves your computer. Full privacy, full control. Connect to OpenAI, Mistral, Gemini, Ollama, Llama.cpp, LM Studio, 🍋 Lemonade, or any compatible service when you need cloud power.

🎯 Token-Efficient Answers
Problem: Every answer costs the same number of tokens regardless of complexity. Loading full context for simple questions wastes resources.
Solution: Only relevant context is loaded. Profile-first retrieval, precise fallback. Dramatically fewer tokens, faster answers, lower cost.

💬 Chat History
Problem: "What did we discuss last time?" — Previous conversations are lost or hard to find.
Solution: All chats saved, searchable by title, instantly reloadable. Nothing gets lost. Agent remembers from your last conversation.

🌍 Multi-Language Support
Problem: AI tools only understand English.
Solution: German, English, 25+ languages for tool intents (Gmail, file ops), 15+ languages for document retrieval — all auto-detected.

📦 Portable

The application is portable — extract anywhere, run from USB, keeps data under your control. All data stored in a single .sorana/ folder. Existing installs migrate automatically.

🚀 Quick Start 🚀

📥 Download the portable archive, extract anywhere, and run Sorana.exe.

💻 System Requirements 💻

🖥️ Operating System: Windows 11 (64-bit)
🤖 AI Support: Built-in models or on-prem/remote AI services
💾 RAM: Minimum 4 GB (8 GB+ recommended for larger AI models)
💽 Storage: Minimum 2 GB (application + model)
🔑 Permissions: Standard user account

🤖 AI Model Hardware Requirements:
  • Built-in Models: Range from 1B parameter (806MB) to 20B parameter (8-16GB)
  • Recommended 8B Models (e.g., Llama 3.1 8b Instruct): Minimum 8 GB RAM or 4 GB VRAM for smooth operation
  • Hardware Requirements Increase with Model Size: Larger models with more parameters require higher specifications
  • Cloud Models: No local hardware requirements (requires internet connection)

⚙️ Installation & Setup ⚙️

🌐 Website: http://tetramatrix.github.io/Sorana
💬 Discord: https://discord.gg/4QkQSfSATF

🤖 AI Model Configuration 🤖

🧠 Built-in Models: The built-in model (~806MB) is downloaded on first run and works fully offline. It is fast, but may sometimes classify complex files as "Miscellaneous". For significantly better results, we recommend Llama 3.1 8b Instruct or higher models.

⚡ Performance Notes: For optimal performance, we strongly recommend using Llama 3.1 8b Instruct or higher models. Processing time depends entirely on the folder size - fewer files mean faster processing times. Naturally, the best performance is achieved with paid cloud services.

⚠️ IMPORTANT HARDWARE NOTE: Running larger 8B parameter models locally requires sufficient hardware - ideally 16 GB RAM or 8 GB VRAM - to function smoothly. If hardware is limited, the app includes a smaller portable model (which works fully offline but may classify complex files as "Miscellaneous") or allows connection to cloud-based LLMs for high accuracy without the local hardware cost.

📄 OCR Requirements for PDFs with Images

To enable OCR for PDFs with images, you need to install the official Tesseract OCR engine with default settings and ensure it's available in your system PATH.

📥 Download Tesseract from: https://github.com/tesseract-ocr/tesseract

🤖 Using MCP Servers

Sorana includes a visual MCP Manager — enable/disable servers, configure settings, and monitor connection health without editing config files.

To use file operations and web tools:
1. Open MCP Manager to configure and enable servers
2. Create an agent in your workspace
3. Right-click on the agent title and select "Chat"
4. Interact directly with files, folders, web content, and external services

🔗 Connecting Agents

To create agent pipelines:
🔘 Hold CTRL+ALT and click on an Agent title to get a green arrow
🔗 Point the green arrow to the parent agent to establish the connection
⚙️ In the child Agent configuration, enable 'Auto' (orchestration mode) and 'Passthrough' (pass documents)
🤝 This creates a pipeline where agents collaborate on complex tasks

📥 Downloads 📥

🔹 Latest version: Sorana.exe v1.0.24
🔢 MD5 Checksum (.exe): eb43c96b165ac9cab43cf490dc67edbb
🌐 Download: http://tetramatrix.github.io/Sorana
🏪 Microsoft Store: https://apps.microsoft.com/store/detail/9N8C43PZC1RN
💬 Discord: https://discord.gg/4QkQSfSATF





🧩 Discover our other Tools and Games:

🚀 Spaceship! 🚀

🎮 Retro Arcade 2d side-scroller bullet-hell shmup game: Spaceship

🌐 https://tetramatrix.github.io/spaceship/
🎮 https://www.indiedb.com/games/new-spaceship
🎮 https://tetramatrix.itch.io/old-school-retro-mini-game-spaceship
💬 Discord: https://discord.gg/4QkQSfSATF

🔧 RyzenZPilot! 🔧

💻 RyzenZPilot - AMD Ryzen Power Management Tool

RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

🌐 Website: http://tetramatrix.github.io/RyzenZPilot
💬 Discord: https://discord.gg/4QkQSfSATF

🖥️ Aicono - AI intelligent desktop icon autopilot 🖥️

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and can operate fully offline via manual JSON configuration when AI services are unavailable.

🌐 Website: http://tetramatrix.github.io/Aicono
📰 Softpedia: https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aicono.shtml
🏪 Microsoft Store: https://apps.microsoft.com/detail/xp8lnkj7h4b1ws
💻 Chip: https://www.chip.de/downloads/Aicono_186527264.html
💬 Discord: https://discord.gg/4QkQSfSATF

🧩 TabNeuron - AI spatial tab manager & research workspace 🧩

TabNeuron breaks your browser tabs out of the tab bar and maps them onto an infinite 2D canvas. AI automatically groups them by content, you can chat with any page or the live internet, deploy no-code research agents, and sync your layout back to Chrome Tab Groups — all from a portable desktop app that runs fully offline with a built-in model.

🌐 Website: http://tetramatrix.github.io/TabNeuron
💬 Discord: https://discord.gg/4QkQSfSATF
