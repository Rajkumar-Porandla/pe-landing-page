import { Check, ShieldCheck, Clock, HeartHandshake, Award, Truck } from "lucide-react"

const reasons = [
  {
    title: "Genuine Products",
    description: "We guarantee 100% authentic products from authorized brand distributors.",
    icon: ShieldCheck,
  },
  {
    title: "20+ Years of Experience",
    description: "Benefit from our decades of industry knowledge and expertise.",
    icon: Clock,
  },
  {
    title: "Customer Satisfaction",
    description: "Thousands of satisfied customers trust us for their electrical and water needs.",
    icon: HeartHandshake,
  },
  {
    title: "Quality Assurance",
    description: "Every product we sell meets the highest quality standards in the industry.",
    icon: Check,
  },
  {
    title: "Expert Guidance",
    description: "Our knowledgeable staff helps you choose the right products for your needs.",
    icon: Award,
  },
  {
    title: "Fast Delivery",
    description: "Quick delivery options available for urgent requirements.",
    icon: Truck,
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-matte-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">
            Our Advantages
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Choose Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            At Parameshwara Enterprises, we pride ourselves on providing the best products and service to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg hover:bg-white/10 transition-colors duration-300 premium-shadow border border-white/10 hover-lift"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-gold/20 p-4">
                  <reason.icon className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{reason.title}</h3>
              <p className="text-white/70 text-center">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gold text-lg font-medium mb-2">Join Our Satisfied Customers</p>
          <p className="text-white/80 max-w-2xl mx-auto">
            Experience the difference of working with a trusted partner who understands your electrical and water
            infrastructure needs.
          </p>
        </div>
      </div>
    </section>
  )
}
