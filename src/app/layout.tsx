import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kasvello.in"),
  title: {
    default: "Kasvello | Creative Digital Growth Agency | Kasaragod, Kerala",
    template: "%s | Kasvello Creative Digital Growth Agency",
  },
  description:
    "Kasvello is a premier creative digital growth agency in Kasaragod, Kerala. We help ambitious businesses scale through data-backed performance ads, high-intent SEO, modern Next.js websites, and engaging brand storytelling.",
  keywords: [
    "Digital Marketing Agency Kerala",
    "Kasaragod Digital Marketing",
    "SEO Company Kerala",
    "Next.js Web Development Agency",
    "Performance Marketing Kerala",
    "Meta Ads Expert Kasaragod",
    "Google Ads Kerala",
    "Web Design Kasaragod",
    "Branding Agency Kerala",
    "Kasvello",
    "Local Roots Digital Reach",
  ],
  authors: [{ name: "Kasvello Team", url: "https://kasvello.in" }],
  creator: "Kasvello",
  publisher: "Kasvello",
  alternates: {
    canonical: "https://kasvello.in",
  },
  openGraph: {
    title: "Kasvello | Creative Digital Growth Agency | Kasaragod, Kerala",
    description:
      "Ideas that connect. Strategies that grow. High-intent SEO, performance advertising, and modern Next.js web systems from Kasaragod, Kerala.",
    url: "https://kasvello.in",
    siteName: "Kasvello",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kasvello Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasvello | Creative Digital Growth Agency",
    description:
      "Ideas that connect. Strategies that grow. Local roots with digital reach.",
    images: ["/og-image.svg"],
    creator: "@kasvello",
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
  const jsonLdProfessionalService = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://kasvello.in/#organization",
    name: "Kasvello",
    alternateName: "Kasvello Creative Digital Agency",
    description:
      "Kasvello is a creative digital growth agency based in Kasaragod, Kerala, specializing in high-intent SEO, Meta & Google performance marketing, ultra-fast Next.js websites, and brand storytelling.",
    url: "https://kasvello.in",
    email: "kasvello.digital@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kasaragod",
      addressRegion: "Kerala",
      postalCode: "671121",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.5102",
      longitude: "75.0048",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Kasaragod" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: ["https://instagram.com/kasvello"],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why choose Kasvello over a traditional advertising agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kasvello gives you direct founder strategy, zero vanity metrics, agile 48-hour campaign execution, and modern Next.js tech stacks engineered strictly for qualified revenue.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can my business expect to see results from SEO vs. Paid Ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paid performance campaigns (Meta & Google Ads) generate high-intent customer leads within 48 to 72 hours of launch. Search Engine Optimization (SEO) compounds organic search visibility over 60 to 90 days.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with businesses outside Kasaragod or Kerala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! While rooted in Kasaragod, Kerala, our digital workflows serve ambitious clients across Kerala, Pan-India, the GCC/Middle East, and global markets.",
        },
      },
      {
        "@type": "Question",
        name: "What budget is required to start running paid campaigns with Kasvello?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We engineer custom performance ad funnels starting from flexible growth budgets, ensuring every rupee is tracked against positive return on ad spend (ROAS) before scaling aggressively.",
        },
      },
      {
        "@type": "Question",
        name: "Why do you build websites using Next.js instead of generic WordPress templates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js delivers sub-second static loads, impenetrable security, impeccable mobile UX, and superior technical SEO rankings without plugin vulnerabilities.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdProfessionalService),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaq),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#0F172A] selection:bg-[#FF5B00]/20 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
