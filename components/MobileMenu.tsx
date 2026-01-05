import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { NAVBAR_LINKS, SITE_INFO } from '../constants';


interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenContact }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-saper-dark/60 backdrop-blur-sm md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "tween", duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed top-0 left-0 right-0 z-[70] bg-saper-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden rounded-b-[2.5rem] shadow-2xl"
                    >
                        <div className="flex flex-col gap-10 pb-10">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold tracking-tight text-saper-light">
                                    {SITE_INFO.brandName.toLowerCase()}.
                                </span>
                                <button
                                    onClick={onClose}
                                    className="p-2.5 bg-white/5 rounded-full text-saper-light hover:bg-white/10 transition-colors border border-white/5"
                                >
                                    <X size={24} strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-6 px-2">
                                {NAVBAR_LINKS.map((link, idx) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1 }}
                                        key={link.label}
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-4xl font-sans font-medium text-saper-light/90 hover:text-saper-primary transition-colors flex items-center justify-between group tracking-tight"
                                    >
                                        {link.label}
                                        <ArrowRight size={28} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-saper-primary" />
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Contact Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => {
                                    onClose();
                                    onOpenContact();
                                }}
                                className="mt-4 w-full bg-saper-light text-saper-black py-4 rounded-2xl font-bold text-lg hover:bg-saper-primary hover:text-saper-light transition-all flex items-center justify-center gap-2 group"
                            >
                                Contact Us
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            {/* Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-2 pt-8 border-t border-white/10 flex justify-between text-xs text-saper-light/30 font-mono uppercase tracking-widest"
                            >
                                <span>{SITE_INFO.location}</span>
                                <span>Est. {SITE_INFO.foundingYear}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
