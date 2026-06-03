"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { WeddingContactForm } from "@/components/wedding-contact-form"

export default function WeddingsClientPage() {
  const [showVideo, setShowVideo] = useState(false)
  const [showStickyButton, setShowStickyButton] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowStickyButton(!entry.isIntersecting)
        })
      },
      { threshold: 0 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("wedding-inquiry")
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showStickyButton ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          onClick={scrollToInquiry}
          className="font-serif text-base md:text-lg shadow-lg hover:shadow-xl"
          size="lg"
          variant="secondary"
        >
          Check Your Date
        </Button>
      </div>

      <section className="relative bg-secondary-foreground" ref={heroRef}>
        <div className="relative w-full overflow-hidden h-[85vh] md:h-screen" ref={videoRef}>
          {showVideo ? (
            <>
              <iframe
                src="https://www.youtube.com/embed/G1No6bDI2Y8?autoplay=1&mute=1&loop=1&playlist=G1No6bDI2Y8&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[120%] md:h-[120%] md:scale-110"
                style={{ pointerEvents: "none" }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Cinematic Wedding Films"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Loading video...</p>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 font-serif uppercase tracking-wide">
              Cinematic Wedding Videographer
              <br />
              <span className="text-lg md:text-2xl lg:text-3xl tracking-widest font-light text-white/80">Serving NC & SC</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-[#dba57d] max-w-3xl mx-auto font-serif">
              For Couples Who Value Real Moments
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-4 md:mt-6 mb-3 md:mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/95 font-serif text-xs md:text-base">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-white/95 font-serif text-xs md:text-base">Trusted by 50+ Couples</span>
              </div>
              <div className="flex items-center gap-2 bg-[#dba57d]/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#dba57d]/40">
                <span className="text-white/95 font-serif text-xs md:text-base font-medium">Limited 2026 Dates</span>
              </div>
            </div>
            {/* End of trust badges */}
            <div className="mt-2 md:mt-3 bg-white/10 backdrop-blur-sm border border-[#dba57d]/50 rounded-lg px-6 md:px-8 py-3 md:py-4">
              <p className="text-lg md:text-2xl font-light text-white font-serif">
                Wedding Films Starting at <span className="text-[#dba57d] font-medium">$3,200</span>
              </p>
            </div>
            <p className="text-sm md:text-base font-light text-white/80 mt-4 md:mt-6 max-w-xl mx-auto font-serif">
              See if your date is available and what working together looks like.
            </p>
            <Button
              onClick={scrollToInquiry}
              className="font-serif text-sm md:text-lg mt-3 md:mt-4"
              size="lg"
              variant="secondary"
            >
              Check Availability
            </Button>
            <p className="text-sm text-[#dba57d]/90 font-serif mt-2 font-medium tracking-wide">Limited 2026 Dates Remaining</p>

          </div>
        </div>
      </section>

      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-4xl space-y-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light font-serif uppercase tracking-wider">
            A Wedding Film Built Around Real Moments
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <p className="text-xl md:text-2xl lg:text-4xl font-light leading-relaxed font-serif">
            Your wedding isn't a performance. It's a story.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed font-serif">
            We approach every wedding with a calm, intentional presence, documenting your day as it truly happens. The
            result is a wedding film that feels natural, emotional, and deeply personal. A film that lets you relive not
            just how your wedding looked, but how it felt.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-[#f5f3f0]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wide text-foreground">
            This Experience Is Right for You If…
          </h3>
          <ul
            className="list-disc space-y-3 max-w-2xl mx-auto text-lg font-light font-serif text-foreground/80"
            style={{ listStylePosition: "inside", textAlign: "center" }}
          >
            <li>You value genuine emotion over staged moments</li>
            <li>You want a wedding film that feels timeless, not trendy</li>
            <li>You care about storytelling and intentional filmmaking</li>
            <li>You want to remember how your day felt, not just how it looked</li>
          </ul>
          <div className="pt-6">
            <Button
              onClick={() => {
                const pricingSection = document.getElementById("wedding-pricing")
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="font-serif text-base md:text-lg"
              size="lg"
              variant="default"
            >
              Ready To Invest In Your Story?
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding Pricing Section */}
      <section id="wedding-pricing" className="py-16 md:py-24 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-4 text-secondary-foreground uppercase">
            Wedding Pricing
          </h2>
          <p className="text-center text-foreground/60 font-serif mb-12 md:mb-16">(7% tax added for NC residents)</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <Card className="border-none shadow-xl flex flex-col">
              <CardHeader className="text-center pb-6 pt-12">
                <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                  Pretty Place
                  <br />
                  Package
                </CardTitle>
                <p className="text-4xl md:text-5xl font-serif font-light text-secondary">$1,900</p>
              </CardHeader>
              <CardContent className="px-8 pb-12 flex-1">
                <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                <ul className="space-y-4">
                  {[
                    "Up to 3 hours coverage at Pretty Place Chapel",
                    "3-4 minute highlight film",
                    "Audio recorded (letters, vows, etc)",
                    "Drone Coverage (When possible)",
                    "2 filmmakers",
                    "Digital delivery within 6-8 weeks (Longer during peak season)",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                      <span className="font-serif font-light text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl flex flex-col">
              <CardHeader className="text-center pb-6 pt-12">
                <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                  8-Hour Wedding Package
                </CardTitle>
                <p className="text-4xl md:text-5xl font-serif font-light text-secondary">$3,200</p>
              </CardHeader>
              <CardContent className="px-8 pb-12 flex-1">
                <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                <ul className="space-y-4">
                  {[
                    "8 hours coverage",
                    "4-6 minute highlight film",
                    "Audio recorded (letters, vows, toasts)",
                    "Drone Coverage",
                    "2 filmmakers",
                    "Digital delivery within 6-8 weeks (10-12 during peak season)",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                      <span className="font-serif font-light text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl flex flex-col">
              <CardHeader className="text-center pb-6 pt-12">
                <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                  10-Hour Wedding Package
                </CardTitle>
                <p className="text-4xl md:text-5xl font-serif font-light text-secondary">$4,200</p>
              </CardHeader>
              <CardContent className="px-8 pb-12 flex-1">
                <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                <ul className="space-y-4">
                  {[
                    "10 hours coverage",
                    "7-9 minute highlight film",
                    "Audio recorded (letters, vows, toasts)",
                    "Social media teaser",
                    "Ceremony edit",
                    "Drone Coverage",
                    "2 filmmakers",
                    "Digital delivery within 6-8 weeks (10-12 during peak season)",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                      <span className="font-serif font-light text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center mt-8 space-y-3">
            <Button
              onClick={scrollToInquiry}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-serif tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
            >
              Inquire About Your Date
            </Button>
            <p className="text-sm text-foreground/60 font-serif">Limited 2026 Dates Remaining. We usually respond within 24 hours.</p>
          </div>
        </div>
      </section>

      <section id="wedding-inquiry" className="py-16 md:py-24 px-4 lg:px-8 bg-[#1a1d23]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center mb-3 text-balance text-white uppercase">
            Let's See If We're a Good Fit
          </h2>
          <p className="text-center text-white/60 font-serif text-base md:text-lg mb-12 md:mb-16">
            This starts a conversation, not a commitment.
          </p>

          <div className="mb-12">
            <WeddingContactForm />
          </div>
          <p className="text-center text-white/70 font-serif text-sm mt-6">
            No pressure — we'll respond personally to learn more about your day.
          </p>

          <div className="text-center mt-12">
            <p className="text-white/70 font-serif mb-4">Prefer to talk first?</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-serif text-base md:text-lg border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <a
                href="https://martinsummitmedia.hbportal.co/schedule/68ff8077a36625002682ce7f"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Discovery Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-5xl aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/M4cS0bbNvwY?autoplay=1&mute=1&loop=1&playlist=M4cS0bbNvwY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
            className="w-full h-full"
            style={{ pointerEvents: "none" }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Wedding Film Example"
          />
        </div>
        <p className="text-lg md:text-xl font-light leading-relaxed font-serif text-center text-foreground/80 pt-4">
          A wedding film focused on real moments, honest emotion, and timeless storytelling
        </p>
      </section>

      <section className="py-16 md:py-20 px-4 lg:px-8 bg-[#f5f3f0]">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light font-serif text-foreground">Let's Talk About Your Day</h2>
          <p className="text-lg font-light font-serif text-foreground/70">
            We'd love to hear about your wedding and see if we're the right fit.
          </p>
          <Button onClick={scrollToInquiry} className="font-serif text-base md:text-lg" size="lg" variant="default">
            Check Your Date
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-12 md:mb-16">
            Featured Wedding Films
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Film 1 */}
            <div className="space-y-3">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src="https://galleries.vidflow.co/videos/0b39b723"
                  frameBorder="0"
                  allowFullScreen
                  title="Wedding Film 1"
                />
              </div>
            </div>

            {/* Film 2 */}
            <div className="space-y-3">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src="https://galleries.vidflow.co/videos/36d93a2f"
                  frameBorder="0"
                  allowFullScreen
                  title="Wedding Film 2"
                />
              </div>
            </div>

            {/* Film 3 */}
            <div className="space-y-3">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src="https://galleries.vidflow.co/videos/27f02a45"
                  frameBorder="0"
                  allowFullScreen
                  title="Wedding Film 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance font-serif uppercase text-white">
            Ready to tell your story honestly?
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <p className="text-xl font-light leading-relaxed font-serif text-white/90">
            If you value authentic moments and timeless storytelling, we'd love to hear about your day.
          </p>
          <div className="pt-6 space-y-3">
            <Button onClick={scrollToInquiry} className="font-serif text-base md:text-lg" size="lg" variant="default">
              Start the Conversation
            </Button>
            <p className="text-sm text-white/60 font-serif">No pressure. We usually respond within 24 hours.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
