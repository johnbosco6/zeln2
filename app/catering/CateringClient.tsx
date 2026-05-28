"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, CheckCircle2, User, Users, Calendar, HelpCircle, FileText, Send, Sparkles, Star } from "lucide-react";
import menuStyles from "./catering.module.css";

// Vegan Proposals
const veganItems = [
    { name: "Koreczki ogórkowe z hummusem pomidorowym i kiełkami", price: "7,9zł/szt", note: "BG" },
    { name: "Bułeczki z hummusem, karmelizowaną cebulką, ogórkiem i rukolą", price: "14,9zł/szt" },
    { name: "Rogaliki z marynowanym grillowanym tofu, wege majonez, kiełki", price: "14,9zł/szt" },
    { name: "Pasty (do wyboru: hummus, pesto z suszonych pomidorów, smalczyk z fasoli, tapenada z zielonych oliwek) + pieczywo orkiszowe, żytnie, lub gryczane bezglutenowe", price: "16zł/100g" }
];

// Vegetarian Proposals
const vegetarianItems = [
    { name: "Roladki z grillowanej cukinii w sosie miodowym, sera feta i czarnej oliwki", price: "9,9zł/szt" },
    { name: "Liść cykorii z masą serową i orzechami włoskimi", price: "10,9zł/szt" },
    { name: "Krakersy z ziaren, kozi twaróg, jabłka w cynamonie, orzechy włoskie", price: "12,9zł/szt" },
    { name: "Tartaletki serowo - warzywne", price: "12,9zł/szt" },
    { name: "Rogaliki maślane z serem brie, kiełkami, szczypiorkiem, majonezem i kiszonym ogórkiem", price: "14,9zł/szt" },
    { name: "Mini calzone z serami i warzywami", price: "15,9zł/szt" }
];

// Meat Proposals
const meatItems = [
    { name: "Daktyl nadziewany smażonym migdałem, owinięty w bekon", price: "9,9zł/szt" },
    { name: "Sezamowe ślimaczki z piersi kurczaka i ciasta francuskiego", price: "13,9zł/szt" },
    { name: "Kruche tartaletki z tapenadą z zielonych oliwek, kozim serem, świnką puławską, kaparem i suszonym pomidorem", price: "13,9zł/szt" },
    { name: "Burgerki z sosem musztardowym, pulled pork, szpinak, czerwona cebulka", price: "14,9zł/szt" },
    { name: "Tortilla szpinakowa z szynką, twarożkiem i ogórkiem", price: "14,9zł/szt" },
    { name: "Mus z wątróbki kurczaka z tymiankiem podawany w słoiczku, grzanka z chałki", price: "15,9zł/szt" },
    { name: "Mini wrapy z wędzonym pstrągiem, chrzanem, sałatą, papryką i szczypiorkiem", price: "16,9zł/szt" },
    { name: "Mini calzone z mięsem, serami i warzywami", price: "16,9zł/szt" },
    { name: "Mini tortilla z guacamole i pieczonym kurczakiem", price: "17,9zł/szt" },
    { name: "Mus w słoiczkach z wędzonego łososia, z salsą z rukoli, i serowym chipsem", price: "18,9zł/szt" },
    { name: "Rillettes z konfitowanej kaczki ze świeżą miętą i limonką podawane w bułeczce", price: "19,9zł/szt" }
];

// Salad Proposals
const saladItems = [
    { name: "Marchewka, marynowana ciecierzyca, sałaty, awokado, dressing owocowy", price: "129zł", note: "BG, wegańska" },
    { name: "Brokuł, rzodkiewki, jajka na twardo, kiełki, mix sałat, kiszony ogórek, ziołowy majonez", price: "139zł", note: "BG" },
    { name: "Sałatka z marynowanym pieczonym burakiem, serem solankowym, szpinakiem, cykorią, dressingiem pomarańczowym i kaparami", price: "139zł", note: "BG" },
    { name: "Twarożek kozi, sałaty, owoce, orzechy laskowe, dressing owocowy", price: "149zł", note: "BG" },
    { name: "Sałatka z pieczonym kurczakiem, jajkiem, orzechem włoskim, ziemniakiem i mixem sałat z miodowym sosem winegret", price: "149zł", note: "BG, mięsna" }
];

// Sweet Proposals
const sweetItems = [
    { name: "Brownie", price: "10zł/szt", note: "BG" },
    { name: "Szarlotka", price: "10zł/szt" },
    { name: "Szarlotka wegańska", price: "10zł/szt" },
    { name: "Sernik waniliowy", price: "13zł/szt" },
    { name: "Sernik na zimno w słoiczkach (100ml) z sosem owocowym", price: "14zł/szt" },
    { name: "Budyń z tapioki z musem owocowym i krokantem orzechowym, podawany w słoiczku", price: "14zł/szt" }
];

// Gallery Images
const galleryImages = [
    { src: "/images/catering/DSC_3437bm.webp", label: "Catering" },
    { src: "/images/catering/DSC_3438bm.webp", label: "Finger Food" },
    { src: "/images/catering/DSC_3440bm.webp", label: "Ekologiczne" },
    { src: "/images/catering/DSC_3442bm.webp", label: "Smak" },
    { src: "/images/catering/DSC_3444bm.webp", label: "Dania Główne" },
    { src: "/images/catering/DSC_3447bm.webp", label: "Świeże Składniki" },
    { src: "/images/catering/DSC_3448bm.webp", label: "Wegetariańskie" },
    { src: "/images/catering/DSC_3451bm.webp", label: "Desery" },
    { src: "/images/catering/DSC_3457bm.webp", label: "Pyszne Dania" },
    { src: "/images/catering/DSC_3459bm.webp", label: "Napoje" },
    { src: "/images/catering/DSC_3460bm.webp", label: "Catering Lublin" },
    { src: "/images/catering/DSC_3461bm.webp", label: "Mięsne" },
    { src: "/images/catering/DSC_3463bm.webp", label: "Na Każdą Okazję" },
    { src: "/images/catering/DSC_3495bm.webp", label: "Świeżość" },
    { src: "/images/catering/DSC_3511bm.webp", label: "Elegancja" },
    { src: "/images/catering/DSC_3521bm.webp", label: "Przystawki" },
    { src: "/images/catering/DSC_9694bm.webp", label: "Smaczne" },
    { src: "/images/catering/DSC_9702bm.webp", label: "Sałatki" },
    { src: "/images/catering/DSC_9708bm.webp", label: "Nasze Wyroby" }
];

export default function CateringClient() {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [eventType, setEventType] = useState("lunch firmowy");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !email || !guests || !date) {
            alert("Prosimy o wypełnienie wszystkich wymaganych pól.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className={menuStyles.pageContainer}>
            {/* Hero Section */}
            <section className={menuStyles.hero}>
                <div className={menuStyles.heroBadge}>
                    <Sparkles size={16} style={{ marginRight: '6px', color: '#c4d600' }} />
                    Oferta Cateringowa Lublin
                </div>
                <h1 className={menuStyles.heroTitle}>Catering Lublin – Zielony Talerzyk</h1>
                <p className={menuStyles.heroSubtitle}>
                    Szukasz sprawdzonego cateringu w Lublinie, który łączy wysoką jakość, świeże składniki i dopracowany smak? 
                    Zielony Talerzyk to jedna z najlepiej ocenianych restauracji w Lublinie, oferująca catering przygotowywany od podstaw.
                </p>
            </section>

            {/* Intro Grid */}
            <section className={menuStyles.introSection}>
                <div className={menuStyles.introGrid}>
                    <div className={menuStyles.introContent}>
                        <h2 className={menuStyles.introTitle}>Nasz catering – jakość, którą czuć</h2>
                        <p className={menuStyles.introText}>
                            W Zielonym Talerzyku wszystko powstaje od podstaw – bez półproduktów, sztucznych polepszaczy smaku czy barwników. 
                            Stawiamy na sezonowe produkty od zaufanych, lokalnych dostawców. Obsługujemy zarówno kameralne spotkania, jak i większe wydarzenia.
                            <br /><br />
                            Nasza kuchnia inspirowana jest ideą <strong>slow food</strong> – stawiamy na czas, serce włożone w gotowanie i bezkompromisową jakość. 
                            W menu cateringowym znajdziesz klasyczne propozycje w nowoczesnym wydaniu, a także bogatą gamę potraw wegetariańskich i wegańskich.
                        </p>
                        
                        <div className={menuStyles.highlightsGrid}>
                            <div className={menuStyles.highlightCard}>
                                <Star size={20} className={menuStyles.highlightIcon} />
                                <div>
                                    <h4>Top Ocena</h4>
                                    <p>Jedna z najlepiej ocenianych restauracji w Lublinie.</p>
                                </div>
                            </div>
                            <div className={menuStyles.highlightCard}>
                                <CheckCircle2 size={20} className={menuStyles.highlightIcon} />
                                <div>
                                    <h4>100% Od Podstaw</h4>
                                    <p>Pieczywo, pierogi, sosy, przyprawy – wszystko robimy sami.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={menuStyles.introImageWrapper}>
                        <Image
                            src="/images/catering/DSC_3457bm.webp"
                            alt="Oferta cateringowa Zielony Talerzyk"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className={menuStyles.introImage}
                        />
                        <div className={menuStyles.imageOverlay}>
                            <span>Slow Food Catering</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Specialization Section */}
            <section className={menuStyles.specializationsSection}>
                <h2 className={menuStyles.specTitle}>Poznaj Nasze Specjalizacje</h2>
                <p className={menuStyles.specSubtitle}>
                    Dostarczamy wybitne doznania kulinarne dostosowane do charakteru każdego wydarzenia na terenie Lublina i okolic.
                </p>
                
                <div className={menuStyles.specGrid}>
                    <div className={menuStyles.specCard}>
                        <h3>Catering okolicznościowy Lublin</h3>
                        <p>
                            Kompleksowa obsługa przyjęć rodzinnych, jubileuszy i chrzcin. Dopasujemy menu do upodobań gości, dbając o elegancką formę podania i pełną logistykę dostawy.
                        </p>
                    </div>
                    <div className={menuStyles.specCard}>
                        <h3>Partybox Lublin</h3>
                        <p>
                            Wygodne zestawy przekąsek w estetycznych, ekologicznych boxach, gotowe do natychmiastowego postawienia na stole. Idealny wybór na domówki, urodziny i spontaniczne spotkania.
                        </p>
                    </div>
                    <div className={menuStyles.specCard}>
                        <h3>Grill imprezy plenerowe Lublin</h3>
                        <p>
                            Profesjonalny catering grillowy na eventy na świeżym powietrzu. Oferujemy tradycyjne specjały w nowoczesnej odsłonie oraz pyszne opcje warzywne prosto z rusztu.
                        </p>
                    </div>
                    <div className={menuStyles.specCard}>
                        <h3>Fingerfood Lublin</h3>
                        <p>
                            Kunsztowne przekąski na jeden kęs. Połączenie finezji smaku z niesamowitą estetyką wizualną – doskonale sprawdzają się podczas bankietów i przerw kawowych.
                        </p>
                    </div>
                    <div className={menuStyles.specCard}>
                        <h3>Catering serwowany Lublin</h3>
                        <p>
                            Ekskluzywne obiady wielodaniowe z profesjonalną obsługą kelnerską. Idealne rozwiązanie na eleganckie gale firmowe, wesela oraz uroczyste kolacje biznesowe.
                        </p>
                    </div>
                </div>
            </section>

            {/* In-depth descriptions */}
            <section className={menuStyles.infoTextSection}>
                <div className={menuStyles.infoColumnGrid}>
                    <div className={menuStyles.infoBlock}>
                        <h3>Catering dla firm Lublin – wygodne rozwiązanie na co dzień</h3>
                        <p>
                            Regularnie obsługujemy firmy na terenie Lublina, dostarczając zbilansowane lunche biznesowe, catering na szkolenia, konferencje oraz spotkania z kluczowymi partnerami. Zapewniamy powtarzalną jakość, punktualność oraz elastyczne podejście dopasowane do budżetu i wymagań danej firmy.
                        </p>
                    </div>
                    <div className={menuStyles.infoBlock}>
                        <h3>Estetyka i wygoda podania</h3>
                        <p>
                            Wygląd dań jest dla nas równie ważny jak ich smak. Dostarczamy potrawy w estetycznych opakowaniach jednorazowych lub na eleganckich półmiskach. W naszej ofercie znajdziesz catering w boxach, zestawy do dzielenia się (finger food), pełne dania obiadowe, a na życzenie organizujemy catering wraz z profesjonalną obsługą kelnerską.
                        </p>
                    </div>
                </div>
            </section>

            {/* Catering Menu Section */}
            <section className={menuStyles.menuSection}>
                <h2 className={menuStyles.menuTitle}>Menu Cateringowe</h2>
                <p className={menuStyles.menuSubtitle}>Skomponuj własny zestaw z naszych sprawdzonych, domowych propozycji</p>

                {/* Vegan Options */}
                <div className={menuStyles.menuCategory}>
                    <h3 className={menuStyles.menuCategoryTitle}>Propozycje Wegańskie</h3>
                    <div className={menuStyles.menuItems}>
                        {veganItems.map((item, index) => (
                            <div key={index} className={menuStyles.menuItem}>
                                <span className={menuStyles.itemName}>
                                    {item.name} {item.note && <span className={menuStyles.itemNote}>({item.note})</span>}
                                </span>
                                <span className={menuStyles.itemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vegetarian Options */}
                <div className={menuStyles.menuCategory}>
                    <h3 className={menuStyles.menuCategoryTitle}>Propozycje Wegetariańskie</h3>
                    <div className={menuStyles.menuItems}>
                        {vegetarianItems.map((item, index) => (
                            <div key={index} className={menuStyles.menuItem}>
                                <span className={menuStyles.itemName}>{item.name}</span>
                                <span className={menuStyles.itemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Meat Options */}
                <div className={menuStyles.menuCategory}>
                    <h3 className={menuStyles.menuCategoryTitle}>Catering na urodziny i przyjęcia – propozycje mięsne</h3>
                    <div className={menuStyles.menuItems}>
                        {meatItems.map((item, index) => (
                            <div key={index} className={menuStyles.menuItem}>
                                <span className={menuStyles.itemName}>{item.name}</span>
                                <span className={menuStyles.itemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Salad Options */}
                <div className={menuStyles.menuCategory}>
                    <h3 className={menuStyles.menuCategoryTitle}>Propozycje Sałatkowe (Salatery)</h3>
                    <div className={menuStyles.menuItems}>
                        {saladItems.map((item, index) => (
                            <div key={index} className={menuStyles.menuItem}>
                                <span className={menuStyles.itemName}>
                                    {item.name} {item.note && <span className={menuStyles.itemNote}>({item.note})</span>}
                                </span>
                                <span className={menuStyles.itemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desserts Options */}
                <div className={menuStyles.menuCategory}>
                    <h3 className={menuStyles.menuCategoryTitle}>Propozycje na słodko (w papilotach)</h3>
                    <div className={menuStyles.menuItems}>
                        {sweetItems.map((item, index) => (
                            <div key={index} className={menuStyles.menuItem}>
                                <span className={menuStyles.itemName}>
                                    {item.name} {item.note && <span className={menuStyles.itemNote}>({item.note})</span>}
                                </span>
                                <span className={menuStyles.itemPrice}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Notes */}
                <div className={menuStyles.importantNotes}>
                    <h3>Ważne informacje organizacyjne:</h3>
                    <p>📌 Catering dostarczamy na terenie Lublina i okolic przez 7 dni w tygodniu.</p>
                    <p>📌 Minimalna ilość zamówienia dla wybranej pozycji cateringowej to 10 sztuk (nie dotyczy sałatek i past).</p>
                    <p>📌 Minimalna wartość całego zamówienia cateringowego wynosi 400 zł.</p>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <section className={menuStyles.gallerySection}>
                <h2 className={menuStyles.galleryHeading}>Galeria Naszych Cateringów</h2>
                <p className={menuStyles.gallerySubtitle}>Zobacz, jak prezentują się nasze dania serwowane oraz partyboxy</p>
                <div className={menuStyles.galleryGrid}>
                    {galleryImages.map((img, index) => (
                        <div key={index} className={menuStyles.galleryItem}>
                            <Image 
                                src={img.src} 
                                alt={`Zielony Talerzyk catering - ${img.label}`} 
                                width={600} 
                                height={450} 
                                className={menuStyles.galleryImage}
                            />
                            <div className={menuStyles.galleryItemOverlay}>
                                <span className={menuStyles.galleryItemLabel}>{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Contact & Form Section */}
            <section className={menuStyles.contactSection}>
                <div className={menuStyles.contactContainer}>
                    <div className={menuStyles.contactText}>
                        <h2 className={menuStyles.contactHeading}>Wycena i kontakt</h2>
                        <p className={menuStyles.contactSubtext}>
                            Zamówienie cateringu w Zielonym Talerzyku jest proste i szybkie. Skontaktuj się z nami, aby dopasować menu do liczby osób, charakteru wydarzenia i zaplanowanego budżetu. 
                        </p>
                        
                        <div className={menuStyles.contactChannels}>
                            <a href="tel:+48500068241" className={menuStyles.channelLink}>
                                <Phone size={22} className={menuStyles.channelIcon} />
                                <div>
                                    <span>Zadzwoń do nas</span>
                                    <strong>500 068 241</strong>
                                </div>
                            </a>
                            <a href="mailto:zielonatalerzyk@protonmail.com" className={menuStyles.channelLink}>
                                <Mail size={22} className={menuStyles.channelIcon} />
                                <div>
                                    <span>Napisz e-mail</span>
                                    <strong>zielonatalerzyk@protonmail.com</strong>
                                </div>
                            </a>
                        </div>

                        <div className={menuStyles.whyUsBox}>
                            <h3>Dlaczego warto wybrać Zielony Talerzyk?</h3>
                            <ul>
                                <li>✨ Kuchnia przygotowywana w 100% od podstaw na miejscu</li>
                                <li>✨ Wyłącznie świeże, sezonowe i lokalne produkty</li>
                                <li>✨ Ogromne doświadczenie w obsłudze firm i osób prywatnych</li>
                                <li>✨ Elastyczność, uśmiech i pełne zaangażowanie</li>
                            </ul>
                        </div>
                    </div>

                    <div className={menuStyles.formCard}>
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className={menuStyles.cateringForm}>
                                <h3 className={menuStyles.formTitle}>Formularz Zapytania Cateringowego</h3>
                                <p className={menuStyles.formSubtitle}>Wypełnij pola poniżej, a my przygotujemy bezpłatną, niezobowiązującą wycenę.</p>
                                
                                <div className={menuStyles.inputGroup}>
                                    <label htmlFor="name">
                                        <User size={16} style={{ marginRight: '6px' }} />
                                        Imię i nazwisko / Nazwa firmy *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="np. Jan Kowalski / Firma Sp. z o.o."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className={menuStyles.formRow}>
                                    <div className={menuStyles.inputGroup}>
                                        <label htmlFor="guests">
                                            <Users size={16} style={{ marginRight: '6px' }} />
                                            Liczba osób *
                                        </label>
                                        <input
                                            type="number"
                                            id="guests"
                                            required
                                            min="5"
                                            placeholder="np. 20"
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                        />
                                    </div>

                                    <div className={menuStyles.inputGroup}>
                                        <label htmlFor="date">
                                            <Calendar size={16} style={{ marginRight: '6px' }} />
                                            Data wydarzenia *
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            required
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className={menuStyles.inputGroup}>
                                    <label htmlFor="eventType">
                                        <HelpCircle size={16} style={{ marginRight: '6px' }} />
                                        Typ wydarzenia *
                                    </label>
                                    <select
                                        id="eventType"
                                        value={eventType}
                                        onChange={(e) => setEventType(e.target.value)}
                                    >
                                        <option value="lunch firmowy">Lunch firmowy / Event biznesowy</option>
                                        <option value="przyjęcie rodzinne">Przyjęcie rodzinne / urodziny</option>
                                        <option value="wesele">Wesele / przyjęcie ślubne</option>
                                        <option value="komunie/chrzciny">Komunia / Chrzciny</option>
                                        <option value="inne">Inna okazja okolicznościowa</option>
                                    </select>
                                </div>

                                <div className={menuStyles.formRow}>
                                    <div className={menuStyles.inputGroup}>
                                        <label htmlFor="phone">
                                            <Phone size={16} style={{ marginRight: '6px' }} />
                                            Telefon kontaktowy *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            placeholder="np. 500 000 000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className={menuStyles.inputGroup}>
                                        <label htmlFor="email">
                                            <Mail size={16} style={{ marginRight: '6px' }} />
                                            Adres E-mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="np. kowalski@mail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className={menuStyles.inputGroup}>
                                    <label htmlFor="message">
                                        <FileText size={16} style={{ marginRight: '6px' }} />
                                        Dodatkowe informacje / uwagi / preferencje menu
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Wpisz swoje preferencje dietetyczne, budżet lub inne życzenia specjalne..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className={menuStyles.submitBtn}>
                                    <Send size={18} style={{ marginRight: '8px' }} />
                                    Wyślij zapytanie o catering
                                </button>
                            </form>
                        ) : (
                            <div className={menuStyles.successCard}>
                                <div className={menuStyles.successIconWrapper}>
                                    <CheckCircle2 size={56} className={menuStyles.successIcon} />
                                </div>
                                <h3 className={menuStyles.successTitle}>Dziękujemy za zapytanie!</h3>
                                <p className={menuStyles.successText}>
                                    Otrzymaliśmy Twoje zgłoszenie dotyczące cateringu. System wygenerował automatyczne potwierdzenie.
                                </p>

                                <div className={menuStyles.summaryDetails}>
                                    <div className={menuStyles.summaryRow}>
                                        <span>Typ wydarzenia:</span>
                                        <strong>{eventType}</strong>
                                    </div>
                                    <div className={menuStyles.summaryRow}>
                                        <span>Liczba osób:</span>
                                        <strong>{guests} osób</strong>
                                    </div>
                                    <div className={menuStyles.summaryRow}>
                                        <span>Planowana data:</span>
                                        <strong>{date}</strong>
                                    </div>
                                    <div className={menuStyles.summaryRow}>
                                        <span>Telefon do kontaktu:</span>
                                        <strong>{phone}</strong>
                                    </div>
                                </div>

                                <div className={menuStyles.autoReplyBox}>
                                    <h4>⚡ Auto-odpowiedź (Catering Zielony Talerzyk):</h4>
                                    <p>
                                        Wiadomość została przekazana bezpośrednio do naszego managera ds. cateringu. 
                                        Potwierdzamy otrzymanie zapytania od <strong>{name}</strong>. Skontaktujemy się z Tobą telefonicznie pod numerem <strong>{phone}</strong> w ciągu <strong>2 godzin</strong> (w godzinach otwarcia restauracji), aby omówić szczegóły i przedstawić gotowe menu wraz z bezpłatną, indywidualną wyceną.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSubmitted(false)}
                                    className={menuStyles.resetBtn}
                                >
                                    Wyślij kolejne zapytanie
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
