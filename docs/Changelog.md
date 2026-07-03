📋 Changelog 📋
📅 July 03, 2026 — Version 1.0.69
🆕 Source-label history and audit policy documentation for self-learning provenance tracking.
🆕 Learned intent patterns added to improve tool routing accuracy.
🆕 Web-search intent recognition and keyword patterns to improve agent reasoning accuracy.
🆕 Duplicate-tool guard in synthesis handler prevents infinite web_search loops when results already loaded (BUG_100).
🆕 Guard now extracts different tool (e.g. web_fetch_content) when same tool is blocked, instead of just escalating synthesis.
🆕 web_fetch_content and web_scrape_page alias support for prose-based tool extraction.
🆕 WEB_CONTENT_TOOLS and _WEB_FAMILY updated with all MCP web tool names.
🔄 Self-learning feedback loop: user message extraction logic added to tool_node for future learning signals.
🔄 Documentation cleanup: broken markdown links removed and path references corrected across docs.
🧪 Sentinel memory store isolation added for test suite isolation.
🧪 Jaccard-set-overlap deduplication logic for chat MCP server document matching.
🧪 13 tests for BUG_100: duplicate-tool guard, web_fetch_content extraction, tool constants, planner family membership.
📅 July 02, 2026 — Version 1.0.68
🆕 RAG-irrelevance bypass in synthesis quality gate. Valid parametric-knowledge answers no longer rejected when RAG returns irrelevant documents.
🆕 Multilingual web-search intent examples added to intent recognizer for price/cost/research queries.
🆕 Fake_useragent and certifi packages added to compilation to fix web search (BUG_088).
🐛 Agent fails first attempt on general-knowledge questions. Intent system missed web-search routing, synthesis quality gate rejected valid answers (BUG_089).
🔄 Markdown rendering improvements: reduced code block spacing, fixed bold text in chat window, resolved tag priority issues.
🔄 Memory extraction categorization rules clarified to distinguish between preferences, facts, and situational context.
🔄 Memory tool system prompt and role descriptions improved in template editor UI.
📅 July 01, 2026 — Version 1.0.67
🆕 Multi-Agent Pipeline template editor (TemplateEditorDialog) replaces Multi-Agent Pipeline EditorWindow for Multi-Agent Pipeline editing with context menu entry.
🆕 Infinite retry loop detection and LangGraph state merging for tool failures in Multi-Agent Pipeline executor.
🆕 Memory extraction logic for Multi-Agent Pipeline graph: extracts final loop memories from producers with thread support.
🆕 Memory and compaction subgraphs for Phase 4 Multi-Agent Pipeline challenges.
🆕 Progress message handling for normal chat path in LangGraph state management with Tkinter-safe queue.
🆕 RAG context resolver with auto-filtering for missing documents in Multi-Agent Pipeline loops.
🆕 Tracking for successful RAG reads to prevent infinite loops in self-instruct detection.
🆕 Regex-based pseudo-XML tool call stripping utility for LLM invocation logic.
🆕 Multi-filename check to fix planning prose escalation logic in Multi-Agent Pipeline graph.
🆕 Reviewer agent check to skip forced rag_read_document for review agents during loops.
🆕 Multi-Agent Pipeline role declarative model to decouple template execution logic from agent node branching.
🆕 Unit tests for memory extraction Multi-Agent Pipeline and Multi-Agent Pipeline RouterFactory.
🆕 Graph progress transport architecture documentation.
🆕 Score degradation detection and early loop termination in Multi-Agent Pipeline routing.
🆕 Multi-Agent Pipeline context menu entry for Multi-Agent Pipeline editor.
🔄 Multi-Agent Pipeline codepath unified between AIEngine and LangGraph chat_node.
🔄 route_request() split into pure intent classifier + state orchestrator in router module.
🔄 tool_node refactored to use subgraph directly, removing redundant wrapper logic.
🔄 Memory_node.py and compactor_node.py reduced to thin wrappers with re exports.
🔄 Agent-specific memory extraction logic to skip drafts for loop-affected agents.
🔄 Cycle-breaker logic to prevent self-instruct leak in synthesis handler.
🔄 Reasoning budget caps removed from payload to prevent model default reasoning on empty content.
🔄 Unnecessary reasoning keys removed from payload to optimize API token usage.
🔄 Reviewer GATE CHECK prompt tightened for more explicit filtering criteria.
🔄 Persistent loop state handling and stale-default refresh for all agents.
🔄 Reviewer reasoning effort injection and RAG tool loading logic fixed.
🔄 Producer loop source output injected into reviewer context for proper filtering.
🔄 Stale config validation logic and improved agent defaults handling.
🔄 Thread-safe progress handling for TkinterSafeQueueManager.
🔄 Conditional chat visibility logic for Multi-Agent Pipeline agents in context menu.
🔄 Idempotent prompt seeding logic in PromptStore for missing default prompts.
🔄 Global memories migration logic for agent orchestration and shared memory management.
🔄 Trace collector support for agent execution chains and span tracking.
🔄 SearXNG engine added to mini wizard search test results with public instance handling.
🐛 Multi-Agent Pipeline agent tool emission failure fixed by correcting MCP server overwrite logic in draft coverletter flow.
🐛 Self-instruct leak fixed in Multi-Agent Pipeline codepath and synthesis handler.
🐛 Multi-Agent Pipeline assertion mismatch bug in producer-reviewer loop processing resolved.
🐛 Context loss in LangGraph state graph fixed by ensuring producer loop context propagation.
🐛 max_tokens floor enforced to 16384 for chat path, preventing short garbage output.
🐛 Context loss in Multi-Agent Pipeline executor when agent max token limit reached resolved.
🐛 Multi-Agent Pipeline loop router hallucination handling in reviewer context (BUG_034).
🐛 RAG alias matching guard (BUG_087) prevents LLM from drafting responses when explicit filenames present.
🐛 RAG synthesis quality validation and escalation propagation fix in LangGraph Multi-Agent Pipeline.
🐛 Empty response when RAG already loaded documents in synthesis handler.
🐛 Reasoning effort handling corrected for unsupported providers in internal ops.
📅 June 28, 2026 — Version 1.0.66
🆕 Multi-Agent Pipeline Producer-Reviewer architecture with loop detection, hallucination safeguard, and inline upstream context markers.
🆕 Multi-engine web search fallback: Wikipedia, DuckDuckGo, Brave, SearXNG, and manye more integration.
🆕 RAG adaptive chunking for oversized document chunks via pytrieve-sdk, improving NPU embedding quality.
🆕 MCP tool schema handling for Multi-Agent Pipeline agents and chat agents in AIEngine.generate_response().
🆕 Memory and RAG loading added to Multi-Agent Pipeline system for producer-reviewer context.
🆕 Token budget parameter for ThinkingAwareLLMClient to suppress tool calls in internal operations.
🆕 Thread-safe TkinterSafeQueueManager for progress handling.
🆕 Self-loop detection in chat routing prevents infinite recursion.
🆕 Search engine registry with dynamic engine selection and config management.
🆕 Context menu item for "Manage Memory & Knowledge".
🔄 Global memories migration logic for agent orchestration and shared memory management.
🔄 Trace collector support for agent execution chains and span tracking.
🔄 Quality gate logic for reviewer feedback filtering in Multi-Agent Pipeline graph builder.
🔄 Event loop lifecycle fix on Windows: ProactorEventLoop hang resolved with asyncio.run().
🔄 Prompt seeding logic made idempotent in PromptStore for missing default prompts.
🔄 Code cleanup: removed unnecessary json imports, dead code, and whitespace.
🐛 RAG alias matching guard (BUG_087) prevents LLM from drafting responses when explicit filenames present.
🐛 RAG synthesis quality validation and escalation propagation fix in LangGraph Multi-Agent Pipeline.
🐛 Empty response when RAG already loaded documents in synthesis handler.
🐛 Multi-Agent Pipeline loop router hallucination handling in reviewer context (BUG_034).
🐛 reasoning_effort handling corrected for unsupported providers in internal ops.
📅 June 24, 2026 — Version 1.0.66
🆕 TTL cache for DocumentVectorStore.list_documents() and reused cached store in orchestrator/tool_executor.
🆕 Caching for get_model_name() to avoid repeated config loads.
🆕 Performance analysis for builtin function usage in token calculation and memory management.
🔄 Performance optimization: consolidated redundant logic and added caching across 15 caches, 30 files, and 8 algorithmic fixes.
🔄 Caching logic refactored in orchestrator and tool_executor to use shared _get_rag_store.
🔄 Async I/O and connection pooling patterns added for performance optimization.
🔄 Redundant dead code removed and data structures optimized (set instead of list).
🔄 Redundant deep copy logic and unnecessary string slicing removed for tool_results.
🔄 Redundant os.listdir() calls and unnecessary deepcopies removed for folder processing.
🔄 Redundant lazy imports removed and stdlib imports hoisted to module level.
🔄 re.compile() hoisted from hot paths.
📅 June 23, 2026 — Version 1.0.64
🆕 Tab labels renamed to reflect agent context for clearer navigation.
🆕 Vision button release visual feedback: button state now updates visually on mouse release.
🔄 Status message cleanup: redundant status message logic removed from config_handlers.
🔄 HuggingFace cache scanning fix: removed broken directory traversal logic that scanned parent directory instead of actual cache, restoring model discovery.
🔄 HuggingFace wizard Treeview fix: switched to grid layout with zero-padding style to eliminate text bleeding between listview and scrollbar.
🔄 Health dashboard HF logging: added INFO-level logging for cache path resolution and model count for diagnostics.
🔄 Exception fallback: HF cache info now falls back to filesystem scan on any exception (not just ImportError), logged at WARNING level.
🐛 Vision button stuck cursor fix (BUG_061): AreaSelector deadlock resolved by removing transient() on Windows, replacing with -topmost and deferred focus.
🐛 Defensive None guard: strip_thinking handles raw response strings without TypeError.
🐛 UnboundLocalError fix: removed redundant import of re from _build_recovery_response().
🐛 Anti-thinking prefix: missing injection and model resolution bugs fixed in file grouping orchestrator.
📅 June 22, 2026 — Version 1.0.63
🆕 System-wide prompt manager UI: treeview for system/user prompt pairs with centralized storage in the branding folder and improved agent management interface.
🆕 Prompt manager data flow: UI components and data binding for system/user prompt pair editing.
🆕 Prompt store manager: dedicated store manager UI components for system prompts.
🆕 Health dashboard card system: reusable card widgets with wizard pattern for llama.cpp Bridge configuration.
🆕 Sorana Bridge documentation: lifecycle and configuration docs for the Bridge server.
🆕 Vision handler multi-backend: vision now uses `LLMClient.send_request()` instead of hardcoded Lemonade SDK, with configurable endpoint URL.
🆕 Reasoning effort whitelist protection: `reasoning_effort` no longer stripped when injected by `_apply_reasoning_config()`.
🆕 Execution phase budget fix: prompt registry and sorting logic gap resolved for proper budget enforcement.
🆕 RAG document sync fix: explicit `target_agent_uid` parameter fixes invisible synced docs in Manage Documents window.
🆕 Canvas bounds checking: robust bounds validation prevents false positives on large groups where anchor is far from center.
🆕 Empty group bounds: group bounds now update correctly for empty groups in free-form mode during save/load cycles.
🆕 Startup cursor cleanup: defensive cleanup prevents inherited "watch" cursor on chat interface startup buttons.
🆕 Vision button simplification: redundant vision button removed, visibility toggle logic streamlined.
🔄 Endpoint whitelist hardening: reasoning/thinking keys added to all endpoint whitelists for payload cleaner.
🔄 LLM client full_prompt: `send_request` now handles `full_prompt` parameter for direct prompt passthrough.
🔄 Synthesis message suppression: synthesis fix messages suppressed when `disable_tools=True`.
🔄 Capability cache composite IDs: cache lookup logic handles composite IDs correctly.
🔄 Grid layout fix: cross-column shared grid replaced with two independent column Frames to fix asymmetric cell heights and drag-drop fragility.
🔄 Card widget drag unification: click and drag state machine unified across all card widgets.
🔄 Grid padding: reduced unnecessary padding in grid layout.
🔄 Health card drag: drag handling added for health card header.
🔄 AreaSelector safety: try/except wrapping and cursor/grab release fixes in `vision_handler`.
🔄 Fastmcp compatibility: exception handling for legacy fastmcp compatibility in unit tests.
🔄 Hard failure handling: clarity and consistency improvements in `graph_routing` and `router`.
🐛 Defensive None guard: `strip_thinking` now handles raw response strings without TypeError.
🐛 UnboundLocalError fix: redundant import of `re` removed from `_build_recovery_response()`.
🐛 Anti-thinking prefix: missing prefix injection and model resolution bugs fixed in file grouping orchestrator.
🐛 Vision handler endpoint: hardcoded Lemonade endpoint replaced with configurable URL; HTTP error handling added.
🐛 Vision handler display: dead code removed; correct model now displayed and buttons function properly.
📅 June 21, 2026 — Version 1.0.62
🆕 Unified probe dialog: reasoning, vision, and audio probes consolidated into a single wizard dialog.
🆕 Vision handler multi-backend support. Vision now works across all backends via `LLMClient.send_request()` instead of hardcoded Lemonade SDK.
🆕 Provider-native reasoning effort: reasoning effort and thinking budget fields added to `llm_config.json` for all backends.
🆕 Reasoning discovery for StepFun: thinking display and reasoning discovery fixes for StepFun model.
🆕 Thinking brain emoji: conditionally renders brain emoji in chat based on `show_thinking_in_chat` flag and reasoning effort state.
🆕 Backend model name resolution: string matching logic in `_get_active_model_name()` prevents inherited `managed.model` from being read for all backends.
🆕 Memory extraction retry: small models now retry extraction with simplified prompts for deterministic output.
🆕 Execution phase budget: prompt registry and sorting logic gap fixed for proper budget enforcement.
🔄 LLM client full_prompt: `send_request` now handles `full_prompt` parameter for direct prompt passthrough.
🔄 Endpoint whitelist hardening: reasoning/thinking keys added to all endpoint whitelists; `reasoning_effort` no longer stripped when injected by `_apply_reasoning_config()`.
🔄 Vision handler error handling: hardcoded Lemonade endpoint replaced with configurable URL; HTTP error handling added for API failures.
🔄 AreaSelector safety: try/except wrapping and cursor/grab release fixes in `vision_handler`.
🔄 Discovery cache data_dir: production code now correctly passes `data_dir` for discovery cache fallback.
🔄 LLM config type checking: added type validation for LLM config loading and improved logging format.
🔄 Memory extractor efficiency: reduced reasoning token usage by increasing timeout and simplifying system prompts.
🐛 fix: Anti-thinking prefix injection: missing prefix and model resolution bugs fixed in file grouping orchestrator.
🐛 fix: Vision handler model display: dead code removed; correct model now displayed and buttons function properly.
🐛 fix: Reasoning discovery cache: critical bug fixed where cache fallback polluted git status with source tree paths.
🐛 fix: UI element clipping: `fit_to_content=False` override removed and default size adjusted so all elements are visible.
🐛 fix: Model overrides reverse lookup: fabricated backend alias entries removed from `model_overrides`.
📅 June 20, 2026 — Version 1.0.61
🆕 Welcome card version source: health dashboard reads version from `BrandingConfig.version` property (reads `VERSION.txt` via 3-tier fallback), eliminating hardcoded version string.
🆕 Memory clean button prompt rewrite: system and user prompts replaced with deterministic pattern-matching filter (5 literal patterns + worked example) to reduce LLM reasoning verbosity. Batch size reduced from 20 to 10.
🆕 Extraction retry chain fix: JSON retry path system prompt now correctly says "Return ONLY a JSON array" instead of contradictory "Return ONLY plain text facts".
4 rules (plaintext first, JSON as fallback, match system to user prompt, parse defensively).
🆕 Memory tag generator: robust anti-garbage validation for auto-generated memory tags.
🆕 Entity extraction audit: comprehensive audit and remediation plan for `_infer_entity_from_content` and `_extract_company_name` functions.
🔄 Blacklist consolidation: shared blacklist definition across modules to prevent potential drift.
🔄 Scope naming cleanup: renamed `scope='profile'` to `'consolidated'` and fixed category for consolidated memories.
🔄 Bottom navigation bar: added category and search bar to bottom navigation.
🔄 Memory extraction prompt safety: content truncation fix and safety improvements.
🐛 fix: topic/project examples added to `EXTRACTION_PROMPT` and entity extraction fallback logic fixed.
🐛 fix: dominant category metadata recovered before falling back to `'facts'` in migration plan.
🐛 fix: memory extraction system resolves single-entity storage and soft-archived noise in importance scoring pipeline.
📅 June 19, 2026 — Version 1.0.60
🆕 Hugging Face backend provider: OpenAI-compatible Inference Router with auto-complete tool configuration for Hugging Face dashboard.
🆕 Health dashboard: reusable card widgets with colored borders, status icons, dynamic data binding, mini-wizards for each system card, and backend provider card.
🆕 Branding name resolution: wizard UI title text and path labels now match card's local server branding while preserving technical identifiers for llm_config.json schema.
🔄 Tab/widget components refactored into ManagedToplevels with base tab dependency mocks.
🔄 Chat pane padding fixes: grid row configuration, notebook and chat tab cell alignment, and first-launch bottom margin correction.
🔄 Folder tab active background colors and disabled force reorganize button.
🔄 Simplified layout logic: removed redundant pack_configure calls and click propagation handling.
📅 June 18, 2026 — Version 1.0.59
🆕 Agent trace visualization: LangGraph chat Multi-Agent Pipeline now shows agent thinking, tool usage, and per-tool progress in a dedicated trace panel.
🆕 Markdown table rendering: chat views now parse and render markdown tables with monospace-aligned columns.
🆕 Chat upload button: local agent chat window status bar gets an upload button for file attachments.
🆕 Default MCP servers: new agents auto-configure memory, filesystem, web_content, and gmail MCP servers.
🆕 LLM request caching: config and model capabilities cached with mtime-keyed invalidation to reduce redundant I/O and CPU cycles.
🆕 Memory model enhancement: entity_type, entity_key, scope, and category fields added.
🔄 Synthesis handler split into discrete middleware stages with clear interfaces.
🔄 Tool node logging simplified and string formatting optimized in trace_models.
🔄 LangGraph invoke moved to state update, removed unnecessary stream loop and intermediate variables.
🔄 Progress indicator layout fixed to render on single line after "System:" prefix.
🐛 fix: Agent prefix line break: leading newline before [timestamp] Agent: prefix to prevent broken output on non-newline terminated user messages.
🐛 fix: Document list controller filter now correctly handles system agent documents by matching agent_uid directly.
🐛 fix: Model name preservation in LangGraph state merge.
🐛 fix: Trace collector auto-finish guard prevents active dot persistence after turn completion.
🐛 fix: Memory MCP server wiring: resolved tool registry name mismatch and dispatcher stub issue.
🐛 fix: Memory extraction profile generation now enforces internal budget constraints properly.
🐛 fix: Shared _cap_text helper for consistent truncation with '...' indicator across all nodes.
📅 June 17, 2026 — Version 1.0.58
🆕 MCP background threads: MCP servers now run on persistent background threads, enabling multi-agent coordination and surviving across tool calls without restart.
🆕 Event-driven polling: chat response latency reduced and CPU usage lowered on local inference by switching from poll-interval loops to event-driven callbacks.
🆕 StepFun Plan backend: new `stepfun_plan` provider added to `data/llm_config.json`.
🔄 Self-instruct rollback: synthesis handler now detects self-instruct in escalation state and rolls back, preventing leaked internal reasoning from reaching the user.
🔄 Orphan cleanup: removed unused modules and consolidated loose dependencies across the codebase.
🔄 Mixin split: large mixin modules decomposed into thin orchestrator + dedicated mixin files for better maintainability.
📅 June 16, 2026 — Version 1.0.57
🐛 Self-instruct visible content detection: models emitting "I'll read the file…" in visible response no longer leak as final answers. Three-layer defense: regex fallback patterns, LLM classification fallback, and §G-b escalation bypass fix.
🐛 RAG multi-file context overflow: documents explicitly named by user (e.g. 6 files totaling 66k chars) are no longer truncated at 30k chars. Multi-file mode raises the cap to 3× the default limit.
🐛 Telemetry log path: `thinking_telemetry.log` now resolves to `%LOCALAPPDATA%/Sorana/logs/` instead of next to the .exe. Fixed both the pith-sdk `_resolve_log_file()` fallback and the `ThinkingTelemetry._instance` singleton injection so the brand-aware path is always used.
🐛 ConfirmDialog missing import: RAG document delete confirmation dialog no longer crashes with `NameError: name 'ConfirmDialog' is not defined`.
🔄 Variable naming cleanup in synthesis_handler: renamed `_failed_tool_present_gb` → `failed_tool_present`, `_vis_intent` → `llm_intent`, `_vis_cls_err` → `classification_error`, `_dynamic_chain_retries_out_gb` → `dynamic_chain_retries`, `_gb_err` → `planner_error`.
🔄 `CONTINUE_TOOLING_MARKERS` expanded: added `"i'll first"`, `"i will first"`, and other contraction/future-tense patterns for German, French, and English self-instruct detection.
📅 June 15, 2026 — Version 1.0.56
🆕 Visual group collapse toggle for model and embedding tree with persistence and arrow visibility
🆕 Backend summary UI: model count and API details update when backend selection changes
🔄 Model and Embedding manager refactored with provider tree display, column hierarchy, sorting, and collapse logic
🐛 Fixed import path in delta\_loader and visual group collapse state logging during shutdown
📅 June 14, 2026 — Version 1.0.55
🆕 Unified thinking module across 15+ files into single canonical module with deprecated shims removed
🆕 Memory importance scoring with time decay, LLM contradiction filtering, and consolidation logic
🆕 Production telemetry configuration and performance knobs for reduced overhead and improved inference latency
🔄 Major refactoring: split agent controller, chat interface, browser tab, preview view, and chat management tab into smaller focused modules
🔄 Added /help command for MCP tools guidance and improved sort state persistence
🐛 Update notification balloon now uses windows-toasts for better UX
📅 June 13, 2026 — Version 1.0.54
🆕 LangGraph chat Multi-Agent Pipeline with persistent tool call history and multi-turn execution
🆕 Dynamic tool chaining: agent can call multiple tools across turns with automatic retry and synthesis
🆕 Parallel tool execution: multiple tool calls run concurrently with sequential remainder handling
🆕 Continuation planner: autonomous research mode with answer-marker detection and thinking extraction
🆕 LLM-based file and query extraction for smarter document routing
🆕 Default MCP servers (memory, filesystem, web\_content) auto-enabled for all new agents
🆕 External Gmail MCP server configuration in agent settings
🆕 RAG document pre-loading by name: documents are available immediately without re-retrieval
🆕 XiaomiMiMo backend provider support
🆕 Reload MCP server config without app restart
🆕 Branded AppData directories for all variants (Sorana, Aicono, TabNeuron)
🆕 Clickable update notification balloons: click to open website (uses windows-toasts)
🆕 IMPORTANT RULES auto-injected into system prompt (no longer user-editable)
🆕 Model Manager: model name added as third sort tiebreaker for easier model discovery
🆕 MiniMax-M3 tool call support: parser for ]<]minimax\[> format with tool\_name\\n{json} pattern
🆕 ThinkingExtractor: modular model-family-aware thinking extraction (StepFun, DeepSeek, Qwen, MiniMax, OpenAI)
🆕 Web search query extraction: regex patterns for "research X in internet" → "X"
🐛 fix: synthesis retry nullifying tool\_calls on initial pass
🐛 fix: multi-document RAG routing logic in LangGraph Multi-Agent Pipeline
🐛 fix: RAG tool skipped when else branch overwrites early-return values
🐛 fix: planning-only text leaking into status bar display
🐛 fix: tool results missing rag\_context in synthesis prompts
🐛 fix: infinite planning loop when documents already loaded
🐛 fix: RAG tool not filtering by agent\_uid
🐛 fix: router overmatching generic prose as RAG filenames
🐛 fix: empty content recovery for reasoning-only responses
🐛 fix: update notification toast not clickable (replaced with windows-toasts)
🐛 fix: model dropdown not populated when editing agent from chat tab
🐛 fix: IMPORTANT RULES block visible in editable system prompt
🐛 fix: sys.stdout crash in Windows GUI (debug prints → logger)
🐛 fix: CoreTabView passed as Tkinter parent (not a widget)
🐛 fix: background thread TclError in model discovery callbacks
🐛 fix: MiniMax-M3 truncated responses (model\_overrides missing from ChatState TypedDict)
🐛 fix: MiniMax-M3 tool calls not detected (added MiniMaxToolParser)
🐛 fix: tool calls suppressed in synthesis mode when model outputs new tools
🔄 refactor: AIEngine split into 5-module package
🔄 refactor: Chat node split into 4 focused files (chat\_helpers, rag\_context\_resolver, llm\_invocation, synthesis\_handler)
🔄 refactor: router modularized into graph + helper modules
🔄 refactor: LLMResponseParser split into 8-mixin package
🔄 refactor: model\_manager\_view split into 8-module package
🔄 refactor: synthesis logic simplified with embedded LLM classification
🔄 refactor: prose-parsing logic consolidated into shared module
📅 June 03, 2026 — Version 1.0.53
🐛 fix: MCP Tool Call
🐛 fix: LLM Thinking Model internal ops
📅 June 02, 2026 — Version 1.0.52
🐛 fix: Model Manager Column Sort
🐛 fix: Agent Config Path
🐛 fix: Debug Logging
🐛 refactor: update vocabulary index data
🐛 fix: content filter in compactor node to handle empty Messages
🐛 fix: circular Import
🐛 fix: RAG Status bar filename handling
📅 Mai 30, 2026 — Version 1.0.51
🆕  Added Tool Workspace Selector
🐛 fix: Model thinking and thinking renderer
🐛 fix: Agent Config Path
🐛 fix: LLM API max Tokens
🐛 fix: MCP Tool Call
📅 Mai 28, 2026 — Version 1.0.50
🆕 Added LM Studio support
🐛 fix:Model thinking support
📅 Mai 26, 2026 — Version 1.0.49
🐛 fix: Model thinking support
📅 Mai 25, 2026 — Version 1.0.48
🆕 New Quick Chat tab: Start conversations instantly without creating agents or opening workspaces. Uses global system memories by default, so your AI has full
context from day one.
🆕  Model Manager: Added a Capabilities column to the Model Manager. If the mode support Thinking and Vision it can be manually enabled.
🐛 fix: Tool Call loop
📅 Mai 21, 2026 — Version 1.0.47
🐛 fix: Agent delete
🐛 fix: improve RAG query
🐛 fix: refactor thinking and reasoning detection in Chat
📅 Mai 20, 2026 — Version 1.0.46
🆕  Add System tray with update check
🐛 fix: Model Manager sort column state
📅 Mai 19, 2026 — Version 1.0.45
🐛 feat: add migration script for entity columns
🐛 refactor: add StepFun artifact stripping to response cleaning paths
📅 Mai 18, 2026 — Version 1.0.44
🆕  Model Manager: Added a "Favorite" column to the Model Manager
🆕  Added new provider support for StepFun
🐛 refactor: add StepFun artifact stripping to response cleaning paths
🐛 refactor: add two-stage consolidation filter
📅 Mai 13, 2026 — Version 1.0.43
🐛 refactor: adjust batch sizes for consistency
🐛 refactor: add progressive retry logic for file execution
🐛 refactor: add anti-thinking prefixes and hints for tiered models
🐛 refactor: normalize generic category name in consolidation responses
📅 Mai 13, 2026 — Version 1.0.42
🐛 refactor: implement stronger alias handling and fix pith-sdk parser issues
🐛 refactor: refactor RAG path and consolidate prompt to prevent over-consolidation
📅 Mai 11, 2026 — Version 1.0.41
🐛 fix: refactor: remove hardcoded throttling and implement backend-aware rate limiting
🐛 fix: refactor: add new helper function for embedding injection
📅 Mai 9, 2026 — Version 1.0.40
🐛 fix: update document loading logic to handle full content retrieval correctly
🐛 **fix:** add missing history registration in FolderTab
🐛 refactor: adjust max tokens limit in LLM config
🐛 feat: add user authentication for multi-file routing fix
📅 Mai 6, 2026 — Version 1.0.39
🐛 fix: add memory entity classification fix for companies
🐛 fix: RAG Query Builder - Tokenization Inconsistency
🐛 refactor: improve RAG query strategy and add logging for fallback mechanism
🐛 refactor: Compactor "Chat not found" Fix
📅 Mai 5, 2026 — Version 1.0.38
🐛 feat: Advanced RAG and Prompt stats
🐛 Bugfix: Longterm Memory (RAG Retrieval) full document context fix
🐛 Bugfix: Chat First Message Formatting Fix
📅 Mai 4, 2026 — Version 1.0.37
🐛 feat: Export To Obsidian Canvas
🐛 feat: Export To Obsidian Graph View
🐛 feat: Sorting in all Treeview
🐛 feat: Recursive Scan Files and Folder
🐛 feat: UI Polish
🐛 Bugfix: LLM Model Grouping
🐛 Bugfix: Agent Timeout
🐛 Bugfix: Memories
🐛 Bugfix: Canvas Placement and Bounding Box
📅 April 29, 2026 — Version 1.0.36
🐛 Bugfix: Memories
🐛 Bugfix: Chat Context and RAG Knowledge Base
🐛 Bugfix: Refactor Chat
📅 April 27, 2026 — Version 1.0.35
🐛 Bugfix: Default Agent Timeout changed to 3600 sec
📅 April 27, 2026 — Version 1.0.34
🐛 Bugfix: MCP server
📅 April 27, 2026 — Version 1.0.33
🐛 Bugfix: Intent Engine - MCP File Tool detection
🐛 Bugfix: MCP File Server changed default to disabled
📅 April 27, 2026 — Version 1.0.32
🐛 Bugfix: Chat History
📅 April 26, 2026 — Version 1.0.31
🐛 Bugfix: Long-term Memories
📅 April 26, 2026 — Version 1.0.30
🐛 Bugfix: Memories consolidation
🐛 Bugfix: MCP Server compatibility
🐛 feat: add OpenRouter, Deepseek, Anthropic, Qwen, NVIDIA support  
🐛 feat: Treeview alternate colors
🐛 feat: UI flatten buttons
📅 April 20, 2026 — Version 1.0.29
🐛 feat: add timeout handling for empty response in chat nodes
🐛 feat: add timeout handling for LLM inference with configurable split timeouts and fallback mechanisms.
🐛 feat: add empty response handling for chat nodes and langgraph adapter in MCP manager tests
📅 April 19, 2026 — Version 1.0.28
🐛 feat: fix: MCP Server Startup
🐛 feat: fix: BM25 language detection
🐛 feat: fix: Artifacts + Pith legacy codepath
📅 April 15, 2026 — Version 1.0.27
🐛 feat: add robust Lemonade backend URL resolution for embeddings and inference endpoints
🐛 feat: add rag\_documents field to ChatState TypedDict and improve default handling in rag\_node
🐛 feat: fix: resolve show context windows dialog issue where agent sees only 4 documents instead of 6
🐛 feat: add rag context preservation in compactor\_node and router to maintain RAG context across interactions
📅 April 14, 2026 — Version 1.0.26
🐛 Bugfix: Chatbot: Tool usage examples
🐛 Bugfix: MCP Gmail Server
🐛 Bugfix: MCP Web Content
🐛 Bugfix: Intent Engine
🐛 Bugfix: Back/Forward Navigation
🐛 Bugfix: MCP File Tools Path Navigation
📅 April 10, 2026 — Version 1.0.25
🆕 Chat Window: Copy last button
🐛 Bugfix: Intent Engine - File tool detection
🐛 Bugfix: Tool Call: Source Path
🐛 Bugfix: Chat Window Rendering
📅 April 9, 2026 — Version 1.0.24
🆕 Vision support in Chat \& RAG
🐛 Bugfix: Intent Engine
🐛 Bugfix: Tool Call: Graceful fallback
🐛 Bugfix: Model Manager: Auto-Discovery
📅 April 8, 2026 — Version 1.0.23
🐛 Bugfix: Intent Engine: Tool Call
🐛 Bugfix: Config Path
🐛 Bugfix: MCP Server toggle
📅 April 8, 2026 — Version 1.0.22
🐛 Bugfix: Intent Engine: Tool Call
🐛 Bugfix: 4-Tier Memory: Fallback
🐛 Bugfix: Chat Window: Sidebar
📅 April 7, 2026 — Version 1.0.21
🐛 Bugfix: Intent Engine: Tool Call
🐛 Bugfix: MCP-Server
🐛 Bugfix: 4-Tier Memory: RAG Stop-Words
📅 April 7, 2026 — Version 1.0.20
🐛 Bugfix: Intent Engine: Tool Call
🐛 Bugfix: 4-Tier Memory: Embedding model detection, Fallback and manual toggle
🐛 Bugfix: Chat Window – Sidebar now properly displays new chats.
📅 April 6, 2026 — Version 1.0.19
🐛 Bugfix: Intent Engine
🐛 Bugfix: 4-Tier Memory Extractor
📅 April 5, 2026 — Version 1.0.18
🌐 Global Memory Storage: A personal AI that learns and shares! Memories are stored globally and available to ALL agents, creating a unified knowledge base
🔄 Memory Sync Hub: Import/Export memories between projects, share knowledge across agents, full control over your AI's memory
🔄 Dynamic Mid-Term Memory: Smarter conversation compression with configurable thresholds, better control over memory transitions
🆕 Model Manager: 2-pane window with 🍋 Lemonade Backend: Chat models (upper pane) and Embedding models (bottom pane) side by side for simultaneous multi-model support. (🍋 Lemonade only)
🆕 MCP Manager — Visual interface for managing MCP servers. Enable/disable, configure, and monitor servers without editing config files.
🆕 Gmail MCP Server: Full agentic Gmail control: list, get, send, label, trash, and archive emails. Archive command saves emails in 3 formats (JSON, EML, MBOX): perfect for backups.
🧠 4-Tier Memory Improvements: Profile-First retrieval (61% token savings), conversation compaction (93% token reduction), auto-extraction from conversations.
🔀 Intelligent Router \& Intent Engine: Smart tool call routing, intent classification (memory search, tool call, document query), max 3 tool calls per request (loop prevention).
💬 Chat History Awareness: Agent remembers from your last conversation. Prompts augmented with semantic memories + episodic summaries.
📊 Live Session Stats: Real-time token usage, tokens/sec, and time-to-first-token displayed in the chat window. Monitor AI performance: input/output tokens, prompt tokens, and response speed. (🍋 Lemonade backend only)
🐛 Bugfix: 4-Tier Memory \& RAG improvements
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
* Add thread-safe loading label updates via tkinter\_safe\_queue
* Implement \_update\_loading\_label() using QueueMessageType.PROGRESS
* Add svg2rlg() timeout (90s) and renderPM timeout (120s)
* Fix 'main thread is not in main loop' errors
📅 March 22, 2026 — Version 1.0.10
💬 Chat History: all your past conversations in a sidebar. Search, reload, delete. Nothing gets lost.
🧠 Memory that stacks: short-term, summaries, long-term (personas, facts, preferences), and document search. Each layer builds on the last.
☁️ Google Gemini support: add your API key and it works, including free tier models.
🔍 Works without AI hardware: document search falls back to text-based retrieval if no NPU is available. 15+ languages for document retrieval, auto-detected.
⚡ RAG opens 40x faster: startup went from 4s to under 0.1s.
🗃️ All data stored in a single .sorana/ folder. Existing installs migrate automatically.
📅 March 16, 2026 — Version 1.0.9
• Major: AI core completely rewritten: now powered by Pith SDK
• Scalable batch processing: handles thousands of items (no single-prompt limits)
• Smart prompt tiers optimized for 1B, 8B, and 30B models
• Breakthrough: Small models (1B, 8B) achieve now accurate grouping \& categorization
• Major: Externalized Llama.cpp with automatic download \& caching
• Major: Much smaller binary
• Internal: Core engine refactored for improved stability
• Bugfix: UI buttons rebuilt and refreshed for a cleaner experience
• Bugfix: Context Menu rebuilt and cleaned up
• Bugfix: Grid-points
• Bugfix: Model Manager select and activate model
• Bugfix: Splash screen freeze
• Bugfix: ssl certificate
• Bugfix: pith-sdk batch size
📅 March 09, 2026 — Version 1.0.8
• minor UI/UX update
• minor core engine update ( bugfixes, stability, architecture)
• smaller binary
📅 February 18, 2026 — Version 1.0.7
• Bugfix About Window version display
• Update Model Manager created time to local time
• Update extra Full-Reorganize button in the main window to organize from start
• Update 🍋 Lemonade integration with Lemonade-Python-SDK: https://github.com/Tetramatrix/lemonade-python-sdk
📅 February 14, 2026 — Version 1.0.6
• Bugfix Model Manager on-prem and cloud model activation
📅 February 5, 2026 — Version 1.0.5
• Bugfix built-in models
📅 February 2, 2026 — Version 1.0.4
•  Significant performance enhancement for organizing large folder structures using new iterative algorithms
•  New built-in MCP server for file operations:
* read\_file: Read file contents with intelligent limits
* read\_file\_from\_line: Read specific file ranges for pagination
* write\_file: Write content to files
* list\_directory: List directory contents
* create\_directory: Create directories
* move\_file: Move or rename files/directories
* search\_files: Search for files in directories
* get\_file\_info: Get information about files/directories
* edit\_file: Edit files with specific changes
* get\_filesystem\_info: Get server configuration and capabilities
* Other minor bugfixes