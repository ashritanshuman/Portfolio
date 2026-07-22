import {
  Activity,
  Code2,
  File,
  FileText,
  FolderOpen,
  Globe,
  Settings,
  Terminal,
  Trash2,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Code2,
  File,
  FileText,
  FolderOpen,
  Globe,
  Settings,
  Terminal,
  Trash2,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Globe;
}

export type IconName = keyof typeof ICON_MAP;
