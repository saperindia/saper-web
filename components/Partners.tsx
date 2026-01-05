import React from 'react';
import { PARTNERS } from '../constants';
import { motion } from 'framer-motion';

const SPRING_SOFT = {
    type: "spring",
    mass: 0.8,
    stiffness: 75,
    damping: 25,
    restDelta: 0.001
};

const Partners: React.FC = () => {
    return (
        <section className="w-full py-24 md:py-48 bg-saper-surface border-t border-saper-black/10">
            <div className="max-w-[95%] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={SPRING_SOFT}
                        viewport={{ once: true, margin: "-10%" }}
                        className="flex items-baseline gap-4"
                    >
                        <span className="font-mono text-xs text-saper-primary font-bold">04</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-saper-black tracking-tight">
                            Our Partners
                        </h2>
                    </motion.div>
                </div>

                <div className="border-t border-l border-saper-black/10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {PARTNERS.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="group relative border-r border-b border-saper-black/10 h-40 md:h-56 flex flex-col justify-center items-center p-8 bg-saper-surface hover:bg-saper-light transition-colors duration-500 cursor-default"
                            >
                                {/* Index Number */}
                                <span className="absolute top-4 left-4 font-mono text-[10px] text-saper-black/30 group-hover:text-saper-primary transition-colors">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>

                                {/* Logo / Name */}
                                <div className="w-full h-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-[80%] max-h-[80%] object-contain"
                                            style={{
                                                // @ts-ignore
                                                transform: partner.scale ? `scale(${partner.scale})` : undefined
                                            }}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerText = partner.name;
                                                e.currentTarget.parentElement!.className = "text-xl md:text-2xl font-bold text-saper-black/80 group-hover:text-saper-black tracking-tight text-center w-full h-full flex items-center justify-center";
                                            }}
                                        />
                                    ) : (
                                        <h3 className="text-xl md:text-2xl font-bold text-saper-black/80 group-hover:text-saper-black tracking-tight text-center">
                                            {partner.name}
                                        </h3>
                                    )}
                                </div>

                                {/* Decor Item on Hover */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-2 h-2 rounded-full bg-saper-primary" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
