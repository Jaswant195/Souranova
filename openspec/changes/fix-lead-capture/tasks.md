# Tasks

The project has no automated test setup. Each task is verified with `npm run build`, `npm run lint` and the stated check in the browser (`npm run dev`).

## 1. Shared section scrolling

- [x] 1.1 Add a `scrollToSection(id)` helper (for example in `src/utils/scrollToSection.ts`) that smooth-scrolls to the element with that id and does nothing if it isn't found; verify `npm run build` succeeds
- [x] 1.2 Update `useSmoothScroll` to find the link with `closest('a[href^="#"]')`, ignore a bare `#`, and call `scrollToSection`; verify that clicking a nav link scrolls smoothly and clicking a footer `#` link throws no console error
- [x] 1.3 Add `scroll-mt-20` to the `#home`, `#about`, `#services` and `#contact` sections; verify in the browser that each section's heading sits fully below the fixed navigation bar after scrolling, on mobile and desktop widths

## 2. Call-to-action buttons

- [x] 2.1 In `AppNavigation.tsx`, make the desktop and mobile "Get in Touch" buttons scroll to `contact` (the mobile one also closes the menu); verify both in the browser
- [x] 2.2 Remove the `Projects` entry from `navLinks` in `AppNavigation.tsx`; verify that neither the desktop nor the mobile nav shows a Projects link
- [x] 2.3 In `HomeBanner.jsx`, make "Get Started" scroll to `contact` and "Learn More" scroll to `about`; verify on more than one carousel slide
- [x] 2.4 In `Services.tsx`, make each card's "Learn More", "Get Custom Quote" and "View Portfolio" scroll to `contact`; verify each one in the browser
- [x] 2.5 In `Contact.tsx`, make "Schedule a Call" scroll to the contact form; verify in the browser
- [x] 2.6 Tab to each call-to-action button and press Enter; verify each one scrolls to its target

## 3. Contact links and email form

- [x] 3.1 Set the email card `href` to `mailto:souranova@outlook.com` and the phone card `href` to `tel:+917842603857`; verify that hovering shows those URLs and clicking opens the email app or dialler instead of a 404
- [x] 3.2 Replace the simulated submit in `Contact.tsx` with a handler that trims the values, builds the `mailto:` URL with `encodeURIComponent` (subject = Subject; body = Message plus a Name/Email signature), and navigates to it; remove `isSubmitting`, `submitStatus` and the success and error blocks; verify that submitting a filled form opens a pre-addressed email with the correct subject and body
- [x] 3.3 Check special characters: submit a Subject and Message containing `&`, `?`, `#`, `%`, a line break and a non-English word; verify the email app shows them exactly as typed (no `+` instead of spaces, no cut-off text)
- [x] 3.4 Check validation: submit with each field empty in turn, then with an invalid email; verify that no email opens and the browser points to the problem field
- [x] 3.5 Add `maxLength={1500}` to the Message field; verify you can't type more than 1,500 characters
- [x] 3.6 Rename the button label to "Send via Email" and add the helper note below it with souranova@outlook.com as selectable text; verify the note shows on mobile and desktop and the address can be selected and copied
- [x] 3.7 Verify the form keeps its values after submitting, so the visitor can retry

## 4. Final check

- [x] 4.1 Run `npm run build` and `npm run lint` with no new errors, then run `npm run preview` and go through the spec scenarios in `specs/contact-enquiry/spec.md` end to end on a desktop browser and a phone-width viewport

## Workflow follow-up

- Archive the change with `/openspec-archive-change` once it's implemented and reviewed.
- Open question to raise with the site owner separately: business hours (PST vs IST) and the "24/7" badge.
