
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#ffffff]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(196,214,0,0.18)_0%,_transparent_70%)] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(0,138,75,0.12)_0%,_transparent_70%)]" />
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Zielony Talerzyk</h1>
          <p className={styles.heroSubtitle}>
            Pyszne i zdrowe jedzenie!
          </p>
          <div className={styles.heroBadge}>Restauracja w Lublinie</div>
          <div className={styles.heroAction}>
            <Link href="/lunch-menu" className={styles.animatedButton}>
              <span>Lunch Menu</span>
            </Link>
          </div>
        </section>

        {/* Photo Gallery Grid */}
        <section className={styles.homeGallery}>
          <div className={styles.homeGalleryGrid}>

            {/* Image 1 — tall left */}
            <div className={`${styles.homeGalleryItem} ${styles.galleryTall}`}>
              <Image
                src="/images/interior/B05A0793-2.webp"
                alt="Wnętrze restauracji"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.homeGalleryImg}
              />
              <div className={styles.homeGalleryOverlay}>
                <span className={styles.homeGalleryLabel}>Nasze Wnętrze</span>
              </div>
            </div>

            {/* Middle column — 2 stacked images */}
            <div className={styles.homeGalleryMiddle}>
              <div className={styles.homeGalleryItem}>
                <Image
                  src="/images/interior/B05A0957-2.webp"
                  alt="Sala restauracyjna"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.homeGalleryImg}
                />
                <div className={styles.homeGalleryOverlay}>
                  <span className={styles.homeGalleryLabel}>Wyjątkowe Miejsce</span>
                </div>
              </div>
              <div className={styles.homeGalleryItem}>
                <Image
                  src="/images/interior/B05A1133.webp"
                  alt="Klimat restauracji"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.homeGalleryImg}
                />
                <div className={styles.homeGalleryOverlay}>
                  <span className={styles.homeGalleryLabel}>Przyjazna Atmosfera</span>
                </div>
              </div>
            </div>

            {/* Image 3 — tall right */}
            <div className={`${styles.homeGalleryItem} ${styles.galleryTall}`}>
              <Image
                src="/images/catering/DSC_3461bm.webp"
                alt="Nasze dania"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.homeGalleryImg}
              />
              <div className={styles.homeGalleryOverlay}>
                <span className={styles.homeGalleryLabel}>Slow Food</span>
              </div>
            </div>

          </div>
        </section>

        {/* Raw Photo Strip — food showcase */}
        <section className={styles.photoStrip}>
          {[
            { src: '/images/raw/DSC_8979_surowe.webp', label: 'Smak' },
            { src: '/images/raw/DSC_9005_surowe.webp', label: 'Kuchnia' },
            { src: '/images/raw/DSC_8924_surowe.webp', label: 'Świeże' },
            { src: '/images/raw/DSC_8953_surowe.webp', label: 'Dania' },
            { src: '/images/raw/DSC_8977_surowe.webp', label: 'Pyszne' },
            { src: '/images/raw/DSC_8925_surowe.webp', label: 'Zdrowe' },
          ].map((item) => (
            <div key={item.src} className={styles.photoStripItem}>
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 75vw, 17vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageOverlayGlass}>{item.label}</div>
            </div>
          ))}
        </section>

        {/* Quick Action Buttons */}
        <section className={styles.quickActions}>
          <h2 className={styles.quickActionsTitle}>Co możemy dla Ciebie zrobić?</h2>
          <div className={styles.quickActionsGrid}>

            <Link href="/menu" className={styles.qaCard}>
              <div className={styles.qaIcon}>🍽️</div>
              <div className={styles.qaLabel}>Nasze Menu</div>
              <div className={styles.qaDesc}>Przeglądaj dania i specjały</div>
            </Link>

            <Link href="/lunch-menu" className={styles.qaCard}>
              <div className={styles.qaIcon}>☀️</div>
              <div className={styles.qaLabel}>Lunch Menu</div>
              <div className={styles.qaDesc}>Codzienne propozycje lunchowe</div>
            </Link>

            <Link href="/catering" className={styles.qaCard}>
              <div className={styles.qaIcon}>🤝</div>
              <div className={styles.qaLabel}>Catering</div>
              <div className={styles.qaDesc}>Na każdą okazję i event</div>
            </Link>

            <Link href="/imprezy" className={styles.qaCard}>
              <div className={styles.qaIcon}>🎉</div>
              <div className={styles.qaLabel}>Imprezy</div>
              <div className={styles.qaDesc}>Organizacja przyjęć i eventów</div>
            </Link>

            <Link href="/dostawa" className={styles.qaCard}>
              <div className={styles.qaIcon}>🚴</div>
              <div className={styles.qaLabel}>Dostawa</div>
              <div className={styles.qaDesc}>Świeże dania prosto do Ciebie</div>
            </Link>

            <Link href="/kontakt" className={styles.qaCard}>
              <div className={styles.qaIcon}>📍</div>
              <div className={styles.qaLabel}>Kontakt & Lokalizacja</div>
              <div className={styles.qaDesc}>Znajdź nas w centrum Lublina</div>
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}
