import { Reveal } from "./site";

export function WelcomeStory({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="mt-8 border-l-2 border-terracotta pl-5 text-sm leading-7 text-ink/70">
        <p className="font-display text-2xl leading-none text-terracotta">Ghani khamma. Padharo mhare des.</p>
        <p className="mt-4">At Dangri, every visitor is a dear guest. Come for the Thar&apos;s splendour, stay for our warmth, stories, campfire evenings, and hospitality redefined.</p>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-terracotta px-5 py-20 text-paper md:px-10 md:py-28">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-sand/10 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
      <div className="relative mx-auto grid max-w-350 gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
        <Reveal>
          <p className="eyebrow text-sand">A word from Dangri</p>
          <h2 className="mt-5 max-w-md font-display text-6xl leading-[.82] md:text-8xl">Ghani khamma.<br /><em className="text-paper">Padharo mhare des.</em></h2>
          <p className="mt-8 max-w-xs text-xs uppercase tracking-[.18em] text-paper/60">Hospitality redefined since 1985</p>
        </Reveal>
        <Reveal delay={0.12} className="max-w-2xl text-lg leading-8 text-paper/85 md:pt-12">
          <p>We say this when we welcome our esteemed guests to Dangri Desert Camp. The Thar is renowned the world over for its otherworldly splendour, where the scenic magnificence of the sand dunes becomes a feast for the eyes and heart.</p>
          <p className="mt-6">The enchanting climate shows every facet of its charm throughout the day, then turns cool at night as you are entertained by the campfire. Crowning it all is the hospitality that is surely our biggest distinction.</p>
          <p className="mt-6">Every visitor is a dear guest, close to our hearts and souls, deserving our best service, ambience, food, and ever-ready response to your wishes. Our mission is simple: to have you return again and again, remembering every moment and every gesture long after you leave.</p>
        </Reveal>
      </div>
    </section>
  );
}