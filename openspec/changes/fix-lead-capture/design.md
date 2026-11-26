# Design

## Context

The site is a single-page React app (Vite, Tailwind, framer-motion) deployed as static files to Cloudflare Workers. Sections are identified by ids (`#home`, `#about`, `#services`, `#contact`), and `useSmoothScroll` already handles smooth scrolling for anchor links. The fixed navigation bar is 64px tall (80px on large screens), so a plain jump to `#contact` would hide the section heading behind it.

The call-to-action buttons are `<button>` elements without handlers, spread across `AppNavigation.tsx`, `HomeBanner.jsx`, `Services.tsx` and `Contact.tsx`. The contact form's submit handler is a 2-second `setTimeout` followed by a success state. See proposal.md for why this matters.

## Goals / Non-Goals

**Goals:**
- One shared way to scroll to a section, so every call-to-action behaves the same.
- A form submit that hands the enquiry to the visitor's email app with no server involved.

**Non-Goals:**
- Any backend, serverless function or third-party form service (for example Web3Forms or Formspree).
- Restyling the contact section or the buttons.
- Copy changes beyond the form's helper note (business hours and the "24/7" badge are an open question).
- Restoring the Projects section.

## Decisions

### 1. Section scrolling: one small helper, using CSS `scroll-margin-top`
Add a `scrollToSection(id)` helper that calls `element.scrollIntoView({ behavior: 'smooth' })`, and give the target sections `scroll-mt-20` (Tailwind's `scroll-margin-top`) so the fixed navigation bar never covers them.
- *Why:* `scroll-margin-top` handles the offset in one place, in CSS, for both buttons and normal `#` links, so no pixel offsets are calculated in JavaScript.
- *Alternative:* Turn every button into `<a href="#contact">`. This is semantically fine for scroll targets, but several of these are `motion.button`s with hover and tap effects, and swapping element types risks style regressions. Keeping them as buttons with an `onClick` is the smaller change.
- *Existing hook:* `useSmoothScroll` already intercepts document clicks on `#` links, but it reads `href` from `e.target` only. A click on an icon inside a link therefore falls back to an instant jump. It also passes a bare `#` (used by the footer links) to `querySelector`, which throws. Move the scrolling into `scrollToSection` and have the hook call it, finding the link with `target.closest('a[href^="#"]')` and ignoring a bare `#`. Both buttons and links then share one code path.

### 2. Form submission: build a `mailto:` URL and navigate to it
On a valid submit, build `mailto:souranova@outlook.com?subject=<s>&body=<b>`, encoding each value with `encodeURIComponent`, and set `window.location.href` to it.
- Body format:
  ```
  <Message>

  --
  Name: <Name>
  Email: <Email>
  ```
- *Why `encodeURIComponent`:* `URLSearchParams` encodes spaces as `+`, which many email apps show literally. `encodeURIComponent` produces `%20` and encodes line breaks as `%0A`, which email apps handle correctly.
- *Why `window.location.href`:* `window.open` leaves an empty tab behind in some browsers and can be blocked as a popup.
- *Alternative:* Remove the form (option B in the exploration). Rejected because it loses the section's layout.

### 3. Validation: use the browser's built-in validation
The inputs already have `required` and `type="email"`. Native validation runs before `onSubmit`, so the handler only fires with valid input, and the browser shows field-level messages. The handler trims values and rejects whitespace-only fields as a safety check.
- *Alternative:* Custom inline validation messages. More consistent styling, but more code, and nothing in the spec needs it.

### 4. Feedback: a static note replaces the success and error states
Remove `isSubmitting`, `submitStatus` and the green and red message blocks. Under the submit button, show a static note such as: "Clicking Send opens your email app with this message ready to send. If nothing opens, email us at souranova@outlook.com." The address is shown as plain selectable text. Rename the button label from "Send Message" to "Send via Email" so it matches what happens.
- *Why:* A `mailto:` navigation gives no completion signal, so any "sent" message would be a guess.
- Keep the form's values after submit, so a visitor whose email app didn't open can try again or copy the text.

### 5. Contact info links
Set the email card's `href` to `mailto:souranova@outlook.com` and the phone card's to `tel:+917842603857` (no spaces, as `tel:` URIs require). The office and business-hours cards keep `#` and stay as plain text. The existing `startsWith('#')` check already renders those as text.

### 6. Remove the Projects navigation entry
Delete `{ name: 'Projects', href: '#projects' }` from `navLinks`. When Projects comes back, the link goes back with it.

## Risks / Trade-offs

- [Visitor has no email app set up (common on shared or office desktops)] → Clicking Send does nothing visible. Mitigation: the static note shows the address as copyable text, and the form keeps its contents.
- [Very long messages exceed `mailto:` length limits in some email apps (around 2,000 characters, notably older Outlook desktop versions)] → The body can be cut off. The Message field is capped at 1,500 characters (`maxLength`), which keeps most enquiries well within limits but does not guarantee it: once encoded, a full 1,500-character English message makes a URL of about 2,700 characters, and non-English text such as Hindi or Bengali grows about 9× per character. Accepted, because typical enquiries are short and the note under the button gives the email address as a fallback. If cut-off messages turn up in practice, lower the cap or add a character counter.
- [Enquiries are no longer captured by the site itself] → Accepted for now. Moving to a form service later only changes the submit handler (Decision 2).
- [The email address is visible in the page source and can be scraped for spam] → It is already shown on the page today. Accepted.

## Migration Plan

Static deploy through the existing Cloudflare Workers pipeline. Roll back by redeploying the previous build. No data or configuration changes.
