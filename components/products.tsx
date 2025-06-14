import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Premium Switches & Sockets",
    description: "Elegant, durable switches and sockets from top brands like Anchor by Panasonic.",
    image: "/products/switches.png",
    brand: "/brands/anchor-by-panasonic.png",
    brandName: "Anchor by Panasonic",
    brandBg: "bg-white", // Changed to white background
  },
  {
    name: "Modern Lighting Solutions",
    description: "Energy-efficient and stylish lighting solutions for residential and commercial spaces.",
    image: "/products/lights.png",
    brand: "/brands/anchor-by-panasonic.png",
    brandName: "Anchor by Panasonic",
    brandBg: "bg-white", // Changed to white background
  },
  {
    name: "High-Quality Wires & Cables",
    description: "Safe, flame-retardant, and durable wires and cables for all electrical needs.",
    image: "/products/wires.png",
    brand: "/brands/anchor-by-panasonic.png",
    brandName: "Anchor by Panasonic",
    brandBg: "bg-white", // Changed to white background
  },
  {
    name: "Designer Fans & Appliances",
    description: "Stylish and energy-efficient fans and electrical appliances for modern homes.",
    image: "/products/fans.webp",
    brand: "/brands/vguard.jpeg",
    brandName: "V-Guard",
    brandBg: "bg-white",
  },
  {
    name: "Durable Water Storage Solutions",
    description: "Long-lasting water tanks from Sintex for residential and commercial use.",
    image: "/products/tanks.jpeg",
    brand: "/brands/sintex.svg",
    brandName: "Sintex",
    brandBg: "bg-white",
  },
  {
    name: "Quality Pipes & Fittings",
    description: "Reliable pipes and fittings from Sudhakar for all your plumbing needs.",
    image: "/products/pipes.jpg",
    brand: "/brands/sudhakar.png",
    brandName: "Sudhakar Pipes",
    brandBg: "bg-white",
  },
]

export function Products() {
  return (
    <section id="products" className="section-padding bg-warm-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">
            Our Collection
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-matte-black mb-6">Premium Quality Products</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-matte-black/80 max-w-3xl mx-auto">
            We offer a wide range of electrical goods, water tanks, and pipes and fittings to meet all your needs. Here
            are some of our top product categories:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden premium-shadow hover-lift border-none bg-white">
              <div className="relative h-64 bg-white p-4 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-contain max-h-full"
                  priority={index < 3}
                />
                <div className="absolute top-4 right-4 premium-shadow">
                  <div
                    className={`relative h-12 w-12 rounded-full ${product.brandBg} flex items-center justify-center p-1`}
                  >
                    <Image
                      src={product.brand || "/placeholder.svg"}
                      alt={product.brandName}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-matte-black mb-2">{product.name}</h3>
                <p className="text-matte-black/70 mb-4">{product.description}</p>
                <div className="flex items-center">
                  <span className="text-xs text-gold font-medium">{product.brandName}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-matte-black hover:bg-gold text-white text-lg">View All Products</Button>
        </div>
      </div>
    </section>
  )
}
