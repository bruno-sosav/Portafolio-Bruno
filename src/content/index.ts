import { en } from './en'
import { es } from './es'
import type { Content, Lang } from './types'

export type { Content, Lang, MetaRow, Project, SectionHeading, StackItem } from './types'

export const CONTENT: Record<Lang, Content> = { es, en }

export const LANGS: Lang[] = ['es', 'en']

/** Etiqueta del atributo `lang` del <html>, por idioma. */
export const HTML_LANG: Record<Lang, string> = { es: 'es', en: 'en' }
