import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "When to Book Your Wedding Videographer (And Why Earlier is Better) | Martin Summit Media",
  description:
    "Wondering when to book your wedding videographer? Learn the ideal booking timeline, why earlier is better, and what happens when you wait too long. Tips from an NC wedding videographer.",
  keywords:
    "when to book wedding videographer, wedding videographer booking timeline, how far in advance to book wedding videographer, wedding vendor booking, NC wedding videographer, wedding planning timeline, book wedding vendors",
  openGraph: {
    title: "When to Book Your Wedding Videographer (And Why Earlier is Better)",
    description:
      "Learn the ideal booking timeline for your wedding videographer and why earlier is always better.",
    images: ["/images/blog/when-to-book-wedding-videographer.jpg"],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/when-to-book-wedding-videographer.jpg"
          alt="Couple planning their wedding with vendors"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">March 18, 2026</p>
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
              One of the most common questions we get from newly engaged couples is: "When should we book our wedding
              videographer?"
            </p>
            <p>
              The short answer? As soon as you have your date and venue locked in. The longer answer involves
              understanding why timing matters, what happens when you wait, and how to make the most of booking early.
            </p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              The Ideal Booking Timeline
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                For most couples, we recommend booking your videographer <strong>9-14 months</strong> before your
                wedding date. This gives you the best chance of securing your preferred vendor while their calendar
                still has availability.
              </p>
              <p>Here's a general vendor booking timeline:</p>
              <div className="bg-foreground/5 p-6 rounded-lg space-y-3 text-base">
                <p>
                  <strong>12-18 months out:</strong> Venue, wedding planner/coordinator
                </p>
                <p>
                  <strong>9-14 months out:</strong> Photographer, videographer, caterer, DJ/band
                </p>
                <p>
                  <strong>6-9 months out:</strong> Florist, officiant, transportation
                </p>
                <p>
                  <strong>3-6 months out:</strong> Hair and makeup, cake/desserts, rentals
                </p>
              </div>
              <p>
                Notice that videographer falls in the same tier as photographer. These are both vendors with limited
                availability (we can only film one wedding per day) and high demand during peak wedding season.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Why Earlier is Better
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Booking early isn't just about securing a date. It comes with real benefits:</p>
              <p>
                <strong>1. You get your first choice</strong>
              </p>
              <p>
                When you book early, you're choosing from all available vendors instead of whoever happens to be left.
                This is especially important if you've found a videographer whose style resonates with you.
              </p>
              <p>
                <strong>2. Popular dates book fast</strong>
              </p>
              <p>
                Saturdays in October? Fall foliage weekends in the mountains? Spring garden weddings? These dates often
                book 12+ months in advance. If you're planning a wedding during peak season (April-June,
                September-November), every week you wait reduces your options.
              </p>
              <p>
                <strong>3. Less stress, more excitement</strong>
              </p>
              <p>
                There's something freeing about crossing "book videographer" off your list early. Instead of scrambling
                to find someone available, you can focus on the fun parts of wedding planning knowing your film is
                handled.
              </p>
              <p>
                <strong>4. Better communication and planning</strong>
              </p>
              <p>
                When you book early, there's more time to build a relationship with your videographer. More time for
                calls, questions, and collaboration on your timeline. This usually results in a better experience and a
                better film.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              What Happens When You Wait Too Long
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                We hate having to turn couples away, but it happens regularly, especially for fall weddings and popular
                dates. Here's what waiting too long can mean:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your preferred videographer is already booked</li>
                <li>You're left choosing from whoever is available, not who fits your style</li>
                <li>You may have to compromise on experience level or quality</li>
                <li>Rush decisions lead to less certainty about your choice</li>
                <li>In some cases, you might not find anyone at all</li>
              </ul>
              <p>
                We've had couples reach out 3-4 months before their wedding, devastated that they waited and now can't
                find a videographer they love. It's heartbreaking, and it's avoidable.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              But What If We're Not Sure We Want Video?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                This is incredibly common. Many couples aren't sure if wedding videography is worth the investment,
                especially early in the planning process. Here's our honest take:
              </p>
              <p>
                <strong>Talk to a few videographers anyway.</strong> Most of us offer free consultations and are happy
                to answer questions without any pressure. You might be surprised at how affordable packages can be, or
                how different cinematic wedding films are from what you expected.
              </p>
              <p>
                <strong>Consider the regret factor.</strong> We've never met a couple who regretted having a wedding
                film. We've met many who regretted not having one.
              </p>
              <p>
                <strong>You can always decide not to book.</strong> But you can't book someone who's no longer
                available. If there's even a chance you want video, start the conversation early.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              What to Do Before You Book
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Before you reach out to videographers, it helps to have a few things figured out:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Your date and venue</strong> - Most videographers need these to check availability
                </li>
                <li>
                  <strong>A rough budget range</strong> - This helps narrow down who's within reach
                </li>
                <li>
                  <strong>What style resonates with you</strong> - Watch a few wedding films and notice what you like
                </li>
                <li>
                  <strong>What's most important to you</strong> - Is it the ceremony? The speeches? The dancing?
                </li>
              </ul>
              <p>
                You don't need every detail figured out. A good videographer will help guide you through the rest.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Questions to Ask When You Reach Out
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>When you're ready to inquire, here are some questions worth asking:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Are you available on our date?</li>
                <li>What packages do you offer and what's included?</li>
                <li>What's your filming style and approach?</li>
                <li>How many weddings have you filmed?</li>
                <li>What's the typical turnaround time for the final film?</li>
                <li>Do you work with a second shooter/videographer?</li>
                <li>Can we see a few full wedding films (not just highlight reels)?</li>
              </ul>
              <p>
                The answers to these questions will help you understand if a videographer is the right fit, beyond just
                liking their portfolio.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Ready to Start the Conversation?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If you're engaged and have your date, now is the perfect time to reach out. Even if you're still in the
                early stages of planning, a quick conversation can help you understand your options and make an informed
                decision.
              </p>
              <p>
                At Martin Summit Media, we film a limited number of weddings each year so we can give every couple our
                full attention. We'd love to hear about your plans and see if we're a good fit.
              </p>
              <p>No pressure. No obligation. Just a real conversation about your day and what matters to you.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & wife videography team</p>
              <p className="text-lg font-light text-foreground/80">
                Based in Western North Carolina, serving NC & SC
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <Button className="font-serif text-xl" size="lg" variant="default" asChild>
                <Link href="/inquire">Check Our Availability</Link>
              </Button>
              <p className="text-sm text-foreground/60">Limited 2026 dates remaining</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
