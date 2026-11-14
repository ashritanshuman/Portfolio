# Ubuntu Portfolio — Design Document

A fully interactive, Ubuntu Desktop (GNOME) inspired personal portfolio rendered as a web application. This document describes the architecture, component design, state management, visual system, and interaction patterns used throughout the project.

---

## 1. Project Overview

The portfolio abandons the traditional vertical-scrolling website in favor of a desktop operating system metaphor. Every section of the portfolio is presented as an application window. Visitors boot into a Yaru-themed Ubuntu desktop, interact with a dock, top panel, desktop icons, and multiple workspaces, and open applications such as a text editor, system monitor, file manager, terminal, VS Code:, and browser.

### Core Goals

- **Authenticity**: Look and feel like a real Ubuntu GNOME desktop.
- **Interactivity**: Draggable, resizable, minimizable, maximizable windows; functional terminal; folder navigation; workspace switching.
- **Polish**: Smooth 60 FPS spring animations, glassmorphism, dynamic shadows, sound effects.
- **Usability**: Responsive layout, keyboard shortcuts, accessibility support, and reduced-motion awareness.
- **Showcase**: Demonstrate frontend engineering skills through a memorable, recruiter-friendly experience.

### Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **UI Library**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS utilities
- **Component Library**: Shadcn/UI (minimal usage, button primitive)
- **Animation**: Framer Motion
- **Icons**: Lucide React + custom SVGs for brand icons (GitHub, LinkedIn)
- **Build Output**: Static `dist/` folder

---

## 2. Design Principles

1. **Desktop-first, mobile-deliberate**: The primary experience is a desktop OS. Below 768px the same content is presented as a touch-first shell (status bar, home grid, bottom dock, full-height app panels) rather than a shrunken desktop.
2. **Window as the atomic unit**: Every application is rendered inside a `WindowFrame` managed by a central window manager.
3. **Global state over prop drilling**: A single `DesktopContext` owns all windows, workspaces, and focus state.
4. **Spring over duration**: Animations use Framer Motion spring physics for an organic, OS-like feel.
5. **Layered feedback**: Visual (shadows, glows, indicators), audio (optional sound effects), and motion (scale, opacity, slide) work together to communicate state.
6. **Minimal, realistic apps**: Each application is recognizable and functional without becoming a full separate project.

### Responsive Behaviour

| Range | Layout | Window presentation |
| --- | --- | --- |
| ≥ 1024px | Full Ubuntu desktop: top panel, desktop icons, floating dock, workspaces | Draggable, resizable floating windows |
| 768–1023px | Same desktop chrome, scaled spacing, full-width dock | Windows clamp to the viewport with a slide-in dock tooltip |
| ≤ 767px | Touch shell: status bar, home grid, 5-slot bottom dock, activities launcher | One full-height app panel at a time, inset between status bar and dock |

- Breakpoints are CSS-driven (`mobile-only` / `desktop-only` utilities), with `useIsMobile` only deciding window presentation, so there is no hydration flash.
- Shell offsets live in CSS variables (`--statusbar-h`, `--dock-h`, `--mobile-gutter`) and respect `env(safe-area-inset-*)` on notched devices.
- Dragging and resizing use Pointer Events, so touch works on tablets; resize handles are disabled for touch pointers.
- All motion honours `prefers-reduced-motion` via `MotionConfig reducedMotion="user"` and a global CSS guard.

---

## 3. High-Level Architecture

```
┌─────────────────────────────────────────┐
│              DesktopProvider            │
│   (owns windows, workspace, focus state) │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│              Desktop                    │
│  ┌──────────────┐ ┌──────────────────┐  │
│  │   TopPanel   │ │  ActivitiesOverview│  │
│  └──────────────┘ └──────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │   Desktop motion container (drag) │  │
│  │  ┌──────────┐  ┌──────────────┐  │  │
│  │  │ DesktopIcons│ │ WindowFrame(s)│  │  │
│  │  └──────────┘  └──────────────┘  │  │
│  │  ┌──────────┐                     │  │
│  │  │ Workspace│                     │  │
│  │  │ Indicator│                     │  │
│  │  └──────────┘                     │  │
│  └────────────────────────────────────┘  │
│  ┌──────────────┐                       │
│  │     Dock     │                       │
│  └──────────────┘                       │
└─────────────────────────────────────────┘
```

### Desktop Composition

The home screen is a layered composition rather than a single canvas:

1. **Wallpaper layer** – the monochrome `updates-wallpaper` artwork from `public/assets/updates-wallpaper.webp` (1672×941, 49 KB), applied with `cover` / `center` / `no-repeat` by static CSS; viewports below 768px get a pre-cropped portrait variant (`updates-wallpaper-mobile.webp`, 434×941, 22 KB). The CSS background colour `#0d0f11` is the fallback until the image arrives.
2. **Desktop backdrop** – left app shortcuts, the hero section, and three information widgets (Education, Quick Access, Now Building). The whole backdrop is blurred and dimmed from live window state.
3. **Window layer** – floating windows rendered above the backdrop, never inside the blurred element, so window content stays sharp.
4. **Shell layer** – top panel and dock, always sharp and interactive.
5. **Overlay layer** – Activities Overview (`z-9000`).

The backdrop filter is derived, not toggled manually: `desktopBlurred = visibleWindows.length > 0`. Minimizing the last window or closing it restores the sharp desktop; closing one of several windows keeps it blurred.

### Liquid Glass

Reusable utilities in `globals.css`:

| Class | Used by | Notes |
| --- | --- | --- |
| `.glass` | generic surfaces | burgundy gradient, 24px blur, inner highlight |
| `.glass-card` | hero widgets | 20px radius, layered shadow |
| `.glass-window` | window shell | deeper tint, 28px blur |
| `.glass-dock` / `.glass-panel` | dock / top panel | strongest tint for legibility |
| `.glass-inset` | quick-action tiles | faint fill for nested controls |

All surfaces share `--glass-border`, `--glass-highlight`, `--glass-shadow`, and fall back to an opaque burgundy surface when `backdrop-filter` is unsupported.

### State Flow

1. User clicks a dock, desktop icon, hero button, or widget shortcut.
2. The action is dispatched to `DesktopContext`.
3. `DesktopContext` updates `windows` array and `activeWindowId`.
4. `Desktop` re-renders windows through `WindowFrame`.
5. `WindowFrame` renders the appropriate app via `AppRenderer`.

---

## 4. State Management (`DesktopContext`)

`DesktopContext` is a React Context that holds the entire desktop state and exposes actions to manipulate it.

### State Shape

```ts
interface DesktopState {
  windows: WindowState[];        // all open windows
  activeWindowId: string | null; // currently focused window
  workspace: number;               // current workspace (1 or 2)
  activitiesOpen: boolean;         // Activities Overview visible
  soundEnabled: boolean;           // global sound toggle
}

interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  workspace: number;
  focused: boolean;
}
```

### Actions

| Action | Behavior |
| --- | --- |
| `openApp(appId, options?)` | Creates a new window for an app, clamps its size to the viewport, and places it at the exact centre of the usable workspace (`centeredWindowPosition`). No cascade offset, so reopening never drifts. |
| `launchApp(appId, options?)` | Single launcher used by every shortcut: focuses an existing window, restores a minimized one, or opens a new window. Prevents duplicate instances. |
| `closeWindow(id)` | Removes the window; promotes next top window to focus. |
| `focusWindow(id)` | Raises z-index and marks the window focused. |
| `minimizeWindow(id)` | Hides the window; promotes next window if it was focused. |
| `maximizeWindow(id)` | Fills the viewport; restores focus. |
| `unmaximizeWindow(id)` | Leaves full-screen and returns the window to its stored (centred) position and size. |
| `restoreWindow(id, options?)` | Un-minimizes, raises z-index, and focuses a window; keeps its maximized state. |
| `moveWindow(id, x, y)` | Updates position; un-maximizes if moved. |
| `resizeWindow(id, width, height)` | Updates dimensions. |
| `setWindowWorkspace(id, ws)` | Moves a window to another workspace. |
| `setWorkspace(ws)` | Switches the visible workspace. |
| `toggleActivities()` / `setActivitiesOpen()` | Shows/hides the Activities Overview. |
| `setSoundEnabled()` | Toggles global sound effects. |

### Z-Index Management

A mutable `zIndexRef` starts at 10 and increments each time a window is focused. This guarantees the latest focused window always appears on top without relying on array order.

### Window Lifecycle

1. **Open**: Geometry is final on the first frame (dead centre), while a compositor-only transition fades `opacity` 0 → 1 and settles `scale 0.97 → 1` / `y +8 → 0` over 200ms (`cubic-bezier(0.22, 1, 0.36, 1)`).
2. **Focus**: z-index increases; subtle ring highlight appears. Clicking an already-focused, top-most window is a no-op, so no render is scheduled.
3. **Minimize**: The window stays mounted (terminal history, scroll position and folder state survive) and animates to `opacity: 0` / `scale 0.97`; `visibility: hidden` flips after the animation, so it leaves hit-testing and the accessibility tree without a remount.
4. **Maximize**: Snaps to full viewport dimensions (native feel — no geometry animation).
5. **Restore**: Returns to the stored position and size (still centred if it was never dragged).
6. **Close**: state-driven — no `AnimatePresence`. `closeWindow` marks the window `closing: true` (focus moves to the next top window immediately), the CSS `window-surface--hidden` transition fades the surface out over 200ms while the frame keeps its final geometry, and a `setTimeout(WINDOW_EXIT_MS + 30)` unmounts it. The window stays mounted and painted for the whole exit; `restoreWindow` cancels an in-flight close, and minimized/closing windows are excluded from the visible set but kept mounted.

### Window Interaction Performance

Windows are deliberately split into two layers so transforms never fight each other:

| Layer | Owns | Animated? |
| --- | --- | --- |
| Outer `motion.div` | `x`/`y` motion values, `width`/`height`, `z-index` | Only its `x`/`y` motion values, written by drag |
| Inner `motion.div` | opacity/scale/y for open, minimize and close | Yes, compositor-only |

- **Position lives in motion values, not React state.** `x`/`y` are `useMotionValue`s written straight to the compositor during a drag; React state (`moveWindow`) is committed once, on pointer-up.
- **Pointer capture + `requestAnimationFrame`.** Title-bar drags use `setPointerCapture` on the pointer that started the gesture, so no global listeners are registered and moves outside the title bar still track. Pointer moves only store a target; one `rAF` callback applies it, capping updates at one per frame. Works for mouse, pen and touch (`touch-action: none` on the title bar).
- **Listener cleanup** is guaranteed by pointer capture: `pointerup`/`pointercancel` both release capture, cancel the pending frame and flush the final position.
- **Resize** uses pointer capture plus one `setWindowBounds(id, {x, y, width, height})` call per frame, so a resize frame costs a single state update instead of a move + resize pair.
- **Identity-preserving context updates.** Only the window that changed gets a new object; unrelated windows keep their previous references, so `WindowHost` (memoised) skips re-rendering and app content is never re-mounted by focus changes or drag commits.
- **`will-change` is scoped.** `.window-dragging` is toggled on the frame only while a drag is active, then removed.
- **Blur is not on the moving surface.** `.glass-window` keeps its tint, border and shadow but has no `backdrop-filter`; the title-bar strip owns `backdrop-filter: blur(16px)`, so dragging never re-samples a full-window blur.

Measured with CDP `Performance.getMetrics` over a 90-step drag (1440×900): main-thread task time 0.678s → 0.218s, script time 0.365s → 0.032s, layout passes 18 → 4, style recalculations 283 → 102.

### Window Placement

Every window is `position: fixed` and positioned by viewport coordinates (`x`, `y`) supplied by `DesktopContext`. New windows use `centeredWindowPosition(width, height)`:

```ts
const workspaceHeight =
  window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE; // panel + dock

x = round((window.innerWidth  - width)  / 2);
y = WINDOW_TOP_MARGIN + round((workspaceHeight - height) / 2);
```

- `WINDOW_TOP_MARGIN = 40` keeps the titlebar below the 32px top panel.
- `WINDOW_BOTTOM_RESERVE = 96` keeps the window above the floating dock.
- Clamping happens before centring, so an oversized window is still fully visible.
- No per-open offset is applied, so every app opens dead-centre and repeat opens do not drift.
- Mobile windows ignore these coordinates and use the full-height panel layout.
6. **Close**: Exit animation; focus shifts to the next top window on the same workspace.

---

## 5. Component Structure

### `Desktop` (`src/components/desktop/Desktop.tsx`)

The root desktop shell. It composes all desktop-level components and wires up gestures.

Responsibilities:
- Render the boot screen until booted.
- Render the fixed top panel, dock, and activities overlay.
- Render the desktop backdrop (wallpaper, shortcuts, hero, widgets) as a single blurred/dimmed layer.
- Derive the backdrop blur from window state and render windows as siblings of that layer.
- Render the workspace indicator.

### `TopPanel` (`src/components/desktop/TopPanel.tsx`)

A fixed, glass-panel bar at the top of the screen.

- Left: "Activities" button, Ubuntu mark, "Ashrit Anshuman", and "Portfolio OS".
- Right: sound toggle, Wi-Fi, battery, user icons, and a live digital clock/date.

### `HeroSection` (`src/components/desktop/HeroSection.tsx`)

The central-left introduction on the desktop backdrop.

- Welcome pill, two-line name (white + `#F36B21`), uppercase tagline, and the profile description.
- "Explore Apps" opens the Activities launcher; "About Me" calls `launchApp("about")`.
- Staggered entrance via Framer Motion variants; inherits global `prefers-reduced-motion`.

### `DesktopWidgets` (`src/components/desktop/DesktopWidgets.tsx`)

Three glass cards in a right-hand column (a 3-up row on tablet widths).

- **Education** – institution, degree, and duration.
- **Quick Access** – Projects/Resume open windows, GitHub/LinkedIn open external tabs.
- **Now Building** – live indicator plus the SkilloraAI link from `PROJECTS`.

### `Dock` (`src/components/desktop/Dock.tsx`)

A centered, glass-dock bar at the bottom.

- Displays app icons from `DOCK_APPS`.
- Icons enlarge on hover with a spring animation (neighbor scaling included).
- Running apps show a small dot indicator.
- Active apps get a subtle glow ring.
- Tooltips appear on hover.
- Right-click context menu offers "New Window" and "Show on Desktop".
- Clicking an already-running app focuses it or restores it from minimize; it does not open duplicates.

### `DesktopIcons` (`src/components/desktop/DesktopIcons.tsx`)

A left-aligned vertical grid of desktop shortcuts.

- Maps `DESKTOP_ICONS` from `src/lib/data.ts`.
- Icons for About, Projects, Resume, Contact, GitHub, LinkedIn, and Trash.
- GitHub and LinkedIn use custom SVG icons; others use Lucide icons.
- GitHub and LinkedIn desktop icons open external URLs in a new tab.
- Pointer-down events stop propagation so they do not trigger workspace drag.

### `WindowFrame` (`src/components/desktop/WindowFrame.tsx`)

The core window chrome that wraps every application.

Features:
- **Title bar**: left-side traffic-light buttons (close, minimize, maximize) + app icon + window title; right-side window controls.
- **Dragging**: Drag the title bar to reposition the window. Pointer Events + pointer capture keep the gesture alive outside the title bar; moves are batched into one `requestAnimationFrame` and applied to `x`/`y` motion values, so React never re-renders mid-drag. Touch works on tablets.
- **Resizing**: Eight resize handles (N, S, E, W, NE, NW, SE, SW) for resizable windows; hidden for coarse pointers.
- **Maximize**: Fills the viewport; double-clicking the title bar toggles maximize.
- **Focus ring**: Active window gets a subtle white ring; windows always stack above the desktop icons.
- **Stop propagation**: `onPointerDown` on the frame and title bar prevents the desktop workspace drag from starting when interacting with a window.
- **Independent scrolling**: the content area fills the frame and each app owns its scroll container.
- **Responsive clamping**: `maxWidth` and `maxHeight` ensure windows never overflow the viewport on small screens.
- **Phone mode**: renders as a fixed panel between the status bar and dock, with a 44px close/minimize header.

### `ActivitiesOverview` (`src/components/desktop/ActivitiesOverview.tsx`)

A full-screen overlay inspired by GNOME Activities.

- Blurred, darkened desktop background.
- Search bar at the top with live application filtering.
- Workspace thumbnails showing open windows per workspace.
- Application launcher grid grouped by category.
- Clicking a workspace switches to it; clicking a window in a thumbnail focuses it and closes the overview.

### `AppRenderer` (`src/components/desktop/AppRenderer.tsx`)

A simple switch component that maps `appId` to the corresponding application component.

---

## 6. Applications

### About Me — Text Editor (`AboutApp.tsx`)

A tabbed text editor with sections for:
- Introduction
- Education
- Interests
- Goals

Visual style: light editor chrome, tab bar, status bar.

### Skills — System Monitor (`SkillsApp.tsx`)

A dark system monitor that maps skills to live system metrics:

| Metric | Maps To |
| --- | --- |
| CPU Usage | Python |
| RAM Usage | Machine Learning |
| GPU Usage | Deep Learning |
| Storage | Databases |
| Network | APIs |

Features:
- Animated progress bars that fluctuate slightly over time.
- Core stack tag cloud.
- Process history list for visual flair.

### Projects — Files (`ProjectsApp.tsx`)

A two-pane file manager.

- Left sidebar: folder tree (AI, Machine Learning, Data Science, Web Development, Full Stack).
- Main area: folder grid → project cards → project detail view.
- Each project card lists tech stack and links to GitHub source.

### Resume — Document Viewer (`ResumeApp.tsx`)

A PDF-like document preview.

- Toolbar with zoom controls, download, and print buttons.
- A realistic A4 page with summary, experience, education, and skills sections.

### Contact — Terminal (`TerminalApp.tsx`)

A fully functional terminal with prompt `ashrit@portfolio:~$`.

Supported commands:
- `help` — list commands
- `about`, `skills`, `projects`, `resume` — open corresponding apps
- `contact`, `github`, `linkedin` — show or open contact info
- `clear` — clear terminal
- `neofetch` — ASCII art system info
- `sudo hire-me` — playful hiring message

Features:
- Command history (Up/Down arrows).
- Tab autocomplete for known commands.
- Enter to execute.

### Browser (`BrowserApp.tsx`)

A Firefox-inspired browser.

- Tab bar with GitHub/Projects/Resume tabs.
- Address bar and navigation controls.
- GitHub profile page with popular repositories.

### VS Code: (`VSCodeApp.tsx`)

A faithful VS Code: recreation.

- Left explorer sidebar with file tree.
- Tab bar for open files.
- Breadcrumb and code editor area.
- Simple syntax highlighting for `about.js`, `projects.js`, `skills.js`, `contact.js`.
- VS Code: status bar at the bottom.

### Files / Trash / Settings (`FilesApp.tsx`, `SettingsApp.tsx`)

- **Files**: Generic file manager with folders and file icons.
- **Trash**: Empty trash placeholder.
- **Settings**: Sound toggle and read-only settings categories.

---

## 7. Animations & Interactions

### Animation Philosophy

All motion is purpose-driven:
- **Open/close/minimize**: Communicate where a window came from and went.
- **Focus**: Communicate which window is active.
- **Workspace switch**: Communicate spatial relationship between workspaces.
- **Dock hover**: Communicate affordance and delight.

### Spring Configuration

- **Window open/close**: `type: "spring", stiffness: 400, damping: 30, mass: 0.8`
- **Desktop overview scale**: `type: "spring", stiffness: 250, damping: 28`
- **Dock icon hover**: `type: "spring", stiffness: 300, damping: 20`

### Gestures

| Gesture | Action |
| --- | --- |
| Mouse wheel left/right | Switch workspace |
| Mouse wheel up | Open Activities Overview |
| Mouse wheel down | Close Activities Overview |
| Touch swipe left/right | Switch workspace |
| Touch swipe up | Open Activities Overview |
| Touch swipe down | Close Activities Overview |
| Drag desktop left/right | Switch workspace (with elastic resistance) |
| Drag title bar | Move window |
| Drag resize handle | Resize window |

### Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Alt + Tab` | Cycle open windows on current workspace |
| `Meta + Arrow Right` | Next workspace |
| `Meta + Arrow Left` | Previous workspace |
| `Esc` | Close Activities Overview |

---

## 8. Visual Design System

### Ubuntu Yaru Palette

```css
--yaru-aubergine: #2c001e;
--yaru-purple:    #5e2750;
--yaru-red:       #e95420;
--yaru-orange:    #f36b3c;
--yaru-yellow:    #f9d342;
--yaru-green:     #0e8420;
--yaru-blue:      #19b6ee;
--yaru-grey:      #aea79f;
--yaru-dark:      #1e1e1e;
--yaru-panel:     rgba(28, 28, 28, 0.82);
--yaru-dock:      rgba(40, 40, 40, 0.78);
--yaru-window:    rgba(46, 46, 46, 0.96);
--yaru-title:     #3e3e3e;
--yaru-terminal:  #300a24;
--yaru-vscode:    #1e1e2e;
```

### Wallpaper

The background is the monochrome `updates-wallpaper` artwork (low-poly lynx over contour waves on dark charcoal), delivered entirely by static CSS — no JavaScript is involved in loading it:

- **Variants**: `updates-wallpaper.webp` (1672×941, 49 KB) for ≥768px viewports and `updates-wallpaper-mobile.webp` (434×941 portrait crop centred on the lynx, 22 KB) for <768px. Both are WebP conversions of the original `updates-wallpaper.png` (1.7 MB), which stays in `public/assets/` as the source and is never served.
- **Static CSS delivery**: `.ubuntu-wallpaper` in `globals.css` sets `background-image`, `background-color: #0d0f11`, `cover` and `no-repeat`, with a `max-width: 767px` media query swapping in the mobile variant. Because the rule lives in the render-blocking stylesheet and the element is server-rendered, it applies before hydration — no `useEffect`, no dynamic import, no lazy loading, no artificial delay.
- **Media-gated preload**: `PreloadWallpaper` (rendered in `layout.tsx`) emits two `ReactDOM.preload` hints with `fetchPriority: "high"` and mutually exclusive `media` queries (`(min-width: 768px)` / `(max-width: 767px)`), so exactly one variant is fetched per viewport and the download starts while the HTML is still parsing. The CSS media query and the preload gate always agree, so there is never a duplicate request.
- **Caching**: `public/_headers` (mirrored in `vercel.json`) serve `/assets/*` with `Cache-Control: public, max-age=2592000, stale-while-revalidate=604800`. Assets are plain static files — no runtime image transforms and no image-processing dependency.

### Glassmorphism

Panels, the dock, and windows use `backdrop-filter: blur()` with translucent dark backgrounds and subtle white borders:

```css
.glass-panel      { backdrop-filter: blur(20px) saturate(1.6); }
.glass-dock       { backdrop-filter: blur(24px) saturate(1.8); }
.glass-window     { /* tint, border and shadow only */ }
.window-titlebar  { backdrop-filter: blur(16px) saturate(1.5); }
```

The window shell itself deliberately carries no `backdrop-filter`: the content panel is opaque, and a full-window blur is re-sampled on every frame while a window is dragged. Moving the blur to the 36px title-bar strip keeps the glass look and takes the expensive filter off the moving surface.

### Window Chrome

- Title bar gradient from `#3e3e3e` to `#2e2e2e`.
- Traffic-light buttons: close `#ff5f57`, minimize `#febc2e`, maximize `#28c840`.
- Rounded corners (`rounded-xl`).
- Drop shadow: `0 20px 60px rgba(0,0,0,0.45)`.

### Typography

- **UI**: Geist Sans / system-ui.
- **Terminal**: Ubuntu Mono / DejaVu Sans Mono / Fira Code.
- **Code editor**: JetBrains Mono / Fira Code.

---

## 9. Sound Design

A lightweight `useSound` hook manages optional audio feedback using remote Google Sound Library assets.

| Event | Sound |
| --- | --- |
| Startup | Ambient space tone |
| Window open | Pop |
| Window close | Wood flick |
| Dock click | Click |
| Terminal command | Click |
| Minimize / Maximize | Close / Pop variants |

Sound can be toggled off from the top panel or the Settings app. Audio is best-effort and gracefully fails if autoplay is blocked.

---

## 10. Accessibility

- **Keyboard navigation**: All dock icons, desktop icons, window controls, and app buttons are focusable.
- **ARIA labels**: Dock icons, desktop icons, window controls, and terminal input have `aria-label`.
- **Reduced motion**: `prefers-reduced-motion` media query disables animations for users who need it.
- **Color contrast**: White text on dark panels with high-contrast accent colors.
- **No scrolling page**: The experience is a single-screen desktop, avoiding scroll traps.

---

## 11. Performance

- **Static export**: Pre-rendered HTML/JS/CSS in `dist/`.
- **Optimised wallpaper**: the 1.7 MB source PNG ships as a 49 KB desktop WebP and a 22 KB mobile WebP. It is preloaded with media gates and painted from render-blocking CSS, so the download starts during HTML parse (measured: start 18 ms, done 6 ms locally — before FCP 140 ms; on a 375 ms / 400 kbit/s link it starts at 441 ms and finishes before first paint), CLS 0, exactly one request per viewport, warm cache 0 bytes.
- **Long-lived caching**: `public/_headers` + `vercel.json` give `/assets/*` a 30-day `max-age` with `stale-while-revalidate`, so repeat visits re-use the cached wallpaper instead of re-downloading it.
- **SVG icons**: Lucide icons and inline SVGs scale cleanly.
- **Lazy window content**: Windows are conditionally rendered based on state; minimized windows are unmounted from the visible tree.
- **Spring physics**: GPU-accelerated transforms and opacity changes.
- **Event stop propagation**: Prevents unnecessary parent drag calculations during window interaction.

---

## 12. File Structure

```
ubuntu-portfolio/
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── README.md
├── DESIGN.md
├── dist/                  # Static export
├── public/                # Static assets (favicon, SVGs)
└── src/
    ├── app/
    │   ├── layout.tsx     # Root layout, fonts, metadata
    │   ├── page.tsx       # Desktop shell entry
    │   ├── globals.css    # Theme, utilities, reduced motion
    │   └── favicon.ico
    ├── components/
    │   ├── desktop/
    │   │   ├── Desktop.tsx
    │   │   ├── DesktopContext.tsx
    │   │   ├── DesktopIcons.tsx
    │   │   ├── Dock.tsx
    │   │   ├── TopPanel.tsx
    │   │   ├── WindowFrame.tsx
    │   │   ├── ActivitiesOverview.tsx
    │   │   ├── AppRenderer.tsx
    │   │   ├── BootScreen.tsx
    │   │   ├── Icon.tsx
    │   │   └── types.ts
    │   └── apps/
    │       ├── AboutApp.tsx
    │       ├── SkillsApp.tsx
    │       ├── ProjectsApp.tsx
    │       ├── ResumeApp.tsx
    │       ├── TerminalApp.tsx
    │       ├── BrowserApp.tsx
    │       ├── VSCodeApp.tsx
    │       ├── FilesApp.tsx
    │       └── SettingsApp.tsx
    ├── hooks/
    │   └── useSound.ts
    ├── lib/
    │   ├── data.ts          # App configs, projects, skills, files
    │   └── utils.ts         # Shadcn utility
    └── components/ui/
        └── button.tsx       # Shadcn button primitive
```

---

## 13. Data Model

### Apps (`src/lib/data.ts`)

Each app is configured with:

```ts
interface AppConfig {
  id: AppId;
  title: string;       // e.g., "Terminal"
  icon: string;        // Lucide icon name
  color: string;       // App background color
  width: number;       // Default open width
  height: number;      // Default open height
  minWidth: number;
  minHeight: number;
  resizable: boolean;
  category?: string;   // For Activities app launcher grouping
}
```

### Projects

Projects are typed with folder, tech stack, description, and links. The `ProjectsApp` filters them by folder.

### VS Code: Files

`VSCODE_FILES` is a record of file names to language and content strings, used for the fake editor.

---

## 14. Keyboard Shortcuts & Gestures Reference

| Input | Result |
| --- | --- |
| Click dock icon (app not open) | Open window |
| Click dock icon (app open) | Focus / restore window |
| Right-click dock icon | Context menu (New Window, Show on Desktop) |
| Drag title bar | Move window |
| Drag resize handle | Resize window |
| Click close/minimize/maximize | Standard window actions |
| Wheel horizontal / drag desktop | Switch workspace |
| Wheel up | Activities Overview |
| `Alt + Tab` | Cycle windows |
| `Meta + Left/Right` | Switch workspace |
| `Esc` | Close Activities |

---

## 15. Build & Deployment

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

Output is written to `dist/` as static HTML. It can be deployed to any static host (Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc.).

### Notes

- Next.js 16 uses Turbopack by default.
- A parent-directory lockfile warning may appear during build; it does not affect the static output.
- Images are exported unoptimized because the output is static.

---

## 16. Future Enhancements

- Window snapping to screen edges.
- Double-click title bar to maximize.
- Drag-and-drop desktop icons and dock reordering.
- Local sound asset files instead of remote URLs.
- Wallpaper customization in Settings.
- Live system stats from a real API in the System Monitor.
- More terminal commands and a full shell parser.

---

*End of Design Document*
