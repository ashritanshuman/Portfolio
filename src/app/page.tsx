"use client";

import { DesktopProvider } from "@/components/desktop/DesktopContext";
import { Desktop } from "@/components/desktop/Desktop";

export default function HomePage() {
  return (
    <DesktopProvider>
      <Desktop />
    </DesktopProvider>
  );
}
