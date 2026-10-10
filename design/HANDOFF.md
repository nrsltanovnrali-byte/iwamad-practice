# Week 5 — Handoff Notes (SIS 2 Starter Design)

## Routes (from the prototype)

- /posts — Blog posts listing (posts-desktop, posts-phone)
- /posts/:slug — Individual blog post (post-desktop)
- * — 404 Not Found page (404-desktop)

Prototype flow:
Posts → Read more → Individual post → All posts → Posts.

## Components → React Files

- Header → src/components/Header.tsx
- PostCard → src/components/PostCard.tsx
- Button → src/components/ui/Button.tsx
- Tag → src/components/ui/Tag.tsx
- Card → src/components/ui/Card.tsx

## Button Variants → Prop

variant = "primary" | "secondary"

## PostCard Layout

- Direction: Vertical
- Width: 320px
- Height: Hug (386px)
- Gap: 12px
- Padding: 16px
- Border radius: 8px (radius/md)
- Border: 1px
- Background: #FFFFFF (color/surface)
- Border color: #D1D5DB (color/border)

## Breakpoint Change

Phone:
- 1 column
- Header stacked vertically
- Navigation links stacked

Desktop:
- 3 columns
- Header arranged horizontally
- Navigation links in one row

CSS breakpoint: 640px.

## Design Tokens (All 10)

- color/primary = #1D4ED8
- color/on-primary = #FFFFFF
- color/text = #1F2937
- color/text-muted = #9CA3AF
- color/surface = #FFFFFF
- color/border = #D1D5DB
- space/2 = 8px
- space/4 = 16px
- space/6 = 24px
- radius/md = 8px

## Accessibility Fix

Original:
color/text-muted = #9CA3AF

Fixed:
color/text-muted = #6B7280

Original contrast: approximately 2.56:1
Fixed contrast: approximately 4.83:1

Reason:
The original muted text color does not meet the WCAG AA
minimum contrast requirement of 4.5:1 for normal text.

The corrected color provides sufficient contrast against
the white background.