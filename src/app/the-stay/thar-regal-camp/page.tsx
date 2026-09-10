import Image from "next/image";
import Link from "next/link";
import {
  AirVent,
  BedDouble,
  Coffee,
  Compass,
  Clock3,
  CircleDot,
  Flame,
  GlassWater,
  Sparkles,
  Utensils,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { PageFrame } from "@/components/site";

const amenities: { label: string; icon: LucideIcon }[] = [
  {
    label: "Camp Size 676/- sqr Including Attached Drawing Room",
    icon: Compass,
  },
  { label: "King Size Double Bed", icon: BedDouble },
  { label: "Airconditioned Bedrooms", icon: AirVent },
  { label: "Wi-fi Available", icon: Wifi },
  { label: "24 Hrs Hot & Cold Water in Room", icon: GlassWater },
  { label: "Walk-in Restaurant / Private Dining Area", icon: Utensils },
  { label: "Welcome Drink on Arrival", icon: GlassWater },
  { label: "Camel Ride (Two Persons on Each Camel)", icon: Compass },
  { label: "Cultural Evening (In Winters Only)", icon: Sparkles },
  { label: "Campfire (In Winters Only)", icon: Flame },
  { label: "Evening Tea/Coffee with Snacks", icon: Coffee },
  { label: "Buffet Dinner & Breakfast", icon: Utensils },
];

const activityTimings = [
  {
    activity: "Camel Ride",
    timing:
      "Evening between 16:00 PM till sunset & morning 06:00 AM - 08:00 AM",
  },
  {
    activity: "Tea/Coffee & Snacks",
    timing: "19:00 PM - 19:30 PM at Amphitheater & Buffet area",
  },
  {
    activity: "Cultural Program",
    timing: "19:00 PM - 22:00 PM at Amphitheater & Buffet area",
  },
  {
    activity: "Dinner",
    timing: "20:30 PM - 22:30 PM at Amphitheater & Buffet area",
  },
  {
    activity: "Morning  Tea / Coffee",
    timing: "07:00 AM - 07:30 AM at the common tents",
  },
  { activity: "Breakfast", timing: "08:00 AM - 10:00 AM" },
];

const importantNotes = [
  { title: "", note: "Please note in-room dining is not allowed." },
  { title: "", note: "Smoking is strictly prohibited in the tents." },
  {
    title: "Indoor games available on request:",
    note: "Please contact at the reception",
  },
];

export default function TharRegalCampPage() {
  return (
    <PageFrame>
      <main className="bg-paper text-ink">
        <section className="relative overflow-hidden bg-night px-5 pb-16 pt-28 text-paper md:px-10 md:pb-24 md:pt-36">
          <Image
            src="/images/dds.jpg"
            alt="Thar Regal Camp"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/35 to-transparent" />
          <div className="relative z-10 mx-auto max-w-350">
            <Link
              href="/the-stay"
              className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand"
            >
              <ArrowLeft size={14} /> The stay
            </Link>
            <p className="eyebrow text-sand">Thar Regal Camp</p>
            <h1 className="mt-5 max-w-3xl font-display text-6xl leading-[0.82] md:text-8xl">
              An oasis of
              <em className="text-paper">tranquility in the desert.</em>
            </h1>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-300">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="eyebrow text-terracotta">Overview</p>
                <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
                  The grandest desert stay, thoughtfully styled.
                </h2>
                <p className="mt-6 text-lg leading-8 text-ink/75 md:text-xl">
                  Our finest expression of desert living, the Thar Luxury Suites
                  are designed for guests who appreciate space, privacy, and
                  refined comfort in the heart of the desert.
                </p>
                <p className="mt-6 text-lg leading-8 text-ink/75 md:text-xl">
                  Spread across an expansive 1,100 sq. ft., each suite offers a
                  generous 450 sq. ft. luxury room, complemented by a separate
                  outdoor seating area where you can slow down and take in the
                  stillness of the Thar.
                </p>
                <p className="mt-6 text-lg leading-8 text-ink/75 md:text-xl">
                  Inside, thoughtfully selected interiors, premium fabrics,
                  comfortable furnishings, and modern amenities create a warm
                  and sophisticated retreat. Every detail is considered to bring
                  together the character of a traditional desert camp with the
                  comforts of contemporary luxury.
                </p>
              </div>

              <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-[0_24px_60px_rgba(16,26,29,0.08)]">
                <Image
                  src="/images/dds.jpg"
                  alt="Thar Regal Camp accommodation"
                  width={900}
                  height={1100}
                  className="h-105 w-full object-cover md:h-155"
                />
              </div>
            </div>

            <h3 className="mt-14 mb-8 font-display text-4xl text-ink md:text-5xl">
              ---- Inclusions
            </h3>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {amenities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 rounded-3xl border border-ink/10 bg-[#f3efe9] p-6"
                >
                  <Icon
                    className="shrink-0 text-terracotta"
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl leading-none text-ink">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-center">
              <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper">
                <Image
                  src="/images/thar-regal.jpeg"
                  alt="Hospitality at Thar Regal Camp"
                  width={900}
                  height={700}
                  className="h-90 w-full object-cover"
                />
              </div>

              <div>
                <p className="eyebrow text-terracotta">Hospitality</p>
                <h3 className="mt-4 font-display text-4xl md:text-5xl">
                  Service that makes every stay feel exceptional.
                </h3>
                <p className="mt-6 text-lg leading-8 text-ink/75">
                  Our warm and attentive staff is dedicated to providing you
                  with the finest hospitality, ensuring that every aspect of
                  your stay is taken care of. From the moment you step foot in
                  our camp until your departure, we strive to create a memorable
                  and seamless experience for you and your loved ones.
                </p>
              </div>
            </div>

            <section className="mt-20 rounded-4xl border border-ink/10 bg-[#f3efe9] p-6 md:p-10">
              <h3 className="font-display text-4xl text-ink md:text-5xl">
                Activity Timings
              </h3>
              <p className="mt-5 text-xl font-semibold text-ink/75">
                Suggestions for Guest & Important Notes:
              </p>
              <ul className="mt-8 grid gap-5 text-lg leading-8 text-ink/80">
                {activityTimings.map(({ activity, timing }) => (
                  <li key={activity} className="flex gap-4">
                    <Clock3
                      className="mt-1 shrink-0 text-sand"
                      size={22}
                      aria-hidden="true"
                    />
                    <p>
                      <strong className="text-ink">{activity}:</strong> {timing}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 rounded-4xl border border-ink/10 bg-[#f3efe9] p-6 md:p-10">
              <h3 className="font-display text-4xl text-ink md:text-5xl">
                Please Note:
              </h3>
              <ul className="mt-8 grid gap-5 text-lg leading-8 text-ink/80">
                {importantNotes.map(({ title, note }) => (
                  <li key={note} className="flex gap-4">
                    <CircleDot
                      className="mt-1 shrink-0 text-sand"
                      size={22}
                      aria-hidden="true"
                    />
                    <p>
                      <strong className="text-ink">{title}</strong>
                      {title ? ` ${note}` : note}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
