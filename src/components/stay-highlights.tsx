"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./site";

const highlights = [
  {
    title: "Crafting timeless\nevents in desert grandeur",
    copy: "For intimate gatherings, celebrations, and weddings, our Thar Desert offers a quietly remarkable setting. Let the dunes become the backdrop to your most memorable moments.",
    image:
      "/images/dangri-camp-cultre-photo.jpg",
    alt: "Desert camp lit for an evening gathering",
    imageSide: "left",
  },
  {
    title: "Culinary magic\nbeneath the stars",
    copy: "As the sun slips below the horizon, settle in for a generous taste of Rajasthan. Local flavours, warm firelight, and an unhurried table turn dinner into a memory.",
    image:
      "/images/dinner-on-dunse-photo.jpg",
    alt: "Outdoor dining beneath a desert tree",
    imageSide: "right",
  },
];

export function StayHighlights() {
  return (
    <section className="overflow-hidden bg-[#e8d8b7] px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-350 space-y-24 md:space-y-12">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="grid items-start gap-10 md:grid-cols-2 md:gap-24"
          >
            {item.imageSide === "left" ? (
              <>
                <HighlightImage item={item} />
                <HighlightText
                  item={item}
                  index={index}
                  className="md:pt-12 md:pr-8"
                />
              </>
            ) : (
              <>
                <HighlightText
                  item={item}
                  index={index}
                  className="md:pt-20 md:pl-8"
                />
                <HighlightImage item={item} lifted />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function HighlightText({
  item,
  index,
  className = "",
}: {
  item: (typeof highlights)[number];
  index: number;
  className?: string;
}) {
  return (
    <Reveal delay={0.12} className={className}>
      <p className="eyebrow text-terracotta">0{index + 1} / The Dangri feeling</p>
      <div className="mt-5 max-w-2xl">
        <h2 className="whitespace-pre-line font-display text-4xl leading-[.9] text-terracotta md:text-5xl">
          {item.title}
        </h2>
        <motion.p
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-sm leading-7 text-ink/65"
        >
          {item.copy}
        </motion.p>
      </div>
    </Reveal>
  );
}

function HighlightImage({
  item,
  lifted = false,
}: {
  item: (typeof highlights)[number];
  lifted?: boolean;
}) {
  return (
    <Reveal className={lifted ? "md:-mt-65" : ""}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="group relative h-105 overflow-hidden md:h-130"
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-terracotta/0 transition duration-500 group-hover:bg-terracotta/15" />
        <span className="absolute bottom-5 left-5 translate-y-3 text-[10px] uppercase tracking-[.2em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Dangri Desert Camp
        </span>
      </motion.div>
    </Reveal>
  );
}
