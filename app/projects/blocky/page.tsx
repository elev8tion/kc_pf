"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LiquidGlass from "@/components/LiquidGlass";
import {
  Code2,
  Boxes,
  Workflow,
  Zap,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  Terminal,
  FileJson,
  Sparkles
} from "lucide-react";

export default function BlockyPage() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Multi-Language Extraction",
      description: "Extract reusable code blocks from React/TypeScript, FastAPI/Python, and Flutter/Dart projects with intelligent AST parsing.",
      tags: ["React/Node", "FastAPI", "Flutter/Dart"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Visual Canvas Composition",
      description: "No-code visual interface for wiring blocks together, creating complex workflows, and exporting composition graphs.",
      tags: ["Drag & Drop", "Real-time", "Export JSON"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "MCP Integration",
      description: "Model Context Protocol integration enables AI-assisted workflows, intelligent block suggestions, and automated conversions.",
      tags: ["AI-Powered", "Claude Integration", "Smart Suggestions"]
    },
    {
      icon: <FileJson className="w-8 h-8" />,
      title: "JSON Manifest System",
      description: "Standardized block manifests with schema validation ensure consistency across all extracted code blocks.",
      tags: ["Schema Validation", "Type-Safe", "Consistent"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Extraction",
      description: "Extract projects directly from the UI with instant feedback, live preview, and automatic registry updates.",
      tags: ["Live Updates", "Fast", "Seamless"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Block Registry",
      description: "Centralized registry of all extracted blocks with search, filtering, and intelligent categorization.",
      tags: ["Searchable", "Organized", "Reusable"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React 18", "TypeScript", "Vite", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Extractors",
      technologies: ["TypeScript (React/Node)", "Python (FastAPI)", "Dart (Flutter)"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Integration",
      technologies: ["MCP Protocol", "JSON Schema", "AST Parsing", "Node.js Backend"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const workflow = [
    {
      number: "01",
      title: "Extract",
      description: "Run extractors on your React, FastAPI, or Flutter projects to mine reusable code blocks with intelligent AST parsing."
    },
    {
      number: "02",
      title: "Compose",
      description: "Use the visual canvas to wire blocks together, create dependencies, and build complex workflows without writing code."
    },
    {
      number: "03",
      title: "Deploy",
      description: "Export graph JSON, integrate with your workflow, or use MCP integration for AI-assisted development."
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
              <Terminal className="w-5 h-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
            <a
              href="https://github.com/elev8tion/blocky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <Boxes className="w-4 h-4" />
                <span className="text-sm font-medium">Multi-Language Code Composer</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Blocky
              </h1>

              <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                Visual no-code platform for extracting reusable code blocks from production codebases with{" "}
                <span className="text-blue-400 font-semibold">MCP integration</span>
              </p>

              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                  React/TypeScript
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                  FastAPI/Python
                </span>
                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium">
                  Flutter/Dart
                </span>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-6xl mx-auto"
            >
              <LiquidGlass className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/images/blocky-ui.png"
                    alt="Blocky Composer Visual Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </LiquidGlass>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                <LiquidGlass>
                  <div className="px-6 py-3 text-center">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-sm text-blue-300">Languages</div>
                  </div>
                </LiquidGlass>
                <LiquidGlass>
                  <div className="px-6 py-3 text-center">
                    <div className="text-2xl font-bold text-white">MCP</div>
                    <div className="text-sm text-blue-300">Integrated</div>
                  </div>
                </LiquidGlass>
                <LiquidGlass>
                  <div className="px-6 py-3 text-center">
                    <div className="text-2xl font-bold text-white">Visual</div>
                    <div className="text-sm text-blue-300">Canvas</div>
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Everything you need to extract, compose, and manage reusable code blocks
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LiquidGlass className="h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-blue-400 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-blue-200 mb-4 flex-grow">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Three simple steps to transform your codebase into reusable blocks
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <LiquidGlass className="h-full">
                    <div className="p-8 text-center">
                      <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-blue-200">
                        {step.description}
                      </p>
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tech Stack
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Built with modern technologies for performance and reliability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LiquidGlass className="h-full">
                    <div className="p-6">
                      <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${stack.color} text-white font-semibold mb-4`}>
                        {stack.category}
                      </div>
                      <ul className="space-y-2">
                        {stack.technologies.map((tech) => (
                          <li key={tech} className="flex items-center gap-2 text-blue-200">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </LiquidGlass>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LiquidGlass>
                <div className="p-12 text-center">
                  <Github className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                    Explore the codebase, contribute, or start extracting blocks from your projects today.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="https://github.com/elev8tion/blocky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all"
                    >
                      <Terminal className="w-5 h-5" />
                      Back to Portfolio
                    </Link>
                  </div>
                </div>
              </LiquidGlass>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-blue-300">
            <p>Built with Next.js, TypeScript, and Framer Motion</p>
            <p className="text-sm text-blue-400 mt-2">© 2025 KC Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
