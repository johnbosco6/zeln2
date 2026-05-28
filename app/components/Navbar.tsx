"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import React from "react";
import { Utensils, Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "O nas" },
    { href: "/lunch-menu", label: "Lunch" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Oferta Cateringowa" },
    { href: "/imprezy", label: "Imprezy" },
    { href: "/dostawa", label: "Dostawa" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/zamow", label: "Zamów Online" },
];

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    const close = () => setOpen(false);

    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                {/* Logo — centred on desktop, left on mobile */}
                <Link href="/" className={styles.logoLink} onClick={close}>
                    <div className={styles.logoBrand}>
                        <Utensils className={styles.logoIcon} />
                        <span className={styles.logoText}>Zielony Talerzyk</span>
                    </div>
                </Link>

                {/* Desktop links — centred */}
                <ul className={styles.links}>
                    {navLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={styles.link}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger — mobile only */}
                <button
                    className={styles.hamburger}
                    aria-label={open ? "Zamknij menu" : "Otwórz menu"}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile drawer */}
            <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
                <ul className={styles.mobileLinks}>
                    {navLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className={styles.mobileLink} onClick={close}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
