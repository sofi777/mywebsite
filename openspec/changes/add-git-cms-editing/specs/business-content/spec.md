## MODIFIED Requirements

### Requirement: Config-driven business identity
The system SHALL define business name, tagline, services, contact info, and trust points in a CMS-editable data file, loaded and typed by a single config module, consumed by templates rather than hardcoded per page.

#### Scenario: Config edit updates all usages
- **WHEN** a value is edited (via the CMS or directly in the data file)
- **THEN** every page displaying that value reflects the update after rebuild
