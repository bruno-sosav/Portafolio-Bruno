import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useContent, useLanguage } from '../i18n'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Botón de idioma. Muestra el código del idioma al que se cambia (no del
 * activo): estando en español dice "EN", que es lo que el usuario va a
 * obtener si lo toca. Al revés se lee como una etiqueta de estado y
 * confunde.
 *
 * Comparte la caja de 36px con el botón de tema para que el par quede
 * alineado en la barra.
 */
export function LangToggle() {
  const { lang, toggle } = useLanguage()
  const { ui } = useContent()
  const reduced = useReducedMotion()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.switchToLangLabel}
      title={ui.switchToLangLabel}
      className="group relative grid h-9 w-9 place-items-center overflow-hidden border border-line-strong text-ink-muted transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={lang}
          className="label block text-[0.625rem] leading-none"
          initial={reduced ? false : { opacity: 0, y: 9 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -9 }}
          transition={{ duration: 0.34, ease: EASE }}
        >
          {ui.switchToLang}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
