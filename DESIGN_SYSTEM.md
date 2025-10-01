# Ez2Fix Design System

## Overview
This document defines the unified design system for the Ez2Fix website, ensuring consistency across all pages while maintaining optimal responsive behavior for mobile, tablet, and desktop experiences.

## Breakpoints
```
xs:  0px - 474px   (Small phones)
sm:  475px - 639px  (Large phones)
md:  640px - 767px  (Small tablets)
lg:  768px - 1023px (Tablets)
xl:  1024px - 1279px (Small desktops)
2xl: 1280px+        (Large desktops)
```

## Grid System

### Container Widths
- **Full Width**: `container mx-auto px-4` (max-width: 1400px with responsive padding)
- **Standard**: `max-w-7xl mx-auto` (1280px)
- **Narrow**: `max-w-6xl mx-auto` (1152px)
- **Content**: `max-w-4xl mx-auto` (896px)

### Grid Patterns
- **2-Column**: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`
- **3-Column**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
- **4-Column**: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`
- **Service Areas**: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`

## Typography Scale

### Headings
- **H1 (Hero)**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`
- **H2 (Section)**: `text-3xl md:text-4xl font-bold`
- **H3 (Subsection)**: `text-2xl md:text-3xl font-bold`
- **H4 (Card Title)**: `text-xl md:text-2xl font-bold`
- **H5 (Small Card)**: `text-lg md:text-xl font-bold`

### Body Text
- **Large**: `text-base md:text-lg`
- **Base**: `text-base`
- **Small**: `text-sm`
- **Tiny**: `text-xs`

## Spacing System

### Section Spacing
- **Standard**: `py-16 md:py-24`
- **Compact**: `py-12 md:py-16`
- **Spacious**: `py-20 md:py-32`

### Section Breaks
- **Standard**: `py-8`
- **Small**: `py-4`

### Internal Spacing
- **Header Bottom**: `mb-12`
- **Content Block**: `mb-8`
- **Card Internal**: `p-6 md:p-8`
- **Small Card**: `p-4 md:p-6`

## Component Patterns

### Cards
```css
/* Standard Card */
p-6 md:p-8 rounded-xl shadow-xl border-2 border-ez2fix-primary/20
hover:border-ez2fix-primary hover:shadow-2xl transition-all duration-300

/* Small Card */
p-4 md:p-6 rounded-lg shadow-md border-2 border-ez2fix-primary/20
hover:border-ez2fix-primary hover:shadow-lg transition-all duration-300
```

### Buttons
```css
/* Primary CTA */
px-8 py-4 bg-ez2fix-primary hover:bg-ez2fix-primary/90 text-ez2fix-dark
font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300

/* Secondary CTA */
px-8 py-4 border-2 border-ez2fix-primary text-ez2fix-primary hover:bg-ez2fix-primary
hover:text-ez2fix-dark font-bold text-lg rounded-xl transition-all duration-300

/* Small Button */
px-4 py-3 text-sm md:text-base rounded-lg
```

### Forms
```css
/* Input Field */
w-full px-4 py-3 rounded-lg border-2 border-ez2fix-primary/30
focus:border-ez2fix-primary focus:outline-none transition-colors

/* Label */
block text-sm font-semibold text-ez2fix-dark mb-2
```

## Color System

### Brand Colors
- **Primary Gold**: `#ecb451` (ez2fix-primary)
- **Secondary Gold**: `#ecb451` (ez2fix-gold)
- **Dark**: `#1D1912` (ez2fix-dark)
- **Brown**: `#8B6200` (ez2fix-brown)
- **Cream**: `#F3F3E6` (ez2fix-cream)

### Usage Guidelines
- **Headlines**: `text-ez2fix-dark`
- **Body Text**: `text-ez2fix-brown`
- **Accents**: `text-ez2fix-primary` or `text-ez2fix-gold`
- **Light Backgrounds**: `bg-white` or `bg-ez2fix-cream`
- **Dark Backgrounds**: `bg-gradient-to-br from-ez2fix-dark to-ez2fix-brown`

## Section Patterns

### Hero Section
```astro
<section class="relative py-16 md:py-24 overflow-hidden min-h-screen">
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Content -->
      </div>
    </div>
  </div>
</section>
```

### Content Section (Light)
```astro
<section class="py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-dark mb-6">
        <p class="text-base md:text-lg text-ez2fix-brown">
      </div>
      <!-- Content -->
    </div>
  </div>
</section>
```

### Content Section (Cream)
```astro
<section class="py-16 md:py-24 bg-ez2fix-cream">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Same structure as light section -->
    </div>
  </div>
</section>
```

### Content Section (Dark)
```astro
<section class="py-16 md:py-24 bg-gradient-to-br from-ez2fix-dark to-ez2fix-brown">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-cream mb-6">
        <p class="text-base md:text-lg text-white">
      </div>
    </div>
  </div>
</section>
```

## Responsive Behavior

### Mobile First (< 640px)
- Single column layouts
- Full-width buttons
- Reduced padding: `p-4`
- Smaller typography
- Touch-friendly tap targets (min 44px)

### Tablet (640px - 1023px)
- 2-column grids
- Medium padding: `p-6`
- Increased typography
- Flexible button widths

### Desktop (1024px+)
- 3-4 column grids
- Full padding: `p-8`
- Full typography scale
- Optimized white space

## Best Practices

1. **Always use container**: `container mx-auto px-4`
2. **Standard max-width**: `max-w-6xl mx-auto` or `max-w-7xl mx-auto`
3. **Consistent section spacing**: `py-16 md:py-24`
4. **Consistent header spacing**: `mb-12`
5. **Consistent grid gaps**: `gap-6 md:gap-8`
6. **Standard card padding**: `p-6 md:p-8`
7. **Touch targets**: Minimum 44px height/width
8. **Borders**: Always `border-2` for consistency
9. **Shadows**: `shadow-xl` → `hover:shadow-2xl`
10. **Transitions**: `transition-all duration-300`

## Migration Guide

### Replace Custom Classes

**Old** → **New**
- `container-responsive` → `container mx-auto px-4`
- `text-heading-1` → `text-3xl md:text-4xl font-bold`
- `text-body-base` → `text-base md:text-lg`
- `card-responsive` → `p-6 md:p-8 rounded-xl`
- `grid-responsive-3` → `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `space-section-sm` → `py-16 md:py-24`
- `btn-responsive` → `px-8 py-4 rounded-xl`

### Grid Migration Examples

```astro
<!-- Old -->
<div class="grid-responsive-3 gap-responsive">

<!-- New -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

```astro
<!-- Old -->
<div class="container-responsive">

<!-- New -->
<div class="container mx-auto px-4">
```

## Page-Specific Guidelines

### Homepage
- Hero: Full screen with booking form on desktop
- Alternating sections: white → cream → dark
- 3-column service cards
- 2-column FAQ items

### Services Page
- Hero: Standard height
- 3-column service grid
- Consistent card heights with flexbox

### Service Areas Page
- Hero: Standard height
- 4-column area cards (Bergen)
- 4-column smaller cards (other counties)
- County-grouped layout

### Individual Service Area Pages
- Hero with location image
- 3-column issue cards
- Standard content sections
