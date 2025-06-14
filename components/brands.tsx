"use client"

import { useState } from "react"
import Image from "next/image"

// Distribution partners with detailed product categories
const distributionBrands = [
  {
    name: "Anchor by Panasonic",
    logo: "/brands/anchor-by-panasonic.png",
    description: "Premium electrical solutions for modern homes",
    bgColor: "bg-white",
    maxWidth: 200,
    emoji: "🔌",
    productCategories: [
      "Modular Switches: Roma Plus, Roma Classic, Roma Urban, Penta Modular, Penta Flat, Obel, Ziva, Tiona",
      "Non-Modular Switches: Rider, Woods, Regent",
      "Lighting Solutions: LED Bulbs, Panels, Battens, Street Lights",
      "Fans: Ceiling Fans, Table Fans, Wall Fans, Pedestal Fans",
      "Water Heaters: Calisto, Rivia, Delsy, Astra, Nopeus",
      "Door Bells, MCBs & Accessories",
    ],
  },
  {
    name: "V-Guard",
    logo: "/brands/vguard.jpeg",
    description: "Trusted electrical and water heater products",
    bgColor: "bg-white",
    maxWidth: 160,
    emoji: "⚡",
    productCategories: [
      "Fans: Insight-G BLDC Fans, Designer Ceiling Fans",
      "Voltage Stabilizers: For TV, AC, Fridge",
      "Inverters & Batteries",
      "Water Heaters (Geysers): Sprinhot, Pebble",
      "Kitchen Appliances: Mixers, Induction Cooktops",
      "Solar Water Heaters & Pumps",
    ],
  },
  {
    name: "Sintex",
    logo: "/brands/sintex.svg",
    description: "Durable water storage solutions",
    bgColor: "bg-white",
    maxWidth: 160,
    emoji: "🏠",
    productCategories: [
      "Pure Antimicrobial™ (Triple-layer)",
      "Titus (Triple-layer)",
      "TruPUF (PUF-insulated)",
      "Hero (Triple-layer, phthalate-free)",
      "Reno (Double-layer)",
      "Classic Double-wall Tanks",
      "Loft Tanks (100–500 L)",
      "Underground/Sump Tanks (e.g. 5,000 L and above)",
    ],
  },
  {
    name: "Sudhakar Pipes",
    logo: "/brands/sudhakar.png",
    description: "Quality pipes and fittings for all needs",
    bgColor: "bg-white",
    maxWidth: 180,
    emoji: "🚿",
    productCategories: [
      "Electrical Conduits: Rigid PVC Conduits (19 mm, 25 mm, 2 mm thickness)",
      "Sanitary Pipes & Fittings",
      "UGD (Underground Drainage) Pipes: uPVC Sewerage & SWR Pipes",
      "Pressure & Non-pressure Pipes",
      "Column Pipes, Casing Pipes, HDPE Pipes",
    ],
  },
]

// Top row dealers (3 brands)
const topRowDealers = [
  {
    name: "Havells",
    logo: "/brands/havells.png",
    description: "Leading electrical equipment and appliances",
    bgColor: "bg-white",
    maxWidth: 200,
    emoji: "🔥",
    productCategories: [
      "Fans: Ceiling, Table, Pedestal, Exhaust",
      "Wires & Cables: Power Cables, Domestic Wires",
      "Switchgear: MCBs, RCCBs, Isolators",
      "Lighting: LED Bulbs, Tubes, Downlighters",
      "Water Heaters",
      "Air Coolers",
      "Kitchen Appliances: Mixer, Oven, Induction",
      "Personal Grooming: Trimmers, Hair Dryers",
    ],
  },
  {
    name: "Legrand",
    logo: "/brands/legrand-new.png",
    description: "Global specialist in electrical and digital infrastructure",
    bgColor: "bg-white",
    maxWidth: 180,
    emoji: "🧠",
    productCategories: [
      "Modular Switches: Myrius NextGen, Arteor, Lyncus",
      "Home Automation: Smart Touch Switches, IoT Systems",
      "USB Sockets & Charging Stations",
      "MCBs, DBs & Protection Devices",
      "Cable Management Solutions",
      "Door Phones & Security",
    ],
  },
  {
    name: "Finolex Cables",
    logo: "/brands/finolex.jpeg",
    description: "Premium quality cables and wires",
    bgColor: "bg-white",
    maxWidth: 180,
    emoji: "🔌",
    productCategories: [
      "Wires & Cables: House Wiring, LAN, CCTV, Co-axial, Solar Cables",
      "PVC Conduits & Fittings",
      "Electrical Switches",
      "Water Heaters",
      "Fans",
      "MCBs & Switchgear",
      "Smart Home Devices",
    ],
  },
]

// Bottom row dealers (2 brands)
const bottomRowDealers = [
  {
    name: "Crompton",
    logo: "/brands/crompton.png",
    description: "Innovative lighting and electrical appliances",
    bgColor: "bg-white",
    maxWidth: 180,
    emoji: "💡",
    productCategories: [
      "Fans: Ceiling, Table, Wall, Exhaust",
      "Lighting: LED Bulbs, Panels, Street Lights",
      "Water Heaters: Storage & Instant",
      "Kitchen Appliances: Mixer, Air Fryer, Induction Cooktop",
      "Air Coolers",
      "Pumps: Residential, Agriculture, Solar",
      "Built-in Kitchen Appliances: Chimneys, Hobs, Ovens",
    ],
  },
  {
    name: "Polycab",
    logo: "/brands/polycab.webp",
    description: "Leading manufacturer of wires, cables and electrical accessories",
    bgColor: "bg-white",
    maxWidth: 200,
    emoji: "⚙️",
    productCategories: [
      "Wires & Cables: House, Power, Instrumentation, Control, Solar",
      "Switches & Sockets",
      "Lighting: LED Bulbs, Panels, Street Lights",
      "Fans",
      "Switchgear & MCBs",
      "Water Heaters",
      "Conduits & Pipes",
      "Smart Automation Products",
    ],
  },
]

interface BrandCardProps {
  brand: (typeof distributionBrands)[0]
  index: number
}

function BrandCard({ brand, index }: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative bg-white p-8 rounded-lg premium-shadow hover-lift flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original Brand Card Content */}
      <div className={`h-24 w-full mb-6 flex items-center justify-center rounded-md ${brand.bgColor} p-4`}>
        <div className="relative h-full flex items-center justify-center" style={{ maxWidth: brand.maxWidth }}>
          <Image
            src={brand.logo || "/placeholder.svg"}
            alt={brand.name}
            width={200}
            height={100}
            className="object-contain max-h-full w-auto"
            priority
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-matte-black mb-2 text-center">{brand.name}</h3>
      <p className="text-matte-black/70 text-center text-sm">{brand.description}</p>

      {/* Popup Message on Hover with Blur Effect */}
      {isHovered && (
        <div className="absolute z-20 w-80 bg-white/70 backdrop-blur-md rounded-lg shadow-xl border border-white/30 p-4 transform -translate-y-full -top-4 left-1/2 -translate-x-1/2 animate-fadeIn">
          {/* Popup Header */}
          <div className="flex items-center justify-center mb-3 pb-2 border-b border-gold/30">
            <span className="text-xl mr-2">{brand.emoji}</span>
            <h3 className="text-base font-bold text-matte-black">{brand.name}</h3>
          </div>

          {/* Popup Content */}
          <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            <h4 className="text-sm font-semibold text-gold mb-2">
              {brand.name === "Sintex" ? "Water Tank Series:" : "Product Categories:"}
            </h4>
            <ul className="space-y-2">
              {brand.productCategories.map((category, idx) => (
                <li key={idx} className="text-xs text-matte-black/90 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popup Arrow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/70 backdrop-blur-md rotate-45 border-b border-r border-white/30"></div>
        </div>
      )}
    </div>
  )
}

export function Brands() {
  return (
    <section id="brands" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">Our Partners</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-matte-black mb-6">Brands We Offer</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-matte-black/80 max-w-3xl mx-auto">
            We partner with the most trusted brands in the industry to bring you quality products that stand the test of
            time. <span className="text-gold font-medium">Hover over each brand to see their product categories.</span>
          </p>
        </div>

        {/* Distribution Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-matte-black mb-8 text-center">
            <span className="border-b-2 border-gold pb-2">Distribution Partners</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} index={index} />
            ))}
          </div>
        </div>

        {/* Dealers and Channel Partners Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-matte-black mb-8 text-center">
            <span className="border-b-2 border-gold pb-2">Dealers & Channel Partners</span>
          </h3>

          {/* Top Row - 3 brands */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {topRowDealers.map((brand, index) => (
              <BrandCard key={index} brand={brand} index={index} />
            ))}
          </div>

          {/* Bottom Row - 2 brands centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {bottomRowDealers.map((brand, index) => (
                <BrandCard key={index} brand={brand} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 241, 241, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c0a87f;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9c8b7a;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, calc(-100% - 10px)); }
          to { opacity: 1; transform: translate(-50%, -100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
