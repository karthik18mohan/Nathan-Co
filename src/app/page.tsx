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
          <div className="mx-auto w-full max-w-[1180px] px-6">
            <SectionReveal>
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">
                    {whoWeAreHeading}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold text-oxford sm:text-5xl">
                    A heritage of elevated service and discretion.
                  </h2>
                  <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                    {whoWeAreBody}
                  </p>
                  <a
                    href="#history"
                    className="mt-8 inline-flex rounded-md border border-oxford bg-oxford px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-paper transition hover:bg-oxford/90"
                  >
                    READ MORE
                  </a>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-md border border-stone sm:h-96">
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
        <section id="what-we-do" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-[1180px] px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">
                WHAT WE DO
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-oxford sm:text-5xl">
                Integrated advisory, audit, and assurance.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                We pair rigorous statutory expertise with forward-looking guidance across audit,
                taxation, risk advisory, and virtual CFO services to help you grow with clarity.
              </p>
            </SectionReveal>
          </div>
        </section>
        <section id="we-serve" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-[1180px] px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">
                WE SERVE
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-oxford sm:text-5xl">
                Legacy enterprises and next-generation founders.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                From family-owned conglomerates to ambitious startups, we tailor each engagement
                with precision, discretion, and a deep understanding of your sector.
              </p>
            </SectionReveal>
          </div>
        </section>
        <section id="history" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-[1180px] px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">History</p>
              <h2 className="mt-4 text-4xl font-semibold text-oxford sm:text-5xl">
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
        <section id="contact" className="flex min-h-screen w-full items-center py-20">
          <div className="mx-auto w-full max-w-[1180px] px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">
                CONTACT
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-oxford sm:text-5xl">
                Begin a discreet consultation.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
                Share your objectives and we will assemble the right advisory team for you. Reach
                us at <span className="font-semibold text-oxford">partners@nathanco.com</span> or
                +91 (0) 11 0000 0000.
              </p>
            </SectionReveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
