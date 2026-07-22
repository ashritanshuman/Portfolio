"use client";

import { Download, Printer, ZoomIn, ZoomOut, FileText } from "lucide-react";
import { useState } from "react";

export function ResumeApp() {
  const [scale, setScale] = useState(1);

  return (
    <div className="h-full flex flex-col bg-gray-100 text-[#1e1e1e]">
      {/* Toolbar */}
      <div className="h-12 bg-white border-b border-black/10 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded hover:bg-black/5" onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}>
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-sm text-black/60 min-w-[3rem] text-center">{Math.round(scale * 100)}%</span>
          <button className="p-2 rounded hover:bg-black/5" onClick={() => setScale((s) => Math.min(2, s + 0.1))}>
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#e95420] text-white text-sm hover:bg-[#d14b1b] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download would start here in production.");
            }}
          >
            <Download className="w-4 h-4" /> Download
          </a>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/20 text-sm hover:bg-black/5 transition-colors"
            onClick={() => window.print()}
          >
            <Printer className="w-4 h-4" /> Print
          </button>
        </div>
      </div>

      {/* Document preview */}
      <div className="flex-1 overflow-auto p-6 bg-[#e0e0e0] flex justify-center">
        <div
          className="bg-white shadow-xl p-8 w-[210mm] min-h-[297mm] origin-top transition-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="border-b-2 border-[#e95420] pb-4 mb-6">
            <h1 className="text-3xl font-bold text-[#1e1e1e]">Ashrit</h1>
            <p className="text-black/60 mt-1">Full Stack Developer & AI Enthusiast</p>
            <div className="flex flex-wrap gap-3 text-sm text-black/60 mt-2">
              <span>ashrit39@gmail.com</span>
              <span>•</span>
              <span>github.com/ashritanshuman</span>
              <span>•</span>
              <span>linkedin.com/in/ashritanshuman</span>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-[#e95420] mb-2">Summary</h2>
              <p className="text-sm text-black/80 leading-relaxed">
                Creative full-stack engineer with a strong foundation in AI/ML. Experienced in building
                performant web applications, scalable APIs, and intelligent systems. Passionate about
                design systems, developer experience, and open-source software.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#e95420] mb-2">Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-medium">Senior Frontend Engineer</h3>
                    <span className="text-sm text-black/50">2023 — Present</span>
                  </div>
                  <p className="text-sm text-black/60">TechCorp • Remote</p>
                  <ul className="list-disc list-inside text-sm text-black/70 mt-1">
                    <li>Led migration to Next.js and improved core web vitals by 40%.</li>
                    <li>Built a design system adopted across 5 product teams.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-medium">ML Engineer</h3>
                    <span className="text-sm text-black/50">2021 — 2023</span>
                  </div>
                  <p className="text-sm text-black/60">AI Labs • Bangalore</p>
                  <ul className="list-disc list-inside text-sm text-black/70 mt-1">
                    <li>Shipped production computer vision and NLP pipelines.</li>
                    <li>Reduced model latency by 60% through quantization and caching.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#e95420] mb-2">Education</h2>
              <p className="text-sm text-black/80">B.Tech in Computer Science, Specialization in AI/ML</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#e95420] mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Docker", "AWS", "Figma"].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-black/5 text-xs text-black/70">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
