📋 Changelog 📋
📅 28.08.26 - Version 1.0.88
🆕 The assistant now knows its own identity — brand name and personality are injected into every conversation, so the assistant introduces itself correctly instead of giving generic answers.
🆕 RAG and memory tools only appear when relevant — the model no longer sees file-search or memory-search options when there are no indexed documents or stored memories, keeping responses focused.
🆕 Precise entity resolution from stored documents — the agent now detects relevant entities from your stored memories and documents during conversation, improving factual accuracy and reducing hallucination.
🆕 Smarter request routing — simple requests like greetings or quick questions now skip the full planning pipeline and go straight to an answer, making everyday interactions faster.
🆕 Extended research budget — the default research time limit is raised further with doubled analysis capacity, giving deep research and code-analysis tasks even more room on local and slow providers.
🆕 File editing now supports string replacement — when editing files, you can specify an exact string to find and replace, giving more precise control alongside the existing full-file and line-range modes.
🆕 OpenRouter free-tier integration — landing page now features `openrouter/free` as the easiest way to use Sorana with a cloud backend at zero cost, with hero pill, banner, FAQ how-to, and model preview row.
🔄 Session context budget and web-fetch caps raised — memory handling is more efficient, web pages render more completely before summarization.
🔄 Memory retention hardened — expired memories are properly cleaned up with a hard-delete tier, orphaned profiles are swept automatically, and personally sensitive data retention is reduced.
🔄 Memory readback fixed — reading back saved memories no longer surfaces the wrong profile data or user information.
🔄 Deterministic tool matching — the router now resolves tool calls more reliably instead of letting the LLM's ambiguity judge override correct matches.
🔄 Lifecycle trace accuracy — each step in the conversation trace is now correctly labeled with its own message instead of inheriting labels from previous turns.
🔄 /help command accuracy — web, codebase, and Gmail help rows now reflect the actual production tool set, and all 43 advertised commands have regression tests.
🔄 User messages used as reviewer evidence — the assistant now considers the user's own message when evaluating answer quality, and memory agents handle all edge cases gracefully.
🔄 Abbreviation-aware sentence splitting — text extraction and compaction now correctly handle abbreviated words (e.g. "e.g.", "i.e.") when splitting sentences.
🔄 Inline citation formatting — superscript citation markers no longer break words in the middle when placing dot-separated reference numbers.
🐛 Progress percentage display crash fixed — the progress indicator no longer crashes when encountering format strings it can't parse.
🐛 Editing empty files no longer degrades — previously, editing a file with no content would silently convert the operation into a full write instead of failing clearly.
🐛 Vision button lights up correctly — the vision indicator now activates using evidence from sibling backend probes, so it no longer stays gray when the model is actually vision-capable.
🐛 Cross-thread answer contamination fixed — a research question no longer displays an answer from a different conversation.
🐛 Synthesis reviewer overfail fixed — the quality reviewer no longer falsely rejects valid answers; the Health Dashboard fallback chain display is also corrected.
🐛 Web-research requests no longer degrade to file-reading loops — the planner correctly identifies web-search intent and routes it properly.
🐛 Reasoning-channel answer recovery — answers returned through the reasoning channel (instead of the main content channel) are now properly recovered instead of being silently lost.
🐛 Answer-marker detection improved — short affirmative responses ("yes", "ok") are no longer misclassified as non-answers.
🐛 Stop-word query capture fixed — short or common-word queries no longer get lost during the routing phase.
📅 24.08.26 - Version 1.0.87
🆕 New optional model role: Reviewer — right-click any model in the Model Manager and choose "Assign to Reviewer" to give answer quality checks their own independent second opinion on a different model, while everything else keeps running exactly as before.
🆕 The Model Manager shows every role a model holds — a model serving as both Primary and Reviewer now reads "Primary + Reviewer" in the status column instead of hiding the extra role; newly assigned roles appear immediately.
🔄 Role-pinned sorting covers the new role and every combination — Primary stays pinned 1st, Quick 2nd, Embed 3rd, Vision 4th, Reviewer 5th, even when one model holds several roles at once; a combined assignment always sorts by its highest role.
🔄 Your agent learns from declined actions — when you say No to a proposed action, the assistant remembers the pattern and gradually adapts future suggestions to your preferences instead of repeating them.
🧪 Regression coverage added for reviewer-role assignment and routing, multi-role status display, rejection recording, and preference learning from declined approvals.
🐛 Agents keep their place after a workspace reload — re-scanning a workspace without saving its layout no longer drops agents onto the top-left corner or stacks them over other groups; each agent returns to its last saved spot or settles cleanly beside the groups already on the canvas.
🧪 Capability test results are now visible at a glance — a model confirmed by a capability probe shows a "✓ probe-confirmed" mark in its Thinking effort menu instead of looking identical to an untested guess, and freshly probed capabilities appear in the Model Manager right away without a manual refresh.
🔄 A tidier Model Manager right-click menu — the rarely used per-backend rate-limit controls moved into a new "Advanced" submenu so everyday actions stay front and center; everything works exactly as before.
🚀 Snappier multi-tool turns — batches of purely local file/memory/codebase operations now execute in wider parallel waves, while network-dependent tools keep their careful pace automatically.
🔒 Log privacy hardening with zero setup — detailed provider request/response dumps are now strictly opt-in for debugging, and even when enabled, credential patterns inside payloads are masked before anything reaches disk.
🛟 Model failover you control — assign a Backup model per role and one global Spare in the Model Manager; when a provider fails mid-chat, Sorana hops to healthy alternatives automatically (never the same dead provider twice), benches free tiers that hit daily quota until their reset, shows every chain plus active pauses on the Health Dashboard, and badges assigned backups/spares right on the model row — pinned to the top of your list.
🐛 Cross-thread answer contamination fixed — a research question no longer displays an answer from a different conversation.
🐛 Web-research requests no longer degrade to read_file loops — the planner correctly identifies web-search intent and routes it properly instead of deriving spurious filenames from planning prose.
🐛 BUG_439 follow-ups resolved — §H argument synthesis, loop-END status, and embedding probe flap fixed.
🐛 Synthesis reviewer overfail fixed — calibrated PASS/FAIL contract prevents false rejections of valid answers; Health Dashboard fallback chain display corrected.
🔒 Security hardening applied — memory tenant isolation, MCP HTTP request hardening, DPAPI secrets protection, checkpoint sanitizer, and persistence source audit completed.
🛡️ Web content fetching hardened against redirect-based spoofing — DNS pinning ensures fetched pages come from the domain you asked for, closing a gap where a redirect could swap in an unexpected host.
🔄 Memory data lifecycle managed automatically — observations, preferences, and profile data each keep appropriate retention durations, and personally sensitive memories expire earlier than the rest.
🔄 Completion-gate LLM consultation — when the agent reaches a judgment call (partial answer, qualified answer, or explain-why-it-can't), it now asks the LLM whether a better answer is within reach before giving up, so borderline cases get a second chance instead of a hard stop.
🔄 Structured router decisions on managed backends — when the local model supports structured output, the routing decision is requested under a hard decode constraint instead of relying on regex heuristics, making intent classification more reliable.
🔄 Time-aware turn gates — the engine now tracks wall-clock time and synthesizes answers before the timeout deadline instead of starting a new research round too late to finish.
🔄 Extended research budget — the default turn budget is raised to 15 minutes with doubled analysis extension, giving deep research and code-analysis turns enough room to complete on local and slow providers.
🔄 Cleaner source footers — web sources with zero relevance to the query are filtered out of the source list, so the answer only shows sources that actually contributed.
🔄 Turn-pinned primary model — mid-turn model switches can no longer mix outputs from different models within one research answer; the primary model is locked for the duration of a turn.
🐛 Graph timeout now delivers the best answer — when a research turn exceeds its time budget, the best answer found so far is returned instead of being silently discarded.
🐛 Quality-gate internals stripped from answers — reviewer reasoning and internal chain-of-thought markers no longer leak into the user-facing answer text.
🐛 Tool-parse recovery — malformed or incomplete tool calls are now gracefully recovered with actionable hints instead of ending the turn with an empty response.
🐛 Ambiguity judge reasoning fixed — the ambiguity detector no longer starves on short reasoning bursts, so ambiguous queries are properly classified instead of defaulting to the wrong intent.
🧪 /help command catalog verified — all 43 advertised commands now have live regression tests ensuring they work as documented.
📅 20.08.26 - Version 1.0.86
🆕 The chat status bar is simpler — document/RAG status text is removed; the vision indicator is now a clean inline footnote, and per-request usage is shown under each answer instead.
🆕 Vision capture is consistent across platforms — the chat status-bar button now uses a platform-appropriate icon (camera emoji on Windows, ◉ on Linux), shows a single animated progress line while capturing or processing, and is rendered as a proper button instead of a label.
🆕 Stop long-running requests with one click — a new Stop button halts a request and keeps the chat responsive so a new message can be sent right away.
🆕 Lemonade token statistics live on the Health Dashboard — a new "Lemonade Token Stats" card appears when Lemonade is the active backend, and the "Circuit Breakers" and "Sub-Agent Scheduler" cards are merged into a single "AI Engine" card.
🆕 Automatic token refresh keeps sessions alive — access tokens refresh automatically in the background before expiry, so authenticated work is no longer cut off mid-task.
🆕 Document tasks are recognized correctly — filenames like ".pdf" or ".docx" are treated as documents instead of code signals, and requests that point at RAG or memories are no longer hijacked into codebase research.
🔄 Memory extraction is more precise — when a message contains several facts, each one is now preserved instead of only part of the message, and duplicate memories are avoided; memory timestamps are handled reliably so saved memories stay accurate and in order.
🔄 Memory storage is scoped correctly — every memory write now targets the active agent's scope instead of a shared global store, so agents no longer see or overwrite each other's memories.
🔄 Memory-store commands stay on the right track — direct store commands no longer trigger keyword cascades, web_search, or research-verb extraction; they are routed straight to memory storage.
🔄 Model Manager remembers collapsed groups — which provider groups you collapsed stays that way across window reopens, and sorting a column no longer resets them; models assigned to a role (Primary, Quick, Embed, Vision) stay pinned to the top of the list in that order.
🔄 The context menu's Thinking effort options now only show what the active model actually supports, and positive capability-probe results are reflected immediately in the Model Manager row and its context menu.
🔄 Embedding dispatch is batched — intent semantic precompute and cloud embedding calls are now sent as a single array POST instead of hundreds of sequential requests, so the first chat and first memory search are fast again.
🔄 Research answers are delivered complete — a complete answer produced while working with tools is no longer discarded in favor of a shorter continuation; parallel-synthesis variants now seed from the stashed best-answer candidate.
🔄 Web research keeps going when a page refuses to load — pages stuck in redirect loops or blocked by anti-bot protection are remembered so they are not fetched again, and the next source is tried instead.
🔄 Autonomy control plane is canonical — legacy retry and budget counters are consolidated behind a single action ledger, and control-plane contracts are now the single source of truth for routing and execution.
🧪 Regression coverage added for vision capture lifecycle, document-task routing, memory scope isolation, memory extraction quality, embedding batch dispatch, capability-probe display, Model Manager collapse persistence, role-pinned sorting, and web-research resilience.
🔄 Session statistics and memory MCP calls follow the active agent — per-session counters and memory routing now respect the current agent's scope instead of mixing global and workspace data.
🔄 Gmail and Calendar actions route deterministically — send, get, and trash operations now read the correct target so the right message or event is always acted on.
🔄 Parallel approval-blocked rounds are recorded correctly — the action ledger now stamps every approval-blocked execution so the trace shows what was actually gated.
🐛 On-device embedding no longer hangs when the service is offline — a fast-fail probe detects the dead backend immediately, and the connection is kept alive for automatic recovery.
🆕 Memory validation is accelerated — agent-creator memory checks now use on-device hardware acceleration when available, and the full validation sweep is documented.
🐛 Cloud embedding overrides no longer loop — a watchdog prevents unbounded retry loops when cloud providers handle single-text embedding requests.

📅 18.08.26 - Version 1.0.85
🆕 FreeRouter models update automatically — the Model Manager now shows every model FreeRouter currently offers, fetched live from its model list; the default model is kiro-auto.
🆕 The agent plans, acts, and self-corrects — for multi-step goals the agent now follows a built-in plan/act/review/correct/retry loop, so complex tasks finish without getting stuck.
🆕 Stuck plans break out automatically — when the planner hits a dead end it re-decomposes the goal and tries a new approach instead of looping or timing out.
🆕 Approval policies are persistent and scoped — approvals can cover multiple dependent actions, survive restarts, and are configurable per action type in settings.
🆕 Sessions survive token expiry — access tokens refresh automatically in the background, so authenticated work is no longer cut off mid-task.
🔄 Final answers are complete — answers cut off by a provider token limit are retried or replaced, so you no longer get partial text.
🔄 Document and web research use the right scope — RAG search stays restricted to the active agent's documents, and web fetches that the server rejects no longer break the answer.
🔄 Multi-tool turns complete cleanly — duplicate-tool guards no longer discard fresh results mid-turn.
🔄 Provider settings are preserved on save — saving configuration can no longer quietly remove a provider block.
🔄 Unconfigured API keys fail cleanly — placeholder keys in config no longer produce confusing "you did not provide an API key" errors from providers.
🧪 Regression coverage added for approval scope, routing integrity, final-answer truncation, RAG document scoping, API-key validation, web-research resilience, memory extraction quality, and first-launch performance.
🐛 Web research no longer ends with an "empty response" error after a successful search — the follow-up page fetches the research planned now actually run.
🔄 Web research keeps going when a page refuses to load — pages stuck in redirect loops or blocked by anti-bot protection are remembered so they are not fetched again, and the next source is tried instead.
🔄 Substantive answers from mid-turn work are delivered — a complete answer produced while working with tools is no longer discarded in favor of a shorter continuation.
🐛 Memory extraction no longer parrots existing knowledge back as new memories — repeated facts are filtered out instead of being saved again, and near-duplicate memories with different wording are now recognized as duplicates.
🐛 German phrase extraction is fixed — phrases like "für X im Y" now capture the full entity instead of dropping part of it.
🔄 The first memory search is fast again — the on-device embedding index is built in one batched pass instead of embedding every memory one by one, and memory deduplication falls back to text matching within a reasonable time if the embedding service is slow.
🔄 The first chat no longer stalls for minutes — the semantic index behind quick intent detection is precomputed in one batched pass instead of embedding hundreds of examples one by one.
🆕 Capability probe results now show up immediately — after "Test capabilities" confirms a model can reason or see images, the Model Manager row and its context menu reflect it right away, instead of looking like the probe never ran.
🆕 A Stop button in the chat window — a request that runs too long can be halted with one click, and the chat stays responsive so a new message can be sent right away.
🆕 The vision indicator is now a proper status-bar button — it matches the other chat buttons, uses a platform-appropriate camera icon, and shows a single clean progress line while capturing or processing an image.
🔄 Live token statistics moved from the chat status bar to the Health Dashboard — a new "Lemonade Token Stats" card appears when Lemonade is the active backend, and the "Circuit Breakers" and "Sub-Agent Scheduler" cards are merged into a single "AI Engine" card.
🔄 The chat status bar is decluttered — the document/RAG status text is removed; per-request usage is shown in the inline stats under each answer instead.
🔄 Model Manager remembers collapsed groups — which provider groups you collapsed stays that way across window reopens, and sorting a column no longer resets them; models assigned to a role (Primary, Quick, Embed, Vision) stay pinned to the top of the list in that order.
🔄 The context menu's Thinking effort options now only show what the active model actually supports.
🔄 App startup no longer stalls when the on-device AI service is offline — the app quickly checks whether the embedding model is ready instead of waiting out a long timeout, and keeps checking in the background so it recovers once the service is back.
🐛 Asking for a document by name no longer starts deep code research — filenames like ".pdf" or ".docx" are recognized as documents instead of code signals, requests that point at the RAG or memories are honored, and code research on a folder without any code stops immediately instead of burning minutes.

📅 15.08.26 - Version 1.0.84
🆕 New free cloud provider — FreeRouter is now available in the Model Manager: a completely free OpenAI-compatible API (no credit card, no quotas) that includes the latest Qwen 3.8 Max model. Great for testing and getting started at zero cost.
🆕 Risky actions ask first — sending email, writing to your calendar, or running external tools now pauses for your explicit approval before executing, and pending approvals survive app restarts.
🆕 Duplicate-safe tool calls — a retried or replayed action can never run twice; every execution carries a durable identity that survives restarts, so interrupted runs recover cleanly instead of double-sending.
🆕 Failed runs clean up after themselves — external actions with an unclear outcome (a timeout where the service may have applied the change) are checked automatically in the background, and approved rollbacks (like deleting a file a failed run created) are executed and logged.
🆕 Background safety workers — reconciliation and compensation checks now run on their own schedules inside the app, no manual trigger needed.
🆕 Browser tools actually work — the browser session tools (get tabs, save/load sessions, update groups, delete sessions) run against the live browser instead of reporting "not implemented".
🆕 Automatic token refresh — access tokens are refreshed 30 seconds before expiry in the background, so authenticated sessions are no longer cut off by an expiring token.
🔄 One control plane for every path — legacy and main chat tool execution now share the same validation, approval, duplicate-protection, journaling and tracing, so no route can bypass the safety rules.
🔄 Recovery is storm-proof — after a failure only one recovery probe is allowed per agent at a time, so a flaky provider can no longer trigger a flood of parallel retries.
🔄 Review is stricter — a confused reviewer response ("I see no upstream output") now triggers a review retry instead of auto-approving the draft; repeated confusion fails the workflow cleanly instead of passing unapproved output as success.
🔄 Saved API keys now actually work — keys entered in the setup wizard or Model Manager are used for requests; environment variables still take priority and placeholder text ("YOUR_KEY_HERE") is never sent as a real credential.
🔄 Provider settings are never silently lost — saving configuration can no longer quietly drop a provider block (FreeRouter, Anthropic); the app fails loudly instead of erasing it.
🔄 Reconciliation results land on the original run — background outcomes (reconciled / compensated / needs manual review) are written back to the archived trace, and old traces are evicted automatically to keep history bounded.
🔄 Chat sessions stay isolated — one chat's state can no longer leak into another chat's turn.
🔄 Document manager consistency — Manage Documents shows the full workspace store again, including system-synced documents after an agent is recreated.
🔄 Long code-research turns keep results compact — codebase search results are compressed consistently, including symbol search.
🔄 Gmail and Calendar expiry checks are unified — an expired token is no longer treated as valid on some paths while others refresh correctly.
🔄 Cold on-premise models are tolerated — embedding models (Lemonade) that take time to load no longer time out in the app.
🔄 Greeting briefings are back — the greeting again triggers the daily briefing.
🔄 RAG searches degrade gracefully when the index is stale or memory extraction fails.
🧪 Regression coverage added for approval gating, duplicate-safe execution, circuit-breaker single-flight, workflow review retries, config-save integrity and the FreeRouter provider.

📅 13.08.26 - Version 1.0.83
🆕 Live thinking streaming — the "Thinking Process:" block now fills in while the model reasons, with a live token counter and elapsed-time indicator, instead of appearing only after the answer completes.
🆕 Streamed thinking is saved with the message, so reopening a conversation from history shows the thinking block exactly as it happened.
🆕 Thinking is now captured correctly for more model providers — DeepSeek, OpenAI, Anthropic, Gemini, Grok and MiniMax reasoning fields are recognized in both streaming and non-streaming responses, including structured reasoning blocks.
🔄 The "show thinking" toggle in the Model Manager is now honored reliably — thinking appears whenever the active model's setting is on, and the check uses the same model the request was actually sent with.
🐛 Mixed document + web requests ("apply to this job and research the company") no longer lose the document evidence or expose internal reasoning in the answer.
🐛 An explicit "research X on the web" request can no longer be hijacked by an older learned preference — it always performs the actual search with the correct query (dotted names like pst.ag are preserved).
🐛 Mixed research no longer ends with an empty answer or a repeated page URL — web results are evaluated before synthesis and remaining evidence steps complete.
🐛 Unrelated proactive context is no longer injected — Calendar events, Gmail messages and recent files were prefetched into every request; context is now limited to what the request actually uses.
🔄 Research answers now show where claims come from — the source footer distinguishes web, file, Gmail and Calendar sources from documents, and company/financial figures carry "verified / reported / estimated / unknown" labels instead of being stated as fact.
🔄 Linux/WSL build setup now remembers your compile choices between sessions.
🧪 Regression coverage added for thinking streaming, the show-thinking toggle, and mixed document/web routing.

📅 12.08.26 — Version 1.0.82
🆕 Model Manager: a fourth model role — Vision — is here. The old blunt "vision model" toggle (which switched vision on without ever testing the model) is replaced by a dedicated **Vision** role you assign per model, exactly like the Primary, Quick and Embed roles. Assignment is capability-gated: it unlocks only after the Test-capabilities check confirms the model can actually see images.
🆕 The Vision buttons (screenshot in chat, upload in the document manager) use the assigned Vision model, and fall back to your primary model only when that model is itself vision-capable.
🆕 Model capability probing now also tests embeddings — the Test-capabilities check includes an embedding probe, so you can verify a model's embedding support before assigning it.
🔄 Assigning the Embed role is now capability-gated too — only models confirmed (by probe or by name) to support embeddings can be assigned, so you can't bind a chat-only model to vector search by accident.
🔄 The Model Manager status column now shows all roles a model holds — for example "Primary + Vision" or all four roles together — each with its own color highlight, so multi-role models are easy to spot at a glance.
🔄 Dual-pane model window — embedding models (Lemonade on-prem) are now activated from a right-click menu ("Assign to Embed") instead of double-click, which previously fought with the collapse/expand gesture, flickered the list and could hide the active model.
🐛 Assigning an on-prem embedding model from the model window no longer fails silently — the Embed role is now actually saved, so the selected embedding model stays active after restart.
🆕 Chat window polish — the agent button now shows the active agent's name (with a tooltip when it is truncated) and sits at the far left of the status bar; the workspace button shows the full folder path on hover; and the Upload button moved into the memories window to free up space.
🐛 Folder scan and database cleanup in the document manager now behave correctly for the built-in agent (respecting the workspace folder; hiding the non-applicable Compact Database action).
🐛 Vision messages in the chat log now render with the same styled, colored prefix as the other prompt types instead of plain smaller text.
🆕 New cloud model provider — Tabitoken is now available as an OpenAI-compatible backend, so you can connect additional cloud models straight from the Model Manager.
🆕 Agent and chat pipeline documentation — the end-to-end architecture, component overview, and design rationale are now documented.
🐛 Switching to an existing chat could leave the assistant with no memory of the conversation even though every message was visible; the full chat history is now always restored into the model context.
🐛 Conversations with missing timestamps could be read back in the wrong order, making the assistant treat older messages as the newest; chat history is now always ordered correctly.
🐛 The Vision control could stay gray and the screenshot-region selector would not open even for vision-capable models; the indicator now lights up correctly, region selection opens reliably, and vision requests are sent to the right model and backend.
🔄 Memory extraction is more precise — when a message contains several facts, each one is now preserved instead of only part of the message, and duplicate memories are avoided; memory timestamps are handled reliably so saved memories stay accurate and in order.
🔄 Language support is more robust — fallback behavior is centralized and language coverage is formally defined, so the interface degrades gracefully when a language is not fully supported.
🔄 Developer tooling — heuristic ownership is now governed by an automated audit and a documented guide, keeping behavior decisions consistent across the codebase.
🧪 Regression coverage added for vision capability detection and the screen-selection lifecycle.

📅 11.08.26 - Version 1.0.81
🆕 Faster, stabler chat windows — reopening the same agent's chat now reuses its live session instead of rebuilding it from scratch on every open: windows open quickly, the conversation context is preserved, and the session is cleanly released when the last chat window closes; a session is never shared between two open windows at the same time.
🆕 Health Dashboard upgrades — the card grid is now responsive to window size, data loads in the background so the window no longer stalls, and the grid rebuilds itself automatically if a load fails; a new system database care area shows the database size with a guided cleanup wizard.
🆕 Linux and WSL display fixes — icons and emoji now render as clean monochrome glyphs instead of empty boxes, UI fonts resolve correctly across all windows, the workspace tab toolbar is restored, and chat control and model capability labels are readable again.
🆕 Multi-monitor and window positioning — window geometry is hardened on Windows and Linux multi-monitor setups, the WSLg window now reliably becomes visible at startup, the splash screen centers correctly (including under WSL), off-screen window positions are corrected, and splash icons fall back to SVG when the regular assets are unavailable.
🆕 Renaming a chat or group is now instant — the dialog opens with the input field already focused and the current name pre-selected, so you can type the new name right away.
🔄 Memory improvements — copy-pasted life summaries (jobs, companies, skills) are saved to memory again, and the app now always shows in the agent trace when memories are being stored, with a careful review pass for ambiguous content.

🔄 Shared configuration across chat windows — chats opened from different entry points now share the same configuration and model manager, so model choices and settings stay consistent across the app.
🔄 Agent setup reliability — errors during agent creation are now reported instead of silently swallowed, and custom Code Explorer budgets are preserved when the agent creator is reopened.
🔄 Built-in agent cleanup — database compaction actions that do not apply to the built-in agent are now hidden in the Health Dashboard.
🐛 Opening a chat window could crash in some configurations; chat windows now open reliably in all cases.
🐛 Reopening a chat could crash on a second open; the reopen path is now stable.
🐛 Prompt assignments saved from the Health Dashboard were silently lost; they are saved correctly now.
🐛 The system tray show/hide of the preview window could target a stale window; it now targets the live one.
🐛 Six rare crashes caused by missing imports across utility modules were fixed.
🐛 Drafting a CV and cover letter from your documents no longer misfires when the pasted job description contains technical wording — the right documents are now always loaded and used.
🐛 A dialog could open as a tiny sliver after an interrupted session; window sizes are now always restored and saved at a usable minimum.

📅 10.08.26 - Version 1.0.80
🆕 Path validation and normalization — symbolic links, trailing slashes, case differences, and short names are resolved consistently; browser-mode detection is fixed in agent utilities and the agent tools dialog; tool arguments are validated before dispatch with clear error status; web tools gained URL-safety hardening.
🆕 Linux and WSL experience — XDG configuration support, WSL model discovery with Windows API keys, idempotent provisioning, Linux download paths and buttons, tesseract and system file manager integration, platform-correct update links, MCP credentials in the correct Linux directory, Vulkan GPU offload helper, and hardened AMD GPU detection.
🆕 OAuth and token resilience — proactive token refresh before expiry, unified expiry buffer across all surfaces, runtime reader delegates to shared helper, treeview expiry aligned with configure dialog, and external-server status re-probe when the MCP config dialog closes, cached email/calendar data no longer appears valid after a live service failure, and token exchange runs over a dedicated secure client.
🆕 Proactive briefing polish — day and section labels are now colored via markdown for clearer visual separation, and the briefing footer shows which context sources were used.
🆕 Plain-language UI — wizard install messages, status bar, health cards, sync/memory dialogs, and auth strings use non-technical labels; context menu exposes "Thinking effort"; Research trace shows "documents reviewed"; Agent Instructions and Message Instructions replace System Prompt and User Prompt.
🆕 Chat and explorer hardening — codebase search uses two-pass source-first ranking, explorer scratchpads and final analysis render in UI, live status mirrors agent trace, quick-model responses are discarded and re-run with primary, redundant-work suppression prevents repeated calls, and malformed tool-call markup in responses is blocked.
🔄 Chat pipeline contracts — research evidence chains, response-quality retry controls, execution trace snapshots, research context deduplication, timing safeguards, and reviewer output bounds are hardened; continuation planner, execution planner, and research synthesizers now wire through the populated state channels.
🔄 Codebase research — Code Explorer runs under a single control plane with consistent routing, safe fallbacks, filename-first search, depth-limited exploration rounds, import-aware file reading, and research scratchpad tracking across web and document explorers.
🆕 Startup and setup polish — the first-run setup screen is more reliable and informative: initialization no longer stalls silently, the choice to skip automatic setup is remembered, each setup stage has its own Skip button with clear progress transitions, and the Model Auto-Setup card now toggles in both directions.
🔄 Agent setup and help polish — the agent creator's Advanced tab now groups the Auto/Passthrough/Verbose toggles with the Code Explorer budget behind a preset dropdown ("Auto prompt chaining"), Code Explorer depth and tool-call budgets are configurable per agent, and /help Codebase Search gained realistic example rows and a workspace-path tip.
🔄 Memory extraction reliability — substantial research turns now run memory extraction as before, and extraction is skipped cleanly when the answer is already covered or the conversation is too large.
🐛 BUG\_270 — Health Dashboard showed no cards on a fresh install; the grid is now built on first launch.
🐛 BUG\_271 — repeated failures on a dead URL caused a recursion error; backtracking now only triggers on genuinely empty responses.
🐛 BUG\_272 — the planner's tool replacement was dropped on the native tool path; it now reaches the executed call.
🐛 BUG\_273 — web fetches returning 404 now provide clear "page not found" guidance and a parent-URL fallback.
🐛 BUG\_274 — duplicate-call protection now blocks only the exact failed call instead of all read-only tools.
🐛 BUG\_275 — web page tools with a missing URL fail cleanly before dispatch.
🐛 BUG\_276 — a corrected URL is no longer replaced by an unrelated PDF lead.
🐛 BUG\_282 — codebase-analysis no-answer loop fixed with planner code-family guard and DOC\_CONTINUITY redirect.
🐛 BUG\_288 — search-read complement guard and CODE\_HINT pairing restored.
🐛 BUG\_289 — internal operations now honor role bindings.
🐛 BUG\_290 — CODE\_HINT regression and Guard 2 gap on hallucinated access refusals fixed.
🐛 BUG\_296 — cancelled codebase plan routing restored to tool\_agent dispatch.
🐛 BUG\_297 — import-following read extension revived in iterative planner with shared normalizer and budget fallback.
🐛 BUG\_298 — codebase\_search falls back to path\_scope when src/ is absent.
🐛 BUG\_299 — code tools remain on answer-gate retry when search evidence exists; failed reads excluded from re-extension.
🐛 BUG\_301 — successful-only loop tracking and scratchpad scope agreement across explorer paths.
🐛 BUG\_302 — Code Explorer runs under a single control plane with deterministic code-only dispatch.
🐛 BUG\_303 — control-plane routing hardening.
🐛 BUG\_306 — post-explorer final synthesis forced and synthesis prompt hardened.
🐛 BUG\_307 — explorer scratchpad and final analysis render in the UI; topic-drift self-contamination fixed.
🐛 BUG\_308 — leaked tool-continuation directives blocked from reaching the UI.
🐛 BUG\_309 — explorer token budgets raised so reasoning cannot starve content.
🐛 BUG\_310 — model request/response logs are now structured and complete, so provider-side debugging no longer fails on unreadable dumps.
🐛 BUG\_311 — explorer payload bounded, reasoning persisted, scratchpad enforced.
🐛 BUG\_312 — depth-scaled explorer round cap and filename-first discovery.
🐛 BUG\_313 — codebase-analysis no-answer loop fixed with covered-target suppression and internal-op budget sweep.
🐛 BUG\_314 — explorer content starvation fixed.
🐛 BUG\_315 — OAuth auth-state regressions fixed.
🐛 BUG\_316 — workspace path wiped by agent-config save fixed.
🐛 BUG\_317 — reviewer gate silent pass and calendar invalid\_scope on refresh fixed.
🐛 BUG\_319 — explorer auto-log scratchpad persists per round.
🐛 BUG\_320 — bounded codebase\_search fallback and session documentation added.
🐛 BUG\_321 — canonical llm\_client key and live memory-staleness query fixed.
🐛 BUG\_322 — code-search pipeline query mangle and 3 search-pipeline defects fixed.
🐛 BUG\_323 — the parent round no longer drops valid scratchpad tool calls during exploration; the tool allowlist stays in sync with the actual tool set.
🐛 BUG\_324 — explorer read content crossing subgraph boundary fixed.
🐛 BUG\_325 — hyphenation-guard follow-up and regex bug-class audit.
🐛 BUG\_327 — parent post-explorer round forced off high-effort thinking fixed.
🐛 BUG\_330 — Code Explorer strategy priority corrected.
🐛 BUG\_331 — synthesis-quality retry rounds forced off hot thinking fixed.
🐛 BUG\_332 — explorer terminal stop now accumulates reads instead of discarding them.
🐛 BUG\_333 — post-explorer planning-marker gate rejected answer-shaped thinking fixed.
🐛 BUG\_334 — post-explorer evidence chain fixed.
🐛 BUG\_335 — the turn-timing breakdown can no longer report a single phase as longer than the whole turn, and raw model log dumps are now bounded.
🐛 BUG\_336 — overlapping file reads in deep exploration no longer lose new lines, pointless re-reads of the same window are prevented, and compaction summaries keep real evidence instead of empty placeholders.
🐛 BUG\_337 — planning state now persists correctly between research turns.
🐛 BUG\_338 — research planning and exploration steps now share state correctly.
🐛 BUG\_339 — execution traces now show complete decision history.
🐛 BUG\_340 — research scratchpad deduplication and compaction summaries fixed.
🐛 BUG\_341 — clarification attempts, tool logging, classification, and file resolution hardened.
🐛 BUG\_342 — the answer reviewer no longer receives garbled evidence blocks, no longer rejects well-grounded answers, and its output cap is respected.
🐛 BUG\_343 — pipeline contracts hardened and audit fixture added.
🐛 BUG\_344 — strict workspace evidence and planner budget policies.
🐛 BUG\_345 — bot-protection pages (captchas and interstitial text) are no longer presented as research evidence, post-research answers are no longer cut off, and memory-extraction status is now observable.
🐛 BUG\_346 — the document-sync dialog now opens attached to the correct window, fixing centering, focus, and ownership.
🐛 BUG\_347 — truncated tool-call markup is no longer shown as a visible answer; malformed tool protocol is cleaned up before display.
🐛 BUG\_349 — generic org-noun entity capture and lost extraction JSON retry fixed.
🐛 BUG\_350 — OAuth token expiry unified across all surfaces with a shared helper and 5-minute buffer.
📅 05.08.26 - Version 1.0.79
🆕 Home folder works as a workspace again on every platform — pointing the workspace tab at your home directory (or any project folder) is now valid; app data directories are guarded so they can never be selected as a workspace and silently merged into the built-in agent.
🆕 Path handling hardened — workspace and database paths are resolved through one normalized helper, so symbolic links, trailing slashes, case differences and short names can no longer bypass the reserved-folder guard; browser-mode detection fixed in agent utils and the agent tools dialog.
🆕 Workspace-guard chain validated — full unit-suite baseline: 8,444 passed / 64 skipped / 10 pre-existing unrelated failures; 25+ new tests added by the chain.
🆕 Memory operations contract — memory saves with empty content are repaired from the conversation, successful saves no longer trigger redundant follow-up searches or duplicate background extraction, result correlation tolerates wording differences, malformed pending tool calls are handled safely, and explicit verification requests ("confirm it", "did you save it") still work; lifecycle tracing for completion and recovery decisions.
🆕 Tool execution contract — tool arguments validated before dispatch with clear error status; shared argument specs, canonical aliases and safe value coercion; unified success/failure/retry helpers for planning and recovery; web tools gained URL-safety hardening (blocks private/internal address targets, validates redirects, tracks canonical URLs).
🆕 Web follow-up correctness — the assistant no longer discards a good answer after an empty tool round, no longer loops into recursion errors on a dead link, correctly forwards the planned tool replacement, stops re-attempting the exact failed call, and no longer substitutes an unrelated PDF or page for the URL you actually provided; binary files are rejected as page evidence.
🐛 BUG\_270 — Health Dashboard showed no cards on a fresh install; the grid is now built on first launch.
🐛 BUG\_271 — repeated failures on a dead URL caused a recursion error; backtracking now only triggers on genuinely empty responses, so good answers are kept and dead-link loops end cleanly.
🐛 BUG\_272 — the planner's tool replacement was dropped on the native tool path; it now reaches the executed call.
🐛 BUG\_273 — web fetches returning 404 now provide clear "page not found" guidance and a parent-URL fallback instead of an empty result.
🐛 BUG\_274 — duplicate-call protection now blocks only the exact failed call instead of all read-only tools.
🐛 BUG\_275 — web page tools with a missing URL fail cleanly before dispatch; a successful fetch is required before search results count as fetched content.
🐛 BUG\_276 — a corrected URL is no longer replaced by an unrelated PDF lead; URL ranking is scoped to the current request and explicit hosts are respected.
🐛 Local model server fixes — legacy configuration no longer overrides the active endpoint (the "'prompt' not found" error is fixed), the context window self-heals when a request is too large, and reasoning budgets are no longer sent to local models that do not support reasoning.
🐛 Model Manager crash — model type detection now handles both internal and external model objects, so opening the window no longer crashes.
🆕 Linux/WSL usability — six gaps fixed: tesseract download and detection paths, the "Open GitHub Releases" link, opening files and folders in the system file manager, the validation interpreter default, and platform-correct update download links; MCP credentials are now stored in the correct Linux data directory; 18 new regression tests.
🆕 WSL model discovery — API keys configured on Windows are now available inside WSL, so cloud provider model discovery no longer fails with authentication errors.
🆕 WSL build reliability — a package conflict that broke provisioning is resolved, and provisioning is now idempotent (completed steps are skipped).
🆕 WSL quick-run launcher — a new launcher menu runs the Linux build directly in Python for fast testing or compiles a release build, mirroring the Windows launcher experience.
🆕 Faster release builds — release builds now use balanced compression, cutting build time from minutes to seconds with significantly smaller binaries.
🆕 GPU acceleration on Linux/WSL — a bundled helper script installs and verifies the Linux Vulkan driver stack so local models can use the GPU; AMD GPU detection hardened.
🆕 Local server health and startup behavior — the server status now reflects the real endpoint state; the managed server only auto-starts when a bound role actually needs it.
🆕 Window position memory on Linux — the main window and dialogs now remember their position (including off-screen settle positions) and open centered on first run.
🔄 Context menu and navigation cleanup — dead commands, unused navigation shims and phantom fallbacks removed; 324 tests green.
🔄 Path and branding audit — model download status is now brand-aware across app variants; telemetry and config fallbacks use the canonical path manager; dead code removed.
🔄 UI dead-code cleanup — unused window-state updater and wrapper methods removed (zero callers verified).
🧪 Test coverage — web URL-safety suite, web follow-up regression suites, workspace guard tests, Linux UI-gap suite, server health/boot-gate suites, window geometry persistence tests.
📝 Website — Linux download button, aligned download links for Windows and Linux, README updated for Linux support, inaccurate extract/install copy removed.
📝 Website — new version pill (v1.0.79) in hero, nav and footer, synced live from the version file; skip-to-main-content link now targets the main content on the landing and support pages.
📅 August 3, 2026 — Version 1.0.78
🆕 Workspace empty-state "create an agent" hint — when a freshly loaded workspace has zero agents, the status message becomes a persistent, clickable, pulsing hint: one click creates the agent (placed at the bottom-left of the visible viewport, pan/zoom-aware) and shows a follow-up toast explaining right-click → Chat; the hint auto-hides once an agent exists. Bugfixes along the way: the hint never showed in one tab mode, a stale-canvas crash guard, dark-theme-safe hint colors, and a follow-up toast that's harder to miss (delayed, long-lasting).
🆕 Agent Process Trace — the merged Agent Briefing node now shows friendly noun+count detail (e.g. "5 calendar events, 3 emails, 2 files") and no longer drops the calendar preload from the merged node; the same friendly reword applies to standalone (unmerged) briefing nodes; removed the dead legacy briefing-merge path.
🆕 Research pipeline isolation — memory / code explorer / web explorer / RAG explorer now run in isolated sub-pipelines with clean entry/exit handoffs and provider-metadata merge (no last-write-wins between them); 17/17 pipeline-audit items complete.
🆕 Routing internals cleanup — routing decisions and mutations are separated, dormant branches activated, with a remaining-edge audit and regression guard.
🆕 Autonomy control-plane — a production completion gate and a continuation-budget gate are wired in, contradiction checks are isolated per tier, repeated low-yield turns surface in the recovery policy, and identical planner leads are deduplicated so they consume no budget.
🆕 Completion tracking — research obligations now advance to "satisfied" / final answer on real research turns; required sources are derived from the user's intent; completion routing is wired through the existing flow.
🆕 Planner split — the large internal planning module was split into focused, behavior-preserving modules, bringing every file under the maintainability size bar.
🆕 Autonomous codebase execution contract — coding tasks now run under a deterministic execution contract with validation enforcement.
🆕 Token reporting — provider-neutral token usage with full-prompt fallback estimates, compact status labels, /help explanation, unified chat footnote styling, user-facing trace grouping (status / decision / tool display names), consistent neutral trace metadata.
🆕 End-to-end latency phase breakdown — Total / LLM / Tools / Continuation / Memory / Background reported per turn.
🆕 Budget defaults verified — 6 budget scenarios measured through the deterministic harness; every tier's observed max equals its default cap (headroom +0), 4 invariants guarded.
🆕 Per-explorer model selection — each research explorer can now use its own model; a unified synthesis retry budget; goal-stack reset unification, plan-revision reason enum, tool-call registration centralization, explorer timeout guards and findings accumulation.
🆕 4 new budget-contract test scenarios (tier starvation / reserved slot / failed-tool alternate family) — harness baseline 23 → 27 scenarios.
🆕 Greeting boundary — greeting handling fixed at the conversation boundary; proactive briefing retry-loop fix.
🔄 Pipeline audit Phase 2/3 — plan statuses, state-boundary enforcement, 5 isolated adapters + 52 adapter unit tests, 17 integration tests for end-to-end state isolation.
🔄 Routing migration closeout — remaining-edge audit completed; baseline-sync cleanup and a harness trace-recording quirk fix.
🔄 Autonomy state writer migration — canonical reducers for semantic writes.
🐛 BUG\_266 — automatic memory tags stopped working; extraction aborted before tag generation — fixed.
🐛 BUG\_267 — /help footer lines rendered oversized; legend words were misdetected — tightened to letter-only labels.
🐛 BUG\_268 — gmail tools were dead in both the preloading briefing and explicit chat, and the filesystem tools allowed the wrong root folder. Four interlocking root causes fixed.
🐛 BUG\_269 — MCP server configuration went missing on some chat paths; compatibility writes are no longer dropped.
🐛 Stale sessions self-heal — stale saved sessions with empty MCP server state now self-heal on the next run; a fresh-session guard prevents spurious rows.
🐛 A stale saved session can no longer re-enable a disabled MCP server (e.g. gmail); only enabled servers are persisted.
🐛 Fetching a page's content only returned the hero section — now extracts the full page.
🐛 P0 emergency override — when all synthesis retries are exhausted, the stashed parallel synthesis result (or thinking) bypasses the empty-response path instead of showing "Empty LLM response"; false positives reduced for short affirmatives (yes/ok).
🐛 Chat sidebar delete no longer auto-creates a new chat; batch remove for multi-select.
🐛 Numbered selection "1" no longer falsely routes to codebase mode; comment-code collision error fixed; new pre-commit lint hook.
🐛 Routing bookkeeping probe made picklable; round-5 explorer-dispatch migration + node-side autonomy recorders.
🐛 OAuth token expiry is now detected proactively for automatic refresh; stale service attributes removed.
🐛 The always-fail synthesis reviewer now terminates cleanly at the end; review keys declared as real state channels.
🐛 Codebase search flakiness root-caused with a reproduction loop; proactive-briefing retry loop fixed.
🧪 17 state-isolation integration tests + 52 adapter unit tests; edge-purity regression guard + reviewed 7-scenario baseline sync; critique-verification guard tests (non-matching-source false-positive, category-scoping, end-to-end satisfied → final answer); compiled-graph probe proving the objective contract reaches the completion gate on real turns.
🧪 Checkpoint migration test suite (30 tests) — input-wins correction, direct heal, agent-config fallback, fresh-thread no-spurious-checkpoint guards, and the masking-guard tests; mutation-checked (guard removal → 3 failures).
🧪 4 budget-contract harness scenarios + baseline 23→27; 8 RAG-bypass unit tests; E2E real-LLM integration test for the "research query → yes" failure chain; planner-level lead-dedup budget tests.
📅 July 29, 2026 — Version 1.0.77
🆕 RAG audit — consolidated chunk configuration, extracted shared retry/budget constants, promoted the RAG execution tool to shared helpers, consolidated name matching into a single class, added a "deep" depth level for exhaustive search queries.
🆕 Tool-Calling audit — explorer sub-pipelines now query the registry for tool sets, async timeout (120s) on MCP execution, sync timeout via thread pool, defensive metadata stripping before schema validation, shared web tool helper, debug logs at all dispatch/credential refresh sites.
🆕 Planning audit — consolidated planner budget constants, per-family planner strategies extracted into separate modules, mid-turn plan revision trigger, proactive lead scanning extracted into a shared module, debug logs for tier selection, planner node skipped when the plan is already ready.
🆕 Memory audit — importance scoring wired into memory context injection, guard against agent-output false memories, consolidated into a single extraction prompt template, extraction made mandatory, blocking contradiction detection removed (now fully non-blocking).
🆕 Synthesis Quality Gates audit — removed a redundant classification call and a duplicate synthesis reviewer, consolidated 3 retry budgets into one shared counter (max 3). Bug caught during code review: unbounded escalation loop (counter never incremented — fixed). 14/14 tests pass.
🆕 MCP tool checkboxes wrapping grid — MCP server tool checkboxes changed from single-row overflow to a max-4-per-row wrapping grid layout.
🆕 Document details dialog migrated to the managed window system — persistent geometry, parent centering, and proper close semantics.
🆕 Document management tab now opens dialogs with the correct parent window.
🆕 Full lint compliance — all windowing lint rules pass with zero violations; comprehensive audit confirmed zero remaining migration candidates.
🔄 Master audit status table — all 5 branch audits tracked in cross-linked session docs with per-branch progress.
🔄 Synthesis quality test rewrite — 3 previously skipped synthesis review tests rewritten to test the in-graph reviewer directly (now 14/14 active).
🔄 Documentation updates — dialog migration doc updated, windowing compliance audit table and docs index updated.
📅 July 28, 2026 — Version 1.0.76
🆕 Calendar dialog freeze fixed — root cause #2 resolved: missing locale-data files required by the date picker; related import exclusion removed.
🆕 Calendar dialog hardening — debug logs across all click-to-dialog lifecycle phases; exception cleanup hardened with graceful fallbacks.
🆕 Two isolated reproductions created: dialog lifecycle probe (8/8 tests) and date picker + locale isolation probe (5/5 tests).
🆕 New pre-commit lint rule — flags dialogs that grab input before they are visible, preventing a regression of the freeze bug. 49 unit tests, 0 violations on the real codebase.
🆕 Calendar event click freeze — input was grabbed on an invisible window, blocking all interaction. Fixed by grabbing input only after the window is shown; audit found and fixed 2 more same-pattern bugs. 14/14 grab-stack tests pass.
🆕 Google API discovery files not bundled — calendar/gmail API calls failed at runtime. Fixed by bundling just the two needed discovery files (saved ~98 MB); a defensive runtime flag automatically switches to the HTTP backend.
🆕 Proactive research suggestions were non-functional since creation — leads were marked as explored before the check. Fixed; URL lead exception now live.
🆕 Web search results were lost between tool rounds when a fetch was blocked; results are now preserved across rounds with a safety cap.
🔄 Compilation hardening — 4 build fixes (Google namespace, test dependency, locale data, date picker import).
📅 July 26, 2026 — Version 1.0.75
🆕 Calendar Tab — full Google Calendar view with 3-day/week/month modes, event CRUD, date pickers, persistent local event cache, and card-based fallback placeholders.
🆕 Documents tab in Manage Agent — embeds the full document manager UI (tree, upload, scan, delete, import/export, sync) filtered to the current agent.
🆕 Proactive briefing — smart context injection with calendar/gmail/recent files, greeting detection in 7 languages, auto-trigger on chat window open, markdown table format.
🆕 Streaming automatic quality gates — responses are quality-checked as they stream, eliminating an extra round-trip.
🆕 Cross-family tool chaining — chains to complementary tool families when the primary is exhausted.
🆕 Quality-aware backtracking — pivots when answer usefulness is low, via an evidence-cache gradient.
🆕 Mid-turn backtracking on empty tool results — retries with a different tool family.
🆕 Semantic lead extraction — scans tool results for conceptual gaps to continue research autonomously.
🆕 Cross-turn goal persistence — remaining multi-goal sub-tasks survive per-turn resets.
🆕 Full i18n (internationalization) — 7 languages (EN, DE, FR, ES, IT, NL, PL) with intent recognition patterns, tool router keywords, self-instruct detector, prompt bundles, and intent catalogs. 166/166 tests passing.
🆕 Codebase-aware research — parallel synthesis + code symbol index.
🆕 New LLM backend providers — with API-key fallback chains.
🆕 Synthesis reviewer — orchestrator-level observational pass for response quality.
🆕 Multi-goal quality gate — router-level gate for multi-goal synthesis routing.
🆕 Tool-results prompt blocks — 4-language tool-result prompt blocks for the chat prompt.
🆕 Proactive gmail/calendar context injection for chat sessions.
🆕 Trace panel improvements — success/fail status indicators, decision labels, tool display names/categories, internal step grouping, total tokens in status bar.
🆕 Chat orchestration — cross-turn state management and tool routing for multi-agent pipelines.
🆕 Continuation planner — empty-response tool routing logic and unsatisfied-goal tracking.
🆕 Codebase Research Workflow — evidence floors and heuristic planning patterns documentation.
🆕 Codebase synthesis gate — prevents prompt artifacts in responses.
🆕 Automatic codebase search and read-file guidance in execution planning to prevent hallucination.
🆕 RAG Explorer — dedicated document exploration with depth-aware planning (conceptual/semantic/structural/comparative), automatic execution planning, dedicated prompts, and a comprehensive test suite.
🆕 Web Explorer — dedicated web research sub-agent with isolated context (no conversation history), confidence-based gating, up to 100 tool calls / 20 rounds, and 64 tests.
🆕 Code Explorer — dedicated codebase analysis sub-agent with retry logic, scratchpad tools, a dedicated analytical system prompt, and a comprehensive test suite.
🆕 Codebase analysis depth — auto-continue mechanism (3 rounds), context window pruning between exploration rounds (41 edge-case tests), enhanced code exploration directives, context prune summaries.
🆕 Bundling improvements — Google libraries and language data now bundled (fixes a startup crash), compression bug fix with defensive HTTP fallback, date picker include, logger positioning fix.
🆕 Calendar tab: redesigned event dialog — full date pickers, aligned date/time field sizes, geometry persistence, styled card-based placeholder when not configured, immediate first-load events (no 60s wait), unified dialog with event-click-freeze fix, responsive description field, dynamic event text truncation in month view.
🆕 Contradiction source URL extraction — extract source URLs from contradiction descriptions for transparent evidence tracking.
🆕 MCP credential sync — real-time OAuth2 auth state sync to prevent credential drift between sessions.
🆕 Settings: thinking telemetry — removed from default config (opt-in only).
🆕 Scratchpad improvements — clear wired through; scratchpad instructions added to the Web Explorer system prompt.
🔄 Decomposed oversized prompt-building and routing functions; router split into specialized modules; chat node decomposed; phase-gate centralization complete; structural→behavioral test migration (25 files); import hoisting in hot paths; tool pipeline consistency fixes; i18n pattern factory collapse.
🔄 Centralized semantic gate module for synthesis decisions.
🔄 Reviewer node — intelligent response quality validation.
🐛 BUG\_251 — continuation planner expansion guards + test isolation fix.
🐛 BUG\_250 — greeting hallucination-continuation from conversation history + briefing grouping not merging.
🐛 BUG\_247 — chat session sidebar delete leaves entries / doesn't remove from sidebar.
🐛 BUG\_246 — infinite recursion loop for simple greetings.
🐛 Document tab — no longer crashes on scan; source path handling fixed.
🐛 Calendar tab — MCP Manager button opens the new server list; missing Close button added; respects per-agent MCP config.
🐛 MCP window freeze on open — fixed; calendar placeholder/config fixes.
🐛 Flashing empty windows at startup — windows are withdrawn immediately after creation.
🐛 Gmail OAuth2 token persistence — 3 compounding bugs fixed (data loss, triple-nested JSON, race condition).
🐛 Calendar event click freeze — managed window now shows before grabbing input.
🐛 Calendar event detail fields empty — fixed field parameters.
🐛 Calendar month view — accepts extra arguments to ignore hallucinated LLM arguments.
🐛 Briefing — context injection order fixed (after MCP filtering); response no longer lost; instructions actually injected; greeting detection uses language patterns instead of hardcoded English.
🐛 7 failing chat tests — i18n verb gate + state key whitelist + structural fixes.
🐛 Language detection signals missing for DE/FR/ES/IT/NL/PL — restored per-language detection.
🐛 Non-RAG tool results not rendered in prompt — missing rendering code restored.
🐛 Self-instruct detector rejects short structured responses — fixed.
🐛 BUG\_256 — calendar fixes — wrong URL paths, cache indexing, dependency exclusion root cause, credential drift sync.
🐛 BUG\_245 — filesystem MCP allowed root stuck on home-dir fallback.
🐛 BUG\_244 — tool workspace path now resolves to project root when empty.
🐛 BUG\_243 — codebase search scoped to the code folder + structure discovery steps + 17 unit tests.
🐛 BUG\_242 — codebase-search branch regression guard for non-codebase flows.
🐛 BUG\_239/240/241 — gmail/calendar tool routing regression + false-positive extraction.
🐛 BUG\_235 — plan continuation edge mutation regression.
🐛 BUG\_234 — max tool calls default alignment (5→8) + codebase content section.
🐛 BUG\_233 — deep codebase research collapse (plan continuation + sync + dedup).
🐛 BUG\_232 — dynamic tool call bump + codebase pattern + multi-goal connector detection + syntax fix.
🐛 BUG\_231 — parallel RAG zero-out.
🐛 BUG\_230 — synthesis-review-retry v2 + response truncation mid-word from the thinking budget.
🐛 BUG\_228 — quality gate skips tool re-emission when the response is empty.
🐛 BUG\_225 — planner-side user-filename bias over search rank + DRY helper.
🐛 BUG\_226 — multi-file imperative in code-exploration hint.
🐛 BUG\_224 — filename-first routing for code analyse/codesearch.
🐛 BUG\_223 — codebase search tool ignored by the LLM and dropped by the validator (3 root causes).
🐛 BUG\_222 — disable-tools three-site guard.
🐛 BUG\_206 — synthesis failure cascade follow-up fixes.
🐛 BUG\_205c — tool-results rendering regression fixed.
🐛 BUG\_205b — parallel tool execution double-wraps tool results.
🐛 BUG\_136 — gmail over-extraction regression + false-positive extraction.
🐛 BUG\_090 — Google deps unavailable in the packaged app — added Google libraries, lazy calendar imports, lazy dependency checks.
🐛 search\_files missing pattern TypeError + argument alias fix.
🐛 Synthesis reviewer FAIL verdict not enforced — now enforced with a graph re-invoke.
🐛 Context re-fetching on every turn — fixed.
🐛 Briefing date accuracy + agent misreading the date — fixed.
🐛 Synthesis reviewer short-circuit — PASS for greeting + proactive briefing responses to prevent false rejection.
🐛 Window grab-stack fixes — manually re-establish parent grab when closing modal dialogs, defensive grab handling in managed windows and wizard chains.
🐛 Test marathon — 20+ test failures resolved to 0.
📅 July 19, 2026 — Version 1.0.74
🆕 /help command overhaul — GFM markdown tables with 3-column examples, Codebase Search health card, Setup Guides block, and System-message markdown routing.
🆕 Calendar MCP server integration — Google Calendar support with OAuth2 credentials, event fetching, and background thread async fix for Windows event loop compatibility.
🆕 Dynamic tool loading by default — tools now discovered at runtime via the MCP tools/list endpoint, reducing initial payload size.
🆕 Codebase-aware research tools — continuation planner codebase strategy with regex tightening and orphan routing.
🆕 Answer-quality feedback loop — LLM scoring + pattern decay for planner intelligence.
🆕 Ambiguity detector — LLM-as-judge with targeted clarification questions.
🆕 Multi-turn research autonomy — typed sub-pipelines with goal/clarification/evidence/trace state splits, dynamic tool loading, and Calendar integration.
🆕 JWT token refresh logic — background thread refreshes 30 seconds before expiry to prevent interrupted sessions.
🆕 Schema versioning for checkpoint migration safety.
🆕 File-integrity guard in pre-commit config — detects silent file deletion in source folders.
🆕 Async loop deadlock guard — raises on event-loop thread calls to prevent deadlocks.
🆕 BUG\_221 Variant-A fix — drop the capability probe task-key hijack.
🐛 BUG\_220 — missing user id argument to memory stats/export.
🐛 BUG\_219 — persist dispatch dedup state + drop wrapper tags.
🐛 BUG\_218 — normalize LLM alias keys + 5 layer-2 literal-echo guard tests.
🐛 BUG\_217 — streaming-disabled default assertion test.
🐛 BUG\_216 — consolidate chat session tools to a single source.
🐛 BUG\_215 — surface the actual tool error on hard failure.
🐛 BUG\_214 — stale response cross-turn leak.
🐛 BUG\_213 — gmail tools + gmail built-in.
🐛 BUG\_212 — planner override.
🐛 BUG\_209 — infinite delete\_messages loop cascade (10 interlocking bugs fixed).
🐛 BUG\_208 — Calendar backport.
🐛 BUG\_207 — test collection errors from mock pollution.
🐛 BUG\_206 — synthesis failure cascade — 4 interacting fixes.
🐛 Single-column GFM tables — table separator fix.
🐛 Module-level logger binding added across 9 source files.
🐛 Missing imports fixed (config manager, cloud backend detection).
🐛 8 collection errors blocking the test suite resolved.
🐛 Test triage session 1 — substates + mock fixes (98→93 failures).
🔄 P0-P3 chat architecture refactoring complete — LLM invocation extraction, tool subgraph extraction, parallel tool delegation, message workflow + chat list manager extraction.
🔄 Tkinter maintainability audit — 12 dialogs migrated to managed window classes with geometry registry for consistent path resolution.
🔄 Performance — 28 inline regexes hoisted + 8 frozensets + 3 import hoists; 848 f-string logger calls converted to lazy formatting; batch metadata queries; pre-compiled regexes in the markdown renderer; reduced redundant UI updates.
🔄 Inline imports hoisted to module top level across 37+ files.
🔄 Circular dependency cluster breaks — rate limiter extracted, branding made pure leaf, path utils extracted, search engine base extracted. Zero cycles remaining.
🔄 Managed window close now flushes sash positions automatically.
🔄 Sash persistence wired to all 10 paned windows (workflow editor, template browser, MCP server list, model manager embedding, memory persona) with vertical orientation support.
🔄 Embedding manager support for the model manager view.
🔄 JSON compat wrappers replacing raw imports across all source files.
📅 July 13, 2026 — Version 1.0.73
🆕 BUG\_200: chat-session message listing routing + no-arg tool extraction fix.
📝 BUG\_199 + BUG\_200 doc update + v2 extractor fix documentation.
📅 July 12, 2026 — Version 1.0.72
🆕 MemorySearch None query guard — prevents 3 cascading errors (embedding crash, lower() on None, len() on None) when the memory search query is not extracted (BUG\_176).
🆕 BM25 index build fix — fuzzy matching now passes the right structure to the indexer.
🔄 Reverted embedding preload auto-reload — restored the original simple preload callback (auto-reload broke auto-discovery).
🆕 Autonomous cross-turn document task management — the chat orchestrator now tracks document tasks across turns for CV/cover-letter workflows.
🆕 Duplicate pending tool call hard abort fix — defers to a per-call validator instead of aborting all pending calls.
🆕 RAG tool rewrite for failed read calls — failed read calls are rewritten to document reads, preventing silent context loss when documents are overwritten.
🆕 BUG\_197: Model Manager UI for per-backend RPM limits — new UI field to configure background rate limits per backend.
🆕 BUG\_197: Per-backend background throttle — memory and contradiction operations now respect per-backend rate limits to prevent API rate-limit errors.
🆕 BUG\_191: Per-backend concurrency limits — rate-limited backends get configurable concurrency limits with a new shared retry helper migrated across 8 call-sites.
🐛 BUG\_183: Resumed short option loses document task — the active document task is rebuilt from chat history on resume, preventing filesystem drift when RAG docs are loaded.
🔄 Memory management optimization — reduced GC pressure for a lower memory footprint.
🔄 Large shrink refactor completed — tool and RAG nodes deleted, all consumers migrated to canonical homes.
🔄 Tool-family recovery registry refactored with per-rule telemetry counters (BUG\_174/175).
🔄 Debug namespace expansion — 22 new mute tags (polling, langgraph, llm\_invoc, compaction, autonomy, learned, etc.) for fine-grained --debug-mute control.
🔄 Bracket tags for untagged debug logs — added to the noisiest files.
🔄 Production log noise reduced ~50% — migrated debug logs to a dedicated child logger.
🔄 Backport toolkit consolidated — dedicated backport folder with AST rewriter, import walker, and cascade builder.
🔄 Backporter script fix — corrected import prefix in the v1\_v2 backporter.
🔄 13 xfail markers removed from equivalence tests — all divergences closed.
🐛 BUG\_176: MemorySearch crashes when the memory search query is None (3 cascading errors).
🐛 BUG\_175: universal envelope-check parity across all 4 family rules.
🐛 BUG\_174: tool-family recovery registry generalizes BUG\_173.
🐛 BUG\_172: broadened gate to recover tool calls from message history.
🐛 BUG\_171: planner→dispatcher argument contract mismatch fixed.
🐛 LLM backpressure handling — optional provider timeout recovery.
🐛 18 broken logger sites resolved across 6 files.
🐛 Expansion logic corrected to use per-family checks instead of a global flag.
🐛 BUG\_191: rate-limited plan backend now defaults to concurrency 1 to prevent rate-limit collisions.
🐛 BUG\_190: router digit-leading filenames — the router now correctly extracts filenames starting with digits (e.g. 250525\_XYZ.txt) instead of misrouting them.
📝 Memory correction request handling documentation.
📝 RAG context loss detection for short option follow-ups.
📝 Comprehensive guide for RAG tool rewrite scenarios in chat execution.
📝 Sprint plan for shrink refactor completion.
📅 July 11, 2026 — Version 1.0.71
🆕 Tool-family recovery registry (BUG\_174/175) — universal envelope-check parity across all 4 family rules with per-rule telemetry counters.
🆕 Debug namespace expansion — 22 new mute tags (polling, langgraph, llm\_invoc, compaction, autonomy, learned, etc.) for fine-grained --debug-mute control.
🆕 Bracket tags for untagged debug logs — added to the 4 noisiest files (~70 log calls).
🆕 Dynamic token budget fix for chat nodes to prevent system prompt overage.
🆕 Cross-reference layer for the chat pipeline — detects memory-RAG-tool overlaps and gaps.
🆕 Structured autonomy helpers — goal plans, evidence cache, and per-goal iteration limits for multi-goal synthesis.
🆕 LLM-based summary-on-stash logic for multi-goal advancement with stuck-goal filtering.
🆕 Execution planner — context propagation, autonomy analysis, and parallel planning for independent tool steps.
🆕 Continuation planner — LLM-powered Tier 2 decisions, circuit breaker for self-instruct loops, intelligent resource routing.
🆕 Tool pipeline adapter — budget guard and typed boundaries for RAG/tool flows.
🆕 Contradiction cache — per-turn memory deduplication with timeout handling.
🆕 Synthesis intent extractor — tool-call directive extraction from LLM prose.
🆕 MCP system prompt budget cap — per-agent override.
🆕 Async search\_files implementation — max\_results and timeout safety for Windows.
🆕 Watchdog mechanism for recursive polling loops in the chat view.
🆕 Session-aware memory loading — prevents stale data issues.
🔄 Tool-family recovery registry refactored with DRY static methods and paranoid test coverage.
🔄 Production log noise reduced ~50% — migrated debug logs to a dedicated child logger.
🔄 Chat architecture simplified — tool result envelopes normalized, parallel tool safety derived from the registry.
🔄 Tool and RAG nodes deleted — consumers migrated to canonical homes.
🔄 Legacy single-node paths soft-deprecated with dual gates.
🔄 Synthesis handler split into section and context parts.
🔄 Learned patterns split into an organized package structure with re-exports.
🔄 Goal-stack reset logic consolidated into a single helper across router and synthesis.
🔄 Monolithic routing refactored into named single-responsibility functions.
🔄 Per-agent config helpers consolidated into a shared resolve function.
🔄 13 xfail markers removed from equivalence tests — all divergences closed.
🐛 BUG\_175: universal envelope-check parity across all 4 family rules.
🐛 BUG\_174: tool-family recovery registry generalizes BUG\_173.
🐛 BUG\_172: broadened gate to recover tool calls from message history.
🐛 BUG\_171: planner→dispatcher argument contract mismatch fixed.
🐛 LLM backpressure handling — optional provider timeout recovery.
🐛 Expansion logic corrected to use per-family checks instead of a global flag.
🐛 RAG context type guard in the token budget application.
🐛 Thread id propagation fix for chat manager sidebar and MCP chat-session tools.
🐛 Agent creator and prompt wizard window management — close button logic and destroy bypass fixed.
🐛 Tool executor wrapper fix to propagate cross-thread rejection errors.
🐛 Synthesis handler production failure modes fixed (BUG\_112/116/117/118).
🐛 Continuation planner MCP tool directive handling — self-instruct loop fixed.
🐛 Numbered selections and workspace paths handling in chat orchestration.
🐛 Task key passed incorrectly for recovery calls — cheap model no longer used instead of primary.
🐛 18 broken logger sites resolved across 6 files.
📝 Chat architecture simplification documentation.
📝 Execution planner overview and cross-reference layer documentation.
📝 Sprint plan for shrink refactor completion.
📅 July 06, 2026 — Version 1.0.70
🆕 MCP marketplace treeview UI — Install button, alternating row colors, server status indicators.
🆕 Dynamic tool discovery via the MCP tools/list endpoint — tools now discovered at runtime instead of hardcoded.
🆕 API key authentication for MCP servers with token validation and status indicator.
🆕 External templates and OAuth2 config support for auth-gated MCP servers.
🆕 Consolidated prompt injection — standardized system prompt handling across built-in and external MCP servers.
🆕 MCP architecture analysis documentation for file system, browser, and memory servers.
🆕 Dual-model system support — model roles (Fast/Heavy/Both/Embedding) with per-agent override.
🆕 Role assignment context menu — status-aware gating; grays out roles for un-downloaded, corrupted, or unavailable models.
🆕 Per-role highlighting and sorting in the Model Manager view.
🆕 Continuation planner decision store and confirmation logic for LLM-based planning.
🆕 Extraction helpers for the continuation planner to handle RAG and filesystem search results.
🆕 Unified intent recognition — single pattern catalog replacing scattered intent systems.
🆕 Duplicate-tool guard in the synthesis handler prevents infinite loops when the same tool is re-emitted (BUG\_089).
🆕 Word boundary regex for language detection — prevents false negatives in French/English substrings.
🆕 Three new pre-commit lint rules — dialog geometry, raw top-level window usage, and window inheritance compliance.
🆕 Horizontal sash persistence binding for dialog windows with a configurable default fraction.
🆕 Fullscreen overlay support for the area selector.
🔄 Windowing compliance: P0 + P1 + P2 + P3 migrations complete — 38 messagebox calls and 23 file-dialog calls migrated to the dialog service, 0 raw messagebox calls remaining.
🔄 16 manual save/destroy dialog calls replaced with proper close semantics.
🔄 5 offenders (document loader, loading view, backend wizard, reasoning probe, prompt picker) migrated to managed modal dialogs.
🔄 10 Tier 2 dialogs migrated to managed window classes with a fit-to-content geometry persistence fix.
🔄 Wizard base classes migrated to managed modal dialogs.
🔄 30 parent-window AttributeErrors fixed across 16 files — the managed window IS the window (BUG\_108).
🔄 4 wizard import paths fixed (BUG\_108).
🔄 2 inner dialogs in the agent tools dialog migrated to module-level managed dialogs (BUG\_109).
🔄 Model recovery AttributeError fixed in the lemonade-python-sdk (BUG\_110).
🔄 Fit-to-content geometry persistence fix — auto-fit no longer overrides saved geometry on subsequent opens.
🔄 Removed per-role UI dropdowns — context-menu-only role assignment with auto-migration.
🔄 Redundant internal client instantiation removed — refactored to use the task key for faster clients.
🔄 Test suite cleanup — removed dead imports, obsolete scaffolding, debug scratch files.
🔄 Python 3.14+ compatibility — lazy submodule discovery, removed eager langchain import loading.
🐛 Blank agent component positions during workspace rebuilds — fixed missing stale-position cleanup.
🐛 Tool calls blocked for pathless tools (filesystem info) — the path validator now skips tools that take no path parameter (BUG\_111).
🐛 Chat-only agents with no workspace path hallucinated filesystem paths — injected fallback instruction to always ask the user for a path (BUG\_111).
🐛 RAG not triggered for numbered selections (e.g. user sends "1" to select from a menu) — the router now resolves numeric inputs against the previous assistant message's numbered list (BUG\_111).
📅 July 03, 2026 — Version 1.0.69
🆕 Source-label history and audit policy documentation for self-learning provenance tracking.
🆕 Learned intent patterns added to improve tool routing accuracy.
🆕 Web-search intent recognition and keyword patterns to improve agent reasoning accuracy.
🆕 Duplicate-tool guard in the synthesis handler prevents infinite web\_search loops when results are already loaded (BUG\_100).
🆕 Guard now extracts a different tool (e.g. web\_fetch\_content) when the same tool is blocked, instead of just escalating synthesis.
🆕 web\_fetch\_content and web\_scrape\_page alias support for prose-based tool extraction.
🆕 Web content tool set updated with all MCP web tool names.
🔄 Self-learning feedback loop — user message extraction logic added to the tool node for future learning signals.
🔄 Documentation cleanup — broken markdown links removed and path references corrected across docs.
🧪 Sentinel memory store isolation added for test suite isolation.
🧪 Jaccard-set-overlap deduplication logic for chat MCP server document matching.
🧪 13 tests for BUG\_100 — duplicate-tool guard, web content extraction, tool constants, planner family membership.
📅 July 02, 2026 — Version 1.0.68
🆕 RAG-irrelevance bypass in the synthesis quality gate — valid parametric-knowledge answers no longer rejected when RAG returns irrelevant documents.
🆕 Multilingual web-search intent examples added to the intent recognizer for price/cost/research queries.
🆕 Web search fixed (BUG\_088) — missing packages added to the build.
🐛 Agent fails first attempt on general-knowledge questions — intent system missed web-search routing; the synthesis quality gate rejected valid answers (BUG\_089).
🔄 Markdown rendering improvements — reduced code block spacing, fixed bold text in the chat window, resolved tag priority issues.
🔄 Memory extraction categorization rules clarified — distinguish preferences, facts, and situational context.
🔄 Memory tool system prompt and role descriptions improved in the template editor UI.
📅 July 01, 2026 — Version 1.0.67
🆕 Multi-Agent Pipeline template editor — replaces the old editor window with proper dialog management and a context menu entry.
🆕 Infinite retry loop detection and state merging for tool failures in the Multi-Agent Pipeline executor.
🆕 Memory extraction logic for the Multi-Agent Pipeline — extracts final loop memories from producers with thread support.
🆕 Memory and compaction sub-pipelines for Multi-Agent Pipeline challenges.
🆕 Progress message handling for the normal chat path with Tkinter-safe queue.
🆕 RAG context resolver — auto-filters missing documents in Multi-Agent Pipeline loops.
🆕 Tracking for successful RAG reads to prevent infinite loops in self-instruct detection.
🆕 Regex-based pseudo-XML tool call stripping utility for LLM invocation logic.
🆕 Multi-filename check to fix planning prose escalation logic in the Multi-Agent Pipeline.
🆕 Reviewer agent check — skips forced document reads for review agents during loops.
🆕 Multi-Agent Pipeline role declarative model — decouples template execution logic from agent node branching.
🆕 Unit tests for memory extraction and pipeline routing.
🆕 Graph progress transport architecture documentation.
🆕 Score degradation detection and early loop termination in pipeline routing.
🆕 Context menu entry for the pipeline editor.
🔄 Pipeline codepath unified between the legacy engine and the chat node.
🔄 Router split into a pure intent classifier + state orchestrator.
🔄 Tool, memory, and compaction processing reduced to thin wrappers with re-exports.
🔄 Agent-specific memory extraction logic — skips drafts for loop-affected agents.
🔄 Cycle-breaker logic to prevent self-instruct leak in the synthesis handler.
🔄 Reasoning budget caps removed from the payload to prevent model default reasoning on empty content.
🔄 Reviewer gate prompt tightened for more explicit filtering criteria.
🔄 Persistent loop state handling and stale-default refresh for all agents.
🔄 Producer loop source output injected into reviewer context for proper filtering.
🔄 Stale config validation logic and improved agent defaults handling.
🔄 Thread-safe progress handling.
🔄 Conditional chat visibility logic for pipeline agents in the context menu.
🔄 Idempotent prompt seeding logic for missing default prompts.
🔄 Global memories migration logic for agent orchestration and shared memory management.
🔄 Trace collector support for agent execution chains and span tracking.
🔄 SearXNG engine added to mini wizard search test results with public instance handling.
🐛 Pipeline agent tool emission failure fixed by correcting MCP server overwrite logic in the draft cover letter flow.
🐛 Self-instruct leak fixed in the pipeline codepath and synthesis handler.
🐛 Pipeline assertion mismatch bug in the producer-reviewer loop resolved.
🐛 Context loss in the state graph fixed by ensuring producer loop context propagation.
🐛 Max tokens floor enforced for the chat path, preventing short garbage output.
🐛 Context loss in the pipeline executor when an agent's max token limit is reached — resolved.
🐛 Pipeline loop router hallucination handling in reviewer context (BUG\_034).
🐛 RAG alias matching guard (BUG\_087) — prevents drafting responses when explicit filenames are present.
🐛 RAG synthesis quality validation and escalation propagation fix in the pipeline.
🐛 Empty response when RAG already loaded documents in the synthesis handler.
🐛 Reasoning effort handling corrected for unsupported providers in internal operations.
📅 June 28, 2026 — Version 1.0.66
🆕 Multi-Agent Pipeline Producer-Reviewer architecture — loop detection, hallucination safeguard, inline upstream context markers.
🆕 Multi-engine web search fallback — Wikipedia, DuckDuckGo, Brave, SearXNG, and more.
🆕 RAG adaptive chunking for oversized document chunks — improves embedding quality.
🆕 MCP tool schema handling for pipeline agents and chat agents.
🆕 Memory and RAG loading added to the pipeline system for producer-reviewer context.
🆕 Token budget parameter to suppress tool calls in internal operations.
🆕 Thread-safe progress queue manager.
🆕 Self-loop detection in chat routing prevents infinite recursion.
🆕 Search engine registry — dynamic engine selection and config management.
🆕 Context menu item for "Manage Memory \& Knowledge".
🔄 Global memories migration logic for agent orchestration and shared memory management.
🔄 Trace collector support for agent execution chains and span tracking.
🔄 Quality gate logic for reviewer feedback filtering in the pipeline graph builder.
🔄 Event loop lifecycle fix on Windows — proactor event loop hang resolved.
🔄 Prompt seeding logic made idempotent for missing default prompts.
🔄 Code cleanup — removed unnecessary imports, dead code, and whitespace.
🐛 RAG alias matching guard (BUG\_087) — prevents drafting responses when explicit filenames are present.
🐛 RAG synthesis quality validation and escalation propagation fix in the pipeline.
🐛 Empty response when RAG already loaded documents in the synthesis handler.
🐛 Pipeline loop router hallucination handling in reviewer context (BUG\_034).
🐛 Reasoning effort handling corrected for unsupported providers in internal operations.
📅 June 24, 2026 — Version 1.0.66
🆕 TTL cache for document list queries — reused cached store in the orchestrator/tool executor.
🆕 Caching for model name lookups to avoid repeated config loads.
🆕 Performance analysis for builtin function usage in token calculation and memory management.
🔄 Performance optimization — consolidated redundant logic and added caching across 15 caches, 30 files, and 8 algorithmic fixes.
🔄 Caching logic refactored to use a shared store helper.
🔄 Async I/O and connection pooling patterns added for performance.
🔄 Redundant dead code removed and data structures optimized (set instead of list).
🔄 Redundant deep copy logic and unnecessary string slicing removed for tool results.
🔄 Redundant directory listing calls and unnecessary deep copies removed for folder processing.
🔄 Redundant lazy imports removed and stdlib imports hoisted to module level.
🔄 Pre-compiled regexes hoisted from hot paths.
📅 June 23, 2026 — Version 1.0.64
🆕 Tab labels renamed to reflect agent context for clearer navigation.
🆕 Vision button release visual feedback — button state now updates visually on mouse release.
🔄 Status message cleanup — redundant logic removed.
🔄 Model cache scanning fix — removed broken directory traversal logic that scanned the parent directory instead of the actual cache, restoring model discovery.
🔄 Model wizard treeview fix — switched to a grid layout to eliminate text bleeding between listview and scrollbar.
🔄 Health dashboard diagnostics — added logging for cache path resolution and model count.
🔄 Exception fallback — cache info now falls back to a filesystem scan on any exception.
🐛 Vision button stuck cursor fix (BUG\_061) — area selector deadlock resolved on Windows.
🐛 Defensive None guard — thinking stripping handles raw response strings without a TypeError.
🐛 UnboundLocalError fix — removed a redundant import from a recovery builder.
🐛 Anti-thinking prefix — missing injection and model resolution bugs fixed in the file grouping orchestrator.
📅 June 22, 2026 — Version 1.0.63
🆕 System-wide prompt manager UI — treeview for system/user prompt pairs with centralized storage and an improved agent management interface.
🆕 Prompt manager data flow — UI components and data binding for system/user prompt pair editing.
🆕 Prompt store manager — dedicated UI components for system prompts.
🆕 Health dashboard card system — reusable card widgets with a wizard pattern for local server configuration.
🆕 Bridge documentation — lifecycle and configuration docs for the local bridge server.
🆕 Vision handler multi-backend — vision now uses the shared LLM client instead of a hardcoded backend, with a configurable endpoint URL.
🆕 Reasoning effort whitelist protection — no longer stripped when injected by the reasoning configuration.
🆕 Execution phase budget fix — prompt registry and sorting logic gap resolved for proper budget enforcement.
🆕 RAG document sync fix — synced docs no longer invisible in the Manage Documents window.
🆕 Canvas bounds checking — robust bounds validation prevents false positives on large groups where the anchor is far from center.
🆕 Empty group bounds — group bounds now update correctly for empty groups in free-form mode during save/load cycles.
🆕 Startup cursor cleanup — prevents inherited "watch" cursor on chat interface startup buttons.
🆕 Vision button simplification — redundant button removed, visibility toggle streamlined.
🔄 Endpoint whitelist hardening — reasoning/thinking keys added to all endpoint whitelists.
🔄 LLM client full prompt support — direct prompt passthrough.
🔄 Synthesis message suppression — fix messages suppressed when tools are disabled.
🔄 Capability cache composite IDs — cache lookup handles composite IDs correctly.
🔄 Grid layout fix — cross-column shared grid replaced with two independent column frames to fix asymmetric cell heights and drag-drop fragility.
🔄 Card widget drag unification — click and drag state machine unified across all card widgets.
🔄 Grid padding reduced.
🔄 Health card drag — drag handling added to the health card header.
🔄 Area selector safety — error wrapping and cursor/grab release fixes.
🔄 Compatibility exception handling in unit tests.
🔄 Hard failure handling — clarity and consistency improvements in routing.
🐛 Defensive None guard — thinking stripping now handles raw response strings without a TypeError.
🐛 UnboundLocalError fix — removed a redundant import from a recovery builder.
🐛 Anti-thinking prefix — missing prefix injection and model resolution bugs fixed in the file grouping orchestrator.
🐛 Vision handler endpoint — hardcoded backend endpoint replaced with a configurable URL; HTTP error handling added.
🐛 Vision handler display — dead code removed; the correct model is now displayed and buttons function properly.
📅 June 21, 2026 — Version 1.0.62
🆕 Unified probe dialog — reasoning, vision, and audio probes consolidated into a single wizard dialog.
🆕 Vision handler multi-backend support — vision works across all backends via the shared LLM client instead of a hardcoded backend.
🆕 Provider-native reasoning effort — reasoning effort and thinking budget fields added to the LLM config for all backends.
🆕 Reasoning discovery fixes for the StepFun model.
🆕 Thinking brain emoji — conditionally rendered in chat based on the show-thinking flag and reasoning effort state.
🆕 Backend model name resolution — string matching prevents an inherited default from being read for all backends.
🆕 Memory extraction retry — small models now retry extraction with simplified prompts for deterministic output.
🆕 Execution phase budget — prompt registry and sorting logic gap fixed for proper budget enforcement.
🔄 LLM client full prompt support — direct prompt passthrough.
🔄 Endpoint whitelist hardening — reasoning/thinking keys added to all endpoint whitelists.
🔄 Vision handler error handling — configurable URL and HTTP error handling for API failures.
🔄 Area selector safety — error wrapping and cursor/grab release fixes.
🔄 Discovery cache — production code now correctly passes the data directory for cache fallback.
🔄 LLM config type checking — added type validation and improved logging format.
🔄 Memory extractor efficiency — reduced reasoning token usage by increasing timeout and simplifying system prompts.
🐛 Anti-thinking prefix injection — missing prefix and model resolution bugs fixed in the file grouping orchestrator.
🐛 Vision handler model display — dead code removed; the correct model is displayed and buttons function properly.
🐛 Reasoning discovery cache — fixed a bug where cache fallback polluted git status with source tree paths.
🐛 UI element clipping — default size adjusted so all elements are visible.
🐛 Model overrides reverse lookup — fabricated backend alias entries removed.
📅 June 20, 2026 — Version 1.0.61
🆕 Welcome card version source — the health dashboard reads the version from the branding config (with a 3-tier fallback), eliminating hardcoded version strings.
🆕 Memory clean button prompt rewrite — system and user prompts replaced with a deterministic pattern-matching filter to reduce LLM reasoning verbosity; batch size reduced from 20 to 10.
🆕 Extraction retry chain fix — the JSON retry path now correctly says "Return ONLY a JSON array" instead of the contradictory "Return ONLY plain text facts". 4 rules: plaintext first, JSON as fallback, match system to user prompt, parse defensively.
🆕 Memory tag generator — robust anti-garbage validation for auto-generated memory tags.
🆕 Entity extraction audit — comprehensive audit and remediation plan for entity inference and company-name extraction.
🔄 Blacklist consolidation — shared blacklist definition across modules to prevent drift.
🔄 Scope naming cleanup — renamed 'profile' to 'consolidated' and fixed the category for consolidated memories.
🔄 Bottom navigation bar — added category and search bar.
🔄 Memory extraction prompt safety — content truncation fix and safety improvements.
🐛 Topic/project examples added to the extraction prompt and entity extraction fallback logic fixed.
🐛 Dominant category metadata recovered before falling back to 'facts' in the migration plan.
🐛 Memory extraction system resolves single-entity storage and soft-archived noise in the importance scoring pipeline.
📅 June 19, 2026 — Version 1.0.60
🆕 Hugging Face backend provider — OpenAI-compatible inference router with auto-complete tool configuration for the Hugging Face dashboard.
🆕 Health dashboard — reusable card widgets with colored borders, status icons, dynamic data binding, mini-wizards for each system card, and a backend provider card.
🆕 Branding name resolution — wizard UI title text and path labels now match the card's local server branding.
🔄 Tab/widget components refactored into managed windows with base tab dependency mocks.
🔄 Chat pane padding fixes — grid row configuration, notebook and chat tab cell alignment, and first-launch bottom margin correction.
🔄 Folder tab active background colors and disabled force-reorganize button.
🔄 Simplified layout logic — removed redundant calls and click propagation handling.
📅 June 18, 2026 — Version 1.0.59
🆕 Agent trace visualization — the chat pipeline now shows agent thinking, tool usage, and per-tool progress in a dedicated trace panel.
🆕 Markdown table rendering — chat views now parse and render markdown tables with monospace-aligned columns.
🆕 Chat upload button — local agent chat window status bar gets an upload button for file attachments.
🆕 Default MCP servers — new agents auto-configure memory, filesystem, web content, and gmail MCP servers.
🆕 LLM request caching — config and model capabilities cached with mtime-keyed invalidation to reduce redundant I/O and CPU cycles.
🆕 Memory model enhancement — entity type, entity key, scope, and category fields added.
🔄 Synthesis handler split into discrete middleware stages with clear interfaces.
🔄 Tool node logging simplified and string formatting optimized.
🔄 Chat engine invoke moved to state update — removed unnecessary stream loop and intermediate variables.
🔄 Progress indicator layout fixed to render on a single line.
🐛 Agent prefix line break — leading newline before the timestamped Agent prefix prevents broken output on non-newline-terminated user messages.
🐛 Document list controller filter — now correctly handles system agent documents by matching the agent id directly.
🐛 Model name preservation in the state merge.
🐛 Trace collector auto-finish guard — prevents active dot persistence after turn completion.
🐛 Memory MCP server wiring — resolved a tool registry name mismatch and dispatcher stub issue.
🐛 Memory extraction profile generation now enforces internal budget constraints properly.
🐛 Shared truncation helper for consistent "..." truncation across all nodes.
📅 June 17, 2026 — Version 1.0.58
🆕 MCP background threads — MCP servers now run on persistent background threads, enabling multi-agent coordination and surviving across tool calls without restart.
🆕 Event-driven polling — chat response latency reduced and CPU usage lowered on local inference by switching from poll-interval loops to event-driven callbacks.
🆕 New plan backend provider added to the LLM config.
🔄 Self-instruct rollback — the synthesis handler now detects self-instruct in escalation state and rolls back, preventing leaked internal reasoning from reaching the user.
🔄 Orphan cleanup — removed unused modules and consolidated loose dependencies.
🔄 Mixin split — large mixin modules decomposed into a thin orchestrator + dedicated mixin files.
📅 June 16, 2026 — Version 1.0.57
🐛 Self-instruct visible content detection — models emitting "I'll read the file…" in the visible response no longer leak as final answers. Three-layer defense: regex fallback patterns, LLM classification fallback, and an escalation bypass fix.
🐛 RAG multi-file context overflow — documents explicitly named by the user (e.g. 6 files totaling 66k chars) are no longer truncated at the default limit; multi-file mode raises the cap to 3× the default limit.
🐛 Telemetry log path — the telemetry log now resolves to the brand-aware app data logs folder instead of next to the executable; fixed both the SDK fallback and the singleton injection so the correct path is always used.
🐛 Confirmation dialog missing import — the document delete confirmation dialog no longer crashes.
🔄 Variable naming cleanup in the synthesis handler — internal variables renamed for clarity.
🔄 Self-instruct detection markers expanded — added contraction and future-tense patterns for German, French, and English.
📅 June 15, 2026 — Version 1.0.56
🆕 Visual group collapse toggle for model and embedding tree — with persistence and arrow visibility.
🆕 Backend summary UI — model count and API details update when the backend selection changes.
🔄 Model and embedding manager refactored with provider tree display, column hierarchy, sorting, and collapse logic.
🐛 Fixed an import path in the delta loader and visual group collapse state logging during shutdown.
📅 June 14, 2026 — Version 1.0.55
🆕 Unified thinking module — consolidated across 15+ files into a single canonical module with deprecated shims removed.
🆕 Memory importance scoring — with time decay, LLM contradiction filtering, and consolidation logic.
🆕 Production telemetry configuration and performance knobs — reduced overhead and improved inference latency.
🔄 Major refactoring — split agent controller, chat interface, browser tab, preview view, and chat management tab into smaller focused modules.
🔄 Added /help command for MCP tools guidance and improved sort state persistence.
🐛 Update notification balloon now uses native Windows toasts for better UX.
📅 June 13, 2026 — Version 1.0.54
🆕 Multi-turn chat pipeline — persistent tool call history and multi-turn execution.
🆕 Dynamic tool chaining — the agent can call multiple tools across turns with automatic retry and synthesis.
🆕 Parallel tool execution — multiple tool calls run concurrently with sequential remainder handling.
🆕 Continuation planner — autonomous research mode with answer-marker detection and thinking extraction.
🆕 LLM-based file and query extraction for smarter document routing.
🆕 Default MCP servers (memory, filesystem, web content) auto-enabled for all new agents.
🆕 External Gmail MCP server configuration in agent settings.
🆕 RAG document pre-loading by name — documents are available immediately without re-retrieval.
🆕 XiaomiMiMo backend provider support.
🆕 Reload MCP server config without app restart.
🆕 Branded app data directories for all variants (Sorana, Aicono, TabNeuron).
🆕 Clickable update notification balloons — click to open the website (native Windows toasts).
🆕 IMPORTANT RULES auto-injected into the system prompt (no longer user-editable).
🆕 Model Manager — model name added as third sort tiebreaker for easier model discovery.
🆕 MiniMax-M3 tool call support — parser for the vendor-specific tool-call format.
🆕 Thinking extractor — modular model-family-aware thinking extraction (StepFun, DeepSeek, Qwen, MiniMax, OpenAI).
🆕 Web search query extraction — regex patterns for "research X in internet" → "X".
🐛 Synthesis retry no longer nullifies tool calls on the initial pass.
🐛 Multi-document RAG routing logic fixed.
🐛 RAG tool skipped when an else branch overwrites early-return values — fixed.
🐛 Planning-only text leaking into the status bar display — fixed.
🐛 Tool results missing from synthesis prompts — fixed.
🐛 Infinite planning loop when documents are already loaded — fixed.
🐛 RAG tool not filtering by agent id — fixed.
🐛 Router overmatching generic prose as RAG filenames — fixed.
🐛 Empty content recovery for reasoning-only responses — fixed.
🐛 Update notification toast not clickable — replaced with native Windows toasts.
🐛 Model dropdown not populated when editing an agent from the chat tab — fixed.
🐛 IMPORTANT RULES block visible in the editable system prompt — fixed.
🐛 stdout crash in the Windows GUI (debug prints → logger) — fixed.
🐛 Tab SDK passed as a Tkinter parent (not a widget) — fixed.
🐛 Background thread error in model discovery callbacks — fixed.
🐛 MiniMax-M3 truncated responses — fixed (missing model overrides entry).
🐛 MiniMax-M3 tool calls not detected — added the MiniMax tool parser.
🐛 Tool calls suppressed in synthesis mode when the model outputs new tools — fixed.
🔄 Refactor: engine split into a 5-module package.
🔄 Refactor: chat node split into 4 focused files (helpers, RAG context resolver, LLM invocation, synthesis handler).
🔄 Refactor: router modularized into graph + helper modules.
🔄 Refactor: response parser split into an 8-mixin package.
🔄 Refactor: model manager view split into an 8-module package.
🔄 Refactor: synthesis logic simplified with embedded LLM classification.
🔄 Refactor: prose-parsing logic consolidated into a shared module.
📅 June 03, 2026 — Version 1.0.53
🐛 MCP tool call fix.
🐛 LLM thinking model internal ops fix.
📅 June 02, 2026 — Version 1.0.52
🐛 Model Manager column sort fix.
🐛 Agent config path fix.
🐛 Debug logging fix.
🔄 Refactor: update vocabulary index data.
🐛 Content filter in conversation compaction now handles empty messages.
🐛 Circular import fix.
🐛 RAG status bar filename handling fix.
📅 Mai 30, 2026 — Version 1.0.51
🆕 Added Tool Workspace Selector.
🐛 Model thinking and thinking renderer fix.
🐛 Agent config path fix.
🐛 LLM API max tokens fix.
🐛 MCP tool call fix.
📅 Mai 28, 2026 — Version 1.0.50
🆕 Added LM Studio support.
🐛 Model thinking support fix.
📅 Mai 26, 2026 — Version 1.0.49
🐛 Model thinking support fix.
📅 Mai 25, 2026 — Version 1.0.48
🆕 New Quick Chat tab — start conversations instantly without creating agents or opening workspaces. Uses global system memories by default, so your AI has full context from day one.
🆕 Model Manager: added a Capabilities column — if a model supports Thinking and Vision it can be manually enabled.
🐛 Tool call loop fix.
📅 Mai 21, 2026 — Version 1.0.47
🐛 Agent delete fix.
🐛 Improved RAG query.
🐛 Refactored thinking and reasoning detection in chat.
📅 Mai 20, 2026 — Version 1.0.46
🆕 Add system tray with update check.
🐛 Model Manager sort column state fix.
📅 Mai 19, 2026 — Version 1.0.45
🐛 Add migration script for entity columns.
🐛 Add StepFun artifact stripping to response cleaning paths.
📅 Mai 18, 2026 — Version 1.0.44
🆕 Model Manager: added a "Favorite" column.
🆕 Added new provider support for StepFun.
🐛 StepFun artifact stripping in response cleaning paths.
🐛 Two-stage consolidation filter.
📅 Mai 13, 2026 — Version 1.0.43
🐛 Adjust batch sizes for consistency.
🐛 Progressive retry logic for file execution.
🐛 Anti-thinking prefixes and hints for tiered models.
🐛 Normalize generic category name in consolidation responses.
📅 Mai 13, 2026 — Version 1.0.42
🐛 Stronger alias handling and parser fixes.
🐛 Refactored RAG path and consolidated prompt to prevent over-consolidation.
📅 Mai 11, 2026 — Version 1.0.41
🐛 Removed hardcoded throttling — implemented backend-aware rate limiting.
🐛 New helper function for embedding injection.
📅 Mai 9, 2026 — Version 1.0.40
🐛 Updated document loading logic to handle full content retrieval correctly.
🐛 Added missing history registration in the folder tab.
🐛 Adjusted max tokens limit in LLM config.
🐛 Added user authentication for multi-file routing fix.
📅 Mai 6, 2026 — Version 1.0.39
🐛 Memory entity classification fix for companies.
🐛 RAG Query Builder — tokenization inconsistency fix.
🐛 Improved RAG query strategy and added logging for the fallback mechanism.
🐛 "Chat not found" fix in conversation compaction.
📅 Mai 5, 2026 — Version 1.0.38
🐛 Advanced RAG and prompt stats.
🐛 Long-term memory (RAG retrieval) full document context fix.
🐛 Chat first message formatting fix.
📅 Mai 4, 2026 — Version 1.0.37
🐛 Export to Obsidian Canvas.
🐛 Export to Obsidian Graph View.
🐛 Sorting in all treeviews.
🐛 Recursive scan files and folders.
🐛 UI polish.
🐛 LLM model grouping fix.
🐛 Agent timeout fix.
🐛 Memories fix.
🐛 Canvas placement and bounding box fix.
📅 April 29, 2026 — Version 1.0.36
🐛 Memories fix.
🐛 Chat context and RAG knowledge base fix.
🐛 Refactored chat.
📅 April 27, 2026 — Version 1.0.35
🐛 Default agent timeout changed to 3600 sec.
📅 April 27, 2026 — Version 1.0.34
🐛 MCP server fix.
📅 April 27, 2026 — Version 1.0.33
🐛 Intent engine — MCP file tool detection fix.
🐛 MCP file server changed default to disabled.
📅 April 27, 2026 — Version 1.0.32
🐛 Chat history fix.
📅 April 26, 2026 — Version 1.0.31
🐛 Long-term memories fix.
📅 April 26, 2026 — Version 1.0.30
🐛 Memories consolidation fix.
🐛 MCP server compatibility fix.
🐛 Added OpenRouter, Deepseek, Anthropic, Qwen, NVIDIA support.
🐛 Treeview alternate colors.
🐛 UI flat buttons.
📅 April 20, 2026 — Version 1.0.29
🐛 Timeout handling for empty responses in chat nodes.
🐛 Timeout handling for LLM inference with configurable split timeouts and fallback mechanisms.
🐛 Empty response handling for chat nodes and the chat pipeline adapter in MCP manager tests.
📅 April 19, 2026 — Version 1.0.28
🐛 MCP server startup fix.
🐛 BM25 language detection fix.
🐛 Artifacts + legacy codepath fix.
📅 April 15, 2026 — Version 1.0.27
🐛 Robust backend URL resolution for embeddings and inference endpoints.
🐛 RAG documents field handling improved — better defaults in the RAG node.
🐛 Context windows dialog fix — agent sees 6 documents instead of 4.
🐛 RAG context preservation across interactions.
📅 April 14, 2026 — Version 1.0.26
🐛 Chatbot tool usage examples fix.
🐛 MCP Gmail server fix.
🐛 MCP web content fix.
🐛 Intent engine fix.
🐛 Back/forward navigation fix.
🐛 MCP file tools path navigation fix.
📅 April 10, 2026 — Version 1.0.25
🆕 Chat window: copy-last button.
🐛 Intent engine — file tool detection fix.
🐛 Tool call source path fix.
🐛 Chat window rendering fix.
📅 April 9, 2026 — Version 1.0.24
🆕 Vision support in chat \& RAG.
🐛 Intent engine fix.
🐛 Tool call graceful fallback fix.
🐛 Model Manager auto-discovery fix.
📅 April 8, 2026 — Version 1.0.23
🐛 Intent engine tool call fix.
🐛 Config path fix.
🐛 MCP server toggle fix.
📅 April 8, 2026 — Version 1.0.22
🐛 Intent engine tool call fix.
🐛 4-tier memory fallback fix.
🐛 Chat window sidebar fix.
📅 April 7, 2026 — Version 1.0.21
🐛 Intent engine tool call fix.
🐛 MCP server fix.
🐛 4-tier memory RAG stop-words fix.
📅 April 7, 2026 — Version 1.0.20
🐛 Intent engine tool call fix.
🐛 4-tier memory: embedding model detection, fallback and manual toggle fix.
🐛 Chat window sidebar now properly displays new chats.
📅 April 6, 2026 — Version 1.0.19
🐛 Intent engine fix.
🐛 4-tier memory extractor fix.
📅 April 5, 2026 — Version 1.0.18
🌐 Global memory storage — a personal AI that learns and shares! Memories are stored globally and available to ALL agents, creating a unified knowledge base.
🔄 Memory Sync Hub — import/export memories between projects, share knowledge across agents, full control over your AI's memory.
🔄 Dynamic mid-term memory — smarter conversation compression with configurable thresholds, better control over memory transitions.
🆕 Model Manager — 2-pane window with Lemonade backend: chat models (upper pane) and embedding models (bottom pane) side by side for simultaneous multi-model support.
🆕 MCP Manager — visual interface for managing MCP servers. Enable/disable, configure, and monitor servers without editing config files.
🆕 Gmail MCP server — full agentic Gmail control: list, get, send, label, trash, and archive emails. Archive command saves emails in 3 formats (JSON, EML, MBOX) — perfect for backups.
🧠 4-tier memory improvements — profile-first retrieval (61% token savings), conversation compaction (93% token reduction), auto-extraction from conversations.
🔀 Intelligent Router \& Intent Engine — smart tool call routing, intent classification (memory search, tool call, document query), max 3 tool calls per request (loop prevention).
💬 Chat history awareness — the agent remembers from your last conversation. Prompts augmented with semantic memories + episodic summaries.
📊 Live session stats — real-time token usage, tokens/sec, and time-to-first-token in the chat window. Monitor AI performance: input/output tokens, prompt tokens, response speed. (Lemonade backend only)
🐛 4-tier memory \& RAG improvements.
🐛 MCP server tool calls fix.
🐛 Chat engine stability fix.
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
Bugfix: chat history
📅 March 24, 2026 — Version 1.0.11
🆕 Mermaid diagram loading indicator — thread-safe implementation.

* Thread-safe loading label updates via the safe queue
* Timeouts for diagram rendering (90s and 120s)
* Fix 'main thread is not in main loop' errors
  📅 March 22, 2026 — Version 1.0.10
  💬 Chat history: all your past conversations in a sidebar. Search, reload, delete. Nothing gets lost.
  🧠 Memory that stacks: short-term, summaries, long-term (personas, facts, preferences), and document search. Each layer builds on the last.
  ☁️ Google Gemini support: add your API key and it works, including free tier models.
  🔍 Works without AI hardware: document search falls back to text-based retrieval if no NPU is available. 15+ languages for document retrieval, auto-detected.
  ⚡ RAG opens 40x faster: startup went from 4s to under 0.1s.
  🗃️ All data stored in a single private data folder. Existing installs migrate automatically.
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
  • Bugfix: batch size
  📅 March 09, 2026 — Version 1.0.8
  • minor UI/UX update
  • minor core engine update (bugfixes, stability, architecture)
  • smaller binary
  📅 February 18, 2026 — Version 1.0.7
  • Bugfix About Window version display
  • Update Model Manager created time to local time
  • Update extra Full-Reorganize button in the main window to organize from start
  • Update Lemonade integration with Lemonade-Python-SDK: https://github.com/Tetramatrix/lemonade-python-sdk
  📅 February 14, 2026 — Version 1.0.6
  • Bugfix Model Manager on-prem and cloud model activation
  📅 February 5, 2026 — Version 1.0.5
  • Bugfix built-in models
  📅 February 2, 2026 — Version 1.0.4
  • Significant performance enhancement for organizing large folder structures using new iterative algorithms
  • New built-in MCP server for file operations:
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
