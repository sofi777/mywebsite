## ADDED Requirements

### Requirement: Git-based auto-deploy
The system SHALL deploy to Cloudflare Pages automatically on push to main, no manual steps.

#### Scenario: Push triggers deploy
- **WHEN** a commit is pushed to main
- **THEN** Cloudflare Pages builds and publishes a new deployment automatically

### Requirement: Build validation before publish
The system SHALL keep the live deployment unchanged if the production build fails.

#### Scenario: Broken build does not go live
- **WHEN** a pushed commit fails to build
- **THEN** the previous deployment stays live and the failure shows in the Cloudflare Pages build log
