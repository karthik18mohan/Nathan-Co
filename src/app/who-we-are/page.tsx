import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { siteTitle, whoWeAreBody, whoWeAreHeading, whoWeAreHeroImage } from "@/content/copy";

export default function WhoWeArePage() {
  return (
    <main>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Image
          src={whoWeAreHeroImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{siteTitle}</h1>
        </div>
      </section>
      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <SectionReveal>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.3em] text-ink sm:text-4xl">
            {whoWeAreHeading}
          </h2>
        </SectionReveal>
        <SectionReveal>
          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-ink/80">
            {whoWeAreBody}
          </p>
        </SectionReveal>
      </section>
import { SectionReveal } from "@/components/SectionReveal";
import { whoWeAreBody } from "@/content/copy";

export default function WhoWeArePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20">
      <SectionReveal>
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-ink sm:text-4xl">WHO WE ARE</h1>
      </SectionReveal>
      <SectionReveal>
        <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-ink/80">
          {whoWeAreBody}
        </p>
      </SectionReveal>
    </main>
  );
}
