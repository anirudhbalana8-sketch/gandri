import Image from "next/image";
import { ArrowUpRight, Check, Utensils } from "lucide-react";
import { PageFrame, Reveal } from "@/components/site";

const facilities = [
  {
    eyebrow: "Dining / 01",
    title: "True Rajasthani Gastronomic Experience",
    subtitle: "Best restaurant in Jaisalmer",
    copy: "Discover culinary excellence at Dangri. Our kitchen brings together the signature restaurant experience of Jaisalmer with fresh, regional flavours. From traditional Rajasthani dishes to international favourites, every meal is prepared with carefully sourced ingredients and generous hospitality.",
    image: "/images/dinner-on-dunse-photo.jpg",
    alt: "Dinner served at a desert camp",
  },
  {
    eyebrow: "Comfort / 02",
    title: "Thoughtful Comfort in the Thar",
    subtitle: "Everything you need, close at hand",
    copy: "From 24-hour hot and cold water to comfortable beds, private sitting spaces, and attentive service, every detail is designed to make your desert stay feel effortless while keeping you close to the landscape.",
    image: "/images/thar-regal.jpeg",
    alt: "Comfortable room at Dangri Desert Camp",
  },
  {
    eyebrow: "Evenings / 03",
    title: "Desert Moments After Sunset",
    subtitle: "Stories, music, and warm fires",
    copy: "As the sun drops behind the dunes, the camp comes alive with cultural evenings, camel rides, campfires, evening tea, and the kind of unhurried hospitality that stays with you long after you leave.",
    image: "/images/dangri-camp-cultre-photo.jpg",
    alt: "Evening gathering at a desert camp",
  },
];

const essentials = [
  "Walk-in restaurant and private dining",
  "Fresh Rajasthani and international cuisine",
  "24-hour hot and cold water",
  "Comfortable beds and outdoor sitting",
  "Evening tea, coffee, and snacks",
  "Cultural evening and campfire experiences",
  "Wi-Fi and attentive on-site assistance",
  "Parking and local travel support",
];

export default function FacilitiesPage() {
  return (
    <PageFrame>
      <main className="bg-paper text-ink">
        <section className="relative isolate overflow-hidden px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
          <Image
            src="/images/IMG_4358.jpeg"
            alt="Desert landscape surrounding Dangri Desert Camp"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-paper/80" />
          <div className="relative mx-auto max-w-280 text-center">
            <p className="eyebrow text-terracotta">Dangri Desert Camp</p>
            <h1 className="mt-5 font-display text-6xl leading-[0.85] md:text-8xl">
              Facilities for a
              <br />
              <em>more memorable stay.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-ink/70 md:text-lg md:leading-8">
              Discover a blend of modern comforts and Rajasthani hospitality at Dangri Desert Camp. Our facilities are designed to help you slow down, settle in, and experience the living character of Jaisalmer.
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-10 md:pb-32">
          <div className="mx-auto max-w-300">
            <div className="grid gap-20">
              {facilities.map((facility, index) => (
                <Reveal key={facility.title} delay={index * 0.06}>
                  <article className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                    <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-[#f3efe9]">
                      <Image
                        src={facility.image}
                        alt={facility.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="eyebrow text-terracotta">{facility.eyebrow}</p>
                      <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.9] md:text-6xl">{facility.title}</h2>
                      <p className="mt-5 font-semibold text-ink/75">{facility.subtitle}</p>
                      <p className="mt-5 max-w-xl text-base leading-7 text-ink/70 md:text-lg md:leading-8">{facility.copy}</p>
                      <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-terracotta">
                        Dangri hospitality <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <section className="mt-24 border-t border-ink/15 pt-12 md:mt-32 md:pt-16">
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
                <div>
                  <p className="eyebrow text-terracotta">At a glance</p>
                  <h2 className="mt-4 font-display text-5xl leading-[0.9] md:text-7xl">Small details.<br /><em>Warmly handled.</em></h2>
                </div>
                <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                  {essentials.map((item) => (
                    <div key={item} className="flex gap-3 border-b border-ink/15 py-4 text-sm leading-6 text-ink/75">
                      <Check className="mt-1 shrink-0 text-terracotta" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-24 overflow-hidden rounded-4xl bg-night px-6 py-12 text-paper md:mt-32 md:px-12 md:py-16">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <Utensils className="text-sand" size={28} strokeWidth={1.5} />
                  <h2 className="mt-5 max-w-2xl font-display text-4xl leading-none md:text-6xl">Come hungry. Leave with a story.</h2>
                </div>
                <a href="/contact" className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-sand">Plan your stay <ArrowUpRight size={16} /></a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
