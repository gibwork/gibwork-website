## Summary

Refined the Gibwork landing page with **fluid spring animations**, a clean **DotGrid** background pattern, and **removed all gimmicky effects** (glow-pulse, ripple, morphing blobs) for a more professional aesthetic. No mobile app references.

### Changes

#### Animation System (`lib/framer-variants.ts`)
- Replaced all tween/ease animations with **spring physics** (`stiffness: 100-300`, configurable damping/mass)
- Added presets: `SPRING_UP`, `SCALE_IN`, `STAGGER_CONTAINER`, `CARD_HOVER`, `BUTTON_TAP`
- All animations: `viewport: { once: true }` with early trigger margins, single play

#### Hero Section (`components/hero.tsx`)
- **Word-by-word spring reveal** heading (replaces SparklesText) - cleaner, no obstruction
- Floating dashboard image with spring entrance + subtle float animation
- All elements use staggered spring reveal from bottom

#### CTA Section (`components/cta.tsx`)
- Replaced MorphingBlob + Ripple with **DotGrid** - subtle static dot pattern, edge fades to background
- Animated gradient background (purple/indigo)
- Spring hover (scale 1.04) and tap (scale 0.96) on buttons - no glow-pulse

#### DotGrid (`components/ui/dot-grid.tsx`) -- New
- Pure CSS radial-gradient dot pattern
- Fades into background at all edges (mask-image)
- No animations, no JS runtime cost, fully responsive

#### Removed Components
- `components/ui/ripple.tsx` - pulsing circles removed
- `components/ui/morphing-blob.tsx` - blob animation removed
- `components/mobile-app.tsx` - all mobile download references removed
- `animate-ripple` and `glow-pulse` keyframes from tailwind config

#### Other Sections
- **Nav**: Spring hover/tap on all items, consistent with brand
- **LookingFor**: Spring card hover (lift + shadow), lazy-loaded logos
- **Testimonial/LogoList/FAQ/Footer**: Staggered spring reveals, hover effects on social icons

#### SEO & Performance (`app/layout.tsx`)
- Static metadata, OG/Twitter card tags
- `display:swap` on Inter font
- Build: **0 errors**, main route **23.2 kB** first load JS

### Verification
- [x] No mobile app references anywhere
- [x] No glow-pulse, ripple, or morphing blob animations
- [x] Build passes (0 errors)
- [x] All sections render correctly on desktop + mobile
- [x] Animations play once on scroll into viewport
