import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";

const categories = [
    { title: "Przystawki i zupy", href: "/menu/przystawki-i-zupy", image: "/images/catering/DSC_3521bm.webp" },
    { title: "Dania Główne", href: "/menu/dania-glowne", image: "/images/catering/DSC_3444bm.webp" },
    { title: "Desery", href: "/menu/desery", image: "/images/catering/DSC_3451bm.webp" },
    { title: "Pierogi", href: "/menu/pierogi", image: "/images/catering/DSC_3438bm.webp" },
    { title: "Sałatki", href: "/menu/salatki", image: "/images/catering/DSC_9702bm.webp" },
    { title: "Nasze wyroby", href: "/menu/nasze-wyroby", image: "/images/catering/DSC_9708bm.webp" },
    { title: "Napoje", href: "/menu/napoje", image: "/images/catering/DSC_3459bm.webp" },
];

export default function MenuPage() {
    return (
        <main className={styles.menuPage}>
            <div className="absolute inset-0 -z-10 bg-[#ffffff]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
            </div>

            <div className={styles.menuContainer}>
                <header className={styles.menuHeader}>
                    <h1 className={styles.menuTitle}>Nasze Menu</h1>
                    <p className={styles.menuSubtitle}>Wybierz kategorię, aby zobaczyć nasze pyszne propozycje</p>
                </header>

                <div className={styles.catHub}>
                    {categories.map((cat, index) => (
                        <Link href={cat.href} key={index} className={styles.catCard}>
                            <Image 
                                src={cat.image} 
                                alt={cat.title} 
                                fill 
                                className={styles.catImage}
                            />
                            <div className={styles.catOverlay} />
                            <div className={styles.catInfo}>
                                <h2 className={styles.catTitle}>{cat.title}</h2>
                                <div className={styles.catAction}>
                                    Zobacz więcej <span>&rarr;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
