"use client"

import { MessageCircle, Calendar, Heart, Camera, Film, Package } from "lucide-react"

const journeySteps = [
  {
    icon: MessageCircle,
    title: "Initial Consultation",
    description: [
      "We start with a relaxed discovery call where we learn about your story, your vision for the day, and what matters most to you.",
      "This is where we start building trust, connection, and a vision for a wedding day that feels fully you, whether intimate or grand.",
    ],
  },
  {
    icon: Calendar,
    title: "Planning & Preparation",
    description: [
      "Once you are booked, we begin crafting your experience together.",
      "From discussing your timeline, scouting locations, planning for the best light, and understanding your day's flow, we are with you every step.",
      "We believe your day should feel effortless, so we guide you through the details while keeping space for spontaneity and authentic moments.",
    ],
  },
  {
    icon: Heart,
    title: "Engagement or Pre-Wedding Session (Optional)",
    description: [
      "We offer an optional session to help you get comfortable in front of the camera before your big day.",
      "Whether we explore a meaningful location, capture golden hour in nature, or document your connection in the city, it is a chance to connect, breathe, and create beautiful images without pressure.",
    ],
    note: "Subject to location",
  },
  {
    icon: Camera,
    title: "Your Wedding Day",
    description: [
      "On your day, we blend into the quiet moments and the joyful ones, documenting each emotion with care and giving gentle guidance when needed.",
      "Whether you are exchanging vows on a mountaintop at sunrise, celebrating surrounded by loved ones in a beautiful venue, or exploring breathtaking landscapes together, we are there to capture it all with intention.",
      "This is your day to be present, feel everything deeply, and celebrate authentically. We simply help you remember it.",
    ],
  },
  {
    icon: Film,
    title: "Post-Production",
    description: [
      "Once the celebration is over, the storytelling begins.",
      "We carefully edit your photos and craft your film with intention: the movement, the emotion in voices and laughter, the quiet in-between moments that make your day uniquely yours.",
      "Color, tone, and story come together to create images and a cinematic experience that feel true to your celebration.",
    ],
  },
  {
    icon: Package,
    title: "Delivery",
    description: [
      "Within 6 to 8 weeks, you will receive your full photo gallery and cinematic film.",
      "Every image is individually edited and color-corrected. Your film is crafted to bring your wedding day back to life, capturing the movement, atmosphere, and emotion of your experience.",
      "Everything will be delivered in a beautiful online space, ready to download, share, and revisit for the rest of your lives.",
    ],
  },
]

export function JourneyCarousel() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {journeySteps.map((step, index) => {
        const Icon = step.icon
        return (
          <div
            key={index}
            className="backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border/50 hover:border-border transition-all duration-300 bg-foreground"
          >
            <div className="flex gap-6 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-light mb-3 text-muted">{step.title}</h3>
                <div className="text-lg font-serif leading-relaxed text-muted">
                  {step.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex < step.description.length - 1 ? "mb-1" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {step.note && <p className="text-sm font-serif mt-4 text-accent italic">{step.note}</p>}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
