import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import { CONTENT, HTML_LANG } from './content'
import type { Content, Lang } from './content'

const STORAGE_KEY = 'bsv-lang'

type LanguageValue = {
  lang: Lang
  content: Content
  toggle: () => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

/**
 * Idioma inicial. El script inline de `index.html` ya resolvió esto
 * antes del primer pintado y lo dejó en `<html lang>`, así que acá sólo
 * leemos lo que el DOM ya tiene — igual que con el tema. Sin eso, la
 * página se pintaría en español y saltaría a inglés en cada carga.
 */
function currentLang(): Lang {
  if (typeof document === 'undefined') return 'es'
  return document.documentElement.lang === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(currentLang)

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang]
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* Modo privado o almacenamiento bloqueado: el cambio vale para
           esta visita y no se recuerda. No es motivo para romper nada. */
      }
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ lang, content: CONTENT[lang], toggle }),
    [lang, toggle],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguageContext(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useContent debe usarse dentro de <LanguageProvider>')
  }
  return ctx
}

/** Contenido del idioma activo. Es el único acceso al contenido del sitio. */
export function useContent(): Content {
  return useLanguageContext().content
}

/** Idioma activo y la función para cambiarlo. Lo usa el botón ES/EN. */
export function useLanguage() {
  const { lang, toggle } = useLanguageContext()
  return { lang, toggle }
}
