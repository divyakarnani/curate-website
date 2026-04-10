# Curate — Website Development Brief
*For Claude Code*

---

## Project Context

Curate is a beauty product scoring and curation app for iOS and Android. This is the **marketing website** — not the app. It lives on Vercel, built in Next.js, and connects to the same Supabase backend that powers the app (read-only, public data only).

**Goal:** Convert beauty shoppers and potential investors into waitlist signups. Communicate trust, transparency, and personalization. No ads, no fluff — the site should feel exactly like the product: honest, refined, and personal.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Backend (read-only) | Supabase JS client (anon key, RLS-protected) |
| Email | Resend + React Email |
| Hosting | Vercel |
| Fonts | **System font stack only — no custom typeface** |

---

## Design System

### Philosophy

Soft, feminine, premium beauty. Muted lavender/purple brand color against clean whites with purple-tinted grays. Clean flat design — depth comes from **1px borders and background tints, not shadows**. Generous rounded corners everywhere (no sharp edges). System font with weight/size hierarchy. Traffic-light scoring (green/amber/red). **Light mode only.**

Do not introduce custom fonts, dark mode, heavy shadows, or hard geometric edges. The aesthetic is warm, approachable, and premium without being flashy.

---

### Color Palette

Define all as Tailwind config tokens AND CSS variables.

```css
:root {
  /* Brand — Purple family */
  --purple:        #9B7BB0;  /* Primary — CTAs, active tab, links, prices, chips */
  --purple-light:  #C4A8D4;  /* Light accent — italic heading accents */
  --purple-faint:  #F3EEF7;  /* Tinted backgrounds — avatars, placeholders, panels */
  --purple-dark:   #7A5A90;  /* Pressed states, celebration banners */

  /* Neutrals (all have subtle purple undertone) */
  --black:         #1A1A1A;  /* Primary text — not pure black */
  --white:         #FFFFFF;  /* Page background, card backgrounds */
  --surface:       #F9F7FB;  /* Input field backgrounds */
  --gray-100:      #F5F3F7;  /* Image placeholders, skeleton cards */
  --gray-200:      #EDEAF1;  /* Borders, dividers, inactive elements */
  --gray-300:      #D9D4E0;  /* Sheet handles, carousel dots */
  --gray-500:      #9A949F;  /* Secondary text — brands, timestamps, placeholders */
  --gray-700:      #5C5560;  /* Tertiary text — descriptions, notes, labels */

  /* Semantic / Score */
  --score-high:    #5BB88A;  /* Score >= 7 — green */
  --score-mid:     #E8A43C;  /* Score 4–6 — amber */
  --score-low:     #D96060;  /* Score < 4 — red */
  --score-none:    #D9D4E0;  /* No score available */
}
```

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      purple: {
        DEFAULT: '#9B7BB0',
        light:   '#C4A8D4',
        faint:   '#F3EEF7',
        dark:    '#7A5A90',
      },
      surface: '#F9F7FB',
      gray: {
        100: '#F5F3F7',
        200: '#EDEAF1',
        300: '#D9D4E0',
        500: '#9A949F',
        700: '#5C5560',
      },
      ink: '#1A1A1A',
      score: {
        high: '#5BB88A',
        mid:  '#E8A43C',
        low:  '#D96060',
        none: '#D9D4E0',
      },
    },
  },
}
```

---

### Typography

**System font only. No Google Fonts, no @font-face.**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

```js
// tailwind.config.ts
fontFamily: {
  sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
}
```

**Type scale:**

| Token | Size | Weight | Use |
|---|---|---|---|
| xs | 11px | 400–600 | Brand labels, badges, score sublabels |
| sm | 13px | 400–600 | Secondary body, captions, meta |
| base | 15px | 400–500 | Primary body text |
| md | 17px | 500–600 | Card titles, subheadings |
| lg | 20px | 600–700 | Section subheadings |
| xl | 24px | 600–700 | Section headings (mobile) |
| xxl | 32px | 700 | Section headings (desktop) |
| stat | 64–80px | 700 | Large stat numbers (dark section) |

**Brand labels:** Always uppercase, `letter-spacing: 0.15em`, xs/11px, semibold, `--purple` color.

**Line heights:** Body ~22px, notes/captions ~19–20px, headings ~1.1–1.15.

**Heading accent pattern:** Every major section heading has one word or phrase in `--purple-light` color with `font-style: italic`. This is the typographic signature of the site.

```tsx
// Pattern — use on every section heading:
<h2 className="text-[32px] font-bold text-ink leading-tight">
  The beauty journey is{' '}
  <em className="text-purple-light" style={{ fontStyle: 'italic', fontWeight: 400 }}>
    broken.
  </em>
</h2>
```

---

### Spacing

Base unit 4px. Scale: 4 → 8 → 16 → 24 → 32 → 48.

| Token | px | Tailwind |
|---|---|---|
| xs | 4 | `p-1` |
| sm | 8 | `p-2` |
| md | 16 | `p-4` |
| lg | 24 | `p-6` |
| xl | 32 | `p-8` |
| xxl | 48 | `p-12` |

Section vertical padding: `py-16 md:py-24`
Content max-width: `max-w-6xl mx-auto px-6 md:px-12`
Section label → heading gap: `mb-3`
Heading → body gap: `mb-6`

---

### Border Radius

| Token | px | Use |
|---|---|---|
| sm | 8 | Thumbnails, small images |
| md | 12 | Inputs, buttons, panels |
| lg | 16 | Cards |
| xl | 24 | Modals, bottom sheets |
| pill | 999 | Badges, chips, score pills, FAB, CTA buttons |

---

### Shadows

Very restrained. Depth comes from borders, not shadows.

```css
/* Standard card — border only, no shadow */
border: 1px solid var(--gray-200);
box-shadow: none;

/* Card hover state */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

/* Login / featured card */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

/* FAB / primary CTA button (colored shadow matching purple) */
box-shadow: 0 4px 8px rgba(156, 126, 168, 0.4);

/* Celebration / feature banner */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
```

---

### Component Patterns

#### Score Circle

Core visual. Used everywhere a score is displayed.

```tsx
// Default: 72px, 3px border, circular
// Border = score color
// Background = score color at 7% alpha (~12 in hex)
// Number: size * 0.3 px, font-bold, score-colored
// "/10" label below in 11px uppercase gray-500

function ScoreCircle({
  score,
  label,
  size = 72,
}: {
  score: number | null;
  label: string;
  size?: number;
}) {
  const color =
    score === null ? 'var(--score-none)'
    : score >= 7   ? 'var(--score-high)'
    : score >= 4   ? 'var(--score-mid)'
    :                'var(--score-low)';

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `3px solid ${color}`,
          backgroundColor: score === null ? 'transparent' : `${color}12`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color, fontSize: size * 0.3, fontWeight: 700, lineHeight: 1 }}>
          {score === null ? '—' : score.toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">/10</span>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{label}</span>
      </div>
    </div>
  );
}
```

#### Product Card

```tsx
// White bg, 1px border gray-200, 16px radius
// Square image top, object-cover
// Placeholder: purple-faint bg + brand initial letter in purple
// Brand: 11px uppercase semibold gray-500, letterSpacing 0.5px
// Product name: 15px medium, max 2 lines, ink
// Score row: 4x ScoreCircle at 48px, separated by 1px gray-100 vertical dividers
// Footer: price in purple semibold + community score pill
```

#### Buttons

```tsx
// Primary
<button className="bg-purple text-white font-semibold text-[14px] px-6 py-3.5
  rounded-xl hover:bg-purple-dark transition-colors
  shadow-[0_4px_8px_rgba(156,126,168,0.4)]">
  Join the waitlist
</button>

// Secondary / outline
<button className="bg-white text-ink font-medium text-[14px] px-6 py-3.5
  rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
  See how it works
</button>

// Ghost
<button className="text-purple font-medium text-[14px] hover:text-purple-dark transition-colors">
  Learn more →
</button>

// Chip / badge pill
<span className="bg-purple-faint text-purple text-[11px] font-semibold
  px-3 py-1 rounded-full uppercase tracking-[0.15em]">
  Label
</span>
```

#### Section Label

```tsx
<p className="text-purple text-[11px] font-semibold tracking-[0.15em] uppercase mb-3">
  The Problem
</p>
```

#### Feed / Activity Card

```tsx
// White bg, 1px border gray-200, 16px radius, 16px padding
// Avatar: 36px circle, purple-faint bg, purple initial letter, 15px semibold
// Rating badge: 32px circle, score-colored border + 7% alpha bg
```

---

### Motion / Animation

Use Framer Motion. Key patterns:

```tsx
// Section entrance — staggered reveal on scroll
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

// All whileInView: viewport={{ once: true, margin: "-80px" }}

// Score circle count-up: useMotionValue + useSpring + useInView
// Stat number count-up: animate 0 → final over 1.4s ease-out, triggered once on scroll
// Card hover lift: whileHover={{ y: -3 }}, CSS transition for shadow

// Bundle size: use LazyMotion + domAnimation features only
```

---

## Site Structure

```
/           # Single-page landing (all sections, anchor nav)
/waitlist   # Post-signup confirmation page
```

All content on `/` as scroll sections. Nav links are anchor links: `#features`, `#products`, `#team`.

---

## Navigation

**Fixed top nav. White bg, 1px bottom border gray-200. No transparent state.**

```
[CURATE ✳]           Features   Products   Team      [Join Waitlist →]
```

- Logo: "CURATE" — 17px, font-bold, ink + purple ✳ (U+2733) glyph in `--purple`
- Links: 14px font-medium, gray-700, hover → ink, smooth 150ms transition
- CTA: purple bg, white text, rounded-xl, 10px vertical padding, semibold, FAB shadow
- Scroll: add `bg-white/95 backdrop-blur-sm` when scrollY > 40px
- Mobile: hamburger → full-width slide-down drawer, links stacked, same CTA

---

## Page Sections

### 1. Hero

**Layout:** Two-column. Left 55%: text + CTAs. Right 45%: CSS gradient orb.

**Content:**
```
[pill badge]  • NOW OPEN FOR EARLY ACCESS

The beauty app
that actually
knows you.            ← "you." italic purple-light font-normal

Curate consolidates the fragmented beauty journey —
discover, validate, and buy with confidence.
No ads. No paid placements. Honest, personalized scores.

[Join the waitlist]   [See how it works ↓]
```

**Early access pill:**
```tsx
<div className="inline-flex items-center gap-2 border border-gray-200 rounded-full
  px-4 py-1.5 text-[12px] font-medium text-gray-700 bg-white mb-8">
  <span className="w-1.5 h-1.5 rounded-full bg-score-high animate-pulse" />
  NOW OPEN FOR EARLY ACCESS
</div>
```

**Heading:** clamp(48px, 6vw, 80px), font-bold, ink, line-height 1.05.
"you." → `<em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--purple-light)' }}>`

**Body:** 15–16px, gray-700, line-height 1.65, max-width 480px, `mt-6 mb-10`.

**Right: gradient orb (pure CSS):**
```css
.hero-orb {
  width: 480px; height: 480px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at 45% 45%,
    #C4A8D4 0%, #E0C5D8 30%, #EDD8C8 60%, transparent 100%
  );
  filter: blur(52px);
  opacity: 0.65;
  animation: float 7s ease-in-out infinite alternate;
}
@keyframes float {
  from { transform: translateY(0) scale(1); }
  to   { transform: translateY(-18px) scale(1.04); }
}
```

---

### 2. The Problem

**Layout:** Two-column. Left ~45%: label + heading + body. Right ~55%: 4 numbered steps.

**Section label:** THE PROBLEM

**Heading:**
```
The beauty journey
is broken.            ← "broken." italic purple-light
```
32–48px, font-bold, ink.

**Body:**
```
62% of consumers cite too many options or conflicting information as their biggest
frustration. 58% say fake reviews and hidden sponsorships are a major barrier to
purchase. The information exists — but it's scattered, biased, and impossible to trust.
```
15px, gray-700, line-height 1.65, max-width 420px, mt-6.

**Right: numbered steps:**

Each row: `border-t border-gray-200`, `py-6`. Last row also has `border-b`.

```
01   Discover on TikTok / Instagram
     Influencer content you can't trust

02   Validate on Reddit / YouTube
     Conflicting opinions from strangers

03   Text your group chat
     Waiting for a reply that may never come

04   Buy on Amazon / Sephora
     And still second-guess at checkout
```

Number: italic, gray-300, 17px. Title: semibold, ink, 15px, mb-1. Subtitle: gray-500, 13px.

---

### 3. Features ("What We Built")

**Layout:** Full-width. 3-col × 2-row feature card grid.

**Section label:** WHAT WE BUILT

**Heading:**
```
Everything you need to buy
with confidence.       ← "confidence." italic purple-light
```

**Cards:**

| # | Label | Bg | Title | Body |
|---|---|---|---|---|
| 01 | SCORES | `#F3EEF7` | Multi-Dimensional Scoring | Every product scored across quality, value, sustainability, and personalization — no paid placements, ever. |
| 02 | AI | `#FDF2F8` | AI Beauty Assistant | Powered by Claude. Ask about ingredients, alternatives, or get a direct comparison for your exact skin concerns. |
| 03 | PRICE | `#FEF9EE` | Best Price Finder | Like Kayak — but for beauty. Compare prices across Sephora, Amazon, and more without leaving Curate. |
| 04 | FRIENDS | `#FDF4F0` | Friend Scores | See what your actual friends rated. Trust people whose skin you actually know. |
| 05 | LISTS | `#F9F7FB` | Want to Try Lists | Save and rank products you're considering. When a friend rates something on your list, you'll hear about it first. |
| 06 | SEARCH | `#F0F7F4` | Smart Search | Search by name, scan a barcode in-store, or import from social media. Full picture instantly. |

**Card structure:**
```tsx
// bg: soft tinted color (per table above)
// border: 1px solid — same tint slightly darkened
// border-radius: 16px
// padding: 28px
// no shadow

// Label: 11px uppercase semibold purple, tracking-[0.15em], mb-4
// Accent/icon: mb-4 (emoji or large stat)
// Title: 17px semibold ink, mb-2
// Body: 14px gray-700, line-height 1.6
```

**Card 01 special treatment — large score stat:**
```tsx
<div className="mb-4">
  <span className="text-[64px] font-bold text-purple leading-none">9.4</span>
  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mt-1">
    OVERALL SCORE /10
  </p>
</div>
```

---

### 4. Scoring System

**Layout:** Single wide card, 4 equal columns, `1px gray-200` vertical dividers.

**Section label:** THE SCORING SYSTEM

**Heading:**
```
Four signals. One honest answer.   ← "answer." italic purple-light
```

**Sub-copy:**
```
Not one opaque algorithm. Four transparent signals, each earned independently.
```
15px gray-700, mt-4 mb-12, max-width 520px.

**Container card:** white bg, `1px border gray-200`, `16px radius`. Columns each `px-7 py-8`.

**Four columns:**

| Score | Display | Decorative color | Title | Body |
|---|---|---|---|---|
| Objective | 7.7 | `#E8C5A0` | Objective Score | Based on formulation quality, value for price, and sustainability. No bias, no ads. |
| Match | 8.8 | `#C4A8D4` | Match Score | Personalized to your skin type, past ratings, and preferences. Popularity isn't the same as fit. |
| Friend | 8.0 | `#E8A0B4` | Friend Score | Average rating from people you actually follow — people whose skin you know. |
| Community | 8.4 | `#D4C080` | Community Score | Real ratings from all Curate users. No bots, no fake reviews. |

Circle colors here are **decorative** (not semantic traffic-light) — they differentiate score types visually.

ScoreCircle 72px. Title: 15px semibold ink, mt-6 mb-2. Body: 13px gray-700, line-height 1.6.

---

### 5. Products in Action

**Layout:** Left ~40%: label + heading + body. Right ~60%: two product cards (live Supabase data).

**Section label:** FEATURED PRODUCTS

**Heading:**
```
See Curate in action.   ← "action." italic purple-light
```

**Body:**
```
Real products from our database showing all four scoring signals.
Scores are computed live — no curation, no sponsorship.
```

**Supabase query (server component):**
```typescript
const { data: topScores } = await supabase
  .from('product_objective_scores')
  .select(`
    product_id, objective_score,
    products ( id, name, brand, category, image_url, msrp_usd, description )
  `)
  .order('objective_score', { ascending: false })
  .limit(2);

const productIds = topScores?.map(s => s.product_id) ?? [];

const { data: ratingsRaw } = await supabase
  .from('ratings')
  .select('product_id, rating')
  .in('product_id', productIds)
  .not('rating', 'is', null);

function communityScore(productId: string): number | null {
  const rows = ratingsRaw?.filter(r => r.product_id === productId) ?? [];
  if (rows.length < 3) return null;
  // ratings are 1–10, already on 0–10 scale — do NOT divide by 10 again
  return parseFloat((rows.reduce((s, r) => s + r.rating, 0) / rows.length).toFixed(1));
}
```

**Product card:**
```
[←]                          [🔖]
┌─────────────────────────────────┐
│  product image (240px, cover)   │
│  [BRAND NAME pill — bottom-left]│
└─────────────────────────────────┘
Product Name          17px semibold ink
Descriptor · size     13px gray-500

┌──────────┬──────────┬──────────┬──────────┐
│  7.4     │  8.0     │   —      │   —      │
│OBJECTIVE │  MATCH   │ FRIENDS  │COMMUNITY │
└──────────┴──────────┴──────────┴──────────┘

[Where to Buy]               [Save →]
```

Score grid: 4-col, each centered, `1px gray-100` vertical borders. ScoreCircle 48px. Friend + Match show `—` (null) — visitors aren't logged in.

Brand pill:
```tsx
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-md
  border border-gray-200 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
  {brand}
</div>
```

---

### 6. How It Works

**Layout:** Single wide card, 5 equal columns (horizontal desktop, stacked mobile).

**Section label:** HOW IT WORKS

**Heading:**
```
Discover. Decide. Buy. Done.   ← "Done." italic purple-light
```

**Steps:**

| # | Title | Body |
|---|---|---|
| 01 | Search or scan | Find any product by name, barcode, or social media import |
| 02 | Check scores | See all four signals — objective, match, friends, community |
| 03 | Ask the AI | Get a personalized breakdown for your exact skin concerns |
| 04 | Find best price | Compare retailers and click through at the lowest price |
| 05 | Rate & share | Help your friends buy better too |

Container: white bg, `1px border gray-200`, `16px radius`. Columns separated by `1px gray-200` vertical borders. Per column: `p-7`. Number: italic gray-300 13px, mb-4. Title: 15px semibold ink, mb-2. Body: 13px gray-500, line-height 1.55.

---

### 7. Stats Section (Dark)

**Layout:** Full-bleed. `background: #1A1A1A`. 2×3 stat grid.

**Section label:** WHY NOW — gray-500, 11px uppercase tracking-[0.15em]

**Heading:**
```
Beauty is accelerating.
Confidence hasn't.      ← italic, #C4A8D4
```
White, clamp(36px, 5vw, 56px), font-bold, line-height 1.1.

**Stats:**

| Stat | Caption | Source |
|---|---|---|
| $227B | Global beauty e-commerce in 2024, growing to $339B by 2029 | Statista, 2024 |
| 62% | Cite too many options or conflicting information as their biggest frustration | Curate Primary Research, N=90, 2025 |
| 58% | Identify fake reviews or hidden sponsorships as a major barrier to purchase | Curate Primary Research, N=90, 2025 |
| 88% | Cart abandonment rate — intent lost to paralysis at checkout | Statista, 2024 |
| 46.5% | Of Gen Z use social media as their primary search engine for products | eMarketer, 2025 |
| 1.8% | Average beauty e-commerce conversion rate — a fundamentally broken process | eMarketer, 2025 |

**Cell styling:**
```tsx
// border: 1px solid rgba(255,255,255,0.08)
// padding: 32px 28px
// Stat number: clamp(56px, 7vw, 72px), font-bold, color: #E8C5D8 (soft pink on dark)
// Caption: 14px, rgba(255,255,255,0.65), mt-3, line-height 1.5, max-width 240px
// Source: 12px italic, rgba(255,255,255,0.3), mt-2
```

Animate stat numbers from 0 → final on scroll entry. `useInView({ once: true })`.

---

### 8. Live Data Bar

Slim full-bleed band, `bg-purple-faint`, between stats and team sections.

```typescript
// Server component — live reads
const { count: productCount } = await supabase
  .from('products').select('*', { count: 'exact', head: true });

const { data: cats } = await supabase.from('products').select('category');
const uniqueCategories = new Set(cats?.map(p => p.category)).size;

const { data: scores } = await supabase
  .from('product_objective_scores').select('objective_score');
const avgScore = scores?.length
  ? (scores.reduce((s, r) => s + r.objective_score, 0) / scores.length / 10).toFixed(1)
  : '—';
```

**Display — centered, single row, `py-5`:**
```
[productCount]+ products scored  |  [uniqueCategories] categories  |  [avgScore] avg objective score
```

Numbers: purple semibold 17px. Labels: gray-500 14px. Vertical `1px gray-200` dividers (`hidden md:block`).

---

### 9. Team

**Layout:** Two-column. Left: label + heading + body. Right: 3 cards in a row.

**Section label:** THE TEAM

**Heading:**
```
Built by people who
lived the problem.     ← "problem." italic purple-light
```


**Members:**

| Name | Role |
|---|---|
| Valentina Kafati | Co-Founder, Finance & Operations |
| Gabriela de Oliveira | Co-Founder, Growth & Strategy |
| Divya Karnani | Technical Lead, AI & Engineering |

```tsx
// Card: white bg, 1px border gray-200, 16px radius, p-6
// Avatar: 48px circle, purple-faint bg, purple initial letter, 18px font-semibold
// Name: 15px semibold ink, mt-4 mb-1
// Role: 13px gray-500, line-height 1.4
// No photos — initial avatars only, consistent across all three
```

---

### 10. Waitlist CTA

**Layout:** Full-bleed, `bg-purple-faint`, centered, `py-24`.

**Heading:**
```
Your skin deserves
better information.    ← "information." italic purple-light
```
clamp(32px, 5vw, 48px), font-bold, ink, centered, max-width 480px.

**Body:**
```
Join the waitlist for early access. No spam —
just a notification when we launch in your region.
```
15px gray-700, centered, mt-4 mb-10, line-height 1.65.

**Form:**
```tsx
<form action="/api/waitlist" method="POST" className="flex gap-3 max-w-md mx-auto">
  <input
    type="email" name="email" placeholder="your@email.com" required
    className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3.5
      text-[15px] text-ink placeholder:text-gray-300
      focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple
      transition-all"
  />
  <button
    type="submit"
    className="bg-purple text-white font-semibold text-[14px] px-6 py-3.5
      rounded-xl whitespace-nowrap hover:bg-purple-dark transition-colors
      shadow-[0_4px_8px_rgba(156,126,168,0.4)]"
  >
    Join waitlist
  </button>
</form>
```

**Trust line below form:**
```tsx
<p className="text-[12px] text-gray-500 text-center mt-4 tracking-wide">
  No ads. No paid placements. Honest, personalized scores.
</p>
```

---

### 11. Footer

`border-t border-gray-200`, `py-8`.

**Row 1:**
```
[CURATE ✳]    Features   Products   Team   Privacy   Contact
```

**Row 2:**
```
© 2025 Curate. No ads. No paid placements. Trust shouldn't be a luxury.
```

Style: 13px gray-500. Logo: 15px font-bold ink + purple ✳. Links: gray-500 hover → ink. Row 2 centered.

---

## API Routes

### POST `/api/waitlist`

```typescript
// app/api/waitlist/route.ts
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // service role — never expose client-side
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email?.includes('@'))
    return Response.json({ error: 'Invalid email.' }, { status: 400 });

  const { error } = await supabase.from('waitlist').insert({ email });

  if (error?.code === '23505')
    return Response.json({ error: 'Already registered.' }, { status: 409 });
  if (error)
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });

  await resend.emails.send({
    from: 'Curate <hello@curate.app>',
    to: email,
    subject: "You're on the list ✳",
    text: "You're on the Curate waitlist. We'll notify you when early access opens.\n\n— The Curate Team",
  });

  return Response.json({ success: true });
}
```

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=             # same project as app
NEXT_PUBLIC_SUPABASE_ANON_KEY=        # server component reads (public data only)
SUPABASE_SERVICE_ROLE_KEY=            # waitlist writes only — never client-side
RESEND_API_KEY=
```

---

## Supabase Usage Rules

- All public reads use **anon key**, server components only.
- Waitlist writes use **service role key** in API route only.
- **Tables used on this site:**
  - `products` — `name`, `brand`, `category`, `image_url`, `msrp_usd`
  - `product_objective_scores` — `objective_score`, `quality_score`, `value_score`, `sustainability_score`
  - `ratings` — aggregated only (`AVG`, `COUNT`). Never expose individual user rows.
  - `category_stats` — aggregate stats for live data bar
- **Never read:** `profiles`, `preferences`, `close_friends`, `follows`, `questions`, `question_replies`
- **Waitlist table** (create if not exists):

```sql
create table waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  created_at timestamptz default now()
);
alter table waitlist enable row level security;
create policy "Allow public insert" on waitlist
  for insert with check (true);
-- No select policy — only service role can read
```

---

## Performance

- Lighthouse >= 90 all metrics
- LCP < 2.5s — system font = zero render-blocking
- All images: `next/image`, WebP, explicit dimensions, lazy
- Data: server components only, no client-side Supabase waterfalls
- Framer Motion: `LazyMotion` + `domAnimation` features

---

## Accessibility

- All interactive elements keyboard navigable, visible focus ring: `ring-2 ring-purple/50`
- WCAG AA contrast on all text
- Score circles: `aria-label="Score: 7.4 out of 10"`
- Form: proper `<label>`, `aria-live="polite"` for success/error states
- Product images: descriptive `alt` text

---

## Implementation Order for Claude Code

1. `tailwind.config.ts` — all color tokens, font stack, radius
2. `app/globals.css` — CSS variables, base body (`bg-white text-ink font-sans`)
3. `app/layout.tsx` — Nav + Footer as server components
4. Shared components — `ScoreCircle`, `SectionLabel`, `Button` variants, `ProductCard`
5. Page sections in order:
   - Hero
   - Problem
   - Features grid
   - Scoring system
   - Products in Action (Supabase)
   - How it works
   - Stats dark section + count-up animations
   - Live data bar (Supabase)
   - Team
   - Waitlist CTA
6. `app/api/waitlist/route.ts`
7. Framer Motion entrance animations (add last — don't block layout work)

---

## Non-Negotiable Rules

1. **System font only.** No Google Fonts. No `@font-face`. `-apple-system` stack.
2. **Page bg is `#FFFFFF`.** Cards are also white. Depth via `gray-200` borders + `purple-faint` panel tints.
3. **Shadows are restrained.** Only FAB-style buttons get `rgba(156,126,168,0.4)` shadow. Cards use `1px border` only.
4. **Purple-tinted grays.** Use exact hex values: `#F5F3F7`, `#EDEAF1`, `#D9D4E0`. No generic grays.
5. **Score circles:** always 3px border + 7% alpha bg fill + bold number + score-colored. No exceptions.
6. **Every major section heading** has one italic purple-light accent word/phrase.
7. **All brand labels:** uppercase + `letter-spacing: 0.15em` + purple color + 11px semibold.
8. **Light mode only.** No dark mode.
9. **Rounded corners everywhere.** Minimum `rounded-lg` (16px) for cards. `rounded-xl` for inputs/buttons. `rounded-full` for pills and avatars.
10. **Community score scale:** ratings in the DB are 1–10. Do NOT divide by 10 again. Display as-is.

---

*v1.1 — aligned to official Curate design system*
