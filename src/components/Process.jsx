import React from 'react';
import { Users, HardHat, TrendingUp, FileCheck, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, Reveal } from './Reveal';

const steps = [
    {
        id: 1,
        title: 'גיבוש ויצירת אמון',
        description: 'מיפוי בעלי הזכויות, פגישות אישיות ויצירת גרעין תומך למניעת פילוג.',
        icon: Users
    },
    {
        id: 2,
        title: 'בחירת יזם מנצח',
        description: 'מכרז יזמים קפדני. בדיקת איתנות פיננסית, ניסיון ביצוע והשוואת מפרטים (לא רק מ"ר).',
        icon: HardHat
    },
    {
        id: 3,
        title: 'ניהול מו"מ עיקש',
        description: 'שיפור תמורות (שטח, מחסן, חניה), דרישה לבטוחות מחמירות ושמירה על שוויון בין הדיירים.',
        icon: TrendingUp
    },
    {
        id: 4,
        title: 'השגת הרוב החוקי',
        description: 'ליווי אישי של כל דייר, טיפול בחששות ותיאום חתימות מסודר לקידום הפרויקט.',
        icon: FileCheck
    },
    {
        id: 5,
        title: 'ליווי עד המפתח',
        description: 'פיקוח על התקדמות התכנון, ההיתרים והביצוע, וכתובת אחת זמינה לכל שאלה.',
        icon: Key
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-slate-50 border-t border-gray-200 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4">
                <center className="mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center">
                            הדרך להצלחה <span className="text-brand-gold">ב-5 צעדים</span>
                        </h2>
                    </Reveal>
                </center>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line - Fixed Height for now, usually would animate height */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute top-0 bottom-0 right-[27px] md:right-1/2 md:-mr-[1px] w-[2px] bg-gradient-to-b from-brand-gold/0 via-brand-gold/50 to-brand-gold/0"
                    />

                    <div className="space-y-12 md:space-y-20">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className={`relative flex items-center md:items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Icon & Number Circle */}
                                    <div className={`absolute top-0 right-0 md:relative md:w-1/2 flex z-10 md:pb-0 shrink-0 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <FadeIn delay={index * 0.2} direction="down">
                                            <div className={`w-14 h-14 rounded-full border-4 border-white bg-white flex items-center justify-center relative shadow-lg ${index % 2 === 0 ? 'md:-ml-7' : 'md:-mr-7'} right-0`}>
                                                <Icon size={24} className="text-brand-gold" />
                                            </div>
                                        </FadeIn>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pr-20 md:pr-0 pl-4 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-right'}`}>
                                        <FadeIn delay={index * 0.2 + 0.2} direction={index % 2 === 0 ? "right" : "left"}>
                                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                                                <div className="text-brand-gold font-bold text-sm mb-2 tracking-wider">שלב {step.id}</div>
                                                <h3 className="text-2xl font-bold text-brand-text mb-3">{step.title}</h3>
                                                <p className="text-gray-600 font-light leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </FadeIn>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
