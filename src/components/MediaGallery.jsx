import React from 'react';
import { Play } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

// Import media
import conferenceVideo from '../assets/media/conference_video.mp4';
import videoPoster from '../assets/media/video_poster.jpg';
import conference2 from '../assets/media/conference_2.jpg';
import conference3 from '../assets/media/conference_3.jpg';

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
                    {/* Video Section - Prominent */}
                    <FadeIn delay={0.2} direction="right" className="h-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] border border-gray-100 group">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster={videoPoster}
                            >
                                <source src={conferenceVideo} type="video/mp4" />
                                הדפדפן שלך לא תומך בניגון וידאו.
                            </video>
                        </div>
                    </FadeIn>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <FadeIn delay={0.3} direction="up" className="h-48 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={conference2}
                                    alt="מפגש הסברה"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5} direction="up" className="h-48 md:h-auto">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                                <img
                                    src={conference3}
                                    alt="סיור בשטח"
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
