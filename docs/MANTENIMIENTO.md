# Manual de mantenimiento — Portfolio Bruno Sosa Villamón

Sitio personal de una sola página. Vite + React + TypeScript + Tailwind CSS v4 + Motion.
Estático, sin backend ni base de datos.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build
```

## Dónde se edita el contenido

**Todo el texto del sitio vive en `src/content/`.** No hace falta tocar JSX para
actualizar nada — ni siquiera las etiquetas de los botones.

```
src/content/
├── types.ts   La forma del contenido. Si agregás un campo, va acá primero.
├── es.ts      Español (idioma de referencia)
├── en.ts      Inglés
└── index.ts   Junta los dos idiomas
```

`types.ts` es la red de seguridad: si agregás algo en `es.ts` y te olvidás de
`en.ts`, **el build falla**. No se puede publicar un idioma a medias.

Dentro de `es.ts` / `en.ts`:

| Qué querés cambiar | Dónde |
| --- | --- |
| Nombre, rol, frase del hero, email, redes | `profile` |
| Tira de datos del pie del hero | `heroStats` |
| Textos de "Sobre mí" y la ficha de perfil | `about` |
| Sección de Stratus Industries | `stratus` |
| Proyectos (problema / solución / resultado / stack) | `projects` |
| Núcleo del stack (con logo) | `coreStack` |
| Títulos de cada sección | `headings` |
| Textos de la sección Contacto | `contact` |
| Botones, etiquetas y textos de accesibilidad | `ui` |
| Orden y numeración de secciones | `sections` |

Buscá `[COMPLETAR]` en `src/content/`: marca los lugares que quedaron
pendientes de tus datos (tu ubicación si la querés mostrar y el detalle de C#).

### Tu foto en la placa de perfil

Dejá el retrato en `public/bruno.jpg`. Recorte vertical **4/5** a **900x1125**
— se muestra a unos 360 px de ancho, así que eso cubre retina y el archivo queda
en ~200 KB. Encuadre: ojos cerca del 38% de la altura, corte a media altura del
pecho, fondo simple. Se renderiza a color y sin filtros.

Desde un original vertical (acá, 1200x1600):

```bash
# 1) recorte 4/5 con el encuadre — ajustá offset a tu foto
sips -c 1170 936 --cropOffset 80 147 origen.jpg --out recorte.jpg
# 2) al tamaño final
sips -Z 1125 -s formatOptions 84 recorte.jpg --out public/bruno.jpg
```

**Si el archivo no está, la placa cae sola al monograma B.S.V.** No hay que
tocar código para pasar de una a otro; para sacar la foto de forma permanente
poné `photo: null` en `profile` (`src/content/`).

## La tarjeta al compartir el link (og:image)

Cuando pegás el link en LinkedIn, WhatsApp o Slack, esas apps leen las etiquetas
`og:*` de `index.html` para armar la vista previa. La imagen es `public/og.jpg`
(1200x630).

**Paso obligatorio al desplegar:** en `index.html`, reemplazá `TU-DOMINIO` por el
dominio real en `og:url`, `og:image` y `twitter:image`. Tienen que ser URLs
**absolutas** — los scrapers no resuelven rutas relativas, y con una ruta
relativa la tarjeta sale sin imagen.

Después de cambiarlo, pasá el link por el [Post Inspector de
LinkedIn](https://www.linkedin.com/post-inspector/) para que refresque su caché:
guarda la versión vieja hasta 7 días y si no lo hacés vas a seguir viendo la
tarjeta sin imagen.

Para regenerar la imagen hay un HTML de referencia; lo más simple es sacarle una
captura a 1200x630 a un maquetado con el mismo fondo (`#090b11`), el nombre en
Clash Display y la foto de perfil.

## Los dos idiomas

El botón **ES/EN** está en la barra superior, al lado del de tema. Muestra el
idioma al que vas a cambiar, no el activo: parado en español dice "EN".

Cómo se decide el idioma en la primera visita:

1. Si el visitante ya eligió alguna vez, gana su elección (`localStorage`, clave
   `bsv-lang`).
2. Si no, se mira `navigator.language`: español arranca en español, **cualquier
   otro idioma arranca en inglés**. Un reclutador de afuera que abre el link lo
   ve directamente en inglés sin tener que buscar el botón.

Igual que con el tema, el idioma se fija en el script inline de `index.html`
**antes del primer pintado**. Si eso se moviera a React, la página parpadearía
en español antes de pasar a inglés en cada carga.

### Reglas al traducir

- **Los `id` de las secciones NO se traducen.** Son las anclas de la URL
  (`#sobre-mi`, `#proyectos`): tienen que ser iguales en los dos idiomas para
  que un link compartido siga funcionando al cambiar de idioma.
- Nombres propios, emails, URLs y nombres de tecnologías quedan como están.
- El tono del inglés sigue al del español: directo y concreto. Es un portfolio
  para quien contrata, no un texto de marketing.

### Agregar un idioma más

1. Copiá `es.ts` a `fr.ts` y traducí.
2. Agregá `'fr'` al tipo `Lang` en `types.ts`.
3. Sumalo a `CONTENT` y `HTML_LANG` en `index.ts`.

TypeScript te va a marcar todo lo que falte. Ojo: el botón actual alterna entre
dos idiomas; con tres habría que cambiarlo por un menú.

### Agregar un proyecto

Sumá un objeto a `projects` **en los dos idiomas** con el `index` siguiente (`'04'`). El layout alterna
solo el lado del número de fondo, no hay que configurar nada más. Si le ponés
`href`, aparece el botón "Ver proyecto".

### Agregar la captura de un proyecto

Los proyectos con `href`, `displayUrl`, `image` e `imageAlt` renderizan la
captura dentro de un marco de navegador (`SiteFrame`). Sin esos campos, la card
se muestra sólo con texto — es lo que pasa hoy con Stratus Cuts, que no tiene
URL pública.

Para generar una captura nueva, con el sitio abierto en Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --hide-scrollbars --force-device-scale-factor=2 \
  --virtual-time-budget=12000 --window-size=1440,900 \
  --screenshot=captura.png "https://el-sitio.com/"

sips -Z 1600 -s format jpeg -s formatOptions 82 captura.png \
  --out public/nombre-del-proyecto.jpg
```

El 2x y el downscale posterior son para que se vea nítida en pantallas retina.
El marco asume proporción 16/10.

### Agregar una tecnología al núcleo

Sumá el objeto a `coreStack` y, si querés que muestre logo, agregá el trazo
en `TECH_LOGOS` (`src/components/TechLogos.tsx`) con la **misma clave** que
`name`. Sin entrada en el mapa la fila se renderiza igual, sólo que sin logo.

Los trazos vienen de [Simple Icons](https://simpleicons.org) (CC0) y están
guardados en el repo para no depender de un CDN. Son de un solo trazo y se
pintan con `currentColor` a propósito: un logo a color rompería el monocromo.
C# no está en Simple Icons por política de marca de Microsoft, así que ese va
dibujado a mano en el mismo archivo.

## Temas claro y oscuro

El sitio tiene dos temas y el toggle vive en la barra superior.

- **Oscuro** — casi negro de tinte frío, acento blanco puro.
- **Claro** — la gama de `palantir.com`: fondo `#FFFFFF`, paneles `#F3F3F3`,
  texto `#1E2124`, secundario `#767676`, acento negro.

En la primera visita se respeta el `prefers-color-scheme` del sistema. Una vez
que el usuario elige, la preferencia queda en `localStorage` bajo `bsv-theme`.

Cómo está armado, por si lo tocás:

- Los valores viven en `--c-*` y cambian según `data-theme` en `<html>`
  (`src/index.css`).
- El bloque `@theme inline` los expone a Tailwind **sin copiar el valor**, así
  las utilidades quedan apuntando a la variable y el cambio es instantáneo.
  Como contrapartida, `--color-*` no existe en runtime: las utilidades propias
  (`.label`, `.ink-gradient`, `.blueprint`) tienen que usar `--c-*`.
- El script inline de `index.html` fija el tema **antes del primer pintado**.
  Si eso se moviera a React, la página parpadearía en oscuro antes de pasar a
  claro en cada carga.

### Probar las otras direcciones de color

Reemplazando el bloque `:root` de `src/index.css` se cambia el tema oscuro
entero. Dos alternativas ya calibradas:

**Azul acero** (mantiene un color de firma):
`--c-accent: #7FA6D8` · `--c-accent-bright: #A6C4E8` · `--c-base: #0A0B10`

**Azul noche** (el azul va en el fondo, el acento sigue blanco):
`--c-base: #080B14` · `--c-surface: #0C1120` · `--c-accent: #EEF2F9`

## Decisiones de diseño

- **Acento único: bronce (`--color-accent`)**. El sitio se apoya en la tensión
  entre un fondo casi negro de tinte frío y un acento cálido. Si agregás un
  segundo color de acento se rompe.
- **Tres tipografías con roles fijos**: Clash Display (títulos), Switzer
  (cuerpo), JetBrains Mono (etiquetas y datos). Se cargan desde Fontshare y
  Google Fonts en `index.html`.
- **`.ink-gradient` lleva `padding-top` a propósito.** Con
  `background-clip: text` el degradé no pinta fuera de la caja del elemento y
  los títulos usan `line-height` menor a 1, así que sin ese aire las tildes
  (Ó, í) quedan sin color. No se lo saques.
- **Nunca llames `base` a un color del tema.** Tailwind ya tiene `text-base`
  como tamaño de fuente; declarar un color con ese nombre vuelve ambigua la
  clase, gana el color y el texto termina pintado del color del fondo. Por eso
  el token se llama `canvas`. Lo mismo vale para cualquier nombre que choque
  con una escala de Tailwind (`sm`, `lg`, `xl`).
- **Motion**: las variantes solo se propagan a través de componentes de Motion.
  Si metés un `<div>` plano entre un contenedor con `variants` y sus hijos
  animados, los hijos se quedan invisibles en su estado `hidden`.
- Todo el movimiento respeta `prefers-reduced-motion`.

## Deploy en Vercel

### Opción A — desde la web (más simple)

1. Subí el proyecto a un repo de GitHub.
2. Entrá a [vercel.com/new](https://vercel.com/new) y logueate con GitHub.
3. Importá el repo. Vercel detecta Vite solo; los valores tienen que quedar:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**. En ~1 minuto tenés una URL `.vercel.app`.

Cada `git push` a la rama principal redeploya solo.

### Opción B — desde la terminal

```bash
npm i -g vercel
vercel        # primer deploy, de preview
vercel --prod # a producción
```

### Dominio propio

En el proyecto en Vercel: **Settings → Domains → Add**. Agregás el dominio y
Vercel te da los registros DNS para cargar donde lo tengas comprado.

### Netlify

Sirve igual: Build command `npm run build`, Publish directory `dist`.
