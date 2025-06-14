"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md premium-shadow py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-matte-black">
            Parameshwara<span className="text-gold">Enterprises</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-matte-black hover:text-gold premium-transition">
            About
          </Link>
          <Link href="#products" className="text-matte-black hover:text-gold premium-transition">
            Products
          </Link>
          <Link href="#brands" className="text-matte-black hover:text-gold premium-transition">
            Brands
          </Link>
          <Link href="#reviews" className="text-matte-black hover:text-gold premium-transition">
            Reviews
          </Link>
          <div className="flex items-center border-l pl-6 border-matte-black/20">
            <Phone className="h-4 w-4 text-gold mr-2" />
            <span className="text-matte-black font-medium">76748 78976</span>
          </div>
          <Link href="#contact">
            <Button className="bg-matte-black hover:bg-gold text-white border border-transparent hover:border-matte-black premium-transition">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-matte-black" /> : <Menu className="h-6 w-6 text-matte-black" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 premium-shadow">
          <div className="container-custom py-6 flex flex-col space-y-5">
            <Link
              href="#about"
              className="text-matte-black hover:text-gold premium-transition py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-matte-black hover:text-gold premium-transition py-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="#brands"
              className="text-matte-black hover:text-gold premium-transition py-2"
              onClick={toggleMenu}
            >
              Brands
            </Link>
            <Link
              href="#reviews"
              className="text-matte-black hover:text-gold premium-transition py-2"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <div className="flex items-center py-2">
              <Phone className="h-4 w-4 text-gold mr-2" />
              <span className="text-matte-black">76748 78976</span>
            </div>
            <Link href="#contact" onClick={toggleMenu}>
              <Button className="w-full bg-matte-black hover:bg-gold text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
