const features = [
  {
    title: "Husband & Wife Team",
    description:
      "Working with a married couple means we understand the dynamics of partnership and love. We capture both perspectives seamlessly, ensuring no moment is missed.",
  },
  {
    title: "Cinematic Storytelling",
    description:
      "We do not just document. We craft a narrative. Every photo and film is carefully edited to tell your unique story with emotion, artistry, and authenticity.",
  },
  {
    title: "Unobtrusive Approach",
    description:
      "We believe the best moments happen when you are being yourselves. Our documentary-style approach allows you to be fully present while we capture the magic.",
  },
  {
    title: "Attention to Detail",
    description:
      "From the way light falls on your dress to the subtle glances you share, we notice and capture the small details that make your day uniquely yours.",
  },
]

export function WhatSetsUsApart() {
  return (
    <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] bg-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-16 uppercase tracking-wider text-white">
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-serif text-2xl font-light text-white">{feature.title}</h3>
              <p className="font-serif text-lg leading-relaxed text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
