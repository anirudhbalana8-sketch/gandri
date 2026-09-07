import Image from "next/image";
import { PageFrame, Reveal } from "@/components/site";
import { OurFood } from "@/components/our-food";
import { WelcomeStory } from "@/components/welcome-story";

const milestones = [
  {
    year: "1985",
    title: "The beginning",
    text: "Mr. Khet Singh Bhati started the journey with Camel Safari in Dangri, carrying the romance of the desert to travellers from across the world.",
  },
  {
    year: "1991",
    title: "Mobile camping",
    text: "We introduced mobile camping, offering guests a deeper, quieter experience of the Thar with nights under the stars and days in the dunes.",
  },
  {
    year: "1998",
    title: "National attention",
    text: "The shooting of the Hollywood film Thief of Baghdad on the Dangri Dunes brought global recognition to our desert experience.",
  },
  {
    year: "2001",
    title: "Swiss camps",
    text: "We added Swiss Camps, expanding the experience while staying true to the same desert spirit and innovation that shaped our story.",
  },
];

export default function About() {
  return (
    <PageFrame>
      <section className="story-since-section px-5 pb-12 pt-12 md:px-10 md:pb-16 md:pt-16">
        <div className="mx-auto max-w-375">
          <div className="text-center">
            <p className="story-since-kicker font-display text-[2.3rem] italic leading-none text-[#b3322d] md:text-[5rem]">
              Dangri Desert Safari (DDS) <span className="not-italic text-[#1a1a1a]">Since 1985</span>
            </p>
            <h1 className="story-since-title mt-6 text-[3rem] font-black uppercase tracking-[-0.06em] text-[#1a1a1a] md:text-[7rem]">
              OUR STORY
            </h1>
          </div>

          <div className="story-since-copy mx-auto mt-10 max-w-375 text-[1.05rem] leading-[1.8] text-[#2a2a2a] md:text-[1.6rem]">
            <p>
              The grand, enchanting saga of “Dangri Dunes Safari” began in 1985 when Mr. Khet Singh Bhati, known as the son of the desert, began sharing the Thar with travellers from across the world. He understood the desert as a living personality—its moods, sounds, silence, and magic. From the dunes near Dangri village, he would ride through the remotest corners of the desert on his camel, listening to every whisper of the wind and carrying that romance to others. What started as a humble journey on camelback soon became the beginning of a legacy: “Camel Safari”, a name that would become synonymous with desert experience in Jaisalmer.
            </p>
          </div>
        </div>
      </section>

      <section className="history-section px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-300">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="eyebrow text-terracotta">Our history</p>
              <h2 className="section-title mt-4">A legacy built on desert dreams.</h2>
              <div className="mt-7 space-y-6 text-lg leading-8 text-ink/75 md:text-xl">
                <p>
                  Dangri Desert Camp grew from a single idea: to let people experience the desert not as a barren landscape, but as a living, breathing world of silence, warmth, hospitality, and wonder. In 1991, we introduced Mobile Camping, giving travellers a chance to stay close to nature with limited comforts and a deeper connection to the Thar.
                </p>
                <p>
                  Recognition followed when the Hollywood blockbuster “Thief of Baghdad” was shot on the Dangri Dunes in 1998. That moment brought immense visibility and placed our desert experience on a global map. By 2001, we had expanded further with Swiss Camps, continuing our philosophy of innovation while preserving the authenticity of the desert itself.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-[0_24px_60px_rgba(16,26,29,0.08)]">
              <Image
                src="/images/dds1.jpg"
                alt="Camel safari in the Thar"
                width={900}
                height={1100}
                className="h-105 w-full object-cover md:h-155"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08} className="rounded-3xl border border-ink/10 bg-[#f3efe9] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{item.year}</p>
                <h3 className="mt-4 font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink/70">{item.text}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 max-w-4xl font-display text-3xl italic leading-tight text-terracotta md:text-5xl">
            Come, experience, and go home with memories that linger long after the desert is behind you.
          </p>
        </div>
      </section>

      <OurFood />
      <WelcomeStory />
    </PageFrame>
  );
}
