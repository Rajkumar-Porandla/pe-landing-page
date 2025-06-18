import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parameshwara Enterprises - Electrical & Water Solutions | Warangal, Telangana",
  description:
    "Parameshwara Enterprises is your trusted partner for electrical goods, water tanks, pipes and fittings from reputed brands like Anchor by Panasonic, V-Guard, Sintex, Havells, Legrand in Warangal, Telangana since 2015.",
  keywords: [
    "Parameshwara Enterprises",
    "electrical goods Warangal",
    "water tanks Warangal",
    "pipes fittings Warangal",
    "Anchor by Panasonic Warangal",
    "V-Guard Warangal",
    "Sintex tanks Warangal",
    "Havells products Warangal",
    "Legrand switches Warangal",
    "electrical store Warangal",
    "electrical supplies Telangana",
    "modular switches Warangal",
    "ceiling fans Warangal",
    "water heaters Warangal",
    "electrical cables Warangal",
    "PVC pipes Warangal",
    "electrical accessories Warangal",
    "Girmajipet electrical store",
    "Jayaprakash Narayan Road electrical shop",
  ],
  authors: [{ name: "Parameshwara Enterprises" }],
  creator: "Parameshwara Enterprises",
  publisher: "Parameshwara Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://parameshwaraenterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parameshwara Enterprises - Electrical & Water Solutions | Warangal",
    description:
      "Your trusted partner for electrical goods, water tanks, pipes and fittings from reputed brands in Warangal, Telangana since 2015.",
    url: "https://parameshwaraenterprises.com",
    siteName: "Parameshwara Enterprises",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Parameshwara Enterprises - Electrical & Water Solutions",
      },
      {
        url: "/store-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parameshwara Enterprises Store in Warangal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parameshwara Enterprises - Electrical & Water Solutions",
    description:
      "Your trusted partner for electrical goods, water tanks, pipes and fittings from reputed brands in Warangal, Telangana.",
    images: ["/hero-image.png"],
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
  category: "business",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tc_lfHZ3Ko8iGYj0gzf-qtsT3khU6sSgFbL1O1KhHmY" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Warangal" />
        <meta name="geo.position" content="17.9802654;79.598601" />
        <meta name="ICBM" content="17.9802654, 79.598601" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Parameshwara Enterprises",
              image: [
                "https://parameshwaraenterprises.com/store-image.jpg",
                "https://parameshwaraenterprises.com/hero-image.png",
              ],
              description:
                "Your trusted partner for electrical goods, water tanks, pipes and fittings from reputed brands in Warangal, Telangana since 2015.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "9-10-19, Jayaprakash Narayan Road, opposite to Bharat petroleum, Nandayya Gari Compound, Sherpura",
                addressLocality: "Girmajipet, Warangal",
                addressRegion: "Telangana",
                postalCode: "506002",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 17.9802654,
                longitude: 79.598601,
              },
              url: "https://parameshwaraenterprises.com",
              telephone: "+91-76748-78976",
              email: "info@parameshwaraenterprises.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "25",
              },
              sameAs: [
                "https://www.google.com/maps/place/PARAMESHWARA+ENTERPRISES/@17.9802705,79.5960261,17z/data=!4m8!3m7!1s0x3a3345220e9e2523:0x4e53dd5d0f84299a!8m2!3d17.9802654!4d79.598601!9m1!1b1!16s%2Fg%2F11c61dkdjw",
                "https://wa.me/917674878976",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Electrical & Water Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Modular Switches & Sockets",
                      brand: "Anchor by Panasonic",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Water Storage Tanks",
                      brand: "Sintex",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Electrical Fans & Appliances",
                      brand: "V-Guard",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Pipes & Fittings",
                      brand: "Sudhakar Pipes",
                    },
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Parameshwara Enterprises",
              url: "https://parameshwaraenterprises.com",
              logo: "https://parameshwaraenterprises.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-76748-78976",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "9-10-19, Jayaprakash Narayan Road, opposite to Bharat petroleum, Nandayya Gari Compound, Sherpura",
                addressLocality: "Girmajipet, Warangal",
                addressRegion: "Telangana",
                postalCode: "506002",
                addressCountry: "IN",
              },
              foundingDate: "2015",
              description:
                "Leading electrical and water solutions provider in Warangal, Telangana, offering genuine products from top brands since 2015.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
