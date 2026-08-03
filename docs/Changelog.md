📋 Changelog 📋
📅 August 3, 2026 — Version 1.0.78
🆕 Workspace empty-state "create an agent" hint — when a freshly loaded workspace has zero agent groups, the status message becomes a persistent, clickable, pulsing hint: one click creates the agent (placed at the bottom-left of the visible viewport, pan/zoom-aware) and shows a follow-up toast explaining right-click → Chat; the hint auto-hides once an agent exists. Bugfixes along the way: the hint never showed (folder_tab passed the CoreTabView SDK facade — `_unwrap_facade()` + full-redraw survival restore), TclError stale-canvas-item crash guard, plain-ASCII hint text, dark-theme STATUS_COLORS (#4e8df5/#28a745/#fd7e14/#dc3545), and a follow-up toast that's harder to miss (3s delay, 8s duration, [WS_HINT] logs).
🆕 Agent Process Trace — merged Agent Briefing node now shows friendly noun+count detail (e.g. "5 calendar events, 3 emails, 2 files") and no longer drops the calendar preload from the merged node; the same friendly reword applies to standalone (unmerged) preload nodes; removed the dead legacy briefing-merge path.
🆕 ChatState subgraph isolation (Phase 2) — 5 isolated subgraph states (memory / code explorer / web explorer / RAG explorer) with Strategy-C entry/exit adapters, new ParentOrchestratorState, provider-metadata merge (no last-write-wins in subgraphs), 17/17 pipeline-audit items complete.
🆕 Pure-edge routing migration (rounds 2–6) — edge-mutating route_after_tool / route_after_chat strategies became pure readers; mutations moved into node-side routing_bookkeeping (~11 targets incl. reactive_tool_drift), dormant channels (codebase loop budgets, _question_type) activated, remaining-edge audit + regression guard.
🆕 Autonomy control-plane (phases C–D) — production completion gate + continuation-budget gate wired, Phase-D contradiction-corroboration tier isolation, repeated_low_yield surfaced in the recovery policy, planner-level lead dedup (identical lead signatures consume no budget).
🆕 ObjectiveContract now genuinely populated in production — router population seam, completion-gate write-back into state, node-side persistence, production completed_requirements writer (obligations advance to satisfied / final_answer on real research turns), intent-derived required_sources, completion-gate route_hint wired through existing edges (5th autonomy gate).
🆕 ContinuationPlanner split — per-tier mixin split (3,479 → 1,915 lines, 4 behavior-preserving modules) then stage-2 dispatch split (1,837 → 765 lines, under the 1,000-line bar).
🆕 Plan §5 reserved-tokens wiring — protected objective/goal block netted out of system_prompt_tokens and passed as reserved_tokens at both budget sites.
🆕 Autonomous codebase execution contract — deterministic execution contract with validation enforcement for coding tasks.
🆕 Token reporting — provider-neutral token usage with full-prompt fallback estimates, compact status labels, /help explanation, unified chat footnote styling, user-facing trace grouping (status / decision / tool display names), consistent neutral trace metadata.
🆕 End-to-end latency phase breakdown — Total / LLM / Tools / Continuation / Memory / BG reported per turn.
🆕 Tier-budget measurement tool (measure_tier_budget_defaults.py) — 6 budget scenarios measured through the deterministic harness; every tier's observed max equals its default cap (headroom +0), 4 invariants guarded.
🆕 Per-explorer model selection (Phase 3 Track B1) + unified synthesis retry budget (_synthesis_total_retries, SF-A) + sequential §F–§K → §1–§7 section renames + goal-stack reset unification, plan-revision reason enum, register_tool_call centralization, explorer timeout guards + findings accumulation (Phase 3 Track B2–B4).
🆕 4 new deterministic-harness budget-contract scenarios (tier starvation / LLM reserved slot / failed-tool alternate family) — harness baseline 23 → 27 scenarios.
🆕 WS001 workspace-marker lint hook + codebase_tools project-root hardening.
🆕 Greeting boundary + critical-path failure scenario documentation (web explorer gating, proactive briefing retry-loop fix).
🔄 Pipeline audit Phase 2/3 — Track A/B/C plan statuses, ChatState split design doc, state-boundary enforcement, 5 isolated adapter implementations + 52 adapter unit tests, 17 integration tests for end-to-end state isolation.
🔄 Round-6 route_after_tool pure-edge migration + remaining-edge audit closeout; baseline-sync cleanup (pinpointed + regenerated round-6 token_cost deltas); harness trace-recording quirk fix (_tools_from_trace falls back to calls_selected).
🔄 Autonomy state writer migration closeout (P3) — canonical reducers for semantic writes.
🐛 BUG_266 — automatic memory tags stopped working: stored_contents.append(content) NameError in artifacts-sdk aborted extraction before tag generation (fixed in artifacts-sdk).
🐛 BUG_267 — /help footer lines rendered oversized: speaker_label regex false-positive on legend words; tightened to letter-only labels minus an exclusion set.
🐛 BUG_268 — gmail tools dead in preloading briefing AND explicit chat, plus wrong filesystem allowed root (dev start path instead of user home). Four interlocking root causes fixed: planner tool override, Path.cwd() allowed-root default, wrong mcp_servers_enabled key, empty briefing state.mcp_servers, reviewer list-payload blindness → recursion limit 25.
🐛 BUG_269 — state.mcp_servers empty in the LangGraph path + [MCP merge] agent=? : load_agent_config dropped the top-level uid/agent_uid; ChatOrchestrator.reset() wiped mcp_servers without re-applying compat writes.
🐛 Stale on-disk checkpoints with empty mcp_servers now self-heal — LangGraph input-wins on the next invoke plus a proactive heal wired into orchestrator __init__/reset (fresh-thread guard prevents spurious checkpoint rows).
🐛 Checkpoint-heal masking guard — a stale checkpoint can no longer re-enable a disabled MCP server (e.g. gmail): enabled-only normalization + two-way enabled-set sync; disabled-but-present server dicts never persisted.
🐛 web_fetch_content only returned the hero section — now extracts the full page via find_all().
🐛 P0 emergency override — when all synthesis retries are exhausted the stashed parallel synthesis result (or thinking) bypasses Layer 4 instead of showing 'Empty LLM response'; Layer 4 false positives reduced for short affirmatives (yes/ok).
🐛 Chat sidebar delete no longer auto-creates a new chat; batch remove for multi-select.
🐛 Numbered selection '1' no longer falsely routes to codebase mode; comment-code collision NameError fixed; new DC001 pre-commit lint hook.
🐛 Unpicklable deepcopy in routing_bookkeeping probe avoided; round-5 explorer-dispatch pure-edge migration + node-side autonomy recorders.
🐛 OAuth invalid_grant detection string unified across context/service files; stale CalendarService attributes removed; Credentials() expiry added for proactive auto-refresh.
🐛 Always-FAIL synthesis reviewer now terminates at END (node-based review-retry budget fix); BUG_230 review keys declared as real ChatState channels.
🐛 codebase_search flake root-cause analysis + reproduction run-loop; proactive-briefing retry-loop fix.
🧪 17 state-isolation integration tests + 52 adapter unit tests; edge-purity regression guard + reviewed 7-scenario Phase-E baseline sync; critique-verification guard tests (non-matching-source false-positive, category-scoping, end-to-end satisfied → final_answer); compiled-graph probe proving the router-seeded objective_contract reaches the completion gate on real turns.
🧪 Checkpoint migration test suite (30 tests) — input-wins correction, direct heal, agent-config fallback, fresh-thread no-spurious-checkpoint guards, and the masking-guard tests; mutation-checked (guard removal → 3 failures).
🧪 4 budget-contract harness scenarios + baseline regen 23→27; 8 RAG-bypass unit tests; E2E real-LLM integration test for the 'research query → yes' failure chain; planner-level lead-dedup budget tests.
📅 July 29, 2026 — Version 1.0.77
🆕 RAG audit: consolidated chunk config into rag_config, extracted shared retry/budget constants, promoted execute_rag_tool to tool_rag_helpers, consolidated name matching into single NameMatcher class, added 'deep' depth level for exhaustive search queries, extracted shared subgraph budget constants.
🆕 Tool-Calling audit: ported cross-round preservation to tool subgraph, explorer subgraphs now query Registry for tool sets, async timeout (120s) on MCP execution, sync timeout via ThreadPoolExecutor, defensive metadata field stripping before schema validation, extracted shared _execute_web_tool helper, [TOOL_DISPATCH] and [MCP_CRED] debug logs at all dispatch/credential refresh sites.
🆕 Planning audit: consolidated planner budget constants into rag_config, extracted per-family planner strategies into separate modules, added mid-turn plan revision trigger, extracted proactive lead scanning into shared module, [PLAN] debug logs for tier selection, skip execution_planner node hop when plan batch ready.
🆕 Memory audit: wired importance scoring into memory context injection, sender_type guard blocking agent-output false memories, extraction prompts consolidated into 1 shared template, extraction graph made mandatory, blocking contradiction detection removed (now fully non-blocking).
🆕 Synthesis Quality Gates audit: removed telemetry-only classify_response() call (-12 lines), eliminated duplicate in-graph/orchestrator synthesis reviewer (-220 lines), consolidated 3 retry budgets into shared _synthesis_total_retries counter (max 3). Bug caught during code review: unbounded escalation loop (counter never incremented — fixed). 14/14 tests pass.
🆕 MCP tool checkboxes wrapping grid — `MCPServerItem` and `MCPServerConfigDialog` tool checkboxes changed from single-row overflow to max-4-per-row wrapping grid layout (`pack` → `grid`).
🆕 DocumentDetailsDialog managed migration (BUG_110 closed) — Last legacy `tk.Toplevel + GeometryMixin` dialog migrated to `ManagedModalDialog`. Now has persistent geometry, parent centering, and `close_window()` semantics. Removed from DM002 `ALLOWED_OVERLAY_PATHS`.
🆕 ContextMenuHandler _tk_parent fix — Resolved `DocumentManagementTab` (BaseTab, not a tkinter widget) compatibility with DocumentDetailsDialog by resolving actual widget parent via `getattr(parent, 'frame', parent)`.
🆕 Full lint compliance — DM001/DM002/DM005 all 0 violations (81/752/808 files scanned). Comprehensive audit confirmed zero remaining migration candidates.
🔄 Master audit status table — all 5 branch audits tracked in cross-linked session docs with per-branch progress.
🔄 Synthesis quality test rewrite — 3 previously skipped `_review_synthesis` tests rewritten to test in-graph `synthesis_reviewer` node directly (now 14/14 active).
🔄 Documentation updates: BUG_110 migration doc (§10 added, stale sibling finding removed), Windowing Compliance Audit (Tier 2 table + DM002 count updated), docs index updated.
📅 July 28, 2026 — Version 1.0.76
🆕 Calendar dialog Nuitka onefile freeze fixed — root cause #2 resolved: missing `babel` locale-data files (1084 `.dat` files) required by `tkcalendar.DateEntry`. Added `--include-package-data=babel` to Nuitka compilation. Secondary: `--nofollow-import-to=tkinter.font` exclusion removed (used by tkcalendar popup rendering).
🆕 Calendar dialog hardening — `[CAL_CLICK]` and `[CAL_DIALOG]` debug logs across all event click-to-dialog lifecycle phases. Exception cleanup hardened: `_safe_release_grab()` → `close_window()` → `destroy()` fallback.
🆕 Two isolated Nuitka probes created: dialog lifecycle probe (8/8 tests) and DateEntry+babel isolation probe (5/5 tests).
🆕 DM006 grab_set-before-deiconify lint rule (pre-commit hook) — flags orphan `grab_set()` in `ManagedToplevel.__init__` without matching `deiconify()`, preventing regressions of the Nuitka grab-freeze bug. 49 unit tests, 0 violations on real codebase.
🆕 DM006 Check C — orphan `grab_set` in ManagedToplevel subclass without matching `deiconify`.
🆕 BUG_NUITKA_GRAB: Calendar event click freeze in Nuitka onefile — `grab_set()` called on withdrawn window in `ManagedToplevel.__init__` blocks all input with no visible target. Fix: moved `grab_set()` from `__init__` to `show_window()` (after `deiconify()`). Audit found 2 more same-pattern bugs in `document_details_dialog` and `model_manager_view/__init__`. 14/14 grab stack tests pass.
🆕 BUG_260: Google discovery docs not bundled in Nuitka onefile — `googleapiclient.discovery.build()` raises `UnknownApiNameOrVersion`. Fix: `--include-data-files` for just calendar.v3.json + gmail.v1.json (272 KB total, saved 97.7 MB). Defense-in-depth: `_BUILD_SERVICE_FAILED` runtime flag auto-switches to HTTP backend.
🆕 BUG_PROACTIVE_DEAD: Proactive lead planner non-functional since creation — `_explored_lead_sigs.add()` ran during extraction BEFORE pop-loop check. Fix: removed premature signature marking. URL lead exception (URL-1/2/3) now live.
🆕 BUG_FETCH_403: Cross-round tool_results preservation — `tool_results` overwritten between rounds caused web_search successes invisible after `web_fetch_content` 403s. Safety cap prevents unbounded list growth.
🔄 Nuitka compilation hardening: 4 compile fixes (google namespace, pyparsing.testing, comtypes.test, babel data, tkinter.font).
📅 July 26, 2026 — Version 1.0.75
🆕 Calendar Tab — full Google Calendar view with 3-day/week/month modes, event CRUD, tkcalendar date pickers, persistent SQLite event cache, and card-based fallback placeholders.
🆕 Documents tab in Manage Agent — embeds full document manager UI (tree, upload, scan, delete, import/export, sync) filtered to current agent.
🆕 Proactive briefing — smart context injection with calendar/gmail/recent files, i18n greeting detection (7 languages), auto-trigger on chat window open, markdown table format.
🆕 In-graph synthesis review node — eliminates external re-invoke, gives streaming automatic quality gates.
🆕 Cross-family tool chaining in continuation planner (Tier 1.5) — chains to complementary tool families when primary is exhausted.
🆕 Quality-aware backtracking — pivot on low usefulness score (<0.3) via evidence cache gradient.
🆕 Mid-turn backtracking on empty tool results — retry with different tool family.
🆕 LLM semantic lead extraction (Phase 2 proactive planner) — scans tool results for conceptual gaps.
🆕 Cross-turn goal persistence — remaining multi-goal sub-tasks survive per-turn resets.
🆕 Full i18n (internationalization) — 7 languages (EN, DE, FR, ES, IT, NL, PL) with intent recognition patterns, tool router keywords, self-instruct detector, prompt bundles, and intent catalogs migrated to registry. 166/166 tests passing.
🆕 Codebase-aware research — P1-5 parallel synthesis + P2-8 code symbol index.
🆕 Agentrouter + HCNSEC backend providers — new LLM backends with api_key_envvars fallback chain.
🆕 Synthesis reviewer (P1-7) — orchestrator-level observational pass for response quality.
🆕 Multi-goal quality gate (P2-10) — router-level gate for multi-goal synthesis routing.
🆕 Tool-results block registry — 4-language tool-result prompt blocks for build_chat_prompt.
🆕 Proactive gmail/calendar context injection for chat sessions.
🆕 Trace panel improvements — success/fail status indicators, decision labels, tool display names/categories, internal step grouping, total tokens in status bar.
🆕 LangGraph chat orchestration — cross-turn state management and tool routing for multi-agent pipelines.
🆕 Continuation planner — empty-response tool routing logic and unsatisfied-goal tracking.
🆕 Codebase Research Workflow — evidence floors and heuristic planning patterns documentation.
🆕 Codebase synthesis gate — prevent prompt artifacts in graph responses.
🆕 Automatic codebase search and read-file guidance in execution planner to prevent hallucination.
🆕 RAG Explorer subgraph — full RAG document exploration subgraph with depth classifier (conceptual/semantic/structural/comparative), automatic execution planning, dedicated prompts, state wiring, graph integration, AGENT_CONFIG_SCHEMA, and comprehensive test suite.
🆕 Web Explorer subgraph — dedicated web research sub-agent with isolated context (no conversation history), confidence-based gating, 4-node subgraph (router/chat/tool/synthesizer), up to 100 tool calls / 20 rounds, and 64 tests.
🆕 Code Explorer subgraph — dedicated codebase analysis subgraph with retry logic, scratchpad tools, dedicated analytical system prompt, tool execution wiring, subgraph infrastructure, and comprehensive test suite.
🆕 Codebase analysis depth — auto-continue mechanism (3 rounds), context window pruning between exploration rounds (41 edge-case tests), enhanced code exploration directives, and context prune summary generation.
🆕 Nuitka onefile bundling improvements — Google namespace package bundling (google-auth + googleapiclient), i18n data directory bundling (fixes _ANSWER_MARKERS_RE=None crash), compression bug fix with defensive HTTP fallback, tkcalendar include, _CalendarHttpBackend instantiation guard, and logger positioning fix.
🆕 Calendar tab: redesigned event dialog — full tkcalendar DateEntry date pickers, aligned date/time field sizes, geometry persistence, redesigned UI with styled card-based placeholder when not configured, immediate first-load events (no 60s wait), unified dialog with event click freeze fix, responsive description field, dynamic event text truncation in month view, RFC3339 fix.
🆕 Contradiction source URL extraction — extract source URLs from contradiction description text into sources key for transparent evidence tracking.
🆕 MCP credential sync — real-time OAuth2 auth state sync from MCPCredentialManager to prevent credential drift between sessions.
🆕 Settings: disable thinking_telemetry — removed telemetry from default config (opt-in only).
🆕 Scratchpad improvements — wire scratchpad_clear through executor/registry/LLM schema, add scratchpad instructions to Web Explorer system prompt.
🔄 Decompose build_chat_prompt + resolve_routing mega-functions.
🔄 Decompose chat_node mega-function (Phase 3).
🔄 Router split into 3 files + facade (router_synthesis, router_tool, router_codebase).
🔄 Phase 3 gate centralization complete (batches 3.3/3.5/3.7/3.8).
🔄 Structural→behavioral test migration (25 files).
🔄 Hoist CalendarService import to module level in 3 files.
🔄 Guard google deps in mcp_gmail_server + hoist GmailService import.
🔄 Migrate deprecated thinking_processor imports from chat codepath.
🔄 Tool pipeline consistency fixes — July 21 session.
🔄 28 inline regex hoisted + 8 frozenset + 3 import hoists in chat hot paths.
🔄 Phase B frozenset migration + dead-code fallback removal.
🔄 i18n Phase 5f TOOL_PATTERNS factory collapse + per-tool data files.
🔄 graph_routing split into 4 themed submodules.
🔄 execution_planner split into planner_dag/planner_imports/planner_heuristic.
🔄 orchestrator response/context split into separate mixin files.
🔄 prompts split into prompts_user + prompts_system facade.
🔄 SynthesisDecisionEngine Phase 1 — centralized semantic gate module.
🔄 Reviewer LLM Node — intelligent response quality validation.
🐛 BUG_251 — continuation planner expansion guards + test isolation fix.
🐛 BUG_250 — greeting hallucination-continuation from conversation history + briefing grouping not merging.
🐛 BUG_247 — chat session sidebar delete leaves entries / doesn't remove from sidebar.
🐛 BUG_246 — infinite recursion loop for simple greetings (recursion_limit=25).
🐛 DocumentManagementTab — source_path property has no setter (removed assignment, uses BaseTab property).
🐛 DocumentManagementTab — scan_handler AttributeError (wrapped handler commands in lambdas).
🐛 Calendar tab — MCP Manager button opens old legacy dialog (now opens new MCPServerList).
🐛 Calendar tab — MCPServerList missing Close button (added right-aligned Close button).
🐛 Calendar tab — calendar tab doesn't respect per-agent MCP config (added _is_calendar_mcp_enabled check).
🐛 MCPWindow freeze on open — missing show_window() + calendar placeholder newline/config fixes.
🐛 Flashing empty windows at (0,0) — withdraw Toplevels immediately after creation.
🐛 Gmail OAuth2 token persistence — 3 compounding bugs (data loss, triple-nested JSON, race condition).
🐛 Calendar event click freeze — ManagedToplevel missing show_window().
🐛 Calendar event detail fields empty — unsupported eventFields replaced with fields param.
🐛 Calendar month view RFC3339 fix — accept kwargs to ignore hallucinated LLM arguments.
🐛 Briefing context injection order — inject AFTER MCP filtering.
🐛 Briefing response lost after synthesis handler — fall through to build_success_return.
🐛 Briefing instructions never injected — wrong marker check.
🐛 Briefing greeting detection — use i18n greeting patterns instead of hardcoded English.
🐛 7 failing chat tests — i18n verb gate + state key whitelist + structural fixes.
🐛 Nuitka onefile NameError — move logger before try/except.
🐛 Language detection signals missing for DE/FR/ES/IT/NL/PL — restored per-language detection.
🐛 Non-RAG tool results not rendered in prompt — missing rendering code restored.
🐛 Self-instruct detector rejects short structured responses (v1 backport).
🐛 RAG escalation block + execution planner test patches.
🐛 MemoryStore schema migration, limited build browser-on-exit, embedding model alignment.
🐛 BUG_256: Calendar Nuitka fixes — wrong URL paths + cache tuple indexing fixed + pyparsing.testing exclusion root cause resolved + credential drift sync + v2 backport N/A section.
🐛 BUG_245 — filesystem MCP allowed_root stuck on home dir fallback.
🐛 BUG_244 — tool_workspace_path resolve to project root when empty.
🐛 BUG_243 — codebase_search scoped to src/ + structure discovery steps + 17 unit tests.
🧪 17 unit tests for BUG_243 codebase analysis 5-step plan.
🐛 BUG_242 — codebase-search branch regression guard for non-codebase flows.
🐛 BUG_239/240/241 — gmail/calendar tool routing regression + BUG_136 false-positive extraction.
🐛 BUG_235 — plan continuation edge mutation regression.
🐛 BUG_234 — max_tool_calls default alignment (5→8) + codebase content section.
🐛 BUG_233 — deep codebase research collapse (plan continuation + sync + dedup).
🐛 BUG_232 — dynamic tool call bump + execution planner codebase pattern + multi-goal connector detection + IndentationError fix.
🐛 BUG_231 — parallel RAG zero-out.
🐛 BUG_230 — synthesis-review-retry v2 + response truncation mid-word from thinking_effort budget.
🐛 BUG_228 — quality gate §F skips tool re-emission when response=''.
🐛 BUG_225 — planner-side user-filename bias over ripgrep rank + DRY helper.
🐛 BUG_226 — multi-file imperative in code-exploration hint.
🐛 BUG_224 — filename-first routing for code analyse/codesearch.
🐛 BUG_223 — codebase_search tool ignored by LLM and dropped by validator (3 root causes).
🐛 BUG_222 — disable-tools three-site guard.
🐛 BUG_206 — synthesis failure cascade follow-up fixes.
🐛 BUG_205c — i18n tool-results rendering regression fixed.
🐛 BUG_205b — parallel_tool_node double-wraps tool results (v1 backport).
🐛 BUG_136 — Gmail over-extraction regression + false-positive extraction.
🐛 BUG_090: Google deps unavailable in Nuitka — added google-auth + googleapiclient to Nuitka includes, google namespace root, lazy calendar imports, and lazy dependency checks with inline DO NOT comments.
🐛 search_files missing pattern TypeError + arg alias fix.
🐛 Synthesis reviewer FAIL verdict not enforced with graph re-invoke.
🐛 Context re-fetching on every turn.
🐛 Briefing date accuracy + agent misreading date.
🐛 Synthesis reviewer short-circuit — PASS for greeting + proactive briefing responses to prevent false rejection.
🐛 Window grab-stack fixes — manually re-establish parent grab when closing modal dialogs, add defensive grab handling to ManagedToplevel and wizard dialog chains.
🐛 Test marathon — 20+ test failures resolved to 0 (agent_config_store cleanup, mock targets, import paths, synthesis_reviewer edge maps, overlay counts, file-integrity stubs, timing fixes).
📅 July 19, 2026 — Version 1.0.74
🆕 /help command overhaul — GFM markdown tables with 3-column examples, Codebase Search health card, Setup Guides block, hidden /admin command, and System-message markdown routing.
🆕 Calendar MCP server integration — Google Calendar support with OAuth2 credentials, event fetching, and background thread async fix for Windows event loop compatibility.
🆕 Dynamic tool loading by default — tools now discovered at runtime via MCP tools/list endpoint, reducing initial payload size.
🆕 Codebase-aware research tools (P2.1) — continuation planner codebase strategy with regex tightening and orphan routing.
🆕 Answer-quality feedback loop (P3.2) — LLM scoring + pattern decay for planner intelligence.
🆕 Ambiguity detector (P3.1) — LLM-as-judge with targeted clarification questions.
🆕 Multi-turn research autonomy — LangGraph P3 typed subgraphs with goal/clarification/evidence/trace state splits, dynamic tool loading, and Calendar MCP integration. Addresses 30-40% information loss in Layer-2 audits.
🆕 JWT token refresh logic — background thread refreshes 30 seconds before expiry to prevent interrupted sessions.
🆕 Schema versioning for checkpoint migration safety.
🆕 File-integrity guard in pre-commit config (P0.2) — detects silent file deletion in src/chat/ and src/.
🆕 AsyncLoopRunner deadlock guard — raises on event-loop thread calls to prevent deadlocks.
🆕 BUG_221 Variant-A fix — drop task_key="probe" hijack in capability probe.
🐛 BUG_220 — missing user_id arg to get_memory_stats/export_memories.
🐛 BUG_219 — persist dispatch dedup state + drop wrapper tags + v2 backport reset_per_turn_flags.
🐛 BUG_218 — normalize LLM alias keys to canonical path + 5 layer-2 literal-echo guard tests.
🐛 BUG_217 — streaming_enabled=False default assertion test.
🐛 BUG_216 — DRY consolidate _CHAT_SESSION_TOOLS to single source.
🐛 BUG_215 — surface actual tool error on hard_failure.
🐛 BUG_214 — stale response cross-turn leak.
🐛 BUG_213 — gmail tools + gmail built-in.
🐛 BUG_212 — planner override.
🐛 BUG_209 — infinite delete_messages loop cascade (10 interlocking bugs fixed).
🐛 BUG_208 — Calendar MCP backport.
🐛 BUG_207 — pytest collection errors from MagicMock stub pollution.
🐛 BUG_206 — synthesis failure cascade — 4 interacting fixes.
🐛 Single-column GFM tables — _TABLE_SEP_RE quantifier fix.
🐛 Module-level logger binding added across 9 source files (BUG_201).
🐛 Missing ConfigManager import fixed in orchestrator_loaders.
🐛 Missing is_cloud_backend import fixed in external_model_discoverer.
🐛 8 collection errors blocking pytest suite resolved.
🐛 Test triage session 1 — substates + mock fixes (98→93 failures).
🔄 P0-P3 chat architecture refactoring complete — llm_invocation extraction, tool_subgraph node extraction, parallel_tool_node delegation, MessageWorkflow + ChatListManager extraction.
🔄 Tkinter maintainability audit — 12 dialogs migrated to ManagedToplevel/ManagedModalDialog, geometry_registry for consistent path resolution.
🔄 28 inline regex hoisted + 8 frozenset + 3 import hoists in chat hot paths.
🔄 848 f-string logger calls converted to lazy %s format for performance.
🔄 Batch metadata queries for agent/global documents.
🔄 Pre-compile 3 inline regexes in markdown renderer.
🔄 Remove redundant update_idletasks() calls + redundant see(tk.END).
🔄 Inline imports hoisted to module top level across 37+ files (Boy-Scott waves 3c-3e).
🔄 Circular dependency cluster breaks — RateLimiter extracted, app_branding made pure leaf, llama_paths extracted, search_engines base extracted. Zero cycles remaining.
🔄 ManagedToplevel.close_window() now calls flush_sashes() automatically.
🔄 Sash persistence wired to all 10 PanedWindows (workflow editor, template browser, MCP server list, model manager embedding, memory persona) with vertical orientation support.
🔄 Embedding manager support for model_manager_view.
🔄 JSON compat wrappers (load/dump) replacing raw `import json` across all src/ files.
📅 July 13, 2026 — Version 1.0.73
🆕 BUG_200: Chat-session message listing routing + no-arg tool extraction fix.
📝 BUG_199 + BUG_200 doc update + v2 extractor fix documentation.
📅 July 12, 2026 — Version 1.0.72
🆕 MemorySearch None query guard — prevents 3 cascading errors (NPU embedding crash, BM25 .lower() on None, len() on None) when memory_search_query is not extracted (BUG_176).
🆕 BM25 index build fix — fuzzy_mixin now passes dicts with id/content/metadata to index_documents() instead of plain strings, matching the pytrieve LexicalRAGRetriever API contract.
🔄 Reverted embedding preload auto-reload — _resolve_lemonade_url used LLMRequestFactory which breaks Lemonade's port-scanning auto-discovery. Original simple preload callback restored.
🆕 Autonomous cross-turn document task management — chat orchestrator now tracks document tasks across turns for CV/cover-letter workflows.
🆕 Duplicate pending tool call hard abort fix — subgraph defers to per-call validator instead of hard aborting all pending calls.
🆕 RAG tool rewrite for failed read_file — tool_subgraph now rewrites failed read_file calls to rag_read_document, preventing silent context loss when documents are overwritten.
🆕 BUG_197: Model Manager UI for background_rpm_limit — new UI field to configure per-backend RPM limits in Model Manager.
🆕 BUG_197: Per-backend background RPM throttle — memory and contradiction operations now respect per-backend RPM throttling to prevent API rate-limit errors.
🆕 BUG_191: Per-backend concurrency limits — rate-limited backends (e.g. StepFun) get configurable concurrency limits with new shared with_retry() helper migrated across 8 call-sites.
🐛 BUG_183: Resumed short option loses document task — evidence_state now rebuilds _active_document_task from chat history on resume, preventing filesystem drift when RAG docs are loaded.
🔄 Memory management optimization — reduced GC pressure in agent system for lower memory footprint.
🔄 Phase 7.5 shrink completed — tool_node + rag_node deleted (~1190 LoC), all consumers migrated to canonical homes.
🔄 Tool-family recovery registry refactored with per-rule telemetry counters (BUG_174/175).
🔄 Debug namespace expansion — 22 new mute tags (polling, langgraph, llm_invoc, compaction, autonomy, learned, etc.) for fine-grained --debug-mute control.
🔄 Bracket-tags for untagged debug logs — [POLLING], [LANGGRAPH], [LLM_INVOC], [ORCHESTRATOR] added to noisiest files.
🔄 Production log noise reduced by ~50% — migrated md_render debug logs to dedicated child logger.
🔄 Backport toolkit consolidated — dedicated backport/ folder with AST rewriter, import walker, and cascade builder.
🔄 Backporter script fix — corrected import prefix from 'backend.app.core.X' to 'app.core.X' in v1_v2_backporter.
🔄 13 xfail markers removed from equivalence tests — all divergences closed.
🐛 BUG_176: MemorySearch crashes when memory_search_query is None (3 cascading errors).
🐛 BUG_175: Universal envelope-check parity across all 4 family rules.
🐛 BUG_174: Tool-family recovery registry generalizes BUG_173.
🐛 BUG_172: Broadened L1.5 gate to recover tool_calls from message history.
🐛 BUG_171: Planner→dispatcher argument contract mismatch fixed.
🐛 LLM backpressure handling — optional provider timeout recovery.
🐛 18 broken logger sites resolved across 6 files.
🐛 G2 expansion logic corrected to use per-family checks instead of global flag.
🐛 BUG_191: Default stepfun_plan concurrency_limit=1 — StepFun Plan backend now defaults to concurrency 1 to prevent rate-limit collisions.
🐛 BUG_190: Router digit-leading filenames — router now correctly extracts filenames starting with digits (e.g. 250525_XYZ.txt) instead of misrouting them.
📝 Memory correction request handling documentation.
📝 RAG context loss detection for short option follow-ups.
📝 Comprehensive guide for RAG tool rewrite scenarios in chat execution.
📝 Sprint plan for Phase 7.5 shrink completion.
📅 July 11, 2026 — Version 1.0.71
🆕 Tool-family recovery registry (BUG_174/175) — universal envelope-check parity across all 4 family rules with per-rule telemetry counters.
🆕 Debug namespace expansion — 22 new mute tags (polling, langgraph, llm_invoc, compaction, autonomy, learned, etc.) for fine-grained `--debug-mute` control.
🆕 Bracket-tags for untagged debug logs — `[POLLING]`, `[LANGGRAPH]`, `[LLM_INVOC]`, `[ORCHESTRATOR]` added to 4 noisiest files (~70 log calls).
🆕 Dynamic token budget fix for chat nodes to prevent system prompt overage.
🆕 Cross-reference layer for chat pipeline to detect memory-RAG-tool overlaps and gaps.
🆕 Structured autonomy helpers — goal plans, evidence cache, and per-goal iteration limits for multi-goal synthesis.
🆕 LLM-based summary-on-stash logic for multi-goal advancement with stuck goal filtering.
🆕 Execution planner with context propagation, agent autonomy analysis, and parallel planner execution for independent tool steps.
🆕 Continuation planner with LLM-powered Tier 2 decision making, circuit breaker for self-instruct loops, and intelligent resource routing.
🆕 Tool subgraph adapter with budget guard and typed subgraph boundaries for RAG/tool nodes.
🆕 Contradiction cache for per-turn memory deduplication and timeout handling for memory context.
🆕 Synthesis intent extractor for tool-call directive extraction from LLM prose.
🆕 MCP system prompt budget cap per-agent override.
🆕 Async `search_files` implementation with max_results and timeout safety for Windows.
🆕 Watchdog mechanism for recursive polling loops in chat view.
🆕 Session-aware memory loading for orchestrator to prevent stale data issues.
🔄 Tool-family recovery registry refactored with DRY static methods and paranoid test coverage.
🔄 Production log noise reduced by ~50% — migrated md_render debug logs to dedicated child logger.
🔄 Chat architecture simplified — tool result envelopes normalized, parallel tool safety derived from registry.
🔄 `tool_node` + `rag_node` deleted (~1190 LoC) — consumers migrated to canonical homes.
🔄 Legacy single-node paths soft-deprecated with C1+C2 gates.
🔄 Synthesis handler split into `synthesis_sections` and `synthesis_context`.
🔄 Learned patterns split into organized package structure with re-exports.
🔄 Goal-stack reset logic consolidated into single helper across router and synthesis.
🔄 Monolithic routing refactored into named single-responsibility functions.
🔄 Per-agent config helpers consolidated into shared `resolve` function.
🔄 13 xfail markers removed from equivalence tests — all divergences closed.
🐛 BUG_175: Universal envelope-check parity across all 4 family rules.
🐛 BUG_174: Tool-family recovery registry generalizes BUG_173.
🐛 BUG_172: Broadened L1.5 gate to recover tool_calls from message history.
🐛 BUG_171: Planner→dispatcher argument contract mismatch fixed.
🐛 LLM backpressure handling — optional provider timeout recovery.
🐛 G2 expansion logic corrected to use per-family checks instead of global flag.
🐛 `rag_context` type guard for string binding in `apply_token_budget()`.
🐛 Thread_id propagation fix for chat manager sidebar and MCP chat-session tools.
🐛 Agent creator and prompt wizard window management — close button logic and destroy bypass fixed.
🐛 Tool executor wrapper fix to propagate cross-thread rejection errors.
🐛 Synthesis handler production failure modes fixed (BUG_112/116/117/118).
🐛 ContinuationPlanner MCP tool directive handling — self-instruct loop fixed.
🐛 Numbered selections and workspace paths handling in chat orchestrator.
🐛 Task_key passed incorrectly for recovery calls — cheap model no longer used instead of primary.
🐛 18 broken logger sites resolved across 6 files.
📝 Chat architecture simplification documentation.
📝 Execution planner overview and cross-reference layer documentation.
📝 Sprint plan for Phase 7.5 shrink completion.
📅 July 06, 2026 — Version 1.0.70
🆕 MCP marketplace treeview UI with Install button, alternating row colors, and server status indicators.
🆕 Dynamic tool discovery via MCP `tools/list` endpoint. Tools now discovered at runtime instead of hardcoded.
🆕 API key authentication for MCP servers with token validation and status indicator.
🆕 External templates and OAuth2 config support for auth-gated MCP servers.
🆕 Consolidated prompt injection paths. Standardized system prompt handling across built-in and external MCP servers.
🆕 MCP architecture analysis documentation for file system, browser, and memory servers.
🆕 Dual-model system support with model roles (Fast/Heavy/Both/Embedding) and per-agent override.
🆕 Role assignment context menu with status-aware gating. Grays out roles for un-downloaded, corrupted, or unavailable models.
🆕 Per-role highlighting and sorting in Model Manager view.
🆕 Continuation planner decision store and confirmation logic for LLM-based planning.
🆕 Extraction helpers for ContinuationPlanner to handle RAG and filesystem search results.
🆕 Unified intent recognition via single pattern catalog replacing scattered intent systems.
🆕 Duplicate-tool guard in synthesis handler prevents infinite loops when same tool re-emitted (BUG_089).
🆕 Word boundary regex for language detection to prevent false negatives in French/English substrings.
🆕 DM001 dialog geometry lint rule. Pre-commit hook flags manual `save_geometry()/destroy()` anti-pattern.
🆕 DM002 raw Toplevel lint rule. Flags raw `tk.Toplevel(parent)` calls outside windowing module.
🆕 DM005 Toplevel inheritance lint. Flags `class X(tk.Toplevel)` base-class declarations.
🆕 Horizontal sash persistence binding for dialog windows with configurable default fraction.
🆕 Fullscreen overlay support for area_selector_view.
🔄 Windowing compliance: P0 + P1 + P2 + P3 migrations complete. 38 messagebox.* calls and 23 tkinter.filedialog.* calls migrated to DialogService, 0 raw messagebox calls remaining.
🔄 16 manual save_geometry/destroy dialog calls replaced with self.close_window().
🔄 5 triple-threat offenders (document_loader, loading_view, backend_wizard, reasoning_probe, prompt_picker) migrated to ManagedModalDialog subclasses.
🔄 10 Tier 2 dialogs migrated to ManagedToplevel/ManagedModalDialog with fit_to_content geometry persistence fix.
🔄 MiniWizard base classes migrated to ManagedModalDialog subclassing.
🔄 30 parent_window.window / dialog.window AttributeErrors fixed across 16 files. ManagedToplevel IS the window (BUG_108).
🔄 4 mini-wizard import paths fixed (...windowing → ..windowing) resolving to correct src.views.windowing (BUG_108).
🔄 2 inner tk.Toplevel dialogs in agent_tools_dialog migrated to module-level ManagedModalDialog subclasses (BUG_109).
🔄 Fixed lemonade_sdk LemonadeModelRecovery._model_management_supported AttributeError (BUG_110, fixed in lemonade-python-sdk).
🔄 Fit_to_content geometry persistence fix. Auto-fit no longer overrides saved geometry on subsequent dialog opens.
🔄 Removed per-role UI dropdowns, context-menu-only role assignment with auto-migration.
🔄 Redundant internal client instantiation removed, refactored to use task key for faster clients.
🔄 Test suite cleanup: removed dead imports, obsolete test scaffolding, debug scratch files.
🔄 Python 3.14+ compatibility: lazy submodule discovery, removed eager langchain import loading.
🐛 Blank agent component positions during workspace rebuilds. Missing _clear_stale_agent_positions() call.
🐛 Tool calls blocked for pathless tools (get_filesystem_info) — path_validator now skips tools that take no path parameter (BUG_111).
🐛 Chat-only agents with no workspace path hallucinated filesystem paths — injected fallback instruction to always ask user for path (BUG_111).
🐛 RAG not triggered for numbered selections (e.g. user sends "1" to select from a menu) — router now resolves numeric inputs against previous assistant message's numbered list (BUG_111).
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
🔄 Memory_node and compactor_node reduced to thin wrappers with re exports.
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
🐛 fix: add missing history registration in FolderTab
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