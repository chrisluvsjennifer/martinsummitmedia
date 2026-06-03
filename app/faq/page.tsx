import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | NC Wedding Videographer & Photographer Questions | Charlotte & Asheville",
  description:
    "Frequently asked questions about wedding videography and photography in Charlotte, Asheville & NC. Learn about elopements, traditional weddings, pricing, travel, and booking your cinematic wedding film and photography.",
  keywords: [
    "NC wedding videographer FAQ",
    "NC wedding photographer FAQ",
    "Charlotte wedding videography questions",
    "Charlotte wedding photography questions",
    "Asheville wedding videographer questions",
    "Asheville wedding photographer questions",
    "wedding videographer pricing questions",
    "wedding photographer pricing questions",
    "elopement videographer NC",
    "elopement photographer NC",
    "how to book wedding videographer",
    "how to book wedding photographer",
    "cinematic wedding films FAQ",
  ],
}

const weddingFaqs = [
  {
    question: "Do you film full-day weddings?",
    answer: [
      "Yes. We love documenting full wedding days with the same intentional, unobtrusive approach we bring to elopements. Our focus is always on authentic moments and real emotion, not staged footage.",
    ],
  },
  {
    question: "How many hours of coverage do you recommend?",
    answer: [
      "For most weddings, 8 hours gives us enough time to capture getting ready, the ceremony, portraits, and the key reception moments without anyone feeling rushed. But every wedding is different, and we are happy to talk through what makes sense for your day.",
    ],
  },
  {
    question: "Do you work with a timeline from our planner?",
    answer: [
      "Absolutely. We collaborate closely with planners and other vendors to make sure the timeline allows for beautiful light, natural moments, and a relaxed experience for you.",
    ],
  },
  {
    question: "How many videographers will be there?",
    answer: [
      "Most weddings include two videographers, which allows us to capture multiple angles during the ceremony, guest reactions, and seamless coverage throughout the day.",
    ],
  },
  {
    question: "How do you capture audio during ceremonies and speeches?",
    answer: [
      "We use professional audio equipment, including microphones on the officiant and speakers, along with backup recorders. Clear, high-quality audio is essential for vows, readings, and toasts.",
    ],
  },
  {
    question: "What style of films do you create?",
    answer: [
      "Our films are cinematic, emotional, and movement-driven. We focus on real moments and natural interactions rather than staged or overly posed footage. Every film is crafted to feel timeless and personal.",
    ],
  },
  {
    question: "Do you film the full ceremony and speeches?",
    answer: [
      "Yes. Full ceremony and speech edits are available as add-ons. These are thoughtfully edited with multiple camera angles and professionally synced audio.",
    ],
  },
  {
    question: "Will you capture family moments and interactions?",
    answer: [
      "Yes. While our style leans documentary and candid, we are intentional about capturing meaningful family moments, reactions, and connections throughout your day.",
    ],
  },
  {
    question: "Can you work in low-light reception venues?",
    answer: [
      "Yes. We are experienced in low-light environments and bring professional lighting and equipment to ensure your reception footage looks clean, cinematic, and flattering.",
    ],
  },
  {
    question: "Do you travel for weddings?",
    answer: [
      "Yes. We are based in Western North Carolina and travel throughout the Southeast and beyond. Travel details are discussed during the booking process.",
    ],
  },
  {
    question: "How long does it take to receive our film?",
    answer: [
      "Typical turnaround is 6 to 8 weeks, depending on the season. Peak wedding months may take a bit longer, but we always keep you updated along the way.",
    ],
  },
  {
    question: "How many weddings do you take each year?",
    answer: [
      "We intentionally limit the number of weddings we take to ensure every couple receives our full creative attention and care.",
    ],
  },
  {
    question: "How do we know if you are the right fit?",
    answer: [
      "If you value storytelling, emotion, and a calm, unobtrusive presence, and you want a film that feels real rather than staged, we are likely a great fit. We are always happy to chat and make sure it feels right for both sides.",
    ],
  },
]

const photographyFaqs = [
  {
    question: "What is your photography style?",
    answer: [
      "Our style blends documentary and editorial. We focus on authentic, candid moments while also creating intentional, beautifully composed portraits. The result is a timeless collection that tells your story naturally.",
    ],
  },
  {
    question: "How many photographers will be at our wedding?",
    answer: [
      "All of our packages include two photographers. This ensures complete coverage of both partners getting ready, multiple angles during the ceremony, and the ability to capture candid moments throughout the day.",
    ],
  },
  {
    question: "How many photos will we receive?",
    answer: [
      "The number varies based on your coverage hours and the events of the day. On average, couples receive 50 to 75 edited images per hour of coverage. Every image is individually edited and color-corrected.",
    ],
  },
  {
    question: "When will we receive our photos?",
    answer: [
      "Your full gallery will be delivered within 6 to 8 weeks of your wedding day. During peak season, delivery may take slightly longer, but we always keep you updated.",
    ],
  },
  {
    question: "Do you provide print release?",
    answer: [
      "Yes. All of our packages include a full print release, meaning you own the rights to print your images anywhere you choose for personal use.",
    ],
  },
  {
    question: "How do we receive our photos?",
    answer: [
      "Your images are delivered through a beautiful online gallery where you can view, download, and share your photos. You can also order prints directly through the gallery.",
    ],
  },
  {
    question: "Do you offer engagement sessions?",
    answer: [
      "Yes. Engagement sessions are a great way for us to get comfortable with each other before the wedding day. They can be added to any package and are perfect for save-the-dates and wedding websites.",
    ],
  },
  {
    question: "Can we create a shot list for family formals?",
    answer: [
      "Absolutely. We encourage you to provide a list of must-have family groupings before the wedding. This helps us work efficiently so you can get back to celebrating.",
    ],
  },
  {
    question: "Do you photograph in harsh midday light?",
    answer: [
      "We are experienced in all lighting conditions. While golden hour provides the most flattering light, we know how to find open shade, use reflectors, and position couples to create beautiful images any time of day.",
    ],
  },
  {
    question: "Can we book photography and videography together?",
    answer: [
      "Yes. As a husband and wife team offering both services, we work seamlessly together. Booking both ensures a cohesive vision and experience, and we coordinate to stay out of each other's shots.",
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
              Questions We Get Asked
            </h1>
            <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
              Here are some of the things couples ask us most. If you do not see your question here, feel free to reach
              out.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding FAQ Section */}
      <section className="bg-[#1a1d23] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">Wedding Videography</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {weddingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`wedding-${index}`}
                  className="bg-[#252830] border border-white/10 rounded-lg px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-serif text-white hover:text-accent transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-white/80 font-light leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Photography FAQ Section */}
      <section className="bg-[#E8E4DF] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-center">Wedding Photography</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {photographyFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`photo-${index}`}
                  className="bg-white border border-foreground/10 rounded-lg px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-serif text-foreground hover:text-accent transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-foreground/80 font-light leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8E4DF] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-foreground/70 font-light mb-8 max-w-2xl mx-auto">
            We are happy to answer anything. Reach out and let&apos;s talk about your day.
          </p>
          <div className="inline-flex flex-col items-center space-y-3">
            <Link
              href="/inquire"
              className="inline-block px-8 py-4 bg-secondary-foreground text-primary-foreground font-serif tracking-wide hover:bg-secondary-foreground/90 transition-colors rounded-full"
            >
              Start the Conversation
            </Link>
            <p className="text-sm text-foreground/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
