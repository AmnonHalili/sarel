import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { label: 'ראשי', href: '#' },
        { label: 'מי אני', href: '#about' },
        { label: 'התהליך', href: '#process' },
        { label: 'למה לבחור בי', href: '#why-me' },
        { label: 'צור קשר', href: '#contact' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tight text-brand-text">
                        שראל ישראל חלפון
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-gray-600">
                        {menuItems.map((item) => (
                            <a key={item.label} href={item.href} className="hover:text-brand-gold transition-colors">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 bg-brand-gold text-brand-text px-5 py-2 rounded-full font-bold hover:bg-brand-goldHover hover:text-white transition-all shadow-sm"
                    >
                        <Phone size={18} />
                        <span>שיחת ייעוץ</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-brand-text p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full sm:w-[350px] bg-white z-[70] shadow-2xl md:hidden overflow-y-auto"
                        >
                            {/* Top Bar with Logo and Close */}
                            <div className="bg-slate-50 p-6 flex justify-between items-center border-b border-gray-100">
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-gray-500 hover:text-brand-text hover:bg-gray-200 rounded-full transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                                <div className="text-lg font-bold text-brand-text">
                                    שראל ישראל חלפון
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className="p-6">
                                <ul className="space-y-2">
                                    {menuItems.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.href}
                                                onClick={toggleMenu}
                                                className="block py-4 px-4 text-lg font-medium text-gray-700 hover:bg-slate-50 hover:text-brand-gold rounded-xl transition-all border-b border-gray-50 last:border-0"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 p-4 bg-brand-gold/5 rounded-2xl border border-brand-gold/10">
                                    <a
                                        href="#contact"
                                        onClick={toggleMenu}
                                        className="flex items-center justify-center gap-2 w-full bg-brand-gold text-white font-bold py-3 rounded-xl hover:bg-brand-goldHover transition-colors shadow-md"
                                    >
                                        <Phone size={20} />
                                        <span>שיחת ייעוץ</span>
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
