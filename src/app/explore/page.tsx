import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageFrame, Reveal } from "@/components/site";

const places = [
  {
    name: "Jaisalmer Fort Walk",
    description: "Explore fort walls, gates, courtyards, and stories of trading families within the living citadel.",
    image: "/images/jai-fort-walk.webp",
    alt: "Golden sandstone architecture in Jaisalmer",
    detail: "15 min from camp",
  },
  {
    name: "Patwon Ki Haveli Tour",
    description: "Walk through carved balconies, latticed windows, and the heritage of the merchant elite.",
    image: "/images/jais-haveli.jfif",
    alt: "Ornate sandstone haveli in Jaisalmer",
    detail: "20 min from camp",
  },
  {
    name: "Old City Bazaar Walk",
    description: "Discover local markets, old lanes, and the social life that shaped Jaisalmer over generations.",
    image: "/images/jais-old-bazar.avif",
    alt: "Colourful market life in Jaisalmer",
    detail: "20 min from camp",
  },
  {
    name: "Sunset Fort View Point",
    description: "Witness the golden city from above and learn how the skyline tells the story of the fort.",
    image: "/images/jais-sunset-fort.jpg",
    alt: "Jaisalmer fort glowing in the evening light",
    detail: "20 min from camp",
  },
  {
    name: "Kuldhara & Khaba Fort",
    description: "Visit the haunting ruins and hear the stories woven into the abandoned villages of the Thar.",
    image: "/images/jais-kurla-khaba.jfif",
    alt: "Ruins of a historic desert village",
    detail: "45 min from camp",
  },
  {
    name: "Indo-Pak Border",
    description: "Experience the strategic edge of the Thar desert and learn about this remarkable frontier.",
    image: "/images/jais-border.webp",
    alt: "Desert road near the Indo-Pak border",
    detail: "2 hr from camp",
  },
  {
    name: "Lake Gadisar",
    description: "Discover the sacred lake, surrounding temples, and the quiet rhythm of water in the desert city.",
    image: "/images/jais-lake-gadisar.jpg",
    alt: "Historic pavilion beside a lake",
    detail: "25 min from camp",
  },
  {
    name: "City Palace jaisalmer",
    description: "Explore the royal residence, its courtyards, and the museum that preserves Jaisalmer's history.",
    image: "/images/city-place.webp",
    alt: "Ornate sandstone architecture in Jaisalmer",
    detail: "20 min from camp",
  },
  {
    name: "Salim Singh ki haveli ",
    description: "Experience the architectural grandeur and cultural significance of this historic haveli.",
    image: "/images/slim-singh.jfif",
    alt: "Ornate sandstone haveli in Jaisalmer",
    detail: "20 min from camp",
  },
  { 
    name: "Nathmal ki haveli ",
    description: "Discover the intricate details and historical importance of this traditional haveli.",
    image: "/images/nathma-haveli.jfif",
    alt: "Ornate sandstone haveli in Jaisalmer",
    detail: "20 min from camp",
  },
  {
    name: "Bada Bagh",
    description: "Explore the royal cenotaphs and gardens that commemorate the rulers of Jaisalmer.",
    image: "/images/bada-bagh.jfif",    
    alt: "Royal cenotaphs in a desert garden",
    detail: "30 min from camp",
  },
  {
    name: "Lodarwa jain temple ",
    description: "Experience the spiritual ambiance and architectural beauty of this sacred temple.",
    image: "/images/loadrd-templ.webp",
    alt: "Intricate carvings of a Jain temple in Jaisalmer",
    detail: "30 min from camp",
  },
  {
    name: "Tanot mata mandir",
    description: "Visit this ancient temple and experience the spiritual atmosphere that has been a part of Jaisalmer's cultural heritage.",
    image: "/images/tanot-mata.jfif",
    alt: "Ancient temple in Jaisalmer",
    detail: "25 min from camp",
  }
];

export default function ExplorePage() {
  return (
    <PageFrame>
      <main className="bg-paper text-ink">
        <section className="relative overflow-hidden bg-night px-5 pb-20 pt-36 text-paper md:px-10 md:pb-28 md:pt-48">
          <Image
            src="/images/explore-jaislmer.jpeg"
            alt="The Thar desert near Jaisalmer"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-night via-night/60 to-transparent" />
          <div className="relative mx-auto max-w-350">
            <p className="eyebrow text-sand">Beyond the camp</p>
            <h1 className="mt-5 max-w-4xl font-display text-7xl leading-[0.82] md:text-9xl">
              Jaisalmer,
              <br />
              <em className="text-paper">in full colour.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
              Step out into a city shaped by sandstone, stories, and the wide silence of the Thar. These are the places we return to.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-350">
            <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-terracotta">Curated nearby</p>
                <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.9] md:text-7xl">
                  Start with the places that make the desert <em>feel alive.</em>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-ink/65">
                Ask our team to arrange a guide, a car, or simply a slower route through the city.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {places.map((place, index) => (
                <Reveal key={place.name} delay={index * 0.04} className={index === 0 ? "xl:col-span-2" : ""}>
                  <article className="group overflow-hidden rounded-4xl border border-ink/10 bg-[#f3efe9] shadow-[0_20px_50px_rgba(16,26,29,0.07)]">
                    <div className={`relative overflow-hidden ${index === 0 ? "aspect-video" : "aspect-4/3"}`}>
                      <Image
                        src={place.image}
                        alt={place.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-night/55 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/85">
                        <MapPin size={14} /> {place.detail}
                      </span>
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="max-w-xs font-display text-3xl leading-[0.95] text-ink md:text-4xl">{place.name}</h3>
                        <ArrowUpRight className="mt-1 shrink-0 text-terracotta transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                      </div>
                      <p className="mt-5 text-base leading-7 text-ink/75">{place.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
