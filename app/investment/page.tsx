import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "Wedding Videography & Photography Pricing | NC, SC & TN",
  description:
    "Wedding videography and photography packages & pricing for Charlotte, Asheville, Knoxville, Chattanooga, Charleston & Greenville. Cinematic wedding films starting at $1,900. Wedding photography starting at $1,500. NC, SC & TN wedding videographer and photographer.",
  keywords:
    "wedding videographer pricing Charlotte, wedding videography cost Asheville, wedding photographer pricing NC, wedding photography packages, NC wedding videographer packages, TN wedding videographer pricing, Tennessee wedding videography cost, wedding photographer Asheville",
}

export default function InvestmentPage() {
  const elopementPackages = [
    {
      title: "4-Hour Adventure Elopement",
      subtitle: "Film Coverage",
      price: "$3,500",
      description: "A half-day adventure experience with cinematic film coverage.",
      features: [
        "Two videographers",
        "Half-day elopement coverage (up to 4 hours)",
        "Two Locations",
        "Cinematic highlight film",
        "Professional audio of vows/letters",
        "Drone coverage (where permitted)",
        "Location + timeline planning",
        "Unlimited guidance leading up to your day",
        "Online film delivery",
      ],
    },
    {
      title: "8-Hour Adventure Elopement",
      subtitle: "Film Coverage",
      price: "$7,000",
      description: "A full-day adventure experience with cinematic film coverage.",
      features: [
        "Two videographers",
        "Full elopement day coverage (up to 8 hours)",
        "Multiple Locations",
        "Cinematic highlight film",
        "Professional audio of vows/letters",
        "Drone coverage (where permitted)",
        "Location + timeline planning",
        "Unlimited guidance leading up to your day",
        "Online film delivery",
      ],
    },
  ]

  const videographyPackages = [
    {
      title: "8-Hour Wedding Package",
      price: "$3,200",
      features: [
        "8 hours coverage",
        "4-6 minute highlight film",
        "Audio recorded (letters, vows, toasts)",
        "Drone Coverage",
        "2 filmmakers",
        "Digital delivery within 6-8 weeks (10-12 during peak season)",
      ],
    },
    {
      title: "10-Hour Wedding Package",
      price: "$4,200",
      features: [
        "10 hours coverage",
        "7-9 minute highlight film",
        "Audio recorded (letters, vows, toasts)",
        "Social media teaser",
        "Ceremony edit",
        "Drone Coverage",
        "2 filmmakers",
        "Digital delivery within 6-8 weeks (10-12 during peak season)",
      ],
    },
  ]

  const elopementVideoPackage = {
    title: "Elopement",
    subtitle: "Package",
    price: "$1,900",
    features: [
      "Up to 3 hours coverage",
      "3-4 minute highlight film",
      "Audio recorded (letters, vows, etc)",
      "Drone Coverage (When possible)",
      "2 filmmakers",
      "Digital delivery within 6-8 weeks (Longer during peak season)",
    ],
  }

  const photographyPackages = [
    {
      title: "Elopement",
      subtitle: "Package",
      price: "$1,500",
      features: [
        "Up to 3 hours coverage",
        "Two photographers",
        "Online gallery delivery",
        "Full editing and color correction",
        "Print release included",
      ],
    },
    {
      title: "8-Hour Wedding",
      subtitle: "Package",
      price: "$3,000",
      features: [
        "8 hours coverage",
        "Two photographers",
        "Online gallery delivery",
        "Full editing and color correction",
        "Print release included",
      ],
    },
    {
      title: "10-Hour Wedding",
      subtitle: "Package",
      price: "$4,000",
      features: [
        "10 hours coverage",
        "Two photographers",
        "Online gallery delivery",
        "Full editing and color correction",
        "Print release included",
      ],
    },
  ]

  const addOnServices = [
    {
      name: "DOC Edit",
      price: "$800",
      description: "A documentary-style edit that captures your day as it naturally unfolded, from start to finish.",
    },
    {
      name: "Rehearsal Dinner",
      price: "$500",
      description:
        "Coverage of the night before your wedding, preserving toasts, laughter, and meaningful moments with loved ones.",
    },
    {
      name: "Toasts Edit",
      price: "$250",
      description:
        "A dedicated film featuring all speeches and toasts, edited cleanly so every word and reaction is preserved.",
    },
    {
      name: "Day Before Session",
      price: "$250",
      description:
        "A relaxed filming session the day before your wedding, perfect for capturing connection without the rush of the wedding day.",
    },
    {
      name: "Ceremony Edit",
      price: "$350",
      description:
        "A full, uninterrupted edit of your ceremony with professionally synced audio and multiple camera angles.",
    },
    {
      name: "First Dances Edit",
      price: "$250",
      description: "A standalone edit of your first dances, capturing the music, movement, and emotion in real time.",
    },
    {
      name: "Additional Hours",
      price: "$200 per hour",
      description: "Extra coverage added to your day to ensure nothing meaningful is missed, billed hourly.",
    },
  ]

  const photographyAddOns = [
    {
      name: "Rehearsal Dinner Coverage",
      price: "$500",
      description: "Coverage of your rehearsal dinner, capturing toasts, laughter, and intimate moments with loved ones the night before.",
    },
    {
      name: "Bridal Session",
      price: "$450",
      description: "A dedicated portrait session for the bride, perfect for capturing stunning bridal portraits before the wedding day.",
    },
    {
      name: "Engagement Session",
      price: "$550",
      description: "A relaxed portrait session to capture your connection before the wedding. Perfect for save-the-dates and wedding websites.",
    },
    {
      name: "Additional Hours",
      price: "$200 per hour",
      description: "Extra coverage added to your day to ensure nothing meaningful is missed, billed hourly.",
    },
  ]

  const combinedPackages = [
    {
      title: "Elopement",
      subtitle: "Photo + Video",
      price: "$3,200",
      features: [
        "Up to 3 hours coverage",
        "2 photographers + 1 videographer",
        "3-4 minute highlight film",
        "Full photo gallery with editing",
        "Audio recorded (letters, vows, etc)",
        "Drone coverage (when possible)",
        "Print release included",
        "Online delivery",
      ],
    },
    {
      title: "8-Hour Wedding",
      subtitle: "Photo + Video",
      price: "$6,000",
      features: [
        "8 hours coverage",
        "2 photographers + 1 videographer",
        "4-6 minute highlight film",
        "Full photo gallery with editing",
        "Audio recorded (letters, vows, toasts)",
        "Drone coverage",
        "Print release included",
        "Online delivery",
      ],
    },
    {
      title: "10-Hour Wedding",
      subtitle: "Photo + Video",
      price: "$8,000",
      features: [
        "10 hours coverage",
        "2 photographers + 1 videographer",
        "7-9 minute highlight film",
        "Full photo gallery with editing",
        "Audio recorded (letters, vows, toasts)",
        "Social media teaser",
        "Ceremony edit",
        "Drone coverage",
        "Print release included",
        "Online delivery",
      ],
    },
  ]

  const approaches = [
    {
      title: "Personalized",
      description:
        "Your wedding is a reflection of your connection. We take time to understand your vision, your pace, and the moments that matter most to you.",
    },
    {
      title: "Intentional",
      description:
        "Every frame is chosen with purpose. We capture real connection and emotion, not staged moments, so your film feels cohesive, cinematic, and deeply personal.",
    },
    {
      title: "Supportive",
      description:
        "From timeline planning to day-of coordination, we are with you the whole way. You are never alone in this process.",
    },
  ]

  return (
    <main className="min-h-screen pt-20 bg-muted">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-balance uppercase">Investment</h1>
          <div className="w-20 md:w-24 h-1 bg-[#dba57d] mx-auto"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif font-light leading-relaxed text-foreground/90">
            We take on a limited number of weddings each year so we can give every couple our full attention. Here is
            what working with us looks like.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-foreground">
        <div className="container mx-auto max-w-6xl text-popover">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-12 md:mb-16 uppercase">
            Our Approach
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-background">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-serif font-light text-popover uppercase">{approach.title}</h3>
                <p className="text-sm md:text-base font-serif font-light leading-relaxed text-popover">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Video Section - Full Bleed */}
      <section className="relative w-screen bg-secondary-foreground -mx-[50vw] left-1/2 right-1/2">
        <div className="relative w-full overflow-hidden h-[60vh] md:h-[70vh]">
          <iframe
            src="https://www.youtube.com/embed/v2-BhapVcYw?autoplay=1&mute=1&loop=1&playlist=v2-BhapVcYw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full"
            style={{ pointerEvents: "none" }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Wedding Video"
            loading="lazy"
          />
        </div>
      </section>

      {/* Wedding Videography Pricing */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 lg:px-8 bg-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-4 text-secondary-foreground uppercase">
            Wedding Videography Pricing
          </h2>
          <p className="text-center text-foreground/60 font-serif mb-12 md:mb-16">(7% tax added for NC residents)</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <Card className="border-none shadow-xl flex flex-col">
              <CardHeader className="text-center pb-6 pt-12">
                <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                  {elopementVideoPackage.title}
                  <br />
                  {elopementVideoPackage.subtitle}
                </CardTitle>
                <p className="text-4xl md:text-5xl font-serif font-light text-secondary">{elopementVideoPackage.price}</p>
              </CardHeader>
              <CardContent className="px-8 pb-12 flex-1">
                <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                <ul className="space-y-4">
                  {elopementVideoPackage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                      <span className="font-serif font-light text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {videographyPackages.map((pkg, pkgIndex) => (
              <Card key={pkgIndex} className="border-none shadow-xl flex flex-col">
                <CardHeader className="text-center pb-6 pt-12">
                  <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-4xl md:text-5xl font-serif font-light text-secondary">{pkg.price}</p>
                </CardHeader>
                <CardContent className="px-8 pb-12 flex-1">
                  <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                        <span className="font-serif font-light text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8 space-y-3">
            <a href="/inquire">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-serif tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110">
                Inquire About Your Date
              </Button>
            </a>
            <p className="text-sm text-foreground/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>

      {/* Add-On Services for Videography */}
      <section className="py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-4 text-card-foreground uppercase">
            Add Ons for Videography
          </h2>
          <p className="text-center text-base md:text-lg font-serif font-light text-foreground/70 mb-16 max-w-3xl mx-auto">
            These are additional add-on services that can be added to any video package. They are not stand-alone
            services and cannot be ordered separately.
          </p>
          <Card className="border-none shadow-lg bg-primary-foreground border-secondary-foreground group">
            <CardContent className="p-8">
              <div className="space-y-8">
                {addOnServices.map((addOn, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-serif font-light text-foreground/90 text-lg">• {addOn.name}</span>
                      <span className="font-serif font-light text-[#8b7355] whitespace-nowrap">{addOn.price}</span>
                    </div>
                    <p className="font-serif font-light text-foreground/70 text-sm ml-4 leading-relaxed">
                      {addOn.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wedding Photography Pricing */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-4 text-secondary-foreground uppercase">
            Wedding Photography Pricing
          </h2>
          <p className="text-center text-foreground/60 font-serif mb-12 md:mb-16">(7% tax added for NC residents)</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {photographyPackages.map((pkg, pkgIndex) => (
              <Card key={pkgIndex} className="border-none shadow-xl flex flex-col">
                <CardHeader className="text-center pb-6 pt-12">
                  <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                    {pkg.title}
                    <br />
                    {pkg.subtitle}
                  </CardTitle>
                  <p className="text-4xl md:text-5xl font-serif font-light text-secondary">{pkg.price}</p>
                </CardHeader>
                <CardContent className="px-8 pb-12 flex-1">
                  <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                        <span className="font-serif font-light text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8 space-y-3">
            <a href="/inquire">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-serif tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110">
                Inquire About Your Date
              </Button>
            </a>
            <p className="text-sm text-foreground/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>

      {/* Add-On Services for Photography */}
      <section className="py-24 px-4 lg:px-8 bg-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-4 text-card-foreground uppercase">
            Add Ons for Photography
          </h2>
          <p className="text-center text-base md:text-lg font-serif font-light text-foreground/70 mb-16 max-w-3xl mx-auto">
            These are additional add-on services that can be added to any photography package.
          </p>
          <Card className="border-none shadow-lg bg-white border-secondary-foreground group">
            <CardContent className="p-8">
              <div className="space-y-8">
                {photographyAddOns.map((addOn, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-serif font-light text-foreground/90 text-lg">• {addOn.name}</span>
                      <span className="font-serif font-light text-[#8b7355] whitespace-nowrap">{addOn.price}</span>
                    </div>
                    <p className="font-serif font-light text-foreground/70 text-sm ml-4 leading-relaxed">
                      {addOn.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Combined Photo + Video Packages */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-4 text-popover uppercase">
            Photo + Video Packages
          </h2>
          <p className="text-center text-popover/70 font-serif mb-12 md:mb-16">
            Photography and videography bundled together with one unified team
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {combinedPackages.map((pkg, pkgIndex) => (
              <Card key={pkgIndex} className="border-none shadow-xl flex flex-col bg-primary-foreground">
                <CardHeader className="text-center pb-6 pt-12">
                  <CardTitle className="text-2xl md:text-3xl font-serif font-light mb-4">
                    {pkg.title}
                    <br />
                    <span className="text-lg text-foreground/70">{pkg.subtitle}</span>
                  </CardTitle>
                  <p className="text-4xl md:text-5xl font-serif font-light text-secondary">{pkg.price}</p>
                </CardHeader>
                <CardContent className="px-8 pb-12 flex-1">
                  <div className="w-16 h-px bg-secondary mx-auto mb-8"></div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                        <span className="font-serif font-light text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8 space-y-3">
            <a href="/inquire">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-serif tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110">
                Inquire About Your Date
              </Button>
            </a>
            <p className="text-sm text-popover/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="py-24 px-4 lg:px-8 bg-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-card-foreground uppercase">
            Pricing Questions
          </h2>
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">Do you offer payment plans?</h3>
              <p className="font-serif font-light text-foreground/80 leading-relaxed">
                Yes. A 50% retainer is required to reserve your date, with the remaining balance due 30 days prior to
                your wedding.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">
                What if our wedding is longer than 10 hours?
              </h3>
              <p className="font-serif font-light text-foreground/80 leading-relaxed">
                Absolutely. Additional hours can be added at $200 per hour to ensure we capture every moment that
                matters to you.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">
                Do you travel outside North Carolina?
              </h3>
              <p className="font-serif font-light text-foreground/80 leading-relaxed">
                Absolutely. We love destination weddings and elopements. Travel fees vary based on location, but we'll
                work with you to make it happen.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">
                How far in advance should we book?
              </h3>
              <p className="font-serif font-light text-foreground/80 leading-relaxed">
                We recommend booking 9-12 months in advance, especially for peak wedding season (May through October).
                However, we occasionally have availability for shorter timelines, so reach out regardless of your date.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">
                Can we book you for just the ceremony?
              </h3>
              <p className="font-serif font-light text-foreground/80 leading-relaxed">
                Our Elopement Package is designed specifically for ceremony-focused coverage. For larger celebrations, we recommend 8-10 hours of coverage to capture your full story and all the meaningful
                moments throughout your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] text-white">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-balance uppercase">
            Ready to Reserve Your Date?
          </h2>
          <p className="text-lg md:text-xl font-serif font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Let's talk about your day and make sure we're the right fit for you.
          </p>
          <div className="space-y-3">
            <Button
              className="bg-[#dba57d] hover:bg-[#dba57d]/90 text-[#1a1d23] font-serif text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              size="lg"
              asChild
            >
              <a href="/inquire">Start a Conversation</a>
            </Button>
            <p className="text-sm text-white/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
