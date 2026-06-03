"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    _HB_?: {
      pid?: string
      refresh?: () => void
    }
    hbspt?: {
      forms?: {
        create?: (options: Record<string, unknown>) => void
      }
    }
  }
}

export function HoneyBookForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const pathname = usePathname()

  // Track mount state
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Load and reinitialize HoneyBook on every pathname change
  useEffect(() => {
    if (!mounted) return

    const initHoneyBook = () => {
      // Set the HoneyBook pid
      window._HB_ = window._HB_ || {}
      window._HB_.pid = "614a356d263d7a00078cff0c"

      // Clear the container
      if (containerRef.current) {
        const widgetDiv = containerRef.current.querySelector(".hb-p-614a356d263d7a00078cff0c-5")
        if (widgetDiv) {
          widgetDiv.innerHTML = ""
        }
      }

      // Remove any existing HoneyBook scripts and iframes
      document.querySelectorAll('script[src*="honeybook.com"]').forEach((el) => el.remove())
      document.querySelectorAll('iframe[src*="honeybook.com"]').forEach((el) => el.remove())

      // Create and load the script fresh
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.async = true
      script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js"
      script.onload = () => {
        setScriptLoaded(true)
      }
      document.body.appendChild(script)
    }

    // Small delay to ensure DOM is fully ready after navigation
    const timeoutId = setTimeout(initHoneyBook, 150)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [mounted, pathname])

  // Generate a unique key based on pathname to force re-render
  const formKey = `honeybook-${pathname}-${mounted ? "mounted" : "unmounted"}`

  return (
    <div ref={containerRef} key={formKey} className="w-full overflow-x-hidden min-h-[500px]">
      <div 
        className="hb-p-614a356d263d7a00078cff0c-5 w-full max-w-full [&_iframe]:max-w-full [&_iframe]:w-full"
        suppressHydrationWarning
      />
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=614a356d263d7a00078cff0c"
        alt=""
      />
    </div>
  )
}
