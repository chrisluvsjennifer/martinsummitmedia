import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "What to Expect When Getting Married at Pretty Place Chapel | NC Wedding Videographer",
  description:
    "Planning a wedding at Pretty Place Chapel in the Blue Ridge Mountains? Learn what to expect from this iconic open-air chapel, from sunrise ceremonies to filming tips from a preferred vendor.",
  keywords:
    "Pretty Place Chapel wedding, Pretty Place Chapel videographer, YMCA Camp Greenville wedding, Blue Ridge Mountains wedding, NC mountain wedding, Pretty Place Chapel what to expect, Pretty Place preferred vendor, sunrise wedding Blue Ridge",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="https://img.youtube.com/vi/y6xKAsmRDLk/maxresdefault.jpg"
          alt="Pretty Place Chapel wedding ceremony with mountain views"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">January 20, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              What to Expect When Getting Married at Pretty Place Chapel
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
              There are few wedding venues as breathtaking as Pretty Place Chapel. Perched on the edge of the Blue Ridge
              Mountains at YMCA Camp Greenville in Cleveland, South Carolina, this open-air stone chapel offers
              panoramic views that feel almost otherworldly.
            </p>
            <p>
              If you're considering Pretty Place for your wedding, you're probably wondering what to expect. As a{" "}
              <strong>preferred vendor at Pretty Place Chapel</strong>, we've had the honor of filming many weddings
              here and know this venue intimately. Here's everything you need to know to plan your day.
            </p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              The Chapel Itself
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Pretty Place Chapel, officially known as the Fred W. Symmes Chapel, was built in 1941. The stone
                structure features an open-air design with no back wall, just a massive stone cross framing the endless
                mountain vista beyond.
              </p>
              <p>
                The chapel seats approximately 80 guests on wooden pews, though many couples choose to have guests stand
                or bring additional seating for larger parties. The intimate setting creates a powerful sense of
                togetherness as everyone witnesses your vows against that unforgettable backdrop.
              </p>
              <p>
                There's something deeply moving about exchanging vows in a space that feels both sacred and wild. The
                mountains stretch out before you, the sky opens above, and it's just you, your partner, and the people
                who love you most.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Timing Your Ceremony
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Pretty Place is a popular venue, especially during peak wedding season. The chapel is available for
                ceremonies only (no receptions on-site), so you'll need to plan for a separate reception venue
                elsewhere.
              </p>
              <p>Ceremony times are typically offered at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sunrise ceremonies (the most coveted slots)</li>
                <li>Morning ceremonies</li>
                <li>Afternoon ceremonies</li>
                <li>Sunset ceremonies</li>
              </ul>
              <p>
                Sunrise ceremonies are absolutely magical. Watching the sun rise over the mountains as you say your vows
                is an experience you'll never forget. Just be prepared for an early wake-up call. Getting ready often
                starts around 4:00 or 5:00 AM.
              </p>
              <p>
                Afternoon ceremonies offer beautiful golden light, especially in fall when the leaves are changing. The
                mountains take on a warm glow that's incredibly romantic.
              </p>
              <p>
                Sunset ceremonies provide dramatic, golden-hour light as the sun dips behind the mountains. The sky often
                erupts in shades of orange, pink, and purple, creating an unforgettable backdrop for your vows.
              </p>
            </div>
          </div>

          {/* Wedding Film Example 1 - Kailey & Jacob */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-center text-lg font-light text-foreground/70 mb-6 font-serif italic">
              Kailey & Jacob's emotional Pretty Place Chapel wedding
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/y6xKAsmRDLk"
                title="Kailey & Jacob Pretty Place Chapel Wedding Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Weather and Backup Plans
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Because Pretty Place is open-air, weather is always a consideration. The mountains can be unpredictable.
                Fog, rain, and wind are all possibilities, even in summer.
              </p>
              <p>Here's what to keep in mind:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Temperature:</strong> It's usually 10-15 degrees cooler at Pretty Place than in the
                  surrounding lowlands. Bring wraps or jackets for guests, especially for sunrise ceremonies.
                </li>
                <li>
                  <strong>Fog:</strong> Morning fog is common and can actually create incredibly dramatic, moody footage.
                  Some of our favorite shots have come from foggy mornings.
                </li>
                <li>
                  <strong>Rain:</strong> Light rain often passes quickly. Have umbrellas on hand, and trust that the
                  ceremony will still be beautiful.
                </li>
                <li>
                  <strong>Wind:</strong> The chapel is exposed, so veils, loose hair, and lightweight fabrics will blow.
                  Plan accordingly or embrace it.
                </li>
              </ul>
              <p>
                The venue does have an indoor backup space available in case of severe weather, but honestly, most
                couples push through light rain or fog because the views are worth it.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              What to Know About Getting Ready
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Pretty Place does have a bridal room on-site for brides to use before the ceremony. However, it's
                important to know that the space is limited and the lighting isn't ideal for getting-ready photos. For
                this reason, many couples choose to get ready elsewhere and use the bridal room for final touch-ups only.
              </p>
              <p>Popular getting-ready options include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stay at a nearby cabin or Airbnb the night before and get ready there</li>
                <li>Get ready at a hotel in Greenville and drive up</li>
                <li>Use the bridal suite at their reception venue if it's available early</li>
              </ul>
              <p>
                For sunrise ceremonies, we recommend staying somewhere close the night before. The drive up the mountain
                in the dark requires focus, and you don't want to feel rushed after an already early morning.
              </p>
              <p>
                We've filmed couples getting ready in cozy mountain cabins, in the soft light of a hotel room, and even
                finishing up at Pretty Place itself. Wherever you choose, make sure there's good natural light for those
                getting-ready shots since the on-site bridal room is quite limited in that regard.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Filming at Pretty Place
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                As a preferred vendor at Pretty Place Chapel, we know exactly how to capture this venue's magic on film.
                The combination of the stone architecture, the open sky, and the endless mountain views creates a
                cinematic backdrop unlike anywhere else.
              </p>
              <p>A few things that make filming here special:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>The natural light:</strong> Whether it's the soft pink glow of sunrise or the golden warmth of
                  afternoon, the light at Pretty Place is extraordinary.
                </li>
                <li>
                  <strong>The natural audio:</strong> Wind, birdsong, and the sound of your voices echoing off the stone
                  walls all become part of your film's soundtrack.
                </li>
                <li>
                  <strong>The emotion:</strong> There's something about this place that makes people feel deeply. We
                  capture those raw, genuine moments.
                </li>
              </ul>
              <p>
                We bring professional audio equipment to capture your vows clearly, even with wind. We know the best
                angles that show off the mountain views without obstructing your guests' view. And we blend into the
                background so your ceremony feels intimate, not like a production.
              </p>
            </div>
          </div>

          {/* Wedding Film Example 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <p className="text-center text-lg font-light text-foreground/70 mb-6 font-serif italic">
              Another beautiful Pretty Place Chapel celebration
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/B_cdHX3_SFI"
                title="Pretty Place Chapel Wedding Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Planning Your Reception
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Since Pretty Place is ceremony-only, you'll need to plan a separate reception venue. Popular options
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Venues in downtown Greenville, SC (about 30-40 minutes away)</li>
                <li>Mountain lodges and event spaces in the surrounding area</li>
                <li>Restaurants with private dining rooms for intimate celebrations</li>
                <li>Cabin rentals or private estates for more casual gatherings</li>
              </ul>
              <p>
                The drive from Pretty Place to most reception venues gives you a natural transition and a chance to
                spend a few quiet moments together as a newly married couple. We often use this time for sunset photos
                along the mountain roads.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Final Tips for Your Pretty Place Wedding
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Book early:</strong> Pretty Place fills up quickly, especially for peak season and sunrise
                  slots.
                </li>
                <li>
                  <strong>Communicate with guests:</strong> Let them know about the drive, the temperature, and
                  appropriate footwear for the gravel paths.
                </li>
                <li>
                  <strong>Embrace the elements:</strong> Wind in your hair, fog rolling through, unexpected clouds. These
                  become part of your story.
                </li>
                <li>
                  <strong>Choose vendors who know the venue:</strong> Working with a preferred vendor means fewer
                  surprises and a smoother day.
                </li>
                <li>
                  <strong>Keep your ceremony simple:</strong> The setting speaks for itself. You don't need elaborate
                  decor.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              A Place Worth the Journey
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Pretty Place Chapel is more than a venue. It's an experience. The winding mountain roads, the crisp air,
                the moment you step into that chapel and see the mountains stretching out forever. It stays with you.
              </p>
              <p>
                As preferred vendors who have filmed many weddings here, we can tell you: every single one has been
                unforgettable. The combination of natural beauty, heartfelt emotion, and the intimacy of that stone
                chapel creates something truly special.
              </p>
              <p>
                If you're dreaming of a Pretty Place wedding, we'd love to be part of your story. Let's create a film
                that captures every moment of magic.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="inline-block bg-[#dba57d]/20 px-6 py-3 rounded-full border border-[#dba57d]/40 mb-4">
              <span className="text-foreground font-serif font-medium">Preferred Vendor at Pretty Place Chapel</span>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & wife videography team</p>
              <p className="text-lg font-light text-foreground/80">
                Serving Pretty Place, the Carolinas, and beyond
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
