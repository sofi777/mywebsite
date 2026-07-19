# content-editing

## Purpose

Defines the git-backed CMS admin UI that lets a non-technical editor change site text and images without touching code, committing directly to the same repo and deploy pipeline.

## Requirements

### Requirement: CMS admin UI
The system SHALL provide a CMS admin UI at `/admin`, authenticated via GitHub OAuth, requiring repo write access to save changes.

#### Scenario: Unauthenticated visit
- **WHEN** a visitor without GitHub repo access opens `/admin`
- **THEN** they can view the login screen but cannot save any edit

### Requirement: Field-to-source mapping
The system SHALL map every CMS-editable field to its underlying source file (business data file, blog post frontmatter/body) via a single CMS config, so editors never need to know the underlying file structure.

#### Scenario: Editing a field updates the right file
- **WHEN** an editor changes a field in the CMS and saves
- **THEN** only the mapped source file changes, committed to the repo

### Requirement: Save commits and deploys
The system SHALL commit CMS edits directly to the GitHub repo, triggering the same Cloudflare Workers Builds pipeline used for code pushes — no separate deploy path.

#### Scenario: CMS save triggers a deploy
- **WHEN** an editor saves a change in the CMS
- **THEN** a commit lands on the target branch and Cloudflare Workers Builds builds and publishes it like any other push

### Requirement: Git-backed media library
The system SHALL support image uploads through the CMS, storing files in the repo so they deploy through the same pipeline.

#### Scenario: Image upload appears on the live site
- **WHEN** an editor uploads an image through the CMS and references it in a field
- **THEN** the image is committed to the repo and renders on the live site after deploy
