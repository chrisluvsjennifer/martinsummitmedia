import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Mail, Users, DollarSign } from "lucide-react"
import CommunityNominationForm from "@/components/community-nomination-form"
import DonationButtons from "@/components/donation-buttons"

export const metadata = {
  title: "Community Stories | Martin Summit Media",
  description:
    "Using the power of storytelling to shine a light on people in our community who could use support, encouragement, or simply someone willing to share their story.",
  keywords:
    "community stories, local stories, giving back, community support, storytelling, video stories, Martin Summit Media community",
}

// Placeholder for future stories - will be populated as stories are created
const stories: {
  id: string
  title: string
  excerpt: string
  image: string
  videoUrl?: string
}[] = []

export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#1a1d23]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-balance uppercase text-foreground">
            Community Stories
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#dba57d] mx-auto"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif font-light leading-relaxed text-foreground/90">
            Using What We Do to Help Those Who Need It Most
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 lg:px-8 py-12 md:py-16 bg-secondary-foreground">
        <div className="container mx-auto max-w-3xl">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/images/community-stories-hero.jpg"
              alt="Community coming together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-4 lg:px-8 py-16 md:py-24 bg-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-base md:text-lg lg:text-xl font-serif leading-relaxed text-white/90">
            <p className="text-muted text-xl md:text-2xl font-light italic">
              We want to do something good for our community.
            </p>
            <p className="text-muted">
              Over the years, through Martin Summit Media, we have had the privilege of meeting so many amazing people
              and hearing so many powerful stories. Recently, we started thinking about how we could use what we do,
              storytelling through video, to help people who might be going through a really difficult time.
            </p>
            <p className="text-muted">So we want to try something.</p>
            <p className="text-muted">
              We are looking for people in our community who could use a little support, encouragement, or simply
              someone willing to share their story.
            </p>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#E8E4DF]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 uppercase text-[#1a1d23] font-thin">
            Who We&apos;re Looking For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#dba57d]/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-[#dba57d]" />
                </div>
                <h3 className="text-xl font-serif text-[#1a1d23]">Medical Challenges</h3>
                <p className="text-[#1a1d23]/70 font-serif font-light">
                  A family facing medical challenges who could use support and encouragement from the community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#dba57d]/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-[#dba57d]" />
                </div>
                <h3 className="text-xl font-serif text-[#1a1d23]">Financial Hardship</h3>
                <p className="text-[#1a1d23]/70 font-serif font-light">
                  Someone struggling with housing or financial hardship who deserves to have their story heard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#dba57d]/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-[#dba57d]" />
                </div>
                <h3 className="text-xl font-serif text-[#1a1d23]">Quiet Heroes</h3>
                <p className="text-[#1a1d23]/70 font-serif font-light">
                  Someone who has been quietly helping others while going through a tough season themselves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Hope */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#2a2d33]">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif uppercase text-white font-thin">Our Hope</h2>
          <p className="text-lg md:text-xl font-serif leading-relaxed text-white/80 max-w-3xl mx-auto">
            We want to meet them, hear their story, and create a short video to help shine a light on what they are
            going through. Our hope is that by sharing real stories from our community, people might feel encouraged,
            inspired, and maybe even moved to help in their own way.
          </p>
          <p className="text-xl md:text-2xl font-serif italic text-[#dba57d]">
            We truly believe there are many good people in this community, and sometimes all it takes is bringing a
            story to light for others to step in with kindness.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#E8E4DF]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-[#dba57d]/20 rounded-full flex items-center justify-center mx-auto">
              <DollarSign className="w-8 h-8 text-[#dba57d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif uppercase text-[#1a1d23] font-thin">
              Want to Help?
            </h2>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-[#1a1d23]/80 max-w-3xl mx-auto">
              If you feel moved to contribute, you have two options: you can specify which story you would like your donation to go toward, or you can give in general and we will use that money to bless someone in need.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-lg space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg font-serif text-[#1a1d23]/90 leading-relaxed">
                We want to be completely transparent: <span className="font-medium">100% of donations go directly to the people whose stories we share.</span> We will not use any of this money for ourselves.
              </p>
              <p className="text-base font-serif text-[#1a1d23]/70 leading-relaxed">
                We have been filming weddings since 2021 and have plenty of references who can attest to our integrity. If you ever have questions about where your donation went, please reach out to us.
              </p>
            </div>

            <DonationButtons />

            <p className="text-center text-sm font-serif text-[#1a1d23]/60">
              When donating, you can include a note specifying which story you would like to support, or simply write &quot;General&quot; and we will allocate it where it is needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section - Empty State for now */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 uppercase text-foreground font-thin">
            Stories
          </h2>
          <div className="w-16 h-px bg-[#dba57d] mx-auto mb-12"></div>

          {stories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <Card key={story.id} className="border-none shadow-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={story.image} alt={story.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-foreground mb-2">{story.title}</h3>
                    <p className="text-foreground/70 font-serif font-light">{story.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#f5f3f0] rounded-lg">
              <p className="text-xl font-serif text-foreground/70 mb-2">Stories coming soon...</p>
              <p className="font-serif font-light text-foreground/60 max-w-xl mx-auto">
                We&apos;re just getting started with this initiative. Know someone whose story deserves to be heard?
                Reach out to us below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Nomination Form */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#1a1d23]">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 uppercase text-white font-thin">
            Nominate Someone
          </h2>
          <div className="bg-[#2a2d33] rounded-lg p-4 sm:p-8 md:p-12">
            <CommunityNominationForm />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
            Let&apos;s see what happens when a community comes together.
          </p>
          <p className="text-lg font-serif text-foreground/80">Chris & Jennifer</p>
          <p className="text-sm font-serif text-foreground/60 uppercase tracking-wide">Martin Summit Media</p>
        </div>
      </section>
    </main>
  )
}
