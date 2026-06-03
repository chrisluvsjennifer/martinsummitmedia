"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function MemoryCalculator() {
  const [timesWatched, setTimesWatched] = useState(10)
  const [peopleShared, setPeopleShared] = useState(5)
  const [futureFamily, setFutureFamily] = useState(2)
  const [showResult, setShowResult] = useState(false)

  const calculateMemories = () => {
    // Calculate total memories over 40 years
    // Times watched per year * 40 years
    const personalViews = timesWatched * 40
    // People shared with * average views per person over time
    const sharedViews = peopleShared * timesWatched * 8
    // Future family members * views over their lifetime
    const futureViews = futureFamily * timesWatched * 20

    return personalViews + sharedViews + futureViews
  }

  const totalMemories = calculateMemories()

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-[#1a1d23] rounded-lg p-8 md:p-12 space-y-8">
        {/* Slider 1 */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <label className="text-white/90 font-serif font-light text-base md:text-lg leading-relaxed flex-1">
              How many times do you think you'll watch your wedding film in the next year?
            </label>
            <span className="text-[#dba57d] font-serif text-2xl md:text-3xl font-light min-w-[3rem] text-right">
              {timesWatched}
            </span>
          </div>
          <Slider
            value={[timesWatched]}
            onValueChange={(value) => setTimesWatched(value[0])}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Slider 2 */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <label className="text-white/90 font-serif font-light text-base md:text-lg leading-relaxed flex-1">
              How many people will you share your film with, family, friends, loved ones?
            </label>
            <span className="text-[#dba57d] font-serif text-2xl md:text-3xl font-light min-w-[3rem] text-right">
              {peopleShared}
            </span>
          </div>
          <Slider
            value={[peopleShared]}
            onValueChange={(value) => setPeopleShared(value[0])}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Slider 3 */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <label className="text-white/90 font-serif font-light text-base md:text-lg leading-relaxed flex-1">
              How many children or future family members do you imagine will watch it over the years?
            </label>
            <span className="text-[#dba57d] font-serif text-2xl md:text-3xl font-light min-w-[3rem] text-right">
              {futureFamily}
            </span>
          </div>
          <Slider
            value={[futureFamily]}
            onValueChange={(value) => setFutureFamily(value[0])}
            max={20}
            min={0}
            step={1}
            className="w-full"
          />
        </div>

        {/* Button */}
        <div className="pt-4 flex justify-center">
          <Button
            onClick={() => setShowResult(true)}
            className="bg-[#dba57d] hover:bg-[#c99a6d] text-[#1a1d23] font-serif font-light text-lg px-8 py-6 rounded-md transition-colors bg-muted"
            size="lg"
          >
            Reveal My Memories
          </Button>
        </div>

        {/* Result Message */}
        {showResult && (
          <div className="pt-8 space-y-4 text-center animate-in fade-in duration-700">
            <p className="text-white/90 font-serif font-light text-2xl md:text-3xl leading-relaxed">
              This memory lived on <span className="text-[#dba57d] font-serif">{totalMemories.toLocaleString()}</span>{" "}
              times
            </p>
            <p className="text-white/90 font-serif font-light text-2xl md:text-3xl leading-relaxed">
              across generations in the next 40 years.
            </p>
            <p className="text-white/60 font-serif font-light italic text-lg md:text-xl pt-4">
              A moment to relive again and again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
