import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SectionReveal } from "@/components/SectionReveal";
import { historyBody, whoWeAreBody, whoWeAreHeading, whoWeAreImage } from "@/content/copy";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <section id="who-we-are" className="flex min-h-screen w-full items-center py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-ink sm:text-4xl">
                  {whoWeAreHeading}
                </h2>
                <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-ink/80">
                  {whoWeAreBody}
                </p>
                <a
                  href="#history"
                  className="mt-8 inline-flex rounded-full border border-ink/20 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink/90"
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
      <section id="history" className="flex min-h-screen w-full items-center py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <SectionReveal>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">History</h2>
          </SectionReveal>
          <SectionReveal>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{historyBody}</p>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
