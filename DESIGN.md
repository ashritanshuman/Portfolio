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

### State Flow

1. User clicks a dock or desktop icon.
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
| `openApp(appId, options?)` | Creates a new window for an app, clamps size to viewport, centers it, and assigns z-index. |
| `closeWindow(id)` | Removes the window; promotes next top window to focus. |
| `focusWindow(id)` | Raises z-index and marks the window focused. |
| `minimizeWindow(id)` | Hides the window; promotes next window if it was focused. |
| `maximizeWindow(id)` | Fills the viewport; restores focus. |
| `restoreWindow(id, options?)` | Un-minimizes and focuses a window; optionally sets workspace. |
| `moveWindow(id, x, y)` | Updates position; un-maximizes if moved. |
| `resizeWindow(id, width, height)` | Updates dimensions. |
| `setWindowWorkspace(id, ws)` | Moves a window to another workspace. |
| `setWorkspace(ws)` | Switches the visible workspace. |
| `toggleActivities()` / `setActivitiesOpen()` | Shows/hides the Activities Overview. |
| `setSoundEnabled()` | Toggles global sound effects. |

### Z-Index Management

A mutable `zIndexRef` starts at 10 and increments each time a window is focused. This guarantees the latest focused window always appears on top without relying on array order.

### Window Lifecycle

1. **Open**: Animate from `scale: 0.8, opacity: 0` to `scale: 1, opacity: 1`.
2. **Focus**: z-index increases; subtle ring highlight appears.
3. **Minimize**: Exit animation `scale: 0.9, opacity: 0`; window removed from visible list.
4. **Maximize**: Snaps to full viewport dimensions.
5. **Restore**: Returns to previous dimensions and position.
6. **Close**: Exit animation; focus shifts to the next top window on the same workspace.

---

## 5. Component Structure

### `Desktop` (`src/components/desktop/Desktop.tsx`)

The root desktop shell. It composes all desktop-level components and wires up gestures.

Responsibilities:
- Render the boot screen until booted.
- Render the fixed top panel, dock, and activities overlay.
- Render the draggable desktop motion container.
- Handle global wheel, touch, and drag gestures for workspace switching.
- Render the workspace indicator.

### `TopPanel` (`src/components/desktop/TopPanel.tsx`)

A fixed, glass-panel bar at the top of the screen.

- Left: "Activities" button toggles the Activities Overview.
- Right: sound toggle, Wi-Fi, battery, user icons, and a live digital clock/date.

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
- **Title bar**: left-side traffic-light buttons (close, minimize, maximize) + window title; right-side window controls.
- **Dragging**: Drag the title bar to reposition the window.
- **Resizing**: Eight resize handles (N, S, E, W, NE, NW, SE, SW) for resizable windows.
- **Maximize**: Fills the viewport; double-clicking the title bar toggles maximize.
- **Focus ring**: Active window gets a subtle white ring.
- **Stop propagation**: `onPointerDown` on the frame and title bar prevents the desktop workspace drag from starting when interacting with a window.
- **Responsive clamping**: `maxWidth` and `maxHeight` ensure windows never overflow the viewport on small screens.

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

The background is generated with layered CSS gradients and radial overlays to mimic an abstract Ubuntu Yaru wallpaper:
- Aubergine/purple base gradient.
- Orange and purple radial glows.
- Dark vignette.

### Glassmorphism

Panels, the dock, and windows use `backdrop-filter: blur()` with translucent dark backgrounds and subtle white borders:

```css
.glass-panel { backdrop-filter: blur(20px) saturate(1.6); }
.glass-dock  { backdrop-filter: blur(24px) saturate(1.8); }
.glass-window { backdrop-filter: blur(16px); }
```

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
- **CSS-only wallpaper**: No heavy image assets.
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
