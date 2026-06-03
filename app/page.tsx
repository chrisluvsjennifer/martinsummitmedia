"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { FilmCardDialog } from "@/components/film-card-dialog"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { HoneyBookForm } from "@/components/honeybook-form"

const DynamicCarousel = dynamic(() => import("@/components/ui/carousel").then((mod) => ({ default: mod.Carousel })), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
})

export default function HomePage() {
  const [currentCoupleIndex, setCurrentCoupleIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  const couples = [
    {
      names: "",
      image: "/images/highlight-20thumb.jpeg",
      location: "Charlotte, NC",
    },
    {
      names: "",
      image: "/images/lakeside-wedding.jpg",
      location: "Shorter, AL",
      imagePosition: "object-cover object-[40%_center]", // Updated line
    },
    {
      names: "",
      image: "/images/ig-20thumb.jpeg",
      location: "Cannon Beach, OR",
    },
    {
      names: "",
      image: "/images/ig-20thumb-20copy.jpeg",
      location: "Elk Flats, Nehalem, OR",
    },
  ]

  const films = [
    {
      couple: "Kailey & Jacob",
      romanNumeral: "I",
      location: "Pretty Place Chapel Wedding",
      description: "Emotional First Look & Heartfelt Vows, Pretty Place Wedding Video, Pretty Pace Chapel",
      videoId: "y6xKAsmRDLk",
      thumbnail: "https://img.youtube.com/vi/y6xKAsmRDLk/maxresdefault.jpg",
    },
    {
      couple: "Kylie & Kat",
      romanNumeral: "II",
      location: "Snooper's Rock Chattanooga TN",
      description: "Beautiful destination elopement | Snooper's Rock Chattanooga TN | Kylie and Kat",
      videoId: "Upemo53SjDM",
      thumbnail: "https://img.youtube.com/vi/Upemo53SjDM/maxresdefault.jpg",
    },
    {
      couple: "Kaylee & Josh",
      romanNumeral: "III",
      location: "Sunset Farms, NC",
      description: "Cinematic Christmas Wedding at Sunset Farms | Kaylee & Josh",
      videoId: "G1No6bDI2Y8",
      thumbnail: "https://img.youtube.com/vi/G1No6bDI2Y8/maxresdefault.jpg",
    },
  ]

  const featuredPhotos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-69-m0r3I3PNXoAASWh0JHIOI06w3yTjWN.jpg",
      alt: "Romantic couple portrait with bride in white dress and groom in burgundy suit at mountain overlook",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-16-KHp6hXLw41nQ8saVDQ1BOyALlE7ICR.jpg",
      alt: "Bride laughing with bridesmaids in sage green dresses on dock by lake",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-6-5uPyERIgNyjKKe8hH0EaOcHr5F6kdf.jpg",
      alt: "Intimate couple portrait with golden backlight showing bride's tree line tattoo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-53-TIh110zLABHkEMuTHWf4dq2RX7fooU.jpg",
      alt: "Couple kissing with fall leaves flying around them",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-33-WZkYUNCWAlUh7XW4l7brdGOb6GeAwO.jpg",
      alt: "Romantic dip kiss in forest with flowing veil",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-25-1rppz23SFVKRfxTsPzTCbBrdVGfJLn.jpg",
      alt: "Wedding rings nestled in pink rose on bouquet",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-82-uXFrrCV7L0RVbQ7RKbdRoXjD7N9V0m.jpg",
      alt: "Couple kissing on deck with mountain views and fall foliage",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-4-uMXqWAQkLaMC70q5lDd2HIxaJLqW8z.jpg",
      alt: "Wedding party forming hand tunnel for couple walking through",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-13-5oiJYooZ98LOS113ttywylzM3QJxhY.jpg",
      alt: "Wedding dress hanging in window with custom Mrs. name hanger",
    },
  ]

  const goToPrevious = () => {
    setCurrentCoupleIndex((prev) => (prev === 0 ? couples.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentCoupleIndex((prev) => (prev === couples.length - 1 ? 0 : prev + 1))
  }

  const getVisibleCouples = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentCoupleIndex + i) % couples.length
      visible.push(couples[index])
    }
    return visible
  }

  const visibleCouples = getVisibleCouples()

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true)
        }
      },
      {
        rootMargin: "200px",
      },
    )

    if (videoRef.current) {
      videoObserver.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Video Showreel Section - Full Bleed with Overlay */}
      <section className="relative bg-secondary-foreground">
        <div className="relative w-full overflow-hidden h-[85vh] md:h-screen" ref={videoRef}>
          {showVideo ? (
            <>
              <iframe
                src="https://www.youtube.com/embed/Wiw7Lx3FNjs?autoplay=1&mute=1&loop=1&playlist=Wiw7Lx3FNjs&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[120%] md:h-[120%] md:scale-110"
                style={{ pointerEvents: "none" }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Alessandra and Ross Wedding Film"
                loading="lazy"
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Loading video...</p>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 font-serif uppercase tracking-wide">
              Honest, Cinematic Stories.
              <br />
              <span className="text-[#dba57d]">Real Moments That Last.</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-white/90 max-w-3xl mx-auto font-serif">
              Cinematic wedding films and photography that feel honest, emotional, and timeless.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-4 md:mt-6 mb-3 md:mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/95 font-serif text-xs md:text-base">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-white/95 font-serif text-xs md:text-base">Trusted by Couples Across the Southeast</span>
              </div>
              <div className="flex items-center gap-2 bg-[#dba57d]/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#dba57d]/40">
                <span className="text-white/95 font-serif text-xs md:text-base font-medium">Limited 2026 Dates</span>
              </div>
            </div>
            <p className="text-lg md:text-2xl font-light text-white/95 mt-1 md:mt-2 font-serif">
              Wedding Films Starting at $3,200
            </p>
            <p className="text-lg md:text-2xl font-light text-white/95 font-serif">
              Wedding Photos Starting at $3,000
            </p>
            <p className="text-sm md:text-base font-light text-white/80 mt-4 md:mt-6 max-w-xl mx-auto font-serif">
              See if your date is available and what working together looks like.
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-serif text-sm md:text-lg mt-3 md:mt-4"
              size="lg"
              variant="secondary"
            >
              Check Availability
            </Button>
            <a
              href="https://calendly.com/martinsummitmedia/discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-white/80 hover:text-white font-serif text-sm md:text-base underline underline-offset-4 transition-colors"
            >
              Or Book a Discovery Call
            </a>
            <p className="text-sm text-white/70 font-serif mt-2">We typically respond within one business day.</p>
          </div>
        </div>
      </section>

      {/* Intro Section - Single Postcard with Stamp */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="relative flex flex-col md:flex-row md:items-center animate-in zoom-in-95 duration-700">
            {/* Photo on the left - arch shape */}
            <div className="relative w-full md:w-2/5 h-[450px] md:h-[600px] flex-shrink-0 z-10 overflow-hidden rounded-t-full rounded-b-lg">
              <Image
                src="/chris-jennifer.png"
                alt="Chris and Jennifer Martin"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Content on the right - cream/beige card */}
            <div className="bg-[#f5efe9] md:-ml-16 md:pl-32 lg:pl-40 p-6 md:p-10 lg:p-12 flex flex-col justify-center relative shadow-xl">
              <div className="space-y-4 md:space-y-5">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 md:mb-8">
                  A Different Way to Tell Your Story
                </h2>

                <div className="space-y-4 text-sm md:text-base lg:text-lg leading-relaxed text-foreground font-serif font-light">
                  <p>
                    Your wedding day should not feel like a production. It should feel like you: honest, emotional,
                    intentional, and natural.
                  </p>

                  <p>
                    We&apos;re Chris & Jennifer, a husband and wife photography and filmmaking team based in Western
                    North Carolina. We work with couples who care more about connection than performance.
                  </p>

                  <p>
                    Just honest storytelling, thoughtful guidance when you need it, and films and photographs that feel
                    timeless.
                  </p>
                </div>

                <div className="pt-1 md:pt-2">
                  <Link
                    href="/about"
                    className="inline-block text-[#673c1c] hover:text-[#97725c] transition-all duration-300 font-serif text-lg md:text-xl hover:scale-105 font-light"
                  >
                    Meet Chris & Jennifer →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Films Section */}
      <section className="bg-[#1a1d23] py-12 md:py-16 px-4 lg:px-8 bg-secondary-foreground">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center mb-8 md:mb-12 text-balance text-white uppercase">
            The Films
          </h2>

          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {films.map((film, index) => (
              <div key={index} className="group">
                <div className="mb-3">
                  <FilmCardDialog
                    couple={film.couple}
                    description={film.description}
                    videoId={film.videoId}
                    thumbnail={film.thumbnail}
                  />
                </div>

                <div className="text-center space-y-2">
                  <div className="text-lg text-white font-serif">{film.couple}</div>

                  <div className="pt-1">
                    <p className="text-base text-white/60 font-serif leading-relaxed">{film.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/weddings"
              className="inline-block px-8 py-4 bg-[#C4A574] text-white font-serif text-lg rounded-sm hover:bg-[#B39564] transition-colors"
            >
              Explore Our Wedding Films
            </a>
          </div>
        </div>
      </section>

      {/* The Photos Section */}
      <section className="py-10 md:py-14 bg-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-center mb-6 md:mb-8 text-popover uppercase">
            The Photos
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {featuredPhotos.map((photo, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <div className="group relative w-40 h-52 md:w-48 md:h-64 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 px-4">
          <Link
            href="/portfolio/photography"
            className="inline-block px-6 py-3 bg-[#C4A574] text-white font-serif text-sm rounded-sm hover:bg-[#B39564] transition-colors"
          >
            View Photography Portfolio
          </Link>
        </div>
      </section>

      {/* Adventures Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#E8E4DF]">
        <div className="container mx-auto max-w-4xl text-card-foreground">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-12 md:mb-16 text-balance text-secondary-foreground font-light uppercase">
            Every Couple Has a Story Worth Remembering
          </h2>

          <div className="mb-12">
            {/* Adventure Elopements Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Adventure Elopements Section */}
              <div className="group relative overflow-hidden rounded-lg border-4 border-[#dba57d] shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl border-secondary-foreground">
                <div className="p-8 text-center bg-[#dba57d] transition-all duration-500 border-primary bg-foreground">
                  <h3 className="text-3xl md:text-4xl font-serif text-[#30324a] text-primary-foreground font-extralight uppercase">
                    Adventure Elopements
                  </h3>
                </div>

                <div className="overflow-hidden">
                  <div className="p-8 md:p-12 bg-[#d4dce8] bg-muted">
                    <p className="text-lg leading-relaxed font-serif text-[#30324a] mb-6">
                      A smaller, slower, more intentional day built entirely around the two of you.
                    </p>
                    <p className="text-lg leading-relaxed font-serif text-[#30324a] mb-6">
                      Adventure elopements strip away the noise and expectations, giving you the freedom to actually be
                      present with each other. No strict timelines. No pressure. No audience to perform for.
                    </p>
                    <p className="text-lg leading-relaxed font-serif text-[#30324a]">
                      Whether it's sunrise vows on a mountaintop, wandering through a quiet forest, or reading
                      handwritten letters by a lake, your day is shaped by what matters most: your connection, your
                      story, and the experience of exploring somewhere beautiful together.
                    </p>
                  </div>
                </div>
              </div>

              {/* Traditional Weddings Section */}
              <div className="group relative overflow-hidden rounded-lg border-4 border-[#dba57d] shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl border-secondary-foreground">
                <div className="p-8 text-center bg-[#dba57d] transition-all duration-500 border-primary bg-foreground">
                  <h3 className="text-3xl md:text-4xl font-serif text-[#30324a] text-primary-foreground font-extralight uppercase">
                    Traditional Weddings
                  </h3>
                </div>

                <div className="overflow-hidden">
                  <div className="p-8 md:p-12 bg-[#d4dce8] bg-muted">
                    <p className="text-lg leading-relaxed font-serif text-[#30324a] mb-6">
                      A fuller celebration with the people who matter most, captured with the same intentional approach.
                    </p>
                    <p className="text-lg leading-relaxed font-serif text-[#30324a] mb-6">
                      Traditional weddings don't have to feel rushed or overly posed. We bring the same focus on
                      authentic moments and real connection to your wedding day, no matter how many guests you invite.
                    </p>
                    <p className="text-lg leading-relaxed font-serif text-[#30324a]">
                      Instead of rigid shot lists and forced smiles, we document your day as it unfolds naturally. The
                      quiet moments before the ceremony, the way you look at each other during vows, and all the
                      laughter and tears in between. Your story, told honestly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-transparent">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full font-serif text-xl text-card-foreground border-transparent opacity-100 border-none bg-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 font-normal"
            >
              <Link href="/investment">See packages & details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center mb-12 md:mb-16 text-secondary-foreground uppercase">
            Kind Words from Our Couples
          </h2>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-20 px-4 lg:px-8 bg-sidebar-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center mb-12 md:mb-16 text-balance text-secondary-foreground font-light uppercase">
              The Experience
            </h2>
            <p className="text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-serif font-medium text-popover-foreground">
              Your wedding should feel natural and unhurried. We offer direction when it helps, step back when the
              moment is unfolding on its own, and keep everything smooth and simple from first inquiry to final
              delivery.
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-foreground/30 hover:bg-foreground/10 hover:text-foreground rounded-full font-serif text-xl font-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 text-muted bg-accent-foreground"
            >
              <Link href="/experience">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#30324a] uppercase tracking-wide font-serif">
              FOLLOW ON INSTAGRAM
            </h2>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl lg:text-2xl font-normal text-[#30324a] hover:text-[#8b6f47] transition-colors font-serif"
            >
              @martinsummitmedia
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#30324a]/20 mb-8 md:mb-12" />

          {/* Instagram Grid - Single Row */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/instagram-1-new.jpg"
                alt="Casual couple on beach with Haystack Rock"
                fill
                className="object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/lakeside-wedding.jpg"
                alt="Bride and groom by the lake"
                fill
                className="object-cover object-[40%_center] scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/instagram-3.jpeg"
                alt="Intimate black and white couple kiss"
                fill
                className="object-cover object-[center_15%] scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/instagram-4-forest.jpg"
                alt="Bride and groom holding hands in mossy forest"
                fill
                className="object-cover object-[center_15%] scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/instagram-5.jpeg"
                alt="Couple embracing on beach with sea stack"
                fill
                className="object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
            <a
              href="https://www.instagram.com/martinsummitmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/instagram-6.jpg"
                alt="Man lifting woman on beach, black and white"
                fill
                className="object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-125"
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Let's Get Started Section */}
      <section id="contact" className="py-16 md:py-24 px-4 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-balance text-foreground uppercase mb-3">
              Let&apos;s See If We&apos;re a Good Fit
            </h2>
            <p className="text-foreground/60 font-serif text-base md:text-lg">
              This starts a conversation, not a commitment.
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-0 sm:px-4">
            <HoneyBookForm />
          </div>
        </div>
      </section>
    </main>
  )
}
