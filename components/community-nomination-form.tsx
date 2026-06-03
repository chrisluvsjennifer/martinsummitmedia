"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function CommunityNominationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    nomineeName: "",
    nomineeCity: "",
    nomineeState: "",
    situation: "",
    whyShare: "",
    hasConsent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/community-nomination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("There was an error submitting your nomination. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your nomination. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <h3 className="text-2xl font-serif text-white">Thank You</h3>
        <p className="text-white/80 font-serif font-light max-w-md mx-auto">
          We appreciate you taking the time to share this story with us. We will review your nomination and reach out if we would like to learn more.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4 text-white/80 font-serif mb-8">
        <p className="text-lg md:text-xl text-white/90">
          If you would like to nominate someone, please fill out the form below.
        </p>
        <p className="font-light">When you reach out, it would help if you could include:</p>
        <ul className="space-y-2 pl-6">
          <li className="flex items-start gap-3">
            <span className="text-[#dba57d]">•</span>
            <span>Their name</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dba57d]">•</span>
            <span>A little about what they are going through</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#dba57d]">•</span>
            <span>Why you feel their story should be shared</span>
          </li>
        </ul>
      </div>

      {/* Your Name */}
      <div className="space-y-2">
        <Label htmlFor="yourName" className="text-white font-serif text-base">
          Your Name *
        </Label>
        <Input
          id="yourName"
          type="text"
          required
          value={formData.yourName}
          onChange={(e) => handleChange("yourName", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Your Email */}
      <div className="space-y-2">
        <Label htmlFor="yourEmail" className="text-white font-serif text-base">
          Your Email *
        </Label>
        <Input
          id="yourEmail"
          type="email"
          required
          value={formData.yourEmail}
          onChange={(e) => handleChange("yourEmail", e.target.value)}
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Nominee Name */}
      <div className="space-y-2">
        <Label htmlFor="nomineeName" className="text-white font-serif text-base">
          Their Name *
        </Label>
        <Input
          id="nomineeName"
          type="text"
          required
          value={formData.nomineeName}
          onChange={(e) => handleChange("nomineeName", e.target.value)}
          placeholder="Name of the person you are nominating"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
        />
      </div>

      {/* Nominee Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nomineeCity" className="text-white font-serif text-base">
            Their City *
          </Label>
          <Input
            id="nomineeCity"
            type="text"
            required
            value={formData.nomineeCity}
            onChange={(e) => handleChange("nomineeCity", e.target.value)}
            placeholder="City"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nomineeState" className="text-white font-serif text-base">
            Their State *
          </Label>
          <Input
            id="nomineeState"
            type="text"
            required
            value={formData.nomineeState}
            onChange={(e) => handleChange("nomineeState", e.target.value)}
            placeholder="State"
            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif h-12 text-base"
          />
        </div>
      </div>

      {/* What They Are Going Through */}
      <div className="space-y-2">
        <Label htmlFor="situation" className="text-white font-serif text-base">
          A Little About What They Are Going Through *
        </Label>
        <Textarea
          id="situation"
          required
          rows={5}
          value={formData.situation}
          onChange={(e) => handleChange("situation", e.target.value)}
          placeholder="Please share what this person is currently facing..."
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif resize-none min-h-[120px] text-base"
        />
      </div>

      {/* Why Their Story Should Be Shared */}
      <div className="space-y-2">
        <Label htmlFor="whyShare" className="text-white font-serif text-base">
          Why You Feel Their Story Should Be Shared *
        </Label>
        <Textarea
          id="whyShare"
          required
          rows={5}
          value={formData.whyShare}
          onChange={(e) => handleChange("whyShare", e.target.value)}
          placeholder="Tell us why you think their story could inspire or help others..."
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-serif resize-none min-h-[120px] text-base"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start space-x-3 pt-2">
        <Checkbox
          id="hasConsent"
          checked={formData.hasConsent}
          onCheckedChange={(checked) => handleChange("hasConsent", checked === true)}
          className="border-white/50 data-[state=checked]:bg-[#dba57d] data-[state=checked]:border-[#dba57d] mt-1"
          required
        />
        <Label htmlFor="hasConsent" className="text-white/80 font-serif text-sm font-light leading-relaxed cursor-pointer">
          I confirm that the person I am nominating would be comfortable with their story being shared publicly. *
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.hasConsent}
        className="w-full bg-[#dba57d] hover:bg-[#c99468] text-[#1a1d23] font-serif text-lg h-14 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Nomination"}
      </Button>

      <p className="text-center text-white/50 font-serif text-sm mt-4">
        We know there are a lot of incredible people in this community who may be going through difficult times. Our hope is to help shine a light on their story and remind people that kindness still exists.
      </p>

      <p className="text-center text-white/60 font-serif text-base mt-6">
        Thank you for helping us find these stories.
      </p>
    </form>
  )
}
