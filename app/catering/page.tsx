
import Image from "next/image";
import styles from "../page.module.css";
import menuStyles from "./catering.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catering",
    description: "Profesjonalny catering w Lublinie. Zdrowe, smaczne i pięknie podane dania na Twoje wydarzenie. Sprawdź naszą ofertę dla firm i osób prywatnych.",
    keywords: ["catering Lublin", "catering okolicznościowy", "zdrowy catering", "jedzenie na dowóz Lublin", "catering wigilijny Lublin"],
};

export default function Catering() {
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
                    <h1 className={styles.heroTitle}>Catering Lublin</h1>
                    <p className={styles.heroSubtitle}>
                        Najsmaczniejszy catering w okolicy
                    </p>
                    <div className={styles.heroBadge}>Catering na każdą okazję</div>
                </section>

                {/* Content Sections */}
                <div className={styles.contentSection}>
                    {/* Section 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Wyjątkowy Catering</h2>
                            <p className={styles.cardText}>
                                Odkryj wyjątkowy Catering Lublin od Zielonego Talerzyka. Planujesz większą lub mniejszą imprezę firmową lub rodzinną?
                                <br /><br />
                                Przygotujemy specjalnie na tę okazję menu, zajmiemy się przygotowaniem dań i dostarczymy je do wybranego przez Ciebie miejsca.
                            </p>
                        </div>
                        <div className={styles.relative}>
                            <Image
                                src="/images/catering/DSC_3457bm.webp"
                                alt="Catering"
                                width={600}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>
                                Pyszne Dania
                            </div>
                        </div>
                    </div>

                    {/* Catering Categories Grid */}
                    <div className={menuStyles.categoryGrid}>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na imprezy firmowe</h3>
                            <p className={menuStyles.categoryDescription}>
                                Oferujemy sprawdzony catering na imprezy firmowe w Lublinie i okolicach. Ciesz się doskonałym smakiem.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na chrzciny</h3>
                            <p className={menuStyles.categoryDescription}>
                                Sprawdź wyjątkowy catering na chrzciny w Lublinie i okolicach. Doskonały smak w niskiej cenie.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na pierwszą komunię</h3>
                            <p className={menuStyles.categoryDescription}>
                                Odkryj zdrowy i smaczny catering na pierwszą komunię świętą w Lublinie i okolicach.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na wesele</h3>
                            <p className={menuStyles.categoryDescription}>
                                Ślub? Wesele? To ważne chwile. Odkryj niezapomniany catering na wesele w Lublinie i okolicach.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na bankiet</h3>
                            <p className={menuStyles.categoryDescription}>
                                Sprawdź wyjątkowy catering bankietowy w Lublinie i okolicach. Przenieś bankiet na wyższy poziom.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na rocznicę</h3>
                            <p className={menuStyles.categoryDescription}>
                                Wypróbuj nasz pyszny catering na dowolną rocznicę lub uroczystość w Lublinie i okolicach.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering do pracy</h3>
                            <p className={menuStyles.categoryDescription}>
                                Nasz catering sprawdza się jako smaczny i pełnowartościowy posiłek w pracy. Zamów catering Zielonego Talerzyka już dzisiaj.
                            </p>
                        </div>
                        <div className={menuStyles.categoryCard}>
                            <h3 className={menuStyles.categoryTitle}>Catering na każdą okazję</h3>
                            <p className={menuStyles.categoryDescription}>
                                Przygotujemy catering na każdą okazję. Jeżeli masz jakiekolwiek pytania odnośnie naszego cateringu - skontaktuj się z nami.
                            </p>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className={menuStyles.menuSection}>
                        <h2 className={menuStyles.menuTitle}>Menu Cateringowe</h2>

                        {/* Vegan Options */}
                        <div className={menuStyles.menuCategory}>
                            <h3 className={menuStyles.menuCategoryTitle}>Propozycje wegańskie</h3>
                            <div className={menuStyles.menuItems}>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Koreczki ogórkowe z hummusem pomidorowym i kiełkami <span className={menuStyles.itemNote}>(BG)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>7,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Bułeczki z hummusem, karmelizowaną cebulką, ogórkiem i rukolą
                                    </span>
                                    <span className={menuStyles.itemPrice}>14,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Rogaliki z marynowanym grillowanym tofu, wege majonez, kiełki
                                    </span>
                                    <span className={menuStyles.itemPrice}>14,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Pasty (do wyboru: hummus, pesto z suszonych pomidorów, smalczyk z fasoli, tapenada z zielonych oliwek) + pieczywo orkiszowe, żytnie, lub gryczane bezglutenowe
                                    </span>
                                    <span className={menuStyles.itemPrice}>16zł/100g</span>
                                </div>
                            </div>
                        </div>

                        {/* Vegetarian Options */}
                        <div className={menuStyles.menuCategory}>
                            <h3 className={menuStyles.menuCategoryTitle}>Propozycje wegetariańskie</h3>
                            <div className={menuStyles.menuItems}>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Roladki z grillowanej cukinii w sosie miodowym, sera feta i czarnej oliwki
                                    </span>
                                    <span className={menuStyles.itemPrice}>9,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Liść cykorii z masą serową i orzechami włoskimi
                                    </span>
                                    <span className={menuStyles.itemPrice}>10,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Krakersy z ziaren, kozi twaróg, jabłka w cynamonie, orzechy włoskie
                                    </span>
                                    <span className={menuStyles.itemPrice}>12,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Tartaletki serowo - warzywne
                                    </span>
                                    <span className={menuStyles.itemPrice}>12,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Rogaliki maślane z serem brie, kiełkami, szczypiorkiem, majonezem i kiszonym ogórkiem
                                    </span>
                                    <span className={menuStyles.itemPrice}>14,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mini calzone z serami i warzywami
                                    </span>
                                    <span className={menuStyles.itemPrice}>15,9zł/szt</span>
                                </div>
                            </div>
                        </div>

                        {/* Meat Options */}
                        <div className={menuStyles.menuCategory}>
                            <h3 className={menuStyles.menuCategoryTitle}>Propozycje mięsne</h3>
                            <div className={menuStyles.menuItems}>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Daktyl nadziewany smażonym migdałem, owinięty w bekon
                                    </span>
                                    <span className={menuStyles.itemPrice}>9,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Sezamowe ślimaczki z piersi kurczaka i ciasta francuskiego
                                    </span>
                                    <span className={menuStyles.itemPrice}>13,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Kruche tartaletki z tapenadą z zielonych oliwek, kozim serem, świnką puławską, kaparem i suszonym pomidorem
                                    </span>
                                    <span className={menuStyles.itemPrice}>13,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Burgerki z sosem musztardowym, pulled pork, szpinak, czerwona cebulka
                                    </span>
                                    <span className={menuStyles.itemPrice}>14,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Tortilla szpinakowa z szynką, twarożkiem i ogórkiem
                                    </span>
                                    <span className={menuStyles.itemPrice}>14,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mus z wątróbki kurczaka z tymiankiem podawany w słoiczku, grzanka z chałki
                                    </span>
                                    <span className={menuStyles.itemPrice}>15,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mini wrapy z wędzonym pstrągiem, chrzanem, sałatą, papryką i szczypiorkiem
                                    </span>
                                    <span className={menuStyles.itemPrice}>16,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mini calzone z mięsem, serami i warzywami
                                    </span>
                                    <span className={menuStyles.itemPrice}>16,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mini tortilla z guacamole i pieczonym kurczakiem
                                    </span>
                                    <span className={menuStyles.itemPrice}>17,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Mus w słoiczkach z wędzonego łososia, z salsą z rukoli, i serowym chipsem
                                    </span>
                                    <span className={menuStyles.itemPrice}>18,9zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Rillettes z konfitowanej kaczki ze świeżą miętą i limonką podawane w bułeczce
                                    </span>
                                    <span className={menuStyles.itemPrice}>19,9zł/szt</span>
                                </div>
                            </div>
                        </div>

                        {/* Salads */}
                        <div className={menuStyles.menuCategory}>
                            <h3 className={menuStyles.menuCategoryTitle}>Propozycje sałatkowe (salatera)</h3>
                            <div className={menuStyles.menuItems}>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Marchewka, marynowana ciecierzyca, sałaty, awokado, dressing owocowy <span className={menuStyles.itemNote}>(BG, wegańska)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>129zł</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Brokuł, rzodkiewki, jajka na twardo, kiełki, mix sałat, kiszony ogórek, ziołowy majonez <span className={menuStyles.itemNote}>(BG)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>139zł</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Sałatka z marynowanym pieczonym burakiem, serem solankowym, szpinakiem, cykorią, dressingiem pomarańczowym i kaparami <span className={menuStyles.itemNote}>(BG)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>139zł</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Twarożek kozi, sałaty, owoce, orzechy laskowe, dressing owocowy <span className={menuStyles.itemNote}>(BG)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>149zł</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Sałatka z pieczonym kurczakiem, jajkiem, orzechem włoskim, ziemniakiem i mixem sałat z miodowym sosem winegret <span className={menuStyles.itemNote}>(BG, mięsna)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>149zł</span>
                                </div>
                            </div>
                        </div>

                        {/* Desserts */}
                        <div className={menuStyles.menuCategory}>
                            <h3 className={menuStyles.menuCategoryTitle}>Propozycje na słodko (ciasta w papilotach)</h3>
                            <div className={menuStyles.menuItems}>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Brownie <span className={menuStyles.itemNote}>(BG)</span>
                                    </span>
                                    <span className={menuStyles.itemPrice}>10zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Szarlotka
                                    </span>
                                    <span className={menuStyles.itemPrice}>10zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Szarlotka wegańska
                                    </span>
                                    <span className={menuStyles.itemPrice}>10zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Sernik waniliowy
                                    </span>
                                    <span className={menuStyles.itemPrice}>13zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Sernik na zimno w słoiczkach (100ml) z sosem owocowym
                                    </span>
                                    <span className={menuStyles.itemPrice}>14zł/szt</span>
                                </div>
                                <div className={menuStyles.menuItem}>
                                    <span className={menuStyles.itemName}>
                                        Budyń z tapioki z musem owocowym i krokantem orzechowym, podawany w słoiczku
                                    </span>
                                    <span className={menuStyles.itemPrice}>14zł/szt</span>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className={menuStyles.importantNotes}>
                            <h3>Ważne informacje:</h3>
                            <p>* Catering dostarczamy na terenie Lublina i okolic przez siedem dni w tygodniu.</p>
                            <p>* Minimalna ilość zamówienia wybranej pozycji to 10 sztuk (nie dotyczy sałatek i past do smarowania)</p>
                            <p>* Minimalna kwota zamówienia to 400 złotych</p>
                        </div>
                    </div>

                    {/* Photo Gallery */}
                    <div className={menuStyles.gallerySection}>
                        <h2 className={menuStyles.galleryHeading}>Galeria Cateringu</h2>
                        <p className={menuStyles.gallerySubtitle}>Nasze dania przemawiają same za siebie</p>
                        <div className={menuStyles.galleryGrid}>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3437bm.webp" alt="Catering danie" width={600} height={800} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Catering</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3438bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Finger Food</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3440bm.webp" alt="Catering danie" width={600} height={450} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Ekologiczne</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3442bm.webp" alt="Catering danie" width={600} height={500} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Smak</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3444bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Dania Główne</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3447bm.webp" alt="Catering danie" width={600} height={350} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Świeże Składniki</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3448bm.webp" alt="Catering danie" width={600} height={420} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Wegetariańskie</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3451bm.webp" alt="Catering danie" width={600} height={460} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Desery</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3457bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Pyszne Dania</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3459bm.webp" alt="Catering danie" width={600} height={440} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Napoje</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3460bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Catering Lublin</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3461bm.webp" alt="Catering danie" width={600} height={800} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Mięsne</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3463bm.webp" alt="Catering danie" width={600} height={380} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Na Każdą Okazję</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3495bm.webp" alt="Catering danie" width={600} height={420} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Świeżość</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3511bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Elegancja</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_3521bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Przystawki</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_9694bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Smaczne</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_9702bm.webp" alt="Catering danie" width={600} height={440} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Sałatki</span>
                                </div>
                            </div>

                            <div className={menuStyles.galleryItem}>
                                <Image src="/images/catering/DSC_9708bm.webp" alt="Catering danie" width={600} height={400} />
                                <div className={menuStyles.galleryItemOverlay}>
                                    <span className={menuStyles.galleryItemLabel}>Nasze Wyroby</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`${styles.card} ${styles.cardReverse}`}>
                        <div className={styles.relative}>
                            <Image
                                src="/images/catering/DSC_3495bm.webp"
                                alt="Catering dania"
                                width={600}
                                height={400}
                                className={styles.cardImage}
                            />
                            <div className={styles.imageOverlayGlass}>
                                Świeżość i Jakość
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Dla Każdej Okazji</h2>
                            <p className={styles.cardText}>
                                Catering w Lublinie to świetne rozwiązanie, jeśli chcesz poczęstować swoich gości lub współpracowników pysznym i zdrowym jedzeniem przygotowanym z najlepszych, świeżych i sezonowych składników.
                                <br /><br />
                                Catering do pracy? Na chrzciny, wesele lub pierwszą komunię świętą? Dobrze trafiłeś!
                            </p>
                        </div>
                    </div>

                </div>
            </main>

        </>
    );
}
