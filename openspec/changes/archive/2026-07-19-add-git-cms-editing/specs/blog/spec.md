## MODIFIED Requirements

### Requirement: Markdown-based blog posts
The system SHALL support posts as markdown files with frontmatter (title, date, excerpt, tags) in a content collection, editable directly or through the CMS — no database or API needed to publish.

#### Scenario: New file becomes a new post
- **WHEN** a new markdown file with valid frontmatter is added (via the CMS or directly) and the site rebuilds
- **THEN** a new post appears at a URL derived from the file's slug
