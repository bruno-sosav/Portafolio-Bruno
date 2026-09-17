import { useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { useContent } from '../i18n'

/** Marcas de esquina tipo mira técnica. */
function CornerTicks() {
  const base = 'absolute h-3 w-3 border-accent/50'
  return (
    <>
      <span className={`${base} top-0 left-0 border-t border-l`} />
      <span className={`${base} top-0 right-0 border-t border-r`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  )
}

/** Monograma. Es el respaldo de la placa cuando no hay retrato. */
function Monogram() {
  return (
    <div aria-hidden className="border-y border-line py-8 text-center">
      <span className="font-display text-[clamp(3.5rem,9vw,5.5rem)] leading-none font-semibold tracking-[-0.05em] text-ink/90">
        B<span className="text-accent">.</span>S
        <span className="text-accent">.</span>V
      </span>
    </div>
  )
}

function Portrait({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) return <Monogram />

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="aspect-4/5 w-full border border-line object-cover"
    />
  )
}

export function About() {
  const { about, profile, headings, ui, coreStack } = useContent()

  return (
    <section id="sobre-mi" className="relative py-24 md:py-36">
      <div className="shell">
        <SectionHeader
          index="01"
          label={headings.about.label}
          title={headings.about.title}
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* Placa de identidad */}
          <Reveal className="md:col-span-5 lg:col-span-5">
            <div className="relative border border-line bg-surface/40 p-7 backdrop-blur-sm md:sticky md:top-28 md:p-9">
              <CornerTicks />

              <div className="mb-8 flex items-center justify-between">
                <span className="label">{ui.profileCard}</span>
                <span className="font-mono text-[0.625rem] text-ink-faint">
                  BSV / 001
                </span>
              </div>

              {/* Retrato — o monograma si todavía no hay foto */}
              <div className="mb-8">
                <Portrait src={profile.photo} alt={profile.photoAlt} />
              </div>

              <dl className="space-y-0">
                {about.meta.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 last:border-b-0"
                  >
                    <dt className="label text-[0.6875rem] whitespace-nowrap">
                      {row.label}
                    </dt>
                    <dd className="text-right font-mono text-[0.8125rem] text-ink-muted">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 flex items-center justify-between border border-line-strong px-5 py-3.5 transition-colors duration-300 hover:border-accent"
              >
                <span className="label transition-colors duration-300 group-hover:text-accent">
                  {ui.writeMe}
                </span>
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>

          {/* Texto */}
          <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p
                    className={
                      i === 0
                        ? 'text-lg leading-relaxed text-ink md:text-xl'
                        : 'text-base leading-relaxed text-ink-muted md:text-lg'
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Núcleo del stack, destacado del cuerpo de texto */}
            <Reveal delay={0.3}>
              <div className="mt-14 border-t border-line pt-10">
                <p className="label mb-5">{ui.techCore}</p>
                {/* Se deriva de `coreStack` a propósito: antes era una lista
                    escrita a mano acá y se desincronizaba de la sección Stack
                    cada vez que cambiaba una tecnología. */}
                <ul className="flex flex-wrap gap-x-8 gap-y-4">
                  {coreStack.map((tech) => (
                    <li
                      key={tech.name}
                      className="font-display text-xl font-medium text-ink-muted transition-colors duration-300 hover:text-accent md:text-2xl"
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
