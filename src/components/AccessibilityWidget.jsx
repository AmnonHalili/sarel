import React, { useState, useEffect } from 'react';
import { Eye, Type, ZoomIn, ZoomOut, Sun, Link, X, Loader, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 100, // percentage
        contrast: 'normal', // normal, high-contrast, black-white
        highlightLinks: false,
        readableFont: false,
    });

    // Apply settings to document
    useEffect(() => {
        const root = document.documentElement;

        // Font Size
        root.style.fontSize = `${settings.fontSize}%`;

        // Contrast
        document.body.classList.remove('acc-high-contrast', 'acc-black-white');
        if (settings.contrast !== 'normal') {
            document.body.classList.add(`acc-${settings.contrast}`);
        }

        // Highlight Links
        document.body.classList.toggle('acc-highlight-links', settings.highlightLinks);

        // Portable Font
        document.body.classList.toggle('acc-readable-font', settings.readableFont);

    }, [settings]);

    const resetSettings = () => {
        setSettings({
            fontSize: 100,
            contrast: 'normal',
            highlightLinks: false,
            readableFont: false,
        });
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="fixed top-1/2 left-0 z-[100] -translate-y-1/2 font-sans dir-rtl">
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={toggleOpen}
                    className="bg-brand-text text-white p-3 pr-4 rounded-r-xl shadow-lg hover:bg-slate-800 transition-colors flex items-center gap-2 group"
                    aria-label="פתח תפריט נגישות"
                >
                    <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold">נגישות</span>
                </button>
            )}

            {/* Widget Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-[90]"
                            onClick={toggleOpen}
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-r-2xl shadow-2xl w-[90vw] max-w-[320px] overflow-hidden border border-gray-100 z-[100]"
                        >
                            {/* Header */}
                            <div className="bg-brand-text text-white p-4 flex justify-between items-center">
                                <h3 className="font-bold flex items-center gap-2">
                                    <Sliders className="w-5 h-5" />
                                    תפריט נגישות
                                </h3>
                                <button onClick={toggleOpen} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Controls */}
                            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">

                                {/* Text Size */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Type className="w-4 h-4" />
                                        גודל טקסט
                                    </label>
                                    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                                        <button
                                            onClick={() => setSettings(s => ({ ...s, fontSize: Math.max(80, s.fontSize - 10) }))}
                                            className="flex-1 bg-white shadow-sm py-2 rounded-md hover:bg-gray-50 flex justify-center items-center"
                                            title="הקטן טקסט"
                                        >
                                            <ZoomOut className="w-5 h-5 text-gray-600" />
                                        </button>
                                        <div className="flex items-center justify-center font-bold text-brand-gold w-12">
                                            {settings.fontSize}%
                                        </div>
                                        <button
                                            onClick={() => setSettings(s => ({ ...s, fontSize: Math.min(150, s.fontSize + 10) }))}
                                            className="flex-1 bg-white shadow-sm py-2 rounded-md hover:bg-gray-50 flex justify-center items-center"
                                            title="הגדל טקסט"
                                        >
                                            <ZoomIn className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Contrast */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                        <Sun className="w-4 h-4" />
                                        ניגודיות
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setSettings(s => ({ ...s, contrast: s.contrast === 'high-contrast' ? 'normal' : 'high-contrast' }))}
                                            className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all ${settings.contrast === 'high-contrast' ? 'bg-black text-yellow-400 border-black ring-2 ring-brand-gold' : 'bg-white text-gray-700 border-gray-200 hover:border-brand-gold'}`}
                                        >
                                            ניגודיות גבוהה
                                        </button>
                                        <button
                                            onClick={() => setSettings(s => ({ ...s, contrast: s.contrast === 'black-white' ? 'normal' : 'black-white' }))}
                                            className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all ${settings.contrast === 'black-white' ? 'bg-gray-100 text-black border-gray-400 ring-2 ring-brand-gold grayscale' : 'bg-white text-gray-700 border-gray-200 hover:border-brand-gold'}`}
                                        >
                                            שחור לבן
                                        </button>
                                    </div>
                                </div>

                                {/* Links & Fonts */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setSettings(s => ({ ...s, highlightLinks: !s.highlightLinks }))}
                                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${settings.highlightLinks ? 'bg-brand-gold/10 border-brand-gold text-brand-text' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-gold/50'}`}
                                    >
                                        <span className="flex items-center gap-2 text-sm font-bold">
                                            <Link className="w-4 h-4" />
                                            הדגשת קישורים
                                        </span>
                                        <div className={`w-3 h-3 rounded-full ${settings.highlightLinks ? 'bg-green-500' : 'bg-gray-300'}`} />
                                    </button>

                                    <button
                                        onClick={() => setSettings(s => ({ ...s, readableFont: !s.readableFont }))}
                                        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${settings.readableFont ? 'bg-brand-gold/10 border-brand-gold text-brand-text' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-gold/50'}`}
                                    >
                                        <span className="flex items-center gap-2 text-sm font-bold">
                                            <Type className="w-4 h-4" />
                                            פונט קריא
                                        </span>
                                        <div className={`w-3 h-3 rounded-full ${settings.readableFont ? 'bg-green-500' : 'bg-gray-300'}`} />
                                    </button>
                                </div>

                            </div>

                            {/* Reset Button */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <button
                                    onClick={resetSettings}
                                    className="w-full py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-red-500 transition-colors"
                                >
                                    איפוס הגדרות
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccessibilityWidget;
