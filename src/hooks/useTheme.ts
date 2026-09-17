import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'bsv-theme'

/** Color de la barra del navegador en móvil, por tema. */
const THEME_COLOR: Record<Theme, string> = {
  dark: '#090B11',
  light: '#FFFFFF',
}

function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

/**
 * Lee y cambia el tema. El valor inicial ya lo dejó puesto el script
 * inline de `index.html` antes del primer pintado, así que acá sólo
 * sincronizamos el estado de React con lo que el DOM ya tiene — sin eso
 * habría un parpadeo del tema equivocado en la primera carga.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(currentTheme)

  // Si el usuario nunca eligió, seguimos la preferencia del sistema.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return
      setThemeState(e.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, toggle }
}
