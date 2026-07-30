# AdSense Placement Draft

**Date:** July 30, 2026  
**Page:** `docs/index.html`  
**Current setup:** Google Auto Ads (script in `<head>`) + `padding-bottom: 240px` body reserve  

---

## Goal

Replace the bottom banner overlay with tasteful inline ads that match the dark theme, blend naturally, and maximize CTR without annoying visitors.

---

## Format Overview

| Format | AdSense Code | Best For |
|---|---|---|
| **Display** | `data-ad-format="auto"` | Section breaks, standalone banners |
| **In-Feed** | `data-ad-format="fluid"` + `data-ad-layout-key` | Inside card grids (feature cards, problem cards) |
| **In-Article** | `data-ad-format="fluid"` + `data-ad-layout="in-article"` | Between flowing text paragraphs |
| **Multiplex** | `data-ad-format="autorelaxed"` | Bottom of page, multiple smaller ads |

---

## Recommended Placements (6 candidates, pick 3)

### Spot 1 — In-Article: Overview section
**Location:** Between the text paragraph and the YouTube video
**Why:** The most article-like content on the page. Reader is in reading mode.
**Format:** In-Article (`data-ad-layout="in-article"`)
**AdSense unit type:** In-Article

```
┌─────────────────────────────────────┐
│  Overview text paragraph             │
├─────────────────────────────────────┤
│         [  IN-ARTICLE AD  ]         │
├─────────────────────────────────────┤
│  YouTube video                      │
└─────────────────────────────────────┘
```

**HTML:**
```html
<!-- In-Article ad -->
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-6449563648591184"
     data-ad-slot="[SLOT_ID]"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

---

### Spot 2 — In-Feed: Inside feature cards grid
**Location:** After the 6th feature card (after Auto-Compaction), before Supercharged Chat
**Why:** 18 cards in a CSS grid — an In-Feed ad blends perfectly as another card. Highest CTR option.
**Format:** In-Feed (`data-ad-layout-key` from AdSense)
**AdSense unit type:** In-Feed

```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Feature  │ │ Feature  │ │  IN-FEED │
│ Card 5   │ │ Card 6   │ │   AD     │
└──────────┘ └──────────┘ └──────────┘
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Feature  │ │ Feature  │ │ Feature  │
│ Card 7   │ │ Card 8   │ │ Card 9   │
└──────────┘ └──────────┘ └──────────┘
```

**HTML:**
```html
<div class="feature-card ad-card">
  <div class="ad-label">Sponsored</div>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-format="fluid"
       data-ad-layout-key="[LAYOUT_KEY]"
       data-ad-client="ca-pub-6449563648591184"
       data-ad-slot="[SLOT_ID]"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

**CSS:**
```css
.feature-card.ad-card {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
}
.ad-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-faint);
  margin-bottom: var(--space-2);
}
```

---

### Spot 3 — Display: Between Chat Examples and Comparison Table
**Location:** After the `.examples-grid` closes, before the Comparison section
**Why:** Clean section break — reader just finished light example cards, about to dive into a dense comparison table. Good pause point.
**Format:** Display responsive (`data-ad-format="auto"`)
**AdSense unit type:** Display

```
┌─────────────────────────────────────┐
│  Chat Examples Grid                 │
├─────────────────────────────────────┤
│         ── Sponsored ──             │
│         [ DISPLAY AD  ]             │
│         (leaderboard)               │
├─────────────────────────────────────┤
│  How Sorana Compares                │
│  Comparison Table                   │
└─────────────────────────────────────┘
```

**HTML:**
```html
<div class="ad-section-break">
  <div class="ad-divider"><span>Sponsored</span></div>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-6449563648591184"
       data-ad-slot="[SLOT_ID]"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

**CSS:**
```css
.ad-section-break {
  max-width: 728px;
  margin: var(--space-8) auto;
  text-align: center;
}
.ad-divider {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-faint);
}
.ad-divider::before,
.ad-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--color-border);
}
```

---

### Spot 4 — Multiplex: After Providers, before Discover
**Location:** Between the providers section and the discover section
**Why:** Bottom of the page content, after the dense provider section. Multiplex shows multiple smaller ads in a grid, which works well as a "you might like" zone.
**Format:** Multiplex (`data-ad-format="autorelaxed"`)
**AdSense unit type:** Multiplex

```
┌─────────────────────────────────────┐
│  Providers Section                  │
├─────────────────────────────────────┤
│  ── You might also like ──          │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ Ad 1 │ │ Ad 2 │ │ Ad 3 │       │
│  └──────┘ └──────┘ └──────┘       │
├─────────────────────────────────────┤
│  Discover Section                   │
└─────────────────────────────────────┘
```

**HTML:**
```html
<div class="ad-multiplex">
  <div class="ad-divider"><span>You might also like</span></div>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-format="autorelaxed"
       data-ad-client="ca-pub-6449563648591184"
       data-ad-slot="[SLOT_ID]"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

---

### Spot 5 — In-Feed: Inside problem cards grid (alternative)
**Location:** After the 4th problem card, inside the `.problem-grid`
**Why:** Alternative to Spot 2 if you prefer ads in the problem section rather than features.
**Format:** In-Feed (`data-ad-layout-key` from AdSense)
**AdSense unit type:** In-Feed

**HTML:**
```html
<div class="problem-card ad-card">
  <div class="ad-label">Sponsored</div>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-format="fluid"
       data-ad-layout-key="[LAYOUT_KEY]"
       data-ad-client="ca-pub-6449563648591184"
       data-ad-slot="[SLOT_ID]"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

---

### Spot 6 — Display: Between Showcase and How It Works
**Location:** After the screenshot showcase caption, before the "How it works" section
**Why:** Very first content break after the hero. Reader has seen the screenshot and is scrolling down. Low-pressure spot.
**Format:** Display responsive (`data-ad-format="auto"`)
**AdSense unit type:** Display

---

## Recommended Final Configuration (3 units)

| Spot | Format | Location | Priority |
|---|---|---|---|
| **Spot 2** | In-Feed | Inside feature cards grid | ⭐ Highest CTR (blends as card) |
| **Spot 3** | Display | Between examples and comparison | ⭐ Clean section break |
| **Spot 4** | Multiplex | After providers, before discover | ⭐ Non-intrusive, bottom zone |

**Total ads per page load:** 3  
**Total revenue potential:** Balanced between CTR (In-Feed) and visibility (Display/Multiplex)

---

## Implementation Steps

1. ✅ **Create 3 ad units in AdSense dashboard:**
   - 1 In-Feed unit → get layout key + slot ID
   - 1 Display unit (responsive) → get slot ID
   - 1 Multiplex unit → get slot ID

2. **Replace current setup:**
   - Remove `padding-bottom: 240px` from `body` CSS
   - Remove Auto Ads script from `<head>` (or keep as fallback)
   - Add inline ad code at each spot with the slot IDs

3. **Add CSS** for `.ad-card`, `.ad-section-break`, `.ad-divider`, `.ad-label`, `.ad-multiplex`

4. **Verify** ad rendering in a browser

---

## Common Labels (keep it subtle)

The `── Sponsored ──` divider is the most honest and least intrusive option. It matches the dark theme's `--color-text-faint` color and uses the same border style as the page's dividers. This avoids the yellow "Ad" badge that hurts CTR.
