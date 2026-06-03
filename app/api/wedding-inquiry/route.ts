import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, weddingDate, venueName, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !weddingDate || !venueName || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer re_ZnNh3i7E_MkT1j7PWsVHvYG3dzbXHzbHD`,
      },
      body: JSON.stringify({
        from: "Martin Summit Media <chrisandjennifer@martinfilmproductions.com>",
        to: ["chrisandjennifer@martinfilmproductions.com"],
        subject: `Inquiry | Martin Summit Media - ${firstName} ${lastName}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1a1a1a; color: #ffffff; padding: 20px; border-bottom: 3px solid #d4af37;">
              <h2 style="margin: 0; font-size: 24px;">NEW WEDDING INQUIRY</h2>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #d4af37;">
              <p style="margin: 0 0 10px 0; font-size: 18px;"><strong>From: ${firstName} ${lastName}</strong></p>
              <p style="margin: 0; color: #666;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="padding: 20px; background-color: #ffffff;">
              <h3 style="margin-top: 0; color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Wedding Details</h3>
              
              <p style="margin: 15px 0;"><strong>Wedding Date:</strong> ${weddingDate}</p>
              <p style="margin: 15px 0;"><strong>Venue Name:</strong> ${venueName}</p>
              
              <h3 style="margin-top: 30px; color: #1a1a1a; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">Their Message</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="background-color: #1a1a1a; color: #999; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">Submitted via Martin Summit Media Wedding Inquiry Form</p>
            </div>
          </div>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const error = await resendResponse.text()
      console.error("Resend API error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing wedding inquiry:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
