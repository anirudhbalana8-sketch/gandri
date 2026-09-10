"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const banners = [
  {
    image: "/images/dds-camp1.jpg",
    alt: "Camel crossing the Thar desert at sunset",
    eyebrow: "The original desert safari",
    title: "Follow the\nslow road.",
    link: "/the-stay",
    cta: "Discover the stay",
  },
  {
    image: "/images/dds1.jpg",
    alt: "Stars above a quiet desert landscape",
    eyebrow: "Nights at Dangri",
    title: "Stay for\nthe stars.",
    link: "/gallery",
    cta: "See the camp",
  },
  {
    image: "/images/dds.jpg",
    alt: "A warm desert camp at golden hour",
    eyebrow: "A little further from ordinary",
    title: "Make room\nfor wonder.",
    link: "/contact",
    cta: "Plan your visit",
  },
   {
    image: "/images/THAR-SEMI-SUITS-OUTFIT.jpg",
    alt: "A warm desert camp at golden hour",
    eyebrow: "A little further from ordinary",
    title: "Make Outfit wonder.",
    link: "/contact",
    cta: "Plan your visit",
  },
  {
    image: "/images/THAR-SEMI-SUITS-ROOM.png",
    alt: "A warm desert camp at golden hour",
    eyebrow: "A little further from ordinary",
    title: "make room wonder.",
    link: "/contact",
    cta: "Plan your visit",
  },
];

export function BannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % banners.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction: number) => {
    setActive((current) => (current + direction + banners.length) % banners.length);
  };

  const banner = banners[active];

  return (
    <section className="relative h-130 overflow-hidden bg-night text-white md:h-150" aria-label="Dangri Desert Camp highlights">
      <AnimatePresence mode="wait">
        <motion.div key={banner.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} className="absolute inset-0">
          <Image src={banner.image} alt={banner.alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-night/85 via-night/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-night/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 mx-auto flex h-full max-w-350 flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
        <AnimatePresence mode="wait">
          <motion.div key={banner.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.55 }}>
            <p className="eyebrow text-sand">{banner.eyebrow}</p>
            <h2 className="mt-4 max-w-xl whitespace-pre-line font-display text-6xl leading-[.8] md:text-8xl">{banner.title}</h2>
            <Link href={banner.link} className="mt-8 flex w-fit items-center gap-3 border-b border-sand pb-2 text-xs uppercase tracking-[.2em] text-sand">{banner.cta} <MoveRight size={17} /></Link>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-between border-t border-white/25 pt-4">
          <div className="flex gap-2" role="tablist" aria-label="Select banner">
            {banners.map((item, index) => <button key={item.image} type="button" role="tab" aria-selected={active === index} aria-label={`Show banner ${index + 1}`} onClick={() => setActive(index)} className={`h-1 transition-all ${active === index ? "w-12 bg-sand" : "w-5 bg-white/45 hover:bg-white"}`} />)}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous banner" onClick={() => changeSlide(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/35 transition hover:border-sand hover:text-sand"><ArrowLeft size={16} /></button>
            <button type="button" aria-label="Next banner" onClick={() => changeSlide(1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/35 transition hover:border-sand hover:text-sand"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

