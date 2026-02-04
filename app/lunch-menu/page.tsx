import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import LunchMenuClient from "./LunchMenuClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lunch Menu",
    description: "Sprawdź nasze aktualne menu lunchowe. Co tydzień nowe, świeże i zdrowe propozycje w Zielonym Talerzyku w Lublinie.",
    keywords: ["lunch menu Lublin", "obiad dnia Lublin", "menu tygodniowe", "tani lunch Lublin", "zdrowy lunch"],
};

export default function LunchMenuPage() {
    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                {/* Background Mesh (consistent with main page) */}
                <div className="absolute inset-0 -z-10 bg-[#ffffff]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
                </div>

                <Navbar />
                <SecondaryNav />

                <LunchMenuClient />
            </main>
            <Footer />
        </>
    );
}
