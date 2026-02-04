import Navbar from "../components/Navbar";
import SecondaryNav from "../components/SecondaryNav";
import Footer from "../components/Footer";
import FAQClient from "./FAQClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Często Zadawane Pytania (FAQ)",
    description: "Dowiedz się więcej o Zielonym Talerzyku. Odpowiedzi na pytania o rezerwacje, parking, opcje wegańskie i przyjazność dla zwierząt.",
    keywords: ["faq Zielony Talerzyk", "rezerwacje restauracja Lublin", "restauracja przyjazna psom Lublin", "parking Zielony Talerzyk"],
};

export default function FAQPage() {
    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[#ffffff]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f0fdf4] via-transparent to-[#fdfcf2] opacity-80" />
                </div>

                <Navbar />
                <SecondaryNav />

                <FAQClient />
            </main>
            <Footer />
        </>
    );
}
