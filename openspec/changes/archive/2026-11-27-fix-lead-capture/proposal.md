# Proposal

## Why

The site has no working way for a prospective client to reach Souranova. Every call-to-action button does nothing, the email and phone links point to non-existent pages, and the contact form shows a fake "Thank you" while discarding the message, so real enquiries are silently lost. This needs fixing before the site is promoted, without adding any backend service.

## What Changes

- Call-to-action buttons (navigation "Get in Touch", hero "Get Started", service "Learn More", "Get Custom Quote", "View Portfolio", "Schedule a Call") scroll smoothly to the contact form instead of doing nothing. The hero "Learn More" scrolls to the About section.
- The email card links to `mailto:souranova@outlook.com` and the phone card to `tel:+917842603857`.
- The contact form no longer simulates a submission. On submit it validates the fields and opens the visitor's email app with a message to `souranova@outlook.com`, pre-filled from the form.
- The fake success and error messages are replaced by a short note explaining that the visitor's email app will open, with the email address shown as a fallback.
- The navigation link to the hidden Projects section (`#projects`) is removed.
- No backend, third-party form service, or new dependency is added.

## Capabilities

### New Capabilities
- `contact-enquiry`: How visitors find and use the ways to contact Souranova: call-to-action navigation to the contact section, direct email and phone links, and the email-based contact form.

### Modified Capabilities
<!-- None: no specs exist yet. -->

## Impact

- Code: `src/components/Navigation/AppNavigation.tsx`, `src/components/HomeBanner/HomeBanner.jsx`, `src/components/Services/Services.tsx`, `src/components/Contact/Contact.tsx`.
- Dependencies: none added or removed.
- Systems: none. Enquiries arrive in the existing Outlook inbox through the visitor's own email app.
- Open question (not in scope unless confirmed): whether business hours should read IST instead of PST, and whether the "24/7" badge on the contact section is accurate.
