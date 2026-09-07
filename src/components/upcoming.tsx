"use client";

import { CalendarDays, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "./site";

const events = [
  { date: "03", month: "Nov", year: "2026", title: "Desert Lights", detail: "A full-moon evening of music, firelight, and slow dining." },
  { date: "14", month: "Nov", year: "2026", title: "Dunes & Drums", detail: "A spirited night of folk rhythms beneath the open sky." },
  { date: "28", month: "Dec", year: "2026", title: "New Year at Dangri", detail: "Welcome the new year with a private table in the Thar." },
  { date: "08", month: "Jan", year: "2027", title: "Winter Moon Supper", detail: "An intimate Rajasthani feast served under a silver desert sky." },
  { date: "22", month: "Jan", year: "2027", title: "Dune Stories", detail: "A fireside gathering of folk tales, live music, and local craft." },
  { date: "06", month: "Feb", year: "2027", title: "Valentine in the Thar", detail: "A private sunset table and an evening made for two." },
];

export function Upcoming() {
  return (
    <section className="overflow-hidden bg-night px-5 py-20 text-paper md:px-10 md:py-28">
      <div className="mx-auto max-w-350">
        <div className="flex flex-col justify-between gap-8 border-b border-paper/20 pb-10 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-sand">Mark your calendar</p>
            <h2 className="mt-4 font-display text-6xl leading-[.82] md:text-8xl">Upcoming<br /><em className="text-paper">at Dangri.</em></h2>
          </Reveal>
          <Reveal delay={0.12} className="max-w-sm text-sm leading-7 text-paper/60">
            <p>There is always something gathering at the edge of the desert. Join us for evenings made to be remembered.</p>
          </Reveal>
        </div>
        <div className="divide-y divide-paper/15">
          {events.map((event, index) => (
            <motion.div key={event.title} initial={index < 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index < 2 ? index * .1 : 0 }} style={{ zIndex: index + 1 }} className="sticky top-24 bg-night group grid gap-6 border-t border-paper/15 py-7 md:grid-cols-[100px_1fr_auto] md:items-center md:gap-10">
              <div className="flex items-center gap-3 text-sand"><span className="font-display text-5xl leading-none">{event.date}</span><span className="eyebrow">{event.month}<br />{event.year}</span></div>
              <div><h3 className="font-display text-3xl transition-colors group-hover:text-sand md:text-4xl">{event.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-paper/55">{event.detail}</p></div>
              <Link href="/contact" aria-label={`Enquire about ${event.title}`} className="flex w-fit items-center gap-2 text-xs uppercase tracking-[.18em] text-sand transition-transform group-hover:translate-x-1"><CalendarDays size={16} /> Enquire <MoveRight size={16} /></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}