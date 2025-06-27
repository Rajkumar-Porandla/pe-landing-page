"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-matte-black text-white py-2 text-sm no-print">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <span className="font-space">76748 78976</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="font-space">Warangal, Telangana</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-space text-gold">Mon-Sat: 9AM-8PM | Sun: 10AM-4PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 premium-transition ${
          isScrolled ? "glass-effect premium-shadow-lg py-4 mt-0" : "bg-transparent py-6 mt-10"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold text-matte-black font-playfair group-hover:text-gold premium-transition">
                Parameshwara
              </span>
              <span className="text-2xl md:text-3xl font-bold gradient-text-gold font-playfair">Enterprises</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full premium-transition"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "#about", label: "About" },
              { href: "#products", label: "Products" },
              { href: "#brands", label: "Brands" },
              { href: "#reviews", label: "Reviews" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-matte-black hover:text-gold premium-transition font-space font-medium group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full premium-transition"></div>
              </Link>
            ))}

            <div className="flex items-center border-l pl-6 border-matte-black/20">
              <div className="flex items-center gap-2 mr-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-matte-black font-space font-medium">Available Now</span>
              </div>
              <Link href="#contact">
                <Button className="btn-premium font-space font-semibold">Get Quote</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-gold/10 premium-transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-matte-black" /> : <Menu className="h-6 w-6 text-matte-black" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect absolute top-full left-0 right-0 premium-shadow-lg border-t border-white/20">
            <div className="container-custom py-8 flex flex-col space-y-6">
              {[
                { href: "#about", label: "About" },
                { href: "#products", label: "Products" },
                { href: "#brands", label: "Brands" },
                { href: "#reviews", label: "Reviews" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-matte-black hover:text-gold premium-transition py-3 font-space font-medium text-lg"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-6 border-t border-matte-black/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-matte-black font-space">Available Now</span>
                </div>
                <Link href="#contact" onClick={toggleMenu}>
                  <Button className="w-full btn-premium font-space font-semibold text-lg py-4">Get Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
