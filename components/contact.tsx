"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, MessageSquare, Clock } from "lucide-react"
import { submitContactForm } from "@/actions/contact-form"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      // Call the server action
      const response = await submitContactForm(formData)
      setFormResponse(response)

      // Clear form if submission was successful
      if (response.success) {
        setFormData({ name: "", phone: "", message: "" })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormResponse(null)
        }, 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 px-4 py-2 rounded-full text-gold font-medium mb-6">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-matte-black mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-matte-black/80 max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to us and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg premium-shadow h-full">
              <h3 className="text-2xl font-semibold text-matte-black mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="rounded-full bg-gold/20 p-3 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-matte-black mb-2">Call Us</p>
                    <p className="text-matte-black/70 mb-1 hover:text-gold premium-transition">76748 78976</p>
                    <p className="text-matte-black/70 mb-1 hover:text-gold premium-transition">92469 36935</p>
                    <p className="text-matte-black/70 hover:text-gold premium-transition">99498 08831</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-gold/20 p-3 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-matte-black mb-2">Visit Our Store</p>
                    <p className="text-matte-black/70 mb-3">
                      9-10-19, Jayaprakash Narayan Road, opposite to Bharat petroleum, Nandayya Gari Compound, Sherpura,
                      Girmajipet, Warangal, Telangana 506002
                    </p>
                    <a
                      href="https://maps.app.goo.gl/aCtKY1xi6HgsmCRv8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline inline-flex items-center premium-transition"
                    >
                      Open in Google Maps
                      <MapPin className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-gold/20 p-3 mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-matte-black mb-2">WhatsApp Us</p>
                    <a
                      href="https://wa.me/917674878976"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline premium-transition"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-gold/20 p-3 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-matte-black mb-2">Business Hours</p>
                    <p className="text-matte-black/70 mb-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-matte-black/70">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2553419964193!2d79.59602607465957!3d17.980265383778236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345220e9e2523%3A0x4e53dd5d0f84299a!2sPARAMESHWARA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1718280000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-lg premium-shadow">
              <h3 className="text-2xl font-semibold text-matte-black mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-matte-black mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-matte-black/20 focus:border-gold focus:ring-gold"
                      placeholder="Enter your name"
                      minLength={2}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-matte-black mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border-matte-black/20 focus:border-gold focus:ring-gold"
                      placeholder="Enter your phone number"
                      minLength={10}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-matte-black mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] border-matte-black/20 focus:border-gold focus:ring-gold"
                    placeholder="How can we help you?"
                    minLength={10}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-matte-black hover:bg-gold text-white text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {formResponse && (
                  <div
                    className={`mt-4 p-4 rounded-md text-center border ${
                      formResponse.success
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    }`}
                  >
                    {formResponse.message}
                  </div>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-matte-black/10">
                <p className="text-center text-matte-black/70">
                  You can also email us directly at{" "}
                  <a href="mailto:info@parameshwaraenterprises.com" className="text-gold hover:underline">
                    info@parameshwaraenterprises.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
