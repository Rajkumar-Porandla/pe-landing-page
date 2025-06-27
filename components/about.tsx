"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, Users, Clock, Shield, TrendingUp, Star } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "8+",
    label: "Years of Excellence",
    description: "Serving customers since 2015",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Happy Customers",
    description: "Trusted by thousands",
  },
  {
    icon: Award,
    value: "50+",
    label: "Premium Brands",
    description: "Authorized partnerships",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Customer Satisfaction",
    description: "Exceptional service record",
  },
]

const achievements = [
  {
    icon: Shield,
    title: "Authorized Distributor",
    description: "Official partnerships with leading electrical and water solution brands",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "100% genuine products with manufacturer warranties",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized for excellence in customer service and product quality",
  },
]

export function About() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="about" className="section-padding gradient-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-full mb-8">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-space font-semibold text-sm tracking-wide uppercase">Since 2015</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-display-3 text-matte-black mb-8 font-playfair">
              About
              <span className="gradient-text-gold italic"> Parameshwara</span>
              <span className="block">Enterprises</span>
            </h2>

            {/* Golden Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-20 h-1 bg-gold rounded-full"></div>
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <div className="w-8 h-1 bg-gold/50 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-12">
              <p className="text-body-large text-matte-black/80 leading-relaxed">
                Since 2015, <span className="font-semibold text-gold">Parameshwara Enterprises</span> has been the
                cornerstone of electrical and water infrastructure excellence in Warangal, Telangana. We've built our
                reputation on three fundamental pillars:
                <span className="font-semibold text-matte-black">
                  {" "}
                  premium quality, expert guidance, and unwavering reliability.
                </span>
              </p>

              <p className="text-body text-matte-black/70 leading-relaxed">
                Our experienced team doesn't just sell products—we provide comprehensive solutions. Whether you're a
                homeowner planning a renovation, an electrician seeking reliable supplies, or a contractor managing
                large projects, we understand your unique needs and deliver accordingly.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl premium-shadow hover:premium-shadow-lg premium-transition hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 premium-transition">
                      <achievement.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-space font-semibold text-matte-black mb-2">{achievement.title}</h4>
                    <p className="text-sm text-matte-black/70 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl premium-shadow hover:premium-shadow-lg premium-transition hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 premium-transition">
                      <stat.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-3xl font-bold text-matte-black font-playfair mb-2">{stat.value}</div>
                    <div className="font-space font-semibold text-matte-black text-sm mb-1">{stat.label}</div>
                    <div className="text-xs text-matte-black/60">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden premium-shadow-xl">
                <Image
                  src="/store-image.jpg"
                  alt="Parameshwara Enterprises electrical store in Warangal, Telangana - Your trusted partner for electrical goods and water solutions"
                  fill
                  className="object-cover hover:scale-105 premium-transition"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 glass-effect p-6 rounded-2xl premium-shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold font-playfair mb-1">4.8★</div>
                  <div className="text-sm font-space font-medium text-matte-black">Google Rating</div>
                  <div className="text-xs text-matte-black/60">25+ Reviews</div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl premium-shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-matte-black font-playfair">5000+</div>
                    <div className="text-sm font-space text-matte-black/70">Satisfied Customers</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
