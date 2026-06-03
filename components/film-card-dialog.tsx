"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface FilmCardDialogProps {
  couple: string
  description: string
  videoId: string
  thumbnail: string
}

export function FilmCardDialog({ couple, description, videoId, thumbnail }: FilmCardDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="overflow-hidden border-none shadow-none rounded-none bg-transparent cursor-pointer w-full text-left"
          aria-label={`Play ${couple} wedding film video`}
        >
          <div className="aspect-video bg-black relative overflow-hidden group">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={`${couple} wedding film thumbnail`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center" aria-hidden="true">
                <svg className="w-8 h-8 text-[#1a1d23] ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none">
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`${couple} wedding film`}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
