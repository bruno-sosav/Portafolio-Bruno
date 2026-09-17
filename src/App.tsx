import { About } from './components/About'
import { Atmosphere } from './components/Atmosphere'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Stratus } from './components/Stratus'
import { TechStack } from './components/TechStack'
import { useContent } from './i18n'

export default function App() {
  const { ui } = useContent()

  return (
    <>
      <a
        href="#contenido"
        className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:border focus:border-accent focus:bg-canvas focus:px-4 focus:py-3 focus:text-accent"
      >
        {ui.skipToContent}
      </a>

      <Atmosphere />
      <Nav />

      <main id="contenido" className="relative z-10">
        <Hero />
        <About />
        <Stratus />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}
