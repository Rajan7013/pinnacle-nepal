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
  metadataBase: new URL('https://www.pinnaclenepal.org'),
  title: {
    default: "Pinnacle Nepal - Top Educational Consultancy in Kathmandu | Study Abroad",
    template: "%s | Pinnacle Nepal"
  },
  description: "Leading educational consultancy in Nepal. Expert guidance for studying MBBS, Engineering abroad in India, Russia, China, Bangladesh. Free consultation. Contact: +977 9852062628",
  keywords: [
    "Pinnacle Nepal",
    "educational consultancy Nepal",
    "study abroad consultancy Kathmandu",
    "top consultancy Nepal",
    "MBBS abroad from Nepal",
    "study in India from Nepal",
    "study in Russia from Nepal",
    "educational consultant Kathmandu",
    "overseas education Nepal",
    "study abroad Nepal",
    "Nepal to India education",
    "MBBS in India",
    "Engineering abroad",
    "top 10 consultancy Nepal"
  ],
  authors: [{ name: "Pinnacle Nepal", url: "https://www.pinnaclenepal.org" }],
  creator: "Pinnacle Nepal",
  publisher: "Pinnacle Nepal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pinnaclenepal.org",
    siteName: "Pinnacle Nepal",
    title: "Pinnacle Nepal - Top Educational Consultancy in Kathmandu",
    description: "Leading educational consultancy in Nepal. Expert guidance for studying MBBS, Engineering abroad. Free consultation. Contact: +977 9852062628",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pinnacle Nepal - Educational Consultancy"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Nepal - Top Educational Consultancy in Kathmandu",
    description: "Leading educational consultancy in Nepal. Expert guidance for studying abroad.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  verification: {
    // Add Google Search Console verification code here when you get it
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.pinnaclenepal.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pinnacle Nepal",
              "alternateName": "Pinnacle Nepal Educational Consultancy",
              "url": "https://www.pinnaclenepal.org",
              "logo": "https://www.pinnaclenepal.org/logo.jpg",
              "description": "Leading educational consultancy in Nepal providing expert guidance for studying abroad in India, Russia, China, Bangladesh and other countries.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Baneshwor",
                "addressLocality": "Kathmandu",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.6915",
                "longitude": "85.3240"
              },
              "telephone": ["+977-9852062628", "+977-9814362628"],
              "email": "contact@pinnaclenepal.org",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                // Add your social media URLs here when available
                // "https://www.facebook.com/pinnaclenepal",
                // "https://www.instagram.com/pinnaclenepal",
              ]
            })
          }}
        />

        {/* Structured Data - Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Pinnacle Nepal",
              "image": "https://www.pinnaclenepal.org/logo.jpg",
              "@id": "https://www.pinnaclenepal.org",
              "url": "https://www.pinnaclenepal.org",
              "telephone": "+977-9852062628",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Baneshwor",
                "addressLocality": "Kathmandu",
                "postalCode": "44600",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.6915,
                "longitude": 85.3240
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        <ConsultationPopup />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
