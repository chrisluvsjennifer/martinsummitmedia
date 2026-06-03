import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | Martin Summit Media",
  description: "Thank you for reaching out to Martin Summit Media. We'll be in touch soon.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Confirmation */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-[#b8926f]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">We're So Excited You Reached Out!</h1>

          <p className="text-lg md:text-xl text-muted-foreground font-serif font-light max-w-2xl mx-auto">
            Your inquiry has been received, and we'll be in touch soon.
          </p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="bg-[#1a1d23] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">What's Next?</h2>

            <div className="w-16 h-[2px] bg-[#b8926f] mx-auto mb-8" />

            <div className="space-y-4 text-base md:text-lg font-serif font-light leading-relaxed">
              <p>We personally review every inquiry and typically respond within 24 to 48 hours.</p>

              <p>
                If it feels like a great fit, we'll invite you to schedule a discovery call where we can learn more
                about your day and see if we're the right team for you.
              </p>

              <p className="text-sm text-white/70 pt-4">
                Our replies come directly from Chris and Jennifer. If you don't see our email within 48 hours, please
                check your spam folder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Reaffirmation Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg md:text-xl font-serif font-light leading-relaxed text-foreground">
            We specialize in cinematic wedding films for couples who want their day to feel deeply personal, honest, and
            unforgettable. Whether you're planning an intimate elopement or a full wedding celebration, our approach
            stays the same: intentional storytelling that lets you relive how your day truly felt.
          </p>
        </div>
      </section>

      {/* Optional Discovery Call CTA */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif">Already Know We're the Right Fit?</h3>

          <p className="text-base md:text-lg font-serif font-light text-muted-foreground">
            If you're ready to move forward, you can go ahead and schedule a discovery call with us below.
          </p>

          <Button asChild size="lg" className="bg-[#b8926f] hover:bg-[#a07d5a] text-white">
            <a
              href="https://martinsummitmedia.hbportal.co/public/discoverycallwithmartinsummitmedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Discovery Call
            </a>
          </Button>
        </div>
      </section>

      {/* Bonus Content - Featured Film */}
      <section className="bg-[#1a1d23] py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              While You Wait, Watch a Recent Wedding Film
            </h3>
            <div className="w-16 h-[2px] bg-[#b8926f] mx-auto" />
          </div>

          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div style={{ position: "relative", padding: "0 0 56.25% 0", height: 0 }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                src="https://galleries.vidflow.co/videos/exl3256m"
                frameBorder="0"
                allowFullScreen
                title="A Christmas Wedding That Felt Like Home"
              />
            </div>
          </div>

          <p className="text-center text-white/80 font-serif font-light mt-6">
            A Christmas Wedding That Felt Like Home | Cinematic Love Story
          </p>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* Final CTA - Return Home */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
