import React from 'react';
import { Users, HardHat, FileCheck, Scale, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, Reveal } from './Reveal';

const steps = [
    {
        id: 1,
        title: 'הנעת המתחם ובניית אמון',
        description: 'כניסה יזומה למתחם, איסוף פרטי קשר וקיום כנסים נפרדים לכל בניין. יצירת אמון עם הדיירים והצגת התהליך, הזכויות והשלבים הצפויים בצורה ברורה ושקופה.',
        icon: Users
    },
    {
        id: 2,
        title: 'מינוי נציגות דיירים',
        description: 'בחירת נציגות מקרב הדיירים ואישור של 51% מבעלי הדירות להסמכתה כנציגות רשמית המייצגת את המתחם.',
        icon: UserCheck
    },
    {
        id: 3,
        title: 'בחירת עורך דין דיירים',
        description: 'הנציגות בוחרת עורך דין מטעמה, כולל אפשרות לעורך דין שמוצע על ידי הדיירים עצמם. אני מלווה את תהליך הבחירה ומסייע בקידום התקשרות מקצועית ונכונה.',
        icon: Scale
    },
    {
        id: 4,
        title: 'מכרז יזמים ומשא ומתן',
        description: 'ניהול מכרז יזמים מסודר בין מספר חברות מתאימות לפרויקט וניהול משא ומתן ביניהן להשגת מקסימום תמורות עבור הדיירים. הנציגות היא זו שבוחרת את החברה היזמית עמה יתקדם הפרויקט.',
        icon: HardHat
    },
    {
        id: 5,
        title: 'קידום משפטי והתקדמות לביצוע',
        description: 'קידום ההסכם המשפטי מול החברה היזמית הנבחרת והשגת 67% חתימות והערות אזהרה לטובת פינוי בינוי. לאחר מכן, קידום הפרויקט לשלבי תכנון, היתרים וביצוע.',
        icon: FileCheck
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
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center mb-6">
                            דיירים במרכז. <span className="text-brand-gold">אמון ושקיפות מלאה.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-600 px-4">
                            <p className="text-xl font-medium text-brand-text">
                                פרויקט שמצליח. פינוי בינוי צריך להתחיל נכון.
                            </p>
                            <p className="leading-relaxed">
                                לא בלחצים, לא בהבטחות כלליות ולא בכפייה של חברות יזמיות, אלא בתהליך מסודר שבו הדיירים הם בעלי הכוח והשליטה.
                            </p>
                            <p className="leading-relaxed">
                                אני מלווה מתחמי פינוי בינוי מהשלב הראשון בשטח ועד קידום הפרויקט להיתרים וביצוע, תוך בניית אמון, ארגון הדיירים וניהול משא ומתן מקצועי שמטרתו אחת: מקסימום תמורות וביטחון מלא לבעלי הדירות.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <h3 className="text-2xl font-bold text-brand-text mt-12 mb-4">איך זה עובד בפועל</h3>
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
