## ADDED Requirements

### Requirement: Checkout session creation
The system SHALL create a Stripe Checkout Session for a valid package ID, resolving the price server-side from config, and redirect the visitor to Stripe's hosted checkout page. The system SHALL NOT accept a price or amount from the client.

#### Scenario: Visitor books a package
- **WHEN** a visitor clicks "Book this package" for a valid package
- **THEN** they are redirected to a Stripe-hosted checkout page for that package's configured price

### Requirement: Reject invalid package requests
The system SHALL NOT create a Checkout Session for a `packageId` that doesn't match a configured package.

#### Scenario: Unknown package ID
- **WHEN** a checkout request is made with a `packageId` not present in config
- **THEN** no Checkout Session is created and an error is returned

### Requirement: Verified success confirmation
The system SHALL verify a Checkout Session's `payment_status` is `paid` via the Stripe API before displaying a booking confirmation.

#### Scenario: Direct visit without payment
- **WHEN** a visitor loads the success URL without a valid, paid session ID
- **THEN** no booking confirmation is shown

### Requirement: Cancel page
The system SHALL show a cancel page, with no charge made, when a visitor backs out of Stripe checkout.

#### Scenario: Visitor cancels checkout
- **WHEN** a visitor cancels from the Stripe-hosted checkout page
- **THEN** they are redirected to a cancel page and are not charged
