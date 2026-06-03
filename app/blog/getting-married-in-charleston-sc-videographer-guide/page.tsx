import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Getting Married in Charleston SC | What to Look for in a Wedding Videographer",
  description:
    "Planning a Charleston, SC wedding? Learn what to look for in a wedding videographer, from understanding the city's unique light and venues to finding someone who captures the charm of the Lowcountry.",
  keywords:
    "Charleston wedding videographer, Charleston SC wedding, Lowcountry wedding videographer, Charleston wedding venues, South Carolina wedding videographer, what to look for wedding videographer, Charleston wedding film",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/charleston-wedding-waterfront.jpg"
          alt="Beautiful Charleston waterfront wedding venue at sunset"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">January 18, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Getting Married in Charleston, SC: What to Look for in a Wedding Videographer
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
              Charleston, South Carolina is one of the most romantic cities in the country. With its cobblestone
              streets, historic architecture, waterfront views, and Southern charm, it's no wonder couples from all over
              choose to say "I do" here.
            </p>
            <p>
              But planning a wedding in Charleston comes with its own set of considerations, especially when it comes to
              capturing your day on film. The right videographer can turn your Charleston wedding into a timeless
              cinematic experience. The wrong one might miss what makes this city, and your story, so special.
            </p>
            <p>Here's what to look for when choosing a wedding videographer for your Charleston celebration.</p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Someone Who Understands Charleston's Unique Light
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Charleston has a quality of light that's unlike anywhere else. The golden hour glow over the harbor, the
                soft diffused light filtering through Spanish moss, the way afternoon sun plays off historic brick and
                pastel facades.
              </p>
              <p>
                A videographer who has worked in Charleston before will understand how to use this light to your
                advantage. They'll know when and where to position you for the most flattering, cinematic shots. They'll
                anticipate the way the sun moves across your venue throughout the day.
              </p>
              <p>
                Ask potential videographers about their experience filming in Charleston specifically. Look at their
                portfolio for examples shot in similar lighting conditions.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Experience with Charleston's Iconic Venues
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                From historic plantations like Boone Hall and Magnolia Plantation to waterfront venues like The Cedar
                Room and Cannon Green, Charleston offers an incredible variety of wedding venues. Each comes with its
                own layout, lighting challenges, and opportunities.
              </p>
              <p>A videographer familiar with Charleston venues will know:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The best angles and vantage points at each location</li>
                <li>How to navigate tight historic spaces without being intrusive</li>
                <li>Where the most cinematic backdrops are hidden</li>
                <li>How to work with venue coordinators and other vendors</li>
              </ul>
              <p>
                If you've already booked your venue, ask if the videographer has filmed there before. If not, a good
                videographer will do a site visit beforehand to plan their shots.
              </p>
            </div>
          </div>

          {/* Charleston Wedding Film Example 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-center text-lg font-light text-foreground/70 mb-6 font-serif italic">
              A Charleston wedding we had the honor of filming
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/tMr5oXI9V9c"
                title="Charleston Wedding Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              A Style That Matches the Charleston Aesthetic
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Charleston weddings tend to have a certain elegance to them. Classic, romantic, timeless. Your
                videographer's style should complement that.
              </p>
              <p>When reviewing portfolios, pay attention to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Color grading: Does the footage feel warm and romantic, or overly filtered and trendy? Trendy edits
                  age quickly.
                </li>
                <li>
                  Pacing: Is the film slow and intentional, or rushed and chaotic? Charleston weddings deserve a pace
                  that lets moments breathe.
                </li>
                <li>
                  Storytelling approach: Does the videographer capture the feeling of the day, or just a highlight
                  reel of pretty shots?
                </li>
              </ul>
              <p>
                Look for a videographer whose existing work already feels like the film you want, not someone who will
                have to adapt their style significantly.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              The Ability to Handle Charleston's Weather
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If you're planning a Charleston wedding, you know the weather can be unpredictable. Summer humidity,
                afternoon thunderstorms, and the occasional surprise rain shower are all part of the Lowcountry
                experience.
              </p>
              <p>An experienced Charleston videographer will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Have backup plans for weather changes</li>
                <li>Know how to protect their equipment in humid conditions</li>
                <li>Embrace unexpected weather as part of your story rather than a setback</li>
                <li>Be flexible and calm when plans need to shift</li>
              </ul>
              <p>
                Some of the most beautiful wedding footage comes from unexpected moments. A videographer who sees rain
                as an opportunity rather than a problem is worth their weight in gold.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Someone Who Captures Audio Properly
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Charleston venues often have unique acoustic challenges. Outdoor ceremonies near the water, historic
                churches with echo, receptions in converted warehouses. Poor audio can ruin an otherwise beautiful
                wedding film.
              </p>
              <p>Ask potential videographers about their audio setup:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do they use wireless lapel microphones on the couple and officiant?</li>
                <li>Do they have backup audio recording?</li>
                <li>How do they handle outdoor ceremonies with wind or ambient noise?</li>
                <li>Can they tap into the DJ or band's sound system for speeches and toasts?</li>
              </ul>
              <p>
                Your vows, your speeches, the laughter during toasts. These are the moments you'll want to hear clearly
                for years to come.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              A Documentary Approach Over Staged Moments
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                The best Charleston wedding films feel real. They capture the genuine emotion, the candid moments, the
                little glances between you and your partner that no one else noticed.
              </p>
              <p>
                Be wary of videographers who rely heavily on staged, overly directed shots. While some direction is
                helpful, your wedding film shouldn't feel like a performance. It should feel like your day.
              </p>
              <p>
                Look for a videographer who takes a documentary approach. Someone who blends into the background,
                captures moments as they happen, and tells your story authentically.
              </p>
            </div>
          </div>

          {/* Charleston Wedding Film Example 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-center text-lg font-light text-foreground/70 mb-6 font-serif italic">
              Another Charleston love story we captured
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/lE3DtsLEQpY"
                title="Charleston Wedding Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Questions to Ask Before Booking
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Before you sign a contract, here are some key questions to ask:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Have you filmed at my venue before? Can I see examples?</li>
                <li>How would you describe your filming style?</li>
                <li>What's your audio setup for ceremonies and speeches?</li>
                <li>How do you handle unexpected weather or timeline changes?</li>
                <li>What's included in your packages? What's the turnaround time?</li>
                <li>Will you be the one filming, or will you send a team member?</li>
                <li>How many weddings do you take per weekend?</li>
              </ul>
              <p>
                The answers to these questions will tell you a lot about whether this videographer is the right fit for
                your Charleston wedding.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Your Charleston Wedding Deserves to Be Remembered
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Charleston is a city built on history, beauty, and romance. Your wedding film should reflect that. It
                should capture not just what happened, but how it felt. The way the light hit the harbor as you said
                your vows. The sound of your loved ones laughing during toasts. The quiet moment you stole together
                between the ceremony and reception.
              </p>
              <p>
                Take your time choosing a videographer. Watch their full films, not just trailers. Trust your gut about
                who feels like the right fit.
              </p>
              <p>
                The right videographer will give you a film you'll want to watch over and over again, for the rest of
                your lives.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & wife videography team</p>
              <p className="text-lg font-light text-foreground/80">
                Serving Charleston, Charlotte, Asheville & beyond
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
