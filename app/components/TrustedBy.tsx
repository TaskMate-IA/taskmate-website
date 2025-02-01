import Image from "next/image"

export default function TrustedBy() {
  const logos = [
    { name: "TechCrunch", src: "/placeholder.svg" },
    { name: "Forbes", src: "/placeholder.svg" },
    { name: "Wired", src: "/placeholder.svg" },
    { name: "The Verge", src: "/placeholder.svg" },
  ]

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-300">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={40}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

