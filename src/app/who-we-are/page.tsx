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
