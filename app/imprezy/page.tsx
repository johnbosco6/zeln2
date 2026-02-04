import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "../page.module.css";

export const metadata: Metadata = {
    title: "Imprezy Okolicznościowe",
    description: "Zorganizuj niezapomniane przyjęcie w Zielonym Talerzyku. Komunie, chrzciny, urodziny i spotkania firmowe w sercu Lublina.",
    keywords: ["imprezy okolicznościowe Lublin", "chrzciny Lublin", "komunie Lublin", "sala na urodziny Lublin", "spotkania firmowe Lublin"],
};

export default function Imprezy() {
    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9f4] via-[#ffffff] to-[#f5fef0]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[rgba(196,214,0,0.15)] via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[rgba(0,138,75,0.12)] via-transparent to-transparent" />
                </div>

                <Navbar />
                <SecondaryNav />

                {/* Hero Section */}
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Imprezy Okolicznościowe</h1>
                    <p className={styles.heroSubtitle}>
                        Twoja wyjątkowa uroczystość w Lublinie
                    </p>
                </section>

                {/* Content Sections */}
                <div className={styles.contentSection}>
                    {/* Section 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Rodzinna Atmosfera</h2>
                            <p className={styles.cardText}>
                                W Zielonym Talerzyku możesz zorganizować spotkanie lub większe wydarzenie w przyjaznej, rodzinnej atmosferze.
                                <br /><br />
                                Planujesz urodziny, chrzciny lub inną okazję, którą chcesz uczcić z rodziną i przyjaciółmi? Chętnie ugościmy Was w naszej restauracji.
                            </p>
                        </div>
                        <Image
                            src="/interior.jpg"
                            alt="Wnętrze restauracji"
                            width={600}
                            height={400}
                            className={styles.cardImage}
                        />
                    </div>

                    {/* Section 2 */}
                    <div className={`${styles.card} ${styles.cardReverse}`}>
                        <Image
                            src="/food2.jpg"
                            alt="Dania na imprezę"
                            width={600}
                            height={400}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Twoja Impreza Okolicznościowa w Lublinie</h2>
                            <p className={styles.cardText}>
                                Zielony Talerzyk to idealny lokal na imprezy, zlokalizowany w samym centrum Lublina. Ważne wydarzenia wymagają odpowiedniej oprawy.
                                <br /><br />
                                Przytulna atmosfera i ekologiczne, pieczołowicie przygotowane potrawy, zapewnią niezapomniane wrażenia.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Niezapomniane Wrażenia</h2>
                            <p className={styles.cardText}>
                                Nasze niebanalne menu zadowoli nawet najbardziej wybrednych gości, a urok miejsca i chwili zapamiętają z pewnością wszyscy uczestnicy spotkania.
                                <br /><br />
                                Restauracja Zielony Talerzyk to idealne miejsce do organizacji wszelkiego rodzaju imprez okolicznościowych.
                            </p>
                        </div>
                        <Image
                            src="/food3.jpg"
                            alt="Eleganckie dania"
                            width={600}
                            height={400}
                            className={styles.cardImage}
                        />
                    </div>

                    {/* Full Width Section */}
                    <div className={`${styles.card} ${styles.fullWidthCard}`}>
                        <Image
                            src="/catering2.jpg"
                            alt="Catering na imprezy"
                            width={800}
                            height={400}
                            className={styles.cardImage}
                            style={{ maxWidth: '600px', margin: '0 auto 2rem' }}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Catering na Twoje Wydarzenie</h2>
                            <p className={styles.cardText}>
                                Organizujemy również cateringi na wszelkiego rodzaju wydarzeniach i imprezach okolicznościowych u klienta.
                                <br /><br />
                                Zapraszamy do kontaktu!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
