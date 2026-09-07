import Image from "next/image";
import { PageFrame, Packages, Reveal } from "@/components/site";
import { OurFood } from "@/components/our-food";
export default function Stay() {
  return (
    <PageFrame>
      <section className="relative flex min-h-162.5 items-end overflow-hidden bg-night px-5 pb-16 pt-40 text-paper md:px-10 md:pb-24">
        <Image
          src="/images/dds-camp1.jpg"
          alt="Luxury camp at sunset"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-night/90 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-350">
          <p className="eyebrow text-sand">The stay</p>
          <h1 className="mt-5 max-w-3xl font-display text-7xl leading-[0.82] md:text-9xl">
            Room to
            <em>breathe.</em>
          </h1>
        </div>
      </section>
      <Packages />
     <OurFood />
    </PageFrame>
  );
}
