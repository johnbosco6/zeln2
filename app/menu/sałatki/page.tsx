import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function Salatki() {
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
                        <h1 className={styles.menuTitle}>Sałatki</h1>
                        <p className={styles.menuSubtitle}>Świeże i zdrowe kompozycje</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Bowl/ bean paste/ root vegetables/ Brussels sprouts/ pickled pumpkin
                                        </div>
                                        <div className={styles.itemCategory}>Vegan</div>
                                    </div>
                                    <div className={styles.itemPrice}>49 PLN</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Caesar/ chicken/ bacon/ egg/ romaine lettuce/ croutons/ Caesar dressing/ Grana Padano
                                        </div>
                                        <div className={styles.itemCategory}>Meat</div>
                                    </div>
                                    <div className={styles.itemPrice}>49 PLN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
