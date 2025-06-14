import Image from "next/image"

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden premium-shadow">
              <Image
                src="/store-image.jpg"
                alt="Parameshwara Enterprises Store"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">Since 2015</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-matte-black mb-6 leading-tight">
              About Parameshwara Enterprises
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-lg text-matte-black/80 mb-6">
              Since 2015, Parameshwara Enterprises has been a trusted name in electrical and water infrastructure
              supplies in the region. We take pride in offering only genuine products from reputed brands, ensuring
              quality and reliability for all your needs.
            </p>
            <p className="text-lg text-matte-black/80 mb-8">
              Our experienced team provides expert guidance to help you choose the right products for your requirements,
              whether you're a homeowner, electrician, interior designer, builder, or contractor. We believe in building
              long-term relationships with our customers through honest service and quality products.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg premium-shadow hover-lift">
                <div className="text-3xl font-bold text-gold mb-2">8+</div>
                <div className="text-matte-black font-medium text-center">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg premium-shadow hover-lift">
                <div className="text-3xl font-bold text-gold mb-2">5000+</div>
                <div className="text-matte-black font-medium text-center">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
