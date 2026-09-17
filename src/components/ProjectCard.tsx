import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { Project } from '../content'
import { useContent } from '../i18n'
import { Reveal } from './Reveal'
import { SiteFrame } from './SiteFrame'

type ProjectCardProps = {
  project: Project
  /** Alterna el lado del número fantasma para romper la grilla. */
  align: 'left' | 'right'
}

/** Orden fijo de la narrativa de cada proyecto. Las etiquetas vienen del
    idioma activo; las claves son las del objeto `Project`. */
const BREAKDOWN_KEYS = ['problem', 'solution', 'result'] as const

export function ProjectCard({ project, align }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { ui } = useContent()
  const breakdown = BREAKDOWN_KEYS.map((key) => ({
    key,
    label: ui.breakdown[key],
  }))

  // Parallax leve del número fantasma: da profundidad al scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], ['22%', '-22%'])

  return (
    <article ref={ref} className="group relative">
      {/* Número fantasma — vive en el margen, fuera de la caja */}
      <motion.span
        aria-hidden
        style={reduced ? undefined : { y: ghostY }}
        className={`pointer-events-none absolute -top-16 z-0 font-display text-[clamp(6rem,18vw,15rem)] leading-none font-semibold tracking-tighter text-ink/[0.055] select-none ${
          // Va del lado donde la card deja margen libre, para que el
          // número asome fuera de la caja en vez de quedar tapado.
          align === 'left' ? 'right-0 lg:-right-6' : 'left-0 lg:-left-6'
        }`}
      >
        {project.index}
      </motion.span>

      <Reveal>
        <div
          className={`relative z-10 border border-line bg-surface/50 backdrop-blur-sm transition-colors duration-500 hover:border-line-strong ${
            align === 'right' ? 'lg:ml-[10%]' : 'lg:mr-[10%]'
          }`}
        >
          {/* Barrido de acento en el borde superior al hacer hover */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />

          {/* Barra de metadatos */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line px-6 py-4 md:px-10">
            <span className="font-mono text-xs text-accent">
              {project.index}
            </span>
            <span className="label text-[0.625rem]">{project.kind}</span>
            <span className="ml-auto flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent/70" />
              <span className="label text-[0.625rem] text-ink-muted">
                {project.year}
              </span>
            </span>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-14">
            {/* Título */}
            <h3 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
              <span className="ink-gradient">{project.name}</span>
            </h3>
            <p className="mt-4 max-w-lg text-base text-ink-muted md:text-lg">
              {project.tagline}
            </p>

            {/* Desglose problema → solución → resultado */}
            <dl className="mt-12 border-t border-line">
              {breakdown.map(({ key, label }) => (
                <div
                  key={key}
                  className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-8"
                >
                  <dt className="label pt-1 text-[0.625rem] md:col-span-3 lg:col-span-2">
                    {label}
                  </dt>
                  <dd
                    className={`text-base leading-relaxed md:col-span-9 lg:col-span-10 ${
                      key === 'result' ? 'text-ink' : 'text-ink-muted'
                    }`}
                  >
                    {key === 'result' && (
                      <span
                        aria-hidden
                        className="mr-3 inline-block h-px w-6 translate-y-[-0.3em] bg-accent align-middle"
                      />
                    )}
                    {project[key]}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Stack */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-3 py-1.5 font-mono text-[0.6875rem] text-ink-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-10 inline-flex items-center gap-3 border border-line-strong px-5 py-3 text-sm text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {ui.viewLive}
                <span
                  aria-hidden
                  className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            )}

            {/* Captura del sitio, sólo si el proyecto tiene una */}
            {project.image && project.href && project.displayUrl && (
              <SiteFrame
                href={project.href}
                displayUrl={project.displayUrl}
                image={project.image}
                imageAlt={project.imageAlt ?? `Captura de ${project.name}`}
                className="mt-12"
              />
            )}
          </div>
        </div>
      </Reveal>
    </article>
  )
}
