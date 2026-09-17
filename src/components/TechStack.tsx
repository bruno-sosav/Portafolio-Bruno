import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { useContent } from '../i18n'
import { TECH_LOGOS } from './TechLogos'

export function TechStack() {
  const { coreStack, headings } = useContent()

  return (
    <section id="stack" className="relative py-24 md:py-36">
      <div className="shell">
        <SectionHeader
          index="04"
          label={headings.stack.label}
          title={headings.stack.title}
          aside={headings.stack.aside}
        />

        {/* Núcleo: una fila por tecnología, con logo y una línea concreta */}
        <ul className="border-t border-line">
          {coreStack.map((tech, i) => {
            const Logo = TECH_LOGOS[tech.name]

            return (
              <Reveal as="li" key={tech.name} delay={i * 0.07}>
                <div className="group grid grid-cols-1 gap-3 border-b border-line py-7 transition-colors duration-500 md:grid-cols-12 md:items-center md:gap-6 md:py-8">
                  <div className="flex items-center gap-4 md:col-span-4">
                    {Logo && (
                      <span
                        aria-hidden
                        className="h-8 w-8 shrink-0 text-ink-muted transition-colors duration-500 group-hover:text-accent md:h-9 md:w-9"
                      >
                        <Logo />
                      </span>
                    )}
                    <span className="font-display text-2xl font-medium text-ink md:text-[1.75rem]">
                      {tech.name}
                    </span>
                  </div>

                  <span className="label text-[0.625rem] md:col-span-2">
                    {tech.area}
                  </span>

                  <div className="md:col-span-6">
                    <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                      {tech.note}
                    </p>

                    {/* Herramientas relacionadas, en la fila que les da
                        contexto en vez de sueltas al final de la sección */}
                    {tech.with.length > 0 && (
                      <p className="mt-2.5 font-mono text-[0.6875rem] text-ink-faint">
                        {tech.with.join('  ·  ')}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
