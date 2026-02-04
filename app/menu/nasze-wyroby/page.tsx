import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function NaszeWyroby() {
    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9f4] via-[#ffffff] to-[#f5fef0]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[rgba(196,214,0,0.15)] via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[rgba(0,138,75,0.12)] via-transparent to-transparent" />
                </div>

                <Navbar />
                <SecondaryNav />

                <div className={styles.menuPage}>
                    <div className={styles.menuHeader}>
                        <h1 className={styles.menuTitle}>Nasze Wyroby</h1>
                        <p className={styles.menuSubtitle}>Domowe pieczywo i specjały</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Chleby</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Chleb orkiszowy jasny
                                        </div>
                                        <div className={styles.itemCategory}>własnego wypieku, 100% mąka orkiszowa, na zakwasie</div>
                                    </div>
                                    <div className={styles.itemPrice}>16zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Chleb żytni
                                        </div>
                                        <div className={styles.itemCategory}>na zakwasie</div>
                                    </div>
                                    <div className={styles.itemPrice}>14zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Chleb gryczany <span className={styles.itemNote}>[BG]</span>
                                        </div>
                                        <div className={styles.itemCategory}>na niepalonej kaszy gryczanej</div>
                                    </div>
                                    <div className={styles.itemPrice}>14zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Nasze Specjały</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Zakwas buraczany
                                        </div>
                                        <div className={styles.itemCategory}>Butelka 250 ml</div>
                                    </div>
                                    <div className={styles.itemPrice}>9zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Esencja imbirowa
                                        </div>
                                        <div className={styles.itemCategory}>Butelka 300 ml</div>
                                    </div>
                                    <div className={styles.itemPrice}>18zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
