"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GeneralContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    instagram: "",
    phone: "",
    state: "",
    projectType: "",
    weddingDate: "",
    venueName: "",
    venueAddress: "",
    hearAboutUs: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/general-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setTimeout(() => {
          router.push("/thank-you")
        }, 500)
      } else {
        alert("There was an error submitting your inquiry. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto px-4 sm:px-0">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-foreground font-serif text-base">
          Full Name *
        </Label>
        <Input
          id="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Partner's Full Name */}
      <div className="space-y-2">
        <Label htmlFor="partnerName" className="text-foreground font-serif text-base">
          Partner's Full Name *
        </Label>
        <Input
          id="partnerName"
          type="text"
          required
          value={formData.partnerName}
          onChange={(e) => handleChange("partnerName", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-serif text-base">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Instagram Handles */}
      <div className="space-y-2">
        <Label htmlFor="instagram" className="text-foreground font-serif text-base">
          Instagram Handles
        </Label>
        <Input
          id="instagram"
          type="text"
          value={formData.instagram}
          onChange={(e) => handleChange("instagram", e.target.value)}
          placeholder="@yourusername, @partnerusername"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground font-serif text-base">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* State of Residence */}
      <div className="space-y-2">
        <Label htmlFor="state" className="text-foreground font-serif text-base">
          State of Residence *
        </Label>
        <Input
          id="state"
          type="text"
          required
          value={formData.state}
          onChange={(e) => handleChange("state", e.target.value)}
          placeholder="NC has 7% sales tax"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <Label htmlFor="projectType" className="text-foreground font-serif text-base">
          What Type of Project *
        </Label>
        <Select required value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
          <SelectTrigger className="bg-white border-gray-300 text-gray-900 font-serif h-12 text-base">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Wedding">Wedding</SelectItem>
            <SelectItem value="Elopement">Elopement</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Wedding Date */}
      <div className="space-y-2">
        <Label htmlFor="weddingDate" className="text-foreground font-serif text-base">
          Wedding Date *
        </Label>
        <Input
          id="weddingDate"
          type="date"
          required
          value={formData.weddingDate}
          onChange={(e) => handleChange("weddingDate", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base [color-scheme:light]"
        />
      </div>

      {/* Venue Name */}
      <div className="space-y-2">
        <Label htmlFor="venueName" className="text-foreground font-serif text-base">
          Name of Wedding Venue *
        </Label>
        <Input
          id="venueName"
          type="text"
          required
          value={formData.venueName}
          onChange={(e) => handleChange("venueName", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Venue Address */}
      <div className="space-y-2">
        <Label htmlFor="venueAddress" className="text-foreground font-serif text-base">
          Address of Wedding Venue *
        </Label>
        <Input
          id="venueAddress"
          type="text"
          required
          value={formData.venueAddress}
          onChange={(e) => handleChange("venueAddress", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* How Did You Hear About Us */}
      <div className="space-y-2">
        <Label htmlFor="hearAboutUs" className="text-foreground font-serif text-base">
          How Did You Hear About Us *
        </Label>
        <Select required value={formData.hearAboutUs} onValueChange={(value) => handleChange("hearAboutUs", value)}>
          <SelectTrigger className="bg-white border-gray-300 text-gray-900 font-serif h-12 text-base">
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

      {/* Tell Us More */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-serif text-base">
          Tell Us More About Your Day *
        </Label>
        <Textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif resize-none min-h-[120px] text-base"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1e1e1e] hover:bg-[#2e2e2e] text-white font-serif text-lg h-14"
      >
        {isSubmitting ? "Submitting..." : "Check Your Date"}
      </Button>

      <p className="text-center text-foreground/60 font-serif text-sm mt-4">
        No pressure. We typically respond within one business day.
      </p>
    </form>
  )
}
