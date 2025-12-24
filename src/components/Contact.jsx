import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { FadeIn, Reveal } from './Reveal';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.phone) {
            alert('נא למלא שם וטלפון');
            return;
        }

        const phoneNumber = '972505728489';
        const text = `שלום שראל, אני פונה אליך מהאתר.%0A%0Aשם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aכתובת הפרויקט: ${formData.address || 'לא צוינה'}%0A%0Aאשמח לפרטים נוספים.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">

                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
                            בואו נהפוך את הבניין שלכם <span className="text-brand-gold">לנכס חדש</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            השאירו פרטים ונחזור אליכם לשיחת ייעוץ ראשונית ללא התחייבות.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <FadeIn direction="right" fullWidth>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">שם מלא</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="ישראל ישראלי"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="phone">טלפון</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="050-0000000"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="address">כתובת הפרויקט (אופציונלי)</label>
                                    <input
                                        id="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder="רחוב ומספר"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-gold text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-goldHover transition-all flex items-center justify-center gap-2 group shadow-md"
                                >
                                    שליחת פרטים
                                    <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <div className="space-y-8 py-8">
                        <FadeIn delay={0.2} direction="left" fullWidth>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-text mb-1">טלפון ישיר</h3>
                                    <p className="text-gray-600 text-lg dir-ltr text-right">050-572-8489</p>
                                    <p className="text-sm text-gray-500 mt-1">זמין גם בוואטסאפ</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="left" fullWidth>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-text mb-1">אימייל</h3>
                                    <p className="text-gray-600 text-lg">H0505728489@gmail.com</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-gold shrink-0 shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-text mb-1">אזורי פעילות</h3>
                                    <p className="text-gray-600 text-lg font-medium">אשקלון</p>


                                </div>
                            </div>
                        </FadeIn>

                        {/* Trust Quote */}
                        <FadeIn delay={0.5} direction="left" fullWidth>
                            <div className="mt-12 p-6 border-r-4 border-brand-gold bg-white rounded-r-none rounded-l-2xl shadow-sm border border-gray-100">
                                <p className="text-gray-600 italic">
                                    "בשבילי פינוי בינוי הוא לא רק עסקת נדל"ן, אלא הזדמנות לשפר את איכות החיים של משפחות רבות."
                                </p>
                                <span className="block mt-2 text-brand-gold font-bold text-sm">- שראל חלפון</span>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
