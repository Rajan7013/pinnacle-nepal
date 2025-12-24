import type { Metadata } from "next";
import "./globals.css";
import ConsultationPopup from "@/components/ConsultationPopup";
import TalkToExpertButton from "@/components/TalkToExpertButton";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ConsultationPopup />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
