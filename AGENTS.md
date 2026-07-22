<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-specific notes for ubuntu-portfolio

- This is the main Ubuntu Desktop simulation. Entry: `src/app/page.tsx` → `DesktopProvider` → `Desktop`.
- Apps live in `src/components/apps/`; desktop chrome (window manager, dock, top panel, activities) lives in `src/components/desktop/`.
- Tailwind CSS v4: styles and config are in `src/app/globals.css`; there is no `tailwind.config.js`.
- shadcn is configured with `style: "base-nova"` and aliases in `components.json`.
- Run all commands from this directory, not the workspace root. Build output is `dist/`, not `out/` or `/.next`.
