import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import BlogPostVideo from "./BlogPostVideo"

export const metadata = {
  title: "A Cinematic Christmas Wedding at Sunset Farms Wedding Venue | Kaylee & Josh | Martin Summit Media",
  description:
    "There's something timeless about a Christmas wedding. Kaylee and Josh's intimate, emotional celebration at Sunset Farms in Shorter, Alabama was filled with genuine moments and cozy holiday warmth.",
  keywords:
    "Christmas wedding, Sunset Farms wedding, winter wedding, Alabama wedding videography, cinematic wedding film, intimate wedding",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/christmas-wedding-sunset-farms.jpg"
          alt="Black and white photo of bride and groom walking together by a lake at Sunset Farms"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">December 22, 2025</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              A Cinematic Christmas Wedding at Sunset Farms Wedding Venue | Kaylee & Josh
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
              There's something timeless about a Christmas wedding: the warmth, the nostalgia, the way everything feels
              a little more meaningful. Kaylee and Josh's wedding at Sunset Farms in Shorter, Alabama was exactly that:
              intimate, emotional, and filled with moments that felt deeply real.
            </p>

            <p>
              From the very start of the day, there was a sense of calm and connection. The winter light was soft, the
              air crisp, and the setting at Sunset Farms created the perfect backdrop for a wedding that felt cozy yet
              cinematic. This wasn't about perfection or production: it was about presence, movement, and genuine
              emotion.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[#1a2332] py-12">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <BlogPostVideo />
        </div>
      </section>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              A Day That Felt Natural and Unscripted
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Kaylee and Josh's wedding day flowed effortlessly. Instead of rigid timelines or overly staged moments,
                they leaned into the natural rhythm of the day. Quiet glances, shared laughter, gentle movement: these
                are the moments that define our films, and this day was full of them.
              </p>
              <p>
                Their ceremony was emotional without being overdone. Every word spoken carried weight, especially during
                the vows. There's something powerful about hearing vows in a space filled with people who truly know
                you: family, close friends, and loved ones who have walked alongside you.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Christmas Details with Heart
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Subtle Christmas details were woven throughout the day: warm tones, seasonal décor, and a cozy
                atmosphere that made the entire celebration feel inviting. Rather than overwhelming the day, the holiday
                elements enhanced it, giving the wedding a timeless winter feel that will never go out of style.
              </p>
              <p>
                As the evening unfolded, the reception brought warmth and joy. Heartfelt toasts reflected the depth of
                Kaylee and Josh's relationships and the love surrounding them. Laughter and tears blended together in a
                way that felt honest and beautifully imperfect: exactly the kind of moments we aim to preserve.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Capturing the Feeling, Not Just the Moments
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                When we approach a wedding like this, our goal isn't just to document what happened: it's to capture how
                it felt. The movement between moments, the quiet pauses, the way a hand reaches for another without
                thinking. Kaylee and Josh's wedding reminded us why storytelling matters so much.
              </p>
              <p>
                This Christmas wedding wasn't about grandeur. It was about connection, authenticity, and choosing to be
                fully present. And those are the stories we love telling most.
              </p>
              <p className="text-accent italic">
                If you're planning a wedding: whether it's an intimate elopement or a full celebration: and you want
                your memories to feel cinematic, emotional, and true to who you are, we'd love to tell your story.
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
