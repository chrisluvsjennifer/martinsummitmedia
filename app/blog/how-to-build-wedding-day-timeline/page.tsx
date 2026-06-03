import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "How to Build a Wedding Day Timeline That Leaves Room to Breathe | Martin Summit Media",
  description:
    "Learn how to create a wedding day timeline that prioritizes real moments over rushed schedules. Practical tips for building margin into your day.",
  keywords:
    "wedding day timeline, wedding schedule tips, relaxed wedding timeline, wedding planning guide, elopement timeline, stress-free wedding day, wedding videographer tips",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/wedding-day-timeline-guide.jpg"
          alt="Couple sharing a quiet moment during their wedding day"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">March 11, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              How to Build a Wedding Day Timeline That Leaves Room to Breathe
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
            <p>
              One of the most common things we hear from couples after their wedding is this: "It went by so fast." And while that's partly just the nature of a meaningful day, it doesn't have to feel like a blur.
            </p>

            <p>
              The secret? Building a timeline that has margin. Space to breathe. Room for the unexpected. Here's how to create a wedding day schedule that lets you actually be present for your own wedding.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Why Most Wedding Timelines Feel Rushed
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Traditional wedding timelines try to fit everything in: getting ready, first look, bridal party photos, family formals, ceremony, cocktail hour, reception, dances, cake cutting, bouquet toss, exit. It's a lot.
              </p>
              <p>
                The problem is that most timelines are built with zero buffer. Every moment is scheduled back-to-back, and the second something runs long (and something always runs long), the whole day starts to feel like you're chasing the clock.
              </p>
              <p>
                That stress shows up in your face, your body language, and ultimately, your photos and film.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              The Power of Buffer Time
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Buffer time is unscheduled space between events. It's 15-30 minutes of nothing planned. And it's the single best thing you can add to your timeline.
              </p>
              <p>
                Here's what buffer time does:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Absorbs delays without creating a domino effect</li>
                <li>Gives you moments to breathe, eat, hydrate, or just be together</li>
                <li>Allows for spontaneous, unplanned moments (which often become the best parts of your film)</li>
                <li>Reduces stress for you and your entire vendor team</li>
              </ul>
              <p>
                A timeline without buffer is a timeline waiting to break.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Where to Build in Margin
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Not every moment needs a buffer, but these key transitions do:
              </p>
              <p>
                <strong className="font-medium">After getting ready, before first look.</strong> Hair and makeup almost always run a little over. Give yourself 20-30 minutes here.
              </p>
              <p>
                <strong className="font-medium">After portraits, before ceremony.</strong> This is a great time for a private moment together, a snack, or just catching your breath before the big moment.
              </p>
              <p>
                <strong className="font-medium">Between ceremony and reception.</strong> Cocktail hour exists for a reason. Use it. Don't try to squeeze in more photos during this time unless absolutely necessary.
              </p>
              <p>
                <strong className="font-medium">During the reception.</strong> You don't need to do everything. Cut what doesn't matter to you and create space for what does.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              A Sample Timeline with Breathing Room
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Here's an example of a 5:00 PM ceremony with intentional margin built in:
              </p>
              <div className="bg-foreground/5 p-6 rounded-lg space-y-3">
                <p><strong className="font-medium">12:00 PM</strong> - Hair & Makeup begins</p>
                <p><strong className="font-medium">3:00 PM</strong> - Getting ready complete (buffer built in)</p>
                <p><strong className="font-medium">3:15 PM</strong> - Bride finishes dressing, private moment</p>
                <p><strong className="font-medium">3:30 PM</strong> - First look</p>
                <p><strong className="font-medium">3:45 PM</strong> - Couple portraits</p>
                <p><strong className="font-medium">4:15 PM</strong> - Wedding party photos</p>
                <p><strong className="font-medium">4:30 PM</strong> - Buffer / private moment / hydrate</p>
                <p><strong className="font-medium">4:45 PM</strong> - Family formals</p>
                <p><strong className="font-medium">5:00 PM</strong> - Ceremony</p>
                <p><strong className="font-medium">5:30 PM</strong> - Cocktail hour begins / Couple enjoys time together</p>
                <p><strong className="font-medium">6:30 PM</strong> - Reception begins</p>
              </div>
              <p>
                Notice the gaps. Those gaps are where the real moments happen.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              What to Cut (If You Need To)
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If your timeline feels packed, here are things to consider cutting or simplifying:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-medium">Garter toss / bouquet toss</strong> - Most couples skip these now</li>
                <li><strong className="font-medium">Excessive formal photo combinations</strong> - Prioritize the must-haves</li>
                <li><strong className="font-medium">Multiple venue changes</strong> - Each location adds transition time</li>
                <li><strong className="font-medium">Late-night events that extend past your energy</strong> - End on a high note</li>
              </ul>
              <p>
                Your wedding doesn't have to include everything. It just has to include what matters to you.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Work with Your Vendors
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Your photographer, videographer, and coordinator should be partners in building your timeline, not just recipients of it.
              </p>
              <p>
                Share your priorities with them:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>What moments matter most to you?</li>
                <li>Where do you want to feel unhurried?</li>
                <li>What traditions can you skip?</li>
                <li>How much getting-ready coverage do you actually want?</li>
              </ul>
              <p>
                A good vendor team will help you design a day that flows naturally, not one that feels like a production schedule.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">Final Thoughts</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Your wedding day will go by fast no matter what. But it doesn't have to feel rushed. Build in margin. Prioritize presence over perfection. And remember: the best moments often happen in the in-between.
              </p>
              <p className="text-accent italic">
                We help our couples build timelines that feel natural and unhurried. If you want a wedding day (and a film) that actually lets you breathe, we'd love to talk.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & Wife Photo + Film Team</p>
              <p className="text-lg font-light text-foreground/80">
                Based in Western North Carolina, available worldwide
              </p>
            </div>

            <div className="pt-8">
              <Button className="font-serif text-xl" size="lg" variant="default" asChild>
                <Link href="/inquire">Let's Plan Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
