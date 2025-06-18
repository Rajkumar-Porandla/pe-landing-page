"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Parameshwara Enterprises - Modern electrical solutions and water storage systems in Warangal"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Trusted <span className="text-gold">Electrical & Water</span> Solutions Partner
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Top brands. Reliable service. <span className="border-b-2 border-gold">One stop shop.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gold hover:bg-white text-matte-black hover:text-matte-black text-lg group premium-transition"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-matte-black hover:bg-gold hover:text-matte-black border border-white hover:border-gold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>
          <div className="mt-12 flex items-center">
            <div className="h-px flex-grow bg-white/30"></div>
            <p className="px-4 text-white/80 text-sm">Serving customers since 2015</p>
            <div className="h-px flex-grow bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="flex gap-3">
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  )
}
