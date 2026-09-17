import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { SiteFrame } from './SiteFrame'
import { useContent } from '../i18n'

export function Stratus() {
  const { stratus, headings, ui } = useContent()

  return (
    <section id="stratus" className="relative py-24 md:py-36">
      <div className="shell">
        <SectionHeader
          index="02"
          label={headings.stratus.label}
          title={headings.stratus.title}
          aside={stratus.tagline}
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink md:text-xl">
                {stratus.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                {stratus.role}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href={stratus.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-9 inline-flex items-center gap-4 border border-line-strong px-6 py-3.5 transition-colors duration-300 hover:border-accent"
              >
                <span className="font-display text-base font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  {ui.visitSite}
                </span>
                <span
                  aria-hidden
                  className="text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* Ficha de datos + servicios */}
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.12}>
              <dl className="border-t border-line">
                {stratus.meta.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                  >
                    <dt className="label text-[0.625rem]">{row.label}</dt>
                    <dd className="text-right font-mono text-xs text-ink-muted">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-7 space-y-2.5">
                {stratus.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 font-display text-base text-ink-muted"
                  >
                    <span
                      aria-hidden
                      className="h-px w-4 shrink-0 bg-accent/60"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Imagen del sitio — a lo ancho, con scroll-scrubbing */}
      <div className="shell mt-16 md:mt-24">
        <SiteFrame
          href={stratus.url}
          displayUrl={stratus.displayUrl}
          image={stratus.image}
          imageAlt={stratus.imageAlt}
        />
      </div>
    </section>
  )
}
