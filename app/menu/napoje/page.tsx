import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import styles from "../menu.module.css";

export default function Napoje() {
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
                        <h1 className={styles.menuTitle}>Napoje</h1>
                        <p className={styles.menuSubtitle}>Orzeźwiające i aromatyczne</p>
                    </div>

                    <div className={styles.menuContainer}>
                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Napoje Zimne</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Woda gazowana/niegazowana</div>
                                    </div>
                                    <div className={styles.itemPrice}>8zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Coca-cola/ coca-cola Zero</div>
                                    </div>
                                    <div className={styles.itemPrice}>12zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Kompot</div>
                                    </div>
                                    <div className={styles.itemPrice}>12zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Lemoniada Zielony Talerzyk (300ml)</div>
                                    </div>
                                    <div className={styles.itemPrice}>15zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Lemoniada Propss</div>
                                        <div className={styles.itemCategory}>węglowa kola/ szafran/ Meringa</div>
                                    </div>
                                    <div className={styles.itemPrice}>18zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Kombucha</div>
                                        <div className={styles.itemCategory}>różana, klasyczna, imbirowa</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Soki Świeżo Wyciskane (300ml)</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Pomarańczowy</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Pomarańcza- grejpfrut</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Jabłko- mięta</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Jabłko, szpinak, kiwi</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Jabłko, pomarańcza, szpinak</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Pomarańcza, kiwi, szpinak</div>
                                    </div>
                                    <div className={styles.itemPrice}>24zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Koktajle Bezalkoholowe</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Nettle Mint Detox</div>
                                        <div className={styles.itemCategory}>napar z pokrzywy/ sok jabłkowy/ napar z mięty/ syrop z czarnego bzu</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Elderflower Mint Breeze</div>
                                        <div className={styles.itemCategory}>napar z kwiatu czarnego bzu/ sok jabłkowy/ napar z mięty/ syrop z czarnego bzu/ syrop mango/ sok z cytryny</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Rooibos Sunset Glow</div>
                                        <div className={styles.itemCategory}>napar rooibos/ sok pomarańczowy/ syrop waniliowy/ syrop z granatu</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Jasmine Elder Mist</div>
                                        <div className={styles.itemCategory}>napar z zielonej herbaty jaśminowej/ limoncello 0%/ syrop z czarnego bzu</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Kawy</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Espresso</div>
                                    </div>
                                    <div className={styles.itemPrice}>10zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Espresso doppio</div>
                                    </div>
                                    <div className={styles.itemPrice}>12zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Americano</div>
                                    </div>
                                    <div className={styles.itemPrice}>12zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Kawa z mlekiem</div>
                                    </div>
                                    <div className={styles.itemPrice}>14zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Cappucino</div>
                                    </div>
                                    <div className={styles.itemPrice}>16zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Flat white</div>
                                    </div>
                                    <div className={styles.itemPrice}>17zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Caffe Latte</div>
                                    </div>
                                    <div className={styles.itemPrice}>18zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Kawa mrożona</div>
                                    </div>
                                    <div className={styles.itemPrice}>18zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Napoje Gorące</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Herbata</div>
                                        <div className={styles.itemCategory}>czarna/ earl grey/ zielona/ owocowa (Kubek)</div>
                                    </div>
                                    <div className={styles.itemPrice}>12zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Herbata liściasta</div>
                                        <div className={styles.itemCategory}>czarna/ earl grey/ zielona/ owocowa (Dzbanek 0,6l)</div>
                                    </div>
                                    <div className={styles.itemPrice}>19zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Herbata sezonowa</div>
                                        <div className={styles.itemCategory}>z sezonowymi dodatkami</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Napary (dzbanek)</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Napar ziołowy</div>
                                        <div className={styles.itemCategory}>Kwiat lipy, maliny, cytryny</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Napar ziołowy</div>
                                        <div className={styles.itemCategory}>Pokrzywa, róża, wiśnia</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Napar ziołowy</div>
                                        <div className={styles.itemCategory}>Kwiat czarnego bzu/ maliny/ cytryna</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Napar imbirowy</div>
                                        <div className={styles.itemCategory}>Esencja imbirowa, goździki, cytryna, pomarańcza</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.menuSection}>
                            <h2 className={styles.sectionTitle}>Matcha</h2>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Matcha Latte</div>
                                    </div>
                                    <div className={styles.itemPrice}>22zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Ice Matcha z musem mango</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                                <div className={styles.menuItem}>
                                    <div className={styles.itemContent}>
                                        <div className={styles.itemName}>Ice Matcha z syropem różanym</div>
                                    </div>
                                    <div className={styles.itemPrice}>25zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
