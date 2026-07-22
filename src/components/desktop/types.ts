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
  folder: "AI" | "Machine Learning" | "Data Science" | "Web Development" | "Full Stack";
}

export interface SkillMetric {
  label: string;
  value: number;
  color: string;
  usage: number;
}
