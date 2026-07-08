import React from 'react';
import { Play } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

// Import media
import newImage1 from '../assets/media/new_image_1.jpeg';
import newImage2 from '../assets/media/new_image_2.jpeg';
import conference2 from '../assets/projects/WhatsApp Image 2025-12-28 at 00.34.44.jpeg';
import conference3 from '../assets/projects/WhatsApp Image 2025-12-28 at 00.37.56.jpeg';
import conference4 from '../assets/projects/WhatsApp Image 2025-12-28 at 01.05.06.jpeg';

const MediaGallery = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <center className="mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center mb-6">
                            שראל <span className="text-brand-gold">בשטח</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
                            רגעים מתוך כנסים, מפגשי דיירים ועשייה יומיומית.
                        </p>
                    </Reveal>
                </center>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* New Images Section replacing Video */}
                    <div className="grid grid-cols-1 gap-4 h-full">
                        <FadeIn delay={0.2} direction="right" className="h-48 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={newImage1}
                                    alt="מפגש דיירים 1"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="right" className="h-48 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={newImage2}
                                    alt="מפגש דיירים 2"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 gap-4 h-full">
                        <FadeIn delay={0.3} direction="up" className="h-32 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={conference2}
                                    alt="מפגש הסברה"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5} direction="up" className="h-32 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={conference3}
                                    alt="סיור בשטח"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.7} direction="up" className="h-32 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={conference4}
                                    alt="פעילות בשטח"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaGallery;
