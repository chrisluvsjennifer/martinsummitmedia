import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Wedding Photography Portfolio | Martin Summit Media | NC & SC",
  description:
    "View our wedding photography portfolio. Serving Charlotte, Asheville, Knoxville, Chattanooga, and beyond with authentic, documentary-style wedding photography.",
  keywords:
    "wedding photography portfolio, wedding photos, NC wedding photographer, SC wedding photographer, Charlotte wedding photography, Asheville wedding photography",
}

const photos: { src: string; alt: string; aspect: string }[] = [
  // Wedding 1 - Christmas/Winter Wedding at Farm and Chapel
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-3-daakqaaV5oknFy4xuFIAsWR7nK5390.jpg",
    alt: "Bride laughing with children petting donkey at white fence on farm",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-11-eEtc3t5LJFtRg6ZR2zDGl3OOT5ue3h.jpg",
    alt: "Couple kissing outside church with winter bouquet showing bride's back tattoos",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-12-VvR0swpFQU2OrJSXPmP411X827s176.jpg",
    alt: "Couple with Santa Claus at Christmas tree with nutcracker decoration",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-2-VpmTdPkNC46dD8IV0Eg0BjCvHwWY35.jpg",
    alt: "Groomsmen walking on farm in colorful suits",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-9-sqYxsu8vBcLlA93MIZB30O0WXgjECD.jpg",
    alt: "Ceremony kiss in chapel with stained glass window and Christmas trees",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-10-0yZ4nNVDyadIKb6XT6zWhLTyY17jeM.jpg",
    alt: "Full wedding party outside brick church with bridesmaids in emerald dresses",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-5-ZTDhuHL2xapejRFeGQZUHTWB1lrjzM.jpg",
    alt: "Bride laughing with bridesmaids in black dresses with golden hour backlight",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-7-UF1nqOdJAKSZqaXxb01bqkswWsxjaz.jpg",
    alt: "Couple portrait on farm with bride's dress flowing in wind",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-4-pM4u7OKm30y4jb4Y09htKZpB8MqmpO.jpg",
    alt: "Wedding party forming hand tunnel for couple walking through",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-6-tpm9uhml3Y8oaPKgEaYrprvo6Vyvdd.jpg",
    alt: "Intimate couple portrait with golden backlight showing bride's tree line tattoo",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-8-ly4qmV0E6bJ93oyPdynPMzfwDC9Ywd.jpg",
    alt: "Couple walking away holding hands on farm with white fence",
    aspect: "portrait",
  },
  // Wedding 2 - Sage Green & Gray Lakeside Wedding
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-23-GBemn2Q2G4P3FNRPifosOegrCdlBB4.jpg",
    alt: "Bubble exit with couple kissing and guests with glow sticks",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-19-hDO03g3mLUeLsVcOBe52A6XcWba4g8.jpg",
    alt: "Full wedding party walking together in sage green and gray",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-18-ytVJfA4TCqQLdFUsCShRg9qa29pqdQ.jpg",
    alt: "Unity sand ceremony at wine barrel during outdoor ceremony",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-15-mKEjjVZ0XmCkkXA8Lz2yKtUsAQ9nqi.jpg",
    alt: "Groomsmen walking with jackets over shoulders in gray suits",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-16-Kb44ghJg4OtRrjJw17b7OQGsWsVo2u.jpg",
    alt: "Bride laughing with bridesmaids in sage green dresses on dock by lake",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-22-2BTCzZQDfetqmvhqHfbKV0ayrxMUBc.jpg",
    alt: "Overhead shot of first dance under chandelier in reception hall",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-21-rXpT87LmsCQ9UZutwMe5LT4uU0RgWu.jpg",
    alt: "Couple portrait by river with bride in short lace dress",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-14-YOUHkRmrBUn0EDDj2LiE6XTtB2ioHK.jpg",
    alt: "Bride smiling at camera during first look leaning on groom's back",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-20-eRVg52GA0atx7hKma3SixLszL0wmpu.jpg",
    alt: "Intimate couple portrait laughing together in forest setting",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-17-14o6ZxC9fhNJVwyo5P4wCEZTxgSTzw.jpg",
    alt: "Laughing bride portrait with white and blush bouquet",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-13-yPdbkK5nxX4iI5Fdoro9Mny00Z047I.jpg",
    alt: "Wedding dress hanging in window with custom Mrs. name hanger",
    aspect: "portrait",
  },
  // Wedding 3 - Navy Blue & Dusty Blue Wedding at Lodge at Cat Creek
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-32-1H7mJiDMXYuSH62CqOuNj1VZFaEFnH.jpg",
    alt: "Full length couple portrait with groom in navy blue suit",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-27-5fi6bvq9uSetrBhcdmZt8t0s4vJkXN.jpg",
    alt: "Groomsmen walking in navy suits with young ring bearers",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-34-NUjEHTu82f3c6tolWrf5qdodPCmgdS.jpg",
    alt: "Couple walking away holding hands with bride in blue cowboy boots",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-24-Um0pKmuipU4rPoYIj9TqrCjaUIdjAb.jpg",
    alt: "Wedding flat lay with invitation, blue cowboy boots, jewelry and perfume",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-26-sCPxZlWricgflVNsVjbbB2f6Li7SGi.jpg",
    alt: "Tulle ballgown hanging on white arbor under tree canopy",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-31-uZaR9Bd91NpTDfTs2OQDpk5LZiwa8k.jpg",
    alt: "Close-up couple portrait with bride holding bouquet",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-29-6lZwIpgw6a8vSrHDEEMahq5GSmACHK.jpg",
    alt: "Bride with bridesmaids in dusty blue dresses holding bouquets",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-35-Ikis8R2qVWuAN85W0kEN38db0LdN55.jpg",
    alt: "Couple portrait in short reception dress smiling at camera",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-25-GHnHBmknoRwdpESpvm9vcG1RrzDzqo.jpg",
    alt: "Wedding rings nestled in pink rose on bouquet",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-30-3QrTZs9253itGfKaAP8vSav8274eb4.jpg",
    alt: "Full wedding party with dusty blue bridesmaids and navy groomsmen",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-28-edaN0w93Eo84SLIMxBvG1LAhnHwDOS.jpg",
    alt: "Mother helping bride with dress in window light",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-33-keyjWoOhOsO0sy5nVGRLapMGwPgzZG.jpg",
    alt: "Romantic dip kiss in forest with flowing veil",
    aspect: "portrait",
  },
  // Wedding 4 - Waterfall Elopement
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-37-FU7rF54CADqZxOsRReeAyt1neDWvky.jpg",
    alt: "Dramatic dip kiss at waterfall base on fallen log",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-36-FCUOzdd1atNYuxnU15biOHLJ8Q4ANS.jpg",
    alt: "Waterfall ceremony with couple exchanging vows on rocks",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-40-d6PAiLuilBvlSzwkQBL2JGFpIw5a9P.jpg",
    alt: "Couple walking on wooden bridge in lush green forest",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-39-BHSNP7vEiivWJEd0sfgDky4leOtLUF.jpg",
    alt: "Couple laughing together on forest path with fall leaves",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-41-jcODoL3lVLsBIqW1Rwgq8TSu7T3Oza.jpg",
    alt: "Intimate couple portrait on bridge showing groom's tattoos",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-38-QzSNDibdyfnoGHD6NbWMIFhWkVTpwc.jpg",
    alt: "Couple embrace on forest path looking at each other",
    aspect: "portrait",
  },
  // Wedding 5 - Fall Wedding at Lake Junaluska
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-54-UEfWEv4Yc1P2WDkv5XBozGGqCEkugF.jpg",
    alt: "Couple walking through fall leaves in park with colorful foliage",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-50-kXIucdi2KLxwbTR4kMbVjSkOYpBGFU.jpg",
    alt: "Couple portrait by lake with fall foliage and mountains",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-49-RZnf7SZrDBW4DtRBjpYZhHEp347Nfi.jpg",
    alt: "Groom portrait in all black suit with hands in pockets",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-44-CvWP7bbtGu1DpHuHFc7Ipfk8ewY4E7.jpg",
    alt: "His and Her vow books with rings on sand with fall leaves",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-47-uoM6xFU0tcQlSz2NXjlJr2Mh1PXONg.jpg",
    alt: "Couple in gothic stone archway with mountain lake view behind",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-55-3qbBIGaNUJFBXe2vmcZZlgRREdBjmP.jpg",
    alt: "Couple kissing among fall leaves in park",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-52-zgCPLwg0icI918CQ3rCRGn5KPdOwFe.jpg",
    alt: "Romantic couple portrait with bride touching groom's face",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-51-mHfw033j1nrQuWNA9RcKzyUky2thVv.jpg",
    alt: "Full length couple portrait under fall tree with cathedral veil",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-46-hygX9pQycPSpDvdstFGjGwfC8qLbEY.jpg",
    alt: "Intimate close-up portrait under veil with soft light",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-48-tAmS7KJoNnurpklrg9c6OydqXz7F9v.jpg",
    alt: "Bride solo portrait from behind showing dress train and cathedral veil",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-53-d6aNv0Neuon3HPwts1z9zz9XhHJJTy.jpg",
    alt: "Couple kissing with fall leaves flying around them",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-42-w2ffP21x41icJlbLgP4ddpiBNh3Ael.jpg",
    alt: "Lace wedding dress detail hanging in window with Bride hanger",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-43-dFufowf9SSrgCq85slAfwlcek84lXo.jpg",
    alt: "Couple exchanging vows on terrace overlooking fall lake and mountains",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-45-GlIuGgA8XtzoRxFukkLph8K3suaHLv.jpg",
    alt: "Couple portrait with mountain backdrop and fall foliage",
    aspect: "portrait",
  },
  // Wedding 6 - Burgundy & Purple Mountain Overlook Wedding
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-67-KqiRYNjjv3SRrqRXxInyxYrX9ap1ry.jpg",
    alt: "Groom in burgundy suit holding flower girl with mountain backdrop",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-57-TSlGwwWOi8ER4Nl0cqoGTsGBmCvzDT.jpg",
    alt: "Bride with bridesmaids in purple and magenta dresses with dried flower bouquets",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-69-CKO8gMCI1Bl0N5Tu91dV7jedspkHo7.jpg",
    alt: "Intimate couple portrait with foreheads together and mountain views",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-68-6gGiDzLVNwayghDNTlVatkDxklbwsQ.jpg",
    alt: "Groom laughing in burgundy suit with mountain backdrop",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-73-PeNpB5r6Bcur5fk5NuYshdc4VZR4ri.jpg",
    alt: "Couple holding hands against stone wall with ballgown flowing",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-65-RuRd75yX4jELQTcxvH95RErw6MlXer.jpg",
    alt: "Groomsmen in black suits carrying groom horizontally for fun photo",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-72-BUJDuYnkF01nhP8AOtVBBoz1QUFpiz.jpg",
    alt: "Couple portrait with bubbles floating around them and mountain views",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-59-5nzOsra8sba1kWCKKzGppFFvha75eA.jpg",
    alt: "Bride raising bouquet by stone wall in ballgown dress",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-64-mF6QC43t10bRfHFQLla6n6k8xk9IR4.jpg",
    alt: "Groom with groomsmen formal portrait in burgundy and black suits",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-62-0PLxnRxI9Hd5Od5qqaEj9HLzMg1zHH.jpg",
    alt: "Bride sitting with dress spread on grass by stone wall",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-61-KUC16wJNYi16eIV2B6jkM0mvXpelcL.jpg",
    alt: "Bride from behind walking up stone stairs showing back tattoo",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-60-Y9bq1nf7TlIkfDVWkUcPJ8O9QzX81f.jpg",
    alt: "Bridesmaids surrounding bride adjusting her dress on mountain",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-63-m02jkXRTZuJWJbsky2xp09AOtV8O6w.jpg",
    alt: "Sweet moment between bride and flower girl touching faces",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-56-L93vyf9paJWkMs0WMadGYCfaPDSb5R.jpg",
    alt: "Wide shot of ceremony at mountain overlook with wedding party",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-70-DpiApbVCyzmqV9rD8jn7v4hy1shZNQ.jpg",
    alt: "Wedding party celebrating with bubbles and dip kiss",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-71-qLam2wNv16jQ7Zw9uwit2FHj3OJfv4.jpg",
    alt: "Full wedding party walking together candid shot on mountain",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-66-55KWg2rXURFCQrzr5EBIs1TdhzEy0T.jpg",
    alt: "Groom solo full length portrait in burgundy suit on stone path",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-58-PEyOvA7x6J1GeoYUMgSMe6FEO5Bm61.jpg",
    alt: "Bride with bridesmaids walking and laughing together on mountain",
    aspect: "landscape",
  },
  // Wedding 7 - Intimate Mountain Deck Wedding
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-84-UTiIIql5wBo18GBD68S7EfHrwnwcna.jpg",
    alt: "Couple portrait with wife embracing husband from behind in matching navy",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-80-doQ9wE6ikK5l1AYnRDrCGsqumhjWcX.jpg",
    alt: "Silver heart locket memorial charm on bouquet wrap detail",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-79-Vn9mtVxMYZIlzLb4rFUaRprFJEXQZw.jpg",
    alt: "Three-tier white wedding cake with mountain silhouette topper",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-78-PciQDoVuVuMdbM0jIaAaE2iGV3Ps2U.jpg",
    alt: "Blue Ridge mountain vista with green trees and red maple",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-82-JxFDQR1I0wimdOmFfD4XSFLUDJsYnj.jpg",
    alt: "Couple kissing on deck with mountain views and fall foliage",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-Or98lvknRfHqCA6UkT5sBMRBjUMkXY.jpg",
    alt: "Lace and tulle wedding dress hanging on canopy bed",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-85-VCd5Ega21ZX5XVOL3NRatdgPLzaMRS.jpg",
    alt: "Mother and daughter embracing on deck with mountain backdrop",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-83-YZdOfiHEuFZebsZ6kvb4VDxjwsRdAc.jpg",
    alt: "Close-up of couple hands with wedding rings and pearl bracelet",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-86-ErB0Wvb4rzj0FqgoQ2L3Pup84qNIQh.jpg",
    alt: "Father and daughter seated portrait at reception",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-81-lcdou7utNv6vpQ3uvic7WVjIcLFeR6.jpg",
    alt: "Groom reading vows during ceremony on deck with mountain backdrop",
    aspect: "portrait",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-77-djvUqoPMPkohBEl6kqw5r3iCFJv7V0.jpg",
    alt: "Rustic birch log centerpiece with moss and burgundy flowers",
    aspect: "landscape",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-87-0gngW9EToVqX5qAPy0p9zdPLHKvS4V.jpg",
    alt: "Family group portrait on deck with mountain views",
    aspect: "portrait",
  },
]

export default function PhotographyPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#1a1d23]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-balance uppercase text-foreground">
            Photography
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#dba57d] mx-auto"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-serif font-light leading-relaxed text-foreground/90">
            Timeless Images That Capture Your Story
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <p className="text-xl md:text-2xl font-light leading-relaxed font-serif">
            We capture the authentic moments, the quiet glances, and the joyful celebrations that make your wedding day
            uniquely yours. Our photography style is rooted in documentary storytelling with a fine art aesthetic.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center mb-12 md:mb-16">
            Featured Work
          </h2>

          {/* Masonry-style Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-lg group"
              >
                <div className={`relative ${photo.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#f5f3f0]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light font-serif uppercase tracking-wide text-foreground">
            Our Photography Style
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <div className="space-y-6 text-lg font-light font-serif text-foreground/80">
            <p>
              We blend documentary photography with fine art sensibility to create images that feel both timeless and
              authentic.
            </p>
            <p>
              Our approach is quiet and observational - we capture the moments as they unfold naturally, preserving the
              true emotion and beauty of your day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-8 bg-[#1a1d23] text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance font-serif uppercase text-white">
            Let&apos;s capture your story
          </h2>
          <div className="h-px bg-[#dba57d] mx-auto opacity-40 w-48"></div>
          <p className="text-xl font-light leading-relaxed font-serif text-white/90">
            Reach out to learn more about our photography services and availability.
          </p>
          <div className="pt-6 space-y-3">
            <Button asChild className="font-serif text-base md:text-lg" size="lg" variant="default">
              <Link href="/inquire">Get In Touch</Link>
            </Button>
            <p className="text-sm text-white/60 font-serif">We typically respond within one business day.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
