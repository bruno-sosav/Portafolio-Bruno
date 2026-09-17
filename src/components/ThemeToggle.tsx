import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useTheme } from '../hooks/useTheme'
import { useContent } from '../i18n'

const EASE = [0.16, 1, 0.3, 1] as const

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="1.8"
          x2="12"
          y2="4.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <path
        d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { ui } = useContent()
  const reduced = useReducedMotion()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? ui.themeToLight : ui.themeToDark}
      title={isDark ? ui.themeLight : ui.themeDark}
      className="group relative grid h-9 w-9 place-items-center border border-line-strong text-ink-muted transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <span className="relative block h-4 w-4">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={theme}
            className="absolute inset-0 block"
            initial={reduced ? false : { opacity: 0, rotate: -75, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, rotate: 75, scale: 0.6 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}
