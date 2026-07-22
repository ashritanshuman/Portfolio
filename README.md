# Ubuntu Portfolio

An immersive, fully interactive personal portfolio that recreates the Ubuntu Desktop (GNOME) experience in the browser.

Built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Shadcn/UI**, and **Lucide React**.

## Features

- **Ubuntu Desktop Environment** — Yaru-inspired wallpaper, glass panels, dock, top bar, desktop icons, and workspace indicators.
- **Realistic Window Manager** — Open, close, minimize, maximize, drag, resize, and stack multiple application windows with spring animations.
- **Workspace Switching** — Four virtual desktops with smooth navigation via mouse wheel, touch swipe, or keyboard shortcuts.
- **Activities Overview** — Blurred overview with workspace thumbnails, search, and application launcher.
- **Applications**
  - **Text Editor** — About Me with tabs for Introduction, Education, Interests, and Goals.
  - **System Monitor** — Skills visualized as live animated system metrics.
  - **Files** — Projects organized into folders (AI, ML, Data Science, Web Dev, Full Stack).
  - **Document Viewer** — Resume preview with download and print buttons.
  - **Terminal** — Functional terminal with command history, autocomplete, and `neofetch` / `sudo hire-me` easter eggs.
  - **Firefox Browser** — GitHub profile and popular repositories.
  - **VS Code:** — Folder explorer and syntax-highlighted code files.
- **Dock** — Icon magnification on hover, running indicators, tooltips, and context menus.
- **Sound Effects** — Optional audio feedback for startup, window actions, and clicks.
- **Keyboard Shortcuts** — `Alt+Tab` to switch windows, `Meta+Arrow` for workspaces, `Esc` to close Activities.
- **Responsive & Accessible** — Works on desktop and mobile, with reduced motion awareness and keyboard navigation.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to boot into the portfolio.

## Build

```bash
npm run build
```

Static files are exported to the `dist/` directory.

## Project Structure

- `src/app/` — Next.js app entry and global styles.
- `src/components/desktop/` — Desktop context, window manager, dock, top panel, activities overview, and related UI.
- `src/components/apps/` — Individual application components (Terminal, VS Code, Files, etc.).
- `src/lib/` — Portfolio data and app configurations.
- `src/hooks/` — Custom hooks, including sound effects.

## License

MIT — feel free to fork and customize for your own portfolio.
# Portfolio
