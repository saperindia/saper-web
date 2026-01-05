import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, ExternalLink } from 'lucide-react';
import { CONTACT_MODAL, CONTACT_INFO } from '../constants';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const getContactIcon = (type: string) => {
    switch (type) {
        case 'email':
            return <Mail className="w-6 h-6 md:w-10 md:h-10" />;
        case 'whatsapp':
            return <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 md:w-10 md:h-10" />;
        case 'phone':
            return <Phone className="w-6 h-6 md:w-10 md:h-10" />;
        default:
            return null;
    }
};

const getHoverColor = (type: string) => {
    switch (type) {
        case 'email':
            return 'hover:text-blue-500';
        case 'whatsapp':
            return 'hover:text-green-500';
        case 'phone':
            return 'hover:text-purple-500';
        default:
            return '';
    }
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-saper-overlay backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            className="bg-saper-surface w-full max-w-2xl rounded-[1.5rem] md:rounded-[3rem] shadow-2xl border border-saper-light/20 overflow-hidden relative"
                        >


                            {/* Header */}
                            <div className="p-5 md:p-12 pb-2 md:pb-0 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl md:text-5xl font-extrabold text-saper-black tracking-tighter leading-none mb-1.5 md:mb-2">{CONTACT_MODAL.title}</h2>
                                    <p className="text-saper-gray text-sm md:text-lg font-medium">{CONTACT_MODAL.subtitle}</p>
                                </div>
                                <motion.button
                                    onClick={onClose}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="p-2 md:p-3 bg-saper-bg rounded-full hover:bg-saper-black hover:text-saper-light transition-all duration-300 group flex-shrink-0"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform" strokeWidth={2.5} />
                                </motion.button>
                            </div>

                            {/* Options Grid */}
                            <div className="p-4 md:p-8 grid gap-3 md:gap-4">
                                {CONTACT_MODAL.options.map((option, idx) => (
                                    <motion.a
                                        key={option.label}
                                        href={option.href}
                                        target={option.type === 'whatsapp' ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 md:gap-6 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-saper-bg border border-transparent hover:border-saper-black/10 hover:bg-saper-light hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className={`p-2.5 md:p-4 bg-saper-light rounded-full shadow-sm text-saper-black group-hover:scale-110 transition-transform duration-300 ${getHoverColor(option.type)}`}>
                                            {getContactIcon(option.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="block text-xs font-bold uppercase tracking-widest text-saper-gray mb-1">{option.label}</span>
                                            <span className="text-base md:text-2xl font-bold text-saper-black group-hover:text-saper-primary transition-colors break-words">
                                                {option.value}
                                            </span>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                                            <ExternalLink className="text-saper-gray" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="p-4 md:p-8 pt-0 text-center">
                                <p className="text-xs font-medium text-saper-muted uppercase tracking-widest">
                                    {CONTACT_INFO.availability}
                                </p>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
