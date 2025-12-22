import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import AccessibilityModal from './AccessibilityModal';
import AccessibilityWidget from './AccessibilityWidget';

const Layout = ({ children }) => {
    const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans w-full max-w-[100vw] overflow-x-hidden relative">
            <AccessibilityWidget />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <WhatsAppButton />
            <Footer onOpenAccessibility={() => setIsAccessibilityModalOpen(true)} />
            <AccessibilityModal
                isOpen={isAccessibilityModalOpen}
                onClose={() => setIsAccessibilityModalOpen(false)}
            />
        </div>
    );
};

export default Layout;
