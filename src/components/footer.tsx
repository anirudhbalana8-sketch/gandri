import { Aperture } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-night px-5 py-14 text-white md:px-10 md:py-20">
      <div className="mx-auto grid max-w-350 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><p className="eyebrow text-sand">Dangri / Jaisalmer</p><h2 className="mt-4 max-w-md font-display text-4xl leading-none md:text-6xl">A little further from ordinary.</h2></div>
        <div><p className="eyebrow text-white/40">Find us</p><p className="mt-4 max-w-xs text-sm leading-6 text-white/65">KH No - 166/762 SAM Village,<br />District Jaisalmer, Rajasthan 345001</p><a className="mt-4 inline-block text-sm text-sand" href="tel:+917043597002">+91-7043597002</a></div>
        <div><p className="eyebrow text-white/40">Stay in touch</p><a className="mt-4 block text-sm text-white/65" href="mailto:dangridesertcamp@gmail.com">dangridesertcamp@gmail.com</a><div className="mt-8 flex gap-4"><Aperture size={18} /><span className="text-xs uppercase tracking-widest text-white/50">@dangridesertcamp</span></div></div>
      </div>
      <div className="mx-auto mt-16 flex max-w-350 justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-white/35"><span>© 2026 Dangri Desert Camp</span><span>Jaisalmer, Rajasthan</span></div>
    </footer>
  );
}