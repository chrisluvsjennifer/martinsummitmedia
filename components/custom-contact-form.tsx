"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface CustomContactFormProps {
  variant?: "default" | "light"
}

export function CustomContactForm({ variant = "default" }: CustomContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectType, setProjectType] = useState("")
  const [hearAboutUs, setHearAboutUs] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // Prepare data for Zapier webhook
    const data = {
      fullName: formData.get("fullName"),
      partnerName: formData.get("partnerName"),
      email: formData.get("email"),
      instagramHandles: formData.get("instagramHandles"),
      phone: formData.get("phone"),
      state: formData.get("state"),
      projectType: projectType,
      eventDate: formData.get("eventDate"),
      venueName: formData.get("venueName"),
      venueAddress: formData.get("venueAddress"),
      hearAboutUs: hearAboutUs,
      bigDayDetails: formData.get("bigDayDetails"),
    }

    console.log("[v0] Submitting form data to Zapier:", data)

    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/20999175/uwdddvq/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(data),
      })

      console.log("[v0] Zapier response received")

      console.log("[v0] Form submitted, redirecting to thank you page")
      router.push("/thank-you")
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("An error occurred. Please try again.")
      setIsSubmitting(false)
    }
  }

  const textClass = variant === "light" ? "text-white" : ""
  const mutedTextClass = variant === "light" ? "text-white/70" : "text-muted-foreground"
  const inputClass = variant === "light" ? "text-white placeholder:text-white/50" : ""
  const dateInputClass = variant === "light" ? "text-white placeholder:text-white/50 [color-scheme:dark]" : ""

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className={`text-sm ${textClass}`}>
            Full Name (First/Last) <span className="text-red-500">*</span>
          </Label>
          <Input id="fullName" name="fullName" type="text" required placeholder="John Smith" className={inputClass} />
        </div>

        {/* Partner's Name */}
        <div className="space-y-2">
          <Label htmlFor="partnerName" className={`text-sm ${textClass}`}>
            Partner's Name (First/Last) <span className="text-red-500">*</span>
          </Label>
          <Input
            id="partnerName"
            name="partnerName"
            type="text"
            required
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className={`text-sm ${textClass}`}>
            Email <span className="text-red-500">*</span>
          </Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone" className={`text-sm ${textClass}`}>
            Best Contact Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className={inputClass} />
        </div>

        {/* Instagram Handles */}
        <div className="space-y-2">
          <Label htmlFor="instagramHandles" className={`text-sm ${textClass}`}>
            Instagram Handles
          </Label>
          <Input
            id="instagramHandles"
            name="instagramHandles"
            type="text"
            placeholder="@yourusername"
            className={inputClass}
          />
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label htmlFor="state" className={`text-sm ${textClass}`}>
            What State Do You Reside In? <span className="text-red-500">*</span>
          </Label>
          <Input id="state" name="state" type="text" required placeholder="North Carolina" className={inputClass} />
        </div>

        {/* Type of Project */}
        <div className="space-y-2">
          <Label htmlFor="projectType" className={`text-sm ${textClass}`}>
            Type of Project <span className="text-red-500">*</span>
          </Label>
          <Select name="projectType" required value={projectType} onValueChange={setProjectType}>
            <SelectTrigger className={inputClass}>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Wedding">Wedding</SelectItem>
              <SelectItem value="Elopement">Elopement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Date */}
        <div className="space-y-2">
          <Label htmlFor="eventDate" className={`text-sm ${textClass}`}>
            Wedding/Elopement Date <span className="text-red-500">*</span>
          </Label>
          <Input id="eventDate" name="eventDate" type="date" required className={dateInputClass} />
        </div>

        {/* Venue Name */}
        <div className="space-y-2">
          <Label htmlFor="venueName" className={`text-sm ${textClass}`}>
            Name of Wedding Venue <span className="text-red-500">*</span>
          </Label>
          <Input
            id="venueName"
            name="venueName"
            type="text"
            required
            placeholder="The Grand Ballroom"
            className={inputClass}
          />
        </div>

        {/* Venue Address */}
        <div className="space-y-2">
          <Label htmlFor="venueAddress" className={`text-sm ${textClass}`}>
            Address of Wedding Venue <span className="text-red-500">*</span>
          </Label>
          <Input
            id="venueAddress"
            name="venueAddress"
            type="text"
            required
            placeholder="123 Main St, City, State"
            className={inputClass}
          />
        </div>
      </div>

      <p className={`text-xs ${mutedTextClass} -mt-3`}>7% sales tax is added for NC residents</p>

      {/* How Did You Hear About Us - Full Width */}
      <div className="space-y-2">
        <Label htmlFor="hearAboutUs" className={`text-sm ${textClass}`}>
          How Did You Hear About Us?
        </Label>
        <Select name="hearAboutUs" value={hearAboutUs} onValueChange={setHearAboutUs}>
          <SelectTrigger className={inputClass}>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="Google">Google</SelectItem>
            <SelectItem value="Facebook">Facebook</SelectItem>
            <SelectItem value="Instagram">Instagram</SelectItem>
            <SelectItem value="TikTok">TikTok</SelectItem>
            <SelectItem value="YouTube">YouTube</SelectItem>
            <SelectItem value="Vendor Referral">Vendor Referral</SelectItem>
            <SelectItem value="Client Referral">Client Referral</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tell Us About Your Big Day textarea field - full width, required */}
      <div className="space-y-2">
        <Label htmlFor="bigDayDetails" className={`text-sm ${textClass}`}>
          Tell Us About Your Big Day <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="bigDayDetails"
          name="bigDayDetails"
          required
          rows={5}
          placeholder="Share your vision, story, and what makes your day special..."
          className={`resize-none ${inputClass}`}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#dba57d] hover:bg-[#c99368] text-white font-serif text-lg py-6"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
