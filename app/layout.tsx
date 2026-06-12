import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SK Petroteck Limited | Aviation, Fuel & Construction PNG",
  description:
    "SK Petroteck Limited — Papua New Guinea's specialist in aviation fuel systems, industrial fuel infrastructure, training & competency, and building construction.",
  keywords: "aviation fuel systems, industrial fuel infrastructure, construction, PNG, Papua New Guinea, training competency, ICAO, Puma Energy, Airlines PNG, Gulf Province",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
