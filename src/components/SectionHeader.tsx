import { Reveal } from './Reveal'

type SectionHeaderProps = {
  index: string
  label: string
  title: string
  /** Texto de apoyo opcional a la derecha del título. */
  aside?: string
}

/** Encabezado común a todas las secciones: índice, etiqueta y título. */
export function SectionHeader({
  index,
  label,
  title,
  aside,
}: SectionHeaderProps) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-4 border-b border-line pb-4">
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="label">{label}</span>
          <span className="ml-auto hidden h-px flex-1 max-w-[40%] bg-line md:block" />
        </div>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-16">
        <Reveal delay={0.08}>
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
            {title}
          </h2>
        </Reveal>

        {aside && (
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted md:text-right">
              {aside}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  )
}
