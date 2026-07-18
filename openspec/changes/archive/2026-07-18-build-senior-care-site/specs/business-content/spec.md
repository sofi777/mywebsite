## ADDED Requirements

### Requirement: Config-driven business identity
The system SHALL define business name, tagline, services, contact info, and trust points in a single typed config module, consumed by templates rather than hardcoded per page.

#### Scenario: Config edit updates all usages
- **WHEN** a value is edited in the config module
- **THEN** every page displaying that value reflects the update after rebuild

### Requirement: Home page
The system SHALL render a home page with hero (headline/subhead from config), services summary, and CTA to Contact.

#### Scenario: Home reflects current config
- **WHEN** a visitor loads the home page
- **THEN** hero and services match the current config values

### Requirement: About/services page
The system SHALL render a page describing services and the founder's story, sourced from config.

#### Scenario: Services list renders
- **WHEN** a visitor loads the about/services page
- **THEN** all services in config are listed with descriptions

### Requirement: Contact page
The system SHALL render a contact page with an embedded Google Form for inquiries (same pattern as the reference site). No custom server-processed form (no backend in this change).

#### Scenario: Visitor submits an inquiry
- **WHEN** a visitor fills out and submits the embedded form
- **THEN** the submission is handled by Google Forms, with no site backend involved
