import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import Footer from "./components/Footer";
import OpeningHours from "./components/OpeningHours";
import RealTimeWidget from "./components/RealTimeWidget";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        {/* Enhanced multi-layered mesh background */}
        <div className="absolute inset-0 -z-10 bg-[#ffffff]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(196,214,0,0.18)_0%,_transparent_70%)] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(0,138,75,0.12)_0%,_transparent_70%)]" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_rgba(196,214,0,0.08)_0%,_transparent_70%)]" />
          <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_rgba(0,138,75,0.06)_0%,_transparent_70%)]" />
        </div>

        <Navbar />
        <SecondaryNav />

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Zielony Talerzyk</h1>
          <p className={styles.heroSubtitle}>
            Pyszne i zdrowe jedzenie!
          </p>
          <div className={styles.heroAction}>
            <Link href="/menu/dania-glowne" className={styles.animatedButton}>
              <span>Lunch Menu</span>
            </Link>
          </div>
        </section>

        {/* Content Sections */}
        <div className={styles.contentSection}>
          {/* Section 1 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Świeże, Ekologiczne Składniki</h2>
              <p className={styles.cardText}>
                W naszej restauracji wierzymy, że najzdrowsze i najsmaczniejsze jedzenie tworzone jest od podstaw, ze świeżych, ekologicznych składników.
                <br /><br />
                Dlatego wszystkie dania przygotowujemy z sezonowych, lokalnych produktów od naszych sprawdzonych dostawców – bez sztucznych dodatków i ulepszaczy.
              </p>
            </div>
            <Image
              src="/food1.jpg"
              alt="Świeże danie"
              width={600}
              height={400}
              className={styles.cardImage}
            />
          </div>

          {/* Section 2 */}
          <div className={`${styles.card} ${styles.cardReverse}`}>
            <Image
              src="/food2.jpg"
              alt="Różnorodne dania"
              width={600}
              height={400}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Dla Każdego Coś Smacznego</h2>
              <p className={styles.cardText}>
                W Zielonym Talerzyku każdy znajdzie coś dla siebie: serwujemy dania wegańskie, wegetariańskie, oraz z mięsem.
                <br /><br />
                Jedzenia takiego, jak nasze, nie znajdziesz nigdzie na świecie – bo powstaje z najlepszych, starannie wyselekcjonowanych składników.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Wyjątkowe Miejsce</h2>
              <p className={styles.cardText}>
                Zielony Talerzyk to wyjątkowa restauracja w centrum Lublina, na starym mieście, obok lubelskiego deptaka.
                <br /><br />
                Nasze menu obejmuje dania slow food, które są przyrządzane z najwyższą starannością, zawsze z użyciem świeżych i naturalnych składników.
              </p>
            </div>
            <Image
              src="/interior.jpg"
              alt="Wnętrze restauracji"
              width={600}
              height={400}
              className={styles.cardImage}
            />
          </div>

          {/* Full Width Section */}
          <div className={`${styles.card} ${styles.fullWidthCard}`}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Restauracja, której długo nie zapomnisz!</h2>
              <p className={styles.cardText}>
                Nasza restauracja jest przyjazna dla wszystkich, którzy cenią sobie pyszne i wysokiej jakości jedzenie, w tym również dla dzieci.
                Jeśli jesteś weganinem lub wegetarianinem, na pewno znajdziesz u nas coś dla siebie - w naszym menu znajdują się propozycje dopasowane również do Twoich potrzeb.
                <br /><br />
                A wszystko to w samym centrum Lublina, na lubelskiej starówce. Zapraszamy!
              </p>
            </div>
          </div>

          {/* Widgets Section */}
          <div className={styles.widgetsGrid}>
            <div className={styles.hoursWrapper}>
              <OpeningHours />
            </div>
            <div className={styles.timeWrapper}>
              <RealTimeWidget />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
