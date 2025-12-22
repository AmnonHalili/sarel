import React from 'react';
import { ShieldCheck, Scale, Users } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

const Intro = () => {
    return (
        <section id="about" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-4xl text-center">

                <div className="mb-16">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-8">
                            מה התפקיד שלי <span className="text-brand-gold">כמארגן דיירים?</span>
                        </h2>
                    </Reveal>

                    <FadeIn delay={0.2} fullWidth>
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-gold">
                                <ShieldCheck size={120} />
                            </div>

                            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 relative z-10">
                                "אני לא היזם ואני לא עורך הדין. <span className="text-brand-gold font-bold">אני הגוף שמנהל את התהליך עבורכם.</span> המטרה שלי היא לייצג את האינטרס של בעלי הדירות בלבד, לגבש אתכם לכוח אחד חזק ולהוביל אתכם לעסקה הבטוחה והרווחית ביותר מול היזמים."
                            </p>
                        </div>
                    </FadeIn>
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
