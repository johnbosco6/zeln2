"use client";

import { useState } from "react";
import { CategoryData, MenuItem } from "../data/menuData";
import styles from "../menu/menu.module.css";

interface MenuDisplayProps {
    data: CategoryData;
}

export default function MenuDisplay({ data }: MenuDisplayProps) {
    const [filter, setFilter] = useState<'all' | 'meat' | 'vegetarian' | 'vegan'>('all');

    const filterItems = (items: MenuItem[]) => {
        if (filter === 'all') return items;
        return items.filter(item => item.type === filter);
    };

    const hasDietaryOptions = data.sections.some(section =>
        section.items.some(item => ['meat', 'vegetarian', 'vegan'].includes(item.type))
    );

    return (
        <div className={styles.menuPage}>
            <div className={styles.menuHeader}>
                <h1 className={styles.menuTitle}>{data.title}</h1>
                <p className={styles.menuSubtitle}>{data.subtitle}</p>
            </div>

            {hasDietaryOptions && (
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
            )}

            <div className={styles.menuContainer}>
                {data.sections.map((section, sIndex) => {
                    const filteredItems = filterItems(section.items);
                    if (filteredItems.length === 0) return null;

                    return (
                        <div key={sIndex} className={styles.menuSection}>
                            {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                            <div className={styles.menuItems}>
                                {filteredItems.map((item, iIndex) => (
                                    <div key={iIndex} className={styles.menuItem}>
                                        <div className={styles.itemContent}>
                                            <div className={styles.itemName}>
                                                {item.name}
                                                {item.note && <span className={styles.itemNote}> [{item.note}]</span>}
                                            </div>
                                            {(item.category || item.type !== 'other') && (
                                                <div className={styles.itemCategory}>
                                                    {item.category || (
                                                        item.type === 'meat' ? 'danie mięsne' :
                                                            item.type === 'vegetarian' ? 'danie wegetariańskie' : 'danie wegańskie'
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.itemPrice}>{item.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
