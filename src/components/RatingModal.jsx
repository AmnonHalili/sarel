import React, { useState } from 'react';
import { Star, X, Send } from 'lucide-react';

const RatingModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(5);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp message
        const phoneNumber = "972505728489"; // Sarel's number
        const stars = "⭐".repeat(rating);
        const text = `היי שראל, רציתי לפרגן לך בדירוג של ${rating} כוכבים!
שם: ${name}
דירוג: ${stars}
המלצה: ${comment}

תודה רבה!`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-brand-text mb-2">דרג את שראל</h3>
                    <p className="text-gray-500">נשמח לשמוע על החוויה שלך</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Stars Selection */}
                    <div className="flex justify-center gap-2 flex-row-reverse">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="group focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star
                                    size={32}
                                    className={`${star <= rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-300'} transition-colors`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                                placeholder="ישראל ישראלי"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ההמלצה שלך</label>
                            <textarea
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all resize-none"
                                placeholder="ספר איך היה התהליך..."
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-gold/20"
                    >
                        <span>שלח דירוג בווצאפ</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RatingModal;
