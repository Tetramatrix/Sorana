🚀 Sorana - The AI Visual Workspace 🚀

Sorana is an AI-powered visual workspace that transforms how you organize and interact with digital files. Using semantic AI analysis, it automatically groups related files and folders onto a spatial 2D canvas, replacing traditional hierarchies with intuitive visual layouts. Build drag-and-drop workspaces and no-code agent pipelines, connect to on-prem or cloud AI backends (OpenAI, Mistral, Lemonade, Ollama), and keep your data under your control.

✨ Inspiration ✨

We were frustrated by the limitations of traditional file managers. For decades, we've been forced to organize digital lives into rigid, list-based hierarchies and nested folders that hide information rather than reveal it. Our brains don't work in lists; they work through associations and spatial relationships. We wanted to build a system that reflects this—moving away from "where did I save that file?" to "what is this project about?" by using semantic and visual grouping to reveal the hidden structure of our data.

🔑 Key Features 🔑

🤖 Spatial AI Organization: Uses AI to semantically group files and arrange them on a 2D canvas, providing a visual overview of projects.
🎨 WYSIWYG Canvas Editor: Direct manipulation of workspace elements. Drag and drop files between groups, create new categories, rename items, and adjust group boundaries.
🧠 Advanced Model Management: Connect to multiple cloud, on-prem and local LLM backends including OpenAI, Mistral, Lemonade, Llamacpp, LM Studio, Ollama and many other compatible services. The model manager lists all available models and allows users to activate or deactivate models as needed for specific tasks.
  • Local and On-Prem Services: Lemonade, Llamacpp, LM Studio, Ollama and other self-hosted LLM solutions
  • Cloud Services: OpenAI, Mistral, Gemini and other cloud-based AI platforms
  • Flexible Configuration: Easily switch between different AI backends based on your needs, privacy requirements, and performance considerations
  • Split View (Lemonade only): When using Lemonade, the model manager shows chat models (upper pane) and embedding models (bottom pane) side by side. Embedding models power semantic RAG search. Without an embedding model, the system falls back to BM25 → Keyword → Full Text. Currently only Lemonade supports multi-model loading.
🤖 No-Code Agent Orchestration: Build custom agents and connect them into intelligent pipelines using a simple drag-and-drop interface. Agents collaborate by passing insights from one to another to solve complex problems, all without writing code.
💬 Contextual Document Chat: Interact directly with your files (PDFs, code, text) in interactive mode, and enhance agent capabilities by connecting relevant documents to their context.
🗺️ Dynamic Structure Mapping: Visualize the big picture. Generate mind maps of your folder hierarchies to reveal relationships and structure.
🔧 Built-in MCP Manager & Server: Visual MCP Manager for configuring and enabling servers. Integrated server supporting advanced file operations and web content access through AI agents. Connect any third-party external MCP server (Google Drive, GitHub, PostgreSQL, custom tools) for unlimited extensibility:
  • MCP Manager: Enable/disable servers, configure settings, monitor connection health
  • External MCP Servers: Connect any compatible MCP server — Google Drive, GitHub, PostgreSQL, databases, custom APIs, and more
  • Mix & Match: Use multiple servers simultaneously for complex workflows
  • OAuth2 Support: Secure authentication for cloud services
  • File Operations: read_file, read_file_from_line, write_file, list_directory, create_directory, move_file, search_files, get_file_info, edit_file, get_filesystem_info
  • Web Content Tools: web_fetch_content, web_scrape_page, web_extract_links, web_search, web_get_metadata, web_save_snapshot
  • Gmail MCP Server: Full agentic Gmail control — list, get, send, label, trash, archive emails in JSON/EML/MBOX formats
  These operations are accessible through selected LLMs, enabling sophisticated file management workflows.
🧠 Adaptive 4-Tier AI Memory: Auto-extracts facts, preferences, and skills from conversations. Profile-First retrieval saves 61% tokens, conversation compaction saves 93%. Cross-agent memory sharing, import/export, full control.
🔀 Intelligent Router & Intent Engine: Smart tool call routing, intent classification, entity extraction, max 3 tool calls per request (loop prevention). English + German for memory routing, 25+ languages for tool intents.
💬 Chat History & Conversation Management: All your past conversations are stored in a sidebar. Search, reload, and delete chats. Nothing gets lost. Agent remembers from your last conversation.

📦 Portable: The application is portable and keeps data under user control.

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
🎨 Visual Workspace Features 🎨

🤖 Spatial AI Organization: AI automatically groups and arranges files on a 2D canvas for intuitive project visualization
🎨 Interactive Canvas: Drag and drop files, create categories, rename items, and adjust group boundaries directly on the canvas
🔗 Visual Connections: Create connections between agents and documents using visual arrows and interfaces
🗺️ Mind Map Generation: Generate visual representations of folder hierarchies to understand relationships and structure

🤖 AI Model Configuration 🤖

🧠 Built-in Models: The built-in model (~806MB) is downloaded on first run and works fully offline. It is fast, but may sometimes classify complex files as "Miscellaneous". For significantly better results, we recommend Llama 3.1 8b Instruct or higher models.

⚡ Performance Notes: For optimal performance, we strongly recommend using Llama 3.1 8b Instruct or higher models. Processing time depends entirely on the folder size - fewer files mean faster processing times. Naturally, the best performance is achieved with paid cloud services.

⚠️ IMPORTANT HARDWARE NOTE: Running larger 8B parameter models locally requires sufficient hardware - ideally 16 GB RAM or 8 GB VRAM - to function smoothly. If hardware is limited, the app includes a smaller portable model (which works fully offline but may classify complex files as "Miscellaneous") or allows connection to cloud-based LLMs for high accuracy without the local hardware cost.

🎯 Accuracy Considerations: May sometimes classify complex files as "Miscellaneous"; connect larger, on-prem or cloud models for improved accuracy
⏱️ Processing Time: Varies based on folder size and available hardware. Processing time is directly proportional to the number of files - fewer files result in faster processing.

📄 Document OCR 📄

Sorana includes powerful Optical Character Recognition (OCR) capabilities for processing various document types with support for common character encodings:

📄 Text PDFs: Extract text from PDF documents (supports embedded text and OCR for scanned content)
📝 Plain Text Files: Process .txt files with support for:
  • UTF-8 (recommended for full Unicode support)
  • Latin-1 (ISO-8859-1) as fallback encoding

💻 Code Files: OCR support for source code files including:
  • Python (.py), C++ (.cpp), JavaScript (.js), Java (.java)
  • C# (.cs), PHP (.php), Ruby (.rb), Go (.go)
  • TypeScript (.ts), Swift (.swift), Kotlin (.kt)
  • And other common programming language files in UTF-8 or Latin-1 encoding

🖼️ PDFs with Images: Built-in method for OCR processing of PDFs containing images

🔧 Requirements for PDF Image OCR:
To enable OCR for PDFs with images, you need to install the official Tesseract OCR engine with default settings and ensure it's available in your system PATH. Tesseract is an open-source OCR engine that provides high-quality text extraction from images.

📥 Download Tesseract from: https://github.com/tesseract-ocr/tesseract

📄 Document OCR and Context Enhancement 📄

Document OCR and Context Enhancement allows users to enrich agents with specific knowledge by dragging and dropping documents directly onto agents. After organizing files spatially, users can make documents accessible to agents by processing them through OCR, converting them into contextual information. This is accomplished via the context menu options 'Document Overview' and 'Process Documents,' which is particularly valuable for PDFs and image-based documents.

It's important to distinguish this from MCP server functionality. While the MCP server allows file interaction during chats, it currently lacks OCR capabilities and can only access text-based file content.

🤖 MCP Server Usage Guide 🤖

Sorana now includes an MCP Manager — a visual interface for managing MCP servers. Enable/disable servers, configure settings, and monitor connection health — all without editing config files.

To use the MCP server file operations:

1. Open MCP Manager to configure and enable servers
2. Create an agent in your workspace
3. Right-click on the agent title and select "Chat"
4. Interact directly with all files and folders in the workspace

📧 Gmail MCP Server (NEW!)

Sorana includes a built-in Gmail MCP server for full agentic email control:

• List emails by label, date, or search query
• Read individual email content with headers
• Send new emails directly from chat
• Add, remove, or manage email labels
• Move emails to trash
• Archive emails to disk in 3 formats: JSON, EML, MBOX

Archive Example: "Archive emails from john@example.com after 2024-01-01 before 2024-12-31 with label PROJECT_X_2024"

Why this matters: Google only allows MBOX export for entire Gmail via Takeout. With Sorana, the agent archives specific emails on demand — perfect for backups and compliance.

Configuration is easy: Use JSON config or OAuth2 token. First run triggers authorization, token is cached afterwards.

Example commands you can use in the agent chat:
• "List the first 10 files in the current directory" (uses list_directory)
• "Search all text files in the workspace" (uses search_files)
• "Read the content of document.txt to summarize its contents" (uses read_file)
• "Read lines 10-20 of large_log.txt to check for errors" (uses read_file_from_line)
• "Move file report.docx to archive/report_backup.docx" (uses move_file)
• "Get size and creation date of config.json" (uses get_file_info)
• "Edit the third paragraph of essay.txt to improve clarity" (uses edit_file)
• "Write the generated report to monthly_report.txt" (uses write_file)
• "Create a new folder called 'Project_X' in the workspace" (uses create_directory)
• "Show available storage space and supported operations" (uses get_filesystem_info)

🔤 Encoding Support Notes:
The application primarily uses UTF-8 encoding for document processing and falls back to Latin-1 (ISO-8859-1) when UTF-8 decoding fails. For optimal results, we recommend using UTF-8 encoding for your documents. This ensures the best compatibility with international characters and special symbols.

🤖 Connecting Agents 🤖

To connect agents in Sorana:
🔘 Hold CTRL+ALT and click on an Agent title to get a green arrow
🔗 Point the green arrow to the parent agent to establish the connection
⚙️ In the child Agent configuration, enable 'Auto' (puts agent in orchestration mode to receive instructions from parent agent) and 'Passthrough' (allows the agent to also pass documents).
🤝 This creates a pipeline where agents can pass insights and collaborate on complex tasks

📥 Downloads 📥

🔹 Latest version: Sorana.exe v1.0.19
🔢 MD5 Checksum (.exe): 0ec161ac7b7b1a1abf7fd173d2635920
🌐 Download: http://tetramatrix.github.io/Sorana
🏪 Microsoft Store: https://apps.microsoft.com/store/detail/9N8C43PZC1RN
💬 Discord: https://discord.gg/4QkQSfSATF





📋 Changelog 📋

📅 April 6, 2026 — Version 1.0.19

🐛 Bugfix: Intent Engine
🐛 Bugfix: 4-Tier Memory Extractor

📅 April 5, 2026 — Version 1.0.18

🌐 Global Memory Storage — A personal AI that learns and shares! Memories are stored globally and available to ALL agents, creating a unified knowledge base
🔄 Memory Sync Hub — Import/Export memories between projects, share knowledge across agents, full control over your AI's memory
🔄 Dynamic Mid-Term Memory — Smarter conversation compression with configurable thresholds, better control over memory transitions
🆕 Model Manager — 2-pane window with 🍋 Lemonade Backend: Chat models (upper pane) and Embedding models (bottom pane) side by side for simultaneous multi-model support. (🍋 Lemonade only)
🆕 MCP Manager — Visual interface for managing MCP servers. Enable/disable, configure, and monitor servers without editing config files.
🆕 Gmail MCP Server — Full agentic Gmail control: list, get, send, label, trash, and archive emails. Archive command saves emails in 3 formats (JSON, EML, MBOX) — perfect for backups.
🧠 4-Tier Memory Improvements — Profile-First retrieval (61% token savings), conversation compaction (93% token reduction), auto-extraction from conversations.
🔀 Intelligent Router & Intent Engine — Smart tool call routing, intent classification (memory search, tool call, document query), max 3 tool calls per request (loop prevention).
💬 Chat History Awareness — Agent remembers from your last conversation. Prompts augmented with semantic memories + episodic summaries.
📊 Live Session Stats — Real-time token usage, tokens/sec, and time-to-first-token displayed in the chat window. Monitor AI performance: input/output tokens, prompt tokens, and response speed. (Lemonade backend only)
🐛 Bugfix: 4-Tier Memory & RAG improvements
🐛 Bugfix: MCP server tool calls
🐛 Bugfix: Chat engine stability

📅 March 31, 2026 — Version 1.0.17

Bugfix: mcp tool calls
Bugfix: 4-tier memory

📅 March 29, 2026 — Version 1.0.16

Bugfix: mcp tool calls
Bugfix: 4-tier memory

📅 March 29, 2026 — Version 1.0.15

Bugfix: mcp tool calls
Bugfix: UI/UX

📅 March 27, 2026 — Version 1.0.14

Bugfix: mcp tool calls
Bugfix: 4-tier memory
Bugfix: storage

📅 March 26, 2026 — Version 1.0.13

Bugfix: sdk import

📅 March 26, 2026 — Version 1.0.12

Bugfix: Chat History

📅 March 24, 2026 — Version 1.0.11

Bugfix: MermaidView loading indicator thread-safe implementation
- Add thread-safe loading label updates via tkinter_safe_queue.py
- Implement _update_loading_label() using QueueMessageType.PROGRESS
- Add svg2rlg() timeout (90s) and renderPM timeout (120s)
- Fix 'main thread is not in main loop' errors

📅 March 22, 2026 — Version 1.0.10

💬 Chat History — all your past conversations in a sidebar. Search, reload, delete. Nothing gets lost.
🧠 Memory that stacks — short-term, summaries, long-term (personas, facts, preferences), and document search. Each layer builds on the last.
☁️ Google Gemini support — add your API key and it works, including free tier models.
🔍 Works without AI hardware — document search falls back to text-based retrieval if no NPU is available. 15+ languages for document retrieval, auto-detected.
⚡ RAG opens 40x faster — startup went from 4s to under 0.1s.
🗃️ All data stored in a single .sorana/ folder. Existing installs migrate automatically.

📅 March 16, 2026 — Version 1.0.9

• Major: AI core completely rewritten — now powered by Pith SDK                                                                       
  • Scalable batch processing: handles thousands of items (no single-prompt limits)                                                   
  • Smart prompt tiers optimized for 1B, 8B, and 30B models                                             
  • Breakthrough: Small models (1B, 8B) achieve now accurate grouping & categorization                                              
• Major: Externalized Llama.cpp with automatic download & caching
• Major: Much smaller binary
• Internal: Core engine refactored for improved stability
• Bugfix: UI buttons rebuilt and refreshed for a cleaner experience
• Bugfix: Context Menu rebuilt and cleaned up
• Bugfix: Grid-points
• Bugfix: Model Manager select and activate model
• Bugfix: Splash screen freeze
• Bugfix: ssl certificate
• Bugfix: pith-sdk batch size

📅 March 09, 2026 - Version 1.0.8

• minor UI/UX update
• minor core engine update ( bugfixes, stability, architecture)
• smaller binary 

📅 February 18, 2026 - Version 1.0.7

• Bugfix About Window version display
• Update Model Manager created time to local time 
• Update extra Full-Reorganize button in the main window to organize from start
• Update Lemonade integration with Lemonade-Python-SDK: https://github.com/Tetramatrix/lemonade-python-sdk 

📅 February 14, 2026 - Version 1.0.6

• Bugfix Model Manager on-prem and cloud model activation

📅 February 5, 2026 - Version 1.0.5

• Bugfix built-in models

📅 February 2, 2026 - Version 1.0.4

• Significant performance enhancement for organizing large folder structures using new iterative algorithms
• New built-in MCP server for file operations:
  - read_file: Read file contents with intelligent limits
  - read_file_from_line: Read specific file ranges for pagination
  - write_file: Write content to files
  - list_directory: List directory contents
  - create_directory: Create directories
  - move_file: Move or rename files/directories
  - search_files: Search for files in directories
  - get_file_info: Get information about files/directories
  - edit_file: Edit files with specific changes
  - get_filesystem_info: Get server configuration and capabilities
• Other minor bugfixes














❤️ Support the Development ❤️

If you find Sorana useful, please consider donating to support ongoing development!
☕ Buy us a coffee or support via PayPal or Bitcoin Cash !

💰 Bitcoin Cash (BCH): bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv
💳 PayPal: paypal.me/Gigamegs

Thank you for your support!


🚀 Discover our Spaceship! 🚀

🎮 Retro Arcade 2d side-scroller bullet-hell shmup game: Spaceship

🌐 https://tetramatrix.github.io/spaceship/
🎮 https://www.indiedb.com/games/new-spaceship
🎮 https://tetramatrix.itch.io/old-school-retro-mini-game-spaceship
💬 Discord: https://discord.gg/4QkQSfSATF

🔧 Discover our RyzenZPilot! 🔧

💻 RyzenZPilot - AMD Ryzen Power Management Tool

RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

🌐 Website: http://tetramatrix.github.io/RyzenZPilot
💬 Discord: https://discord.gg/4QkQSfSATF

🖥️ Discover our Aicono - AI intelligent desktop icon autopilot 🖥️

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and can operate fully offline via manual JSON configuration when AI services are unavailable.

🌐 Website: http://tetramatrix.github.io/Aicono
📰 Softpedia: https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aicono.shtml
🏪 Microsoft Store: https://apps.microsoft.com/detail/xp8lnkj7h4b1ws
💬 Discord: https://discord.gg/4QkQSfSATF

🧩 Discover our TabNeuron - AI spatial tab manager & research workspace 🧩

TabNeuron breaks your browser tabs out of the tab bar and maps them onto an infinite 2D canvas. AI automatically groups them by content, you can chat with any page or the live internet, deploy no-code research agents, and sync your layout back to Chrome Tab Groups — all from a portable desktop app that runs fully offline with a built-in model.

🌐 Website: http://tetramatrix.github.io/TabNeuron
💬 Discord: https://discord.gg/4QkQSfSATF





