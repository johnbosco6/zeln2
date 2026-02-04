import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import OpeningHours from "../components/OpeningHours";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import styles from "./kontakt.module.css";

export default function Kontakt() {
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
                    <h1 className={styles.heroTitle}>Kontakt</h1>
                    <p className={styles.heroSubtitle}>
                        Skontaktuj się z nami - chętnie odpowiemy na wszystkie pytania
                    </p>
                </section>

                {/* Contact Content */}
                <div className={styles.contactContainer}>
                    {/* Contact Info Cards */}
                    <div className={styles.contactGrid}>
                        {/* Address Card */}
                        <div className={styles.contactCard}>
                            <div className={styles.cardIcon}>
                                <MapPin size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Adres</h3>
                            <p className={styles.cardText}>ul. Królewska 3</p>
                            <p className={styles.cardText}>Lublin, Poland</p>
                            <p className={styles.cardSubtext}>Stare Miasto - w sercu Lublina</p>
                            <a
                                href="https://maps.google.com/?q=ul.+Królewska+3,+Lublin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cardLink}
                            >
                                Otwórz w mapach →
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className={styles.contactCard}>
                            <div className={styles.cardIcon}>
                                <Phone size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Telefon</h3>
                            <a href="tel:+48500068241" className={styles.phoneNumber}>
                                500 068 241
                            </a>
                            <p className={styles.cardSubtext}>Zadzwoń, aby zarezerwować stolik lub złożyć zamówienie</p>
                        </div>

                        {/* Email Card */}
                        <div className={styles.contactCard}>
                            <div className={styles.cardIcon}>
                                <Mail size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Email</h3>
                            <a href="mailto:zielonatalerzyk@protonmail.com" className={styles.emailLink}>
                                zielonatalerzyk@protonmail.com
                            </a>
                            <p className={styles.cardSubtext}>Napisz do nas w sprawie cateringu lub rezerwacji</p>
                        </div>
                    </div>

                    {/* Opening Hours and Social Media */}
                    <div className={styles.bottomGrid}>
                        {/* Opening Hours */}
                        <div className={styles.hoursSection}>
                            <OpeningHours />
                        </div>

                        {/* Social Media & Map */}
                        <div className={styles.socialSection}>
                            <div className={styles.socialCard}>
                                <h3 className={styles.sectionTitle}>Znajdź nas w social media</h3>
                                <div className={styles.socialLinks}>
                                    <a
                                        href="https://www.instagram.com/zielonytalerzyk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                    >
                                        <Instagram size={24} />
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/ZielonyTalerzyk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                    >
                                        <Facebook size={24} />
                                        <span>Facebook</span>
                                    </a>
                                    <a
                                        href="https://www.tripadvisor.com/Restaurant_Review-g274818-d7308966-Reviews-Zielony_Talerzyk_Restaurant-Lublin_Lublin_Province_Eastern_Poland.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialButton}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H1.112l1.89 1.338c-.84.838-1.281 1.854-1.281 2.888 0 2.352 1.91 4.262 4.262 4.262 2.351 0 4.261-1.91 4.261-4.262 0-.838-.245-1.616-.663-2.28l2.425.028 2.425-.028c-.419.664-.663 1.442-.663 2.28 0 2.352 1.91 4.262 4.262 4.262 2.351 0 4.261-1.91 4.261-4.262 0-1.034-.44-2.05-1.28-2.888l1.889-1.338h-3.249c-2.307-1.569-4.975-2.353-7.645-2.353zm-6.024 5.58c1.278 0 2.315 1.037 2.315 2.315 0 1.277-1.037 2.314-2.315 2.314-1.277 0-2.314-1.037-2.314-2.314 0-1.278 1.037-2.315 2.314-2.315zm12.047 0c1.278 0 2.315 1.037 2.315 2.315 0 1.277-1.037 2.314-2.315 2.314-1.277 0-2.314-1.037-2.314-2.314 0-1.278 1.037-2.315 2.314-2.315zm-12.047.729c-.875 0-1.586.711-1.586 1.586 0 .876.711 1.587 1.586 1.587.876 0 1.587-.711 1.587-1.587 0-.875-.711-1.586-1.587-1.586zm12.047 0c-.875 0-1.586.711-1.586 1.586 0 .876.711 1.587 1.586 1.587.876 0 1.587-.711 1.587-1.587 0-.875-.711-1.586-1.587-1.586z" />
                                        </svg>
                                        <span>TripAdvisor</span>
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className={styles.mapCard}>
                                <h3 className={styles.sectionTitle}>Lokalizacja</h3>
                                <div className={styles.mapContainer}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.8!2d22.5684!3d51.2465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE0JzQ3LjQiTiAyMsKwMzQnMDYuMiJF!5e0!3m2!1sen!2spl!4v1234567890"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0, borderRadius: '12px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
