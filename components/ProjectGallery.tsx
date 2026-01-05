import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, BatteryCharging, Sun, Cpu, Settings, ArrowUpRight, ChevronDown, Battery } from 'lucide-react';
import { PRODUCTS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
    'p1': <Zap className="w-full h-full" strokeWidth={2} />,
    'p2': <BatteryCharging className="w-full h-full" strokeWidth={2} />,
    'p3': <BatteryCharging className="w-full h-full" strokeWidth={2} />,
    'p4': <Zap className="w-full h-full" strokeWidth={2} />,
    'p5': <Cpu className="w-full h-full" strokeWidth={2} />,
    'p6': <Sun className="w-full h-full" strokeWidth={2} />,
    'p7': <Settings className="w-full h-full" strokeWidth={2} />,
    'p8': <Battery className="w-full h-full" strokeWidth={2} />,
};

const SPRING_SOFT = {
    type: "spring" as const,
    mass: 0.8,
    stiffness: 75,
    damping: 25,
    restDelta: 0.001
};

const ProjectGallery: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for the sticky section
    const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const descY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const handleCardTap = (projectId: string) => {
        setExpandedCard(expandedCard === projectId ? null : projectId);
    };

    return (
        <section ref={sectionRef} id="projects" className="w-full bg-saper-bg border-t border-saper-black/10">
            <div className="flex flex-col lg:flex-row">

                {/* Left: Sticky Title Section with Parallax */}
                <div className="w-full lg:w-2/5 p-8 md:p-16 lg:p-24 lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-8rem)] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-saper-black/10 bg-saper-bg z-10 self-start">
                    <motion.div style={{ y: titleY }}>
                        <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                            <span className="font-mono text-xs text-saper-primary font-bold">03</span>
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-saper-black/40">Capabilities</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tighter text-saper-black mb-8 md:mb-12">
                            Engineered<br />Solutions
                        </h2>
                    </motion.div>

                    <motion.div style={{ y: descY }} className="max-w-md">
                        <p className="text-base md:text-lg text-saper-gray leading-relaxed font-medium mb-8">
                            High-precision infrastructure across critical sectors. From power conditioning to renewable energy, we deliver technical excellence.
                        </p>
                        <div className="h-px w-24 bg-saper-primary"></div>
                    </motion.div>
                </div>

                {/* Right: Scrollable Project Cards */}
                <div className="w-full lg:w-3/5 bg-saper-surface">
                    {PRODUCTS.map((product, index) => {
                        const isExpanded = expandedCard === product.id;

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "0%" }}
                                transition={{ duration: 0.3 }}
                                onClick={() => handleCardTap(product.id)}
                                className="group relative border-b border-saper-black/10 min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-between cursor-pointer overflow-hidden bg-saper-bg hover:bg-saper-surface transition-colors duration-500"
                            >
                                {/* Hover Background Accent - REMOVED GRADIENT, using simpler subtle lift if needed or just clean white */}
                                {/* <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 pointer-events-none ${isExpanded ? 'from-saper-primary/5 to-transparent' : 'from-saper-primary/0 to-saper-primary/0 group-hover:from-saper-primary/5 group-hover:to-transparent'}`}></div> */}

                                {/* Content */}
                                <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between">

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center gap-4">
                                            <span className={`font-mono text-sm font-bold transition-colors ${isExpanded ? 'text-saper-primary' : 'text-saper-black/30 group-hover:text-saper-primary'}`}>
                                                {product.id}
                                            </span>
                                        </div>
                                        <span className="font-mono text-xs font-semibold text-saper-black/50 uppercase tracking-[0.2em]">
                                            {product.subtitle}
                                        </span>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 flex flex-col justify-center">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 md:w-16 md:h-16 mb-8 md:mb-10 transition-all duration-500 ${isExpanded ? 'text-saper-primary scale-110 opacity-100' : 'text-saper-black/20 group-hover:text-saper-primary group-hover:scale-110 group-hover:opacity-100'}`}>
                                            {iconMap[product.id]}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-500 leading-tight tracking-tight ${isExpanded ? 'text-saper-primary translate-x-2' : 'text-saper-black group-hover:text-saper-primary group-hover:translate-x-2'}`}>
                                            {product.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-saper-gray text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-medium">
                                            {product.description}
                                        </p>

                                        {/* Technical Items - Desktop: hover, Mobile: tap */}
                                        {product.variants && (
                                            <>
                                                {/* Mobile: Tap indicator */}
                                                <div className={`lg:hidden flex items-center gap-2 text-saper-primary/70 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0 mb-0' : 'opacity-100'}`}>
                                                    <motion.div
                                                        animate={{ y: [0, 4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                                    >
                                                        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                                                    </motion.div>
                                                    <span className="text-xs font-bold uppercase tracking-wider">Tap for details</span>
                                                </div>

                                                {/* Desktop: hover reveal */}
                                                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                    {/* Unified "Maximum Data" Display for Desktop Hover */}
                                                    <div className="space-y-6">
                                                        {/* 1. Technical Specs Grid */}
                                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                                            {product.specs.slice(0, 4).map((spec, i) => (
                                                                <div key={i} className="flex flex-col">
                                                                    <span className="text-[10px] uppercase tracking-wider text-saper-black/40 font-bold">{spec.label}</span>
                                                                    <span className="text-sm font-medium text-saper-black/80">{spec.value}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="h-px bg-saper-black/5 w-full"></div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {/* 2. Variants List */}
                                                            <div>
                                                                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-saper-black/40 mb-3 font-bold">
                                                                    Variants
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {product.variants.slice(0, 4).map((variant, idx) => (
                                                                        <li key={idx} className="text-xs text-saper-gray font-medium flex items-center gap-2">
                                                                            <span className="w-1 h-1 rounded-full bg-saper-primary/60"></span>
                                                                            {variant}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* 3. Applications List */}
                                                            <div>
                                                                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-saper-black/40 mb-3 font-bold">
                                                                    Applications
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {product.applications.slice(0, 4).map((app, idx) => (
                                                                        <li key={idx} className="text-xs text-saper-gray font-medium flex items-center gap-2">
                                                                            <span className="w-1 h-1 rounded-full bg-saper-primary/60"></span>
                                                                            {app}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Mobile: tap reveal with animation */}
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0, y: 10 }}
                                                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                            exit={{ opacity: 0, height: 0, y: 10 }}
                                                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                            className="lg:hidden overflow-hidden"
                                                        >
                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                transition={{ delay: 0.15 }}
                                                            >
                                                                {/* Unified "Maximum Data" Display for Mobile Expanded */}
                                                                <div className="space-y-8">

                                                                    {/* 1. Technical Specs Grid */}
                                                                    <div>
                                                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-saper-black/40 mb-4 font-bold">
                                                                            Key Specifications
                                                                        </h4>
                                                                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                                                                            {product.specs.slice(0, 4).map((spec, i) => (
                                                                                <div key={i} className="flex flex-col">
                                                                                    <span className="text-[10px] uppercase tracking-wider text-saper-black/40 font-bold mb-1">{spec.label}</span>
                                                                                    <span className="text-sm font-medium text-saper-black/80">{spec.value}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>

                                                                    <div className="h-px bg-saper-black/5 w-full"></div>

                                                                    {/* 2. Variants List */}
                                                                    <div>
                                                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-saper-black/40 mb-4 font-bold">
                                                                            Variants
                                                                        </h4>
                                                                        <ul className="space-y-2">
                                                                            {product.variants.map((variant, idx) => (
                                                                                <li key={idx} className="text-sm text-saper-gray font-medium flex items-start gap-3">
                                                                                    <span className="w-1.5 h-1.5 rounded-full bg-saper-primary mt-1.5 flex-shrink-0"></span>
                                                                                    {variant}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    {/* 3. Applications List */}
                                                                    <div>
                                                                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-saper-black/40 mb-4 font-bold">
                                                                            Applications
                                                                        </h4>
                                                                        <ul className="space-y-2">
                                                                            {product.applications.map((app, idx) => (
                                                                                <li key={idx} className="text-sm text-saper-gray font-medium flex items-start gap-3">
                                                                                    <span className="w-1.5 h-1.5 rounded-full bg-saper-primary mt-1.5 flex-shrink-0"></span>
                                                                                    {app}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )
                                        }
                                    </div>

                                    {/* Footer - REMOVED 'Since 2010' as requested */}
                                    {isExpanded && (
                                        <div className="flex justify-end items-center mt-8 pt-6 border-t border-saper-black/10">
                                            <div className="lg:hidden flex items-center gap-2 text-saper-primary">
                                                <span className="text-xs font-bold uppercase tracking-wider">
                                                    Tap to close
                                                </span>
                                                <ArrowUpRight
                                                    className="w-5 h-5 transform rotate-180"
                                                    strokeWidth={2}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div >

            </div >
        </section >
    );
};

export default ProjectGallery;
