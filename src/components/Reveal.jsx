import React from 'react';

export const Reveal = ({ children, width = "fit-content", className = "" }) => {
    return (
        <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
            {children}
        </div>
    );
};

export const FadeIn = ({ children, fullWidth = false, className = "" }) => {
    return (
        <div className={className} style={{ width: fullWidth ? "100%" : "auto", height: className.includes('h-full') ? '100%' : 'auto' }}>
            {children}
        </div>
    );
};
