"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const partnerName = `${formData.get("partnerFirstName")} ${formData.get("partnerLastName")}`.trim()
    const location = formData.get("location")
    const serviceInterest = formData.get("serviceInterest")
    const budget = formData.get("budget")
    const referral = formData.get("referral")
    const message = formData.get("message")

    const storyText = `Partner Name: ${partnerName}
Venue Name: ${location}
Service Needed: ${serviceInterest}
Budget: ${budget}
How did you hear about us: ${referral}
Instagram: 

Message: ${message}`

    const data = {
      "Full Name": `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
      Email: formData.get("email"),
      Phone: formData.get("phone"),
      "Project Type": formData.get("projectType"),
      "Event Date": formData.get("eventDate"),
      Story: storyText,
    }

    console.log("[v0] Homepage form - Data being sent to Zapier:", JSON.stringify(data, null, 2))

    try {
      const res = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        router.push("/thank-you")
      } else {
        alert("Submission failed. Please try again.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("An error occurred. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Your first name"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="partnerFirstName">Partner's First Name *</Label>
          <Input
            id="partnerFirstName"
            name="partnerFirstName"
            placeholder="Partner's first name"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="partnerLastName">Partner's Last Name *</Label>
          <Input
            id="partnerLastName"
            name="partnerLastName"
            placeholder="Partner's last name"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(828) 332-2785"
            required
            className="bg-background text-foreground h-12"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date *</Label>
          <Input id="eventDate" name="eventDate" type="date" required className="bg-background text-foreground h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <select
            id="projectType"
            name="projectType"
            required
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>option]:text-foreground"
          >
            <option value="" className="text-muted-foreground">
              Select project type
            </option>
            <option value="Wedding">Wedding</option>
            <option value="Elopement">Elopement</option>
            <option value="Engagement">Engagement</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Wedding Location *</Label>
          <Input
          id="location"
          name="location"
          placeholder="City, State or Venue Name"
          required
          className="bg-background text-foreground h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceInterest">What are you interested in? *</Label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>option]:text-foreground"
        >
          <option value="" className="text-muted-foreground">
            Select service
          </option>
          <option value="Videography">Videography</option>
          <option value="Photography">Photography</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range *</Label>
          <select
            id="budget"
            name="budget"
            required
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>option]:text-foreground"
          >
            <option value="" className="text-muted-foreground">
              Select budget range
            </option>
            <option value="Under $2,500">Under $2,500</option>
            <option value="$2,500 - $4,000">$2,500 - $4,000</option>
            <option value="$4,000 - $6,000">$4,000 - $6,000</option>
            <option value="$6,000+">$6,000+</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="referral">How did you hear about us? *</Label>
          <select
            id="referral"
            name="referral"
            required
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>option]:text-foreground"
          >
            <option value="" className="text-muted-foreground">
              Select option
            </option>
            <option value="Google Search">Google Search</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Friend/Family Referral">Friend/Family Referral</option>
            <option value="Vendor Referral">Vendor Referral</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your event *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your vision, what's important to you, and any questions you have..."
          rows={4}
          required
          className="bg-background text-foreground"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-xl bg-secondary font-extrabold text-card-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Begin my experience"}
      </Button>
      <p className="text-sm text-center text-muted-foreground font-light pt-2">
        We personally respond to every inquiry within one business day.
      </p>
    </form>
  )
}
