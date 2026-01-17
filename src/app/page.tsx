import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SectionReveal } from "@/components/SectionReveal";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { historyBody, whoWeAreBody, whoWeAreHeading, whoWeAreImage } from "@/content/copy";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        <HeroCarousel />
        <section id="who-we-are" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionReveal>
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-burgundy/80">
                    {whoWeAreHeading}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold text-navy sm:text-5xl">
                    A heritage of elevated service and discretion.
                  </h2>
                  <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                    {whoWeAreBody}
                  </p>
                  <a
                    href="#history"
                    className="mt-8 inline-flex rounded-full border border-navy/20 bg-navy px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-ivory shadow-glow transition hover:-translate-y-0.5 hover:bg-navy/90"
                  >
                    READ MORE
                  </a>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-glow sm:h-96">
                  <Image
                    src={whoWeAreImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
        <section id="history" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-burgundy/80">
                History
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-navy sm:text-5xl">
                Stewardship across generations.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                {historyBody}
              </p>
            </SectionReveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
