import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-brand-text">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="text-2xl font-bold text-brand-text">הצהרת נגישות</h2>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-500 hover:text-brand-text hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="סגור הצהרת נגישות"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-right leading-relaxed text-gray-700">
                        <p className="font-medium">
                            אנו רואים חשיבות עליונה במתן שירות שוויוני לכלל הגולשים ובשיפור חווית הגלישה באתר לאנשים עם מוגבלות.
                            בהתאם לכך, השקענו משאבים רבים בהנגשת האתר, במטרה להקל על השימוש בו ולהפוך את השירותים שלנו לזמינים יותר עבור אנשים עם מוגבלויות.
                        </p>

                        <div>
                            <h3 className="text-lg font-bold text-brand-text mb-2 text-brand-gold">רמת הנגישות באתר</h3>
                            <p>
                                האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.
                                התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-brand-text mb-2 text-brand-gold">תיקונים והתאמות שבוצעו</h3>
                            <ul className="space-y-2 list-none">
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>האתר מותאם לניווט באמצעות מקלדת.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>האתר מותאם עבור קוראי מסך.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>שימוש בכותרות ותיוג היררכי לטובת התמצאות קלה.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>לכל התמונות באתר יש טקסט אלטרנטיבי (Alt).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>האתר מותאם לצפייה בכל סוגי הדפדפנים המודרניים (Chrome, Firefox, Safari, Edge).</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-brand-text mb-2 text-brand-gold">הסדרי נגישות פיזיים</h3>
                            <p>
                                משרדנו ממוקם בכתובת: <strong>[כתובת המשרד]</strong>.
                                <br />
                                במקום קיימים הסדרי הנגישות הבאים:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
                                <li>חניית נכים</li>
                                <li>דרך גישה נגישה</li>
                                <li>מעלית נגישה</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-brand-text mb-2 text-brand-gold">יצירת קשר ודיווח על תקלות</h3>
                            <p>
                                אנחנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות, לקבל את השירות הנגיש ביותר.
                                <br />
                                במידה ומצאתם באתר בעיה בנושא הנגישות או שאתם זקוקים עזרה, אתם מוזמנים לפנות אלינו:
                            </p>
                            <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <p><strong>שם:</strong> שראל ישראל חלפון</p>
                                <p><strong>טלפון:</strong> 050-572-8489</p>
                                <p><strong>אימייל:</strong> H0505728489@gmail.com</p>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500 pt-4 border-t border-gray-100">
                            תאריך עדכון הצהרה: {new Date().toLocaleDateString('he-IL')}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AccessibilityModal;
