"use client"

import { Button } from "@/components/ui/button"

export function AvailabilityDialog({ className }: { className?: string }) {
  return (
    <a href="/inquire">
      <Button size="lg" className={className || "bg-accent text-accent-foreground hover:bg-accent/90"}>
        Start the Conversation
      </Button>
    </a>
  )
}
