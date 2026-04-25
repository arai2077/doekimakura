# Copilot Instructions for doekimakura

## Project Overview

**doekimakura** is a React 19 + TypeScript + Vite portfolio/showcase application with nine main sections:
- **Navigation**: Header with logo and menubar
- **My Skills**: Skills showcase section
- **UI/UX Portfolio**: Carousel with tweened opacity effects and dot navigation
- **3D Portfolio**: Grid of project cards with hover animations
- **Work Experience**: Timeline/carousel of work experiences with bubble design
- **Testimonies**: Client/colleague testimonials section
- **Companies**: Companies/clients worked with
- **Contact**: Contact form or contact information
- **Footer**: Site footer

Key tech stack:
- **Build**: Vite 7 with React plugin
- **Styling**: Tailwind CSS 4.1 (via `@tailwindcss/vite`) + custom CSS variables
- **UI Components**: Radix UI (menubar, navigation-menu, tooltip, label, slot)
- **Icons**: lucide-react + SVG imports (via vite-plugin-svgr)
- **State**: Zustand 5 (minimal usage pattern)
- **Carousel**: Embla Carousel with tweening effects for opacity/scale
- **Animation**: anime.js for advanced animations
- **Utilities**: CVA for button variants, clsx + tailwind-merge for className merging

## Architecture & Component Structure

### Component Organization
```
components/
├── common/          # Reusable components across sections
│   ├── dotbutton/   # Dot pagination for carousels (DotButton, useDotButton hook)
│   ├── icons/       # Icon system with size constants
│   └── title/       # Section title with staggered animation and tooltip
├── sections/        # Page sections
│   ├── navigation/  # Header & menubar
│   ├── myskills/    # Skills showcase
│   ├── uiux/        # UI/UX carousel with tweened opacity
│   ├── 3d/          # 3D project cards grid
│   ├── workexperience/ # Work timeline with dot pagination
│   ├── testimonies/ # Testimonials section
│   ├── companies/   # Company logos/clients
│   ├── contact/     # Contact form/info
│   └── footer/      # Footer
└── ui/             # Primitive UI components (button, card, carousel, badge, label, input, etc.)
```

### Key Design Patterns

1. **Icon System** ([src/components/common/icons](../src/components/common/icons))
   - Central icon registry in `constants.ts` (ICONS and ICON_SIZE objects with 6 sizes: SMALL through XXXLARGE)
   - SVG imports in `IconElements` map (currently: union, linkedin, whatsapp, instagram, mail)
   - Always add new icons to both registry and map before using

2. **Dot Button Pagination** ([src/components/common/dotbutton](../src/components/common/dotbutton))
   - Reusable `DotButton` component styled in `dotbutton.css`
   - `useDotButton` hook for Embla Carousel integration
   - Tracks selected index and scroll snaps; provides click handlers
   - CSS selector `.dot--selected` for active state styling

3. **Title Component** ([src/components/common/title](../src/components/common/title))
   - Staggered letter animation using CSS (`moveUp`/`moveDown` keyframes)
   - Renders text inside bubble SVG background
   - Includes `TitleTooltip` with question mark icon
   - Used by all section headings

4. **Carousel Tweening** (UiuxCarousel pattern)
   - Embla Carousel with progress-based opacity tweening
   - `applyTweenEffects()` calculates opacity based on distance from current scroll snap
   - Controlled by `TWEEN_MIN_OPACITY`, `TWEEN_FACTOR` constants
   - Panel overlay system with hover state transitions

5. **Styling Approach**
   - Tailwind CSS with OKLch color system (CSS custom properties in root)
   - Component variants via CVA (`@/components/ui/button.tsx`)
   - Utility function: `cn()` in `@/lib/utils.ts` for safe className merging
   - Brand colors: `--teal`, `--magenta`, `--mediumpurple`

6. **Section Pattern**
   - Marked with `"use client"` (React 19 convention)
   - Fetch constants from local `constants.ts` files
   - Use `Title` component for section headings
   - Co-located CSS files for component-specific styling

### Critical Data Files
- `src/components/sections/navigation/constants.ts` - MENU_ITEMS with href anchors
- `src/components/sections/myskills/constants.ts` - Skills data
- `src/components/sections/uiux/constants.ts` - CAROUSEL_ITEMS + tweening constants (TWEEN_MIN_OPACITY, TWEEN_FACTOR, CAROUSEL_OPTIONS)
- `src/components/sections/3d/constants.ts` - CARD_CONTENTS_3D with imageSrc, title, content, badges, href
- `src/components/sections/workexperience/constants.ts` - CARD_CONTENTS with work history
- `src/index.css` - Root CSS variables, font definitions, Tailwind imports, dark mode variants

## Development Workflows

### Common Commands
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - TypeScript check (`tsc -b`) then Vite build
- `npm run lint` - ESLint on all files (flat config)
- `npm run preview` - Preview production build locally

### Key Build Behaviors
- TypeScript strict mode across both `tsconfig.app.json` and `tsconfig.node.json`
- Path alias: `@/` resolves to `src/`
- SVG files imported with `?react` query parameter become React components
- Tailwind processes CSS in Vite, eliminating need for PostCSS config

### IDE Setup
- **Root CSS**: `src/index.css` - All CSS variables, fonts, Tailwind directives
- **Component CSS**: Co-located with component files (e.g., `navigation.css`, `uiux.css`)
- Watch for custom animations imported from `tw-animate-css` package

## Project-Specific Conventions

1. **Component Templates**
   - Use React.FC for type safety; include className merging via `cn()` for style flexibility
   - Example: `const Button = ({ className, ...props }: ButtonProps) => <button className={cn(buttonVariants(), className)} {...props} />`

2. **Constant Organization**
   - Every section has a `constants.ts` file with typed data
   - ICON_SIZE constants are centralized; use for responsive icon sizing

3. **CSS Variables**
   - All colors use OKLch format: `--primary: oklch(0.21 0.006 285.885);`
   - Spacing vars: `--size-xs` through `--size-3xl` (multiples of 4px)
   - Reference via `var(--variable-name)` in inline styles or Tailwind arbitrary values

4. **Classname Safety**
   - Always use `cn()` utility when merging Tailwind classes to avoid conflicts
   - CVA is the recommended pattern for component variants

## Integration Points & Dependencies

- **Radix UI**: Unstyled accessible primitives for menubar, navigation-menu, tooltips, labels, slots
- **Embla Carousel**: UI/UX carousel with progress-based tweening for opacity effects
- **lucide-react**: Icon library for buttons, arrow controls (ArrowLeft, ArrowRight)
- **anime.js**: Advanced animation library (available; usage pattern TBD)
- **Zustand**: State management (imported but minimal current usage)
- **@radix-ui/react-label**: Form label component (for future contact forms/inputs)

## Common Patterns & Implementation Details

### Carousel with Tweening (UiuxCarousel)
- **Pattern**: Embla API instance + `useEffect` for event listeners (scroll, reInit, resize)
- **Tweening Logic**: Calculate distance from each slide to scroll snap point, map to opacity range [TWEEN_MIN_OPACITY, 1]
- **Sliding Panel**: Overlay div with `translate-y-200 opacity-0` becomes `translate-y-0 opacity-100` on hover
- **Dot Navigation**: `useDotButton` hook provides selectedIndex and onDotButtonClick handler

### Work Experience Pattern
- **Selection State**: `useState(0)` for selectedIndex
- **Conditional Rendering**: `item = CARD_CONTENTS[selectedIndex]` for dynamic content
- **Dot Handlers**: `handleSelectIndex(index) => () => { setSelectedIndex(index) }`
- **Bullet Points Rendering**: Parse `{b}text{/b}` markup to `<strong>` tags using regex

### Title Animation
- **Letter Staggering**: Split text by word, then by character; apply `.letter` class
- **CSS Keyframes**: Odd children use `moveUp`, even use `moveDown` (both ±2px, 0.5s steps)

## Common Pitfalls & Tips

- **Icon Registration**: New icons must be added to both `ICONS` constant and `IconElements` map
- **Carousel Events**: Always clean up API listeners in useEffect return to prevent memory leaks
- **Tween Calculations**: Ensure `TWEEN_FACTOR` scales distance appropriately (3 is reasonable baseline)
- **Build Checks**: `npm run build` runs TypeScript check first; fix type errors before build
- **Tailwind Conflicts**: Always use `cn()` when combining classes to prevent specificity issues
- **SVG Import**: Use `import Icon from '@/assets/icons/file.svg?react'` syntax; omit `?react` for static imports
- **Color System**: Use `dark:` prefix for dark mode; CSS variables support dark mode via `.dark` selector
- **Dot Button Click**: Must prevent event bubbling in custom button handlers
- **Bubble SVG**: Used for title, work experience cards; ensure proper SVG dimensions and positioning
