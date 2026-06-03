import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog | Adventure Elopement & Wedding Videography Stories & Tips | Martin Summit Media",
  description:
    "Explore adventure elopement and wedding videography inspiration, tips, and real love stories from the mountains. Get ideas for your own intimate wedding experience and cinematic wedding film.",
  keywords:
    "adventure elopement videography blog, wedding videography tips, mountain wedding videographer tips, elopement inspiration, intimate wedding ideas, Blue Ridge elopement, cinematic wedding films",
}

const blogPosts = [
  {
    slug: "wedding-day-family-photo-checklist",
    title: "Wedding Day Family Photo Checklist: How to Make Group Photos Go Smoothly",
    excerpt:
      "A practical wedding day family photo checklist to help group photos go faster and stress-free. Tips on organizing family formals so you can get back to celebrating.",
    date: "May 24, 2026",
    image: "/images/blog/wedding-family-photo-checklist.jpg",
  },
  {
    slug: "elopement-vs-micro-wedding-which-is-right-for-you",
    title: "Elopement vs Micro Wedding: Which Is Right for You?",
    excerpt:
      "Trying to decide between an elopement and a micro wedding? Learn the key differences, pros and cons of each, and how to choose the intimate wedding style that fits your relationship.",
    date: "May 15, 2026",
    image: "/images/blog/elopement-vs-micro-wedding.jpg",
  },
  {
    slug: "why-hire-husband-wife-wedding-videography-team",
    title: "Why Hire a Husband and Wife Wedding Videography Team",
    excerpt:
      "Discover the unique advantages of hiring a husband and wife wedding videography team. From understanding couple dynamics to seamless coordination, learn why married videographers create more intimate wedding films.",
    date: "May 1, 2026",
    image: "/images/blog/husband-wife-videography-team.jpg",
  },
  {
    slug: "when-to-book-wedding-videographer",
    title: "When to Book Your Wedding Videographer (And Why Earlier is Better)",
    excerpt:
      "Wondering when to book your wedding videographer? Learn the ideal booking timeline, why earlier is better, and what happens when you wait too long.",
    date: "March 18, 2026",
    image: "/images/blog/when-to-book-wedding-videographer.jpg",
  },
  {
    slug: "how-to-build-wedding-day-timeline",
    title: "How to Build a Wedding Day Timeline That Leaves Room to Breathe",
    excerpt:
      "Your wedding day timeline is more than just a schedule. Learn how to create one that prioritizes meaningful moments over rushed schedules with practical tips for building buffer time.",
    date: "March 11, 2026",
    image: "/images/blog/wedding-day-timeline-guide.jpg",
  },
  {
    slug: "next-steps-after-popping-the-question",
    title: "Next Steps After Popping the Question",
    excerpt:
      "They said yes! Now what? Here's a practical, down-to-earth guide to the first steps you should take after getting engaged, from soaking in the moment to booking the right vendors.",
    date: "February 9, 2026",
    image: "/images/blog/next-steps-after-engagement.jpg",
  },
  {
    slug: "what-to-expect-getting-married-at-pretty-place-chapel",
    title: "What to Expect When Getting Married at Pretty Place Chapel",
    excerpt:
      "Perched on the edge of the Blue Ridge Mountains, Pretty Place Chapel offers panoramic views that feel almost otherworldly. As a preferred vendor, here's everything you need to know to plan your day.",
    date: "January 20, 2026",
    image: "https://img.youtube.com/vi/y6xKAsmRDLk/maxresdefault.jpg",
  },
  {
    slug: "getting-married-in-charleston-sc-videographer-guide",
    title: "Getting Married in Charleston, SC: What to Look for in a Wedding Videographer",
    excerpt:
      "Charleston is one of the most romantic cities in the country. Here's what to look for when choosing a wedding videographer who can capture the charm of the Lowcountry and your love story.",
    date: "January 18, 2026",
    image: "/images/blog/charleston-wedding-waterfront.jpg",
  },
  {
    slug: "wedding-day-doesnt-have-to-feel-rushed",
    title: "Why Your Wedding Day Doesn't Have to Feel Rushed",
    excerpt:
      "There's this unspoken pressure that your wedding day needs to be perfectly timed, perfectly planned, and perfectly executed. But what if that pressure is stealing the very thing you're hoping to feel: presence, connection, and joy?",
    date: "January 9, 2026",
    image: "/couple-walking-peacefully-at-golden-hour-wedding.jpg",
  },
  {
    slug: "questions-to-ask-wedding-videographer",
    title: "10 Questions to Ask Your Wedding Videographer",
    excerpt:
      "Choosing the right wedding videographer is one of the most important decisions you'll make. Here are 10 essential questions to ask before booking to ensure you find the perfect fit for your story.",
    date: "December 30, 2025",
    image: "/wedding-videographer-filming-couple.jpg",
  },
  {
    slug: "cinematic-christmas-wedding-sunset-farms",
    title: "A Cinematic Christmas Wedding at Sunset Farms Wedding Venue | Kaylee & Josh",
    excerpt:
      "There's something timeless about a Christmas wedding. Kaylee and Josh's intimate celebration at Sunset Farms in Alabama was filled with genuine emotion, cozy holiday details, and moments that felt deeply real.",
    date: "December 22, 2025",
    image: "/images/blog/christmas-wedding-sunset-farms.jpg",
  },
  {
    slug: "best-adventure-elopement-locations-western-nc",
    title: "Best Adventure Elopement Locations in Western North Carolina",
    excerpt:
      "From sweeping mountain balds to misty overlooks and quiet forest trails, Western North Carolina offers endless opportunities for couples who want an intimate, meaningful wedding experience surrounded by nature.",
    date: "December 16, 2025",
    image: "/images/blog/nc-mountain-elopement.jpg",
  },
  {
    slug: "why-adventure-elopements-are-meaningful",
    title: "Why Adventure Elopements Are the Most Meaningful Way to Get Married",
    excerpt:
      "For so many couples, the traditional wedding timeline doesn't feel like them. That's why more couples than ever are choosing a different path. A quieter one. A wilder one.",
    date: "December 11, 2025",
    image: "/images/blog/adventure-elopement-mountaintop.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-balance font-serif uppercase">Blog</h1>
          <div className="h-1 bg-[#dba57d] mx-auto opacity-40 w-72"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 font-serif">
            Real weddings, honest tips, and films that feel like you.
          </p>
          <p className="text-lg font-light leading-relaxed text-foreground/70 font-serif max-w-3xl mx-auto">
            Welcome to our journal of real weddings, helpful planning tips, and honest thoughts on creating films that
            last. Each post is written to help you plan a day that feels like you and a film you'll actually want to
            watch.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-foreground/60 font-light">{post.date}</p>
                  <h2 className="text-xl font-serif font-light leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 font-light leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-block text-accent font-serif italic text-sm pt-2">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 lg:px-8 bg-[#dba57d]">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance font-serif text-[#1a1d23]">
            Ready to Create Your Film?
          </h2>
          <p className="text-lg font-light leading-relaxed text-[#1a1d23]/80 font-serif">
            If you're planning a wedding or elopement that values authenticity over perfection, we'd love to hear from
            you.
          </p>
          <Button asChild size="lg" className="bg-[#1a1d23] text-white hover:bg-[#1a1d23]/90 h-14 px-8">
            <Link href="/inquire">Start the Conversation</Link>
          </Button>
          <p className="text-sm text-[#1a1d23]/60 font-light">No pressure. Just conversation.</p>
        </div>
      </section>
    </main>
  )
}
