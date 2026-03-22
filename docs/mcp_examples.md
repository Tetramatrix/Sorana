# MCP Server Examples

This document provides practical examples of using Sorana's built-in MCP (Model Context Protocol) server for advanced file operations through AI agents.

## Quick Start

1. Create an agent in your workspace
2. Right-click on the agent title and select "Chat"
3. Use natural language commands to interact with files

## File Operations

### Read Files

```
# Read entire file
"Read the content of document.txt to summarize its contents"

# Read specific lines (pagination)
"Read lines 10-20 of large_log.txt to check for errors"
```

### Write Files

```
# Write new content
"Write the generated report to monthly_report.txt"

# Create markdown summary
"Summarize document.txt and create a markdown summary document"
```

### List & Search

```
# List directory contents
"List the first 10 files in the current directory"

# Search for files
"Search all text files in the workspace"
```

### File Management

```
# Move/rename files
"Move file report.docx to archive/report_backup.docx"

# Get file information
"Get size and creation date of config.json"

# Create directories
"Create a new folder called 'Project_X' in the workspace"
```

### Edit Files

```
# Edit specific content
"Edit the third paragraph of essay.txt to improve clarity"
```

### System Information

```
# Get filesystem info
"Show available storage space and supported operations"
```

## Complex Workflows

### Example: Document Analysis Pipeline

```
1. "List all PDF files in the Documents folder"
2. "Read and summarize each document"
3. "Create a markdown summary document called 'analysis_summary.md'"
4. "Move processed files to the 'Processed' folder"
```

### Example: Project Organization

```
1. "Create folders: 'Source', 'Tests', 'Docs'"
2. "Search for all .py files"
3. "Move Python files to 'Source' folder"
4. "Move test files to 'Tests' folder"
5. "Create a README.md in each folder"
```

## Available Operations

| Operation | Description | Example |
|-----------|-------------|---------|
| `read_file` | Read file contents | "Read document.txt" |
| `read_file_from_line` | Read specific line ranges | "Read lines 10-20" |
| `write_file` | Write content to files | "Write report to file.txt" |
| `list_directory` | List directory contents | "List first 10 files" |
| `create_directory` | Create new directories | "Create folder 'Project_X'" |
| `move_file` | Move or rename files | "Move file to archive/" |
| `search_files` | Search for files | "Search all .txt files" |
| `get_file_info` | Get file metadata | "Get size and date of file" |
| `edit_file` | Edit file content | "Edit paragraph for clarity" |
| `get_filesystem_info` | Get system info | "Show storage space" |

## Tips

- **Be specific**: The more specific your command, the better the results
- **Chain operations**: Combine multiple operations for complex workflows
- **Verify changes**: Use `list_directory` and `get_file_info` to verify changes
- **Use relative paths**: Paths are relative to your workspace root

---

**Note**: MCP server operations are performed through AI agents and may take time depending on file sizes and complexity.
