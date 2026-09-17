import type { Content } from './types'

/* ------------------------------------------------------------------
   English content. Mirrors `es.ts` field by field — TypeScript will
   fail the build if anything is missing.

   Translation notes:
   - Proper nouns (Stratus Industries, Stratus Cuts, Blue Moon, Telar
     Dankuk), emails, URLs and technology names stay as they are.
   - Section `id`s stay in Spanish: they are the URL anchors and must
     match across languages so a shared link keeps working.
   - The tone is the same as the Spanish: direct, concrete, no filler.
     This is a portfolio for hiring managers, not marketing copy.
------------------------------------------------------------------ */

export const en: Content = {
  profile: {
    name: 'Bruno Sosa Villamón',
    firstName: 'Bruno',
    lastName: 'Sosa Villamón',
    role: 'Full-Stack Developer & Co-Founder @ Stratus Industries',
    statement:
      'I build the software real businesses run on — from the first line of code to the production server.',
    email: 'bsosavillamon@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bruno-sosa-villam%C3%B3n-5a7308359/',
    github: 'https://github.com/bruno-sosav',
    availability: 'Available for remote work',
    photo: '/bruno.jpg',
    photoAlt: 'Portrait of Bruno Sosa Villamón.',
  },

  heroStats: [
    { label: 'Role', value: 'Full-Stack' },
    { label: 'Company', value: 'Stratus Industries' },
    { label: 'Based in', value: 'Mar del Plata, AR' },
    { label: 'Status', value: 'Available' },
  ],

  hero: {
    kicker: 'Software in production',
    roleLine: 'Full-Stack Developer',
    coFounderLine: 'Co-Founder',
  },

  about: {
    paragraphs: [
      'I am a full-stack developer and co-founder of Stratus Industries, where we build software for businesses — from the initial idea through to production.',
      'I like to understand the problem before writing any code. I work across the backend, the frontend, the database and deployment, so I am involved in the entire process.',
      'Right now I am building Stratus, where we develop software that solves concrete problems for different businesses. That can be anything from a website with a shopping cart to a complete management system, with an admin panel and tools for its users. The product depends on what each business actually needs.',
    ],
    meta: [
      { label: 'Role', value: 'Full-Stack Developer' },
      /* The year with no seniority label on purpose — see the note in `es.ts`. */
      { label: 'Experience', value: 'Developing since 2024' },
      { label: 'Stack', value: 'Python · C# · React · MySQL' },
      { label: 'Based in', value: 'Mar del Plata, Argentina' },
      { label: 'Work', value: 'Remote / Freelance' },
      { label: 'Languages', value: 'Spanish · English' },
    ],
  },

  stratus: {
    name: 'Stratus Industries',
    url: 'https://stratus-page.vercel.app/',
    displayUrl: 'stratus-page.vercel.app',
    tagline: 'Your business, better organised and better served.',
    description:
      'We build websites, e-commerce stores and management systems so you can run an organised business without losing time or money.',
    role: 'At Stratus we are building software products for real businesses. We are both involved in everything: we talk to clients, shape the product, write the code, sell it and keep it running. Stratus Cuts was our first product and the result of that process.',
    image: '/stratus-industries.jpg',
    imageAlt:
      'Stratus Industries homepage: a dark background with the line "Your business, better organised and better served".',
    services: ['Management systems', 'Websites', 'E-commerce'],
    meta: [
      { label: 'Role', value: 'Co-Founder' },
      { label: 'Founded', value: '2025' },
      { label: 'Focus', value: 'Software for small businesses' },
    ],
  },

  projects: [
    {
      index: '01',
      name: 'Stratus Cuts',
      kind: 'SaaS · Own product',
      year: 'In production',
      tagline: 'An operating system for barbershops and salons.',
      problem:
        'Barbershops and salons run their operation across a paper notebook, WhatsApp and the owner’s memory. Appointments get lost, the till never balances, clients no-show without warning, and there is no way to remind them to come back.',
      solution:
        'A complete management SaaS: client and staff records, appointment scheduling, cash control, automatic commission calculation per professional, and automated reminders to clients. It is built as a monorepo with a FastAPI backend on MySQL and two independent React frontends — an admin panel for the business and a booking site for the end client.',
      result:
        'A product in production, deployed on my own VPS with Docker, with real barbershops and beauty salons running their day-to-day on the system.',
      stack: [
        'FastAPI',
        'Python',
        'MySQL',
        'React',
        'Vite',
        'Docker',
        'VPS / Linux',
      ],
      href: null,
    },
    {
      index: '02',
      name: 'Blue Moon',
      kind: 'Real client · Implementation',
      year: 'In production',
      tagline: 'Stratus Cuts, with its own identity.',
      problem:
        'A beauty salon needed the booking system, but did not want to keep running everything through WhatsApp alone.',
      solution:
        'We used the same core as Stratus Cuts, which saved us a huge amount of time and work. On top of that we gave the system its own frontend, tailored to what the client asked for.',
      result:
        'The salon now operates with a real online presence. It started out looking for a simple booking page and ended up with a complete management system for the business, where it controls absolutely everything. It also validated the multi-tenant model of Stratus Cuts with a real case.',
      stack: ['React', 'Vite', 'FastAPI', 'Docker'],
      href: 'https://bluemoon.stratus-cuts.com.ar/',
      displayUrl: 'bluemoon.stratus-cuts.com.ar',
      image: '/blue-moon.jpg',
      imageAlt:
        'Blue Moon homepage, a beauty salon, with its handwritten logo and the book-an-appointment button.',
    },
    {
      index: '03',
      name: 'Telar Dankuk',
      kind: 'E-commerce · Real client',
      year: 'Delivered',
      tagline: 'An online store built to sell.',
      problem:
        'A handmade loom weaving workshop sold exclusively through social media: every sale went through a manual conversation, with no visible catalogue and no way to buy outside the hours when somebody was answering messages. Sales depended 100% on one-to-one contact.',
      solution:
        'A custom e-commerce with a catalogue organised by collection, a cart and a full checkout flow, plus a wholesale section separate from the retail channel. Built so the workshop can run its own store without depending on a developer.',
      result:
        'The client went from selling over messages to having their own store open 24/7, with an organised catalogue and a buying process that does not depend on somebody being on the other side. They now sell and run the business from anywhere, without depending on anyone.',
      stack: ['React', 'JavaScript', 'CSS', 'MySQL'],
      href: 'https://telar-dankuk-store.vercel.app/',
      displayUrl: 'telar-dankuk-store.vercel.app',
      image: '/telar-dankuk.jpg',
      imageAlt:
        'Telar Dankuk storefront showing a loom-woven garment over the line "Woven on a loom, wearing your identity".',
    },
  ],

  coreStack: [
    {
      name: 'Python',
      area: 'Backend',
      note: 'Where the Stratus Cuts API lives: business logic, appointment scheduling and the automated reminders sent to clients.',
      with: ['FastAPI'],
    },
    {
      name: 'C#',
      area: 'Backend',
      note: 'The language I started programming with and the one I did my entire university training on, with .NET. It is where the object-oriented foundation I apply every day in Python comes from.',
      with: ['.NET'],
    },
    {
      name: 'MySQL',
      area: 'Data',
      note: 'The data model behind Stratus Cuts: clients, staff, appointments, cash and reminders.',
      with: ['SQLAlchemy'],
    },
    {
      name: 'React',
      area: 'Frontend',
      note: 'Every frontend I ship: admin panels and customer-facing booking sites.',
      with: ['Vite', 'Tailwind CSS'],
    },
    {
      name: 'JavaScript',
      area: 'Frontend',
      note: 'The foundation of all the frontend work. TypeScript when the size of the project justifies the typing.',
      with: ['TypeScript'],
    },
    {
      name: 'Docker',
      area: 'Infrastructure',
      note: 'What I deliver stays running: containers on my own VPS, with Nginx in front.',
      with: ['VPS / Linux', 'Nginx'],
    },
  ],

  /* `id`s stay in Spanish on purpose — see the note in `es.ts`. */
  sections: [
    { id: 'inicio', index: '00', label: 'Home' },
    { id: 'sobre-mi', index: '01', label: 'About' },
    { id: 'stratus', index: '02', label: 'Stratus' },
    { id: 'proyectos', index: '03', label: 'Projects' },
    { id: 'stack', index: '04', label: 'Stack' },
    { id: 'contacto', index: '05', label: 'Contact' },
  ],

  headings: {
    about: {
      label: 'About me',
      title: 'Software development for businesses.',
    },
    stratus: {
      label: 'Co-founder',
      title: 'Stratus Industries.',
    },
    projects: {
      label: 'Selected projects',
      title: 'Systems in production.',
      aside:
        'Three real cases: the business problem, our solution and the final outcome.',
    },
    stack: {
      label: 'Technical stack',
      title: 'What I use every day.',
      aside:
        'Six core technologies and the tools I use to take them to production.',
    },
  },

  contact: {
    label: 'Contact',
    titleTop: 'Let’s talk about',
    titleBottom: 'your problem.',
    intro:
      'I work remotely with teams and businesses anywhere. If you have a product to build or an operation to organise, write to me and we will take a look.',
    cta: 'Send me an email',
    emailLabel: 'Email',
    builtWith: 'Built with React, TypeScript and Tailwind',
  },

  ui: {
    skipToContent: 'Skip to content',
    navMain: 'Main navigation',
    backToStart: 'Back to top',
    sectionIndexNav: 'Section index',
    portfolio: 'Portfolio',
    contactNav: 'Contact',
    profileCard: 'Profile',
    writeMe: 'Write to me',
    techCore: 'Core stack',
    visitSite: 'Visit the site',
    viewLive: 'View the live site',
    breakdown: {
      problem: 'Problem',
      solution: 'Solution',
      result: 'Outcome',
    },
    services: 'Services',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    switchToLang: 'ES',
    switchToLangLabel: 'Cambiar a español',
  },
}
