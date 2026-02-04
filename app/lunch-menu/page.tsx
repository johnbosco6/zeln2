"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import { Phone, ExternalLink, Calendar, Soup, UtensilsCrossed } from "lucide-react";
import styles from "./lunch-menu.module.css";

const lunchMenus = [
    {
        date: "02 lutego 2026",
        title: "Menu lunchowe 2-6.02.2026",
        isCurrent: true,
        soup: "do wyboru z karty",
        mains: [
            { text: "Burrito/ ryż/ wołowina/ awokado/ cheddar/ limonka/ śmietana", type: "mięsne" },
            { text: "Batat/ fajitas warzywne/ quinoa/ guacamole/ ser/ granat/ olej kolendrowy", type: "wegetariańskie" },
            { text: "Pierogi meksykańskie/ salsa pomidorowa/ dip rośliny / jalapeno", type: "wegańskie" }
        ],
        price: "45 zł"
    },
    {
        date: "26 stycznia 2026",
        title: "Menu lunchowe 26-30.01.2026",
        soup: "do wyboru z karty",
        mains: [
            { text: "Skrzydełka z kurczaka Jerk/ pieczony batat/ surówka coleslaw", type: "mięsne" },
            { text: "Curry z ciecierzycą/ mleko kokosowe/ ryż basmati", type: "wegetariańskie" },
            { text: "Kapusta włoska/ sos z czerwonej papryki/ chimichurri", type: "wegańskie" }
        ],
        price: "45 zł"
    },
    {
        date: "19 stycznia 2026",
        title: "Menu lunchowe 19-23.01.2026",
        soup: "do wyboru z karty",
        mains: [
            { text: "Kurczak/ kokos/ jalapeno/ ryż basmati", type: "mięsne" },
            { text: "Pierogi z czerwoną soczewicą/ okrasa z cebuli/ olej lubczykowy", type: "wegetariańskie" },
            { text: "Kotleciki dyniowe/ kasza jaglana/ opiekane ziemniaki/ kapusta pekińska", type: "wegańskie" }
        ],
        price: "45 zł"
    },
    {
        date: "12 stycznia 2026",
        title: "Menu lunchowe 12-16.01.2026",
        soup: "do wyboru z karty",
        mains: [
            { text: "Makaron udon/ masło orzechowe/ kurczak/ warzywa stir-fry/ orzeszki ziemne/ kolendra", type: "mięsne" },
            { text: "Kalafior/boczniak/ edamame/ żurawina/ sriracha/ serek śmietankowy/ prażone migdały", type: "wegetariańskie" },
            { text: "Kluski śląskie/ sos Hoisin/ sezam/ szczypiorek/ piklowany ogórek", type: "wegańskie" }
        ],
        price: "45 zł"
    },
    {
        date: "05 stycznia 2026",
        title: "Menu lunchowe 7-9.01.2026",
        soup: "do wyboru z karty",
        mains: [
            { text: "Policzki wieprzowe/ sos pieprzowy/ prażucha/ buraczki zasmażane", type: "mięsne" },
            { text: "Roladki z cukinii/ twaróg/ szpinak/ sos pomidorowy/ kuskus/ gran montavano", type: "wegetariańskie" },
            { text: "Zimowy bowl/ brukselka/ kasza pęczak/ czerwona cebula/ papryka/ tofu/ dressing musztardowy", type: "wegańskie" }
        ],
        price: "45 zł"
    }
];

export default function LunchMenuPage() {
    const [filter, setFilter] = useState<'all' | 'mięsne' | 'wegetariańskie' | 'wegańskie'>('all');

    const filterMains = (mains: any[]) => {
        if (filter === 'all') return mains;
        return mains.filter(main => main.type === filter);
    };

    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                {/* Background Mesh (consistent with main page) */}
                <div className="absolute inset-0 -z-10 bg-[#ffffff]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
                </div>

                <Navbar />
                <SecondaryNav />

                <div className={styles.container}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Lunch Menu i oferta świąteczna</h1>
                        <p className={styles.subtitle}>Poznaj nasze cotygodniowe propozycje lunchowe</p>
                    </header>

                    {/* Filter Buttons */}
                    <div className={styles.filterContainer}>
                        <button
                            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            Wszystko
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'mięsne' ? styles.active : ''}`}
                            onClick={() => setFilter('mięsne')}
                        >
                            Mięsne
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'wegetariańskie' ? styles.active : ''}`}
                            onClick={() => setFilter('wegetariańskie')}
                        >
                            Wegetariańskie
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filter === 'wegańskie' ? styles.active : ''}`}
                            onClick={() => setFilter('wegańskie')}
                        >
                            Wegańskie
                        </button>
                    </div>

                    <div className={styles.menuGrid}>
                        {lunchMenus.map((menu, index) => {
                            const filteredMains = filterMains(menu.mains);
                            if (filteredMains.length === 0) return null;

                            return (
                                <div key={index} className={styles.menuCard}>
                                    {menu.isCurrent && <div className={styles.currentBadge}>Aktualne</div>}

                                    <span className={styles.date}>
                                        <Calendar size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                                        {menu.date}
                                    </span>

                                    <h2 className={styles.menuTitle}>{menu.title}</h2>

                                    <div className={styles.section}>
                                        <span className={styles.sectionLabel}>
                                            <Soup size={16} style={{ marginRight: '6px' }} />
                                            Zupa:
                                        </span>
                                        <p className={styles.choice}>{menu.soup}</p>
                                    </div>

                                    <div className={styles.section}>
                                        <span className={styles.sectionLabel}>
                                            <UtensilsCrossed size={16} style={{ marginRight: '6px' }} />
                                            Danie główne:
                                        </span>
                                        <div className={styles.mainCourseList}>
                                            {filteredMains.map((main, mIndex) => (
                                                <div key={mIndex} className={styles.courseItem}>
                                                    <div className={styles.courseNumber}>{mIndex + 1}</div>
                                                    <div className={styles.courseDetails}>
                                                        <p>{main.text}</p>
                                                        <div className={styles.courseTags}>
                                                            <span className={`${styles.tag} ${main.type === 'mięsne' ? styles.meat :
                                                                main.type === 'wegetariańskie' ? styles.veg : styles.vegan
                                                                }`}>
                                                                {main.type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.priceBox}>
                                        <span className={styles.sectionLabel}>Zestaw Lunch (zupa + drugie danie)</span>
                                        <span className={styles.price}>{menu.price}</span>
                                    </div>

                                    <div className={styles.contactBox}>
                                        <a href="tel:+48500068241" className={styles.phoneLink}>
                                            <Phone size={20} />
                                            <span>500 068 241</span>
                                        </a>
                                        <a href="#" className={styles.orderBtn}>
                                            Zamów online <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
