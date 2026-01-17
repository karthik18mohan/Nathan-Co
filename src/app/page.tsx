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
        <section id="who-we-are" className="flex min-h-screen w-full items-center py-20 bg-base">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionReveal>
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                    {whoWeAreHeading}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
                    A heritage of elevated service and discretion.
                  </h2>
                  <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted sm:text-xl">
                    {whoWeAreBody}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href="#history" className="btn btn-primary">
                      Read More
                    </a>
                    <a href="#client-experience" className="btn btn-ghost">
                      Client Experience
                    </a>
                  </div>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-[var(--radius-lg)] shadow-md sm:h-96">
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
        <section id="services" className="flex min-h-screen w-full items-center py-20 bg-surface">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionReveal>
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                    Advisory Services
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
                    Trusted stewardship for modern enterprises.
                  </h2>
                </div>
                <a href="#contact" className="btn btn-secondary">
                  Book a Review
                </a>
              </div>
            </SectionReveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Audit & Assurance",
                  body: "Meticulous, independent reviews that uphold the integrity of your financial reporting."
                },
                {
                  title: "Tax & Compliance",
                  body: "Forward-looking planning and exacting compliance for multi-generational wealth."
                },
                {
                  title: "Strategic Advisory",
                  body: "Partner-level counsel for capital structuring, succession, and growth."
                }
              ].map((card) => (
                <SectionReveal key={card.title}>
                  <div className="card">
                    <span className="badge">Heritage</span>
                    <h3 className="mt-6 text-2xl font-semibold text-primary">{card.title}</h3>
                    <p className="mt-4 text-base text-muted">{card.body}</p>
                    <a href="#contact" className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      Learn More
                    </a>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
        <section id="client-experience" className="flex w-full items-center py-20 bg-base">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionReveal>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                    Client Experience
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
                    Discreet guidance at every milestone.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                    We combine a heritage of Chartered Accountancy with modern advisory depth. Clients rely on a dedicated
                    partner team, transparent reporting, and precise, on-time delivery.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="card">
                      <h3 className="text-lg font-semibold text-primary">Responsive communication</h3>
                      <p className="mt-3 text-sm text-muted">
                        Proactive updates and clear action plans keep leadership aligned.
                      </p>
                    </div>
                    <div className="card">
                      <h3 className="text-lg font-semibold text-primary">Regulatory confidence</h3>
                      <p className="mt-3 text-sm text-muted">
                        Trusted oversight to ensure every engagement meets statutory and ethical expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="card">
                    <h3 className="text-lg font-semibold text-primary">Annual engagement cadence</h3>
                    <table className="table mt-4">
                      <thead>
                        <tr>
                          <th>Quarter</th>
                          <th>Focus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Q1</td>
                          <td>Strategic planning &amp; risk review</td>
                        </tr>
                        <tr>
                          <td>Q2</td>
                          <td>Governance &amp; compliance audit</td>
                        </tr>
                        <tr>
                          <td>Q3</td>
                          <td>Tax optimization</td>
                        </tr>
                        <tr>
                          <td>Q4</td>
                          <td>Year-end reporting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <details className="accordion">
                    <summary>
                      What does the first consultation include?
                      <span className="text-accent">+</span>
                    </summary>
                    <div className="accordion-content">
                      We review your current reporting, clarify governance objectives, and outline a tailored engagement plan.
                    </div>
                  </details>
                  <details className="accordion">
                    <summary>
                      How do you protect confidentiality?
                      <span className="text-accent">+</span>
                    </summary>
                    <div className="accordion-content">
                      Our teams follow strict professional standards, layered access controls, and secured document workflows.
                    </div>
                  </details>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
        <section id="history" className="flex min-h-screen w-full items-center py-20 bg-base">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">History</p>
              <h2 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
                Stewardship across generations.
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{historyBody}</p>
            </SectionReveal>
          </div>
        </section>
        <section id="contact" className="flex w-full items-center py-20 bg-surface">
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionReveal>
              <div className="card">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">Engage with us</p>
                    <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                      A discreet start to your engagement.
                    </h2>
                    <p className="mt-4 text-base text-muted">
                      Share your priorities and we will coordinate a confidential review with a partner-led team.
                    </p>
                  </div>
                  <span className="badge">Priority review</span>
                </div>
                <form className="mt-8 grid gap-6 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-primary">
                    Full name
                    <input className="input mt-2" placeholder="Jane Wright" />
                  </label>
                  <label className="text-sm font-semibold text-primary">
                    Work email
                    <input className="input mt-2" type="email" placeholder="jane@company.com" />
                  </label>
                  <label className="text-sm font-semibold text-primary sm:col-span-2">
                    Area of focus
                    <select className="select mt-2">
                      <option>Audit &amp; Assurance</option>
                      <option>Tax &amp; Compliance</option>
                      <option>Strategic Advisory</option>
                    </select>
                  </label>
                  <label className="text-sm font-semibold text-primary sm:col-span-2">
                    Brief overview
                    <textarea className="textarea mt-2 min-h-[120px]" placeholder="Tell us about your objectives." />
                  </label>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn btn-primary">
                      Request Meeting
                    </button>
                  </div>
                </form>
              </div>
            </SectionReveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
