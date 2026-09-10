"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
const navItems = ["About", "The Stay", "Facilities", "Explore", "Gallery", "Reviews", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-night/95 px-5 py-3 shadow-lg shadow-night/10 backdrop-blur-md md:px-10 md:py-4">
      <div className="mx-auto flex max-w-350 items-center justify-between border-b border-white/20 pb-5 text-white">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Dangri Desert Camp" width={105} height={82} priority className="h-14 w-auto object-contain md:h-16" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-[11px] uppercase tracking-[0.2em] text-white/75 transition hover:text-sand">{item}</Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-sand lg:flex">Plan your stay <ArrowUpRight size={15} /></Link>
        <button aria-label={open ? "Close menu" : "Open menu"} className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-auto mt-3 grid max-w-350 gap-1 border-b border-white/20 bg-night/95 p-4 lg:hidden">
            {navItems.map((item) => (
              <Link onClick={() => setOpen(false)} key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="border-b border-white/10 py-3 font-display text-2xl text-white">{item}</Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}