import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "When to Book Your Wedding Videographer (And Why Earlier is Better) | Martin Summit Media",
  description:
    "Wondering when to book your wedding videographer? Learn the ideal timeline for securing your videographer and why booking early matters more than you might think.",
  keywords:
    "when to book wedding videographer, wedding videographer timeline, wedding planning timeline, book wedding vendors, elopement videographer booking, wedding film booking",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/wedding-videographer-filming-couple.jpg"
          alt="Wedding videographer capturing couple's moment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">March 11, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              When to Book Your Wedding Videographer (And Why Earlier is Better)
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
              You just got engaged. The excitement is still fresh, and suddenly everyone is asking about dates, venues, and vendors. Somewhere in that whirlwind, you might wonder: when should I actually book my wedding videographer?
            </p>

            <p>
              The short answer? Earlier than you think. Here's why timing matters, and how to approach it without stress.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              The Ideal Timeline: 9-12 Months Out
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                For most weddings, the sweet spot for booking your videographer is 9-12 months before your date. This gives you enough time to research, compare styles, and connect with someone who truly feels right.
              </p>
              <p>
                But here's what many couples don't realize: the best videographers often book up 12-18 months in advance, especially for popular wedding months like October, May, and June.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Why Earlier Booking Matters
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                <strong className="font-medium">You get your first choice.</strong> When you wait, you're choosing from whoever is left. When you book early, you're choosing the person whose work genuinely moves you.
              </p>
              <p>
                <strong className="font-medium">Peak dates fill fast.</strong> Fall weddings in the mountains, Saturday evenings in spring, destination elopements in iconic locations: these book quickly. If your heart is set on a specific date and location, don't wait.
              </p>
              <p>
                <strong className="font-medium">You have time to build a relationship.</strong> The best wedding films come from videographers who understand you as a couple. Booking early gives you time to connect, share your vision, and plan together.
              </p>
              <p>
                <strong className="font-medium">Less stress overall.</strong> One less vendor to worry about means you can focus on other details without that nagging "we still need to find a videographer" feeling.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              What If You're Planning a Shorter Engagement?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Not everyone has a year to plan, and that's okay. If you're working with a shorter timeline (3-6 months), here's what to do:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reach out immediately to videographers you love</li>
                <li>Be flexible with your date if possible</li>
                <li>Consider weekday or off-season dates, which are often more available</li>
                <li>Be upfront about your timeline so vendors can tell you quickly if they're available</li>
              </ul>
              <p>
                Even with less time, you can still find someone incredible. It just requires moving quickly and decisively.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              The Order of Booking Vendors
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                While every couple's priorities are different, here's a general order that works well:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong className="font-medium">Venue</strong> - This locks in your date and location</li>
                <li><strong className="font-medium">Photographer & Videographer</strong> - These are often the hardest to replace last minute</li>
                <li><strong className="font-medium">Planner or Coordinator</strong> - If you're using one</li>
                <li><strong className="font-medium">Caterer & DJ/Band</strong> - Reception essentials</li>
                <li><strong className="font-medium">Florist, Hair & Makeup, Officiant</strong> - Important, but often have more availability</li>
              </ol>
              <p>
                Your photographer and videographer should be among your first calls after securing your venue. The visual story of your day depends on it.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Elopements: A Different Timeline
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Planning an elopement? The timeline can be more flexible, but it depends on your location. Popular elopement destinations like:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Blue Ridge Mountains</li>
                <li>Pacific Northwest forests</li>
                <li>Utah desert landscapes</li>
                <li>Iceland, Scotland, or other international locations</li>
              </ul>
              <p>
                These can still book up quickly, especially during peak seasons. For destination elopements, booking 6-9 months out is ideal to ensure your videographer can plan travel and logistics.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Signs You've Found the Right Videographer
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Before you book, make sure you feel confident about your choice. The right videographer should:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Have a portfolio that makes you feel something</li>
                <li>Communicate clearly and warmly</li>
                <li>Understand your vision for the day</li>
                <li>Make you feel comfortable, not sold to</li>
                <li>Offer transparent pricing and clear deliverables</li>
              </ul>
              <p>
                Trust your gut. If watching their work brings you to tears (in a good way), that's a pretty good sign.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">Final Thoughts</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Your wedding video is one of the only ways you'll truly relive your day: the emotion, the laughter, the tears, the vows you might not fully remember saying. Booking early ensures you get the storyteller who will capture it exactly the way it deserves to be captured.
              </p>
              <p className="text-accent italic">
                If you're in the early stages of planning and want to learn more about our approach, we'd love to hear from you. No pressure, just a conversation about your story.
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
                <Link href="/inquire">Check Our Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
