import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName,
      partnerName,
      email,
      instagram,
      phone,
      state,
      projectType,
      weddingDate,
      venueName,
      venueAddress,
      hearAboutUs,
      message,
    } = body

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer re_LsL8tnxj_4BaaNAG82gDNcXoyknpZ9en6`,
      },
      body: JSON.stringify({
        from: "Martin Summit Media <chrisandjennifer@martinfilmproductions.com>",
        to: "chrisandjennifer@martinfilmproductions.com",
        reply_to: email,
        subject: `Inquiry - ${fullName} & ${partnerName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Georgia', serif; color: #1a1a1a; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1a1a1a; color: #ffffff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .header h1 { margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; }
                .contact-info { background-color: #dba57d; color: #1a1a1a; padding: 20px; margin: 0; }
                .contact-info h2 { margin: 0 0 10px 0; font-size: 20px; font-weight: 600; }
                .contact-info p { margin: 5px 0; font-size: 16px; }
                .content { background-color: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
                .field { margin-bottom: 20px; }
                .field-label { font-weight: 600; color: #1a1a1a; margin-bottom: 5px; }
                .field-value { color: #4a4a4a; }
                .divider { border-top: 2px solid #f0f0f0; margin: 25px 0; }
                .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>NEW INQUIRY FROM WEBSITE</h1>
                </div>
                <div class="contact-info">
                  <h2>${fullName} & ${partnerName}</h2>
                  <p><strong>Email:</strong> ${email}</p>
                  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
                  ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ""}
                </div>
                <div class="content">
                  <div class="field">
                    <div class="field-label">Project Type</div>
                    <div class="field-value">${projectType}</div>
                  </div>
                  
                  <div class="field">
                    <div class="field-label">Wedding Date</div>
                    <div class="field-value">${new Date(weddingDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</div>
                  </div>
                  
                  <div class="field">
                    <div class="field-label">State of Residence</div>
                    <div class="field-value">${state}</div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="field">
                    <div class="field-label">Venue Name</div>
                    <div class="field-value">${venueName}</div>
                  </div>
                  
                  <div class="field">
                    <div class="field-label">Venue Address</div>
                    <div class="field-value">${venueAddress}</div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="field">
                    <div class="field-label">How They Heard About Us</div>
                    <div class="field-value">${hearAboutUs}</div>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <div class="field">
                    <div class="field-label">Their Message</div>
                    <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Resend API error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
