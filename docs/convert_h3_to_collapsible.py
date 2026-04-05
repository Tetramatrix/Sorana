"""
Convert h3+div pairs in SPECIFIC sections only:
- AI Memory & Smart Routing (ai-memory-rag)
- MCP Server & Integrations (mcp-section)
- Document Processing & OCR (ocr-section)
- AI Backends & Models (ai-backends)

Skips all other sections (intro, download, discord, other-products, etc.)
"""

import re
import sys

SECTIONS_TO_CONVERT = [
    'ai-memory-rag',
    'mcp-section',
    'ocr-section',
    'ai-backends',
]

def convert_section(html: str, section_id: str) -> str:
    """Convert h3+div pairs in one specific section."""
    
    # Find the section
    section_pattern = rf'(<section[^>]*id="{section_id}"[^>]*>.*?</section>)'
    section_match = re.search(section_pattern, html, re.DOTALL)
    
    if not section_match:
        print(f"  Section '{section_id}' not found")
        return html
    
    section_html = section_match.group(1)
    
    # Count h3+div pairs in this section
    h3_pattern = r'<h3(?![^>]*capability-toggle)([^>]*)>(?![^<]*<span class="toggle-icon">)([^<]+)</h3>\s*<div([^>]*)>(.*?)</div>'
    matches = re.findall(h3_pattern, section_html, re.DOTALL)
    
    if not matches:
        print(f"  No h3+div pairs to convert in '{section_id}'")
        return html
    
    print(f"  Converting {len(matches)} h3 tags in '{section_id}':")
    for m in matches:
        title = m[1].strip()
        print(f"    - {title}")
    
    # Convert
    def replace_match(m):
        h3_attrs = m.group(1)
        title = m.group(2).strip()
        div_attrs = m.group(3)
        content = m.group(4).strip()
        
        return f'''<div class="cta-box capability-group">
                <h3 class="capability-toggle" onclick="toggleCapability(this)">
                    <span class="toggle-icon">+</span> {title}
                </h3>
                <div class="capability-content" style="display:none;">
                    {content}
                </div>
            </div>'''
    
    new_section = re.sub(h3_pattern, replace_match, section_html, flags=re.DOTALL)
    
    # Replace in full HTML
    html = html.replace(section_html, new_section)
    return html


def main():
    if len(sys.argv) != 2:
        print(f"Usage: python {sys.argv[0]} <file.html>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    for section_id in SECTIONS_TO_CONVERT:
        content = convert_section(content, section_id)
    
    if content == original:
        print("\nNo changes made.")
    else:
        confirm = input("\nApply changes? (y/n): ").strip().lower()
        if confirm == 'y':
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Changes applied to {filepath}")
        else:
            print("No changes applied.")


if __name__ == '__main__':
    main()
