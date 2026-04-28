
import styles from "../page.module.css";
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


                {/* Hero Section */}
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Dostawa</h1>
                    <p className={styles.heroSubtitle}>
                        Świeże dania prosto do Ciebie
                    </p>
                    <div className={styles.heroBadge}>Dostawa do Domu & Pracy</div>
                </section>

                {/* Content Sections */}
                <div className={styles.contentSection}>
                    {/* Main Info Card */}
                    <div className={styles.card}>
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
                        <div className={styles.relative}>
                            <Image
                                src="/images/raw/DSC_8983_surowe.webp"
                                alt="Dostawa jedzenia"
                                width={600}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>Smaczna dostawa</div>
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
                        <div className={styles.relative}>
                            <Image
                                src="/images/catering/DSC_3440bm.webp"
                                alt="Świeże danie"
                                width={600}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>
                                Szybka Dostawa
                            </div>
                        </div>
                    </div>

                    {/* Section with Image 2 */}
                    <div className={`${styles.card} ${styles.cardReverse}`}>
                        <div className={styles.relative}>
                            <Image
                                src="/images/catering/DSC_3457bm.webp"
                                alt="Dostawa jedzenia"
                                width={600}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>
                                Świeże Składniki
                            </div>
                        </div>
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
                        <div className={styles.relative} style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                            <Image
                                src="/images/catering/DSC_3461bm.webp"
                                alt="Zdrowe jedzenie"
                                width={800}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>
                                Zamów Teraz
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Zamów Teraz!</h2>
                            <p className={styles.cardText}>
                                Skontaktuj się z nami telefonicznie, aby złożyć zamówienie.
                                <br /><br />
                                Czekamy na Twój telefon!
                            </p>
                        </div>
                    </div>
                    {/* Raw Photo Strip */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0.75rem',
                        marginTop: '1rem',
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}>
                        {[
                            { src: '/images/raw/DSC_8934_surowe.webp', label: 'Świeżość' },
                            { src: '/images/raw/DSC_8940_surowe.webp', label: 'Jakość' },
                            { src: '/images/raw/DSC_8942_surowe.webp', label: 'Smak' },
                        ].map((item) => (
                            <div key={item.src} className={styles.relative} style={{ height: '200px' }}>
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    sizes="33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.imageOverlayGlass}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        </>
    );
}
