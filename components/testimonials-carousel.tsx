"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Kaylee and Josh",
    image: "/testimonials/kaylee-josh.jpg",
    review:
      "Jennifer and Chris were the most amazing husband and wife team to work with! Both our engagement and our wedding video are an absolute dream. Thank you from the bottom of our hearts for all you did for us. There is nobody in this world I would recommend more to capture your special day!",
  },
  {
    name: "Shana and Frank",
    image: "/testimonials/shana-frank.jpg",
    review:
      "We eloped at Pretty Place Chapel, and choosing Chris and Jennifer as our videographers was one of the best decisions we made. They captured every moment so beautifully. Watching our video feels like stepping right back into that moment, and we will treasure it forever. Their creativity, attention to detail, and ability to make us feel comfortable made the whole experience effortless.",
  },
  {
    name: "Amber and Anthony",
    image: "/testimonials/amber-anthony.jpg",
    review:
      "Our video is the best part of our day. It still makes me tear up when I watch it. If I had to pick one absolute must have for our wedding, it would be this company! They captured our day perfectly and I can't thank them enough. They have a gift for sure! If you're on the fence about a videographer, don't be.",
  },
  {
    name: "Jadynn and Dawson",
    image: "/testimonials/jadynn-dawson.jpg",
    review:
      "Jennifer and Chris are amazing, and they truly went above and beyond (last minute I might add, as I had an emergency come up where we couldn't use our original videographer). They stepped right up and helped us in every aspect. They worked seamlessly with our other vendors, and I couldn't have asked for anything better. The video turnaround time was phenomenal. Martin Summit Media is no doubt worth every penny! Thank you guys again!",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-sidebar-primary-foreground p-8 md:p-12 lg:p-16 rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} testimonial photo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex gap-1 mb-6 justify-center" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-[#8b6f47]" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-secondary-foreground font-serif text-center italic">
                  "{testimonial.review}"
                </p>

                {/* Couple Name */}
                <p className="font-serif font-semibold text-secondary-foreground text-center text-xl">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-sidebar-primary-foreground hover:bg-secondary-foreground/10 p-2 rounded-full transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-secondary-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-sidebar-primary-foreground hover:bg-secondary-foreground/10 p-2 rounded-full transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-secondary-foreground" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-[#8b6f47] w-8" : "bg-secondary-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
