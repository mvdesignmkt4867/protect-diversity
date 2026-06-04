---
name: Protect Diversity
description: Dermocosmética mexicana minimalista — vegana, biodegradable, dermatológicamente aprobada
colors:
  cacao: "#2A1D14"
  crema: "#F5EFE4"
  crema-profunda: "#EDE4D3"
  terracota: "#C45A2C"
  ocre: "#D9893B"
  salvia: "#5E6B4E"
  rose: "#E8B9A6"
  blanco: "#FFFFFF"
  gris-borde: "#D3D1C7"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.625rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.625rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  input: "8px"
  card: "12px"
  category: "16px"
  pill: "999px"
spacing:
  section-desktop: "80px"
  section-mobile: "56px"
  container-pad-desktop: "40px"
  container-pad-mobile: "16px"
  card-pad: "32px"
components:
  button-primary:
    backgroundColor: "{colors.cacao}"
    textColor: "{colors.crema}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.cacao}"
    textColor: "{colors.crema}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cacao}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.cacao}"
    textColor: "{colors.crema}"
  product-card:
    backgroundColor: "{colors.crema-profunda}"
    rounded: "{rounded.card}"
    padding: "0"
  card-white:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  pill-primary:
    backgroundColor: "{colors.cacao}"
    textColor: "{colors.crema}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  pill-accent:
    backgroundColor: "{colors.ocre}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
---

# Design System: Protect Diversity

## 1. Overview

**Creative North Star: "Ciencia Real"**

The Protect Diversity visual system is built on a single conviction: information density is a feature, not a flaw. Where most skincare brands use sparse elegance to signal luxury, Protect Diversity uses precision and transparency to signal trust. The system earns credibility through specificity — ingredient names, percentages, certifications — presented in a typographic hierarchy that makes the science readable, never intimidating.

The palette is grounded in Mexican earth: warm cacao as the dominant ink, terracota as the voice of conviction, crema as the surface that breathes. This is not a cream-and-minimalism aesthetic by default — it is a deliberate palette that evokes the skin tones and regional materials of Mexico. The warmth is earned, not borrowed.

Motion is purposeful: reveals enhance content that is already visible, not gate it. Every interaction gives tactile feedback. The system feels alive because the science is alive.

**Key Characteristics:**
- Serif display (Fraunces) paired with humanist sans (Manrope) — confidence + legibility
- Pill-shaped controls contrast with the editorial typography for clear affordance hierarchy
- Terracota is the voice color — used for emphasis, not decoration
- Cacao as both ink and primary surface creates tonal cohesion across dark sections
- No shadows on cards by default; depth comes from tonal contrast between crema / crema-profunda / blanco layers

## 2. Colors: La Paleta Tierra

A five-role palette grounded in Mexican earth and botanical materials. The warmth is structural, not decorative.

### Primary
- **Cacao Profundo** (`#2A1D14`): The ink of the system. Used for body text, primary buttons, navigation, footer background, and the cart drawer. When used as a background (manifesto section, footer), crema becomes the text. The darkest point of every page.
- **Terracota** (`#C45A2C`): The voice. Used for emphasis text (hero italic, subtitles, derma eyebrow labels), star ratings, and the cart badge. Never used for body copy. Its appearance signals conviction.

### Secondary
- **Ocre** (`#D9893B`): Supporting warmth. Used for star ratings, FPS pills, discount labels, sale badges. Lighter and more approachable than terracota. Pairs with cacao for data-forward contexts.
- **Salvia** (`#5E6B4E`): The ethical accent. Used for "verified", "added to cart", eco-certifications, and trust signals. Its green-gray carries authority without medical coldness.

### Tertiary
- **Rose** (`#E8B9A6`): The sueros identity. Used as the category background for serums. Evokes skin tone, warmth, care.

### Neutral
- **Crema** (`#F5EFE4`): The default page surface. Every page body. Warm but not cream-by-default — it has a specific hue that ties to the brand rather than generic warmth.
- **Crema Profunda** (`#EDE4D3`): Cards, product card backgrounds, value-prop cards, newsletter block. One step darker than page bg; creates depth without shadows.
- **Blanco** (`#FFFFFF`): Review cards, cart drawer, input backgrounds. Used sparingly for elements that need maximum contrast.
- **Gris Borde** (`#D3D1C7`): Borders on white surfaces only. Never used on crema or crema-profunda backgrounds.

### Named Rules
**La Regla Terracota.** Terracota (`#C45A2C`) appears on ≤15% of any screen. It is the brand's speaking voice — when everything shouts, nothing lands. Headlines in terracota must be italic Fraunces; never upright roman, never Manrope.

**La Regla de Superficie.** Pages have three surface levels: crema (base), crema-profunda (raised), blanco (elevated). Shadows are not used to create depth — surface color does that work. A shadow on a crema-profunda card is a contradiction.

## 3. Typography

**Display Font:** Fraunces (variable optical-size serif with italic axis)
**Body Font:** Manrope (humanist geometric sans-serif)

**Character:** Fraunces brings editorial authority — its optical size axis creates a different personality at display versus body sizes, naturally adapting from expressive headline to refined caption without swapping families. Manrope provides functional clarity: humanist proportions for legibility, geometric bones for consistency. The pairing works on a confidence axis: Fraunces makes statements, Manrope explains them.

### Hierarchy

- **Display** (500, clamp(2.625rem → 4.5rem), lh 0.95, ls -0.025em): Hero headlines only. "Tu piel merece ciencia real." One per page. Italic emphasis in terracota is a brand signature at this level.
- **Headline / H1–H2** (500, clamp(1.75rem → 2.625rem), lh 1.0, ls -0.015em): Section headings. `text-wrap: balance` required. Max 45ch to prevent line-length strain.
- **Title / H3** (500, clamp(1rem → 1.25rem), lh 1.2): Card titles, subsection headers, product names. `text-wrap: pretty` for multi-line contexts.
- **Body** (400, 0.9375rem/15px, lh 1.55): All prose. Max line length 65ch. `-webkit-font-smoothing: antialiased` applied globally.
- **Lead / Subtitle** (Fraunces italic, 400, 14–22px): Used below headlines as supporting copy. Always Fraunces italic. Often terracota.
- **Label / Eyebrow** (Manrope, 600, 0.625rem/10px, ls 0.18em, uppercase): Section eyebrows, product categories, breadcrumbs, cart item labels. Never more than 4 words. Used sparingly — not every section gets one.
- **CTA** (Manrope, 600, 0.8125rem/13px, ls 0.25em, uppercase): Button text only.

### Named Rules
**La Regla Fraunces.** Every terracota text on the page is Fraunces italic. No exceptions. The combination of color + weight + style is the brand's accent voice — breaking any part of the triplet dilutes the signal.

**La Regla del Techo.** Display headings: clamp max is 4.5rem (72px). H1 max is 2.625rem (42px). Above these values the page shouts, not designs. Letter-spacing floor is -0.025em; tighter makes letters touch.

## 4. Elevation

This system is **tonal, not shadow-based**. Depth is created by surface color steps (crema → crema-profunda → blanco), not by drop shadows. Cards sit on surfaces; they do not float above them.

### Shadow Vocabulary

Shadows appear only in two contexts:

- **Hover elevation** (`0 16px 40px rgba(42,29,20,0.10)`): Product cards and category cards on mouse hover only. Paired with `translateY(-5px)`. Gated behind `@media (hover: hover) and (pointer: fine)`. Never at rest.
- **Focus ring** (`0 0 0 3px rgba(42,29,20,0.08)`): Input fields on `:focus`. Not a glow, a structural ring. Replaces `outline`.
- **Button hover depth** (`0 4px 16px rgba(42,29,20,0.15)`): Primary button on hover only. Disappears on `:active`.
- **Header ambient** (`0 1px 12px rgba(42,29,20,0.04)`): Header on scroll. Barely perceptible; its job is to separate, not decorate.

### Named Rules
**La Regla Plana.** Every surface is flat at rest. If a card has a shadow before the user does anything, remove it. Elevation is a response to interaction, not a decorative default.

## 5. Components

### Buttons

Two variants, same pill shape, clear affordance hierarchy.

- **Shape:** Full-pill (border-radius 999px). Signals interactivity; contrasts with the editorial typography.
- **Primary:** Cacao background, crema text, 16px 32px padding (large: 18px 48px). Font: Manrope 600 13px, uppercase, ls 0.25em. Hover: opacity 0.85 + box-shadow `0 4px 16px rgba(42,29,20,0.15)`. Active: `scale(0.97)`. Transition: 120–160ms ease-out.
- **Secondary:** Transparent background, 2px cacao border. Hover fills with cacao, text flips to crema. Same transition timing. Active: `scale(0.97)`.
- **Added state (product card btn):** Fills with salvia (`#5E6B4E`), text reads "✓ AGREGADO". Held for 1200ms, then reverts. Prevents double-tap.
- **All buttons:** Touch targets ≥44px tall. `prefers-reduced-motion` removes transform transitions, retains color.

### Pills / Chips

- **Style:** Pill shape (radius 999px), 5px 12px padding, 11px Manrope 600 uppercase ls 0.15em.
- **Variants:** cacao/crema (primary info), ocre/white (FPS, sale), terracota/white (benefit), salvia/white (eco), outline cacao (filter chips).
- **Position:** Absolute top-left on product card images. Max 2 pills per card.

### Product Cards

- **Corner style:** Gently curved (12px radius).
- **Background:** Crema-profunda (`#EDE4D3`).
- **Image area:** 4:5 aspect ratio, overflow hidden. On hover (pointer: fine only): image scales to 1.04, card lifts 5px with shadow. Transition: 350ms ease-out.
- **Internal padding:** 16px 20px 20px on body.
- **Border:** None. Tonal depth is sufficient.
- **Hover gate:** `@media (hover: hover) and (pointer: fine)` — touch devices never see false hover states.

### Category Cards

- **Corner style:** Slightly rounder (16px radius) to signal navigation, not product.
- **Height:** min-height 280px, flex column with content at bottom.
- **Color coding:** Solar (crema-profunda), Sueros (rose), Cremas (warm gray #E8E2D4), Limpiadores (cacao/crema text).
- **Hover:** `translateY(-5px)` + shadow, gated by pointer media query. Transition: 200ms ease-out.

### Inputs / Fields

- **Style:** White background, 1px border rgba(42,29,20,0.25), 8px radius, 14px Manrope, 14px 16px padding.
- **Focus:** Border color shifts to cacao (full opacity) + box-shadow ring `0 0 0 3px rgba(42,29,20,0.08)`. No border-width change (avoids layout shift).
- **Placeholder:** opacity 0.4.
- **Error/Disabled:** Not yet implemented; inherit base style with reduced opacity for disabled.

### Navigation (Desktop)

- **Style:** 12px Manrope 600 uppercase ls 0.12em. Items spaced 28px gap.
- **Hover:** Animated underline via `::after` pseudo-element. `scaleX(0 → 1)` from left on hover, `transform-origin: right` at rest, flips to `left` on hover entry. Transition: 200ms ease-out. Opacity stays at 1 on hover (the underline IS the hover state).
- **Active:** `::after` always `scaleX(1)`.
- **Scroll behavior:** Header gains border-bottom `rgba(42,29,20,0.08)` + subtle shadow on `scrollY > 10`. Transition: 350ms ease-out.

### Navigation (Mobile)

- **Drawer:** Slides in from left, full-screen, z-index 2000. Transition: 380ms ease-drawer `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Links:** 18px Fraunces 500. On open, staggered entrance: `translateX(-12px) → translateX(0)` + opacity 0 → 1. Stagger: 40ms per item. Total reveal: ~280ms.
- **Close button:** Top-right ✕, active `scale(0.85)`.

### Cart Drawer

- **Width:** 420px (max 90vw). Slides from right. Transition: 420ms ease-drawer.
- **Overlay:** rgba(42,29,20,0.4). 350ms ease-out.
- **Items:** Entrance animation on add: `translateX(16px) → 0` + opacity. 350ms ease-out.
- **Qty buttons:** 28×28px, 6px radius. Hover: background tint. Active: `scale(0.9)`.
- **Badge:** Position absolute top-right of cart icon. Animates `scale(1 → 1.35 → 1)` on count change (200ms ease-out). Terracota.
- **Shipping threshold:** $1,200 MXN for free shipping. Progress shown in text.

## 6. Do's and Don'ts

### Do:
- **Do** use Fraunces italic in terracota (`#C45A2C`) for emphasis. The triplet (Fraunces + italic + terracota) is the brand's accent voice — preserve it as a unit.
- **Do** use tonal surface depth (crema → crema-profunda → blanco) to create hierarchy. Let color do the work shadows would otherwise do.
- **Do** gate all hover animations behind `@media (hover: hover) and (pointer: fine)`. Touch devices fire hover on tap; unguarded hover states feel broken on mobile.
- **Do** include specific ingredient names, percentages, and certifications in product copy. Information density is a trust signal, not a UX problem.
- **Do** use `text-wrap: balance` on H1–H2 and `text-wrap: pretty` on prose. Orphaned words at the end of headings undermine the editorial quality.
- **Do** keep reveal animations on content that is already visible at rest (`opacity: 0` with JS-toggled `.visible` class). Never gate content visibility on a transition that might not fire.
- **Do** use salvia (`#5E6B4E`) for trust signals, eco certifications, and confirmation states ("✓ AGREGADO", "verified purchase"). Its authority reads as earned, not decorative.
- **Do** use pill-radius (999px) on all interactive controls — buttons, pills, badges. The sharp contrast between editorial type and rounded controls is the system's interaction language.

### Don't:
- **Don't** use luxury-brand aesthetics (La Mer, Tatcha-style): aspirational staging, impossibly smooth skin photography, gold accents, exclusion-coded language. Protect Diversity is rigorous and accessible, not aspirational.
- **Don't** use clinical-cold pharmacy aesthetics (sterile blue-white, hospital-style grids, CeraVe-neutral). The brand has a personality and a point of view.
- **Don't** use cream/sand/beige as a neutral default. The crema palette exists for specific brand reasons. Introducing a second warm neutral (bone, linen, parchment) dilutes the system.
- **Don't** add eyebrow labels (small all-caps tracked text) above every section. The system uses them selectively — product categories, section anchors with real semantic purpose. An eyebrow on every section is AI grammar, not brand voice.
- **Don't** pair a `border: 1px solid` with a large `box-shadow` on the same card. Pick one. Cards use tonal surface color; they do not need borders or shadows at rest.
- **Don't** use gradient text (`background-clip: text`). Emphasis is through Fraunces weight, italic axis, or terracota — never decorative gradients.
- **Don't** use `border-radius` above 16px on cards. The category cards (16px) are the maximum. Cards at 24–40px radius read as "insanely rounded" and lose the editorial confidence of the system.
- **Don't** animate from `opacity: 0` / `scale(0)` initial states that aren't already visible. If the browser tab is hidden or the headless renderer skips the IntersectionObserver trigger, the section ships blank.
- **Don't** exceed the display clamp ceiling of 4.5rem (72px) or tighten letter-spacing below -0.025em on headlines. These constraints keep the page from shouting.
- **Don't** use `transition: all` — specify exact properties (transform, opacity, background) with explicit durations (120–350ms) and ease-out curves.
