import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function Desery() {
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
                        <h1 className={styles.menuTitle}>Desery</h1>
                        <p className={styles.menuSubtitle}>Słodkie zakończenie posiłku</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Creme brûlée
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>28zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Crumble z prażonym jabłkiem/ creme anglaise/ kruszonka
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Sernik waniliowy z karmelem <span className={styles.itemNote}>[BG]</span>
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Ciasto marchewkowe
                                        </div>
                                        <div className={styles.itemCategory}>wegańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>17zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Brownie <span className={styles.itemNote}>[BG]</span>
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>15zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Blondie na belgijskiej białej czekoladzie
                                        </div>
                                        <div className={styles.itemCategory}>wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>15zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
