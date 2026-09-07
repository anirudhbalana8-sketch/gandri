import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageFrame } from "@/components/site";

const amenities = [
  "Camp Size 200/- sqr",
  "King Size Double Bed",
  "Standing Fan",
  "Outside Sitting For Coffee & Tea",
  "24 Hrs Hot & Cold Water in Room",
  "Walk-in Restaurant",
];

export default function SuperiorSwissCampPage() {
  return (
    <PageFrame>
      <main className="bg-paper text-ink">
        <section className="relative overflow-hidden bg-night px-5 pb-16 pt-28 text-paper md:px-10 md:pb-24 md:pt-36">
          <Image
            src="/images/dds.jpg"
            alt="Superior Swiss Camp"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-t from-night/90 via-night/35 to-transparent" />
          <div className="relative z-10 mx-auto max-w-350">
            <Link href="/the-stay" className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand">
              <ArrowLeft size={14} /> The stay
            </Link>
            <p className="eyebrow text-sand">Superior Swiss Camps</p>
            <h1 className="mt-5 max-w-3xl font-display text-6xl leading-[0.82] md:text-8xl">
              Escape into a
              <em className="text-paper">serene desert retreat.</em>
            </h1>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-300">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="eyebrow text-terracotta">Overview</p>
                <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Tranquility in the heart of the Thar.</h2>
                <p className="mt-6 text-lg leading-8 text-ink/75 md:text-xl">
                  Escape the hustle and bustle of everyday life and embark on a mesmerizing journey to our Superior Swiss Camp, where tranquility and enchantment await you. Nestled amidst the vast expanse of golden sands, our camps promise an unforgettable experience in the heart of the desert.
                </p>
              </div>

              <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-[0_24px_60px_rgba(16,26,29,0.08)]">
                <Image
                  src="/images/DDS_1123_038.jpg"
                  alt="Superior Swiss Camp accommodation"
                  width={900}
                  height={1100}
                  className="h-105 w-full object-cover md:h-155"
                />
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {amenities.map((item) => (
                <div key={item} className="rounded-3xl border border-ink/10 bg-[#f3efe9] p-6">
                  <p className="font-display text-2xl leading-none text-ink">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow text-terracotta">Dining</p>
                <h3 className="mt-4 font-display text-4xl md:text-5xl">Flavours of Rajasthan, served under the stars.</h3>
                <p className="mt-6 text-lg leading-8 text-ink/75">
                  Indulge your taste buds with an exquisite dining experience that showcases the finest flavours of the region. Our talented chefs prepare a delightful array of traditional Rajasthani dishes as well as international cuisine. Enjoy the delectable feast under the starlit sky with the gentle desert breeze caressing your skin, making your meal truly memorable.
                </p>
              </div>

              <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper">
                <Image
                  src="/images/DDS_1123_146.jpg"
                  alt="Dining at the camp"
                  width={900}
                  height={700}
                  className="h-90 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-center">
              <div className="overflow-hidden rounded-4xl border border-ink/10 bg-paper">
                <Image
                  src="/images/DDS_1123_149.jpg"
                  alt="Hospitality at Superior Swiss Camp"
                  width={900}
                  height={700}
                  className="h-90 w-full object-cover"
                />
              </div>

              <div>
                <p className="eyebrow text-terracotta">Hospitality</p>
                <h3 className="mt-4 font-display text-4xl md:text-5xl">Warm, thoughtful service from check-in to checkout.</h3>
                <p className="mt-6 text-lg leading-8 text-ink/75">
                  Our warm and attentive staff is dedicated to providing you with the finest hospitality, ensuring that every aspect of your stay is taken care of. From the moment you step foot in our camp until your departure, we strive to create a memorable and seamless experience for you and your loved ones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
