/* ------------------------------------------------------------------
   Forma del contenido del sitio.

   Cada idioma (`es.ts`, `en.ts`) exporta un objeto `Content` completo.
   TypeScript se encarga de que ninguno se olvide un campo: si agregás
   algo en `es.ts` y no en `en.ts`, el build falla. Esa es toda la
   protección que necesita un sitio de este tamaño — no hace falta una
   librería de i18n.
------------------------------------------------------------------ */

export type Lang = 'es' | 'en'

export type Project = {
  index: string
  name: string
  kind: string
  year: string
  tagline: string
  problem: string
  solution: string
  result: string
  stack: string[]
  /** Enlace al sitio en vivo. En null no se renderiza el botón. */
  href: string | null
  /** Dominio que se muestra en la barra del marco de la captura. */
  displayUrl?: string
  /** Captura en /public. Sin imagen, la card se renderiza sin marco. */
  image?: string
  imageAlt?: string
}

export type MetaRow = { label: string; value: string }

export type StackItem = {
  name: string
  area: string
  note: string
  with: string[]
}

export type SectionHeading = {
  label: string
  title: string
  aside?: string
}

export type Content = {
  profile: {
    name: string
    firstName: string
    lastName: string
    role: string
    statement: string
    email: string
    linkedin: string
    github: string
    availability: string
    photo: string | null
    photoAlt: string
  }
  heroStats: MetaRow[]
  hero: { kicker: string; roleLine: string; coFounderLine: string }
  about: { paragraphs: string[]; meta: MetaRow[] }
  stratus: {
    name: string
    url: string
    displayUrl: string
    tagline: string
    description: string
    role: string
    image: string
    imageAlt: string
    services: string[]
    meta: MetaRow[]
  }
  projects: Project[]
  coreStack: StackItem[]
  sections: { id: string; index: string; label: string }[]
  headings: {
    about: SectionHeading
    stratus: SectionHeading
    projects: SectionHeading
    stack: SectionHeading
  }
  contact: {
    label: string
    titleTop: string
    titleBottom: string
    intro: string
    cta: string
    emailLabel: string
    builtWith: string
  }
  /** Microcopy de interfaz: botones, etiquetas y textos de accesibilidad. */
  ui: {
    skipToContent: string
    navMain: string
    backToStart: string
    sectionIndexNav: string
    portfolio: string
    contactNav: string
    profileCard: string
    writeMe: string
    techCore: string
    visitSite: string
    viewLive: string
    breakdown: { problem: string; solution: string; result: string }
    services: string
    themeToLight: string
    themeToDark: string
    themeLight: string
    themeDark: string
    /** Texto del botón de idioma: muestra el idioma al que se cambia. */
    switchToLang: string
    switchToLangLabel: string
  }
}
