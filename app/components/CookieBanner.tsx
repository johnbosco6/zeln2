"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./cookiebanner.module.css";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <p>
                    Nasza strona korzysta z plików cookies, aby zapewnić Ci najlepsze wrażenia. 
                    Korzystając z niej, zgadzasz się na ich użycie. 
                    Szczegóły znajdziesz w naszej{" "}
                    <Link href="/polityka-prywatnosci" className={styles.link}>
                        Polityce Prywatności
                    </Link>.
                </p>
                <button onClick={acceptCookies} className={styles.button}>
                    Akceptuję
                </button>
            </div>
        </div>
    );
}
