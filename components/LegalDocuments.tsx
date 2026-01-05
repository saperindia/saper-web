import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_OF_USE, LEGAL_INFO } from '../constants';

interface LegalDocumentsProps {
    onClose: () => void;
    initialTab?: 'privacy' | 'terms';
}

type TabType = 'privacy' | 'terms';

const LegalDocuments: React.FC<LegalDocumentsProps> = ({ onClose, initialTab = 'privacy' }) => {
    const [activeTab, setActiveTab] = useState<TabType>(initialTab);

    const tabs = [
        { id: 'privacy' as TabType, label: 'Privacy Policy', data: PRIVACY_POLICY },
        { id: 'terms' as TabType, label: 'Terms of Use', data: TERMS_OF_USE },
    ];

    const activeData = tabs.find(t => t.id === activeTab)?.data;

    const renderContent = (section: any, index: number) => {
        // Handle sections with subsections
        if (section.subsections) {
            return (
                <div key={index} className="space-y-6">
                    <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-saper-primary font-bold">
                            {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-saper-black tracking-tight">
                            {section.title}
                        </h2>
                    </div>
                    <div className="ml-8 md:ml-12 space-y-6">
                        {section.subsections.map((subsection: any, subIdx: number) => (
                            <div key={subIdx} className="space-y-3">
                                <h3 className="text-lg font-bold text-saper-black/90">{subsection.subtitle}</h3>
                                <ul className="space-y-2">
                                    {subsection.items.map((item: string, itemIdx: number) => (
                                        <li key={itemIdx} className="text-base md:text-lg text-saper-gray leading-relaxed font-medium flex gap-3">
                                            <span className="text-saper-primary mt-2 flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        // Handle regular sections with content array
        return (
            <div key={index} className="space-y-6">
                <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-saper-primary font-bold">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-saper-black tracking-tight">
                        {section.title}
                    </h2>
                </div>
                <ul className="space-y-3 ml-8 md:ml-12">
                    {section.content.map((item: string, idx: number) => (
                        <li key={idx} className="text-base md:text-lg text-saper-gray leading-relaxed font-medium flex gap-3">
                            <span className="text-saper-primary mt-2 flex-shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-saper-bg">
            <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={onClose}
                    className="flex items-center gap-2 text-saper-black hover:text-saper-primary transition-colors group mb-8 md:mb-12"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
                    <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span>
                </motion.button>

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-saper-black tracking-tighter leading-tight mb-4">
                        Legal Documents
                    </h1>
                    <p className="text-sm font-mono text-saper-gray uppercase tracking-wider">
                        Last Updated: {LEGAL_INFO.lastUpdated}
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12 md:mb-16 border-b border-saper-black/10"
                >
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 px-2 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-all relative ${activeTab === tab.id
                                        ? 'text-saper-black'
                                        : 'text-saper-gray hover:text-saper-black'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-saper-primary"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Introduction */}
                        {activeData?.introduction && (
                            <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-saper-black/10">
                                <p className="text-lg md:text-xl text-saper-black/80 leading-relaxed font-medium">
                                    {activeData.introduction}
                                </p>
                            </div>
                        )}

                        {/* Sections */}
                        <div className="space-y-12 md:space-y-16">
                            {activeData?.sections.map((section: any, index: number) => (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    {renderContent(section, index)}
                                </motion.section>
                            ))}
                        </div>

                        {/* Footer CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-saper-black/10"
                        >
                            <div className="bg-saper-surface rounded-2xl p-8 md:p-12 border border-saper-black/5">
                                <h3 className="text-xl md:text-2xl font-bold text-saper-black mb-4">
                                    Questions or Concerns?
                                </h3>
                                <p className="text-base md:text-lg text-saper-gray leading-relaxed mb-6">
                                    We're here to help. If you have any questions, please don't hesitate to reach out.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="bg-saper-black text-saper-light px-8 py-4 rounded-full text-sm font-bold hover:bg-saper-primary transition-colors shadow-lg"
                                >
                                    Return to Home
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default LegalDocuments;
