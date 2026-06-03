"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Youtube, Facebook, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isLandingPage = pathname === "/weddings"

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setPortfolioOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const portfolioLinks = [
    { href: "/portfolio/videography", label: "Videography" },
    { href: "/portfolio/photography", label: "Photography" },
  ]

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/investment", label: "Investment" },
    { href: "/faq", label: "FAQ" },
    { href: "/inquire", label: "Inquire" },
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
  ]

  const mobileNavLinks = [
    { href: "/", label: "Home" },
    ...navLinks.slice(0, 1), // About
    { href: "portfolio", label: "Portfolio", isDropdown: true },
    ...navLinks.slice(1), // Rest of nav links
  ]

  const socialLinks = [
    { href: "https://instagram.com/martinsummitmedia", icon: Instagram, label: "Instagram" },
    { href: "https://youtube.com/@martinsummitmedia", icon: Youtube, label: "YouTube" },
    { href: "https://www.facebook.com/themartinsummitmedia", icon: Facebook, label: "Facebook" },
    {
      href: "https://www.tiktok.com/@martinsummitmedia",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      label: "TikTok",
    },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center py-4 md:py-6">
            {isLandingPage ? (
              /* Landing page header - logo + name on left, CTA on right */
              <div className="flex items-center justify-between w-full">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <Image src="/logo-white.png" alt="Martin Summit Media" width={40} height={40} className="h-8 w-auto md:h-10" />
                  <span className="text-primary-foreground font-serif text-sm md:text-xl tracking-wide font-light">
                    Martin Summit Media
                  </span>
                </Link>
                <button
                  onClick={() => {
                    const inquirySection = document.getElementById("wedding-inquiry")
                    if (inquirySection) {
                      inquirySection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-serif tracking-wide border-2 bg-accent border-accent text-foreground hover:bg-white hover:border-white hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full font-thin uppercase"
                >
                  Get a Free Quote
                </button>
              </div>
            ) : (
              <>
                {/* Desktop Navigation - evenly spaced */}
                <div className="hidden lg:flex items-center justify-center gap-12 w-full">
                  <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/logo-white.png" alt="Martin Summit Media" width={40} height={40} className="h-10 w-auto" />
                  </Link>

                  <Link
                    href="/#contact"
                    className="px-6 py-2.5 text-sm font-serif tracking-wide border-2 bg-accent border-accent text-foreground hover:bg-white hover:border-white hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full font-thin uppercase"
                  >
                    INQUIRE ABOUT YOUR DATE
                  </Link>

                  {/* Portfolio Dropdown */}
                  <div className="relative" ref={portfolioRef}>
                    <button
                      onClick={() => setPortfolioOpen(!portfolioOpen)}
                      className="flex items-center gap-1 text-sm font-light tracking-wide text-primary-foreground/90 hover:text-accent transition-colors"
                    >
                      Portfolio
                      <ChevronDown className={`w-4 h-4 transition-transform ${portfolioOpen ? "rotate-180" : ""}`} />
                    </button>
                    {portfolioOpen && (
                      <div className="absolute top-full left-0 mt-2 py-2 bg-secondary-foreground border border-primary-foreground/10 rounded-lg shadow-xl min-w-[160px]">
                        {portfolioLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 text-sm font-light tracking-wide text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/5 transition-colors"
                            onClick={() => setPortfolioOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-light tracking-wide text-primary-foreground/90 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex items-center gap-4 pl-8 border-l border-primary-foreground/20">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-foreground/80 hover:text-accent transition-colors"
                          aria-label={social.label}
                        >
                          <IconComponent />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile - CTA button and hamburger */}
                <Link
                  href="/#contact"
                  className="lg:hidden px-2 md:px-6 py-1 md:py-2.5 text-[8px] md:text-sm font-serif tracking-wide border-2 bg-accent border-accent text-foreground hover:bg-white hover:border-white hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-full z-10 font-thin uppercase max-w-[90px] md:max-w-none text-center leading-tight"
                >
                  INQUIRE ABOUT YOUR DATE
                </Link>

                {/* Mobile hamburger menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto lg:hidden text-primary-foreground hover:bg-primary-foreground/10 z-10"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          />

          <div className="fixed top-0 right-0 z-50 w-64 bg-secondary-foreground shadow-2xl transition-transform duration-300 rounded-bl-lg lg:hidden">
            <div className="flex justify-end p-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="px-5 pt-2 pb-4">
              <div className="flex flex-col gap-3">
                {mobileNavLinks.map((link) =>
                  link.isDropdown ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                        className="flex items-center gap-1 text-base font-light tracking-wide text-primary-foreground/90 hover:text-accent transition-colors w-full"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobilePortfolioOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2">
                          {portfolioLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className="text-sm font-light tracking-wide text-primary-foreground/70 hover:text-accent transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-light tracking-wide text-primary-foreground/90 hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="flex items-center gap-4 pt-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                        aria-label={social.label}
                      >
                        <IconComponent />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
