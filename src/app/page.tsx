"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Cpu,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Layers,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/babatunde-afolabi-837596311/";
  const githubUrl = "https://github.com/ababatun";

  return (
    <div className="min-h-dvh flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Ambient Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-emerald-500 via-teal-500 to-blue-600 blur-[160px] rounded-full"
        />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/40 shadow-lg shadow-emerald-500/20"
            >
              <Image
                src="/profile.jpg"
                alt="Babatunde Afolabi"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
            <div>
              <span className="font-bold text-zinc-100 text-base tracking-tight block group-hover:text-emerald-400 transition-colors">
                Babatunde Afolabi
              </span>
              <span className="text-xs text-zinc-400 block font-mono">
                Process Technician • Limerick, Ireland
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#focus" className="hover:text-emerald-400 transition-colors">
              Focus Areas
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:bg-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-emerald-400" />
              LinkedIn Profile
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-emerald-400 font-medium"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-emerald-400 font-medium"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-emerald-400 font-medium"
            >
              Skills
            </a>
            <a
              href="#focus"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-emerald-400 font-medium"
            >
              Focus Areas
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-emerald-400 font-medium"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 relative z-10">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="pt-12 sm:pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
            >
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                AVAILABLE FOR OPPORTUNITIES • LIMERICK, IRELAND
              </div>

              {/* Main Professional Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-100 tracking-tight leading-[1.08]">
                Bridging Good Manufacturing Practice Precision with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                  Artificial Intelligence Driven Supply Chain
                </span>{" "}
                Resilience.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                Process Technician in medical device manufacturing and Master of Science in Supply Chain Management Candidate at the University of Limerick. Optimizing production workflows, ensuring strict Good Manufacturing Practice compliance, and deploying predictive analytics for medical technology.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contact Babatunde
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                  LinkedIn Profile
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-sm font-medium transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-400" />
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Right Profile Photo Column with Animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Pulsing Animated Aura */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 rounded-3xl blur-xl"
                />

                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative glass-card rounded-3xl p-4 sm:p-5 border border-zinc-700/80 bg-zinc-900/90 shadow-2xl"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-zinc-700/60 shadow-inner group">
                    <Image
                      src="/profile.jpg"
                      alt="Babatunde (Julius) Afolabi - Process Technician"
                      fill
                      className="object-cover object-center scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                    {/* Image Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 flex items-center justify-between shadow-lg">
                      <div>
                        <span className="font-bold text-zinc-100 text-sm block">
                          Babatunde Afolabi
                        </span>
                        <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Limerick, Ireland
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                        MSc
                      </div>
                    </div>
                  </div>

                  {/* Badges Below Photo */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-center">
                      <span className="text-zinc-400 block text-[10px]">FACILITY ROLE</span>
                      <span className="text-emerald-400 font-semibold block mt-0.5 truncate">
                        Process Technician
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-center">
                      <span className="text-zinc-400 block text-[10px]">UNIVERSITY</span>
                      <span className="text-zinc-200 font-semibold block mt-0.5 truncate">
                        University of Limerick
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                BACKGROUND &amp; PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
                Optimizing the intersection of manufacturing precision &amp; supply chain intelligence.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100">
                  Process Technician Excellence
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Deep hands-on experience operating medical device machinery. Expert in finding the exact space between written procedure standards and physical floor parameters.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100">
                  Master of Science Supply Chain Focus
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Pursuing advanced supply chain studies at the University of Limerick, applying artificial intelligence optimization and predictive analytics to build resilient medical technology logistics.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100">
                  Strict Compliance &amp; Quality Rigor
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Committed to continuous operation, rigorous compliance with medical quality standards, and rapid equipment troubleshooting to sustain seamless output.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-20 border-t border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience Column */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                    CAREER PATHWAY
                  </span>
                  <h2 className="text-3xl font-extrabold text-zinc-100">
                    Work Experience
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100">
                          Process Technician
                        </h3>
                        <p className="text-sm text-emerald-400 font-semibold">
                          Medical Device Manufacturing Facility
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-xs font-mono border border-zinc-800">
                        Limerick, Ireland
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-sm text-zinc-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>
                          Specializing in optimizing production workflows and sustaining seamless operations across medical device manufacturing equipment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>
                          Ensuring strict compliance with Good Manufacturing Practice protocols and medical quality standard operating procedures.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>
                          Troubleshooting mechanical and process parameter deviations to minimize downtime and maximize operational throughput.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Column */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                    ACADEMIC FOUNDATION
                  </span>
                  <h2 className="text-3xl font-extrabold text-zinc-100">
                    Education
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-100">
                            Master of Science in Supply Chain Management
                          </h3>
                          <p className="text-sm text-emerald-400 font-semibold">
                            University of Limerick
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">
                            Limerick Metropolitan Area, Ireland
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Focused on Artificial Intelligence Driven Supply Chain Optimization, Predictive Analytics, Inventory Resilience, and Logistics Precision within high value manufacturing and medical technology operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
                Skills &amp; Technical Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-100 text-base">
                  Process &amp; Operations
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Process Troubleshooting",
                    "Workflow Optimization",
                    "Equipment Parameters",
                    "Downtime Reduction",
                    "Yield Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-100 text-base">
                  Quality &amp; Compliance
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Good Manufacturing Practice",
                    "Medical Devices Standards",
                    "Standard Operating Procedures",
                    "Quality Assurance",
                    "Root Cause Analysis",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-100 text-base">
                  Supply Chain Intelligence
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Supply Chain Optimization",
                    "Predictive Analytics",
                    "Inventory Management",
                    "Supply Chain Resilience",
                    "Data Driven Decisions",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 4 */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-100 text-base">
                  Systems &amp; Leadership
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Manufacturing Systems",
                    "Artificial Intelligence Integration",
                    "Process Documentation",
                    "Cross Functional Teamwork",
                    "Continuous Improvement",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS / FEATURED PROJECTS */}
        <section id="focus" className="py-20 border-t border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                FEATURED WORK &amp; RESEARCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
                Specialized Projects &amp; Focus Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 border border-zinc-800 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    SUPPLY CHAIN &amp; ARTIFICIAL INTELLIGENCE
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">
                  Artificial Intelligence Driven Medical Technology Supply Chain Resilience
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Research into combining machine learning models with supply chain operational frameworks to predict material bottlenecks, optimize inventory holding costs, and enhance responsiveness in medical device delivery.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 border border-zinc-800 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    GOOD MANUFACTURING PRACTICE
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">
                  Floor Level Equipment Optimization
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Troubleshooting physical machine parameters against formal documentation. Finding practical parameter adjustments to ensure compliance while minimizing production outages and defect rates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-zinc-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 to-zinc-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
                    Let&apos;s connect and discuss Process &amp; Supply Chain opportunities.
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    I am actively seeking opportunities in Process Technology, Medical Device Manufacturing, and Supply Chain Optimization in Limerick and surrounding areas.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      Connect on LinkedIn
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-semibold text-sm transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-emerald-400" />
                      View GitHub Profile
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-5">
                    <h3 className="font-bold text-zinc-200 text-base">
                      Contact Information
                    </h3>

                    <div className="space-y-4 text-xs">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-zinc-400 block text-[11px]">LOCATION</span>
                          <span className="text-zinc-200 font-medium">Limerick Metropolitan Area, Ireland</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                        <div className="flex items-center gap-3">
                          <LinkedinIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <span className="text-zinc-400 block text-[11px]">LINKEDIN</span>
                            <span className="text-zinc-200 font-medium truncate max-w-[180px] block">
                              babatunde-afolabi-837596311
                            </span>
                          </div>
                        </div>
                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 text-xs font-semibold hover:underline"
                        >
                          Visit
                        </a>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                        <div className="flex items-center gap-3">
                          <GithubIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <span className="text-zinc-400 block text-[11px]">GITHUB</span>
                            <span className="text-zinc-200 font-medium">ababatun</span>
                          </div>
                        </div>
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 text-xs font-semibold hover:underline"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Babatunde (Julius) Afolabi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a href="#hero" className="hover:text-emerald-400 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
