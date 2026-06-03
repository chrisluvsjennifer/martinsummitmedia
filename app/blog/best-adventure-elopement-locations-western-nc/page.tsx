import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Best Adventure Elopement Locations in Western North Carolina | Martin Summit Media",
  description:
    "Discover the most breathtaking adventure elopement locations in Western North Carolina, from Max Patch to Craggy Pinnacle. Expert recommendations from local photo and video team.",
  keywords:
    "Western North Carolina elopement locations, Max Patch elopement, Craggy Pinnacle wedding, Black Balsam Knob, Roan Mountain elopement, Blue Ridge Parkway wedding, Asheville elopement locations",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/nc-mountain-elopement.jpg"
          alt="Bride and groom standing on rocky mountain outcrop overlooking misty forested mountains in Western North Carolina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">December 16, 2025</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Best Adventure Elopement Locations in Western North Carolina
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
              Western North Carolina is one of the most breathtaking places in the Southeast for adventure elopements.
              From sweeping mountain balds to misty overlooks and quiet forest trails, this region offers endless
              opportunities for couples who want an intimate, meaningful wedding experience surrounded by nature.
            </p>

            <p>
              As a Western North Carolina adventure elopement photo and video team, we've explored and filmed at some of
              the most iconic locations in the area. Here are a few of our favorite spots for couples who want their
              elopement to feel wild, intentional, and unforgettable.
            </p>
          </div>

          {/* Max Patch */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Max Patch | NC / TN Border
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Max Patch is one of the most iconic adventure elopement locations near Asheville. Known for its
                wide-open grassy bald and 360-degree mountain views, this location is perfect for couples who want
                dramatic scenery without a difficult hike.
              </p>
              <p className="font-medium">Why couples love Max Patch:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Open mountaintop views with no visual distractions</li>
                <li>Incredible sunrise and sunset light</li>
                <li>Easy access for elopement attire</li>
                <li>A true "on top of the world" feeling</li>
              </ul>
              <p>
                Max Patch is ideal for couples planning an adventure elopement near Asheville, NC who want cinematic
                views and a peaceful atmosphere.
              </p>
            </div>
          </div>

          {/* Craggy Pinnacle */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Craggy Pinnacle | Blue Ridge Parkway, NC
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Located just north of Asheville along the Blue Ridge Parkway, Craggy Pinnacle offers rocky overlooks,
                twisted trees, and moody mountain views that feel straight out of a film.
              </p>
              <p className="font-medium">Why Craggy Pinnacle stands out:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Short hike with a huge payoff</li>
                <li>Dramatic fog and cloud inversions</li>
                <li>Rugged terrain for adventurous couples</li>
                <li>Easily accessible from Asheville</li>
              </ul>
              <p>
                This is one of our top recommendations for couples looking for a mountain elopement near Asheville with
                a more dramatic, editorial feel.
              </p>
            </div>
          </div>

          {/* Black Balsam Knob */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Black Balsam Knob | Pisgah National Forest
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Black Balsam Knob is a favorite for couples who want sweeping views and a sense of movement in their
                photos and film. The open balds, wind, and layered Blue Ridge Mountains make this location perfect for
                adventurous elopements.
              </p>
              <p className="font-medium">Why couples choose Black Balsam:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Expansive views of the Blue Ridge Mountains</li>
                <li>Open terrain for natural movement and storytelling</li>
                <li>Ideal for sunset elopements</li>
                <li>A classic Western North Carolina adventure location</li>
              </ul>
            </div>
          </div>

          {/* Roan Mountain */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Roan Mountain | TN / NC Border
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Roan Mountain offers one of the most unique landscapes in the Southeast. Its grassy balds stretch for
                miles, creating a wild, high-elevation feel that's perfect for couples seeking something truly special.
              </p>
              <p className="font-medium">Why Roan Mountain is unforgettable:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Endless ridgelines and panoramic views</li>
                <li>A remote, adventurous atmosphere</li>
                <li>Ideal for cinematic elopement films</li>
                <li>A favorite for couples wanting a less traditional wedding day</li>
              </ul>
              <p>
                Roan Mountain is a top choice for couples planning an adventure elopement near Johnson City, TN or
                Western North Carolina.
              </p>
            </div>
          </div>

          {/* Planning Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Planning an Adventure Elopement in Western North Carolina
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Adventure elopements are about more than just a beautiful location. They're about slowing down, choosing
                intention over tradition, and creating space for meaningful moments.
              </p>
              <p>
                As a husband and wife adventure elopement photography and videography team based in Western North
                Carolina, we help couples:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Choose the perfect elopement location</li>
                <li>Plan a stress-free elopement timeline</li>
                <li>Capture emotional audio through vows or letters</li>
                <li>Create cinematic photo and film that feels real and timeless</li>
              </ul>
              <p>
                Whether you're dreaming of a mountaintop ceremony, a fog-filled overlook, or a quiet trail surrounded by
                trees, Western North Carolina has a place that fits your story.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Ready to Plan Your Adventure Elopement?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If you're planning an adventure elopement in Western North Carolina, Asheville, or the surrounding
                mountains, we'd love to help tell your story.
              </p>
              <div className="space-y-3 text-base">
                <p className="flex items-center gap-2">
                  <span className="text-accent">📍</span> Based in Western North Carolina
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent">🎥📸</span> Adventure Elopement Photo + Film
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent">🌿</span> Serving Asheville, Blue Ridge Parkway, Pisgah National Forest,
                  and beyond
                </p>
              </div>
            </div>

            <div className="text-center pt-12">
              <Button className="font-serif text-xl" size="lg" variant="default">
                <a href="/inquire">Contact Us to Start Planning</a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
