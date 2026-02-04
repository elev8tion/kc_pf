"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import LiquidGlass from "@/components/LiquidGlass";
import MidnightMist from "@/components/MidnightMist";
import GyroTiltImage from "@/components/GyroTiltImage";
import LiquidMorphLogo from "@/components/LiquidMorphLogo";

export default function Home() {
  const router = useRouter();
  const projects = [
    {
      title: "AI SMB Partners",
      description: "Comprehensive landing page for AI automation platform targeting SMBs with ROI calculator and industry-specific use cases",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "UI/UX"],
      features: ["Interactive ROI calculator", "Industry filters", "WCAG 2.1 AA compliant"],
      link: "https://ai-smb-partners.netlify.app", // Update this after deployment
      image: "/images/ai-smb-partners.png",
    },
    {
      title: "Everyday Christian",
      description: "Privacy-first Christian PWA with AI pastoral guidance, 31,103 Bible verses, prayer journal, devotionals, and crisis intervention. Built with Flutter and Cloudflare Workers backend.",
      tags: ["Flutter", "Cloudflare Workers", "Gemini API", "Stripe", "PWA"],
      features: ["31,103 Bible verses (offline)", "AI pastoral chat (150 msgs/month)", "Prayer journal & devotionals", "Cloudflare Workers backend", "Crisis detection safeguards"],
      link: "https://everydaychristian.app",
      image: "/images/everyday-christian/app-mockup.png",
    },
    {
      title: "Blocky - Multi-Language Code Composer",
      description: "Visual no-code platform for extracting reusable code blocks from production codebases with MCP integration. Supports React/TypeScript, FastAPI/Python, and Flutter/Dart projects with intelligent AST parsing and block composition.",
      tags: ["TypeScript", "Python", "Dart", "MCP", "Code Extraction", "Visual Composer"],
      features: ["Multi-language extractors (React/Node, FastAPI, Flutter)", "Visual canvas for block composition", "MCP integration for AI-assisted workflows", "JSON manifest system with schema validation", "Real-time project extraction from UI"],
      link: "https://blockydem.netlify.app",
      image: "/images/blocky-ui.png",
    },
  ];

  const skills = {
    "Frontend & Web": ["React", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA"],
    "Mobile Development": ["Flutter", "Dart", "iOS", "Android", "Offline-First Apps"],
    "Backend & APIs": ["Node.js", "FastAPI", "Python", "Cloudflare Workers", "REST APIs"],
    "AI & LLM": ["Gemini API", "Claude API", "MCP Protocol", "LLM Integration", "AI Workflows"],
    "DevOps & Cloud": ["Firebase", "Netlify", "Vercel", "AWS", "GCP", "Cloudflare"],
    "Tools & Systems": ["Git", "AST Parsing", "Code Extraction", "Stripe Integration", "Schema Validation"],
  };

  return (
    <>
      <Script src="https://app.mymeet.io/js/embed-website.js" strategy="lazyOnload" />
      <main className="relative min-h-screen w-full">
        <MidnightMist />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-0">
          <motion.div
            className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left: Text Content */}
            <div className="space-y-6">
              <LiquidMorphLogo
                src="/logos/dark_mode_brand.svg"
                alt="elev8tion"
                width={300}
                height={90}
                className="mb-6"
              />

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Full-Stack Developer
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI Engineer
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-white/70 max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Building intelligent solutions with Flutter, React, and cutting-edge AI/ML technologies.
                Specialized in on-device AI and cloud architecture.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <LiquidGlass onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  <div className="px-6 sm:px-8 py-3 sm:py-4 text-center sm:text-left">
                    <span className="font-semibold text-base sm:text-lg text-white">View Projects</span>
                  </div>
                </LiquidGlass>
                <LiquidGlass onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  <div className="px-6 sm:px-8 py-3 sm:py-4 text-center sm:text-left">
                    <span className="font-semibold text-base sm:text-lg text-white">Contact Me</span>
                  </div>
                </LiquidGlass>
              </motion.div>
            </div>

            {/* Right: Professional Photo with Gyroscope Tilt & Liquid Morph */}
            <div className="flex justify-center">
              <GyroTiltImage
                src="/images/profile.png"
                alt="Professional Photo"
                className="w-full"
                maxWidth="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-lg sm:text-xl text-white/60">Building the future with AI and modern frameworks</p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <LiquidGlass className="h-full">
                    <div className="p-8 flex flex-col h-full">
                      {project.image && (
                        <div className="mb-6 -mx-8 -mt-8 overflow-hidden bg-slate-900/30">
                          <div className="relative w-full aspect-[4/3] group">
                            <Image
                              src={project.image}
                              alt={`${project.title} app screenshot`}
                              fill
                              className="object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/30 pointer-events-none" />
                          </div>
                        </div>
                      )}

                      <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 mb-4 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                            <span className="text-indigo-400">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {project.link && (
                        <div className="mt-auto pt-4">
                          <LiquidGlass onClick={() => {
                            if (project.link.startsWith('/')) {
                              router.push(project.link);
                            } else {
                              window.open(project.link, '_blank');
                            }
                          }}>
                            <div className="px-6 py-2 text-center">
                              <span className="font-semibold text-sm text-white">View Live Project →</span>
                            </div>
                          </LiquidGlass>
                        </div>
                      )}
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-lg sm:text-xl text-white/60">Tools I use to bring ideas to life</p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <LiquidGlass>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {items.map((skill) => (
                          <div key={skill} className="px-4 py-2 rounded-[16px] bg-white/5 border border-white/10 text-white/80 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
              <p className="text-lg sm:text-xl text-white/60 px-4 sm:px-0">Ready to elevate your project with cutting-edge technology?</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <LiquidGlass>
                  <div className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                      <p className="text-white/60 mb-6">Let's discuss your project</p>
                    </div>
                    <a
                      href="mailto:connect@elev8tion.one"
                      className="inline-block px-8 py-4 rounded-[16px] bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 font-semibold"
                    >
                      connect@elev8tion.one
                    </a>
                  </div>
                </LiquidGlass>
              </motion.div>

              {/* MyMeet Booking Widget */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <LiquidGlass>
                  <div className="p-8">
                    <div className="mb-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Schedule a Meeting</h3>
                      <p className="text-white/60 mb-6">Book a time that works for you</p>
                    </div>
                    <div className="mymeet-embed" data-username="kcei"></div>
                  </div>
                </LiquidGlass>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
