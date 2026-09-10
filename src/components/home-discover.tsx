import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HomeDiscover() {
  return (
    <section className="bg-paper px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-350 border-y border-ink/15 py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-terracotta">More to discover</p>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
            <div>
              <Link href="/facilities" className="group flex items-center gap-3 font-display text-3xl text-ink transition-colors hover:text-terracotta">
                Facilities <ArrowUpRight className="text-terracotta transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
              </Link>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">Discover our dining, comfortable stays, evening experiences, and thoughtful guest services.</p>
            </div>
            <div>
              <Link href="/explore" className="group flex items-center gap-3 font-display text-3xl text-ink transition-colors hover:text-terracotta">
                Explore Jaisalmer <ArrowUpRight className="text-terracotta transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
              </Link>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/65">Find forts, havelis, bazaars, lakes, temples, and unforgettable desert viewpoints.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
