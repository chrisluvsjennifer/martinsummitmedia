import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Why Your Wedding Day Doesn't Have to Feel Rushed | Martin Summit Media",
  description:
    "Your wedding day doesn't need to be a blur of checklists and strict schedules. Learn how intentional timelines and thoughtful planning can create space for meaningful, unhurried moments.",
  keywords:
    "wedding timeline, unhurried wedding, intentional wedding planning, wedding videography, elopement planning, intimate wedding, Western North Carolina wedding",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/couple-walking-peacefully-at-golden-hour-wedding.jpg"
          alt="Couple walking peacefully together during their wedding day"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">January 9, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Why Your Wedding Day Doesn't Have to Feel Rushed
            </h1>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-6 px-4 lg:px-8 bg-card border-b border-foreground/10">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
            <p>One of the most common things couples tell us after their wedding day is this:</p>
            <p className="italic">"It all went by so fast."</p>
            <p>
              The truth is, feeling rushed on your wedding day isn't inevitable. It's often the result of timelines
              built around expectations instead of intention. Your wedding doesn't need to be a blur of checklists,
              strict schedules, and constantly watching the clock. It can be slow, meaningful, and deeply personal.
            </p>
            <p>Here's how.</p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              The Pressure to Do Everything
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Traditional wedding timelines often try to fit everything into a single day. Getting ready, portraits,
                ceremony, family photos, cocktail hour, reception events, and more, all packed into a few short hours.
              </p>
              <p>
                The result? Little time to breathe. Little time to connect. And very little space to actually feel
                what's happening.
              </p>
              <p>When the focus shifts from "doing it all" to "doing what matters," everything changes.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Intentional Timelines Create Space
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>A wedding day that doesn't feel rushed is built around intention, not obligation.</p>
              <p>That might mean:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Planning more time for getting ready so it feels calm, not chaotic</li>
                <li>Choosing fewer locations so you're not constantly traveling</li>
                <li>Building in quiet moments together, away from everyone else</li>
                <li>Letting moments unfold naturally instead of forcing them</li>
              </ul>
              <p>
                Whether it's an adventure elopement or a thoughtfully planned wedding, the goal is the same: space to be
                present.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Elopements and Intimate Weddings Naturally Slow Things Down
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>This is one reason so many couples are drawn to elopements and smaller celebrations.</p>
              <p>With fewer moving parts, there's more freedom to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spend meaningful time together</li>
                <li>Choose locations that feel personal</li>
                <li>Let emotions breathe instead of rushing past them</li>
              </ul>
              <p>
                But even larger weddings can feel unhurried when the timeline is built with care. It's not about the
                size of your day. It's about how it's designed.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              You're Allowed to Do Things Differently
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Your wedding doesn't have to follow a script.</p>
              <p>You're allowed to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Skip traditions that don't feel like you</li>
                <li>Rearrange the timeline to suit your energy</li>
                <li>Choose moments over expectations</li>
                <li>Slow down and soak it all in</li>
              </ul>
              <p>
                When couples give themselves permission to do things differently, their day feels less like a
                performance and more like an experience.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              How We Approach Wedding Days
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>At Martin Summit Media, we believe the best stories happen when couples aren't rushed.</p>
              <p>
                We work closely with our couples to understand what matters most to them, helping create timelines that
                feel natural and unforced. Whether you're exchanging vows on a mountaintop or celebrating with family
                and friends at a wedding venue, our focus is always the same: capturing what it felt like, not just what
                happened.
              </p>
              <p>The laughter.</p>
              <p>The quiet moments.</p>
              <p>The in-between moments you didn't even realize were happening.</p>
              <p>Those are the moments worth remembering.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Your Day. Your Pace.
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Your wedding day doesn't need to feel overwhelming or rushed. With intention, flexibility, and the right
                team by your side, it can be calm, meaningful, and unforgettable.
              </p>
              <p>
                If you're planning a wedding or elopement and want a day that feels like you, we'd love to hear your
                story.
              </p>
              <p>Reach out anytime. We're here to help you slow it down and savor it.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & wife videography team</p>
              <p className="text-lg font-light text-foreground/80">
                Based in Western North Carolina, available worldwide
              </p>
            </div>

            <div className="pt-8">
              <Button className="font-serif text-xl" size="lg" variant="default" asChild>
                <Link href="/inquire">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
