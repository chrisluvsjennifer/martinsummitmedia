import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Your Wedding Videographer | NC, SC & TN | Charlotte, Asheville, Knoxville",
  description:
    "Check availability for your wedding date. Wedding videographer serving Charlotte, Asheville, Knoxville, Chattanooga, Charleston, Greenville & beyond. Cinematic wedding films in NC, SC & TN.",
  keywords:
    "book wedding videographer Charlotte, hire wedding videographer Asheville, book wedding videographer Knoxville, NC wedding videographer availability, TN wedding videographer booking, Tennessee wedding videographer contact",
  openGraph: {
    title: "Book Your Wedding Videographer | Martin Summit Media",
    description:
      "Check availability for your wedding date. Wedding videographer serving Charlotte, Asheville, Knoxville, Chattanooga, Charleston, Greenville & beyond.",
    type: "website",
    url: "https://martinsummitmedia.com/inquire",
  },
}

export default function InquireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
