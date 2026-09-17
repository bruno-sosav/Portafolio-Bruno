import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

type SiteFrameProps = {
  href: string
  displayUrl: string
  image: string
  imageAlt: string
  /** Proporción del marco. Las capturas se toman a 16/10. */
  ratio?: string
  className?: string
}


export function SiteFrame({
  href,
  displayUrl,
  image,
  imageAlt,
  ratio = '16/10',
  className,
}: SiteFrameProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress: entry } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const scale = useTransform(entry, [0, 1], [0.94, 1])
  const opacity = useTransform(entry, [0, 0.6], [0, 1])

  const { scrollYProgress: through } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(through, [0, 1], ['-6%', '6%'])

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : { scale, opacity }}
      className={`origin-bottom ${className ?? ''}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="group block border border-line transition-colors duration-500 hover:border-line-strong"
      >
        {/* Barra superior: hace de "chrome" del navegador y de enlace */}
        <div className="flex items-center gap-3 border-b border-line bg-surface/60 px-4 py-3">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
            <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
            <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
          </span>
          <span className="truncate font-mono text-[0.6875rem] text-ink-faint">
            {displayUrl}
          </span>
          <span
            aria-hidden
            className="ml-auto text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          >
            ↗
          </span>
        </div>

        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: ratio }}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            width={1600}
            height={1000}
            style={reduced ? undefined : { y: imageY }}
            className="absolute inset-0 h-[112%] w-full object-cover object-top"
          />
        </div>
      </a>
    </motion.div>
  )
}
