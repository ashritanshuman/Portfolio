export type AppId =
  | "about"
  | "skills"
  | "projects"
  | "resume"
  | "contact"
  | "browser"
  | "vscode"
  | "terminal"
  | "files"
  | "settings"
  | "trash";

export interface AppConfig {
  id: AppId;
  title: string;
  icon: string; // lucide icon name
  color: string;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  resizable: boolean;
  category?: string;
}

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  /** Set by closeWindow: the window is fading out and is removed afterwards. */
  closing?: boolean;
  zIndex: number;
  workspace: number;
  focused: boolean;
}

export interface DesktopIcon {
  id: string;
  appId: AppId;
  label: string;
  x: number;
  y: number;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  folder: "AI" | "Web Development" | "Full Stack" | "Hackathons";
}

export interface SkillMetric {
  label: string;
  value: number;
  color: string;
  usage: number;
}
