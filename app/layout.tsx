import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Changed fonts
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zielony Talerzyk | Zdrowe Jedzenie w Lublinie",
    template: "%s | Zielony Talerzyk"
  },
  description: "Zielony Talerzyk w Lublinie to miejsce, gdzie pasja do zdrowego odżywiania łączy się z wyjątkowym smakiem. Serwujemy dania wegetariańskie, wegańskie i mięsne przygotowane z lokalnych produktów.",
  keywords: ["Zielony Talerzyk", "restauracja Lublin", "zdrowe jedzenie Lublin", "lunch Lublin", "obiady Lublin", "wegetariańska restauracja Lublin", "wegańskie jedzenie Lublin", "catering Lublin", "lokalne produkty"],
  authors: [{ name: "Zielony Talerzyk" }],
  creator: "Zielony Talerzyk",
  publisher: "Zielony Talerzyk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zielony Talerzyk | Zdrowe Jedzenie w Lublinie",
    description: "Pyszne i zdrowe jedzenie w sercu Lublina. Sprawdź nasze menu lunchowe i ofertę cateringową!",
    url: "https://zielonytalerzyk.pl",
    siteName: "Zielony Talerzyk",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zielony Talerzyk | Zdrowe Jedzenie w Lublinie",
    description: "Pyszne i zdrowe jedzenie w sercu Lublina. Lokalnie, świeżo, smacznie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl"> {/* Changed lang to Polish */}
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
