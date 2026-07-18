# deployment

## Purpose

Defines the git-based auto-deploy pipeline to Cloudflare Workers and the build validation that protects the live site.

## Requirements

### Requirement: Git-based auto-deploy
The system SHALL deploy to Cloudflare Workers (via Workers Builds) automatically on push to main, no manual steps.

#### Scenario: Push triggers deploy
- **WHEN** a commit is pushed to main
- **THEN** Cloudflare Workers Builds builds and publishes a new deployment automatically

### Requirement: Build validation before publish
The system SHALL keep the live deployment unchanged if the production build fails.

#### Scenario: Broken build does not go live
- **WHEN** a pushed commit fails to build
- **THEN** the previous deployment stays live and the failure shows in the Cloudflare Workers Builds log
