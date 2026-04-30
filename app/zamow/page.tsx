
"use client";

import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { useOrder } from '../context/OrderContext';
import styles from './order.module.css';
import Link from 'next/link';
import { ShoppingCart, Plus, Minus, Trash2, ChevronRight } from 'lucide-react';

export default function OrderPage() {
    const { cart, addToCart, updateQuantity, totalPrice } = useOrder();
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);

    const categories = Object.keys(menuData);

    return (
        <div className={styles.orderContainer}>
            <header className={styles.header}>
                <h1>Zamów Online</h1>
                <p>Wybierz swoje ulubione dania i zamów z dostawą lub odbiorem</p>
            </header>

            <div className={styles.mainGrid}>
                {/* Categories Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.categoryNav}>
                        {categories.map(catKey => (
                            <button
                                key={catKey}
                                className={`${styles.categoryBtn} ${activeCategory === catKey ? styles.active : ''}`}
                                onClick={() => setActiveCategory(catKey)}
                            >
                                {menuData[catKey].title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Menu Items List */}
                <section className={styles.menuContent}>
                    <div className={styles.categoryHeader}>
                        <h2>{menuData[activeCategory].title}</h2>
                        <p>{menuData[activeCategory].subtitle}</p>
                    </div>

                    {menuData[activeCategory].sections.map((section, sIdx) => (
                        <div key={sIdx} className={styles.section}>
                            <h3 className={styles.sectionTitle}>{section.title}</h3>
                            <div className={styles.itemsGrid}>
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className={styles.itemCard}>
                                        <div className={styles.itemInfo}>
                                            <h4>{item.name}</h4>
                                            {item.category && <span className={styles.itemCategory}>{item.category}</span>}
                                            {item.note && <span className={styles.itemNote}>{item.note}</span>}
                                            <div className={styles.priceRow}>
                                                <span className={styles.price}>{item.price}</span>
                                                <button 
                                                    className={styles.addBtn}
                                                    onClick={() => addToCart(item)}
                                                >
                                                    <Plus size={18} /> Dodaj
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Cart Summary */}
                <aside className={styles.cartSummary}>
                    <div className={styles.cartSticky}>
                        <div className={styles.cartHeader}>
                            <ShoppingCart size={24} />
                            <h3>Twój Koszyk</h3>
                        </div>

                        {cart.length === 0 ? (
                            <div className={styles.emptyCart}>
                                <p>Twój koszyk jest pusty.</p>
                                <p>Dodaj coś pysznego!</p>
                            </div>
                        ) : (
                            <>
                                <ul className={styles.cartList}>
                                    {cart.map(item => (
                                        <li key={item.id} className={styles.cartItem}>
                                            <div className={styles.cartItemDetails}>
                                                <span className={styles.cartItemName}>{item.name}</span>
                                                <span className={styles.cartItemPrice}>{item.price}</span>
                                            </div>
                                            <div className={styles.qtyControls}>
                                                <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.cartFooter}>
                                    <div className={styles.totalRow}>
                                        <span>Suma:</span>
                                        <span className={styles.totalPrice}>{totalPrice} zł</span>
                                    </div>
                                    <Link href="/checkout" className={styles.checkoutBtn}>
                                        Przejdź do kasy <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}
