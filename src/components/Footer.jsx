import React from 'react';

// Note: Ensure the Contact Section (Footer) requirement is met here or in a separate Contact section.
// The user prompt lists "Contact Section (Footer)" as item 5.
// I will implement the simple footer bottom bar here, and the main Contact form as a section component 'Contact.jsx' that sits above this or integrates with it.
// However, the prompt says "Contact Section (Footer)". So I might combine them.
// Let's stick to a simple Footer component for copyright/links and put the Contact Form in a 'Contact' component that is rendered at the bottom of the page content.
// WAIT, request says "5. Contact Section (Footer)".
// I'll make a Contact component that serves as the footer area.

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-white/10 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} שראל ישראל חלפון - מארגן דיירים בפינוי בינוי. כל הזכויות שמורות.</p>
            </div>
        </footer>
    );
};

export default Footer;
