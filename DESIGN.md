---
name: Electric Neo-Chiba
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e5bcc4'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#ac878f'
  outline-variant: '#5c3f45'
  surface-tint: '#ffb1c3'
  primary: '#ffb1c3'
  on-primary: '#66002c'
  primary-container: '#ff4b89'
  on-primary-container: '#590026'
  inverse-primary: '#bb0058'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#64df6e'
  on-tertiary: '#00390d'
  tertiary-container: '#22a63e'
  on-tertiary-container: '#00320a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c3'
  on-primary-fixed: '#3f0019'
  on-primary-fixed-variant: '#8f0041'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#80fc87'
  tertiary-fixed-dim: '#64df6e'
  on-tertiary-fixed: '#002105'
  on-tertiary-fixed-variant: '#005317'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  neon-magenta: '#FF007A'
  charcoal-surface: '#333333'
  surface-black: '#000000'
  pure-white: '#FFFFFF'
  subtle-gray: '#888888'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 76px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 44px
    fontWeight: '900'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: 0em
  title-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-caps:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system encapsulates the electric, forward-looking ethos of the Tokyo Game Show (TGS). The personality is high-energy, technologically ambitious, and intensely immersive. It bridges high-octane gaming culture with hyper-modern Japanese digital editorial precision. 

The aesthetic is **High-Contrast Cyber-Minimalism** rooted in brutalist discipline and dynamic energy. Deep abyssal blacks and stark whites form a structured grid, punctuated by a radiant neon magenta (#FF007A) that acts as an optical trigger. Surfaces are uncompromisingly sharp, content-forward, and kinetic, steering away from soft gradients or decorative blur in favor of razor-sharp vectors, bold typographic hierarchy, and structural frame lines that evoke HUD overlays, esports broadcasting suites, and Tokyo nightlife signage.

## Colors

The system is built on an absolute dark-mode foundation where the palette creates explosive visual contrast:

- **Primary (`#FF007A`)**: "Electric Neon Magenta" represents the pulse of gaming culture, innovation, and key interactions. Used for high-priority CTAs, active states, key data readouts, and signature badges.
- **Secondary (`#FFFFFF`)**: High-luminance white provides contrast for primary headlines, display numbers, and foreground framing elements.
- **Neutral (`#000000`)**: Deep void black serves as the primary canvas, enforcing immersion and letting media assets and vibrant highlights command focus.
- **Surface Charcoal (`#333333`)**: Applied to interactive borders, panel partitions, secondary hover states, and inactive telemetry metrics.

Color contrast rules must strictly follow WCAG AAA where possible. For text layers over `#000000`, white (`#FFFFFF`) is mandatory. `#FF007A` must only be paired with solid `#000000` or `#FFFFFF` knockout text to maintain clarity across all displays.

## Typography

The typographic hierarchy utilizes geometric authority through **Outfit** for structural headings and tactical metadata, paired with **Noto Sans** for high-density, multilingual body readability.

- **Headlines & Display (Outfit)**: Characterized by clean geometry and sharp terminals. Display levels should leverage all-caps or tightly-tracked weights (`800`–`900`) to evoke tournament branding, arcade scoreboards, and cinematic key art titles.
- **Body & Paragraphs (Noto Sans)**: Optimized for seamless English and CJK typographic balance. Set with comfortable line-heights (`1.6`–`1.7`) to maintain legibility against dark backgrounds.
- **Labels & Overlays (Outfit)**: Set exclusively in uppercase with expanded letter-spacing (`0.12em`) to deliver technical readouts reminiscent of esports HUDs, exhibitor booth numbers, and schedule timecodes.

## Layout & Spacing

The layout is anchored by a structured 12-column grid system (4 columns on mobile, 8 on tablet, 12 on desktop) adhering strictly to an 8px base rhythm.

- **Canvas Margins**: Deep lateral framing (`3rem` on desktop, tapering to `1.25rem` on mobile) ensures content sits within an intentional viewing console.
- **Structural Gutters**: Fixed column gutters (`1.5rem` desktop) enforce strict alignment for exhibitor rosters, timetable matrices, and stream grids.
- **Framed Partitions**: Unlike fluid web standard containers, content sections use explicit perimeter rules (`1px solid #333333`) to evoke architectural booths and convention hall floor plans. Spacing inside components is compact and disciplined (`space-md` for standard paddings, `space-xl` for sectional breaks).

## Elevation & Depth

This design system rejects skeuomorphic shadows and generic drop-shadow blur. Spatial depth is established through **Surface Stratification** and **Luminescent Framing**:

1. **Base Layer (Ground - Level 0)**: Pure black (`#000000`). Used as the main backdrop for all page views.
2. **Elevated Panels (Level 1)**: Translucent or charcoal tinted surfaces (`#000000` overlay with `1px solid #333333` borders) to isolate cards, interactive tables, and filter docks.
3. **Hover & Focus States (Level 2)**: Crisp structural borders shifting from `#333333` to `#FFFFFF` or `#FF007A`. No soft shadows; instead, an instantaneous hard edge transition or an optional sharp 1px hairline inner rim.
4. **Modals & Overlays (Level 3)**: Deep blackout overlays with 90% opacity, bordered completely with high-contrast `#FFFFFF` or `#FF007A` frames to mimic physical tournament telemetry monitors.

## Shapes

The design system is entirely committed to **Sharp Geometric Edges (`roundedness: 0`)**. 

Every interactive touchpoint—from buttons and form inputs to exhibitor tiles, modal windows, and badges—features clean 90-degree corners. Optionally, components can feature a 45-degree chamfered corner (`clip-path: polygon(...)`) on top-right or bottom-left vertices for signature primary actions, underscoring high-tech gaming hardware, booth structures, and industrial precision.

## Components

### Buttons
- **Primary Action**: Solid `#FF007A` background with `#000000` bold text in uppercase Outfit. Sharp corners (`0px radius`). Hover transforms background to `#FFFFFF` with `#000000` text immediately (zero easing delay, instant gaming response).
- **Secondary Action**: Solid `#000000` background with `1px solid #FFFFFF` border and `#FFFFFF` text. Hover shifts border and text to `#FF007A`.
- **Tertiary / Ghost**: Transparent background with uppercase text flanked by structural bracket symbols (e.g., `[ TICKETS ]`).

### Chips & Badges
- **Status Tags (e.g., "LIVE", "INDIE", "HALL 1-8")**: Ultra-compact 0px radius capsules. Outlined in `1px solid #333333` with `#FFFFFF` text in `label-caps` typography. Live broadcast badges use `#FF007A` background with crisp `#000000` text.

### Form Inputs & Checkboxes
- **Text Inputs**: Solid `#000000` surface, framed with `1px solid #333333`. Placeholder text in `#888888`. Focus state activates a sharp `1px solid #FF007A` frame without diffuse outline rings.
- **Checkboxes & Radios**: Strictly squared (0px radius). Checked state displays a solid `#FF007A` inner fill with sharp vector checkmarks or knockout squares.

### Cards & Grid Containers
- **Exhibitor / Stage Cards**: Framed by `1px solid #333333` on `#000000` base. Hover state triggers a full outer hairline shift to `#FF007A` alongside a slight inner zoom on thumbnail imagery. Image ratios remain locked to cinematic 16:9.

### Interactive Timetable & Schedule Lists
- **Schedule Rows**: Partitioned by hairline `1px solid #333333` dividers. Time signatures set in Outfit `title-sm` with `#FF007A` accents. Hovering over a row highlights the entire block with a subtle `#111111` tint.