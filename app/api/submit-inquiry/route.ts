import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log("[v0] Data being sent to Zapier webhook:", JSON.stringify(data, null, 2))

    const response = await fetch("https://hooks.zapier.com/hooks/catch/13008359/uryzi4y/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error("[v0] Zapier webhook failed:", response.status, response.statusText)
      const responseText = await response.text()
      console.error("[v0] Zapier response:", responseText)
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
    }

    const responseData = await response.json()
    console.log("[v0] Zapier webhook response:", responseData)
    console.log("[v0] Form submitted successfully to Zapier")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
