🚀 Sorana - The AI Visual Workspace 🚀

Sorana is an AI-powered visual workspace that transforms how you organize and interact with digital files. Using semantic AI analysis, it automatically groups related files and folders onto a spatial 2D canvas, replacing traditional hierarchies with intuitive visual layouts. Build drag-and-drop workspaces and no-code agent pipelines, connect to on-prem or cloud AI backends (OpenAI, Mistral, Lemonade, Ollama), and keep your data under your control.

✨ Inspiration ✨

We were frustrated by the limitations of traditional file managers. For decades, we've been forced to organize digital lives into rigid, list-based hierarchies and nested folders that hide information rather than reveal it. Our brains don't work in lists; they work through associations and spatial relationships. We wanted to build a system that reflects this—moving away from "where did I save that file?" to "what is this project about?" by using semantic and visual grouping to reveal the hidden structure of our data.

🔑 Key Features 🔑

🤖 Spatial AI Organization: Uses AI to semantically group files and arrange them on a 2D canvas, providing a visual overview of projects.
🎨 WYSIWYG Canvas Editor: Direct manipulation of workspace elements. Drag and drop files between groups, create new categories, rename items, and adjust group boundaries.
🧠 Advanced Model Management: Connect to multiple cloud and on-prem LLM backends including OpenAI, Mistral, Ollama, Lemonade, Llamacpp, and other compatible services. The model manager lists all available models and allows users to activate or deactivate models as needed for specific tasks.

🔗 Multi-Service AI Integration: Sorana supports seamless connection to both on-prem and cloud-based AI services:
  • On-Prem Services: Ollama, Llamacpp, and other self-hosted LLM solutions
  • Cloud Services: OpenAI, Mistral, Lemonade, and other cloud-based AI platforms
  • Flexible Configuration: Easily switch between different AI backends based on your needs, privacy requirements, and performance considerations
🤖 No-Code Agent Orchestration: Build custom agents and connect them into intelligent pipelines using a simple drag-and-drop interface. Agents collaborate by passing insights from one to another to solve complex problems, all without writing code.
💬 Contextual Document Chat: Interact directly with your files (PDFs, code, text) in interactive mode, and enhance agent capabilities by connecting relevant documents to their context.
🗺️ Dynamic Structure Mapping: Visualize the big picture. Generate mind maps of your folder hierarchies to reveal relationships and structure.
🔧 Built-in MCP Server for File Operations (beta): Integrated server supporting advanced file operations through AI agents, including:
  • read_file: Read file contents with intelligent limits
  • read_file_from_line: Read specific file ranges for pagination
  • write_file: Write content to files
  • list_directory: List directory contents
  • create_directory: Create directories
  • move_file: Move or rename files/directories
  • search_files: Search for files in directories
  • get_file_info: Get information about files/directories
  • edit_file: Edit files with specific changes
  • get_filesystem_info: Get server configuration and capabilities
  These operations are accessible through selected LLMs, enabling sophisticated file management workflows.

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
  • Built-in Models: Range from 1B parameter (806MB) to 20B parameter (12-16GB)
  • Recommended 8B Models (e.g., Llama 3.1 8b Instruct): Minimum 12 GB RAM or 8 GB VRAM for smooth operation
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

To use the MCP server file operations:

1. Create an agent in the workspace
2. Right-click on the agent title and select "Chat"
3. Interact directly with all files and folders in the workspace

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

🔹 Latest version: Sorana.exe v1.0.6
🔢 MD5 Checksum (.exe): 72f92f5e4beb87dac52797b3bf841884
🌐 Download: http://tetramatrix.github.io/Sorana
🏪 Microsoft Store: https://apps.microsoft.com/store/detail/9N8C43PZC1RN

❤️ Support the Development ❤️

If you find Sorana useful, please consider donating to support ongoing development!

💰 Bitcoin Cash (BCH):
bitcoincash:qrvhk77ujevd9n7jse4jewm99eg95at7tvc6m9v2vv

💳 PayPal:
paypal.me/Gigamegs

Thank you for your support!

☕ Buy us a coffee or support via PayPal or Bitcoin Cash !

🚀 Discover our Spaceship! 🚀

🎮 Retro Arcade 2d side-scroller bullet-hell shmup game: Spaceship

🌐 https://tetramatrix.github.io/spaceship/
🎮 https://www.indiedb.com/games/new-spaceship
🎮 https://tetramatrix.itch.io/old-school-retro-mini-game-spaceship

🔧 Discover our RyzenZPilot! 🔧

💻 RyzenZPilot - AMD Ryzen Power Management Tool

RyzenZPilot is a powerful tool for managing AMD Ryzen processor power settings on Windows.
It allows users to adjust CPU performance, power limits, and thermal configurations
for optimal performance and efficiency.

🌐 Website: http://tetramatrix.github.io/RyzenZPilot

🖥️ Discover our Aicono - AI intelligent desktop icon autopilot 🖥️

Aicono organizes a cluttered Windows desktop automatically by grouping icons with AI and arranging them into a neat, overlap-free layout with a live visual preview. It runs portable with sane defaults out of the box, and can operate fully offline via manual JSON configuration when AI services are unavailable.

🌐 Website: http://tetramatrix.github.io/Aicono
📰 Softpedia: https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aicono.shtml
🏪 Microsoft Store: https://apps.microsoft.com/detail/xp8lnkj7h4b1ws

📋 Changelog 📋

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

