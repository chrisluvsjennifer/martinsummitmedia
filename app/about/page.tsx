import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | NC, SC & TN Wedding Videographers | Charlotte, Asheville, Knoxville",
  description:
    "Meet Chris and Jennifer Martin, a husband and wife wedding videography team. Serving Charlotte, Asheville, Knoxville, Chattanooga, Charleston, Greenville & beyond with cinematic wedding films.",
  keywords:
    "NC wedding videographer team, TN wedding videographer, Charlotte wedding videographer, Asheville wedding videographer, Knoxville wedding videographer, Chattanooga wedding videographer, husband wife wedding videographers",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#1a1d23]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-balance uppercase text-foreground">
            A Different Way to Tell Your Story
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#dba57d] mx-auto"></div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-4 lg:px-8 py-12 md:py-16 bg-secondary-foreground">
        <div className="container mx-auto max-w-2xl">
          <div className="aspect-[3/2] relative overflow-hidden rounded-lg shadow-2xl">
            <Image src="/chris-jennifer.png" alt="Chris and Jennifer Martin" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 lg:px-8 py-16 md:pb-24 bg-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl font-serif leading-relaxed text-white/90">
            <p className="text-muted">
              Your wedding day should not feel like a production. It should feel like you: honest, emotional,
              intentional, and natural.
            </p>
            <p className="text-muted">
              We&apos;re Chris & Jennifer, a husband and wife photography and filmmaking team based in Western North
              Carolina. We work with couples who care more about connection than performance, and moments that feel
              genuine instead of staged.
            </p>
            <p className="text-muted">
              Whether you are planning an intimate mountain elopement, a quiet celebration with your closest people, or
              a full wedding surrounded by everyone you love, our approach stays the same: documenting your day as it
              actually felt.
            </p>
            <div className="text-muted space-y-2 py-4">
              <p>The quiet moments.</p>
              <p>The anticipation.</p>
              <p>The laughter that was never planned.</p>
              <p>The emotion you will want to hold onto years from now.</p>
            </div>
            <p className="text-muted">
              No stiff posing. No pressure to perform. No turning your wedding into a photoshoot.
            </p>
            <p className="text-muted">
              Just honest storytelling, thoughtful guidance when you need it, and films and photographs that feel
              timeless every time you come back to them.
            </p>
          </div>
        </div>
      </section>

      {/* When We're Not Filming */}
      <section className="py-24 px-4 lg:px-8 bg-[#2a2d33] bg-muted">
        <div className="container mx-auto max-w-4xl text-foreground">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 uppercase text-foreground font-thin">
            When We're Not Filming
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-serif leading-relaxed text-foreground">
            <p className="text-foreground">
              Outside of weddings, you'll usually find us somewhere outdoors, hiking mountain trails, chasing good
              light, or unwinding on the beaches of Destin in January. We love good food, great TV, and any excuse to
              explore somewhere new. We bring that same curiosity and love of storytelling to every wedding we're part
              of.
            </p>
          </div>
        </div>
      </section>

      {/* What We Value */}
      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white uppercase font-thin">
            What We Value
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-serif text-white uppercase font-thin">Authenticity</h3>
              <p className="text-lg font-serif leading-relaxed text-white/80">
                We capture real moments, real emotions, and real connections. Your film should feel like you, not a
                staged production.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-serif text-white uppercase font-thin">Artistry</h3>
              <p className="text-lg font-serif leading-relaxed text-white/80">
                Every frame is carefully composed, every moment thoughtfully captured. We blend documentary storytelling
                with cinematic beauty.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-serif text-white uppercase font-thin">Connection</h3>
              <p className="text-lg font-serif leading-relaxed text-white/80">
                Building genuine relationships with our couples is at the heart of what we do. We show up for you the
                same way your closest people do, fully present, genuinely invested, and honored to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bucket List */}
      <section className="py-24 px-4 lg:px-8 bg-[#E8E4DF]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1d23] uppercase font-thin">
            Dream Locations We'd Love to Shoot
          </h2>
          <p className="text-lg md:text-xl font-serif leading-relaxed text-[#1a1d23]/80 max-w-2xl mx-auto">
            If your wedding or elopement takes you to one of these places, we would love to be there with you. Reach out
            and let's talk about making it happen.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-4">
            <span className="text-xl md:text-2xl font-serif text-[#1a1d23]/90 italic">Banff</span>
            <span className="text-[#1a1d23]/40 hidden md:inline">·</span>
            <span className="text-xl md:text-2xl font-serif text-[#1a1d23]/90 italic">Italy</span>
            <span className="text-[#1a1d23]/40 hidden md:inline">·</span>
            <span className="text-xl md:text-2xl font-serif text-[#1a1d23]/90 italic">Big Sur</span>
            <span className="text-[#1a1d23]/40 hidden md:inline">·</span>
            <span className="text-xl md:text-2xl font-serif text-[#1a1d23]/90 italic">Iceland</span>
            <span className="text-[#1a1d23]/40 hidden md:inline">·</span>
            <span className="text-xl md:text-2xl font-serif text-[#1a1d23]/90 italic">Yosemite</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 lg:px-8 bg-[#2a2d33] bg-secondary">
        <div className="container mx-auto max-w-3xl text-center space-y-8 text-foreground">
          <h2 className="text-3xl md:text-4xl font-serif text-balance uppercase text-foreground font-thin">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl font-serif leading-relaxed text-card-foreground">
            If this sounds like the kind of experience you&apos;re looking for, we&apos;d love to hear from you. Tell us
            about your day, and let&apos;s see if we&apos;re a good fit.
          </p>
          <div className="space-y-3">
            <Button
              size="lg"
              asChild
              className="text-[#1a1d23] hover:bg-white/90 font-serif text-lg px-8 py-6 bg-foreground text-muted"
            >
              <a href="/inquire">Start the Conversation</a>
            </Button>
            <p className="text-sm text-card-foreground/70 font-serif">
              We typically respond within one business day.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
