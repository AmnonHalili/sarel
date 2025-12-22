import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './Reveal';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
            {/* Background Effect - Clean Light Pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-white to-white" />
                <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-brand-text">
                            המייצג שלכם <br />
                            <span className="text-brand-gold">בפינוי בינוי</span> <br />
                            מהרגע הראשון ועד המפתח.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 leading-relaxed font-light border-r-4 border-brand-gold pr-6">
                            <strong className="text-brand-text block mb-2">שראל ישראל חלפון</strong>
                            מארגן דיירים שדואג לאינטרס שלכם בלבד. מקסימום תמורה, ביטחון מלא ושקט נפשי.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold to-brand-goldHover text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(193,155,108,0.3)] hover:shadow-[0_0_30px_rgba(193,155,108,0.5)] transition-all transform hover:-translate-y-1"
                            >
                                לקביעת פגישת היכרות ללא התחייבות
                                <ChevronLeft className="w-5 h-5" />
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Building Image */}
                <FadeIn delay={0.4} direction="left">
                    <div className="relative block h-[350px] md:h-[600px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl group mt-8 md:mt-0">
                        <div className="absolute inset-0 bg-brand-text/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img
                            src="/hero-building.png"
                            alt="פרויקט פינוי בינוי יוקרתי"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-r-4 border-brand-gold z-20 max-w-xs animate-float">
                            <p className="font-bold text-brand-text text-lg mb-1">סטנדרט מגורים חדש</p>
                            <p className="text-gray-600 text-sm">התחדשות עירונית שמשדרגת את איכות החיים</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
