import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MoveRight } from "lucide-react";
import { Packages, Reveal, Testimonial } from "./site";
import { BannerCarousel } from "./banner-carousel";
import { WelcomeStory } from "./welcome-story";
import { StayHighlights } from "./stay-highlights";
import { Upcoming } from "./upcoming";
import { OurFood } from "./our-food";

const homePhotos = [
  {
    src: "/images/dds-camp1.jpg",
    alt: "Camel walking across the Thar desert",
    className: "",
  },
  {
    src: "/images/dds1.jpg",
    alt: "Desert camp at sunset",
    className: "",
  },
  {
    src: "/images/dds.jpg",
    alt: "Open desert landscape",
    className: "",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-180 items-end overflow-hidden bg-night px-5 pb-16 pt-32 text-white md:min-h-screen md:px-10 md:pb-24">
        <Image
          src="/images/dds.jpg"
          alt="The Thar desert at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/15 to-night/10" />
        <div className="relative z-10 mx-auto w-full max-w-350">
          <p className="eyebrow text-sand">
            Est. 1985 · Sam Village, Jaisalmer
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.04em]">
            Come for the
            <br />
            <em>silence.</em>
          </h1>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-sm leading-6 text-white/75">
              A singular desert camp at the edge of the Thar. Unhurried days,
              warm nights, and the sky in full view.
            </p>
            <Link
              href="/the-stay"
              className="flex w-fit items-center gap-3 border-b border-sand pb-2 text-xs uppercase tracking-[0.2em] text-sand"
            >
              Explore the camp <MoveRight size={17} />
            </Link>
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-8 right-10 z-10 text-sand"
          size={21}
        />
      </section>
      <section className="bg-paper px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-350 gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-terracotta">Not just a night away</p>
            <h2 className="section-title mt-4">
              Where the
              <br />
              <em>desert opens up.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-lg text-lg leading-8 text-ink/70">
              Dangri is a family story told in sand. From a single camel safari
              in 1985 to a camp that has welcomed travellers from every corner
              of the world, our way of hospitality stays wonderfully personal.
            </p>
            <WelcomeStory compact />
            <Link
              href="/about"
              className="mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-terracotta"
            >
              Our story <MoveRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
            <BannerCarousel />
      <Packages />
      <StayHighlights />
      <Upcoming />
      <OurFood />
      <Testimonial />
      <section className="bg-paper px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-350 flex-col justify-between gap-8 border-t border-ink/20 pt-6 md:flex-row">
          <div>
            <p className="eyebrow text-terracotta">Good to know</p>
            <h2 className="mt-4 font-display text-4xl">The days are yours.</h2>
          </div>
          <div className="grid max-w-2xl grid-cols-2 gap-x-12 gap-y-6 text-sm text-ink/70 md:grid-cols-3">
            <span>Paramotoring</span>
            <span>Camel ride</span>
            <span>Star gazing</span>
            <span>Jeep safari</span>
            <span>ATV bike</span>
            <span>Water from well</span>
          </div>
        </div>
      </section>
    </>
  );
}
