import React from 'react';
import { Menu, Phone } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tight text-brand-text">
                    שראל ישראל חלפון
                </div>

                <nav className="hidden md:flex items-center gap-8 text-gray-600">
                    <a href="#about" className="hover:text-brand-gold transition-colors">מי אני</a>
                    <a href="#process" className="hover:text-brand-gold transition-colors">התהליך</a>
                    <a href="#why-me" className="hover:text-brand-gold transition-colors">למה לבחור בי</a>
                </nav>

                <a
                    href="#contact"
                    className="hidden md:flex items-center gap-2 bg-brand-gold text-brand-text px-5 py-2 rounded-full font-bold hover:bg-brand-goldHover hover:text-white transition-all shadow-sm"
                >
                    <Phone size={18} />
                    <span>שיחת ייעוץ</span>
                </a>

                {/* Mobile Menu Button - Placeholder for functionality */}
                <button className="md:hidden text-brand-text p-2">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
