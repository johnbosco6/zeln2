import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative bg-white text-black overflow-hidden">
        
        {/* 1. Hero Section - Full Screen Image with Bottom Text */}
        <section className={styles.modernHero}>
          <Image 
            src="/images/interior/hero image.webp" 
            alt="Zielony Talerzyk Wnętrze" 
            fill
            priority
            className={styles.heroMainImage}
          />
          <div className={styles.heroBottomGradient} />
          
          {/* Bottom-anchored Content */}
          <div className={styles.heroBottomContent}>
            <span className={styles.heroBrandTag}>🌱 Comfort & Slow Food</span>
            <h1 className={styles.heroTitleLarge}>Zielony Talerzyk</h1>
            <p className={styles.heroDescriptionText}>
              Poczuj prawdziwą harmonię smaku — restauracja łącząca ideę Comfort Food z filozofią Slow Food. Wszystko od podstaw, ze świeżych, sezonowych składników.
            </p>
            <div className={styles.heroActionGroup}>
              <Link href="/zamow" className={styles.heroCTA}>Zamów Online</Link>
              <Link href="/menu" className={styles.heroCTASecondary}>Odkryj Menu</Link>
              <Link href="/catering" className={styles.heroCTAAccent}>Oferta Cateringowa</Link>
            </div>
          </div>
        </section>

        {/* 2. Introduction Section - Floating Horizontal Welcome Bridging */}
        <section className={styles.introSectionModern}>
          <div className={styles.introCardHorizontal}>
            <div className={styles.introTextContent}>
              <span className={styles.brandTagSmall}>Zielony Talerzyk Lublin</span>
              <h2 className={styles.introTitleSmall}>Pyszne i zdrowe jedzenie w sercu Lublina</h2>
              <p className={styles.introSubtitleSmall}>
                Tworzymy tradycyjne, polskie smaki w nowoczesnym, autorskim wydaniu. Dbamy o to, by każda chwila spędzona przy naszym talerzu była celebracją prawdziwego, naturalnego jedzenia. Bez pośpiechu, bez sztucznych ulepszaczy.
              </p>
            </div>
            <div className={styles.introActionsHorizontal}>
              <Link href="/zamow" className={styles.primaryActionSmall}>Zamów Online</Link>
              <Link href="/menu" className={styles.secondaryActionSmall}>Sprawdź Menu</Link>
              <Link href="/lunch-menu" className={styles.secondaryActionSmall}>Lunch Menu</Link>
            </div>
          </div>
        </section>

        {/* 3. Services - Modern Grid Layout */}
        <section className={styles.servicesModernSection}>
          <div className={styles.containerSmall}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.subTagCenter}>Nasze Usługi</span>
              <h2 className={styles.modernTitleSmall}>Co możemy dla Ciebie zrobić?</h2>
            </div>
            <div className={styles.servicesGridModernFixed}>
              <Link href="/menu" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🌱</span>
                <h3>Świeże Menu & Slow Food</h3>
                <p>Nasze dania główne, sałatki, pierogi, zupy i desery przygotowujemy od podstaw, stawiając na autentyczny smak i sezonowe produkty.</p>
                <span className={styles.serviceLinkHover}>Sprawdź →</span>
              </Link>
              <Link href="/lunch-menu" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>☀️</span>
                <h3>Codzienny Lunch</h3>
                <p>Szukasz pożywnej przerwy w pracy? Zobacz nasze zróżnicowane menu lunchowe, które każdego dnia zaskoczy Cię czymś nowym.</p>
                <span className={styles.serviceLinkHover}>Sprawdź →</span>
              </Link>
              <Link href="/catering" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🤝</span>
                <h3>Oferta Cateringowa</h3>
                <p>Urodziny, spotkanie firmowe czy event okolicznościowy? Przygotujemy wyjątkowy catering i pomożemy w organizacji Twojego wydarzenia.</p>
                <span className={styles.serviceLinkHover}>Sprawdź →</span>
              </Link>
              <Link href="/zamow" className={styles.serviceCardClean}>
                <span className={styles.serviceIconLarge}>🚴</span>
                <h3>Szybka Dostawa</h3>
                <p>Złapał Cię głód w domu lub w biurze? Zamów nasze zdrowe przysmaki z dostawą prosto pod Twoje drzwi.</p>
                <span className={styles.serviceLinkHover}>Sprawdź →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Bento Grid - Visual Asymmetric Philosophy & Offer Showcase */}
        <section className={styles.bentoSection}>
          <div className={styles.containerSmall}>
            <div className={styles.sectionHeaderCompact}>
              <span className={styles.subTagCenter}>Nasza Filozofia & Wyroby</span>
              <h2 className={styles.modernTitleSmall}>Pasja i naturalne składniki</h2>
            </div>
            
            <div className={styles.mixedMediaGrid}>
              
              {/* Card 1: Philosophy (Large Bento span 8) */}
              <div className={`${styles.bentoCard} ${styles.bentoLarge} ${styles.bentoRelative}`}>
                <Image 
                  src="/images/philosophy.jpg" 
                  alt="Nasza filozofia jedzenia" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className={styles.bentoImage} 
                />
                <div className={styles.bentoOverlay}>
                  <h2>Nasza Filozofia</h2>
                  <p>Wierzymy w prostotę i najwyższą jakość. Każdy składnik ma swoją historię, a każda potrawa jest hołdem dla lokalnych dostawców i natury.</p>
                </div>
                <div className={styles.bentoCardStaticLabel}>
                  <span>🌱 Z natury na talerz</span>
                </div>
              </div>

              {/* Card 2: Bakery (Medium Bento span 4) */}
              <Link href="/menu/nasze-wyroby" className={`${styles.bentoCard} ${styles.bentoMedium} ${styles.bentoRelative}`}>
                <Image 
                  src="/images/catering/DSC_3440bm.webp" 
                  alt="Rzemieślnicze pieczywo" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.bentoImage} 
                />
                <div className={styles.bentoOverlay}>
                  <h2>Piekarnia</h2>
                  <p>Codziennie wypiekamy dla Ciebie chleby orkiszowe, żytnie, gryczane i bajgle na zakwasie. Prawdziwy, tradycyjny chleb bez drożdży.</p>
                </div>
                <div className={styles.bentoCardStaticLabel}>
                  <span>🍞 Domowe wypieki</span>
                </div>
              </Link>

              {/* Card 3: Delivery (Medium Bento span 4) */}
              <Link href="/zamow" className={`${styles.bentoCard} ${styles.bentoMedium} ${styles.bentoRelative}`}>
                <Image 
                  src="/images/raw/DSC_8977_surowe.webp" 
                  alt="Dostawa jedzenia Lublin" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.bentoImage} 
                />
                <div className={styles.bentoOverlay}>
                  <h2>Szybka Dostawa</h2>
                  <p>Ciesz się ciepłym i świeżym jedzeniem w pracy lub w domowym zaciszu. Zamówienie dostarczymy sprawnie i na czas.</p>
                </div>
                <div className={styles.bentoCardStaticLabel}>
                  <span>🚴 Ciepłe i na czas</span>
                </div>
              </Link>

              {/* Card 4: Lunch (Large Bento span 8) */}
              <Link href="/lunch-menu" className={`${styles.bentoCard} ${styles.bentoLarge} ${styles.bentoRelative}`}>
                <Image 
                  src="/images/lunches.jpg" 
                  alt="Oferta lunchowa Zielony Talerzyk" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className={styles.bentoImage} 
                />
                <div className={styles.bentoOverlay}>
                  <h2>Zbilansowane Lunche</h2>
                  <p>Co tydzień układamy dla Ciebie nowe menu lunchowe. Pełnowartościowe i energetyzujące zestawy dla każdego.</p>
                </div>
                <div className={styles.bentoCardStaticLabel}>
                  <span>🥗 Codzienne menu lunchowe</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 5. Parallax Slogan Banner */}
        <section className={styles.parallaxSloganSection}>
          <Image 
            src="/images/interior/hero image.webp" 
            alt="Zielony Talerzyk Lublin" 
            fill
            sizes="100vw"
            className={styles.parallaxBgImage}
          />
          <div className={styles.parallaxOverlay} />
          <div className={styles.parallaxContent}>
            <span className={styles.parallaxTag}>Slow Food Restaurant & Cafe</span>
            <h2 className={styles.parallaxQuote}>
              Zielony Talerzyk – Odpocznij, zjedz dobrze i poczuj się świetnie!
            </h2>
            <div className={styles.parallaxDivider} />
            <p className={styles.parallaxAuthor}>Tradycja połączona z nowoczesnością w Lublinie</p>
          </div>
        </section>

        {/* 6. Photo Strip - Elegant Hover Zoom Gallery */}
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
              <Image 
                src={src} 
                alt="Galeria dań Zielony Talerzyk" 
                fill 
                sizes="(max-width: 768px) 50vw, 16vw"
                className={styles.imgZoom} 
              />
              <div className={styles.galleryOverlayLabel}>
                <span>Zielony Talerzyk</span>
              </div>
            </div>
          ))}
        </section>

      </main>
    </>
  );
}
