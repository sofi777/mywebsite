# blog

## Purpose

Defines the markdown-based blog content collection and its listing/detail pages.

## Requirements

### Requirement: Markdown-based blog posts
The system SHALL support posts as markdown files with frontmatter (title, date, excerpt, tags) in a content collection — no database or API needed to publish.

#### Scenario: New file becomes a new post
- **WHEN** a new markdown file with valid frontmatter is added and the site rebuilds
- **THEN** a new post appears at a URL derived from the file's slug

### Requirement: Blog listing page
The system SHALL list published posts newest first, showing title, date, and excerpt.

#### Scenario: Listing order
- **WHEN** a visitor loads the blog listing page
- **THEN** posts are ordered newest to oldest by frontmatter date

### Requirement: Individual post page
The system SHALL render each post at a stable URL derived from its slug.

#### Scenario: Post renders at its URL
- **WHEN** a visitor navigates to a post's URL
- **THEN** the full post content displays, including title and date
