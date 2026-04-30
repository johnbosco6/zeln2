
"use client";

import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import styles from './checkout.module.css';
import { CheckCircle, CreditCard, Truck, User, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useOrder();
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (acceptedTerms) {
            setSubmitted(true);
            clearCart();
        }
    };

    if (submitted) {
        return (
            <div className={styles.successContainer}>
                <div className={styles.successCard}>
                    <CheckCircle size={80} color="#008A4B" />
                    <h1>Zamówienie przyjęte!</h1>
                    <p>Dziękujemy za zamówienie w Zielonym Talerzyku. Twoje jedzenie będzie gotowe wkrótce.</p>
                    <Link href="/" className={styles.homeBtn}>Wróć do strony głównej</Link>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <h1>Twój koszyk jest pusty</h1>
                <Link href="/zamow" className={styles.backBtn}>Wróć do menu</Link>
            </div>
        );
    }

    return (
        <div className={styles.checkoutPage}>
            <header className={styles.header}>
                <Link href="/zamow" className={styles.backLink}><ArrowLeft size={20} /> Wróć do menu</Link>
                <h1>Finalizacja zamówienia</h1>
            </header>

            <div className={styles.checkoutGrid}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <section className={styles.formSection}>
                        <div className={styles.sectionHeader}>
                            <User size={20} />
                            <h3>Dane kontaktowe</h3>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Imię i Nazwisko" required />
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Telefon" required />
                        </div>
                    </section>

                    <section className={styles.formSection}>
                        <div className={styles.sectionHeader}>
                            <MapPin size={20} />
                            <h3>Adres dostawy</h3>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Ulica i numer" required />
                            <div className={styles.row}>
                                <input type="text" placeholder="Kod pocztowy" required />
                                <input type="text" placeholder="Miasto" defaultValue="Lublin" required />
                            </div>
                            <textarea placeholder="Uwagi dla kuriera (opcjonalnie)"></textarea>
                        </div>
                    </section>

                    <section className={styles.formSection}>
                        <div className={styles.sectionHeader}>
                            <CreditCard size={20} />
                            <h3>Metoda płatności</h3>
                        </div>
                        <div className={styles.paymentOptions}>
                            <label className={styles.paymentOption}>
                                <input type="radio" name="payment" defaultChecked />
                                <span>Płatność przy odbiorze</span>
                            </label>
                            <label className={styles.paymentOption}>
                                <input type="radio" name="payment" />
                                <span>Karta / BLIK online</span>
                            </label>
                        </div>
                    </section>

                    <div className={styles.termsContainer}>
                        <label className={styles.checkbox}>
                            <input 
                                type="checkbox" 
                                checked={acceptedTerms} 
                                onChange={(e) => setAcceptedTerms(e.target.checked)} 
                                required 
                            />
                            <span>Akceptuję <Link href="/regulamin">Regulamin</Link> oraz <Link href="/polityka-prywatnosci">Politykę Prywatności</Link></span>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitBtn} 
                        disabled={!acceptedTerms}
                    >
                        Zamawiam i płacę ({totalPrice} zł)
                    </button>
                </form>

                <aside className={styles.orderSummary}>
                    <h3>Podsumowanie</h3>
                    <ul className={styles.summaryList}>
                        {cart.map(item => (
                            <li key={item.id} className={styles.summaryItem}>
                                <span>{item.quantity}x {item.name}</span>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.summaryTotal}>
                        <span>Suma do zapłaty</span>
                        <span>{totalPrice} zł</span>
                    </div>
                    <div className={styles.deliveryInfo}>
                        <Truck size={18} />
                        <span>Darmowa dostawa od 100 zł</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}
