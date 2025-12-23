import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

const reviews = [
    {
        id: 1,
        name: "משפחת שמעון",
        role: "ביאליק 8–12, אשקלון",
        content: "התהליך היה שקוף מהרגע הראשון. שראל לקח אותנו יד ביד, הסביר כל שלב, ודאג שנבין על מה אנחנו חותמים. התחושה שיש מישהו שבאמת שומר עליך היא המפתח להצלחה בפרויקט כזה.",
        rating: 5
    },
    {
        id: 2,
        name: "משפחת כהן",
        role: "חננאל 2, אשקלון",
        content: "במקום להתמודד לבד מול יזמים ועורכי דין, קיבלנו מעטפת מקצועית וליווי אישי. היכולת להשיג עבורנו תמורות שלא היינו משיגים לבד מוכיחה את הערך העצום של הליווי הזה.",
        rating: 5
    },
    {
        id: 3,
        name: "נציגות דיירים",
        role: "חידא 3–11, אשקלון",
        content: "החשש הגדול שלנו היה חוסר וודאות וחשדנות בין הדיירים. שראל ידע לגשר, לאחד את כולם סביב מטרה משותפת ולהוביל אותנו לבחירת יזם בראש שקט ובביטחון מלא.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <center className="mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center mb-6">
                            מה אומרים <span className="text-brand-gold">הדיירים?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
                            סיפורי ההצלחה של דיירים שבחרו לעבור את התהליך בביטחון ובשקט נפשי.
                        </p>
                    </Reveal>
                </center>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <FadeIn key={review.id} delay={index * 0.2} direction="up" fullWidth>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col relative group">
                                {/* Decorative Quote Icon */}
                                <div className="absolute top-6 left-6 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors">
                                    <Quote size={40} />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6 text-brand-gold">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10 flex-grow">
                                    "{review.content}"
                                </p>

                                {/* Author */}
                                <div className="mt-auto border-t border-gray-200 pt-6">
                                    <h4 className="font-bold text-brand-text text-lg">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
