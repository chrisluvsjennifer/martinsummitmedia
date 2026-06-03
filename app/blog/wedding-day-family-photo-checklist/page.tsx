import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Wedding Day Family Photo Checklist: How to Make Group Photos Go Smoothly | Martin Summit Media",
  description:
    "A practical wedding day family photo checklist to help group photos go faster and stress-free. Tips from professional wedding photographers on organizing family formals.",
  keywords:
    "wedding family photo checklist, wedding group photo tips, family formal photos wedding, wedding photography checklist, how to organize wedding family photos, wedding day photo list, wedding photographer tips family photos",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/wedding-family-photo-checklist.jpg"
          alt="Wedding family group photo with bride and groom surrounded by loved ones"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">May 24, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Wedding Day Family Photo Checklist: How to Make Group Photos Go Smoothly
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
              Family photos are one of the most important parts of your wedding day. They are also one of the most
              common sources of stress. Herding dozens of relatives, remembering who needs to be in which shot, and
              keeping everyone happy while the clock ticks can feel overwhelming.
            </p>

            <p>
              The good news? A little preparation goes a long way. With a solid family photo checklist and a few
              organizational tips, you can turn what feels chaotic into something smooth and even enjoyable.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Why a Family Photo Checklist Matters
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Without a clear list, family formals can drag on far longer than necessary. People wander off. Someone
                gets forgotten. You end up spending 45 minutes on photos that should have taken 15.
              </p>
              <p>
                A checklist keeps everyone accountable. It gives your photographer a roadmap. And most importantly, it
                gives you back time to enjoy your day instead of standing around wondering who is missing.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              How to Build Your Family Photo List
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Start by making two separate lists: one for each side of the family. Then prioritize.</p>
              <p>
                <strong className="font-medium">Must-have shots:</strong> These are the groupings you absolutely need.
                Immediate family, parents, grandparents, and siblings.
              </p>
              <p>
                <strong className="font-medium">Nice-to-have shots:</strong> Extended family, aunts, uncles, cousins.
                These are great to capture if time allows.
              </p>
              <p>
                <strong className="font-medium">Special requests:</strong> Maybe there is a family friend who helped
                raise you, or a mentor who means the world. Add them to the list so they are not forgotten.
              </p>
              <p>Be realistic. The longer your list, the more time you will need. We recommend keeping it to 15 to 20
                groupings maximum.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              A Sample Family Photo Checklist
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Here is a starting point you can customize based on your family structure:</p>
              <div className="bg-foreground/5 p-6 rounded-lg space-y-4">
                <p className="font-medium text-foreground">Bride&apos;s Side:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bride with parents</li>
                  <li>Bride with mom</li>
                  <li>Bride with dad</li>
                  <li>Bride with siblings</li>
                  <li>Bride with grandparents</li>
                  <li>Bride with immediate family (parents and siblings)</li>
                  <li>Bride with extended family (if time allows)</li>
                </ul>
                <p className="font-medium text-foreground pt-4">Groom&apos;s Side:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Groom with parents</li>
                  <li>Groom with mom</li>
                  <li>Groom with dad</li>
                  <li>Groom with siblings</li>
                  <li>Groom with grandparents</li>
                  <li>Groom with immediate family (parents and siblings)</li>
                  <li>Groom with extended family (if time allows)</li>
                </ul>
                <p className="font-medium text-foreground pt-4">Combined:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Couple with bride&apos;s parents</li>
                  <li>Couple with groom&apos;s parents</li>
                  <li>Couple with all parents</li>
                  <li>Couple with all grandparents</li>
                  <li>Couple with entire wedding party</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              Tips to Keep Family Photos Moving
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                <strong className="font-medium">Assign a family wrangler.</strong> This is the most important tip. Pick
                someone (not a parent or someone in the wedding party) who knows both families well and can gather
                people quickly. A cousin, family friend, or even a bridesmaid who is not in every shot works great.
              </p>
              <p>
                <strong className="font-medium">Share the list in advance.</strong> Send your family photo list to your
                photographer at least a week before the wedding. This gives them time to plan the order and estimate how
                long it will take.
              </p>
              <p>
                <strong className="font-medium">Group by family side.</strong> Do all of one side of the family first,
                then switch. This avoids people wandering off and having to track them down again.
              </p>
              <p>
                <strong className="font-medium">Start with the largest groups.</strong> Get the big group shots done
                first while everyone is present. Then work down to smaller groupings, releasing people as they finish.
              </p>
              <p>
                <strong className="font-medium">Communicate the location.</strong> Make sure family members know exactly
                where to be and when. An announcement after the ceremony or a note in the program helps.
              </p>
              <p>
                <strong className="font-medium">Build in buffer time.</strong> Family photos often take longer than
                expected. Plan for 20 to 30 minutes of formals, and do not schedule anything immediately after.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              What to Avoid
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>A few common mistakes that slow things down:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="font-medium">Too many groupings.</strong> Every additional combination adds time.
                  Be selective about what truly matters.
                </li>
                <li>
                  <strong className="font-medium">Waiting until the last minute to make the list.</strong> Trying to
                  remember everyone on the wedding day leads to forgotten people and frustration.
                </li>
                <li>
                  <strong className="font-medium">Not telling family members where to be.</strong> If people scatter
                  after the ceremony, rounding them up wastes precious time.
                </li>
                <li>
                  <strong className="font-medium">Doing family photos during cocktail hour.</strong> This can work, but
                  you will miss your own cocktail hour. Consider doing them before or immediately after the ceremony
                  instead.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              A Note on Divorced or Blended Families
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If your family situation is complicated, a little extra planning helps. Think through who is comfortable
                being photographed together and who is not. It is completely okay to do separate shots with each parent
                or step-parent.
              </p>
              <p>
                Let your photographer know about any dynamics ahead of time. They can plan the order to avoid awkward
                transitions and keep things moving smoothly.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">Final Thoughts</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Family photos do not have to be stressful. With a clear checklist, a designated wrangler, and a little
                advance communication, you can capture all the groupings that matter without eating into your day.
              </p>
              <p>
                The goal is simple: get beautiful photos of the people you love, then get back to celebrating.
              </p>
              <p className="text-accent italic">
                We work with our couples to plan family formals that feel organized and relaxed. If you want a wedding
                day that runs smoothly from start to finish, we would love to help.
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
                <Link href="/inquire">Start the Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
