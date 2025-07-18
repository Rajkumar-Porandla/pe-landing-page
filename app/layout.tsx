import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Parameshwara Enterprises - Premium Electrical & Water Solutions | Warangal, Telangana",
  description:
    "Parameshwara Enterprises is your trusted partner for premium electrical goods, water tanks, pipes and fittings from reputed brands like Anchor by Panasonic, V-Guard, Sintex, Havells, Legrand in Warangal, Telangana since 2015.",
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
  metadataBase: new URL("https://parameshwaraenterprises.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parameshwara Enterprises - Premium Electrical & Water Solutions | Warangal",
    description:
      "Your trusted partner for premium electrical goods, water tanks, pipes and fittings from reputed brands in Warangal, Telangana since 2015.",
    url: "https://parameshwaraenterprises.vercel.app",
    siteName: "Parameshwara Enterprises",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Parameshwara Enterprises - Premium Electrical & Water Solutions",
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
    title: "Parameshwara Enterprises - Premium Electrical & Water Solutions",
    description:
      "Your trusted partner for premium electrical goods, water tanks, pipes and fittings from reputed brands in Warangal, Telangana.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="tc_lfHZ3Ko8iGYj0gzf-qtsT3khU6sSgFbL1O1KhHmY" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Warangal" />
        <meta name="geo.position" content="17.9802654;79.598601" />
        <meta name="ICBM" content="17.9802654, 79.598601" />

        {/* Business Schema - Simplified without problematic Product offers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Parameshwara Enterprises",
              image: [
                "https://parameshwaraenterprises.vercel.app/store-image.jpg",
                "https://parameshwaraenterprises.vercel.app/hero-image.png",
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
              url: "https://parameshwaraenterprises.vercel.app",
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
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 17.9802654,
                  longitude: 79.598601,
                },
                geoRadius: "50000",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Electrical Goods & Accessories",
                  description:
                    "Wide range of electrical products including switches, sockets, wires, and lighting solutions",
                },
                {
                  "@type": "Offer",
                  name: "Water Storage Solutions",
                  description: "Quality water tanks and storage systems from trusted brands",
                },
                {
                  "@type": "Offer",
                  name: "Pipes & Fittings",
                  description: "Comprehensive range of pipes and plumbing fittings for all applications",
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Parameshwara Enterprises",
              url: "https://parameshwaraenterprises.vercel.app",
              logo: "https://parameshwaraenterprises.vercel.app/logo.png",
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

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Parameshwara Enterprises",
              url: "https://parameshwaraenterprises.vercel.app",
              description: "Premium electrical and water solutions provider in Warangal, Telangana",
              publisher: {
                "@type": "Organization",
                name: "Parameshwara Enterprises",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-inter antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
