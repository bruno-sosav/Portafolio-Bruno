import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'
import { useContent } from '../i18n'

export function Projects() {
  const { projects, headings } = useContent()

  return (
    <section id="proyectos" className="relative py-24 md:py-36">
      <div className="shell">
        <SectionHeader
          index="03"
          label={headings.projects.label}
          title={headings.projects.title}
          aside={headings.projects.aside}
        />

        <div className="space-y-28 md:space-y-40">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              align={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
