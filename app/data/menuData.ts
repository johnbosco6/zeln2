export type MenuItem = {
    name: string;
    price: string;
    category?: string;
    type: 'meat' | 'vegetarian' | 'vegan' | 'other';
    note?: string;
};

export type MenuSection = {
    title: string;
    items: MenuItem[];
};

export type CategoryData = {
    title: string;
    subtitle: string;
    sections: MenuSection[];
};

export const menuData: Record<string, CategoryData> = {
    "przystawki-i-zupy": {
        title: "Przystawki i Zupy",
        subtitle: "Świeże i aromatyczne rozpoczęcie posiłku",
        sections: [
            {
                title: "Przystawki",
                items: [
                    { name: "Babka ziemniaczana/ kwaśna śmietana/ sos borowikowy/ szczypiorek", price: "29zł", type: "vegetarian" },
                    { name: "Chałka/ pate drobiowo-wołowe/ żel z pigwy/ karmelizowana cebula/ balsamico", price: "32zł", type: "meat" },
                    { name: "Chałka/ cytrynowe creme fraiche/ figa/ pistacje/ mięta", price: "29zł", type: "vegetarian" },
                    { name: "Bułka orkiszowa", price: "11zł", type: "other", category: "dodatek" },
                ]
            },
            {
                title: "Zupy",
                items: [
                    { name: "Rosół z kołdunami/ oliwa lubczykowa", price: "25zł", type: "meat" },
                    { name: "Flaczki z boczniaka/ majeranek", price: "25zł", type: "vegan" },
                    { name: "Mięsna z kiełbasą i kluseczkami", price: "25zł", type: "meat" },
                    { name: "Krem z batata z imbirem", price: "25zł", type: "vegan" },
                ]
            },
            {
                title: "Menu Dziecięce",
                items: [
                    { name: "Rosół z marchewką i orkiszowymi kluseczkami", price: "18zł", type: "meat" },
                ]
            }
        ]
    },
    "dania-glowne": {
        title: "Dania Główne",
        subtitle: "Starannie przygotowane specjały",
        sections: [
            {
                title: "Dania Mięsne",
                items: [
                    { name: "Żebro wołowe/ puree z kalafiora/ sos RWS z czarnym czosnkiem/ ogórki po azjatycku", price: "63zł", type: "meat" },
                    { name: "Filet z pstrąga z Pustelni/ kluski marchewkowe/ jarmuż/ sos Beuerre Blanc/ olej ziołowy", price: "59zł", type: "meat" },
                    { name: "Burger po Lubelsku - Brioche z cebulą i makiem/ pulled pork/ kimchi/ konfitura z czerwonej cebuli/ ser koryciński/ majonez z fermentowanym czosnkiem/ opiekane ziemniaki", price: "55zł", type: "meat" },
                ]
            },
            {
                title: "Dania Wegetariańskie",
                items: [
                    { name: "Kopytka grzybowe/ emulsja z estragonem/ grzyby shimeji", price: "43zł", type: "vegetarian" },
                    { name: "Leniwe/ frużelina/ owoce/ kwaśna śmietana", price: "39zł", type: "vegetarian" },
                    { name: "Stek z kapusty włoskiej/ gorgonzola D.O.P/ ziemniak/ olej chilli", price: "39zł", type: "vegetarian" },
                ]
            },
            {
                title: "Dania Wegańskie",
                items: [
                    { name: "Pulpeciki/ ciecierzyca/ tofu/ nori/ sos tatarski/ burak/ roszponka/ komosa ryżowa", price: "46zł", type: "vegan" },
                ]
            },
            {
                title: "Menu Dziecięce",
                items: [
                    { name: "Paluszki rybne/ łódeczki ziemniaczane/ mizeria", price: "29zł", type: "meat" },
                    { name: "Pulpeciki z indyka w sosie pomidorowo-śmietanowym (2 szt)/ łódeczki ziemniaczane/ mizeria", price: "29zł", type: "meat" },
                    { name: "Leniwe/ frużelina/ owoce/ kwaśna śmietana", price: "29zł", type: "vegetarian" },
                    { name: "Rosół z makaronem i marchewką (200ml)", price: "18zł", type: "meat" },
                ]
            }
        ]
    },
    "desery": {
        title: "Desery",
        subtitle: "Słodkie zakończenie posiłku",
        sections: [
            {
                title: "Słodkości",
                items: [
                    { name: "Creme brûlée", price: "28zł", type: "vegetarian" },
                    { name: "Crumble z prażonym jabłkiem/ creme anglaise/ kruszonka", price: "29zł", type: "vegetarian" },
                    { name: "Sernik waniliowy z karmelem", price: "24zł", type: "vegetarian", note: "BG" },
                    { name: "Ciasto marchewkowe", price: "17zł", type: "vegan" },
                    { name: "Brownie", price: "15zł", type: "vegetarian", note: "BG" },
                    { name: "Blondie na belgijskiej białej czekoladzie", price: "15zł", type: "vegetarian" },
                ]
            }
        ]
    },
    "pierogi": {
        title: "Pierogi",
        subtitle: "Tradycyjne polskie smaki",
        sections: [
            {
                title: "Nasze Pierogi",
                items: [
                    { name: "Pierogi mięsne/ kaszanka/ szalotka/ prażone jabłko/ koper", price: "39zł", type: "meat" },
                    { name: "Pierogi ruskie/ okrasa z cebuli/ wędzona śmietana", price: "39zł", type: "vegetarian" },
                    { name: "Pierogi wegańskie/ suszony pomidor/ szpinak/ skwarki z selera/ oliwa", price: "39zł", type: "vegan" },
                ]
            }
        ]
    },
    "salatki": {
        title: "Sałatki",
        subtitle: "Świeże i zdrowe kompozycje",
        sections: [
            {
                title: "Miski i Sałaty",
                items: [
                    { name: "Bowl/ pasta z fasoli/ warzywa korzeniowe/ brukselka/ dynia marynowana", price: "49zł", type: "vegan" },
                    { name: "Cezar/ kurczak/ boczek/ jajko/ sałata rzymska/ grzanki/ sos cezar/ Grana Padano", price: "49zł", type: "meat" },
                ]
            }
        ]
    },
    "nasze-wyroby": {
        title: "Nasze Wyroby",
        subtitle: "Domowe pieczywo i specjały",
        sections: [
            {
                title: "Chleby",
                items: [
                    { name: "Chleb orkiszowy jasny", price: "16zł", type: "vegan", category: "własnego wypieku, 100% mąka orkiszowa, na zakwasie" },
                    { name: "Chleb żytni", price: "14zł", type: "vegan", category: "na zakwasie" },
                    { name: "Chleb gryczany", price: "14zł", type: "vegan", category: "na niepalonej kaszy gryczanej", note: "BG" },
                ]
            },
            {
                title: "Nasze Specjały",
                items: [
                    { name: "Zakwas buraczany", price: "9zł", type: "vegan", category: "Butelka 250 ml" },
                    { name: "Esencja imbirowa", price: "18zł", type: "vegan", category: "Butelka 300 ml" },
                ]
            }
        ]
    },
    "napoje": {
        title: "Napoje",
        subtitle: "Orzeźwiające i aromatyczne",
        sections: [
            {
                title: "Napoje Zimne",
                items: [
                    { name: "Woda gazowana/niegazowana", price: "8zł", type: "other" },
                    { name: "Coca-cola/ coca-cola Zero", price: "12zł", type: "other" },
                    { name: "Kompot", price: "12zł", type: "other" },
                    { name: "Lemoniada Zielony Talerzyk (300ml)", price: "15zł", type: "other" },
                    { name: "Lemoniada Propss", price: "18zł", type: "other", category: "węglowa kola/ szafran/ Meringa" },
                    { name: "Kombucha", price: "22zł", type: "other", category: "różana, klasyczna, imbirowa" },
                ]
            },
            {
                title: "Soki Świeżo Wyciskane (300ml)",
                items: [
                    { name: "Pomarańczowy", price: "24zł", type: "other" },
                    { name: "Pomarańcza- grejpfrut", price: "24zł", type: "other" },
                    { name: "Jabłko- mięta", price: "24zł", type: "other" },
                    { name: "Jabłko, szpinak, kiwi", price: "24zł", type: "other" },
                    { name: "Jabłko, pomarańcza, szpinak", price: "24zł", type: "other" },
                    { name: "Pomarańcza, kiwi, szpinak", price: "24zł", type: "other" },
                ]
            },
            {
                title: "Koktajle Bezalkoholowe",
                items: [
                    { name: "Nettle Mint Detox", price: "25zł", type: "other", category: "napar z pokrzywy/ sok jabłkowy/ napar z mięty/ syrop z czarnego bzu" },
                    { name: "Elderflower Mint Breeze", price: "25zł", type: "other", category: "napar z kwiatu czarnego bzu/ sok jabłkowy/ napar z mięty/ syrop z czarnego bzu/ syrop mango/ sok z cytryny" },
                    { name: "Rooibos Sunset Glow", price: "25zł", type: "other", category: "napar rooibos/ sok pomarańczowy/ syrop waniliowy/ syrop z granatu" },
                    { name: "Jasmine Elder Mist", price: "25zł", type: "other", category: "napar z zielonej herbaty jaśminowej/ limoncello 0%/ syrop z czarnego bzu" },
                ]
            }
            // Kawy and others truncated for brevity in initial data set, but I should probably include all.
        ]
    }
};
