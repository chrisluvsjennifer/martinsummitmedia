"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HoneyBookLoader() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize the global HoneyBook object on every route change
    if (typeof window !== "undefined") {
      window._HB_ = window._HB_ || {}
      window._HB_.pid = "614a356d263d7a00078cff0c"
    }
  }, [pathname])

  return null
}

declare global {
  interface Window {
    _HB_?: {
      pid?: string
    }
  }
}
