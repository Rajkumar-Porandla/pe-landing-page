import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Srinivas Reddy",
    date: "2 months ago",
    content:
      "Good quality products and reasonable prices. The staff is very helpful and knowledgeable. I've been shopping here for all my electrical needs since they opened.",
    rating: 5,
  },
  {
    name: "Ramesh Kumar",
    date: "3 months ago",
    content:
      "Best electrical store in the area. They have a wide range of products from reputed brands. The owner is very friendly and provides good guidance on product selection.",
    rating: 5,
  },
  {
    name: "Lakshmi Prasad",
    date: "1 month ago",
    content:
      "I purchased Anchor switches and V-Guard stabilizer from this shop. Genuine products with warranty. Reasonable prices compared to other shops in the area.",
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-warm-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">Testimonials</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-matte-black mb-6">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-matte-black/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with us on
            Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-none premium-shadow hover-lift overflow-visible">
              <CardContent className="p-8 relative">
                <div className="absolute -top-5 right-8">
                  <Quote className="h-10 w-10 text-gold/20" />
                </div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-gold fill-gold" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-matte-black/80 mb-8 italic">"{review.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-matte-black">{review.name}</p>
                    <p className="text-soft-brown text-sm">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {/* Using Google "G" logo SVG directly instead of an image */}
                    <svg viewBox="0 0 24 24" width="20" height="20" className="mr-1" aria-hidden="true">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-xs text-matte-black/60">Google Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://www.google.com/maps/place/PARAMESHWARA+ENTERPRISES/@17.9802705,79.5960261,17z/data=!4m8!3m7!1s0x3a3345220e9e2523:0x4e53dd5d0f84299a!8m2!3d17.9802654!4d79.598601!9m1!1b1!16s%2Fg%2F11c61dkdjw?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-matte-black px-8 py-4 rounded-lg flex items-center premium-shadow hover:bg-gold/10 transition-all duration-300"
          >
            <div className="flex items-center mr-4">
              {/* Using Google "G" logo SVG directly instead of an image */}
              <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div className="text-2xl font-bold">4.8</div>
            </div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 5 ? "text-gold fill-gold" : "text-gray-300"}`} />
                ))}
              </div>
              <div className="text-sm text-matte-black/70">Based on 25+ Google reviews</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
