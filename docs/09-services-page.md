# 09 — Services Page Specification (Part 1)

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Services Page |
| Document ID | DOC-009 |
| Version | 1.0.0 |
| Part | 1 of 4 |
| Status | Approved |
| Depends On | README.md, 01-product-vision.md, 05-brand-guidelines.md, 06-design-system.md |

---

# Purpose

The Services page exists to explain what MatchStick Events offers while inspiring confidence rather than encouraging price comparison.

Unlike a traditional catalogue, this page should communicate expertise, creativity and craftsmanship.

Every section should encourage visitors to imagine their own celebration.

The page should ultimately guide visitors toward requesting a consultation.

---

# Business Goals

The Services page should:

- Showcase the complete service portfolio.
- Explain each service category.
- Demonstrate versatility.
- Build trust.
- Increase qualified consultation enquiries.
- Encourage exploration of the portfolio.

The client identifies the website as consultation-focused rather than price-driven. 0

---

# User Goals

Visitors should quickly discover:

- Whether MatchStick Events plans their type of event.
- The quality of the company's work.
- What makes the services unique.
- How to begin planning.

---

# Information Hierarchy

```
Hero

↓

Introduction

↓

Service Overview

↓

Service Categories

↓

Portfolio References

↓

Consultation CTA
```

---

# Page Structure

```
Navigation

↓

Hero Section

↓

Introduction

↓

Services Grid

↓

Wedding Services

↓

Anniversary Services

↓

Birthday Services

↓

Baby Shower Services

↓

Corporate Services

↓

High Tea Services

↓

Seasonal Services

↓

Consultation Banner

↓

Footer
```

---

# Hero Section

## Purpose

Introduce the visitor to the complete range of experiences offered by MatchStick Events.

The hero should communicate that every celebration receives the same level of creativity and attention to detail.

---

# Hero Background

Preferred

Full-width cinematic photograph.

Alternative

Muted looping background video.

Photography should showcase real events where possible.

---

# Hero Heading

Example direction only

```
Celebrations Designed Around Your Story
```

---

# Hero Supporting Text

Short paragraph.

Approximately

50–80 words.

Introduce the philosophy behind the services rather than listing them.

---

# Hero CTA

Primary

```
Book Consultation
```

Secondary

```
Explore Portfolio
```

---

# Scroll Behaviour

Smooth transition.

Hero fades naturally into the introduction section.

Avoid abrupt section breaks.

---

# Introduction Section

## Purpose

Provide a concise overview of MatchStick Events' approach.

Do not repeat the About page.

Instead explain:

- Every celebration is unique.
- Every service is personalised.
- Every detail matters.

This reflects the company's mission of transforming ideas into memorable events. 1

---

# Layout

Desktop

Two columns.

Left

Content.

Right

Premium supporting image.

Tablet

Stacked.

Mobile

Single column.

---

# Service Categories Overview

The client provides seven primary service categories:

- Weddings & Pre-Wedding Functions
- Anniversaries & Vow Renewals
- Birthdays & Milestone Parties
- Baby Showers
- Corporate Events & Galas
- High Teas & Social Brunches
- Seasonal & Festive Gatherings 2

Each category should be introduced with equal visual importance.

---

# Services Grid

## Desktop

3-column responsive grid.

---

## Tablet

2 columns.

---

## Mobile

Single-column stacked cards.

---

# Service Card Specification

Each card contains:

- Hero image
- Service icon
- Service title
- Short description
- Learn More button

The short description should summarize the service in one or two sentences, based on the client's descriptions. 3

---

# Card Design

Background

White.

Border Radius

Large.

Padding

32px.

Shadow

Medium.

Hover

- Lift
- Shadow increase
- Image zoom
- Gold accent line

Transition

250ms.

---

# Card Content Rules

Descriptions should:

- Be concise.
- Avoid marketing buzzwords.
- Focus on experience.
- Highlight personalization.

Never display:

- Prices.
- Packages.
- Discounts.

---

# Icons

Each category should have a consistent minimalist icon.

Examples:

- Wedding rings
- Cake
- Baby carriage
- Briefcase
- Tea cup
- Festival lantern

Icons should use the icon library defined in `06-design-system.md`.

---

# Portfolio References

Each service card should optionally display:

```
Featured Celebration
```

Clicking it opens a relevant portfolio item if available.

Examples include events held at Taj Bengal, Suryagarh, The Dockyard Co., and JW Marriott. 4

---

# Navigation Behaviour

The Services page should support quick navigation.

Recommended:

Sticky sub-navigation after the hero.

Example:

```
Weddings

Anniversaries

Birthdays

Baby Showers

Corporate

High Teas

Seasonal
```

Clicking a category scrolls smoothly to its section.

---

# Animation Guidelines

Section reveal

Fade Up.

Cards

Scale from 98% to 100%.

Images

Subtle zoom.

Buttons

Soft colour transition.

Avoid:

- Bounce
- Rotation
- Flashing effects

---

# Responsive Behaviour

Desktop

Rich imagery.

Large spacing.

Tablet

Balanced two-column layouts.

Mobile

Stacked sections.

Large tap targets.

Readable typography.

---

# Accessibility

Requirements

- Semantic headings.
- Alt text.
- Keyboard navigation.
- Screen reader compatibility.
- Visible focus states.
- Accessible colour contrast.

---

# Consultation Placement

The page should encourage consultation naturally.

CTAs should appear:

- Hero section
- Mid-page (after several services)
- End of page

Avoid overwhelming users with repetitive buttons.

---

# Functional Requirements

| ID | Requirement |
|----|-------------|
| SV-001 | Display all primary service categories. |
| SV-002 | Provide navigation to each service section. |
| SV-003 | Allow users to explore related portfolio items. |
| SV-004 | Display consultation CTA throughout the page. |
| SV-005 | Maintain responsive behaviour. |

---

# Non-Functional Requirements

The Services page shall be:

- Responsive.
- Accessible.
- SEO friendly.
- Fast.
- Consistent with the Design System.

---

# Developer Notes

Developers should:

- Build every service section as a reusable component.
- Reuse CTA components.
- Reuse section headers.
- Follow design tokens.
- Avoid duplicated layouts.

Future service categories should be easy to add without redesigning the page.

---

# End of Part 1

Part 2 continues with detailed specifications for:

- Weddings & Pre-Wedding Functions
- Anniversaries & Vow Renewals

These sections will define page content, layouts, imagery, gallery integration, CTAs, animations, and responsive behaviour in detail.

# 09 — Services Page Specification (Part 2)

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Services Page |
| Document ID | DOC-009 |
| Version | 1.0.0 |
| Part | 2 of 4 |
| Status | Approved |
| Depends On | README.md, 06-design-system.md |

---

# Wedding & Pre-Wedding Functions

## Purpose

This is the flagship service of MatchStick Events.

The objective is to communicate that every wedding is designed around the couple rather than around predefined packages.

The client describes this service as end-to-end luxury wedding planning covering intimate gatherings through grand celebrations. Included functions include Roka, Mehendi, Sangeet, Haldi, the main wedding ceremony, and the reception. 0

---

# Section Goal

Visitors should immediately understand:

- Complete wedding planning is available.
- Every celebration is personalized.
- MatchStick Events handles both traditional and modern ceremonies.
- The experience extends beyond decoration.

---

# Section Layout

Desktop

```
Large Hero Image

↓

Left
Content

Right
Gallery Preview

↓

Feature Grid

↓

CTA
```

Tablet

Stacked layout.

Mobile

Single-column.

---

# Hero Image

Preferred imagery

- Couple moments
- Luxury mandap
- Floral installations
- Reception ambience
- Emotional family moments

Photography should feel authentic.

Avoid stock photography whenever possible.

---

# Section Heading

Example tone

```
Wedding Celebrations Crafted Around Your Story
```

Not final copy.

---

# Introduction

Approximately 100–150 words.

Describe the philosophy behind planning weddings.

Avoid discussing logistics first.

Begin with emotion.

---

# Feature Grid

Display six highlight cards.

Suggested topics

- End-to-End Planning
- Venue Styling
- Guest Experience
- Entertainment
- Floral Design
- Wedding Coordination

These are design recommendations that expand upon the client's description of comprehensive wedding planning. 1

---

# Included Celebrations

Display elegant chips or cards for:

- Roka
- Mehendi
- Sangeet
- Haldi
- Wedding Ceremony
- Reception

These events are explicitly listed by the client. 2

---

# Gallery Preview

Display

Four premium photographs.

Desktop

2×2 Grid.

Tablet

2 columns.

Mobile

Horizontal swipe.

---

# Portfolio Reference

Suggested featured project

"Spirit of Egypt: Pharaoh's Land"

or another suitable wedding-related portfolio project from the client.

The available portfolio should guide the final selection. 3

---

# CTA

Primary

```
Plan Your Wedding
```

Secondary

```
View Wedding Portfolio
```

---

# Animation

Images

Reveal while scrolling.

Cards

Fade Up.

CTA

Scale slightly on hover.

---

# Responsive Behaviour

Desktop

Large immersive photography.

Tablet

Balanced spacing.

Mobile

Readable typography.

Large tap targets.

---

# Functional Requirements

| ID | Requirement |
|----|-------------|
| WED-001 | Display wedding overview. |
| WED-002 | Display included celebrations. |
| WED-003 | Showcase related portfolio. |
| WED-004 | Provide consultation CTA. |

---

# Anniversary & Vow Renewals

## Purpose

Position MatchStick Events as specialists in elegant milestone celebrations.

The client describes this service as customized romantic or vintage-style celebrations, including milestone parties, intimate dinners, and family gatherings. 4

---

# Section Goal

Visitors should feel that anniversaries deserve the same creativity and attention as weddings.

---

# Layout

Desktop

```
Image

↓

Story Section

↓

Feature Cards

↓

Portfolio Preview

↓

CTA
```

Tablet

Stacked.

Mobile

Single-column.

---

# Hero Image

Preferred imagery

- Elegant dinner setup
- Romantic lighting
- Floral tablescape
- Family celebration

---

# Introduction

Focus on

- Shared memories
- Milestone moments
- Renewing promises
- Celebrating togetherness

Avoid generic event language.

---

# Feature Cards

Suggested cards

- Personalized Themes
- Luxury Tablescapes
- Family Celebrations
- Romantic Styling
- Intimate Experiences
- Full Event Coordination

These expand on the client-provided description without changing its intent. 5

---

# Included Events

Display

- 25th Anniversary
- 50th Anniversary
- Vow Renewal
- Family Dinner
- Couple Celebration

The first two milestone examples and family/couple dinners are explicitly mentioned in the source material. 6

---

# Portfolio Highlight

Recommended project

Traditional South Indian Sit-Down Lunch

Location

Taj Bengal

This portfolio item is identified as an anniversary celebration in the client brief. 7

---

# CTA

Primary

```
Plan Your Celebration
```

Secondary

```
View Anniversary Portfolio
```

---

# Animation

Section reveal

Fade.

Images

Parallax.

Cards

Lift on hover.

Buttons

Colour transition.

---

# Responsive Behaviour

Maintain visual consistency with the Wedding section.

Alternate image placement to create rhythm while scrolling.

---

# Functional Requirements

| ID | Requirement |
|----|-------------|
| ANN-001 | Display anniversary overview. |
| ANN-002 | Display milestone celebration options. |
| ANN-003 | Showcase relevant portfolio. |
| ANN-004 | Provide consultation CTA. |

---

# Shared Design Rules

Both Wedding and Anniversary sections shall:

- Follow the Design System.
- Use premium imagery.
- Maintain generous whitespace.
- Avoid pricing information.
- Link visitors toward consultation rather than comparison.
- Preserve a consistent section hierarchy.

---

# End of Part 2

Part 3 continues with:

- Birthdays & Milestone Parties
- Baby Showers
- High Teas & Social Brunches
- Seasonal & Festive Gatherings

Each service will receive its own detailed specification, gallery recommendations, CTAs, interaction behaviour, and responsive layout.

# 09 — Services Page Specification (Part 3)

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Services Page |
| Document ID | DOC-009 |
| Version | 1.0.0 |
| Part | 3 of 4 |
| Status | Approved |
| Depends On | README.md, 06-design-system.md |

---

# Birthdays & Milestone Parties

## Purpose

Position MatchStick Events as a creative partner for celebrations across every stage of life.

The page should communicate that birthdays are not ordinary parties—they are memorable experiences designed around the personality of the individual.

The client describes this service as immersive themed birthday parties for children, teenagers and adults, including themed play zones, milestone celebrations, custom backdrops and cake-cutting stages. 0

---

# Section Goal

Visitors should understand:

- Every celebration is unique.
- Themes are fully customised.
- Experiences are designed around the guest of honour.
- Creativity is prioritised over decoration.

---

# Layout

Desktop

```
Hero Image

↓

Introduction

↓

Experience Cards

↓

Gallery Preview

↓

CTA
```

Tablet

Stacked layout.

Mobile

Single-column.

---

# Hero Image

Preferred imagery

- Luxury birthday décor
- Kids' themed setup
- Elegant adult celebration
- Cake-cutting moment
- Balloon installations

Images should communicate joy without appearing childish unless the service specifically targets children.

---

# Introduction

Recommended length

100–120 words.

Focus on creating memories rather than organising parties.

---

# Experience Cards

Display six cards.

Suggested topics

- Custom Themes
- Luxury Decor
- Entertainment
- Kids Play Areas
- Milestone Celebrations
- Personalised Experiences

These topics expand upon the client's service description while remaining aligned with it. 1

---

# Included Celebrations

Display

- Children's Birthdays
- Teen Celebrations
- Adult Milestones
- 30th Birthday
- 50th Birthday
- Cake Ceremony
- Custom Backdrops

The milestone examples and custom backdrops are mentioned in the client brief. 2

---

# Gallery Preview

Desktop

3-column gallery.

Tablet

2-column gallery.

Mobile

Horizontal carousel.

---

# CTA

Primary

```
Plan a Birthday Celebration
```

Secondary

```
Explore Birthday Gallery
```

---

# Baby Showers

## Purpose

Present MatchStick Events as specialists in elegant, intimate celebrations welcoming a growing family.

The client describes baby showers as aesthetic, delicate and intimate events with custom colour themes, high-tea tablescapes, traditional seating arrangements and guest activities. 3

---

# Section Goal

The section should feel:

- Soft
- Elegant
- Warm
- Personal

Avoid overly playful designs.

---

# Layout

Desktop

```
Large Image

↓

Story Section

↓

Feature Cards

↓

Gallery

↓

CTA
```

Tablet

Stacked.

Mobile

Single-column.

---

# Hero Image

Preferred

Natural lighting.

Pastel floral arrangements.

Elegant table styling.

Family moments.

---

# Introduction

Discuss:

- Welcoming new beginnings.
- Celebrating family.
- Creating beautiful shared memories.

---

# Feature Cards

Suggested cards

- Custom Themes
- Floral Styling
- Luxury Tablescapes
- Guest Activities
- Traditional Elements
- Personalised Decor

These recommendations reflect the services outlined by the client. 4

---

# Included Experiences

Display

- Gender Neutral Themes
- Personalised Colour Themes
- High Tea Styling
- Traditional Seating
- Guest Games

All of these are directly supported by the client brief. 5

---

# CTA

Primary

```
Plan a Baby Shower
```

Secondary

```
View Baby Shower Gallery
```

---

# High Teas & Social Brunches

## Purpose

Present boutique luxury daytime experiences.

The client describes these events as luxury dining experiences featuring floral-heavy themes, curated seating, personalised menus and premium crockery. 6

---

# Section Goal

Communicate elegance through simplicity.

The section should feel refined rather than extravagant.

---

# Hero Image

Preferred

Garden setting.

Premium crockery.

Fresh flowers.

Natural daylight.

---

# Introduction

Discuss:

- Slow celebrations.
- Boutique hospitality.
- Beautiful conversations.
- Luxury dining atmosphere.

---

# Feature Cards

Display

- Luxury Tablescapes
- Personalised Menus
- Curated Seating
- Floral Design
- Premium Crockery
- Boutique Styling

---

# Portfolio Recommendation

Recommended project

```
The Vintage Botanical High Tea
```

This event directly represents the service category. 7

---

# CTA

Primary

```
Plan a High Tea Experience
```

Secondary

```
View Gallery
```

---

# Seasonal & Festive Gatherings

## Purpose

Showcase MatchStick Events' ability to design celebrations rooted in culture and tradition.

The client lists festive events including Diwali card parties, Holi brunches, Christmas celebrations and traditional South Indian or Bengali festive décor. 8

---

# Section Goal

Celebrate tradition without sacrificing elegance.

---

# Hero Image

Preferred imagery

- Diwali lighting
- Holi colours
- Christmas styling
- Traditional décor

Images should appear premium rather than crowded.

---

# Introduction

Discuss:

- Bringing families together.
- Preserving traditions.
- Creating memorable festive experiences.

---

# Feature Cards

Suggested topics

- Cultural Styling
- Festival Decor
- Family Gatherings
- Luxury Tablescapes
- Lighting Design
- Celebration Planning

---

# Included Celebrations

Display

- Diwali Parties
- Holi Brunches
- Christmas Events
- South Indian Festive Decor
- Bengali Festive Decor

These examples are explicitly listed in the Source of Truth. 9

---

# CTA

Primary

```
Plan Your Celebration
```

Secondary

```
Explore Festive Gallery
```

---

# Shared Design Rules

All four service sections shall:

- Follow the Design System.
- Maintain visual consistency.
- Use premium photography.
- Avoid unnecessary animations.
- Present elegant spacing.
- Avoid displaying pricing.
- Encourage consultation instead of comparison.

---

# Shared Responsive Behaviour

Desktop

Large imagery.

Alternating layouts.

Tablet

Reduced spacing.

Two-column layouts where appropriate.

Mobile

Single-column.

Swipeable galleries.

Large touch targets.

Readable typography.

---

# Shared Accessibility Requirements

Every section shall support:

- Keyboard navigation.
- Screen reader compatibility.
- Semantic headings.
- Alt text.
- WCAG AA colour contrast.
- Responsive image loading.

---

# End of Part 3

Part 4 completes the Services Page with:

- Corporate Events & Galas
- Final Consultation Banner
- Cross-page navigation
- SEO specification
- Analytics events
- Functional Requirements
- Non-functional Requirements
- Requirement IDs
- Developer Notes
- Acceptance Criteria
- Final implementation checklist

# 09 — Services Page Specification (Part 4)

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Services Page |
| Document ID | DOC-009 |
| Version | 1.0.0 |
| Part | 4 of 4 |
| Status | Approved |
| Depends On | README.md, 06-design-system.md |

---

# Corporate Events & Galas

## Purpose

Position MatchStick Events as a premium event partner capable of executing professional, brand-aligned corporate experiences.

The section should communicate reliability, precision and creativity.

The client describes this service as professional, brand-aligned events including product launches, gala dinners, award ceremonies and office festival celebrations. 0

---

# Section Goal

Visitors should understand:

- Corporate events receive the same attention to detail as weddings.
- Brand identity is respected.
- Timelines are professionally managed.
- Large-scale execution is supported.

---

# Layout

Desktop

```
Hero Image

↓

Introduction

↓

Capabilities Grid

↓

Featured Portfolio

↓

Consultation CTA
```

Tablet

Stacked layout.

Mobile

Single-column.

---

# Hero Image

Preferred imagery

- Corporate stage
- Premium lighting
- Awards ceremony
- Branded backdrop
- Executive networking

Avoid generic office meeting photographs.

---

# Introduction

Recommended length

100–150 words.

Discuss:

- Professional planning.
- Brand consistency.
- Guest experience.
- Event execution.

---

# Capabilities Grid

Display six capability cards.

Suggested topics

- Product Launches
- Gala Dinners
- Award Ceremonies
- Executive Events
- Corporate Branding
- Event Coordination

These capability areas are derived from the client's service description. 1

---

# Portfolio Highlight

Recommended project

```
Corporate Gala & Elite Awards
```

Location

JW Marriott Hotel, Kolkata

This project directly aligns with the Corporate Events service category. 2

---

# CTA

Primary

```
Plan Your Corporate Event
```

Secondary

```
View Corporate Portfolio
```

---

# Consultation Banner

## Purpose

The consultation banner acts as the final conversion opportunity on the Services page.

Visitors reaching this section have already explored the available services and should be encouraged to start a conversation.

---

# Layout

Full-width section.

Luxury background image.

Dark gradient overlay.

Centered content.

---

# Heading

Example direction

```
Let's Create Something Extraordinary Together
```

Design guidance only.

---

# Supporting Text

Brief message encouraging visitors to discuss their ideas with MatchStick Events.

Avoid pressure-driven marketing language.

---

# CTA Buttons

Primary

```
Book Consultation
```

Secondary

```
Contact Us
```

The client's current enquiry channels include phone, WhatsApp, email and social media. The website should complement these existing channels. 3 4

---

# Cross-Page Navigation

Recommended internal links

Services →

Gallery

Services →

Previous Events

Services →

About

Services →

Contact

Services →

Consultation

This supports natural exploration while maintaining a consultation-focused journey.

---

# SEO Specification

## Page Title

```
Luxury Event Planning Services | MatchStick Events Kolkata
```

---

## Meta Description

Summarize:

- Luxury event planning.
- Weddings.
- Corporate events.
- Birthdays.
- Baby showers.
- High teas.
- Festive celebrations.

The keywords should reflect the actual services provided by the client. 5

---

# Structured Data

Recommended Schema.org type

```
LocalBusiness

+

ProfessionalService
```

Include:

- Business name
- Address
- Phone
- Email
- Service categories

The business information is supplied in the client brief. 6

---

# Open Graph

Include

- Page title
- Description
- Hero image
- Website URL

---

# Analytics Events

Track

- Service viewed
- Service card clicked
- Portfolio clicked
- Consultation clicked
- Contact clicked
- Gallery clicked

These analytics events are implementation recommendations.

---

# Functional Requirements

| ID | Requirement |
|----|-------------|
| SV-006 | Display Corporate Events section. |
| SV-007 | Display consultation banner. |
| SV-008 | Link every service to consultation. |
| SV-009 | Provide internal navigation. |
| SV-010 | Support responsive layouts across all devices. |

---

# Non-Functional Requirements

The Services page shall be:

- Responsive.
- Accessible.
- SEO friendly.
- Performance optimized.
- Maintainable.
- Consistent with the Design System.
- Mobile-first.

---

# Requirement Traceability

| Business Requirement | Services Page Implementation |
|----------------------|------------------------------|
| Build trust | Premium service descriptions and portfolio references |
| Showcase previous work | Gallery and featured portfolio sections |
| Increase consultation requests | Consultation CTAs throughout the page |
| Strengthen brand identity | Consistent premium design language |
| Improve user understanding | Dedicated section for each service |

---

# Developer Notes

Developers should:

- Implement every service as an independent reusable component.
- Use responsive image loading.
- Lazy-load non-critical media.
- Reuse CTA components.
- Reuse typography tokens.
- Reuse spacing tokens.
- Avoid duplicate layouts where possible.
- Keep section ordering configurable.

---

# Future Enhancements

The page architecture should support:

- Individual service landing pages.
- Testimonials per service.
- Case studies.
- Client success stories.
- Service-specific FAQs.
- Destination event pages.
- Seasonal promotional campaigns.

These are future design possibilities and are not part of Version 1.

---

# Acceptance Criteria

The Services page implementation is complete when:

- All seven service categories are displayed.
- Every category contains a clear overview.
- Relevant portfolio references are linked.
- Consultation CTAs function correctly.
- Navigation between sections works smoothly.
- Responsive layouts perform correctly on mobile, tablet and desktop.
- Accessibility requirements are met.
- SEO metadata is implemented.
- Visual design follows the Design System.
- Performance remains within project targets.

---

# Related Documents

- README.md
- 05-brand-guidelines.md
- 06-design-system.md
- 10-gallery-page.md

---

**Document:** 09-services-page.md

**Version:** 1.0.0

**Status:** Approved

**End of Services Page Specification**
