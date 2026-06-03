import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhilosophySection } from "@/components/philosophy-section"
import { JourneyCarousel } from "@/components/journey-carousel"
import { WhatSetsUsApart } from "@/components/what-sets-us-apart"

export const metadata = {
  title: "The Experience | NC Wedding Videographer & Photographer | Charlotte & Asheville",
  description:
    "Discover what it's like to work with wedding videographers and photographers in Charlotte, Asheville & NC. Our documentary-style approach captures authentic moments from planning to delivery.",
  keywords:
    "Charlotte wedding videographer experience, Charlotte wedding photographer experience, Asheville wedding videography process, Asheville wedding photography process, NC wedding film planning, what to expect wedding videographer photographer, North Carolina wedding videography photography",
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-balance font-serif uppercase">Experience</h1>
          <div className="h-1 bg-[#dba57d] mx-auto opacity-40 w-72"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 font-serif">
            Your relationship with your creative team is an intimate one. Here is what you can expect when working with
            us for your wedding photography and film.
          </p>
        </div>
      </section>

      <PhilosophySection />

      {/* Timeline - Now a Carousel */}
      <section className="py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-light text-center mb-16 font-serif text-3xl md:text-4xl text-foreground uppercase tracking-wider">
            Your Journey With Us
          </h2>
          <JourneyCarousel />
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <WhatSetsUsApart />

      {/* Image Section */}
      <section className="px-4 lg:px-8 pt-24 pb-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-video relative overflow-hidden rounded-lg shadow-2xl bg-muted">
            <Image
              src="/images/experience-couple.jpg"
              alt="Bride and groom walking hand in hand through a forest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 lg:px-8 text-primary-foreground bg-secondary-foreground">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance font-serif uppercase">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl font-light leading-relaxed font-serif">
            Let us schedule a consultation to discuss your wedding and how we can capture your story through
            photography and film.
          </p>
          <div className="space-y-3">
            <Button className="font-serif text-2xl" size="lg" variant="secondary" asChild>
              <a href="/inquire">Start the Conversation</a>
            </Button>
            <p className="text-sm text-primary-foreground/60 font-serif">
              We typically respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
