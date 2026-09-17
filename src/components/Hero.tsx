import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { useContent } from '../i18n'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}

/** Revelado por máscara: la línea sube desde detrás de su contenedor. */
const maskLine: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1.15, ease: EASE } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
}

const growLine: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease: EASE } },
}

export function Hero() {
  const { heroStats, profile, stratus, hero } = useContent()
  const reduced = useReducedMotion()
  // Con movimiento reducido montamos todo en su estado final.
  const anim = reduced
    ? { initial: undefined, animate: undefined }
    : { initial: 'hidden' as const, animate: 'show' as const }

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center pt-28 pb-32 md:pt-32 md:pb-40"
    >
      <motion.div
        variants={container}
        {...anim}
        className="shell relative w-full"
      >
        {/* Etiqueta de encabezado */}
        <motion.div
          variants={fadeUp}
          className="mb-8 flex items-center gap-4 md:mb-10"
        >
          <span className="h-px w-10 bg-accent md:w-16" />
          <span className="label text-accent">{hero.kicker}</span>
        </motion.div>

        {/* Nombre — dos líneas con revelado por máscara.
            La línea corta es la que se indenta: así se rompe la grilla
            sin arriesgar que el apellido, mucho más largo, haga wrap. */}
        <h1 className="font-display text-[clamp(2.15rem,9.2vw,8.5rem)] leading-[0.88] font-semibold tracking-[-0.04em] uppercase md:whitespace-nowrap">
          {/* El padding-top va en el span del degradé, no en la máscara:
              `background-clip: text` no pinta fuera de la caja del
              elemento, y sin ese aire la tilde de la Ó queda sin color.
              El -mt del contenedor reabsorbe ese espacio extra. */}
          <span className="-mt-[0.18em] block overflow-hidden pb-[0.05em] md:pl-[13vw]">
            <motion.span
              variants={maskLine}
              className="ink-gradient block"
            >
              {profile.firstName}
            </motion.span>
          </span>
          <span className="-mt-[0.18em] block overflow-hidden pb-[0.05em]">
            <motion.span
              variants={maskLine}
              className="ink-gradient block"
            >
              {profile.lastName}
            </motion.span>
          </span>
        </h1>

        {/* Regla que ancla el bloque de título */}
        <motion.div
          variants={growLine}
          style={{ transformOrigin: 'left' }}
          className="mt-10 h-px w-full bg-line md:mt-12"
        />

        {/* Rol + frase de identidad — composición asimétrica.
            Tiene que ser motion.div: las variantes sólo se propagan a
            través de componentes de Motion, un div plano corta la cadena
            y los hijos se quedarían en su estado `hidden`. */}
        <motion.div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-12 md:gap-6">
          <motion.p
            variants={fadeUp}
            className="font-display text-lg leading-snug text-ink-muted md:col-span-5 md:text-xl"
          >
            {hero.roleLine}
            <span className="mx-2 text-ink-faint">&</span>
            <br className="hidden md:block" />
            {hero.coFounderLine}{' '}
            <span className="text-ink-faint">@</span>{' '}
            <a
              href={stratus.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent decoration-accent/40 underline-offset-[6px] transition-colors duration-300 hover:underline"
            >
              Stratus Industries
            </a>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-ink-muted md:col-span-6 md:col-start-7 md:text-lg"
          >
            {profile.statement}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Tira de datos inferior — lectura tipo panel de control */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
        className="shell absolute inset-x-0 bottom-8 hidden md:block"
      >
        <div className="grid grid-cols-4 border-t border-line">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-line px-4 py-4 first:pl-0 last:border-r-0"
            >
              <p className="label mb-1.5 text-[0.625rem]">{stat.label}</p>
              <p className="font-mono text-xs text-ink-muted">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
