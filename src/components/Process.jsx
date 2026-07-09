import React from 'react';
import { Users, Handshake, Trophy, FileText, Hourglass } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, Reveal } from './Reveal';

const steps = [
    {
        id: 1,
        title: '1. התארגנות ראשונית ובחירת נציגות',
        bullets: [
            'קיום אסיפת דיירים ראשונה והסבר פוטנציאל.',
            'בחירת נציגות רשמית ושיתוף פעולה.'
        ],
        bottomLine: 'השורה התחתונה: כוח קבוצתי מאוחד.',
        icon: Users,
        color: {
            primary: 'bg-[#1e528b]',
            border: 'border-[#1e528b]',
            text: 'text-[#1e528b]'
        }
    },
    {
        id: 2,
        title: '2. מינוי אנשי מקצוע מטעם הדיירים',
        bullets: [
            'בחירת עורך דין, מפקח בנייה ושמאי בעלי ניסיון.',
            'שמירה מלאה על האינטרסים שלכם.'
        ],
        bottomLine: 'השורה התחתונה: הגנה מקצועית מלאה.',
        icon: Handshake,
        color: {
            primary: 'bg-[#ee8012]',
            border: 'border-[#ee8012]',
            text: 'text-[#ee8012]'
        }
    },
    {
        id: 3,
        title: '3. מכרז יזמים ובחירת חברה מבצעת',
        bullets: [
            'בחינת ניסיון, חוסן כלכלי ותמורות.',
            'בחירת ההצעה הטובה ביותר.'
        ],
        bottomLine: 'השורה התחתונה: ביטחון ותמורות מקסימליות.',
        icon: Trophy,
        color: {
            primary: 'bg-[#3ca445]',
            border: 'border-[#3ca445]',
            text: 'text-[#3ca445]'
        }
    },
    {
        id: 4,
        title: '4. חתימה על הסכם פינוי-בינוי וקידום תוכניות',
        bullets: [
            'משא ומתן קשוח וקבלת ערבויות.',
            'קידום ואישור תוכניות בנייה (תב"ע).'
        ],
        bottomLine: 'השורה התחתונה: הסכם מוגן משפטית.',
        icon: FileText,
        color: {
            primary: 'bg-[#892383]',
            border: 'border-[#892383]',
            text: 'text-[#892383]'
        }
    },
    {
        id: 5,
        title: '5. קידום תוכניות ואישורים סטטוטוריים',
        bullets: [
            'גיבוש והגשת תוכניות לוועדה המקומית והמחוזית.',
            'ביצוע תיקונים והתאמות מול גורמי התכנון.',
            'קיום דיונים, שימועים, והתנגדויות (במידה ויש).',
            'השלמת דרישות למתן היתר הבנייה.'
        ],
        bottomLine: 'השורה התחתונה: תהליך יסודי וממושך בדרך לאישור הסופי.',
        icon: Hourglass,
        color: {
            primary: 'bg-[#189baf]',
            border: 'border-[#189baf]',
            text: 'text-[#189baf]'
        }
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-[#eef6fc] relative overflow-hidden" dir="rtl">
            {/* Background City Silhouette Concept */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #1e528b 49px, #1e528b 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #1e528b 49px, #1e528b 50px)',
                backgroundSize: '50px 50px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <center className="mb-16">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e528b] text-center mb-6 drop-shadow-sm">
                            מתווה השלבים לקידום הפרויקט
                        </h2>
                    </Reveal>
                </center>

                <div className="max-w-4xl mx-auto space-y-24 md:space-y-16 mt-12 md:mt-0">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isEven = index % 2 === 1; // 0-indexed, so 1 is 2nd step
                        
                        return (
                            <FadeIn key={step.id} delay={index * 0.1} direction="up">
                                <div className="relative">
                                    
                                    {/* Main Card */}
                                    <div className={`relative bg-white border-[5px] md:border-[6px] ${step.color.border} rounded-[2rem] md:rounded-[2.5rem] flex flex-col md:flex-row shadow-lg z-10`}>
                                        
                                        {/* Floating Icon for Desktop */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} hidden md:flex w-28 h-28 rounded-full border-[6px] ${step.color.border} bg-white items-center justify-center shadow-xl z-20`}>
                                            <Icon size={48} className={step.color.text} strokeWidth={1.5} />
                                        </div>

                                        {/* Floating Icon for Mobile (Top Center) */}
                                        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 md:hidden w-20 h-20 rounded-full border-[5px] ${step.color.border} bg-white flex items-center justify-center shadow-lg z-20`}>
                                            <Icon size={36} className={step.color.text} strokeWidth={1.5} />
                                        </div>

                                        {/* Content Area */}
                                        <div className={`p-6 pt-14 md:p-8 w-full ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                                            <h3 className="text-xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-right">
                                                {step.title}
                                            </h3>
                                            
                                            <ul className="text-gray-700 space-y-3 md:space-y-2 text-base md:text-lg font-medium">
                                                {step.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                                                        <span className={`mt-1 font-bold ${step.color.text}`}>*</span> 
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom Line attached to the card */}
                                    <div className={`relative -mt-4 md:-mt-6 mx-auto w-[95%] md:w-[80%] ${step.color.primary} text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-b-[1.5rem] md:rounded-b-[2rem] text-center shadow-md z-0`}>
                                        <div className="pt-3 md:pt-4 text-base md:text-xl leading-tight md:leading-normal">
                                            {step.bottomLine}
                                        </div>
                                        {/* Triangle pointing down */}
                                        {index < steps.length - 1 && (
                                            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 ${step.color.primary} rotate-45`}></div>
                                        )}
                                    </div>

                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <FadeIn delay={0.6}>
                    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white border-2 border-gray-200 rounded-2xl text-center shadow-lg">
                        <p className="text-gray-800 text-lg font-bold">
                            **שימו לב: כל השירותים ממומנים במלואם על ידי היזם שייבחר ע״י הדיירים – ללא שום עלות מצד הדיירים!
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Process;
