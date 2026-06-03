import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "/portfolio/videography", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/investment", label: "Investment" },
    { href: "/faq", label: "FAQ" },
    { href: "/inquire", label: "Inquire" },
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
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
    <footer className="relative py-8 md:py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/20170612-clearing-clouds-at-craggy-overlook-blue-ridge-parkway-nc-jennifer-carr-photography-3.webp"
          alt="Blue Ridge Mountains at Craggy Overlook"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255, 235, 180, 0.5) 0%, rgba(255, 220, 150, 0.2) 30%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center text-white">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Martin Summit Media"
              width={80}
              height={80}
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Names */}
          <h3 className="font-serif text-lg md:text-xl italic">Chris and Jennifer Martin</h3>

          {/* Tagline */}
          <div className="space-y-0.5 text-white/90 text-xs md:text-sm">
            <p className="italic">For couples who want their day remembered exactly as it felt</p>
            <p>Husband & wife photography and videography team · Based in NC · Traveling everywhere</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-white/90 text-xs md:text-sm">
            <a href="mailto:hello@martinsummitmedia.com" className="hover:text-white transition-colors">
              hello@martinsummitmedia.com
            </a>
            <a href="tel:+18283322785" className="hover:text-white transition-colors">
              (828) 332-2785
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-white/80 text-xs md:text-sm">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-white/70 text-xs mt-1">Copyright {new Date().getFullYear()} Martin Summit Media</p>
          <p className="text-white/50 text-[10px]">
            Website designed by{" "}
            <a
              href="https://blueridgewebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              Blue Ridge Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
