"use client"

import { Button } from "@/components/ui/button"

export default function DonationButtons() {
  const handleVenmoClick = () => {
    // Try to open app first, fallback to web
    const appUrl = "venmo://paycharge?txn=pay&recipients=MSMCommunity"
    const webUrl = "https://venmo.com/MSMCommunity"
    
    const iframe = document.createElement("iframe")
    iframe.style.display = "none"
    iframe.src = appUrl
    document.body.appendChild(iframe)
    
    setTimeout(() => {
      document.body.removeChild(iframe)
      window.open(webUrl, "_blank")
    }, 1000)
  }

  const handleCashAppClick = () => {
    // Try to open app first, fallback to web
    const webUrl = "https://cash.app/$MSMCommunity"
    window.open(webUrl, "_blank")
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
      <Button
        onClick={handleVenmoClick}
        className="bg-[#008CFF] hover:bg-[#0070cc] text-white font-serif text-lg h-14 w-full"
      >
        Venmo @MSMCommunity
      </Button>
      <Button
        onClick={handleCashAppClick}
        className="bg-[#00D632] hover:bg-[#00b82b] text-white font-serif text-lg h-14 w-full"
      >
        CashApp $MSMCommunity
      </Button>
    </div>
  )
}
