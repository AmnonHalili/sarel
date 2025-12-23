import React from 'react';
import { ShieldCheck, Scale, Users } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';
import sarelPortrait from '../assets/sarel-portrait.png';

const Intro = () => {
    return (
        <section id="intro" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6 md:space-y-8 text-center md:text-right order-2 md:order-1">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-text leading-tight">
                                מי דואג  <span className="text-brand-gold">לאינטרסים שלכם?</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                בפרויקט התחדשות עירונית, היזם דואג לרווח שלו, הקבלן דואג לבנייה, והעירייה דואגת לעיר.
                                <br /><strong>אבל מי דואג לכם, הדיירים?</strong>
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
                                נעים להכיר, שראל ישראל חלפון. התפקיד שלי הוא להיות המגן שלכם. לוודא שאתם מקבלים את המקסימום המגיע לכם, בלי אותיות קטנות ובלי פשרות.
                            </p>
                        </Reveal>
                    </div>

                    {/* Image/Illustration */}
                    <div className="relative flex justify-center md:justify-start order-1 md:order-2">
                        <FadeIn delay={0.4} direction="right">
                            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={sarelPortrait}
                                    alt="שראל ישראל חלפון"
                                    className="w-full h-full object-cover object-[50%_15%] hover:scale-105 transition-transform duration-700"
                                />
                                {/* Quote Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                                    <p className="font-bold text-lg leading-relaxed">
                                        "אני הגוף שמנהל את התהליך עבורכם."
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Quick Value Props Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <FadeIn delay={0.4} direction="up" fullWidth>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all h-full">
                            <Users className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-brand-text">כוח אחד חזק</h3>
                            <p className="text-gray-500">גיבוש הדיירים לחזית אחידה מול היזם</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up" fullWidth>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all h-full">
                            <Scale className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-brand-text">אינטרס נקי</h3>
                            <p className="text-gray-500">דואג אך ורק לזכויות שלכם</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.8} direction="up" fullWidth>
                        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all h-full">
                            <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-brand-text">ביטחון מלא</h3>
                            <p className="text-gray-500">הגנה מקסימלית בכל שלב בפרויקט</p>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};

export default Intro;
