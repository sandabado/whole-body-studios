import type { Metadata } from "next";
import { Cinzel, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whole Body Studios — Infrastructure, Not a Label.",
  description:
    "Production, distribution, and sync licensing for artists who retain everything. The artist eats first. Always.",
  keywords: [
    "music production",
    "sync licensing",
    "artist partnership",
    "indie distribution",
    "feed first",
  ],
  openGraph: {
    title: "Whole Body Studios — Infrastructure, Not a Label.",
    description:
      "Production, distribution, and sync licensing for artists who retain everything. We earn on services rendered — never on ownership.",
    type: "website",
    url: "https://wholebody.studios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="bg-void text-bone font-body antialiased">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
