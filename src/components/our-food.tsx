"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./site";

const dishes = [
  {
    name: "Ker Sangri",
    image: "/images/food1.jpg",
    alt: "Traditional Rajasthani Ker Sangri dish",
    copy: "Desert beans and berries, cooked slowly with local spices and a touch of home.",
  },
  {
    name: "Rajasthani Thali",
    image: "/images/food2.jpg",
    alt: "Colourful Rajasthani thali served at a table",
    copy: "A generous plate of the region's best, made to be shared beneath the open sky.",
  },
  {
    name: "Daal Baati Churma",
    image: "/images/food3.jpg",
    alt: "Daal Baati Churma served traditionally",
    copy: "The Rajasthani classic, finished with golden baati and sweet, crumbly churma.",
  },
];

export function OurFood() {
  const [selectedDish, setSelectedDish] = useState(0);
  const activeDish = dishes[selectedDish];

  return (
    <section className="bg-paper px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-350 gap-12 md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-24">
        <Reveal className="relative">
          <div className="group relative h-115 overflow-hidden md:h-145">
            <AnimatePresence mode="wait">
              <motion.div key={activeDish.image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .55 }} className="absolute inset-0">
                <Image src={activeDish.image} alt={activeDish.alt} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover transition duration-1000 group-hover:scale-105" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-night/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-paper">
              <p className="eyebrow text-sand">From our kitchen / With love</p>
              <AnimatePresence mode="wait">
                <motion.div key={activeDish.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35 }}>
                  <h3 className="mt-2 font-display text-3xl leading-none">{activeDish.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-paper/75">{activeDish.copy}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <motion.div animate={{ rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 -right-3 grid h-24 w-24 place-items-center rounded-full bg-sand text-center text-[10px] uppercase leading-4 tracking-widest text-night md:-right-8">Taste<br />Rajasthan</motion.div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow text-terracotta">Our food</p>
          <h2 className="mt-5 max-w-xl font-display text-6xl leading-[.82] md:text-8xl">Slow fire.<br /><em>Deep flavour.</em></h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-ink/70">The desert has its own language of flavour. At Dangri, recipes travel from family kitchens to the campfire, carrying the warmth, spice, and generosity of Rajasthan.</p>
          <div className="mt-10 border-t border-ink/20">{dishes.map((dish, index) => <motion.button type="button" key={dish.name} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .12 }} onMouseEnter={() => setSelectedDish(index)} onFocus={() => setSelectedDish(index)} onClick={() => setSelectedDish(index)} className={`flex w-full items-center justify-between border-b border-ink/15 py-4 text-left transition-colors ${selectedDish === index ? "text-terracotta" : "text-ink/70 hover:text-terracotta"}`}><span className="font-display text-2xl">{dish.name}</span><span className={`text-xs transition-colors ${selectedDish === index ? "text-terracotta" : "text-ink/40"}`}>0{index + 1}</span></motion.button>)}</div>
          <Link href="/the-stay" className="mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[.18em] text-terracotta transition-transform hover:translate-x-1">Explore our table <ArrowUpRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

