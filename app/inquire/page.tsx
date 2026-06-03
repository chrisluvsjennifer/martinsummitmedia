"use client"
import { HoneyBookForm } from "@/components/honeybook-form"
import Image from "next/image"

export default function InquirePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 font-serif bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-balance uppercase font-thin">
            Let&apos;s Start a Conversation
          </h1>
          <div className="h-1 bg-[#dba57d] mx-auto w-48 md:w-64 opacity-60"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/90">
            Tell us a little about your day. We will get back to you within 24 hours to see if we are a good fit.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-background p-8 md:p-12 lg:p-16 rounded-lg">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                <Image src="/testimonials/kaylee-josh.jpg" alt="Kaylee and Josh" fill className="object-cover" />
              </div>
            </div>

            {/* 5 Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-[#8b6f47]" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground font-serif text-center italic">
              "Jennifer and Chris were the most amazing husband and wife team to work with! Both our engagement and our
              wedding video are an absolute dream. Thank you from the bottom of our hearts for all you did for us. There
              is nobody in this world I would recommend more to capture your special day!"
            </p>

            {/* Couple Name */}
            <p className="font-serif font-semibold text-foreground text-center text-xl">Kaylee and Josh</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-3xl text-center mb-8 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light uppercase tracking-wide text-secondary-foreground mb-3 md:mb-4">
            Let&apos;s See If We&apos;re a Good Fit
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-serif font-light text-foreground/70">
            This starts a conversation, not a commitment.
          </p>
        </div>
        <div className="container mx-auto max-w-3xl px-0 sm:px-4">
          <HoneyBookForm />
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl uppercase font-thin font-serif">What Happens Next</h2>
          <div className="h-1 bg-[#dba57d] mx-auto w-48 md:w-64 opacity-60"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12">
            <div className="space-y-4">
              <div className="text-5xl font-serif text-[#8b6f47]">01</div>
              <h3 className="text-xl font-serif font-semibold">We Will Respond Quickly</h3>
              <p className="text-foreground/80 leading-relaxed">
                You will hear from us within 24 to 48 hours. We will review your details and reach out to start the
                conversation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl font-serif text-[#8b6f47]">02</div>
              <h3 className="text-xl font-serif font-semibold">Let&apos;s Talk About Your Day</h3>
              <p className="text-foreground/80 leading-relaxed">
                We will set up a call or video chat to learn more about your vision, answer questions, and see if we are
                the right fit.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-5xl font-serif text-[#8b6f47]">03</div>
              <h3 className="text-xl font-serif font-semibold">Secure Your Date</h3>
              <p className="text-foreground/80 leading-relaxed">
                If it feels right, we will send over a contract and invoice. Once you sign and pay your retainer, your
                date is officially yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-4 lg:px-8 font-serif bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl uppercase font-thin">Prefer to Reach Out Directly?</h2>
          <p className="text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
            Feel free to email or call us. We are always happy to answer questions and talk about your wedding.
          </p>
        </div>
      </section>
    </main>
  )
}
