import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function PrzystawkiZupy() {
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

                <div className={styles.menuPage}>
                    <div className={styles.menuHeader}>
                        <h1 className={styles.menuTitle}>Przystawki i Zupy</h1>
                        <p className={styles.menuSubtitle}>Świeże i aromatyczne rozpoczęcie posiłku</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Przystawki</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Babka ziemniaczana/ kwaśna śmietana/ sos borowikowy/ szczypiorek
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Chałka/ pate drobiowo-wołowe/ żel z pigwy/ karmelizowana cebula/ balsamico
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>32zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Chałka/ cytrynowe creme fraiche/ figa/ pistacje/ mięta
                                        </div>
                                        <div className={styles.itemCategory}>danie wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Bułka orkiszowa
                                        </div>
                                        <div className={styles.itemCategory}>dodatek</div>
                                    </div>
                                    <div className={styles.itemPrice}>11zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Zupy</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Rosół z kołdunami/ oliwa lubczykowa
                                        </div>
                                        <div className={styles.itemCategory}>mięsny</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Flaczki z boczniaka/ majeranek
                                        </div>
                                        <div className={styles.itemCategory}>zupa wegańska</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Mięsna z kiełbasą i kluseczkami
                                        </div>
                                        <div className={styles.itemCategory}>zupa mięsna</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Krem z batata z imbirem
                                        </div>
                                        <div className={styles.itemCategory}>zupa wegańska</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Menu Dziecięce</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Rosół z marchewką i orkiszowymi kluseczkami
                                        </div>
                                        <div className={styles.itemCategory}>mięsne</div>
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
