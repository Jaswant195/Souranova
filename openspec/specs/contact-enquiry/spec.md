# contact-enquiry Specification

## Purpose

Lets prospective clients find and use a working way to contact Souranova from any part of the website, using only email and phone, with no backend service.

## Requirements

### Requirement: Contact call-to-action buttons lead to the contact form
Every button whose purpose is to start a conversation SHALL take the visitor to the contact section when activated. This covers the navigation "Get in Touch" button (desktop and mobile), the hero "Get Started" button, the service cards' "Learn More" buttons, "Get Custom Quote", "View Portfolio" and "Schedule a Call".

#### Scenario: Visitor clicks a contact call-to-action
- **WHEN** a visitor activates any of the listed call-to-action buttons
- **THEN** the page scrolls smoothly to the contact section
- **AND** the contact section's heading and form are fully visible below the fixed navigation bar

#### Scenario: Visitor uses the mobile menu call-to-action
- **WHEN** a visitor on a small screen opens the menu and activates "Get in Touch"
- **THEN** the menu closes
- **AND** the page scrolls to the contact section

#### Scenario: Keyboard user activates a call-to-action
- **WHEN** a keyboard user focuses a call-to-action button and presses Enter
- **THEN** the page scrolls to the contact section

### Requirement: Hero "Learn More" leads to the About section
The hero "Learn More" button SHALL take the visitor to the About section.

#### Scenario: Visitor clicks hero Learn More
- **WHEN** a visitor activates "Learn More" in the hero banner
- **THEN** the page scrolls smoothly to the About section

### Requirement: Email address is a working email link
The email address shown in the contact section SHALL open a new email to souranova@outlook.com in the visitor's default email app.

#### Scenario: Visitor clicks the email card
- **WHEN** a visitor activates the email address in the contact section
- **THEN** the browser opens a new email addressed to souranova@outlook.com
- **AND** the visitor is not taken to another page of the site

### Requirement: Phone number is a working call link
The phone number shown in the contact section SHALL start a call to +91 7842603857 on devices that support calling.

#### Scenario: Visitor taps the phone card on a phone
- **WHEN** a visitor on a phone activates the phone number in the contact section
- **THEN** the device offers to call +91 7842603857
- **AND** the visitor is not taken to another page of the site

### Requirement: Contact form sends the enquiry through the visitor's email app
Submitting a valid contact form SHALL open a new email to souranova@outlook.com in the visitor's email app, with the subject taken from the Subject field and the body containing the Message, the visitor's name and the visitor's email address.

#### Scenario: Visitor submits a complete form
- **WHEN** a visitor fills in Name, Email, Subject and Message and submits the form
- **THEN** a new email to souranova@outlook.com opens in the visitor's email app
- **AND** the email subject equals the Subject field
- **AND** the email body contains the Message, the Name and the Email entered

#### Scenario: Form text contains special characters
- **WHEN** the Subject or Message contains characters such as `&`, `?`, `#`, `%`, line breaks or non-English letters
- **THEN** the opened email shows the text exactly as the visitor typed it

### Requirement: Contact form requires valid input before sending
The contact form SHALL NOT open an email until Name, Email, Subject and Message are filled in and Email is a valid email address.

#### Scenario: Visitor submits with a missing field
- **WHEN** a visitor submits the form with any required field empty
- **THEN** no email is opened
- **AND** the visitor is told which field needs attention

#### Scenario: Visitor enters an invalid email address
- **WHEN** a visitor submits the form with an Email value that is not a valid email address
- **THEN** no email is opened
- **AND** the visitor is told the email address is invalid

### Requirement: Contact form does not claim a message was sent
The contact form SHALL NOT display a message stating that the enquiry was sent or received. It SHALL tell the visitor that submitting opens their email app, and show souranova@outlook.com as text they can copy if their email app does not open.

#### Scenario: Visitor views the form
- **WHEN** a visitor views the contact form
- **THEN** a note near the submit button explains that their email app will open to send the message
- **AND** souranova@outlook.com is shown as selectable text

#### Scenario: Visitor submits the form
- **WHEN** a visitor submits a valid form
- **THEN** no "Thank you, your message was sent" confirmation is shown

### Requirement: Navigation only links to sections that exist
The site navigation SHALL only contain links to sections present on the page.

#### Scenario: Projects section is hidden
- **WHEN** the Projects section is not shown on the page
- **THEN** the navigation (desktop and mobile) has no Projects link
