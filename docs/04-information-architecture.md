# 04 — Information Architecture

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Information Architecture |
| Document ID | DOC-004 |
| Version | 1.0.0 |
| Status | Approved |
| Repository | MatchStick Events Website |
| Depends On | README.md, 01-product-vision.md, 02-business-requirements.md, 03-user-personas.md |

---

# Purpose

This document defines the overall structure of the MatchStick Events website.

It specifies:

- Website hierarchy
- Navigation system
- Page relationships
- User journeys
- URL structure
- Internal linking
- Mobile navigation
- Footer architecture

This document does **not** define page layouts or visual design. Those are specified in later documents.

---

# Information Architecture Goals

The website architecture should:

- Feel simple.
- Require minimal learning.
- Keep navigation consistent.
- Help visitors reach consultation quickly.
- Encourage exploration of previous work.
- Minimize unnecessary clicks.

---

# Website Structure

```

Home
│
├── About
│
├── Services
│ │
│ ├── Weddings
│ ├── Anniversaries
│ ├── Birthdays
│ ├── Baby Showers
│ ├── Corporate Events
│ ├── High Teas
│ └── Festive Gatherings
│
├── Gallery
│
├── Previous Events
│
├── Dream Planner
│
├── Contact
│
└── Consultation

```

The client explicitly requested the core pages: Home, Services, Gallery, Contact, Previous Events, and Booking/Contact. The Dream Planner is a documented design enhancement rather than a client requirement. 0

---

# Primary Navigation

Desktop navigation should contain:

- Home
- About
- Services
- Gallery
- Previous Events
- Contact

A persistent:

**Book Consultation**

button should appear separately as the primary call-to-action.

---

# Mobile Navigation

Mobile navigation should remain simple.

Recommended structure:

```

☰

Home

About

Services

Gallery

Previous Events

Contact

Book Consultation

```

Navigation should never require more than two taps to reach any primary page.

---

# Footer Navigation

The footer should include:

Company

- About
- Services
- Gallery
- Previous Events

Contact

- Phone
- Email
- Address
- WhatsApp

Social

- Instagram
- Facebook

Legal

- Privacy Policy
- Terms & Conditions

The client provides contact details and social media accounts which should be surfaced consistently across the site. 1

---

# URL Structure

Recommended URLs:

```

/

about

/services

/services/weddings

/services/anniversaries

/services/birthdays

/services/baby-showers

/services/corporate-events

/services/high-teas

/services/festive-events

/gallery

/previous-events

/dream-planner

/contact

/consultation

```

URLs should be:

- lowercase
- descriptive
- SEO friendly

---

# Page Hierarchy

Level 1

- Home

Level 2

- About
- Services
- Gallery
- Previous Events
- Contact
- Dream Planner
- Consultation

Level 3

Individual service pages (optional future expansion)

---

# Internal Linking Strategy

Every page should guide users toward another meaningful page.

Examples:

Homepage →

Services

Homepage →

Gallery

Homepage →

Book Consultation

Services →

Previous Events

Gallery →

Consultation

Previous Events →

Services

Contact →

Consultation

No page should become a dead end.

---

# User Journey 1

Wedding Client

```

Homepage

↓

Services

↓

Wedding Service

↓

Gallery

↓

Previous Events

↓

Book Consultation

```

---

# User Journey 2

Corporate Client

```

Homepage

↓

Corporate Events

↓

Corporate Portfolio

↓

Contact

↓

Consultation

```

---

# User Journey 3

Curious Visitor

```

Homepage

↓

Gallery

↓

Previous Events

↓

About

↓

Consultation

```

---

# User Journey 4

Returning Client

```

Homepage

↓

Contact

↓

WhatsApp

```

---

# Consultation Funnel

The primary conversion path should be:

```

Discover

↓

Explore

↓

Trust

↓

Consultation

```

Visitors should never feel pressured.

The website should naturally encourage contact after establishing credibility.

---

# Navigation Principles

Navigation should be:

- Predictable
- Minimal
- Consistent
- Fast
- Accessible
- Mobile friendly

Avoid:

- Deep nesting
- Confusing labels
- Duplicate menu items
- Hidden navigation

---

# Search

Version 1.0

No website-wide search is required.

This can be introduced in a future release if content expands significantly.

---

# Breadcrumbs

Recommended only for:

- Individual Service Pages
- Future Blog
- Future Portfolio Articles

Not necessary for top-level pages.

---

# Error Navigation

404 Page should include:

- Return Home
- View Services
- Contact
- Book Consultation

The visitor should always have a clear recovery path.

---

# Future Expansion

The architecture should support adding:

- Blog
- Testimonials
- FAQs
- Careers
- Vendor Partnerships
- Press Features
- Awards
- Client Portal

These are future possibilities and are not part of Version 1.

---

# Architecture Principles

The website architecture should always satisfy:

1. Every important page is reachable within three clicks.
2. Navigation remains identical across the website.
3. Consultation is always easily accessible.
4. Users never feel lost.
5. Every page has a clear purpose.

---

# Acceptance Criteria

This document is complete when:

- Website hierarchy is defined.
- Navigation is documented.
- User journeys are documented.
- URL structure is defined.
- Internal linking strategy is established.
- Future scalability is considered.

---

# Related Documents

- README.md
- 01-product-vision.md
- 02-business-requirements.md
- 03-user-personas.md
- 05-brand-guidelines.md

---

**Document:** 04-information-architecture.md

**Version:** 1.0.0

**Status:** Approved
