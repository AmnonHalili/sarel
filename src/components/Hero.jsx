import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './Reveal';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-start justify-center pt-32 md:pt-48 overflow-hidden">

            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-building.png"
                    alt="התחדשות עירונית יוקרתית"
                    className="w-full h-full object-cover"
                />
                {/* Darker Overlay for better text readability */}
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/80" />
            </div>

            <div className="container mx-auto px-6 z-10 relative text-center max-w-5xl">
                <div className="space-y-6 md:space-y-8">
                    <FadeIn delay={0.2} direction="up" fullWidth>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-xl">
                            המייצג שלכם <br />
                            <span className="text-brand-gold bg-clip-text">בפינוי בינוי</span> <br />
                            <span className="text-xl sm:text-2xl md:text-4xl font-light opacity-90 block mt-3 md:mt-4">מהרגע הראשון ועד המפתח.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up" fullWidth>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
                            <strong className="text-brand-gold font-bold block mb-2 text-2xl">שראל ישראל חלפון</strong>
                            מארגן דיירים שדואג לאינטרס שלכם בלבד. מקסימום תמורה, ביטחון מלא ושקט נפשי.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up" fullWidth>
                        <div className="pt-8 flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 bg-brand-gold text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_0_30px_rgba(193,155,108,0.4)] hover:shadow-[0_0_40px_rgba(193,155,108,0.6)] hover:bg-brand-goldHover transition-all transform hover:-translate-y-1 backdrop-blur-sm border border-white/20"
                            >
                                לקביעת פגישת היכרות ללא התחייבות
                                <ChevronLeft className="w-6 h-6" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Hero;
