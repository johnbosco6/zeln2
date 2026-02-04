import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import styles from "./dostawa.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dostawa i Kontakt",
    description: "Zamów zdrowe jedzenie prosto pod Twoje drzwi. Szybka dostawa w Lublinie i łatwy kontakt z naszą restauracją.",
    keywords: ["jedzenie na telefon Lublin", "dostawa jedzenia Lublin", "zdrowe jedzenie na wynos", "kontakt Zielony Talerzyk"],
};
import Image from "next/image";

export default function Dostawa() {
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
                    <h1 className={styles.heroTitle}>Dostawa</h1>
                    <p className={styles.heroSubtitle}>
                        Świeże dania prosto do Ciebie
                    </p>
                </section>

                {/* Content Sections */}
                <div className={styles.contentSection}>
                    {/* Main Info Card */}
                    <div className={`${styles.card} ${styles.fullWidthCard}`}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Dostawa do Domu lub Pracy</h2>
                            <p className={styles.cardText}>
                                Masz ochotę na pyszne jedzenie, ale nie możesz wyjść z domu lub z pracy?
                                <br /><br />
                                Zadzwoń, a przywieziemy świeże i pachnące dania prosto do Ciebie:
                                <br />
                                <strong style={{ fontSize: '1.2rem', color: 'var(--primary-green)', display: 'block', margin: '1rem 0' }}>
                                    Tel. 500 068 241
                                </strong>
                            </p>
                        </div>
                    </div>

                    {/* Section with Image 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Wygodna Płatność</h2>
                            <p className={styles.cardText}>
                                Przyjmujemy płatności kartą lub gotówką.
                                <br /><br />
                                Dostawa może trwać do 1,5 godziny.
                                <br /><br />
                                Koszt dostawy na terenie miasta Lublin od 11 zł.
                            </p>
                        </div>
                        <Image
                            src="/food1.jpg"
                            alt="Świeże danie"
                            width={600}
                            height={400}
                            className={styles.cardImage}
                        />
                    </div>

                    {/* Section with Image 2 */}
                    <div className={`${styles.card} ${styles.cardReverse}`}>
                        <Image
                            src="/catering1.jpg"
                            alt="Dostawa jedzenia"
                            width={600}
                            height={400}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Świeże Składniki</h2>
                            <p className={styles.cardText}>
                                Wszystkie nasze dania przygotowujemy ze świeżych, ekologicznych składników.
                                <br /><br />
                                Dostarczamy je w odpowiednich opakowaniach, aby zachować ich smak i temperaturę.
                            </p>
                        </div>
                    </div>

                    {/* Final Section */}
                    <div className={`${styles.card} ${styles.fullWidthCard}`}>
                        <Image
                            src="/catering3.jpg"
                            alt="Zdrowe jedzenie"
                            width={800}
                            height={400}
                            className={styles.cardImage}
                            style={{ maxWidth: '600px', margin: '0 auto 2rem' }}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Zamów Teraz!</h2>
                            <p className={styles.cardText}>
                                Skontaktuj się z nami telefonicznie, aby złożyć zamówienie.
                                <br /><br />
                                Czekamy na Twój telefon!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
