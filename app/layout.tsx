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
  title: "SK Petroteck Limited | Construction & Infrastructure PNG",
  description:
    "SK Petroteck Limited — Papua New Guinea's trusted partner for community infrastructure, school construction, and civil works projects across Gulf Province.",
  keywords: "construction, PNG, Papua New Guinea, infrastructure, school construction, Gulf Province, community development, Kerema",
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
