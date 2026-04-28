import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Utensils, Coffee, Cake, Salad, Soup, Wine } from "lucide-react";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* About Section */}
                <div className={styles.footerSection}>
                    <h3>Zielony Talerzyk</h3>
                    <p>Restauracja w sercu Lublina</p>
                    <p>Świeże, ekologiczne, lokalne</p>

                    {/* Social Media Icons */}
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.instagram.com/zielonytalerzyk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/ZielonyTalerzyk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Facebook"
                        >
                            <Facebook size={24} />
                        </a>
                        <a
                            href="https://www.tripadvisor.com/Restaurant_Review-g274818-d7308966-Reviews-Zielony_Talerzyk_Restaurant-Lublin_Lublin_Province_Eastern_Poland.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="TripAdvisor"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H1.112l1.89 1.338c-.84.838-1.281 1.854-1.281 2.888 0 2.352 1.91 4.262 4.262 4.262 2.351 0 4.261-1.91 4.261-4.262 0-.838-.245-1.616-.663-2.28l2.425.028 2.425-.028c-.419.664-.663 1.442-.663 2.28 0 2.352 1.91 4.262 4.262 4.262 2.351 0 4.261-1.91 4.261-4.262 0-1.034-.44-2.05-1.28-2.888l1.889-1.338h-3.249c-2.307-1.569-4.975-2.353-7.645-2.353zm-6.024 5.58c1.278 0 2.315 1.037 2.315 2.315 0 1.277-1.037 2.314-2.315 2.314-1.277 0-2.314-1.037-2.314-2.314 0-1.278 1.037-2.315 2.314-2.315zm12.047 0c1.278 0 2.315 1.037 2.315 2.315 0 1.277-1.037 2.314-2.315 2.314-1.277 0-2.314-1.037-2.314-2.314 0-1.278 1.037-2.315 2.314-2.315zm-12.047.729c-.875 0-1.586.711-1.586 1.586 0 .876.711 1.587 1.586 1.587.876 0 1.587-.711 1.587-1.587 0-.875-.711-1.586-1.587-1.586zm12.047 0c-.875 0-1.586.711-1.586 1.586 0 .876.711 1.587 1.586 1.587.876 0 1.587-.711 1.587-1.587 0-.875-.711-1.586-1.587-1.586z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Menu Links */}
                <div className={styles.footerSection}>
                    <h3>Menu</h3>
                    <div className={styles.menuLinks}>
                        <Link href="/menu/przystawki-i-zupy" className={styles.menuLink}>
                            <Soup size={18} />
                            <span>Przystawki i zupy</span>
                        </Link>
                        <Link href="/menu/dania-glowne" className={styles.menuLink}>
                            <Utensils size={18} />
                            <span>Dania Główne</span>
                        </Link>
                        <Link href="/menu/desery" className={styles.menuLink}>
                            <Cake size={18} />
                            <span>Desery</span>
                        </Link>
                        <Link href="/menu/pierogi" className={styles.menuLink}>
                            <Utensils size={18} />
                            <span>Pierogi</span>
                        </Link>
                    </div>
                </div>

                {/* More Menu Links */}
                <div className={styles.footerSection}>
                    <h3>Więcej</h3>
                    <div className={styles.menuLinks}>
                        <Link href="/menu/salatki" className={styles.menuLink}>
                            <Salad size={18} />
                            <span>Sałatki</span>
                        </Link>
                        <Link href="/menu/nasze-wyroby" className={styles.menuLink}>
                            <Coffee size={18} />
                            <span>Nasze wyroby</span>
                        </Link>
                        <Link href="/menu/napoje" className={styles.menuLink}>
                            <Wine size={18} />
                            <span>Napoje</span>
                        </Link>
                        <Link href="/catering" className={styles.menuLink}>
                            <Utensils size={18} />
                            <span>Catering</span>
                        </Link>
                        <Link href="/faq" className={styles.menuLink}>
                            <span>FAQ (Często Zadawane Pytania) ❓</span>
                        </Link>
                        <Link href="/polityka-prywatnosci" className={styles.menuLink}>
                            <span>Polityka Prywatności</span>
                        </Link>
                        <Link href="/regulamin" className={styles.menuLink}>
                            <span>Regulamin</span>
                        </Link>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={styles.footerSection}>
                    <h3>Kontakt</h3>
                    <div className={styles.contactInfo}>
                        <a href="tel:+48574933988" className={styles.contactLink}>
                            <Phone size={18} />
                            <span>574 933 988</span>
                        </a>
                        <a href="mailto:basmalublin@gmail.com" className={styles.contactLink}>
                            <Mail size={18} />
                            <span>basmalublin@gmail.com</span>
                        </a>
                        <div className={styles.contactLink}>
                            <MapPin size={18} />
                            <span>ul. Krakowskie Przedmieście 3<br />20-002 Lublin</span>
                        </div>
                    </div>
                </div>

                {/* Hours Section */}
                <div className={styles.footerSection}>
                    <h3>Godziny Otwarcia</h3>
                    <div className={styles.hoursGrid}>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Niedziela:</span>
                            <span className={styles.hourTime}>12:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Poniedziałek:</span>
                            <span className={styles.hourTime}>12:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Wtorek:</span>
                            <span className={styles.hourTime}>12:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Środa:</span>
                            <span className={styles.hourTime}>12:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Czwartek:</span>
                            <span className={styles.hourTime}>12:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Piątek:</span>
                            <span className={styles.hourTime}>12:00 - 23:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.dayLabel}>Sobota:</span>
                            <span className={styles.hourTime}>12:00 - 23:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerLegal}>
                <div className={styles.companyInfo}>
                    <h4>Dane firmowe:</h4>
                    <p>Jakub Wiśniewski Browar Dziki Wschód | ul. Krakowskie Przedmieście 3, 20-002 Lublin | NIP: 714 185 55 52</p>
                </div>
                <div className={styles.legalLinks}>
                    <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
                    <Link href="/regulamin">Regulamin</Link>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2026 Zielony Talerzyk. Wszystkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
}
