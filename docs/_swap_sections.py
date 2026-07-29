"""Swap Autonomous Agent and Prompt Manager sections in Core Features.
Current: AI Memory → Prompt Manager → Autonomous Agent → MCP
Target:  AI Memory → Autonomous Agent → Prompt Manager → MCP
"""
with open('D:/Benutzer/github/Sorana/docs/index.html', encoding='utf-8') as f:
    lines = f.readlines()

# Find section boundaries
pm_start = None
aa_start = None
aa_end = None

for i, line in enumerate(lines):
    if '<h3 id="prompt-manager-h2">' in line:
        pm_start = i
    if '<h3 id="autonomous-agent-h2">' in line:
        aa_start = i
    if aa_start is not None and aa_end is None and '<h3 id="mcp-section-h2">' in line:
        aa_end = i

pm_end = aa_start  # Prompt Manager ends before Autonomous Agent starts

print(f"PM: lines {pm_start+1}-{pm_end}")
print(f"AA: lines {aa_start+1}-{aa_end}")

# Extract blocks
pm_block = ''.join(lines[pm_start:pm_end])
aa_block = ''.join(lines[aa_start:aa_end])

# Swap: replace pm_block + aa_block with aa_block + pm_block
old_order = ''.join(lines[pm_start:aa_end])
new_order = aa_block + pm_block

content = ''.join(lines[:pm_start]) + new_order + ''.join(lines[aa_end:])

with open('D:/Benutzer/github/Sorana/docs/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Swapped - saved {len(content)} chars")
