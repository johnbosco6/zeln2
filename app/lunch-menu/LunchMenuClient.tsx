"use client";

import { useState } from "react";
import Image from "next/image";
import { UtensilsCrossed, Leaf, Flame, Sparkles } from "lucide-react";
import styles from "./lunch-menu.module.css";

type LunchItem = {
    name: string;
    description: string;
    price: string;
    type: 'meat' | 'vegetarian' | 'vegan';
    image: string;
    note?: string;
};

type LunchCategory = {
    title: string;
    subtitle: string;
    items: LunchItem[];
};

const lunchCategories: LunchCategory[] = [
    {
        title: "Zupy",
        subtitle: "Świeże, aromatyczne i przygotowywane codziennie od podstaw",
        items: [
            {
                name: "Rosół drobiowo-wołowy",
                description: "Tradycyjny, esencjonalny bulion podawany z naszymi ręcznie robionymi kluseczkami orkiszowymi i młodą marchewką.",
                price: "25 zł",
                type: "meat",
                image: "/images/catering/DSC_3521bm.webp"
            },
            {
                name: "Flaczki z boczniaka",
                description: "Aromatyczna, rozgrzewająca wersja wegańska z boczniaków ze świeżym majerankiem, podawana z domowym pieczywem.",
                price: "25 zł",
                type: "vegan",
                image: "/images/catering/DSC_3442bm.webp"
            },
            {
                name: "Krem z batata z imbirem",
                description: "Delikatnie słodki, aksamitny krem ze słodkich ziemniaków z dodatkiem świeżego imbiru i mleczka kokosowego.",
                price: "25 zł",
                type: "vegan",
                image: "/images/catering/DSC_3440bm.webp"
            }
        ]
    },
    {
        title: "Dania Główne",
        subtitle: "Sycące propozycje pełne naturalnego smaku",
        items: [
            {
                name: "Burrito z szarpaną wołowiną",
                description: "Aromatyczna, wolno pieczona wołowina z ryżem, awokado, serem cheddar, jalapeno i kwaśną śmietaną.",
                price: "45 zł",
                type: "meat",
                image: "/images/catering/DSC_3461bm.webp"
            },
            {
                name: "Curry z ciecierzycą",
                description: "Rozgrzewające, kremowe curry na mleczku kokosowym z warzywami sezonowymi, ciecierzycą i ryżem basmati.",
                price: "39 zł",
                type: "vegan",
                image: "/images/catering/DSC_3448bm.webp"
            },
            {
                name: "Kopytka grzybowe",
                description: "Delikatne domowe kopytka podane w aksamitnej emulsji estragonowej z grzybami shimeji i świeżym jarmużem.",
                price: "43 zł",
                type: "vegetarian",
                image: "/images/catering/DSC_3444bm.webp"
            }
        ]
    },
    {
        title: "Nasze Zestawy Lunchowe",
        subtitle: "Wybierz zupę i danie główne w wyjątkowej cenie pakietowej",
        items: [
            {
                name: "Zestaw Klasyczny",
                description: "Rosół drobiowo-wołowy z kluseczkami + Burrito z szarpaną wołowiną w zestawie.",
                price: "45 zł",
                type: "meat",
                image: "/images/catering/DSC_3457bm.webp",
                note: "Najczęściej wybierany"
            },
            {
                name: "Zestaw Wegetariański",
                description: "Aksamitny krem z batata z imbirem + Domowe kopytka grzybowe z grzybami shimeji.",
                price: "45 zł",
                type: "vegetarian",
                image: "/images/catering/DSC_3495bm.webp",
                note: "Inspiracja Slow Food"
            },
            {
                name: "Zestaw Wegański",
                description: "Aromatyczne flaczki z boczniaka + Rozgrzewające curry z ciecierzycą i ryżem basmati.",
                price: "45 zł",
                type: "vegan",
                image: "/images/catering/DSC_3511bm.webp",
                note: "100% Roślinny"
            }
        ]
    }
];

export default function LunchMenuClient() {
    const [filter, setFilter] = useState<'all' | 'meat' | 'vegetarian' | 'vegan'>('all');

    const getDietIcon = (type: 'meat' | 'vegetarian' | 'vegan') => {
        switch (type) {
            case 'vegan':
                return <Leaf size={14} className={styles.dietIcon} style={{ color: "#828a00" }} />;
            case 'vegetarian':
                return <Leaf size={14} className={styles.dietIcon} style={{ color: "#008a4b" }} />;
            case 'meat':
                return <Flame size={14} className={styles.dietIcon} style={{ color: "#d32f2f" }} />;
        }
    };

    const getDietLabel = (type: 'meat' | 'vegetarian' | 'vegan') => {
        switch (type) {
            case 'vegan': return 'wegańskie';
            case 'vegetarian': return 'wegetariańskie';
            case 'meat': return 'danie mięsne';
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Lunch Menu</h1>
                <p className={styles.subtitle}>
                    Poznaj nasze cotygodniowe propozycje lunchowe, dostępne od poniedziałku do piątku od 11:00 do 16:00
                </p>
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
                    className={`${styles.filterBtn} ${filter === 'meat' ? styles.active : ''}`}
                    onClick={() => setFilter('meat')}
                >
                    Mięsne
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'vegetarian' ? styles.active : ''}`}
                    onClick={() => setFilter('vegetarian')}
                >
                    Wegetariańskie
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'vegan' ? styles.active : ''}`}
                    onClick={() => setFilter('vegan')}
                >
                    Wegańskie
                </button>
            </div>

            {/* Categories and Cards */}
            <div className={styles.categoriesList}>
                {lunchCategories.map((category, catIndex) => {
                    const filteredItems = category.items.filter(
                        item => filter === 'all' || item.type === filter
                    );

                    if (filteredItems.length === 0) return null;

                    return (
                        <section key={catIndex} className={styles.menuSection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>{category.title}</h2>
                                <p className={styles.sectionSubtitle}>{category.subtitle}</p>
                            </div>

                            <div className={styles.cardsGrid}>
                                {filteredItems.map((item, itemIndex) => (
                                    <div key={itemIndex} className={styles.lunchCard}>
                                        {item.note && (
                                            <div className={styles.cardBadge}>
                                                <Sparkles size={12} style={{ marginRight: '4px' }} />
                                                {item.note}
                                            </div>
                                        )}
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className={styles.cardImage}
                                            />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardHeaderRow}>
                                                <h3 className={styles.itemName}>{item.name}</h3>
                                                <span className={styles.itemPrice}>{item.price}</span>
                                            </div>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                            <div className={styles.cardFooter}>
                                                <span className={`${styles.dietBadge} ${styles[item.type]}`}>
                                                    {getDietIcon(item.type)}
                                                    {getDietLabel(item.type)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Call to action info */}
            <div className={styles.importantNotes}>
                <h3>Dodatkowe informacje o lunchu:</h3>
                <p>🥗 Wszystkie nasze potrawy przygotowujemy codziennie ze świeżych, lokalnych składników, w 100% od podstaw.</p>
                <p>🚗 Oferujemy również dostawę na terenie Lublina. Zamówienia na lunch przyjmujemy telefonicznie lub online.</p>
                <div className={styles.contactActions}>
                    <a href="tel:+48500068241" className={styles.phoneAction}>
                        Zadzwoń i zamów: 500 068 241
                    </a>
                    <a href="/zamow" className={styles.orderAction}>
                        Zamów Online
                    </a>
                </div>
            </div>
        </div>
    );
}
