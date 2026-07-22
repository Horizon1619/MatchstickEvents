# 06 — Design System

> MatchStick Events Documentation Repository

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Design System |
| Document ID | DOC-006 |
| Version | 1.0.0 |
| Status | Approved |
| Repository | MatchStick Events Website |
| Depends On | README.md, 01-product-vision.md, 05-brand-guidelines.md |

---

# Purpose

This document defines the complete visual language and reusable UI system for the MatchStick Events website.

Every future page must reference this document before implementing layouts or components.

The objective is to maintain visual consistency, scalability and accessibility throughout the product.

---

# Design Philosophy

The client requests an elegant, modern visual identity that feels dream-like while avoiding clutter or colours that appear out of context. 0

The interface should therefore communicate:

- Luxury
- Simplicity
- Elegance
- Confidence
- Calmness
- Sophistication

The UI should never compete with the photography.

Instead,

**Photography becomes the hero.**

The interface quietly supports it.

---

# Design Principles

Every screen should satisfy:

- Minimalism
- Consistency
- Spaciousness
- Readability
- Performance
- Accessibility
- Emotional storytelling

---

# Design Tokens

Every visual property should reference reusable tokens.

Never hardcode values.

---

# Color System

## Primary

```
Primary Gold

#B89146
```

Used for

- CTA
- Links
- Hover states
- Highlights

---

## Primary Dark

```
#1D1D1D
```

Used for

- Headings
- Footer
- Navigation

---

## Background

```
#FAF8F5
```

Main page background.

---

## Surface

```
#FFFFFF
```

Cards.

Forms.

Sections.

---

## Accent

```
#6E4F3A
```

Luxury warm brown.

Used sparingly.

---

## Success

```
#3A8F62
```

---

## Warning

```
#E3A008
```

---

## Error

```
#D64545
```

---

## Text Primary

```
#222222
```

---

## Text Secondary

```
#666666
```

---

## Border

```
#E7E3DD
```

---

# Typography

## Heading Font

Playfair Display

Reason

Luxury

Editorial

Elegant

---

## Body Font

Inter

Reason

Modern

Readable

Professional

---

# Typography Scale

Display

64px

---

H1

48px

---

H2

36px

---

H3

30px

---

H4

24px

---

Body Large

18px

---

Body

16px

---

Small

14px

---

Caption

12px

---

# Font Weights

Regular

400

Medium

500

SemiBold

600

Bold

700

---

# Line Height

Headings

120%

Body

170%

---

# Spacing System

Base Unit

```
8px
```

Allowed spacing

```
4

8

16

24

32

40

48

64

80

96

128
```

Never invent random spacing.

---

# Border Radius

Small

8px

Medium

12px

Large

20px

Extra Large

32px

---

# Shadows

Small

```
0 2px 8px rgba(0,0,0,.06)
```

Medium

```
0 8px 20px rgba(0,0,0,.08)
```

Large

```
0 18px 50px rgba(0,0,0,.12)
```

---

# Grid System

Desktop

12 columns

---

Tablet

8 columns

---

Mobile

4 columns

---

Maximum Content Width

```
1280px
```

---

# Breakpoints

Mobile

0–767px

Tablet

768–1023px

Laptop

1024–1439px

Desktop

1440px+

---

# Buttons

## Primary Button

Purpose

Main CTA

Appearance

Filled Gold

White Text

Rounded XL

Hover

Slight Lift

Darker Gold

---

## Secondary Button

White

Dark Border

Dark Text

---

## Ghost Button

Transparent

Gold Text

---

## Danger Button

Reserved for admin only.

Never visible publicly.

---

# Cards

Cards should contain:

- Large image
- Title
- Short description
- CTA

Cards must never appear cluttered.

---

# Forms

Fields should include

- Floating labels
- Rounded corners
- Clear validation
- Large touch targets

---

# Navigation

Desktop

Transparent over hero.

Solid after scroll.

Sticky.

---

Mobile

Hamburger.

Slide animation.

---

# Icons

Preferred Library

Lucide

Reason

Minimal

Modern

Consistent

---

# Images

Always use

High Resolution

Landscape

Natural Lighting

Real Event Photography

Never use

Generic Stock Photos

Low Resolution Images

Heavy Filters

---

# Motion

Animation Philosophy

Elegant.

Not flashy.

---

Duration

200–400ms

---

Preferred Animations

Fade

Slide

Scale

Parallax

Image Reveal

Text Reveal

---

Avoid

Bounce

Shake

Flash

Spin

---

# Loading States

Every async action should include

- Skeleton UI
- Smooth fade-in
- Loading spinner only when necessary

---

# Accessibility

Minimum contrast ratio

WCAG AA

---

Clickable area

Minimum 44×44px

---

Keyboard Navigation

Fully supported

---

Focus States

Visible

Never removed

---

# Responsive Rules

Every component should:

Stack gracefully

Scale typography

Maintain spacing

Avoid horizontal scrolling

---

# Reusable Components

The system should support reusable:

- Navbar
- Hero
- Section Header
- Buttons
- Cards
- Gallery Grid
- Portfolio Card
- Service Card
- Contact Form
- Footer
- CTA Banner
- FAQ Accordion

---

# Component Naming

Example

```
HeroSection

GalleryGrid

ServiceCard

EventTimeline

PrimaryButton

ContactForm
```

Use PascalCase consistently.

---

# Developer Rules

Never hardcode:

- Colours
- Fonts
- Shadows
- Radius
- Spacing

Always use design tokens.

Never duplicate components.

Prefer composition over duplication.

---

# Acceptance Criteria

This document is complete when:

- Every visual rule is defined.
- Every component follows the same visual language.
- Developers can build reusable UI without ambiguity.
- Future pages reference this system instead of redefining styles.

---

# Related Documents

- README.md
- 05-brand-guidelines.md
- 07-homepage.md

---

**Document:** 06-design-system.md

**Version:** 1.0.0

**Status:** Approved
