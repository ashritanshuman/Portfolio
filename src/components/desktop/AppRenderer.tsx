"use client";

import { AppId } from "./types";
import { AboutApp } from "../apps/AboutApp";
import { SkillsApp } from "../apps/SkillsApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { ResumeApp } from "../apps/ResumeApp";
import { TerminalApp } from "../apps/TerminalApp";
import { BrowserApp } from "../apps/BrowserApp";
import { VSCodeApp } from "../apps/VSCodeApp";
import { FilesApp, TrashApp } from "../apps/FilesApp";
import { SettingsApp } from "../apps/SettingsApp";

export function AppRenderer({ appId }: { appId: AppId }) {
  switch (appId) {
    case "about":
      return <AboutApp />;
    case "skills":
      return <SkillsApp />;
    case "projects":
    case "files":
      return appId === "projects" ? <ProjectsApp /> : <FilesApp />;
    case "resume":
      return <ResumeApp />;
    case "contact":
    case "terminal":
      return <TerminalApp />;
    case "browser":
      return <BrowserApp />;
    case "vscode":
      return <VSCodeApp />;
    case "trash":
      return <TrashApp />;
    case "settings":
      return <SettingsApp />;
    default:
      return <AboutApp />;
  }
}
