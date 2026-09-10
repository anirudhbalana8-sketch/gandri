import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const discoverLinks = [
  {
    title: "Facilities",
    description: "Discover our dining, comfortable stays, evening experiences, and thoughtful guest services.",
    href: "/facilities",
    image: "/images/dinner-on-dunse-photo.jpg",
    alt: "Dinner served beneath the desert sky",
  },
  {
    title: "Explore Jaisalmer",
    description: "Find forts, havelis, bazaars, lakes, temples, and unforgettable desert viewpoints.",
    href: "/explore",
    image: "/images/explore-jaislmer.jpeg",
    alt: "Jaisalmer sandstone landscape",
  },
];

export function HomeDiscover() {
  return (
    <section className="bg-paper px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-350 border-y border-ink/15 py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-terracotta">More to discover</p>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {discoverLinks.map((item) => (
              <article key={item.title} className="group">
                <Link href={item.href} className="block overflow-hidden rounded-3xl">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <Link href={item.href} className="mt-4 flex items-center gap-3 font-display text-3xl text-ink transition-colors hover:text-terracotta">
                  {item.title} <ArrowUpRight className="text-terracotta transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
                </Link>
                <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
