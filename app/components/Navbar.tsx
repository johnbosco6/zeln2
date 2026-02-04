"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { Home, Utensils, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                {/* Logo removed */}

                <ul className={styles.links}>
                    <li>
                        <Link href="/" className={styles.link}>
                            <Home className={styles.icon} />
                            <span>Strona Główna</span>
                        </Link>
                    </li>
                    <li className={styles.hasDropdown}>
                        <button
                            onClick={toggleMenu}
                            className={`${styles.link} ${styles.menuButton}`}
                            type="button"
                        >
                            <Utensils className={styles.icon} />
                            <span>Menu</span>
                            <ChevronDown size={12} className={`${styles.chevron} ${isMenuOpen ? styles.chevronOpen : ''}`} />
                        </button>

                        {/* Tree Dropdown */}
                        <div className={`${styles.dropdownContainer} ${isMenuOpen ? styles.open : ''}`}>
                            <div className={styles.branchLine}></div>

                            <div className={styles.dropdownMenu}>
                                <Link
                                    href="/menu/przystawki-i-zupy"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Przystawki i zupy
                                </Link>
                                <Link
                                    href="/menu/dania-glowne"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Dania Główne
                                </Link>
                                <Link
                                    href="/menu/desery"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Desery
                                </Link>
                                <Link
                                    href="/menu/pierogi"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Pierogi
                                </Link>
                                <Link
                                    href="/menu/salatki"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sałatki
                                </Link>
                                <Link
                                    href="/menu/nasze-wyroby"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Nasze wyroby
                                </Link>
                                <Link
                                    href="/menu/napoje"
                                    className={styles.dropdownItem}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Napoje
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/kontakt" className={styles.link}>
                            <Phone className={styles.icon} />
                            <span>Kontakt</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
