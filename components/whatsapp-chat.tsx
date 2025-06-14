"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false)

  // WhatsApp number from the site
  const whatsappNumber = "917674878976"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your products and services.`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip/Label */}
        <div
          className={cn(
            "absolute bottom-16 right-0 bg-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 whitespace-nowrap",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <p className="text-matte-black font-medium">Chat with us on WhatsApp</p>
          <div className="absolute -bottom-2 right-4 h-3 w-3 bg-white transform rotate-45"></div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-8 w-8 text-white" />

          {/* Pulse animation */}
          <span
            className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75"
            style={{ animationDuration: "3s" }}
          ></span>
        </a>
      </div>
    </div>
  )
}
