import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Mukta, Alex_Brush } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { HoneyBookLoader } from "@/components/honeybook-loader"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
})

const mukta = Mukta({
  subsets: ["latin"],
  variable: "--font-mukta",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
  preload: true,
})

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400"],
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://martinsummitmedia.com"),
  title: {
    default: "Martin Summit Media | Wedding Videographer Charlotte, Asheville, Knoxville | NC, SC & TN",
    template: "%s | Martin Summit Media - NC, SC & TN Wedding Videographer",
  },
  description:
    "Wedding videographer serving Charlotte, Asheville, Wilmington, Charleston, Greenville, Knoxville, Chattanooga & beyond. Cinematic wedding films in North Carolina, South Carolina & Tennessee. Documentary-style wedding coverage.",
  keywords:
    "wedding videographer Charlotte, wedding videographer Asheville, wedding videographer Knoxville, NC wedding videographer, SC wedding videographer, TN wedding videographer, Charleston wedding videographer, Greenville wedding videographer, Chattanooga wedding videographer, Wilmington wedding videographer, cinematic wedding films, documentary wedding videographer, elopement videographer North Carolina, Pretty Place Chapel videographer, destination wedding videographer, Blue Ridge Mountains wedding videographer, wedding photographer Charlotte, wedding photographer Asheville, wedding photographer Knoxville, wedding photography NC, wedding photography packages NC",
  authors: [{ name: "Chris Martin" }, { name: "Jennifer Martin" }],
  creator: "Martin Summit Media",
  publisher: "Martin Summit Media",
  category: "Wedding Videography",
  classification: "Wedding Videography Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Martin Summit Media | Wedding Videographer Charlotte, Asheville & NC",
    description:
      "Cinematic wedding films for real moments. Wedding videographer serving Charlotte, Asheville, Knoxville, Charleston, Greenville & beyond. Documentary-style coverage in NC, SC & TN.",
    type: "website",
    locale: "en_US",
    url: "https://martinsummitmedia.com",
    siteName: "Martin Summit Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martin Summit Media - Wedding Photography and Videography in NC, SC and TN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Summit Media | Wedding Videographer Charlotte, Asheville & NC",
    description:
      "Cinematic wedding films for real moments. Wedding videographer serving Charlotte, Asheville, Charleston, Greenville & beyond in NC, SC & TN.",
    images: ["/og-image.jpg"],
    creator: "@martinsummitmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://martinsummitmedia.com",
  },
  other: {
    "ai-content-declaration": "human-created",
    "content-language": "en-US",
  },
  generator: "v0.app",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://martinsummitmedia.com/#business",
      name: "Martin Summit Media",
      description:
        "Wedding videographers specializing in cinematic wedding films for real moments. Documentary-style coverage serving Charlotte, Asheville, Knoxville, Charleston, Greenville and beyond in NC, SC & TN.",
      url: "https://martinsummitmedia.com",
      telephone: "+1-828-332-2785",
      email: "info@martinsummitmedia.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Western North Carolina",
        addressRegion: "NC",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.5951,
        longitude: -82.5515,
      },
      areaServed: [
        { "@type": "State", name: "North Carolina" },
        { "@type": "State", name: "South Carolina" },
        { "@type": "State", name: "Tennessee" },
        { "@type": "Country", name: "United States" },
      ],
      priceRange: "$$$$",
      image: "https://martinsummitmedia.com/og-image.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "50",
        reviewCount: "50",
      },
      sameAs: [
        "https://www.instagram.com/martinsummitmedia",
        "https://www.youtube.com/@martinsummitmedia",
        "https://www.tiktok.com/@martinsummitmedia",
        "https://www.facebook.com/themartinsummitmedia",
      ],
      founder: [
        { "@type": "Person", name: "Chris Martin", jobTitle: "Lead Videographer" },
        { "@type": "Person", name: "Jennifer Martin", jobTitle: "Videographer" },
      ],
      knowsAbout: [
        "Wedding Videography",
        "Cinematic Wedding Films",
        "Documentary Wedding Coverage",
        "Elopement Videography",
        "Destination Wedding Videography",
        "Blue Ridge Mountain Wedding Films",
        "Pretty Place Chapel Weddings",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Adventure Elopement & Wedding Videography Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Adventure Elopement Videography",
              description: "Cinematic elopement films in mountains, waterfalls, and breathtaking outdoor locations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wedding Videography",
              description: "Cinematic wedding films capturing your complete wedding day story",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Destination Wedding Videography",
              description: "Cinematic wedding films for destination and adventure weddings worldwide",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://martinsummitmedia.com/#website",
      url: "https://martinsummitmedia.com",
      name: "Martin Summit Media",
      description: "Adventure Elopement & Wedding Videography",
      publisher: { "@id": "https://martinsummitmedia.com/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://martinsummitmedia.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://martinsummitmedia.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you travel for adventure elopements and weddings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We're based in Western North Carolina but travel worldwide for adventure elopements and weddings. We've filmed in the Pacific Northwest, Blue Ridge Mountains, and destinations across the globe.",
          },
        },
        {
          "@type": "Question",
          name: "What's included in your elopement and wedding videography packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our packages include full-day coverage, professionally edited cinematic films, highlight reels, and drone footage options. We also offer planning assistance for locations and permits.",
          },
        },
        {
          "@type": "Question",
          name: "How much does adventure elopement and wedding videography cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our elopement videography coverage starts at $2,500. Full wedding videography packages start at $3,200. Combined photo/video packages are also available. Contact us for custom quotes based on your specific needs.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${mukta.variable} ${alexBrush.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BQYSK1H496" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQYSK1H496');
            gtag('config', 'AW-17032347228');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased ${mukta.variable}`}>
        <HoneyBookLoader />
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
