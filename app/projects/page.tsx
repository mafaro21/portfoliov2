"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    ShieldCheck,
    X,
    ChevronLeft,
    ChevronRight,
    Home,
    Mail,
    CheckCircle2
} from "lucide-react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export interface Project {
    id: string;
    title: string;
    category: "professional" | "personal";
    link?: string;
    badge: string;
    description: string;
    features?: string;
    images: string[];
    techLogos?: string[];
    techTags?: string[];
}

export const PROJECTS_DATA: Project[] = [
    // ================= PROFESSIONAL PROJECTS =================
    {
        id: "symposium",
        title: "Zimbabwe-China Investment Symposium",
        category: "professional",
        link: "https://zimchinasymposium.com/",
        badge: "Fullstack",
        description: "A high-performance, enterprise event registration and management platform engineered for a premier national economic summit. Built to manage high-throughput delegate onboarding, automate C-suite RSVP workflows, and centralize logistical operations for over 400 international dignitaries and corporate executives at Golden Conifer.",
        features: "Automated digital delegate onboarding, real-time secure database queries, instant confirmation email pipelines, multi-device check-in layout, and concurrent multi-user load handling.",
        images: [
            "/projects/symposium.webp",
            "/projects/symposium2.webp",
            "/projects/symposium3.webp",
            "/projects/symposium4.webp"
        ],
        techLogos: [
            "/png/next.png",
            "/png/express.png",
            "/png/node.png",
            "/png/mysql.png"
        ]
    },
    {
        id: "privacycure",
        title: "Privacy Cure Platform",
        category: "professional",
        link: "https://privacycure.com",
        badge: "Fullstack",
        description: "An authoritative digital portal showcasing certified Data Protection Officer (DPO) consultancy services. Designed to guide enterprise clients through complex regulatory frameworks (CDPA & CDPR), streamlining compliance audits, employee training modules, and incident response readiness.",
        features: "Secure document download portal for regulatory frameworks (CDPA/CDPR), automated contact lead processing, multi-language support (English & Shona), and custom mailer pipelines.",
        images: [
            "/projects/privacycure.webp",
            "/projects/privacycure1.webp",
            "/projects/privacycure2.webp",
            "/projects/privacycure3.webp"
        ],
        techLogos: [
            "/png/html.png",
            "/png/css.png",
            "/png/node.png",
            "/png/python.png"
        ]
    },

    // ================= PERSONAL PROJECTS =================
    {
        id: "beak",
        title: "Beak (Twitclone v2)",
        category: "personal",
        badge: "Frontend / Social Platform",
        description: "A high-performance evolution of Twitclone built with modern web standards. Features a streamlined UI inspired by X, paired with a Go backend architecture for rapid data processing and state management.",
        features: "Real-time social interactions (tweets, reposts, likes, follow graph), global state management with Zustand, and high-concurrency Go microservice API.",
        images: [
            "/projects/beak1.webp",
            "/projects/beak2.webp",
            "/projects/beak3.webp",
            "/projects/beak4.webp",
            "/projects/beak5.webp"
        ],
        techLogos: [
            "/png/next.png",
            "/png/tailwind.png",
            "/png/zustand.png",
            "/png/go.png"
        ]
    },
    {
        id: "twitclone",
        title: "Twitclone",
        category: "personal",
        link: "https://twitclone.netlify.app",
        badge: "Frontend/ Social Platform",
        description: "A full-featured social networking application mirroring Twitter's core architecture. Engineered to deliver real-time social feeds, state synchronization across user profiles, and seamless content sharing.",
        features: "Real-time user engagement (tweets, retweets, likes, follow/unfollow graph), dynamic feed updates, and document-based data indexing.",
        images: [
            "/projects/twitclone.webp",
            "/projects/twit2.webp",
            "/projects/twit3.webp",
            "/projects/twit4.webp"
        ],
        techLogos: [
            "/png/react.png",
            "/png/express.png",
            "/png/node.png",
            "/png/mongodb.png"
        ]
    },
    {
        id: "real-estate",
        title: "Real Estate Ecosystem",
        category: "personal",
        badge: "Fullstack/ E-Commerce",
        description: "A comprehensive real estate marketplace connecting property seekers with agents. Built to streamline property discovery across residential and commercial listings with integrated booking workflows.",
        features: "Interactive property search, inquiry cart system, direct agent messaging, public review threads, and Stripe payment integration.",
        images: [
            "/projects/real1.webp",
            "/projects/real2.webp",
            "/projects/real3.webp",
            "/projects/real4.webp"
        ],
        techLogos: [
            "/png/html.png",
            "/png/css.png",
            "/png/php.png",
            "/png/mysql.png",
            "/png/stripe.png"
        ]
    },
    {
        id: "filesort",
        title: "FileSort Utility",
        category: "personal",
        badge: "Automation CLI",
        description: "An automated file organization utility designed to declutter storage environments. Intelligently scans directory trees and sorts media and document assets based on file signatures and properties.",
        features: "Automated extension-based file routing, intelligent video sorting based on aspect ratio/orientation, and zero-dependency execution.",
        images: [
            "/projects/py.webp"
        ],
        techLogos: [
            "/png/python.png",
        ],
    },
    // {
    //     id: "nssa",
    //     title: "NSSA Dataset Consolidator",
    //     category: "personal",
    //     badge: "Data Backend",
    //     description: "A high-precision data reconciliation engine built to automate Excel spreadsheet comparisons. Parses complex financial or employee datasets, isolates discrepancies, and generates audit-ready delta reports.",
    //     features: "Automated multi-file diffing, programmatic cell reconciliation, and instant structured Excel export generation.",
    //     images: [
    //         "/projects/nssa.webp"
    //     ],
    //     techTags: ["Express.js", "Node.js", "Excel ETL", "Data Reconciliation"]
    // },
    // {
    //     id: "solexchange",
    //     title: "soleXchange Store",
    //     category: "personal",
    //     badge: "E-Commerce",
    //     description: "A sleek e-commerce storefront crafted for retail footwear. Designed with a focus on fluid category browsing, persistent state management, and optimized checkout UX.",
    //     features: "Centralized Redux shopping cart, dynamic category filtering, relational product catalog structure, and checkout pipeline.",
    //     images: [
    //         "/projects/sole.webp"
    //     ],
    //     techTags: ["React", "Redux", "Express.js", "Node.js", "PostgreSQL"]
    // },
    // {
    //     id: "employee-self-service",
    //     title: "Employee Self Service Portal",
    //     category: "personal",
    //     badge: "Enterprise HR",
    //     description: "An internal HR portal providing staff with direct management of administrative workflows. Centralizes payroll access, leave management, and organizational communications into a single dashboard.",
    //     features: "Digital leave and loan application workflows, automated pay slip viewer, and role-based administrative permissions.",
    //     images: [
    //         "/projects/ess.webp"
    //     ],
    //     techTags: ["React", "Redux", "Express.js", "Node.js", "MySQL"]
    // },
    {
        id: "helpdesk",
        title: "Enterprise HelpDesk System",
        category: "personal",
        badge: "Fullstack/ Internal Tooling",
        description: "An internal ticketing system designed to optimize IT support operations. Enables structured ticket submission, priority queue management, and real-time status tracking between staff and IT teams.",
        features: "Automated ticket logging and assignment, priority status tracking, and central admin resolution dashboard.",
        images: [
            "/projects/help.webp"
        ],
        techLogos: [
            "/png/react.png",
            "/png/zustand.png",
            "/png/express.png",
            "/png/node.png",
            "/png/mysql.png",
        ]
    },
    // {
    //     id: "wedemy",
    //     title: "Wedemy E-Learning",
    //     category: "personal",
    //     badge: "EdTech",
    //     description: "An online learning portal modeled after Udemy. Engineered with Vue.js and TypeScript to deliver clean video course navigation and student progress management.",
    //     features: "Modular video lesson player, course enrollment tracking, and structured curriculum navigation.",
    //     images: [
    //         "/projects/wedemy.webp"
    //     ],
    //     techTags: ["Vue.js", "TypeScript", "Frontend Architecture"]
    // }
];

export default function ProjectsPage() {
    const [filter, setFilter] = useState<"all" | "professional" | "personal">("all");
    const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const filteredProjects = PROJECTS_DATA.filter((p) => {
        if (filter === "all") return true;
        return p.category === filter;
    });

    const openCarousel = (project: Project, initialIndex = 0) => {
        setActiveModalProject(project);
        setActiveImageIndex(initialIndex);
    };

    const closeCarousel = () => {
        setActiveModalProject(null);
        setActiveImageIndex(0);
    };

    const nextImage = () => {
        if (!activeModalProject) return;
        setActiveImageIndex((prev) => (prev + 1) % activeModalProject.images.length);
    };

    const prevImage = () => {
        if (!activeModalProject) return;
        setActiveImageIndex((prev) =>
            prev === 0 ? activeModalProject.images.length - 1 : prev - 1
        );
    };

    // Keyboard navigation for image carousel
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!activeModalProject) return;
            if (e.key === "Escape") closeCarousel();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeModalProject]);

    return (
        <div className="min-h-screen bg-brand-nude flex justify-center p-3 sm:p-6 lg:p-8 font-sans selection:bg-brand-terracotta selection:text-white relative pb-28">
            {/* Outer Shell */}
            <div className="bg-brand-espresso max-w-8xl w-full text-dark-text rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-brand-terracotta/20 space-y-12">

                {/* Ambient Glow */}
                <div
                    className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
                    style={{ background: "var(--brand-terracotta)" }}
                />

                {/* Header */}
                <header className="space-y-6 border-b border-dark-border/50 pb-8">
                    <div className="flex items-center justify-between">


                        <span className="text-xs font-mono text-brand-nude px-3 py-1 rounded-full ">
                            <Link href="/" className="flex items-right gap-3 group">
                                <img
                                    src="/logo.png"
                                    alt="Mafaro Logo"
                                    className="h-10 w-auto group-hover:rotate-6 transition-transform duration-300"
                                />
                            </Link>
                        </span>
                    </div>

                    <div className="space-y-2 pt-2">
                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-dark-text uppercase">
                            Selected Projects
                        </h1>
                        <p className="text-sm sm:text-base text-dark-muted max-w-2xl leading-relaxed">
                            A detailed collection of professional client deployments and personal engineering experiments. Click on any project preview to inspect screenshots.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 pt-4">
                        {(["all", "professional", "personal"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-4 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${filter === tab
                                    ? "bg-brand-terracotta text-white shadow-md"
                                    : "bg-dark-card border border-dark-border text-dark-muted hover:text-dark-text"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Project Grid */}
                <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-2xl bg-dark-card border border-dark-border overflow-hidden hover:border-brand-nude/50 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Clickable Image Thumbnail */}
                                    <div
                                        onClick={() => openCarousel(project)}
                                        className="aspect-[16/9] bg-dark-bg/80 relative overflow-hidden border-b border-dark-border cursor-pointer group/img"
                                    >
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-xs font-mono text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                                                View Gallery ({project.images.length})
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="text-lg font-bold text-dark-text group-hover:text-brand-nude transition-colors flex items-center gap-2">
                                                {project.link ? (
                                                    <Link
                                                        href={project.link}
                                                        target="_blank"
                                                        className="hover:underline flex items-center gap-1.5"
                                                    >
                                                        <span>{project.title}</span>
                                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-nude shrink-0" />
                                                    </Link>
                                                ) : (
                                                    <span>{project.title}</span>
                                                )}
                                            </h3>
                                            <span className="text-xs font-mono text-brand-nude bg-brand-nude/10 px-2.5 py-0.5 rounded-full border border-brand-nude/20 shrink-0">
                                                {project.badge}
                                            </span>
                                        </div>

                                        <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                                            {project.description}
                                        </p>

                                        {project.features && (
                                            <div className="pt-2 border-t border-dark-border/40 space-y-1">
                                                <p className="text-[11px] font-mono text-brand-nude flex items-center gap-1 uppercase tracking-wider">
                                                    <CheckCircle2 className="w-3 h-3 text-brand-terracotta" /> Key Features
                                                </p>
                                                <p className="text-xs text-dark-muted/90 italic">
                                                    {project.features}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Tech Logos / Tags at bottom */}
                                <div className="p-6 pt-0">
                                    {project.techLogos ? (
                                        <div className="flex items-center gap-3 font-mono text-xs text-dark-muted pt-3 border-t border-dark-border/40">
                                            {project.techLogos.map((logo, idx) => (
                                                <img key={idx} src={logo} className="h-8 w-auto object-contain" alt="tech logo" />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap gap-2 pt-3 font-mono text-xs text-dark-muted border-t border-dark-border/40">
                                            {project.techTags?.map((tag, idx) => (
                                                <span key={idx} className="px-2.5 py-1 rounded bg-dark-bg border border-dark-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </main>

                {/* Compliance Footer Note */}
                <div className="p-6 rounded-2xl bg-dark-card/50 border border-dark-border flex justify-center items-center gap-4 w-3/4 mx-auto">
                    <ShieldCheck className="w-6 h-6 text-brand-nude shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-dark-text">Data Privacy & Security Guaranteed</h4>
                        <p className="text-xs text-dark-muted leading-relaxed">
                            Every production system is deployed with privacy compliance, strict access controls, and security standards built into the core architecture.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="pt-6 border-t border-dark-border/60 flex items-center justify-between text-xs text-dark-muted">
                    <p>© {new Date().getFullYear()} Mafaro Mushonga.</p>
                </footer>

            </div>

            {/* ================= LIGHTBOX IMAGE CAROUSEL MODAL ================= */}
            <AnimatePresence>
                {activeModalProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-4"
                        onClick={closeCarousel}
                    >
                        <div
                            className="relative max-w-6xl w-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Top Bar */}
                            <div className="flex items-center justify-between pb-3 border-b border-dark-border">
                                <div>
                                    <h3 className="text-base font-bold text-dark-text">{activeModalProject.title}</h3>
                                    <p className="text-xs font-mono text-brand-nude">
                                        Image {activeImageIndex + 1} of {activeModalProject.images.length}
                                    </p>
                                </div>
                                <button
                                    onClick={closeCarousel}
                                    className="p-2 rounded-full bg-dark-bg hover:bg-brand-espresso text-dark-text transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Image Viewport */}
                            <div className="relative aspect-[16/9] w-full bg-black/60 rounded-xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={activeModalProject.images[activeImageIndex]}
                                    alt={`${activeModalProject.title} preview`}
                                    className="w-full h-full object-contain"
                                />

                                {/* Navigation Buttons */}
                                {activeModalProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-brand-terracotta transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-brand-terracotta transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= FLOATING PILL NAVBAR ================= */}
            <motion.nav
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="fixed bottom-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card/90 backdrop-blur-md border border-brand-terracotta/30 shadow-2xl text-dark-text"
            >
                <div className="flex items-center gap-1.5 border-r border-dark-muted pr-3">
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
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded-full hover:bg-blue-300 hover:text-blue-800 transition-colors"
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
                        {/* <span>WhatsApp</span> */}
                    </a>
                </div>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-md font-mono text-white hover:text-brand-nude transition-colors px-2 py-1 rounded-full hover:bg-brand-espresso"
                >
                    <span>Home</span>
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