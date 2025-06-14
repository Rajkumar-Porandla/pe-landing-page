"use server"

import { z } from "zod"

// Define a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or Resend

    // Log the form submission (for demonstration purposes)
    console.log("Form submitted:", validatedData)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(", ")
      return {
        success: false,
        message: `Validation failed: ${errorMessages}`,
      }
    }

    // Handle other errors
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
