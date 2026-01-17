import { siteTitle } from "@/content/copy";
import bgImage from "../../bg.jpg";

export function HeroCarousel() {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden bg-ivory">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-28 sm:pt-32">
        <div className="relative overflow-hidden rounded-[32px] border border-ink/10 bg-ivory/80 p-8 shadow-[0_30px_70px_rgba(18,18,18,0.18)] sm:p-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          />
          <div className="absolute inset-0 bg-ivory/70" />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-deep-green/80">
                Chartered Accountants
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                {siteTitle}
              </h1>
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
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-ink/70 sm:text-lg">
                Purpose-built financial stewardship with an understated heritage—trusted by
                multi-generational enterprises and emerging leaders alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
