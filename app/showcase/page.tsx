"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Home,
    Mail,
    Monitor,
    Smartphone,
    Eye,
    X,
    ChevronLeft,
    ChevronRight,
    QrCode,
    SmartphoneCharging
} from "lucide-react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export interface ShowcaseSite {
    id: string;
    title: string;
    category: string;
    description: string;
    link?: string; // Optional so mobile-only apps don't break
    isMobileOnly?: boolean;
    image: string;
    images?: string[]; // Multiple screenshots for mobile app lightboxes
    aspectRatio: string;
    accentColor: string;
    tags: string[];
}

export const SHOWCASE_SITES: ShowcaseSite[] = [
    {
        id: "apple-store",
        title: "Apple Store Concept",
        category: "E-Commerce UI",
        description: "Minimalist retail interface featuring dark glassmorphism, fluid product cards, and smooth checkout flows.",
        link: "https://iclik-website.vercel.app/",
        image: "/showcase/apple.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-neutral-700/20 to-neutral-900/10",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        id: "pay-app",
        title: "SwiftPay Wallet",
        category: "Fintech Mobile App",
        description: "Native-inspired mobile payment app with QR checkout, instant P2P transfers, and real-time transaction analytics.",
        isMobileOnly: true,
        image: "/showcase/pay-app-1.webp",
        images: [
            "/showcase/pay-app-1.webp",
            "/showcase/pay-app-2.webp",
            "/showcase/pay-app-3.webp"
        ],
        aspectRatio: "aspect-[9/16]",
        accentColor: "from-emerald-500/20 to-teal-700/10",
        tags: ["React Native", "Tailwind CSS", "Mobile UX"]
    },
    {
        id: "appliances",
        title: "Apex Home Appliances",
        category: "Retail & E-Commerce",
        description: "Sleek storefront featuring interactive 360° product views, spec comparison tables, and automated warranty booking.",
        link: "https://appliances-demo.vercel.app",
        image: "/showcase/appliances.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-cyan-500/20 to-blue-700/10",
        tags: ["Next.js", "Tailwind CSS", "Zustand"]
    },
    {
        id: "executive-lounge",
        title: "Executive Lounge",
        category: "Hospitality & VIP",
        description: "Sophisticated booking portal for private airport lounges with real-time suite reservations and concierge scheduling.",
        link: "https://executive-lounge-website.vercel.app/",
        image: "/showcase/lounge.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-amber-500/20 to-orange-600/10",
        tags: ["React", "Tailwind CSS", "UI Design"]
    },
    {
        id: "consulting",
        title: "Enterprise Consulting",
        category: "Corporate UI",
        description: "High-converting corporate landing page tailored for advisory firms, featuring clean typography and lead capture.",
        link: "https://bm-consulting-website.vercel.app/",
        image: "/showcase/consulting.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-blue-500/20 to-indigo-600/10",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        category: "Industrial UI",
        description: "Bold, modern portfolio design for heavy infrastructure projects with interactive showcases and equipment specs.",
        link: "https://triad-construction-website.vercel.app/",
        image: "/showcase/construction.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-emerald-500/20 to-teal-600/10",
        tags: ["React", "Tailwind CSS"]
    },
    {
        id: "loan-shark",
        title: "Micro-Lending Platform",
        category: "Fintech UI",
        description: "High-contrast financial portal featuring loan repayment calculators, credit sliders, and instant quote engines.",
        link: "https://swift-choice-finance.vercel.app/",
        image: "/showcase/loans.png",
        aspectRatio: "aspect-[16/9]",
        accentColor: "from-purple-500/20 to-pink-600/10",
        tags: ["Next.js", "Tailwind CSS", "Interactive UI"]
    },
    // {
    //     id: "catering",
    //     title: "Artisanal Catering Co.",
    //     category: "Food & Events UI",
    //     description: "Elegantly styled event menu builder, guest count estimation tools, and dietary customization scheduling.",
    //     link: "https://catering-co.vercel.app",
    //     image: "/showcase/catering.webp",
    //     aspectRatio: "aspect-[16/9]",
    //     accentColor: "from-terracotta/20 to-amber-700/10",
    //     tags: ["React", "Tailwind CSS"]
    // }
];

export default function ShowcasePage() {
    const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
    const [activeModalSite, setActiveModalSite] = useState<ShowcaseSite | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const openModal = (site: ShowcaseSite) => {
        if (site.isMobileOnly && site.images) {
            setActiveModalSite(site);
            setActiveImageIndex(0);
        }
    };

    const closeModal = () => {
        setActiveModalSite(null);
        setActiveImageIndex(0);
    };

    const nextImage = () => {
        if (!activeModalSite?.images) return;
        setActiveImageIndex((prev) => (prev + 1) % activeModalSite.images!.length);
    };

    const prevImage = () => {
        if (!activeModalSite?.images) return;
        setActiveImageIndex((prev) =>
            prev === 0 ? activeModalSite.images!.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!activeModalSite) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeModalSite]);

    return (
        <div className="min-h-screen bg-brand-nude flex flex-col items-center p-4 sm:p-8 lg:p-12 font-sans selection:bg-brand-terracotta selection:text-white relative pb-32">
            {/* Background Decor */}
            <div
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none opacity-20 blur-3xl -z-10"
                style={{ background: "radial-gradient(circle, var(--brand-terracotta) 0%, transparent 70%)" }}
            />

            {/* Main Container */}
            <div className="max-w-7xl w-full space-y-12">
                {/* Header Section */}
                <header className="space-y-6 border-b border-brand-espresso/15 pb-10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3 group">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-10 w-auto group-hover:rotate-6 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    <div className="space-y-3 pt-4">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-espresso uppercase">
                            UI Showcase
                        </h1>
                        <p className="text-base sm:text-lg text-brand-espresso/70 max-w-2xl leading-relaxed">
                            Explore custom user interface concepts, mobile applications, and live site builds across various industries.
                        </p>
                    </div>

                    {/* Viewport Toggle Control */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2 bg-brand-espresso/5 p-1 rounded-2xl border border-brand-espresso/10">
                            <button
                                onClick={() => setPreviewDevice("desktop")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${previewDevice === "desktop"
                                    ? "bg-brand-espresso text-brand-nude shadow-md"
                                    : "text-brand-espresso/70 hover:text-brand-espresso"
                                    }`}
                            >
                                <Monitor className="w-4 h-4" />
                                <span>Desktop Frames</span>
                            </button>
                            <button
                                onClick={() => setPreviewDevice("mobile")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${previewDevice === "mobile"
                                    ? "bg-brand-espresso text-brand-nude shadow-md"
                                    : "text-brand-espresso/70 hover:text-brand-espresso"
                                    }`}
                            >
                                <Smartphone className="w-4 h-4" />
                                <span>Mobile Frames</span>
                            </button>
                        </div>

                        <span className="text-xs font-mono text-brand-espresso/50 hidden sm:inline-block">
                            {SHOWCASE_SITES.length} Concepts Featured
                        </span>
                    </div>
                </header>

                {/* Showcase Bento Grid */}
                <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SHOWCASE_SITES.map((site) => {
                        const isMobileOnlyAndDesktopView = site.isMobileOnly && previewDevice === "desktop";

                        return (
                            <motion.div
                                key={site.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-3xl bg-brand-espresso text-dark-text border border-brand-terracotta/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Device Frame Visual Container */}
                                    <div
                                        onClick={() => site.isMobileOnly && openModal(site)}
                                        className={`relative p-6 sm:p-8 bg-gradient-to-br ${site.accentColor} border-b border-dark-border overflow-hidden group/frame flex items-center justify-center ${site.isMobileOnly ? "cursor-pointer" : ""
                                            }`}
                                    >
                                        {site.link && !site.isMobileOnly ? (
                                            <a
                                                href={site.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full flex items-center justify-center"
                                            >
                                                <FrameContainer site={site} previewDevice={previewDevice} />
                                            </a>
                                        ) : (
                                            <FrameContainer
                                                site={site}
                                                previewDevice={previewDevice}
                                                isMobileOnlyAndDesktopView={isMobileOnlyAndDesktopView}
                                            />
                                        )}
                                    </div>

                                    {/* Content Block */}
                                    <div className="p-6 sm:p-8 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-mono text-brand-nude uppercase tracking-wider block">
                                                {site.category}
                                            </span>
                                            {site.isMobileOnly && (
                                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                    <SmartphoneCharging className="w-3 h-3" /> Mobile App
                                                </span>
                                            )}
                                        </div>

                                        <h2 className="text-xl sm:text-2xl font-bold text-dark-text group-hover:text-brand-nude transition-colors flex items-center justify-between">
                                            {site.link ? (
                                                <a
                                                    href={site.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="hover:underline flex items-center gap-2"
                                                >
                                                    <span>{site.title}</span>
                                                    <ExternalLink className="w-4 h-4 text-brand-nude shrink-0" />
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() => openModal(site)}
                                                    className="flex items-center gap-2 text-left hover:underline"
                                                >
                                                    <span>{site.title}</span>
                                                    <Eye className="w-4 h-4 text-brand-nude shrink-0" />
                                                </button>
                                            )}
                                        </h2>

                                        <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                                            {site.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Tags Footer */}
                                {/* <div className="p-6 sm:p-8 pt-0">
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border/40 font-mono text-[11px] text-dark-muted">
                                        {site.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 rounded-md bg-dark-bg border border-dark-border text-brand-nude/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}
                            </motion.div>
                        );
                    })}
                </main>

                {/* Footer */}
                <footer className="pt-8 border-t border-brand-espresso/15 flex items-center justify-between text-xs font-mono text-brand-espresso/60">
                    <p>© {new Date().getFullYear()} Mafaro Mushonga.</p>
                </footer>
            </div>

            {/* Floating Navigation Bar */}
            <motion.nav
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
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
                        <BsGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mafaro-mushonga-b8a68a231"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded-full hover:bg-blue-300 hover:text-blue-800 transition-colors"
                    >
                        <BsLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:mafaro2105@gmail.com"
                        aria-label="Email"
                        className="p-2 rounded-full hover:bg-brand-espresso hover:text-brand-nude transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/263781926018?text=Hi%20Mafaro,%20I%20saw%20your%20showcase%20and%20would%20like%20to%20chat."
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:brightness-110 transition-all shadow-md shrink-0"
                    >
                        <BsWhatsapp className="w-5 h-5" />
                    </a>
                </div>

                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-md font-mono text-white hover:text-brand-nude transition-colors px-2.5 py-1 rounded-full hover:bg-brand-espresso"
                >
                    <span>Home</span>
                </Link>
                <Link
                    href="/projects"
                    className="flex items-center gap-1.5 text-md font-mono text-white hover:text-brand-nude transition-colors px-2.5 py-1 rounded-full hover:bg-brand-espresso"
                >
                    <span>Projects</span>
                </Link>
            </motion.nav>

            {/* Lightbox Modal for Mobile-Only Apps */}
            <AnimatePresence>
                {activeModalSite && activeModalSite.images && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="relative max-w-md w-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between pb-3 border-b border-dark-border">
                                <div>
                                    <h3 className="text-base font-bold text-dark-text">{activeModalSite.title}</h3>
                                    <p className="text-xs font-mono text-brand-nude">
                                        Screen {activeImageIndex + 1} of {activeModalSite.images.length}
                                    </p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 rounded-full bg-dark-bg hover:bg-brand-espresso text-dark-text transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Mobile Phone Mockup Viewport in Lightbox */}
                            <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black rounded-3xl p-3 border-4 border-neutral-800 overflow-hidden flex items-center justify-center mx-auto shadow-2xl">
                                <img
                                    src={activeModalSite.images[activeImageIndex]}
                                    alt={`${activeModalSite.title} screen`}
                                    className="w-full h-full object-cover rounded-2xl"
                                />

                                {activeModalSite.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 p-2 rounded-full bg-black/70 text-white hover:bg-brand-terracotta transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 p-2 rounded-full bg-black/70 text-white hover:bg-brand-terracotta transition-colors"
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
        </div>
    );
}

{/* Helper component for frame styling */ }
function FrameContainer({
    site,
    previewDevice,
    isMobileOnlyAndDesktopView
}: {
    site: ShowcaseSite;
    previewDevice: "desktop" | "mobile";
    isMobileOnlyAndDesktopView?: boolean;
}) {
    return (
        <div
            className={`w-full transition-all duration-500 transform group-hover/frame:scale-[1.02] ${previewDevice === "mobile" || site.isMobileOnly
                ? "max-w-[240px] aspect-[9/16] rounded-[2.5rem] p-3 bg-black border-4 border-neutral-800 shadow-2xl relative"
                : "w-full rounded-xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden"
                }`}
        >
            {/* Desktop Browser Bar */}
            {previewDevice === "desktop" && !site.isMobileOnly && (
                <div className="h-7 bg-neutral-900 px-3 flex items-center gap-1.5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-2 px-3 py-0.5 rounded bg-white/5 text-[10px] font-mono text-neutral-400 max-w-[150px] truncate">
                        {site.id}.site
                    </div>
                </div>
            )}

            {/* Mobile Notch */}
            {(previewDevice === "mobile" || site.isMobileOnly) && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-8 h-1 rounded-full bg-neutral-800" />
                </div>
            )}

            {/* Image Viewport */}
            <div className={`${site.aspectRatio} relative overflow-hidden bg-neutral-950 h-full w-full rounded-xl`}>
                <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover group-hover/frame:opacity-90 transition-opacity"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/frame:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-mono text-white bg-brand-terracotta px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
                        {site.isMobileOnly ? (
                            <>
                                <Eye className="w-3.5 h-3.5" /> View Mobile Screens
                            </>
                        ) : (
                            <>
                                <ExternalLink className="w-3.5 h-3.5" /> Visit Live Site
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}