"use client";

import styles from "./secondarynav.module.css";
import Link from "next/link";
import { Utensils, PartyPopper, Truck } from "lucide-react";

export default function SecondaryNav() {
    return (
        <div className={styles.secondaryNavContainer}>
            <nav className={styles.secondaryNav}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/catering" className={styles.link}>
                            <Utensils className={styles.icon} />
                            <span>Catering</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/imprezy" className={styles.link}>
                            <PartyPopper className={styles.icon} />
                            <span>Imprezy</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dostawa" className={styles.link}>
                            <Truck className={styles.icon} />
                            <span>Dostawa</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
