## MODIFIED Requirements

### Requirement: Config-driven business identity
The system SHALL define business name, tagline, services, contact info, trust points, packages, and currency in a single typed config module, consumed by templates rather than hardcoded per page. Each package SHALL include a name, description, display price, and Stripe Price ID.

#### Scenario: Config edit updates all usages
- **WHEN** a value is edited in the config module
- **THEN** every page displaying that value reflects the update after rebuild

## ADDED Requirements

### Requirement: Packages/pricing section
The system SHALL render a packages section listing each configured package with its name, description, display price, and a "Book this package" button.

#### Scenario: Packages reflect config
- **WHEN** a visitor views the packages section
- **THEN** every package in config is listed with its current name, description, and price
