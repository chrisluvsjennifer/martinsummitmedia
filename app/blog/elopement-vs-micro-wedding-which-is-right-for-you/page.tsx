import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Elopement vs Micro Wedding: Which Is Right for You? | Martin Summit Media",
  description:
    "Trying to decide between an elopement and a micro wedding? Learn the key differences, pros and cons of each, and how to choose the intimate wedding style that fits your relationship.",
  keywords:
    "elopement vs micro wedding, micro wedding ideas, elopement planning, intimate wedding options, small wedding NC, adventure elopement, micro wedding videographer, elopement videographer, intimate wedding film, wedding planning guide",
  openGraph: {
    title: "Elopement vs Micro Wedding: Which Is Right for You?",
    description:
      "Learn the key differences between elopements and micro weddings to find the intimate celebration that fits your love story.",
    images: ["/images/blog/elopement-vs-micro-wedding.jpg"],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/elopement-vs-micro-wedding.jpg"
          alt="Intimate mountain ceremony with small group of guests"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">May 15, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Elopement vs Micro Wedding: Which Is Right for You?
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
              The traditional 150-guest wedding isn&apos;t for everyone. If you&apos;re dreaming of something smaller,
              more intimate, and more focused on what actually matters, you&apos;ve probably come across two popular
              alternatives: elopements and micro weddings.
            </p>
            <p>
              But what&apos;s the difference? And how do you know which one is right for you? Let&apos;s break it down
              so you can make the choice that fits your relationship, your values, and your vision.
            </p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              What Is an Elopement?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Modern elopements have evolved far beyond the &quot;running away to Vegas&quot; stereotype. Today, an
                elopement is simply an intentionally intimate wedding, usually with just the couple (and sometimes a
                handful of loved ones).
              </p>
              <p>The focus is entirely on the two of you. Your vows. Your connection. Your adventure.</p>
              <p>
                <strong>Typical characteristics of an elopement:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Just the couple, or with 0-10 guests (often immediate family only)</li>
                <li>Often in a meaningful or adventurous location (mountains, beaches, forests)</li>
                <li>Flexible timeline focused on experience over events</li>
                <li>Minimal vendor team (officiant, photographer/videographer)</li>
                <li>No traditional reception, though a private dinner is common</li>
                <li>Lower budget than traditional weddings</li>
              </ul>
              <p>
                Elopements are perfect for couples who feel overwhelmed by big weddings, want an adventure, or simply
                want their wedding day to feel like them.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              What Is a Micro Wedding?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                A micro wedding is essentially a scaled-down traditional wedding. You still have the ceremony, the
                reception, the dinner, the dancing, but with a carefully curated guest list of your closest people.
              </p>
              <p>
                <strong>Typical characteristics of a micro wedding:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>10-50 guests (close family and friends)</li>
                <li>Traditional wedding elements (ceremony, toasts, first dance, cake)</li>
                <li>Venue-based (intimate venue, restaurant, private estate)</li>
                <li>More vendors than an elopement (catering, florals, DJ/music)</li>
                <li>Structured timeline similar to a traditional wedding</li>
                <li>Mid-range budget (less than big weddings, more than elopements)</li>
              </ul>
              <p>
                Micro weddings work well for couples who want the traditional experience but without the stress and
                expense of a large guest list.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Elopement vs Micro Wedding: Key Differences
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Here&apos;s a side-by-side comparison to help clarify:</p>
              <div className="bg-foreground/5 p-6 rounded-lg space-y-4 text-base">
                <div className="grid grid-cols-3 gap-4 font-medium border-b border-foreground/10 pb-3">
                  <p>Factor</p>
                  <p>Elopement</p>
                  <p>Micro Wedding</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Guest count</p>
                  <p>0-10</p>
                  <p>10-50</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Focus</p>
                  <p>The couple</p>
                  <p>Couple + community</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Location</p>
                  <p>Anywhere meaningful</p>
                  <p>Traditional venue</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Reception</p>
                  <p>Optional/private dinner</p>
                  <p>Full reception</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Planning time</p>
                  <p>Weeks to months</p>
                  <p>6-12 months</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p>Budget</p>
                  <p>$2K-$15K typical</p>
                  <p>$10K-$30K typical</p>
                </div>
              </div>
              <p>
                The biggest difference comes down to this: an elopement prioritizes the couple&apos;s experience, while
                a micro wedding balances that with celebrating alongside loved ones.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Benefits of Eloping
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                <strong>Complete freedom.</strong> Without the constraints of a venue, guest list, or traditional
                timeline, you can get married wherever and however you want. Sunrise on a mountain? Sunset on the beach?
                A Tuesday afternoon in a forest? All possible.
              </p>
              <p>
                <strong>Less stress.</strong> No seating charts. No family politics. No worrying about whether everyone
                is having a good time. You can be fully present with each other.
              </p>
              <p>
                <strong>More budget flexibility.</strong> You can either save money or allocate your budget toward
                things that matter, like an incredible location, a luxury dinner, or an extended honeymoon.
              </p>
              <p>
                <strong>Deeper intimacy.</strong> There&apos;s something profound about exchanging vows with just your
                partner, without an audience. Many couples say their elopement felt more connected than any big wedding
                could.
              </p>
              <p>
                <strong>Adventure potential.</strong> Elopements open up possibilities that traditional weddings
                can&apos;t, like hiking to a remote overlook, traveling internationally, or combining the wedding with
                an epic adventure.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Benefits of a Micro Wedding
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                <strong>Shared celebration.</strong> If having your closest people witness your marriage is important
                to you, a micro wedding delivers that experience. You still get the joy of celebrating with loved ones.
              </p>
              <p>
                <strong>Traditional elements.</strong> Want the first dance? The toasts? The cake cutting? A micro
                wedding includes all the moments you might miss with an elopement.
              </p>
              <p>
                <strong>Easier for family.</strong> Some families struggle with the idea of their child eloping. A
                micro wedding can be a compromise that honors both your desire for intimacy and their desire to be present.
              </p>
              <p>
                <strong>More photos and memories.</strong> With more people present, you get more moments: the laughter,
                the dancing, the candid interactions between guests who love you.
              </p>
              <p>
                <strong>Reception experience.</strong> If the party matters to you, a micro wedding lets you have that
                celebration without the overwhelm of hundreds of guests.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Questions to Help You Decide
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>Still not sure which path is right for you? Ask yourselves these questions:</p>
              <p>
                <strong>What do you want to feel on your wedding day?</strong>
              </p>
              <p>
                If your answer is &quot;present, connected, and peaceful,&quot; an elopement might be calling you. If
                it&apos;s &quot;celebrated, surrounded by love, and joyful,&quot; a micro wedding could be the fit.
              </p>
              <p>
                <strong>How important is having guests present for the ceremony?</strong>
              </p>
              <p>
                Some couples dream of saying their vows with just each other. Others can&apos;t imagine their parents
                not being there. Neither is wrong. Be honest about what matters to you.
              </p>
              <p>
                <strong>How do you feel about planning?</strong>
              </p>
              <p>
                Elopements require less logistical planning but more vision. Micro weddings require more coordination
                but follow a familiar structure. Which energizes you, and which drains you?
              </p>
              <p>
                <strong>What does your budget allow?</strong>
              </p>
              <p>
                Both options can be done at various price points, but elopements generally offer more flexibility for
                couples on a tighter budget.
              </p>
              <p>
                <strong>What will you remember most in 20 years?</strong>
              </p>
              <p>
                Picture yourself looking back on your wedding. What do you see? That vision is often your answer.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              The Hybrid Option: Elopement + Celebration
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Here&apos;s a secret: you don&apos;t have to choose one or the other. Many couples are opting for a
                hybrid approach.
              </p>
              <p>
                <strong>Elope first, celebrate later.</strong> Have your intimate ceremony just the two of you, then
                host a reception or party with family and friends weeks or months later. You get the best of both worlds.
              </p>
              <p>
                <strong>Micro ceremony, bigger party.</strong> Keep the ceremony small (immediate family only), then
                open up the reception to a wider guest list.
              </p>
              <p>
                <strong>Weekend experience.</strong> Invite guests to a destination where you&apos;ll elope, but give
                them activities to enjoy while you have your private ceremony. Gather together for dinner that evening.
              </p>
              <p>
                There are no rules. Your wedding can look however you want it to look.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Why Video Matters for Both
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Whether you choose an elopement or a micro wedding, we believe video is essential. Here&apos;s why:
              </p>
              <p>
                <strong>For elopements:</strong> With fewer (or no) guests to witness your vows, your film becomes the
                way you share that moment with loved ones who couldn&apos;t be there. It&apos;s also your own memory,
                since you&apos;ll be too present in the moment to remember every detail.
              </p>
              <p>
                <strong>For micro weddings:</strong> The intimacy of a small guest list creates space for genuine
                moments, the kind that happen when people feel relaxed rather than performing for a crowd. Video
                captures those authentic interactions.
              </p>
              <p>
                Both approaches create incredibly cinematic, emotional films. The intimacy shines through in ways that
                larger weddings often can&apos;t match.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Ready to Plan Your Intimate Celebration?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Whether you&apos;re leaning toward an elopement, a micro wedding, or something in between, the most
                important thing is choosing what feels right for your relationship.
              </p>
              <p>
                At Martin Summit Media, we specialize in intimate weddings of all kinds. We&apos;ve filmed sunrise
                elopements on mountain peaks and elegant micro weddings at private estates. We&apos;d love to hear
                what you&apos;re dreaming of and help you think through the possibilities.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-foreground/10 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl font-serif text-foreground/90">Martin Summit Media</p>
              <p className="text-lg font-light text-foreground/80">Husband & wife videography team</p>
              <p className="text-lg font-light text-foreground/80">
                Elopement & micro wedding specialists in NC & SC
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <Button className="font-serif text-xl" size="lg" variant="default" asChild>
                <Link href="/inquire">Start Planning Together</Link>
              </Button>
              <p className="text-sm text-foreground/60">Let&apos;s create something meaningful</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
