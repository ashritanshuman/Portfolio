"use client";

import { Download, ZoomIn, ZoomOut, ExternalLink } from "lucide-react";
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
            href="/resume.pdf"
            download="ashrit_anshuman_resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#e95420] text-white text-sm hover:bg-[#d14b1b] transition-colors"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </div>

      {/* Document preview */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 bg-[#e0e0e0] flex justify-center items-start">
        <div
          className="bg-white shadow-2xl p-6 sm:p-10 w-full max-w-[210mm] min-h-[297mm] h-fit shrink-0 my-2 mb-12 origin-top transition-transform text-[#1e1e1e] font-sans rounded-sm"
          style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
        >
          {/* Header */}
          <div className="text-center border-b pb-4 mb-6">
            <h1 className="text-3xl font-extrabold uppercase tracking-wide text-[#1e1e1e]">
              ashrit anshuman pradhan
            </h1>
            <p className="text-sm text-black/70 mt-1">Gwalior, Madhya Pradesh, India</p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-black/80 mt-2 font-medium">
              <span>+91 6370205656</span>
              <span>|</span>
              <a href="mailto:ashrit39@gmail.com" className="text-[#e95420] hover:underline">
                ashrit39@gmail.com
              </a>
              <span>|</span>
              <a href="https://linkedin.com/in/ashritanshuman/" target="_blank" rel="noreferrer" className="text-[#e95420] hover:underline">
                linkedin.com/in/ashritanshuman
              </a>
              <span>|</span>
              <a href="https://github.com/ashritanshuman" target="_blank" rel="noreferrer" className="text-[#e95420] hover:underline">
                github.com/ashritanshuman
              </a>
              <span>|</span>
              <a href="https://ashritanshuman.vercel.app" target="_blank" rel="noreferrer" className="text-[#e95420] hover:underline">
                Portfolio
              </a>
            </div>
          </div>

          <div className="space-y-5 text-sm">
            {/* Education */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-[#1e1e1e] border-b border-black/20 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline font-semibold">
                <span>ITM University Gwalior</span>
                <span className="text-xs text-black/60 font-normal">August 2025 -- September 2029</span>
              </div>
              <div className="flex justify-between items-baseline text-xs italic text-black/80">
                <span>Bachelor of Technology in Computer Science</span>
                <span>Gwalior, MP</span>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-[#1e1e1e] border-b border-black/20 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-black/80 leading-relaxed">
                <div>
                  <strong className="text-black">Languages:</strong> Python, Java, JavaScript, SQL
                </div>
                <div>
                  <strong className="text-black">Developer Tools:</strong> Git, GitHub, VS Code, Docker, Linux
                </div>
                <div>
                  <strong className="text-black">Technologies/Frameworks:</strong> React.js, Tailwind CSS, MongoDB, Express.js, Firebase, NumPy, Pandas, Matplotlib
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-[#1e1e1e] border-b border-black/20 pb-1 mb-2">
                Experience
              </h2>
              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>Freelancer</span>
                  <span className="text-xs text-black/60 font-normal">May 2025 -- Present</span>
                </div>
                <div className="text-xs italic text-black/80 mb-2">Web Developer and Graphic Designer | Gwalior, Madhya Pradesh</div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Delivered responsive and customized websites for 10+ local business clients, translating business requirements into functional and user-friendly digital experiences.</li>
                  <li>Completed graphic design and promotional projects for 20+ clients, creating posters, marketing creatives, and brand-focused visual content tailored to client requirements.</li>
                  <li>Partnered with 3 schools to design promotional campaigns and event creatives, supporting institutional events, student engagement, and outreach initiatives.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-[#1e1e1e] border-b border-black/20 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-4">
                {/* 1. Study Group Finder */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold flex items-center gap-1.5 flex-wrap">
                      <a href="https://sgfphoneix.vercel.app/" target="_blank" rel="noreferrer" className="text-[#1e1e1e] hover:text-[#e95420] underline flex items-center gap-1 font-bold">
                        Study Group Finder <ExternalLink className="w-3 h-3 text-[#e95420]" />
                      </a>
                      <span className="text-xs font-normal italic text-black/70">| React.js, Tailwind CSS, Firebase</span>
                    </span>
                    <span className="text-xs text-black/60 font-medium">Septempber 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 mt-1 leading-relaxed">
                    <li>Developed a full-stack student collaboration platform that enables users to discover and connect with study groups based on shared academic interests and learning goals.</li>
                    <li>Implemented secure user authentication, profile management, group discovery, and group creation workflows to streamline peer-to-peer academic collaboration.</li>
                    <li>Designed a responsive and intuitive user interface with reusable components, ensuring a consistent experience across desktop and mobile devices.</li>
                    <li>Integrated real-time cloud data management and authentication to support dynamic user profiles, group information, and scalable application workflows.</li>
                  </ul>
                </div>

                {/* 2. PathGen - Skills Roadmap Generator */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold flex items-center gap-1.5 flex-wrap">
                      <a href="https://ashritanshuman.github.io/skill-roadmap-generator/" target="_blank" rel="noreferrer" className="text-[#1e1e1e] hover:text-[#e95420] underline flex items-center gap-1 font-bold">
                        PathGen - Skills Roadmap Generator <ExternalLink className="w-3 h-3 text-[#e95420]" />
                      </a>
                      <span className="text-xs font-normal italic text-black/70">| HTML, Tailwind CSS, JavaScript</span>
                    </span>
                    <span className="text-xs text-black/60 font-medium">January 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 mt-1 leading-relaxed">
                    <li>Developed an AI-powered learning roadmap platform that generates structured and personalized learning paths based on users target skills and career roles. Structured learning journeys into progressive stages with curated resources and estimated learning timelines, enabling users to follow goal-oriented technical roadmaps.</li>
                    <li>Designed skill-based and role-based roadmap discovery for technologies and career paths including Python, React, Docker, DevOps, AI/ML Engineering, and Data Science.</li>
                    <li>Built a responsive, modern user interface with roadmap exploration, search functionality, dark/light theme support, and intuitive navigation across technical learning paths.</li>
                  </ul>
                </div>

                {/* 3. Skillora AI – AI-Powered Resume Builder */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold flex items-center gap-1.5 flex-wrap">
                      <a href="https://skilloraai.vercel.app/" target="_blank" rel="noreferrer" className="text-[#1e1e1e] hover:text-[#e95420] underline flex items-center gap-1 font-bold">
                        Skillora AI – AI-Powered Resume Builder <ExternalLink className="w-3 h-3 text-[#e95420]" />
                      </a>
                      <span className="text-xs font-normal italic text-black/70">| React.js, Tailwind CSS, OpenRouter AI API Integration</span>
                    </span>
                    <span className="text-xs text-black/60 font-medium">February 2026</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 mt-1 leading-relaxed">
                    <li>Developed an AI-powered resume-building platform that enables users to create structured and professional resumes through an intuitive, guided interface.</li>
                    <li>Implemented dynamic resume customization and real-time preview functionality, allowing users to efficiently edit and visualize resume content.</li>
                    <li>Integrated AI-assisted content generation to help users improve resume sections, refine descriptions, and create impactful, role-specific content.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership / Extracurricular */}
            <section>
              <h2 className="text-base font-bold uppercase tracking-wider text-[#1e1e1e] border-b border-black/20 pb-1 mb-2">
                Leadership / Extracurricular
              </h2>
              <div>
                <div className="flex justify-between items-baseline font-semibold">
                  <span>Smart India Hackathon</span>
                  <span className="text-xs text-black/60 font-normal">September 2025</span>
                </div>
                <div className="text-xs italic text-black/80 mb-1">Team Lead | ITM University Gwalior</div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Developed and deployed a digital Alumni Data Management and Engagement Platform, enabling centralized alumni records, networking, and institutional engagement.</li>
                  <li>Led a 6-member development team, coordinating task allocation, technical implementation, and project delivery within hackathon timelines.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

