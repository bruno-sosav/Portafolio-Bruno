import { motion, useReducedMotion } from 'motion/react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { es } from '../content/es'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { useContent } from '../i18n'

/* Los `id` de sección son los mismos en todos los idiomas (son anclas de
   URL), así que esta constante sigue viviendo a nivel de módulo: identidad
   estable entre renders, que es lo que necesita useActiveSection. */
const SECTION_IDS = es.sections.map((s) => s.id)

export function Nav() {
  const { profile, sections, ui } = useContent()
  const active = useActiveSection(SECTION_IDS)
  const scrolled = useScrolled(40)
  const reduced = useReducedMotion()

  return (
    <>
      {/* Barra superior */}
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label={ui.navMain}
          className="shell flex h-16 items-center justify-between md:h-20"
        >
          <a
            href="#inicio"
            className="group flex items-baseline gap-2"
            aria-label={ui.backToStart}
          >
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              B<span className="text-accent">.</span>S
              <span className="text-accent">.</span>V
            </span>
            <span className="label hidden text-[0.625rem] transition-colors duration-300 group-hover:text-ink-muted sm:inline">
              {ui.portfolio}
            </span>
          </a>

          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2.5 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="label text-ink-muted">
                {profile.availability}
              </span>
            </span>

            <LangToggle />
            <ThemeToggle />

            <a
              href="#contacto"
              className="label group relative border border-line-strong px-4 py-2 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {ui.contactNav}
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Índice vertical de secciones — sólo en pantallas grandes */}
      <motion.nav
        aria-label={ui.sectionIndexNav}
        initial={reduced ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col gap-1">
          {sections.map((section) => {
            const isActive = active === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-center justify-end gap-3 py-1.5"
                >
                  <span
                    className={`label text-[0.625rem] transition-all duration-500 ${
                      isActive
                        ? 'translate-x-0 text-accent opacity-100'
                        : 'translate-x-2 text-ink-faint opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  >
                    {section.label}
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      isActive
                        ? 'w-8 bg-accent'
                        : 'w-4 bg-line-strong group-hover:w-6 group-hover:bg-ink-faint'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </>
  )
}
