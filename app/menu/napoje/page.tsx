import Navbar from "../../components/Navbar";
import SecondaryNav from "../../components/SecondaryNav";
import Footer from "../../components/Footer";
import MenuDisplay from "../../components/MenuDisplay";
import { menuData } from "../../data/menuData";

export default function Napoje() {
    const data = menuData["napoje"];

    return (
        <>
            <main className="min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9f4] via-[#ffffff] to-[#f5fef0]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[rgba(196,214,0,0.15)] via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[rgba(0,138,75,0.12)] via-transparent to-transparent" />
                </div>

                <Navbar />
                <SecondaryNav />

                {data ? <MenuDisplay data={data} /> : <div style={{ padding: '10rem', textAlign: 'center' }}>Menu loading...</div>}
            </main>
            <Footer />
        </>
    );
}
