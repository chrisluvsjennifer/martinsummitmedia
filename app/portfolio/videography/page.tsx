import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Wedding Videography Portfolio | Martin Summit Media | NC & SC",
  description:
    "View our cinematic wedding films and videography portfolio. Serving Charlotte, Asheville, Knoxville, Chattanooga, and beyond with documentary-style wedding videography.",
  keywords:
    "wedding videography portfolio, wedding films, cinematic wedding videos, NC wedding videographer, SC wedding videographer, Charlotte wedding films, Asheville wedding videography",
}

export default function VideographyPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#1a1d23]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-balance uppercase text-foreground">
            Videography
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#dba57d] mx-auto"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif font-light leading-relaxed text-foreground/90">
            Cinematic Wedding Films That Tell Your Story
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <p className="text-xl md:text-2xl font-light leading-relaxed font-serif">
            Every wedding film we create is designed to capture the real moments, the honest emotions, and the unique
            story of your day. We believe your wedding isn&apos;t a performance - it&apos;s a story worth telling beautifully.
          </p>
        </div>
      </section>

      {/* Featured Wedding Films Section */}
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

      {/* Additional Film Showcase */}
      <section className="py-16 md:py-20 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-5xl aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/M4cS0bbNvwY?autoplay=0&mute=0&loop=0&controls=1&showinfo=0&rel=0&modestbranding=1"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Wedding Film Example"
          />
        </div>
        <p className="text-lg md:text-xl font-light leading-relaxed font-serif text-center text-foreground/80 pt-6">
          A wedding film focused on real moments, honest emotion, and timeless storytelling
        </p>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#f5f3f0]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light font-serif uppercase tracking-wide text-foreground">
            Our Approach to Wedding Films
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <div className="space-y-6 text-lg font-light font-serif text-foreground/80">
            <p>
              We approach every wedding with a calm, intentional presence, documenting your day as it truly happens.
            </p>
            <p>
              The result is a wedding film that feels natural, emotional, and deeply personal - a film that lets you
              relive not just how your wedding looked, but how it felt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance font-serif uppercase text-white">
            Ready to tell your story?
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <p className="text-xl font-light leading-relaxed font-serif text-white/90">
            If you value authentic moments and timeless storytelling, we&apos;d love to hear about your day.
          </p>
          <div className="pt-6 space-y-3">
            <Button asChild className="font-serif text-base md:text-lg" size="lg" variant="default">
              <Link href="/inquire">Start the Conversation</Link>
            </Button>
            <p className="text-sm text-white/60 font-serif">No pressure. We usually respond within 24 hours.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
