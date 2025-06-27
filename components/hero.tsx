"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Award, Shield } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Parameshwara Enterprises - Modern electrical solutions and water storage systems in Warangal"
          fill
          className="object-cover scale-105"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-40 left-20 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 glass-effect-dark px-6 py-3 rounded-full mb-8 animate-slide-in-up">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-white/90 font-space font-medium text-sm tracking-wide">
                PREMIUM ELECTRICAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display-2 text-white mb-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              Your Trusted
              <span className="block gradient-text-gold font-playfair italic"> Electrical & Water</span>
              <span className="block">Solutions Partner</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-body-large text-white/90 mb-12 max-w-2xl leading-relaxed animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Experience excellence with premium brands, unmatched reliability, and expert service.
              <span className="text-gold font-semibold"> Your one-stop destination</span> for all electrical and water
              infrastructure needs.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="btn-premium text-lg px-10 py-6 font-space font-semibold group"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Premium Products
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button
                size="lg"
                className="glass-effect-dark text-white hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-lg px-10 py-6 font-space font-semibold premium-transition"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Expert Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold font-space">8+ Years</div>
                  <div className="text-white/70 text-sm">Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold font-space">5000+</div>
                  <div className="text-white/70 text-sm">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold font-space">Premium</div>
                  <div className="text-white/70 text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Premium Stats Card */}
          <div className="lg:col-span-5 animate-slide-in-up" style={{ animationDelay: "1s" }}>
            <div className="glass-effect-dark rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-heading-3 text-white mb-4 font-playfair">Why Choose Us?</h3>
                <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse-glow"></div>
                  <span className="text-white/90 font-space">Authorized distributor of premium brands</span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 bg-gold rounded-full animate-pulse-glow"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span className="text-white/90 font-space">Expert technical consultation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 bg-gold rounded-full animate-pulse-glow"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <span className="text-white/90 font-space">Competitive wholesale pricing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 bg-gold rounded-full animate-pulse-glow"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <span className="text-white/90 font-space">Fast delivery & installation support</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white/70 text-sm font-space">Serving Warangal & Telangana since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-slide-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-white/70 text-xs font-space tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
