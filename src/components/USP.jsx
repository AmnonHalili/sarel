import React from 'react';
import { Calculator, Handshake, Heart, Clock } from 'lucide-react';
import { FadeIn } from './Reveal';

const USP = () => {
    return (
        <section id="why-me" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <FadeIn delay={0.1} fullWidth>
                        <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                                <Calculator size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-4">ידע נדל"ני וכלכלי</h3>
                            <p className="text-gray-600 leading-relaxed">
                                שילוב ידע נדל"ני עם הבנה כלכלית וחשבונאית שמבטיח מקסימום רווח.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} fullWidth>
                        <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                                <Handshake size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-4">מו"מ אפקטיבי</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ניהול משא ומתן בשפה שמבינה דיירים ומשיגה תוצאות.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} fullWidth>
                        <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-4">100% נאמנות אליכם</h3>
                            <p className="text-gray-600 leading-relaxed">
                                אני עובד עבורכם בלבד. ללא ניגוד אינטרסים וללא העדפת יזמים.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} fullWidth>
                        <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-4">ליווי אישי וזמין</h3>
                            <p className="text-gray-600 leading-relaxed">
                                זמינות גבוהה, ירידה לפרטים הקטנים וליווי אישי לאורך כל הדרך.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default USP;
