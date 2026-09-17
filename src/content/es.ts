import type { Content } from './types'

/* ------------------------------------------------------------------
   Contenido del sitio en español. Es el idioma de referencia: cuando
   agregues algo acá, TypeScript te va a exigir el equivalente en
   `en.ts`.
------------------------------------------------------------------ */

export const es: Content = {
  profile: {
    name: 'Bruno Sosa Villamón',
    firstName: 'Bruno',
    lastName: 'Sosa Villamón',
    role: 'Full-Stack Developer & Co-Founder @ Stratus Industries',
    // Frase de identidad del hero. Corta y con filo — no la alargues.
    statement:
      'Construyo el software que sostiene negocios reales — de la primera línea de código al servidor en producción.',
    email: 'bsosavillamon@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bruno-sosa-villam%C3%B3n-5a7308359/',
    github: 'https://github.com/bruno-sosav',
    availability: 'Disponible para trabajo remoto',
    /* Retrato de la placa de perfil ("Sobre mí").
       `public/bruno.jpg`: recorte vertical 4/5, 900x1125 (se muestra a ~360 px
       de ancho, así que eso cubre pantallas retina). Los ojos van cerca del 38%
       de la altura y el corte inferior a media altura del pecho. Va sin filtros:
       se renderiza tal cual, a color.
       Si el archivo no existe, la placa cae sola al monograma B.S.V:
       no hay que tocar código para probar con foto y sin foto. */
    photo: '/bruno.jpg',
    photoAlt: 'Retrato de Bruno Sosa Villamón.',
  },

  heroStats: [
    { label: 'Rol', value: 'Full-Stack' },
    { label: 'Empresa', value: 'Stratus Industries' },
    { label: 'Base', value: 'Mar del Plata, AR' },
    { label: 'Estado', value: 'Disponible' },
  ],

  hero: {
    kicker: 'Software en producción',
    roleLine: 'Full-Stack Developer',
    coFounderLine: 'Co-Founder',
  },

  about: {
    paragraphs: [
      'Soy desarrollador full-stack y co-founder de Stratus Industries, donde construimos software para negocios desde la idea hasta que está en producción.',
      'Me gusta entender primero el problema a resolver antes de empezar a desarrollar. Trabajo en el backend, el frontend, la base de datos y el despliegue, así que me involucro en todo el proceso.',
      'Actualmente estoy construyendo Stratus, donde desarrollamos software para resolver problemas concretos de distintos negocios. Puede ser desde una página web con carrito de compras hasta un sistema de gestión completo, con panel de administración y herramientas para sus usuarios. El producto depende de las necesidades de cada negocio.',
    ],
    meta: [
      { label: 'Rol', value: 'Full-Stack Developer' },
      /* El año, sin etiqueta de seniority, a propósito: que el reclutador
         calcule la banda solo. Poner "Junior" te auto-excluye de búsquedas
         semi-senior donde los proyectos en producción te dan chance real.
         2024 es el arranque de la carrera (C# / .NET); Stratus, de 2025,
         ya aparece con su año en la sección Co-fundador. */
      { label: 'Experiencia', value: 'Desarrollando desde 2024' },
      { label: 'Stack', value: 'Python · C# · React · MySQL' },
      { label: 'Base', value: 'Mar del Plata, Argentina' },
      { label: 'Modalidad', value: 'Remoto / Freelance' },
      { label: 'Idiomas', value: 'Español · Inglés' },
    ],
  },

  /* Datos tomados de la propia página de Stratus. Si allá cambia el
     mensaje, actualizalo acá para que los dos sitios digan lo mismo. */
  stratus: {
    name: 'Stratus Industries',
    url: 'https://stratus-page.vercel.app/',
    displayUrl: 'stratus-page.vercel.app',
    tagline: 'Tu negocio, más ordenado y mejor atendido.',
    description:
      'Creamos páginas web, e-commerce y sistemas de gestión para que puedas tener tu negocio ordenado y no pierdas tiempo ni dinero.',
    role: 'Con Stratus estamos construyendo productos de software para negocios reales. Los dos nos involucramos en todo: hablamos con clientes, pensamos el producto, programamos, vendemos y nos ocupamos de llevarlo adelante. Stratus Cuts fue nuestro primer producto y el resultado de ese proceso.',
    /* La captura se genera desde la página real. Para actualizarla,
       sacá un screenshot nuevo a 1600x1000 y reemplazá el archivo. */
    image: '/stratus-industries.jpg',
    imageAlt:
      'Portada del sitio de Stratus Industries: fondo oscuro con el texto "Tu negocio, más ordenado y mejor atendido".',
    services: ['Sistemas de gestión', 'Páginas web', 'E-commerce'],
    meta: [
      { label: 'Rol', value: 'Co-Founder' },
      { label: 'Fundada', value: '2025' },
      { label: 'Foco', value: 'Software para PyMEs' },
    ],
  },

  projects: [
    {
      index: '01',
      name: 'Stratus Cuts',
      kind: 'SaaS · Producto propio',
      year: 'En producción',
      tagline: 'Sistema operativo para barberías y peluquerías.',
      problem:
        'Las barberías y peluquerías manejan su operación entre un cuaderno, WhatsApp y la memoria del dueño. Se pierden turnos, la caja no cierra, los clientes faltan sin avisar y no hay forma de recordarles que vuelvan.',
      solution:
        'Un SaaS completo de gestión: agenda de clientes y empleados, agenda de turnos, control de caja, cálculo de comisiones por profesional y recordatorios automáticos a los clientes. Está construido como un monorepo con backend en FastAPI sobre MySQL y dos frontends React independientes — un panel de administración para el negocio y un sitio de reservas para el cliente final.',
      result:
        'Producto en producción, desplegado en un VPS propio con Docker, con barberías y centros de estética reales trabajando día a día sobre el sistema.',
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
      kind: 'Cliente real · Implementación',
      year: 'En producción',
      tagline: 'Stratus Cuts, con identidad propia.',
      problem:
        'Un centro de estética necesitaba el sistema de turnos, pero no quería seguir manejándose sólo con WhatsApp.',
      solution:
        'Usamos el mismo core que en Stratus Cuts, lo que nos ahorró muchísimo tiempo y trabajo. Además le dimos al sistema un frontend propio, a medida de lo que el cliente pedía.',
      result:
        'El centro opera con presencia online. Al principio buscaba una simple turnera y ahora tiene un sistema de gestión completo para su negocio, donde controla absolutamente todo. Además, validó el modelo multi-tenant de Stratus Cuts con un caso real.',
      stack: ['React', 'Vite', 'FastAPI', 'Docker'],
      href: 'https://bluemoon.stratus-cuts.com.ar/',
      displayUrl: 'bluemoon.stratus-cuts.com.ar',
      image: '/blue-moon.jpg',
      imageAlt:
        'Portada del sitio de Blue Moon, centro de estética, con el logotipo manuscrito y el botón de reservar turno.',
    },
    {
      index: '03',
      name: 'Telar Dankuk',
      kind: 'E-commerce · Cliente real',
      year: 'Entregado',
      tagline: 'Tienda online construida para vender.',
      problem:
        'Un taller de tejido artesanal en telar vendía exclusivamente por redes sociales: cada venta pasaba por una conversación manual, sin catálogo visible y sin forma de comprar fuera del horario en que alguien respondiera los mensajes. Las ventas dependían al 100% del trato uno a uno.',
      solution:
        'Un e-commerce a medida con catálogo por colecciones, carrito y flujo de compra completo, más una sección mayorista separada del canal minorista. Pensado para que el taller gestione su tienda sin depender de un desarrollador.',
      result:
        'El cliente pasó de vender por mensajes a tener una tienda propia abierta 24/7, con su catálogo ordenado y un proceso de compra que no depende de que alguien esté del otro lado. Ahora vende y controla su negocio desde cualquier lugar, sin depender de nadie.',
      stack: ['React', 'JavaScript', 'CSS', 'MySQL'],
      href: 'https://telar-dankuk-store.vercel.app/',
      displayUrl: 'telar-dankuk-store.vercel.app',
      image: '/telar-dankuk.jpg',
      imageAlt:
        'Portada de la tienda Telar Dankuk mostrando una prenda tejida en telar sobre el mensaje "Tejido en telar, vistiendo tu identidad".',
    },
  ],

  coreStack: [
    {
      name: 'Python',
      area: 'Backend',
      note: 'Donde vive la API de Stratus Cuts: lógica de negocio, agenda de turnos y los recordatorios automáticos a los clientes.',
      with: ['FastAPI'],
    },
    {
      name: 'C#',
      area: 'Backend',
      note: 'El lenguaje con el que empecé a programar y sobre el que hice toda mi formación en la universidad, con .NET. Es donde tengo la base de orientación a objetos que aplico todos los días en Python.',
      with: ['.NET'],
    },
    {
      name: 'MySQL',
      area: 'Datos',
      note: 'El modelo de datos de Stratus Cuts: clientes, empleados, turnos, caja y recordatorios.',
      with: ['SQLAlchemy'],
    },
    {
      name: 'React',
      area: 'Frontend',
      note: 'Todos los frontends que entrego: paneles de administración y sitios de reserva de cara al cliente final.',
      with: ['Vite', 'Tailwind CSS'],
    },
    {
      name: 'JavaScript',
      area: 'Frontend',
      note: 'La base de todo el frontend. TypeScript cuando el tamaño del proyecto justifica el tipado.',
      with: ['TypeScript'],
    },
    {
      /* Docker sube a fila propia a propósito. Para un rol backend, saber
         desplegar es un diferenciador real — la mayoría de los perfiles
         junior y mid no lo hace. Escondido en un chip de 11px al final,
         ese argumento se perdía. */
      name: 'Docker',
      area: 'Infraestructura',
      note: 'Lo que entrego queda corriendo: contenedores sobre un VPS propio, con Nginx al frente.',
      with: ['VPS / Linux', 'Nginx'],
    },
  ],

  /* El `index` de cada sección se muestra en su encabezado y en el índice
     lateral. Los `id` NO se traducen: son los anclas de la URL y tienen
     que ser los mismos en los dos idiomas para que un link compartido
     siga funcionando al cambiar de idioma. */
  sections: [
    { id: 'inicio', index: '00', label: 'Inicio' },
    { id: 'sobre-mi', index: '01', label: 'Sobre mí' },
    { id: 'stratus', index: '02', label: 'Stratus' },
    { id: 'proyectos', index: '03', label: 'Proyectos' },
    { id: 'stack', index: '04', label: 'Stack' },
    { id: 'contacto', index: '05', label: 'Contacto' },
  ],

  headings: {
    about: {
      label: 'Sobre mí',
      title: 'Desarrollo de software para negocios.',
    },
    stratus: {
      label: 'Co-fundador',
      title: 'Stratus Industries.',
    },
    projects: {
      label: 'Proyectos destacados',
      title: 'Sistemas en producción.',
      aside:
        'Tres casos reales: el problema del negocio, nuestra solución y el resultado final.',
    },
    stack: {
      label: 'Stack técnico',
      title: 'Lo que uso todos los días.',
      aside:
        'Seis tecnologías centrales y las herramientas con las que las llevo a producción.',
    },
  },

  contact: {
    label: 'Contacto',
    titleTop: 'Hablemos de',
    titleBottom: 'tu problema.',
    intro:
      'Trabajo en remoto con equipos y negocios de cualquier parte. Si tenés un producto que construir o una operación que ordenar, escribime y lo miramos.',
    cta: 'Escribime un mail',
    emailLabel: 'Email',
    builtWith: 'Construido con React, TypeScript y Tailwind',
  },

  ui: {
    skipToContent: 'Saltar al contenido',
    navMain: 'Navegación principal',
    backToStart: 'Volver al inicio',
    sectionIndexNav: 'Índice de secciones',
    portfolio: 'Portfolio',
    contactNav: 'Contacto',
    profileCard: 'Perfil',
    writeMe: 'Escribime',
    techCore: 'Núcleo técnico',
    visitSite: 'Visitar el sitio',
    viewLive: 'Ver el sitio en vivo',
    breakdown: {
      problem: 'Problema',
      solution: 'Solución',
      result: 'Resultado',
    },
    services: 'Servicios',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    themeLight: 'Tema claro',
    themeDark: 'Tema oscuro',
    switchToLang: 'EN',
    switchToLangLabel: 'Switch to English',
  },
}
