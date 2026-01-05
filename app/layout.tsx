import type { Metadata } from "next";
import "./globals.css";
import ConsultationPopup from "@/components/ConsultationPopup";
import TalkToExpertButton from "@/components/TalkToExpertButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});
export const metadata: Metadata = {
  title: "Pinnacle Nepal - Educational Consultancy",
  description: "Your gateway to global education. Expert consultancy for study abroad programs.",
  keywords: "education, study abroad, consultancy, Nepal, international education",
  authors: [{ name: "Pinnacle Nepal" }],
  openGraph: {
    title: "Pinnacle Nepal - Educational Consultancy",
    description: "Transform your dreams into reality with expert guidance for studying abroad",
    type: "website",
    locale: "en_US",
    siteName: "Pinnacle Nepal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Nepal - Educational Consultancy",
    description: "Your gateway to global education",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        <ConsultationPopup />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
