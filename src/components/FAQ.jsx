import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, Reveal } from './Reveal';

const faqs = [
    {
        id: 1,
        question: "מי אתה ומה התפקיד שלך בפרויקט?",
        answer: "אני מארגן דיירים שמוביל ומנהל פרויקטי פינוי בינוי מטעם הדיירים בלבד."
    },
    {
        id: 2,
        question: "מה הערך שאתה מביא לדיירים?",
        answer: "ידע רחב וניסיון שמאחדים את הדיירים ומניעים תהליך מסודר ובטוח."
    },
    {
        id: 3,
        question: "האם אתה עובד עם יזם מסוים?",
        answer: "לא, אני פועל באופן עצמאי והבחירה ביזם נעשית על ידי הדיירים והנציגות."
    },
    {
        id: 4,
        question: "מי מקבל את ההחלטות בפרויקט?",
        answer: "הדיירים והנציגות הם מקבלי ההחלטות בכל שלב."
    },
    {
        id: 5,
        question: "איך נשמרים אמון ושקיפות לאורך הדרך?",
        answer: "באמצעות תהליך ברור, עדכונים שוטפים וקבלת החלטות מול הדיירים בלבד."
    },
    {
        id: 6,
        question: "איך נבחר היזם בפרויקט?",
        answer: "באמצעות מכרז יזמים וניהול משא ומתן, כאשר הנציגות בוחרת את החברה."
    },
    {
        id: 7,
        question: "כמה חתימות נדרשות כדי להתקדם?",
        answer: "51 אחוז להסמכת נציגות ו 67 אחוז חתימות והערות אזהרה לקידום הפרויקט."
    },
    {
        id: 8,
        question: "למה לבחור בי כמארגן דיירים?",
        answer: "כי ניסיון, ידע וניהול נכון יוצרים אחדות, שליטה ותוצאה טובה לדיירים."
    },
    {
        id: 9,
        question: "איך אתה מתוגמל על העבודה שלך?",
        answer: "אני גובה עמלת ארגון מהיזם שנבחר על ידי הנציגות, ולא מהדיירים."
    },
    {
        id: 10,
        question: "מה המטרה שלך בתהליך?",
        answer: "לעזור לאנשים לבנות סביבת מגורים נוחה, בטוחה ואיכותית לטווח ארוך."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={toggleOpen}
                className="w-full text-right py-5 px-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
            >
                <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-brand-text">{faq.question}</span>
                </div>
                <div className={`text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleItem = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <center className="mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-text text-center mb-6">
                            שאלות <span className="text-brand-gold">ותשובות נפוצות</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
                            כל מה שחשוב לדעת על תהליך הפינוי בינוי והליווי שלי.
                        </p>
                    </Reveal>
                </center>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            toggleOpen={() => toggleItem(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
