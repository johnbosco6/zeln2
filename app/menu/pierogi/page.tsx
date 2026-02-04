import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function Pierogi() {
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
                        <h1 className={styles.menuTitle}>Pierogi</h1>
                        <p className={styles.menuSubtitle}>Tradycyjne polskie smaki</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Meat dumplings/ black pudding/ shallot/ roasted apple/ dill
                                        </div>
                                        <div className={styles.itemCategory}>meat dish</div>
                                    </div>
                                    <div className={styles.itemPrice}>39 PLN</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Russian pierogi/onion lard/smoked cream
                                        </div>
                                        <div className={styles.itemCategory}>vegetarian dish</div>
                                    </div>
                                    <div className={styles.itemPrice}>39 PLN</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Vegan pierogi / dried tomato / spinach / celery cracklings / olive oil
                                        </div>
                                        <div className={styles.itemCategory}>vegan dish</div>
                                    </div>
                                    <div className={styles.itemPrice}>39 PLN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
