"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Star } from "lucide-react";
import { Footer } from "./footer";
import { Header } from "./header";

export type Photo = { src: string; alt: string; className: string };
export const photos: Photo[] = [
  {
    src: "/images/dangri-camp-cultre-photo.jpg",
    alt: "Sandstone fort glowing in Jaisalmer",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/dangri-superior-room-photo.jpg",
    alt: "Camel walking across the Thar desert",
    className: "",
  },
  {
    src: "/images/dds-camp1.jpg",
    alt: "Desert camp at sunset",
    className: "",
  },
  {
    src: "/images/image.jpeg",
    alt: "Open desert landscape",
    className: "",
  },
  {
    src: "/images/THAR-SEMI-SUITS-OUTFIT.jpg",
    alt: "Open desert landscape",
    className: "",
  },
  {
    src: "/images/dinner-on-dunse-photo.jpg",
    alt: "Star-filled night sky",
    className: "",
  },
  {
    src: "/images/thar-regal.jpeg",
    alt: "thar regal ",
    className: "",
  },
  {
    src: "/images/thar-semi.jpeg",
    alt: "Thar semi camp room",
    className: "",
  },
  {
    src: "/images/dds1.jpg",
    alt: "Star-filled night sky",
    className: "",
  },
   {
    src: "/images/DDS_1123_182.jpg",
    alt: "Star-filled night sky",
    className: "",
  },
   {
    src: "/images/DDS_1123_191.jpg",
    alt: "Star-filled night sky",
    className: "",
  },
  {
    src: "/images/explore-jaislmer.jpeg",
    alt: "Star-filled night sky",
    className: "",
  },
    {
    src: "/images/bada-bagh.jfif",
    alt: "Star-filled night sky",
    className: "",
  },
   {
    src: "/images/dds.jpg",
    alt: "dangari dessert camp",
    className: "",
  },
   {
    src: "/images/DDS_1123_045.jpg",
    alt: "Star-filled night sky",
    className: "",
  },
   {
    src: "/images/jais-old-bazar.avif",
    alt: "Star-filled night sky",
    className: "",
  },
   {
    src: "/images/jais-sunset-fort.jpg",
    alt: "jaislmer sunset fort ",
    className: "",
  },


];

export function WhatsApp() {
  return (
    <a
      href="https://wa.me/917043597002"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#2c9b68] px-4 py-3 text-xs font-semibold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1"
    >
      <span className="grid h-5 w-5 place-items-center rounded-full border border-white/50 text-[10px]">
        W
      </span>{" "}
      WhatsApp
    </a>
  );
}
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsApp />
    </>
  );
}
export function ImageTile({
  photo,
  priority = false,
}: {
  photo: Photo;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative min-h-65 overflow-hidden ${photo.className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
  );
}
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export const packages = [
  {
    name: "Superior Swiss Camps",
    price: "₹6,000",
    detail: "Double occupancy",
    image: "/images/dangri-superior-room-photo.jpg",
    alt: "Swiss camp glowing at sunset",
    slug: "/the-stay/superior-swiss-camps",
  },
  {
    name: "Thar Semi Camp",
    price: "₹8,000",
    detail: "Double occupancy",
    image: "/images/thar-semi.jpeg",
    alt: "Wide open Thar desert landscape",
    slug: "/the-stay/thar-semi-camp",
  },
  {
    name: "Thar Regal Camp",
    price: "₹12,000",
    detail: "Double occupancy",
    image: "/images/thar-regal.jpeg",
    alt: "Luxury desert camp beside the dunes",
    slug: "/the-stay/thar-regal-camp",
  },
];
export function Packages() {
  return (
    <section className="bg-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-350">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow text-terracotta">The stay</p>
            <h2 className="section-title mt-3">
              Sleep under
              <br />
              <em>wide skies.</em>
            </h2>
          </div>
          <Link
            href="/the-stay"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-terracotta md:flex"
          >
            View all stays <MoveRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-px bg-ink/15 md:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.1}
              className="bg-paper p-7 md:p-9"
            >
              <Link href={item.slug} className="block">
                <div className="relative -mx-7 -mt-9 mb-7 h-55 overflow-hidden md:-mx-9 md:-mt-9">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </Link>
              <p className="text-xs text-terracotta">0{index + 1}</p>
              <Link href={item.slug} className="mt-8 block max-w-47.5 font-display text-3xl leading-none text-ink transition-colors hover:text-terracotta">
                <h3>
                  {item.name}
                </h3>
              </Link>
              <div className="mt-10 flex items-end justify-between border-t border-ink/15 pt-4">
                <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {item.price}
                  <small className="ml-1 text-[10px] font-normal uppercase tracking-wider text-ink/50 md:text-xs">
                    {" "}
                    / night
                  </small>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-ink/50">
                  {item.detail}
                </span>
              </div>
              <Link href={item.slug} className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-terracotta">
                View camp <MoveRight size={14} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Testimonial() {
  return (
    <section className="bg-terracotta px-5 py-20 text-paper md:px-10 md:py-28">
      <div className="mx-auto max-w-262.5 text-center">
        <div className="mb-6 flex justify-center gap-1 text-sand">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <blockquote className="font-display text-4xl leading-[0.98] md:text-7xl">
          “The kind of quiet you remember long after you leave.”
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-paper/65">
          — Aanya Mehta, Mumbai
        </p>
      </div>
    </section>
  );
}
