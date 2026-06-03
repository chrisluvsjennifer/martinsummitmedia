import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Why Hire a Husband and Wife Wedding Videography Team | Martin Summit Media",
  description:
    "Discover the unique advantages of hiring a husband and wife wedding videography team. From understanding couple dynamics to seamless coordination, learn why married videographers create more intimate wedding films.",
  keywords:
    "husband wife wedding videographer, married wedding videography team, couples wedding videographer, husband and wife videography, wedding videographer team, NC wedding videographer, intimate wedding films, wedding videography benefits",
  openGraph: {
    title: "Why Hire a Husband and Wife Wedding Videography Team",
    description:
      "Discover the unique advantages of hiring a husband and wife wedding videography team for your wedding day.",
    images: ["/images/blog/husband-wife-videography-team.jpg"],
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/blog/husband-wife-videography-team.jpg"
          alt="Husband and wife wedding videography team filming a couple"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <p className="text-primary-foreground/80 font-light mb-4">May 1, 2026</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-serif text-primary-foreground leading-tight">
              Why Hire a Husband and Wife Wedding Videography Team
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
              When you&apos;re searching for a wedding videographer, you&apos;ll notice that many of the best teams are
              actually married couples themselves. This isn&apos;t a coincidence. There&apos;s something uniquely powerful
              about having a husband and wife team document your love story.
            </p>
            <p>
              As a married videography duo ourselves, we&apos;ve seen firsthand how our relationship translates into
              better films for our couples. Here&apos;s why hiring a husband and wife wedding videography team might be
              the best decision you make for your wedding day.
            </p>
          </div>
        </div>
      </article>

      <article className="py-16 px-4 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-serif">
          {/* Section 1 */}
          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              We Understand the Emotions You&apos;re Feeling
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                We&apos;ve been exactly where you are. The nervous excitement of the morning. The overwhelming joy of
                seeing your person for the first time. The tears during the vows. The pure happiness on the dance floor.
              </p>
              <p>
                Because we&apos;ve lived through our own wedding day, we know which moments matter most. We know when to
                give you space and when to move in closer. We understand the weight of a look exchanged between partners,
                the significance of a parent&apos;s squeeze of the hand, the beauty in the quiet moments between the big ones.
              </p>
              <p>
                This emotional intelligence translates directly into our films. We capture what matters because we
                genuinely understand what those moments mean.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Seamless Communication and Coordination
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                When two videographers work together day after day, year after year, and also share a life together,
                something magical happens: they develop an unspoken language.
              </p>
              <p>
                We know each other&apos;s movements, tendencies, and instincts. During your ceremony, we can anticipate
                where the other will be without a word. During speeches, we seamlessly switch angles to capture both the
                speaker and your reactions. During the first dance, we orbit you in perfect sync without ever getting
                in each other&apos;s frame.
              </p>
              <p>
                This level of coordination takes years to develop between any two people. For us, it&apos;s second nature.
                The result? More coverage, more angles, and a more comprehensive film of your day, all without the
                chaos of miscommunication.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              A Comfortable Presence for Both Partners
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Wedding days often involve separate getting-ready spaces. Having both a male and female videographer
                means each partner can feel completely comfortable in their space.
              </p>
              <p>
                While one of us is with the bride and bridesmaids during hair and makeup, the other is capturing the
                groom and groomsmen. Both parties get equal attention and care, and everyone can relax knowing
                they&apos;re in good hands.
              </p>
              <p>
                We&apos;ve heard from countless couples that they felt more at ease having a woman present during the
                intimate moments of getting into the dress, and the guys appreciated having someone who understood
                their energy during the morning.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              We Genuinely Care About Your Marriage
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Here&apos;s something that might surprise you: for us, this isn&apos;t just a job. When we film your
                wedding, we&apos;re celebrating marriage itself, something we believe in deeply.
              </p>
              <p>
                We know that the wedding is just the beginning. We know about the hard conversations, the compromises,
                the growth that comes with building a life together. And that knowledge shapes how we approach your film.
              </p>
              <p>
                We&apos;re not just documenting a party. We&apos;re capturing the foundation of your marriage, the
                promises you&apos;re making, the community supporting you, and the love that brought you here. That
                perspective matters, and it shows in the final product.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Two Perspectives, One Vision
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Every couple has two unique perspectives coming together. When you hire a husband and wife team, you
                get that same dynamic behind the camera.
              </p>
              <p>
                We notice different things. We&apos;re drawn to different moments. In the editing room, we bring both
                viewpoints together to create a film that honors both partners equally.
              </p>
              <p>
                The result is a more balanced, complete story of your day, one that doesn&apos;t favor one perspective
                over another but celebrates the joining of two lives.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Consistency You Can Count On
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                When you hire a larger videography company, you might not know who will actually show up on your
                wedding day. With a husband and wife team, you know exactly who you&apos;re getting.
              </p>
              <p>
                The people you meet during your consultation, the people who answer your emails, the people who show
                up on your wedding day, and the people who edit your film are all the same. There&apos;s no hand-off, no
                miscommunication, no surprises.
              </p>
              <p>
                You&apos;re building a relationship with us, and we&apos;re invested in making your experience exceptional
                from the first inquiry to the final delivery.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Questions to Ask Any Videography Team
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                If you&apos;re considering a husband and wife videography team (or any team), here are some questions
                worth asking:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>How long have you been working together?</li>
                <li>Who will be at our wedding, and who does the editing?</li>
                <li>How do you divide responsibilities on the wedding day?</li>
                <li>Can you share full wedding films (not just highlights)?</li>
                <li>What drew you to wedding videography?</li>
              </ul>
              <p>
                The answers will tell you a lot about their experience, passion, and whether they&apos;re the right fit
                for your day.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mt-16 pt-16 border-t border-foreground/10">
            <h2 className="text-2xl md:text-3xl font-light font-serif uppercase tracking-wider mb-8">
              Is a Husband and Wife Team Right for You?
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed font-serif text-foreground/90">
              <p>
                Not every couple needs a married videography team. But if you value intimacy over spectacle, emotion
                over extravagance, and genuine connection over transactional service, a husband and wife team might be
                exactly what you&apos;re looking for.
              </p>
              <p>
                At Martin Summit Media, we bring our marriage, our partnership, and our shared passion for storytelling
                to every wedding we film. We&apos;d love to learn about your love story and see if we&apos;re the right
                fit to capture it.
              </p>
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
                <Link href="/inquire">Let&apos;s Connect</Link>
              </Button>
              <p className="text-sm text-foreground/60">We&apos;d love to hear your story</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
