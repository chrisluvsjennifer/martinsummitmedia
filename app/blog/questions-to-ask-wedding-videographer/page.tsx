import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "10 Questions to Ask Your Wedding Videographer | Martin Summit Media",
  description:
    "Choosing the right wedding videographer is crucial. Here are 10 essential questions to ask before booking to ensure you find the perfect fit for your story.",
  keywords:
    "wedding videographer questions, choosing wedding videographer, wedding film questions, elopement videographer, wedding planning tips, cinematic wedding films",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/wedding-videographer-filming-bride-and-groom.jpg"
          alt="Wedding videographer filming couple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">December 31, 2025</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              10 Questions to Ask Your Wedding Videographer
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
              Choosing the right wedding videographer is one of the most important decisions you'll make while planning
              your wedding or elopement. Your film will be one of the only things that allows you to relive your day
              exactly as it felt: the movement, the emotion, the moments you didn't even realize were happening.
            </p>

            <p>
              Before you book, here are 10 essential questions to ask your wedding videographer to make sure you're
              choosing the right fit for your story.
            </p>
          </div>

          {/* Question 1 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              1. How would you describe your filming and storytelling style?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Every videographer tells stories differently. Some focus on a documentary approach, others create
                cinematic, story-driven films, and some blend both.
              </p>
              <p>
                Ask to see full films, not just highlight reels, so you can understand how they capture emotion, pacing,
                and real moments throughout the day.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              2. Have you filmed weddings or elopements similar to ours?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Whether you're planning a traditional wedding, an intimate elopement, or an adventurous mountaintop
                ceremony, experience matters.
              </p>
              <p>
                A videographer who understands your type of day will know how to adapt to timelines, lighting, terrain,
                weather, and unexpected moments.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">3. What's included in your packages?</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Make sure you understand:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hours of coverage</li>
                <li>Number of videographers</li>
                <li>Type and length of films delivered</li>
                <li>Audio coverage (vows, speeches, letters)</li>
                <li>Travel considerations</li>
              </ul>
              <p>Clear expectations upfront prevent surprises later.</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">4. How do you capture audio?</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Great audio is just as important as great visuals.</p>
              <p>Ask how they record:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vows</li>
                <li>Personal letters</li>
                <li>Ceremony audio</li>
                <li>Toasts or speeches</li>
              </ul>
              <p>High-quality audio is what transforms a beautiful video into a powerful, emotional film.</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">5. How do you work with photographers?</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Your videographer and photographer should work together, not compete for moments.</p>
              <p>Ask how they coordinate during:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Couple portraits</li>
                <li>The ceremony</li>
                <li>First looks and exits</li>
              </ul>
              <p>A seamless team creates a calmer, more enjoyable experience for you.</p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              6. How do you handle low light or unpredictable conditions?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Sunsets, indoor venues, weather changes, and dim receptions can be challenging.</p>
              <p>
                An experienced videographer will be prepared with proper equipment and techniques to keep your film
                looking cinematic, no matter the conditions.
              </p>
            </div>
          </div>

          {/* Question 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              7. How involved will you be in planning and timeline guidance?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Some videographers simply show up and film. Others help guide timelines, lighting decisions, and
                location flow to ensure the best possible film.
              </p>
              <p>Ask how involved they are before the wedding and whether they offer planning support.</p>
            </div>
          </div>

          {/* Question 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">8. What is your turnaround time?</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Ask when you can expect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Teasers or sneak peeks</li>
                <li>Final films</li>
                <li>Any additional edits</li>
              </ul>
              <p>Knowing the timeline helps set expectations and builds trust.</p>
            </div>
          </div>

          {/* Question 9 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              9. Can we make changes or add edits later?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Life happens, and sometimes couples want:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full ceremony edits</li>
                <li>Toasts edits</li>
                <li>Extended films</li>
              </ul>
              <p>Ask what options are available after delivery and how additional edits are handled.</p>
            </div>
          </div>

          {/* Question 10 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif mb-6">
              10. Why do you love filming weddings and elopements?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>This question tells you everything.</p>
              <p>
                A videographer who truly loves storytelling, connection, and real moments will approach your day with
                intention, care, and creativity, not just as another booking.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">Final Thoughts</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Your wedding film should feel like you: honest, emotional, and timeless. Asking the right questions
                ensures you're not just hiring a videographer, but choosing someone you trust to tell your story.
              </p>
              <p className="text-accent italic">
                If you're planning a wedding or adventure elopement and want a film that feels cinematic, authentic, and
                deeply personal, we'd love to connect.
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
