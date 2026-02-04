"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import { ChevronDown, HelpCircle } from "lucide-react";
import styles from "./faq.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Często Zadawane Pytania (FAQ)",
    description: "Dowiedz się więcej o Zielonym Talerzyku. Odpowiedzi na pytania o rezerwacje, parking, opcje wegańskie i przyjazność dla zwierząt.",
    keywords: ["faq Zielony Talerzyk", "rezerwacje restauracja Lublin", "restauracja przyjazna psom Lublin", "parking Zielony Talerzyk"],
};

const faqs = [
    {
        question: "Czy akceptujecie zwierzęta?",
        answer: "Tak, nasza restauracja jest przyjazna zwierzętom! Zapraszamy ze swoimi pupilami – na życzenie chętnie podamy miskę z wodą."
    },
    {
        question: "Czy oferujecie opcje wegańskie i wegetariańskie?",
        answer: "Oczywiście! W Zielonym Talerzyku stawiamy na różnorodność. Większość naszych dań jest wegetariańska lub wegańska, a każda pozycja w menu jest wyraźnie oznaczona."
    },
    {
        question: "Czy posiadacie menu dla dzieci?",
        answer: "Tak, mamy specjalnie przygotowane propozycje dla najmłodszych gości, które są zdrowe, smaczne i podane w przyjazny sposób."
    },
    {
        question: "Jak mogę zarezerwować stolik?",
        answer: "Rezerwacji można dokonać telefonicznie pod numerem 500 068 241 lub bezpośrednio w restauracji przy ul. Królewskiej 3 w Lublinie."
    },
    {
        question: "Czy oferujecie dania bezglutenowe?",
        answer: "Mamy w ofercie dania naturalnie bezglutenowe. Prosimy jednak o poinformowanie obsługi o alergiach przy składaniu zamówienia, abyśmy mogli zachować najwyższe standardy ostrożności."
    },
    {
        question: "Czy dowozicie jedzenie?",
        answer: "Tak, oferujemy dostawę na terenie Lublina. Szczegóły dotyczące obszaru dostaw i kosztów znajdziesz w zakładce 'Dostawa'."
    },
    {
        question: "Gdzie znajduje się najbliższy parking?",
        answer: "Restauracja znajduje się na lubelskiej Starówce. Najbliższe miejsca parkingowe znajdują się wzdłuż ulicy Królewskiej oraz na pobliskich parkingach płatnych w centrum miasta."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[#ffffff]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
                </div>

                <Navbar />
                <SecondaryNav />

                <div className={styles.container}>
                    <h1 className={styles.title}>Często Zadawane Pytania (FAQ)</h1>

                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={styles.faqItem}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className={styles.question}>
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={styles.icon}
                                        style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                {openIndex === index && (
                                    <div className={styles.answer}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.7 }}>
                        <p>Nie znalazłeś odpowiedzi na swoje pytanie? Zadzwoń do nas!</p>
                        <h3 style={{ color: 'var(--primary-green)', marginTop: '0.5rem' }}>☎️ 500 068 241</h3>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
