"use client"
import { useState, useEffect, useRef } from "react"
import { Play, Pause } from "lucide-react"

export default function BlogPostVideo() {
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

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

  const togglePlay = () => {
    if (iframeRef.current) {
      const command = isPlaying ? "pauseVideo" : "playVideo"
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "*")
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="mt-16 pt-16 border-t border-foreground/10">
      <div className="relative w-full overflow-hidden aspect-video mb-12" ref={videoRef}>
        {showVideo ? (
          <>
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/G1No6bDI2Y8?autoplay=1&mute=0&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&autohide=1&playsinline=1&playlist=G1No6bDI2Y8&enablejsapi=1"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Kaylee & Josh Wedding Film"
              loading="lazy"
            />
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 bg-background/80 hover:bg-background/90 text-foreground p-4 rounded-full transition-all duration-200 z-10"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </button>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Loading video...</p>
          </div>
        )}
      </div>
    </div>
  )
}
