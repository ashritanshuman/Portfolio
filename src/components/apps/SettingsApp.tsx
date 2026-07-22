"use client";

import { useDesktop } from "../desktop/DesktopContext";
import { Volume2, VolumeX, Moon, Monitor, Wifi, Battery } from "lucide-react";

export function SettingsApp() {
  const { soundEnabled, setSoundEnabled } = useDesktop();

  return (
    <div className="h-full flex bg-gray-100 text-[#1e1e1e]">
      <div className="w-48 bg-white border-r border-black/10 p-3">
        <div className="text-sm font-semibold mb-2">Settings</div>
        {["Wi-Fi", "Bluetooth", "Background", "Sound", "Power", "Accessibility"].map((s) => (
          <button
            key={s}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 ${
              s === "Sound" ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-6">Sound</h2>

        <div className="space-y-4 max-w-md">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/10">
            <div className="flex items-center gap-3">
              {soundEnabled ? <Volume2 className="w-5 h-5 text-[#e95420]" /> : <VolumeX className="w-5 h-5 text-black/50" />}
              <span className="text-sm font-medium">System Sounds</span>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                soundEnabled ? "bg-[#e95420]" : "bg-black/20"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${
                  soundEnabled ? "left-6.5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/10">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#5e2750]" />
              <span className="text-sm font-medium">Dark Mode</span>
            </div>
            <span className="text-xs text-black/50">Always on</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/10">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-[#19b6ee]" />
              <span className="text-sm font-medium">Resolution</span>
            </div>
            <span className="text-xs text-black/50">Auto</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/10">
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-[#0e8420]" />
              <span className="text-sm font-medium">Wi-Fi</span>
            </div>
            <span className="text-xs text-[#0e8420]">Connected</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/10">
            <div className="flex items-center gap-3">
              <Battery className="w-5 h-5 text-[#f9d342]" />
              <span className="text-sm font-medium">Battery</span>
            </div>
            <span className="text-xs text-black/50">85% — Charging</span>
          </div>
        </div>
      </div>
    </div>
  );
}
