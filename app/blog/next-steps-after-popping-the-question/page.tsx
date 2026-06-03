import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Next Steps After Popping the Question | Martin Summit Media",
  description:
    "Just got engaged? Here's a practical guide to the first steps you should take after the proposal, from celebrating the moment to planning your dream wedding or elopement.",
  keywords:
    "just engaged what to do, next steps after engagement, engagement planning tips, wedding planning guide, elopement planning, newly engaged couple advice, wedding videographer tips",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/next-steps-after-engagement.jpg"
          alt="Newly engaged couple walking together at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">February 9, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Next Steps After Popping the Question
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
              They said yes. The ring is on. The tears have been shed (happy ones, of course). Now you're engaged, and
              the excitement is overwhelming in the best possible way.
            </p>
            <p>
              But once the initial rush settles, a lot of couples find themselves asking the same thing:
              <em> "So... what do we do now?"</em>
            </p>
            <p>
              Whether you're planning a grand celebration or an intimate elopement in the mountains, here's a
              down-to-earth guide to the first steps after getting engaged.
            </p>
          </div>

          {/* Step 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              1. Soak It In Before You Plan Anything
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Seriously. Before you open Pinterest, before you text your group chat, before you start Googling venues
                at midnight, just be present with your partner.
              </p>
              <p>
                This moment, right here, only happens once. Go to dinner. Take a walk. Sit on the couch and stare at
                the ring together. Let the weight of what just happened actually land.
              </p>
              <p>The planning can wait a few days. The feeling of being newly engaged cannot.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              2. Share the News on Your Own Terms
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Call your parents. FaceTime your best friend. Tell the people who matter most before you post anything
                publicly.
              </p>
              <p>
                There's no rush to announce it on social media. In fact, some of the most meaningful engagement
                celebrations happen in small, private moments, not public ones.
              </p>
              <p>
                When you are ready to share, do it in a way that feels like you. A simple photo, a heartfelt caption, or
                even just a quiet update. There's no formula.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              3. Talk About What Kind of Day You Actually Want
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Before you start booking anything, sit down together and have an honest conversation about what matters
                most to you. Not what your family expects. Not what social media says you should do. What feels right for
                the two of you.
              </p>
              <p>Ask yourselves:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do we want a big wedding or something intimate?</li>
                <li>Are we drawn to a venue, a mountaintop, a beach, or a backyard?</li>
                <li>What's our budget range, honestly?</li>
                <li>What moments matter to us the most?</li>
                <li>How do we want to feel on our wedding day?</li>
              </ul>
              <p>
                These conversations will shape every decision that follows, so take your time with them.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              4. Set a Rough Budget Early
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Money can be an uncomfortable topic, but it's one of the most important conversations to have before you
                start reaching out to vendors.
              </p>
              <p>
                You don't need an exact number yet, but having a general range helps you make realistic decisions about
                venues, vendors, and guest count. It also helps prevent the stress of overcommitting financially early on.
              </p>
              <p>
                Remember: the most meaningful weddings aren't the most expensive ones. They're the ones planned with
                intention.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              5. Pick a Season or General Timeframe
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                You don't need an exact date right away, but narrowing it down to a season or timeframe will help when
                you start reaching out to venues and vendors.
              </p>
              <p>
                Think about what matters to you: fall foliage in the mountains, spring blooms, summer golden hour, or a
                cozy winter celebration. Each season brings its own magic, and the right time of year can completely shape
                the look and feel of your day.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              6. Book the Vendors That Matter Most to You First
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Once you have a rough idea of your budget, timeline, and style, it's time to start reaching out to
                vendors. But don't try to book everything at once.
              </p>
              <p>Start with the ones that matter most to you and tend to book earliest:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Venue (this often determines your date)</li>
                <li>Photographer and videographer</li>
                <li>Wedding planner or coordinator (if you want one)</li>
              </ul>
              <p>
                These vendors shape the core of your experience. Take your time finding people whose work speaks to you
                and whose personality feels like the right fit.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              7. Don't Forget About the Film
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Here's something couples tell us all the time: <em>"I wish I had booked a videographer sooner."</em>
              </p>
              <p>
                Your photos will capture how the day looked. Your film will capture how it felt: the laughter, the
                tears, the way your partner's voice cracked during their vows, the sound of your favorite song playing
                during your first dance.
              </p>
              <p>
                A wedding film isn't a luxury. It's the only way to truly relive the emotion of your day, and it becomes
                more valuable with every passing year.
              </p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              8. Give Yourself Grace
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Planning a wedding can feel overwhelming, especially in the beginning when everything seems urgent and
                exciting at the same time.
              </p>
              <p>
                It's okay to not have all the answers right away. It's okay to change your mind. It's okay to take a
                week off from planning altogether. The best weddings come together when couples approach the process with
                patience, not pressure.
              </p>
              <p>
                You're not behind. You're right where you're supposed to be.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">Final Thoughts</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Getting engaged is one of life's most beautiful chapters. And the truth is, there's no wrong way to
                start planning. Just start with what matters most: each other.
              </p>
              <p>
                The details will come. The venue will reveal itself. The right vendors will feel like the right fit. But
                at the center of all of it should be the two of you and the kind of day you want to remember forever.
              </p>
              <p className="text-accent italic">
                If you're newly engaged and thinking about a cinematic wedding film or adventure elopement, we'd love to
                hear your story.
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
                <a href="/inquire">Tell Your Story</a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
