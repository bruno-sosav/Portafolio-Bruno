import { useContent } from '../i18n'
import { Reveal } from './Reveal'

export function Contact() {
  const { profile, contact } = useContent()

  const links = [
    {
      label: contact.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: profile.name,
      href: profile.linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'bruno-sosav',
      href: profile.github,
      external: true,
    },
  ]

  return (
    <section
      id="contacto"
      className="relative border-t border-line pt-24 md:pt-36"
    >
      <div className="shell">
        <div className="flex items-center gap-4 border-b border-line pb-4">
          <span className="font-mono text-xs text-accent">05</span>
          <span className="label">{contact.label}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-14 md:grid-cols-12 md:gap-10 md:pt-20">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.035em]">
                <span className="ink-gradient">{contact.titleTop}</span>
                <br />
                <span className="text-accent">{contact.titleBottom}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
                {contact.intro}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-10 inline-flex items-center gap-4 bg-accent px-7 py-4 text-void transition-colors duration-300 hover:bg-accent-bright"
              >
                <span className="font-display text-base font-semibold tracking-tight">
                  {contact.cta}
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>

          {/* Enlaces como filas: cada uno ocupa su propia línea con hairline */}
          <div className="md:col-span-5 md:pt-3">
            <ul className="border-t border-line">
              {links.map((link, i) => (
                <Reveal as="li" key={link.label} delay={0.1 + i * 0.08}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors duration-500 hover:border-accent/60"
                  >
                    <span className="flex min-w-0 flex-col gap-1.5">
                      <span className="label text-[0.625rem]">
                        {link.label}
                      </span>
                      <span className="truncate font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-accent md:text-xl">
                        {link.value}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      {link.external ? '↗' : '→'}
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Pie */}
        <footer className="mt-24 flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between md:mt-32">
          <p className="font-mono text-[0.6875rem] text-ink-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[0.6875rem] text-ink-faint">
            {contact.builtWith}
          </p>
        </footer>
      </div>
    </section>
  )
}
