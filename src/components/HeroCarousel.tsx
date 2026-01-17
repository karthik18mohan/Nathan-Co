import Image from "next/image";
import { siteTitle } from "@/content/copy";

const heroImage =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80";

const grainTexture =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E";

export function HeroCarousel() {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden bg-ivory">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-28 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-deep-green/80">
              Chartered Accountants
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              {siteTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Purpose-built financial stewardship with an understated heritage—trusted by
              multi-generational enterprises and emerging leaders alike.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-ivory shadow-[0_18px_40px_rgba(18,18,18,0.25)] transition hover:-translate-y-0.5 hover:bg-ink/90"
              >
                Schedule a Consultation
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center justify-center rounded-full border border-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-ink transition hover:-translate-y-0.5 hover:bg-ink/5"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative h-[26rem] w-full overflow-hidden rounded-[32px] border border-ink/10 bg-fog shadow-[0_30px_70px_rgba(18,18,18,0.18)] sm:h-[30rem]">
              <Image
                src={heroImage}
                alt="Architectural facade in monochrome tones"
                fill
                className="object-cover grayscale"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ivory/20 via-transparent to-deep-green/10" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
                style={{ backgroundImage: `url("${grainTexture}")` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
