
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative bg-white text-black">
        {/* Hero Section - Full Screen Image */}
        <section className={styles.modernHero}>
          <Image 
            src="/images/interior/hero image.webp" 
            alt="Zielony Talerzyk Wnętrze" 
            fill
            priority
            className={styles.heroMainImage}
          />
          <div className={styles.scrollIndicator}>
            <span>Odkryj więcej</span>
            <div className={styles.scrollLine}></div>
          </div>
        </section>

        {/* Introduction Section - Modern Horizontal Layout */}
        <section className={styles.introSectionModern}>
          <div className={styles.introCardHorizontal}>
            <div className={styles.introTextContent}>
              <span className={styles.brandTagSmall}>Zielony Talerzyk</span>
              <h1 className={styles.introTitleSmall}>Pyszne i zdrowe jedzenie w sercu Lublina</h1>
              <p className={styles.introSubtitleSmall}>
                Poczuj prawdziwy smak połączenia dwóch idei - Comfort Food i Slow Food. Tworzymy tradycyjne dania z nowoczesnym twistem ze świeżych, starannie wyselekcjonowanych i lokalnych składników, by dawać Ci niepowtarzalne doświadczenie kulinarne
              </p>
            </div>
            <div className={styles.introActionsHorizontal}>
              <Link href="/zamow" className={styles.primaryActionSmall}>Zamów Online</Link>
              <Link href="/menu" className={styles.primaryActionSmall}>Sprawdź Menu</Link>
              <Link href="/lunch-menu" className={styles.primaryActionSmall}>Lunch Menu</Link>
            </div>
          </div>
        </section>

        {/* Services - Modern Grid Layout */}
        <section className={styles.servicesModernSection}>
          <div className={styles.containerSmall}>
            <div className={styles.sectionHeaderCompact}>
              <h2 className={styles.modernTitleSmall}>Co możemy dla Ciebie zrobić?</h2>
            </div>
            <div className={styles.servicesGridModernFixed}>
              <Link href="/menu" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🌱</span>
                <h3>Świeże Menu i Slow Food</h3>
                <p>Nasze dania główne, sałatki, pierogi, zupy i desery przygotowujemy od podstaw, stawiając na autentyczny smak i sezonowe produkty.</p>
              </Link>
              <Link href="/lunch-menu" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>☀️</span>
                <h3>Codzienny Lunch</h3>
                <p>Szukasz pożywnej przerwy w pracy? Zobacz nasze zróżnicowane menu lunchowe, które każdego dnia zaskoczy Cię czymś nowym.</p>
              </Link>
              <Link href="/catering" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🤝</span>
                <h3>Catering i Imprezy</h3>
                <p>Urodziny, spotkanie firmowe czy event okolicznościowy? Przygotujemy wyjątkowy catering i pomożemy w organizacji Twojego wydarzenia, aby zachwycić Twoich gości.</p>
              </Link>
              <Link href="/zamow" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🚴</span>
                <h3>Szybka Dostawa</h3>
                <p>Złapał Cię głód w domu lub w biurze? Zamów nasze zdrowe przysmaki z dostawą prosto pod Twoje drzwi.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Slogan 1 - Split Layout (Text Left, Image Right) */}
        <section className={styles.splitSectionAlt}>
          <div className={styles.splitGrid}>
            <div className={styles.splitContent}>
              <span className={styles.subTag}>Nasza Filozofia</span>
              <h2 className={styles.splitTitle}>Z natury na talerz.</h2>
              <p className={styles.splitDescription}>Wierzymy w prostotę i jakość. Każdy składnik w naszej kuchni ma swoją historię, a każda potrawa jest hołdem dla lokalnych dostawców i natury.</p>
            </div>
            <div className={styles.splitImageContainer}>
              <Image src="/images/philosophy.jpg" alt="Z natury na talerz" fill className={styles.imgCover} />
            </div>
          </div>
        </section>

        {/* Bakery - Split Layout (Image Left, Text Right) */}
        <section className={styles.splitSection}>
          <div className={styles.splitGrid}>
            <div className={styles.splitImageContainer}>
              <Image src="/images/catering/DSC_3440bm.webp" alt="Piekarnia" fill className={styles.imgCover} />
            </div>
            <div className={styles.splitContent}>
              <span className={styles.subTag}>Świeżo wypiekane</span>
              <h2 className={styles.splitTitle}>Piekarnia</h2>
              <p className={styles.splitDescription}>Codziennie wypiekamy dla Ciebie niepowtarzalne chleby orkiszowe, vermonty, chleby żytnie, bajgle, precle i wiele innych. Poczuj zapach prawdziwego chleba.</p>
              <Link href="/menu/nasze-wyroby" className={styles.textLink}>Sprawdź ofertę piekarni →</Link>
            </div>
          </div>
        </section>

        {/* Slogan 2 & Delivery - Split Layout (Text Left, Image Right) */}
        <section className={styles.splitSectionAlt}>
          <div className={styles.splitGrid}>
            <div className={styles.splitContent}>
              <span className={styles.subTag}>Gdziekolwiek jesteś</span>
              <h2 className={styles.splitTitle}>Zawsze świeżo, zawsze smacznie.</h2>
              <div className={styles.serviceItemMini}>
                <h3>🤝 Catering i Imprezy</h3>
                <p>Urodziny, spotkanie firmowe czy event okolicznościowy? Przygotujemy wyjątkowy catering i pomożemy w organizacji Twojego wydarzenia.</p>
              </div>
              <div className={styles.serviceItemMini}>
                <h3>🚴 Szybka Dostawa</h3>
                <p>Złapał Cię głód w domu lub w biurze? Zamów nasze zdrowe przysmaki z dostawą prosto pod Twoje drzwi.</p>
              </div>
            </div>
            <div className={styles.splitImageContainer}>
              <Image src="/images/raw/DSC_8977_surowe.webp" alt="Dostawa" fill className={styles.imgCover} />
            </div>
          </div>
        </section>

        {/* Weekly Offer - Split Layout (Image Left, Text Right) */}
        <section className={styles.splitSection}>
          <div className={styles.splitGrid}>
            <div className={styles.splitImageContainer}>
              <Image src="/images/lunches.jpg" alt="Oferta Lunchowa" fill className={styles.imgCover} />
            </div>
            <div className={styles.splitContent}>
              <span className={styles.subTag}>Oferta Tygodnia</span>
              <h2 className={styles.splitTitle}>Zielony Talerzyk – Odpocznij, zjedz dobrze i poczuj się świetnie!</h2>
              <p className={styles.splitDescription}>Nasze menu lunchowe to idealny sposób na regenerację w ciągu dnia. Zbilansowane, zdrowe i zawsze pyszne.</p>
              <Link href="/lunch-menu" className={styles.primaryActionSmall}>Sprawdź Lunch Menu</Link>
            </div>
          </div>
        </section>



        {/* Photo Strip - Elegant Gallery */}
        <section className={styles.galleryStrip}>
          {[
            '/images/raw/DSC_8979_surowe.webp',
            '/images/raw/DSC_9005_surowe.webp',
            '/images/raw/DSC_8924_surowe.webp',
            '/images/raw/DSC_8953_surowe.webp',
            '/images/raw/DSC_8977_surowe.webp',
            '/images/raw/DSC_8925_surowe.webp',
          ].map((src, i) => (
            <div key={i} className={styles.galleryThumb}>
              <Image src={src} alt="Food gallery" fill className={styles.imgZoom} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
