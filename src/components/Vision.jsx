import React from 'react';
import { Quote, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

const Vision = () => {
    return (
        <section id="vision" className="pt-8 pb-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center">
                    <Reveal>
                        <div className="flex justify-center mb-6 text-brand-gold">
                            <Quote size={48} className="rotate-180 opacity-20" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-8">
                            החזון <span className="text-brand-gold">שלי</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="space-y-6 text-xl md:text-2xl font-light text-gray-600 leading-relaxed md:leading-relaxed">
                            <p>
                                החזון שלי הוא לגעת בחיים של אנשים דרך התחדשות עירונית שמכבדת כל דייר ודיירת.
                            </p>
                            <p>
                                אני מאמין שלכל אחד מגיע בית שמעניק ביטחון, נוחות ושקט נפשי, בין אם מדובר בדייר צעיר בתחילת דרכו ובין אם בדייר מבוגר שראוי להזדקן בכבוד.
                            </p>
                            <p>
                                המטרה שלי היא לעשות טוב לאחר להפיח חיים חדשים בשכונות ישנות, להחזיר להן אמון, ערך ועתיד, וליצור סביבת מגורים מודרנית, נגישה ובטוחה עם ממ"ד בכל דירה.
                            </p>
                            <p className="font-medium text-brand-text">
                                בסופו של דבר, זו לא רק בנייה מחדש, זו יצירה של איכות חיים, יציבות ותקווה לדורות קדימה.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="mt-12 flex flex-col items-center gap-4">
                            <div className="w-16 h-[2px] bg-brand-gold/30"></div>
                            <p className="text-lg font-bold text-brand-gold tracking-wide flex items-center gap-2">
                                בשם השם נעשה ונצליח
                                <Heart size={16} fill="currentColor" />
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Vision;
