import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parameshwara Enterprises - Electrical & Water Solutions",
  description: "Your trusted partner for electrical goods, water tanks, and pipes and fittings from reputed brands.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
