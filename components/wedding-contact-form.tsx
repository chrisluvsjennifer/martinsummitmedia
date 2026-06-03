"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function WeddingContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    weddingDate: "",
    venueName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/wedding-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          router.push("/thank-you")
        }, 500)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto px-4 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white font-serif text-base">
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
            placeholder="Your first name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white font-serif text-base">
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white font-serif text-base">
          Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="weddingDate" className="text-white font-serif text-base">
          Wedding Date *
        </Label>
        <Input
          id="weddingDate"
          name="weddingDate"
          type="date"
          value={formData.weddingDate}
          onChange={handleChange}
          required
          className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="venueName" className="text-white font-serif text-base">
          Name of Wedding Venue *
        </Label>
        <Input
          id="venueName"
          name="venueName"
          value={formData.venueName}
          onChange={handleChange}
          required
          className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
          placeholder="Venue name or location"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white font-serif text-base">
          Tell us more about your big day *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-white border-white/30 text-gray-900 placeholder:text-gray-500 font-serif resize-none min-h-[120px] text-base"
          placeholder="Share your story, vision, and what's important to you..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-serif text-lg h-14"
        size="lg"
        variant="secondary"
      >
        {isSubmitting ? "Sending..." : "Start a Conversation"}
      </Button>

      {submitStatus === "success" && (
        <p className="text-center text-white font-serif text-sm">Thank you! We'll be in touch within one business day.</p>
      )}

      {submitStatus === "error" && (
        <p className="text-center text-red-400 font-serif text-sm">
          Something went wrong. Please try again or email us directly at hello@martinsummitmedia.com
        </p>
      )}
    </form>
  )
}
