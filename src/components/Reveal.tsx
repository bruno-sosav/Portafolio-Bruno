import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Retraso en segundos — usalo para escalonar hermanos. */
  delay?: number
  /** Desplazamiento vertical inicial en px. */
  y?: number
  className?: string
  as?: 'div' | 'li' | 'span'
}

/**
 * Envoltorio de scroll-reveal. Se dispara una sola vez, cuando el
 * elemento entra en el viewport, y se desactiva por completo si el
 * usuario pidió movimiento reducido.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const Tag = motion[as]

  if (reduced) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
