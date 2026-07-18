# site-shell

## Purpose

Defines the shared page chrome, theming system, and primary navigation used across every page of the senior care site.

## Requirements

### Requirement: Shared page layout
The system SHALL provide a shared layout (navigation and footer) applied consistently across all pages, responsive across mobile, tablet, and desktop.

#### Scenario: Consistent chrome across pages
- **WHEN** a visitor navigates between any two pages on the site
- **THEN** the same navigation bar and footer render on both

### Requirement: Warm-autumn design system
The system SHALL expose the warm-autumn palette (terracotta `#C1592B`, amber `#D98E3B`, espresso `#2B1B14`, warm brown `#3B241A`, blush sand `#F3E0D2`, warm cream `#FBF3E7`) as reusable theme tokens, not hardcoded per-page hex values.

#### Scenario: Palette change propagates site-wide
- **WHEN** a theme token value changes in the central theme config
- **THEN** every component referencing that token updates without per-page edits

### Requirement: Primary navigation
The system SHALL provide navigation to Home, About/Services, Blog, and Contact, plus a CTA linking to Contact.

#### Scenario: CTA reaches contact
- **WHEN** a visitor clicks the primary CTA from any page
- **THEN** they land on the Contact page
