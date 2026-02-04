import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function DaniaGlowne() {
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
                        <h1 className={styles.menuTitle}>Dania Główne</h1>
                        <p className={styles.menuSubtitle}>Starannie przygotowane specjały</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Dania Mięsne</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Żebro wołowe/ puree z kalafiora/ sos RWS z czarnym czosnkiem/ ogórki po azjatycku
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>63zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Filet z pstrąga z Pustelni/ kluski marchewkowe/ jarmuż/ sos Beuerre Blanc/ olej ziołowy
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>59zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Burger po Lubelsku - Brioche z cebulą i makiem/ pulled pork/ kimchi/ konfitura z czerwonej cebuli/ ser koryciński/ majonez z fermentowanym czosnkiem/ opiekane ziemniaki
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>55zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Dania Wegetariańskie</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Kopytka grzybowe/ emulsja z estragonem/ grzyby shimeji
                                        </div>
                                        <div className={styles.itemCategory}>danie wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>43zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Leniwe/ frużelina/ owoce/ kwaśna śmietana
                                        </div>
                                        <div className={styles.itemCategory}>danie wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>39zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Stek z kapusty włoskiej/ gorgonzola D.O.P/ ziemniak/ olej chilli
                                        </div>
                                        <div className={styles.itemCategory}>danie wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>39zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Dania Wegańskie</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Pulpeciki/ ciecierzyca/ tofu/ nori/ sos tatarski/ burak/ roszponka/ komosa ryżowa
                                        </div>
                                        <div className={styles.itemCategory}>danie wegańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>46zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Menu Dziecięce</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Paluszki rybne/ łódeczki ziemniaczane/ mizeria
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Pulpeciki z indyka w sosie pomidorowo-śmietanowym (2 szt)/ łódeczki ziemniaczane/ mizeria
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Leniwe/ frużelina/ owoce/ kwaśna śmietana
                                        </div>
                                        <div className={styles.itemCategory}>danie wegetariańskie</div>
                                    </div>
                                    <div className={styles.itemPrice}>29zł</div>
                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>
                                            Rosół z makaronem i marchewką (200ml)
                                        </div>
                                        <div className={styles.itemCategory}>danie mięsne</div>
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
