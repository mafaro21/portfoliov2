"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Terminal,
  Database,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

// Fade-in animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.215, 0.61, 0.355, 1] as const, // Fixes type inference
    },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-nude flex justify-center p-3 sm:p-6 lg:p-8 font-sans selection:bg-brand-terracotta selection:text-white relative pb-28">
      {/* Main Container */}
      <div className="bg-brand-espresso max-w-8xl w-full text-dark-text rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-brand-terracotta/20 space-y-20">

        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
          style={{ background: "var(--brand-terracotta)" }}
        />

        {/* ================= HEADER & HERO ================= */}
        <header className="space-y-10 border-b border-dark-border/50 pb-12">

          {/* Top Brand Bar */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {/* <img
                src="/logo.png"
                alt="Mafaro Logo"
                className="h-10 w-auto hover:rotate-6 transition-transform duration-300"
              /> */}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ">
              <img
                src="/logo.png"
                alt="Mafaro Logo"
                className="h-10 w-auto hover:rotate-6 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Craft-Focused Name Typography */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-4 space-y-4"
          >

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-dark-text leading-[0.9] uppercase">
              Mafaro Mushonga
            </h1>
          </motion.div>

          {/* Concise Bio */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-base sm:text-xl text-dark-muted max-w-3xl leading-relaxed font-normal"
          >
            Building high-speed Next.js web platforms, clean Node/Python backends, and reliable data pipelines. Focused on responsive UI craftsmanship, privacy compliance, and fast performance.
          </motion.p>

          {/* Stack Badges */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-3 pt-2"
          >
            <p className="text-xs font-mono text-brand-nude uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-mono text-dark-text">
              {[
                "TypeScript",
                "Next.js & React",
                "Node.js",
                "Python",
                "SQL",
                "Tailwind CSS"
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-dark-card border border-dark-border hover:border-brand-nude/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </header>

        {/* ================= SHOWCASE / PROJECTS ================= */}
        <main className="space-y-12">

          <div className="flex items-center justify-between border-b border-dark-border/40 pb-4">
            <h2 className="text-2xl font-bold text-dark-text tracking-tight">Featured Projects</h2>
            {/* <span className="text-xs font-mono text-brand-nude">Recent Work</span> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-dark-card border border-dark-border overflow-hidden hover:border-brand-nude/50 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-dark-bg/80 relative overflow-hidden border-b border-dark-border">
                <img
                  src="/projects/symposium.webp"
                  alt="Next.js Platform Build"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-dark-text group-hover:text-brand-nude group-hover:underline transition-colors flex items-center gap-2">
                    <Link href={'https://zimchinasymposium.com'} target="_blank">Zimbabwe-China Investment Symposium</Link>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:underline transition-opacity text-brand-nude" />
                  </h3>
                  <span className="text-xs font-mono text-brand-nude bg-brand-nude/10 px-2.5 py-0.5 rounded-full border border-brand-nude/20">
                    Fullstack
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                  Zimbabwe-China Investment Symposium is a high-performance, secure event registration and management platform built for a major national economic summit.
                  The system was engineered to handle high-traffic delegate onboarding, automate executive RSVP tracking, and streamline logistical data management for over 400 high-profile corporate and international attendees at Golden Conifer.
                </p>
                <div className="flex items-center gap-3 pt-1 font-mono text-xs text-dark-muted">
                  <img src={"/png/next.png"} className="h-8" />
                  <img src={"/png/tailwind.png"} className="h-8" />
                  <img src={"/png/node.png"} className="h-8" />
                  <img src={"/png/express.png"} className="h-8" />
                  <img src={"/png/mysql.png"} className="h-8" />
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-dark-card border border-dark-border overflow-hidden hover:border-brand-terracotta/50 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-dark-bg/80 relative overflow-hidden border-b border-dark-border">
                <img
                  src="/projects/privacycure.webp"
                  alt="Data Pipeline System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-dark-text group-hover:text-brand-nude group-hover:underline transition-colors flex items-center gap-2">
                    <Link href={'https://privacycure.com'} target="_blank">Privacy Cure</Link>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-nude" />
                  </h3>
                  <span className="text-xs font-mono text-brand-nude bg-brand-nude/10 px-2.5 py-0.5 rounded-full border border-brand-nude/20">
                    Fullstack
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                  Privacy Cure is an informational web platform designed to showcase the Data Protection Officer (DPO) services offered. It provides a clear and concise overview of the company's expertise in data compliance, including CDPA assessment, employee training, and breach response. The site is tailored to help businesses understand their obligations under regulations like CDPA and CDPR, ensuring they stay compliant while protecting customer trust.
                </p>
                <div className="flex items-center gap-3 pt-1 font-mono text-xs text-dark-muted">
                  <img src={"/png/html.png"} className="h-8" />
                  <img src={"/png/css.png"} className="h-8" />
                  <img src={"/png/node.png"} className="h-8" />
                  <img src={"/png/python.png"} className="h-8" />

                </div>
              </div>
            </motion.div>

          </div>

          {/* Compliance Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-dark-card/50 border border-dark-border flex justify-center items-center gap-4 w-3/4 mx-auto"
          >
            <ShieldCheck className="w-6 h-6 text-brand-nude shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-dark-text">Data Protection & Privacy Standards</h4>
              <p className="text-xs text-dark-muted leading-relaxed">
                POTRAZ Data Protection Certified. Every web application and backend system is built with data privacy compliance and security standards in mind.
              </p>
            </div>
          </motion.div>

        </main>

        {/* Footer */}
        <footer className="pt-6 border-t border-dark-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted">
          <p className="">© {new Date().getFullYear()} Mafaro Mushonga.</p>
          {/* <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-dark-text transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-dark-text transition-colors">LinkedIn</a>
            <a href="mailto:your-email@example.com" className="hover:text-dark-text transition-colors">Email</a>
          </div> */}
        </footer>

      </div>

      {/* ================= FLOATING PILL NAVBAR ================= */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card/90 backdrop-blur-md border border-brand-terracotta/30 shadow-2xl text-dark-text"
      >
        <div className="flex items-center gap-1 border-r border-dark-border pr-3">
          <a
            href="https://github.com/mafaro21"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-gray-300 hover:text-gray-800 transition-colors"
          >
            <BsGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mafaro-mushonga-b8a68a231"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-blue-300 hover:text-blue-800 tranBstion-colors"
          >
            <BsLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mafaro2105@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-brand-espresso hover:text-brand-nude transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/263781926018?text=Hi%20Mafaro,%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:brightness-110 transition-all shadow-md shrink-0"
          >
            <BsWhatsapp className="w-6 h-6" />
          </a>
        </div>

        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-md font-mono text-white hover:text-brand-nude transition-colors px-2 py-1 rounded-full hover:bg-brand-espresso"
        >
          <span>Projects</span>
        </Link>
        <Link
          href="/showcase"
          className="flex items-center gap-2 text-md font-mono text-white hover:text-brand-nude transition-colors px-2 py-1 rounded-full hover:bg-brand-espresso"
        >
          <span>Showcase</span>
        </Link>
      </motion.nav>

    </div>
  );
}