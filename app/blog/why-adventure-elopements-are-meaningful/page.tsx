import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Why Adventure Elopements Are the Most Meaningful Way to Get Married | Martin Summit Media",
  description:
    "Discover why adventure elopements have become one of the most meaningful and authentic ways to say I do. Learn how eloping transforms not just the wedding day, but the entire experience.",
  keywords:
    "adventure elopement, meaningful wedding, intimate ceremony, mountain elopement, why elope, elopement benefits",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/adventure-elopement-mountaintop.jpg"
          alt="Couple exchanging vows on a mountaintop at sunset with Mount Rainier in the background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">December 11, 2025</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Why Adventure Elopements Are the Most Meaningful Way to Get Married
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
              For so many couples, the traditional wedding timeline doesn't feel like them. The strict schedules, the
              crowded venues, the expectations, the pressure: it can all start to overshadow the very reason you're
              getting married in the first place.
            </p>

            <p>
              That's why more couples than ever are choosing a different path. A quieter one. A wilder one. A path that
              leads to mountaintops, forests, waterfalls, and winding trails.
            </p>

            <p className="text-xl text-accent italic">
              Welcome to the world of adventure elopements, where the focus isn't on perfection, but on presence.
            </p>

            <p>
              At Martin Summit Media, we've had the honor of documenting countless love stories throughout the Blue
              Ridge Mountains and beyond. And we've seen firsthand how choosing an adventure elopement transforms not
              just the wedding day, but the entire experience.
            </p>

            <p>
              Here's why adventure elopements have become one of the most meaningful and authentic ways to say "I do."
            </p>
          </div>

          {/* Section 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              1. The Day Becomes Fully Yours
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                When you elope, there's no pressure to rush through moments just to stay on schedule. No back-to-back
                timelines. No expectations from 200 guests.
              </p>
              <p>
                Just you, your partner, the landscape around you, and the freedom to slow down and soak everything in.
              </p>
              <p className="font-medium">Adventure elopements give you:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Room to breathe</li>
                <li>Space to be yourselves</li>
                <li>The chance to deeply connect throughout the entire day</li>
              </ul>
              <p>
                Instead of worrying about chair counts or reception entrances, you get to wander, explore, laugh, cry,
                and truly feel the moment.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              2. The Experience Feels More Intimate and Intentional
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>When you remove the noise and distraction, every part of the day carries weight and meaning.</p>
              <p className="italic text-accent">
                Reading private vows on a ridge at sunrise. Holding hands as the wind moves through the tall grass.
                Sharing quiet moments without an audience.
              </p>
              <p>
                Adventure elopements allow you to craft a day that reflects your relationship: raw, real, emotional, and
                beautifully unscripted.
              </p>
              <p>
                As filmmakers and photographers, these are the moments we live for. The kind where the world falls away
                and all that's left is the two of you.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              3. You Create Memories Instead of Recreating Traditions
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Traditional weddings often center around rituals others expect you to include. Adventure elopements flip
                that completely.
              </p>
              <p>
                Want to get ready together in a cozy cabin? Want to hike to a summit in your wedding clothes? Want to
                picnic by a lake or dance barefoot in the grass?
              </p>
              <p className="text-accent font-medium">You can.</p>
              <p>
                Adventure elopements allow you to build a wedding day that feels like a reflection of your life
                together, not someone else's checklist.
              </p>
              <p>
                Your wedding becomes a shared experience, an adventure you'll remember every time you look at your
                photos and film.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              4. The Locations Are Breathtaking (and Meaningful)
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Whether it's a quiet overlook near Asheville, a sweeping mountain bald at Max Patch, or a hidden
                waterfall in the forest: these places carry emotion.
              </p>
              <p className="font-medium">They remind you of:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>The trips you've taken</li>
                <li>The places you've explored</li>
                <li>The memories you've created together</li>
              </ul>
              <p>Your wedding day becomes part of that story.</p>
              <p>
                The landscape becomes a character in your film: painting your love story with golden light, foggy
                ridges, and endless skies.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              5. Your Photos and Film Become Works of Art
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Adventure elopements aren't just visually stunning: they're emotional.</p>
              <p className="italic text-accent">
                The wind in your hair. The way the terrain pulls you close. The laughter that comes from hiking in
                wedding attire. The glow of blue hour settling over the mountains.
              </p>
              <p>Every moment becomes a cinematic frame.</p>
              <p>
                This is why we love what we do: the storytelling is richer, deeper, more intentional. Your film doesn't
                just document your day; it feels like stepping into your story.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              6. Less Stress, More Connection
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Without a rigid timeline or dozens of people to manage, the day feels calm and grounded.</p>
              <p className="font-medium">Most couples tell us:</p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-accent">
                "We didn't feel stressed at all. We actually got to enjoy our wedding."
              </blockquote>
              <p>
                You're able to let go of the noise, be present with each other, and focus on what truly matters: your
                commitment and connection.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              7. It's a Celebration That Reflects Your Relationship
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If your relationship is built on adventure, travel, spontaneity, or simply a deep love for nature: an
                elopement lets you honor that.
              </p>
              <p>It's a wedding day that feels like stepping into your story, not someone else's expectations.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Is an Adventure Elopement Right for You?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p className="font-medium">If you want a wedding day that feels:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Intimate</li>
                <li>Emotional</li>
                <li>Free-spirited</li>
                <li>Authentic</li>
                <li>And deeply meaningful</li>
              </ul>
              <p>Then yes, an adventure elopement might be the perfect way to celebrate your love.</p>
              <p className="text-accent italic">And we'd be honored to help bring it to life.</p>
              <p>
                As a husband-and-wife photo + film team, we guide you through every step: from location scouting and
                timelines to capturing the moments that unfold naturally along the way.
              </p>
              <p className="text-xl font-medium text-center pt-8">
                Because your love deserves to be remembered the way it felt.
              </p>
            </div>

            <div className="text-center pt-12">
              <Button className="font-serif text-xl" size="lg" variant="default" asChild>
                <a href="/inquire">Start Your Adventure</a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
