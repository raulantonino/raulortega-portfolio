# Portfolio profesional - Raul Ortega

Portfolio web profesional de Raul Ortega Huenuil, desarrollado con Astro y
desplegado en Cloudflare. El sitio presenta un perfil orientado principalmente
al desarrollo web trainee/junior, con una base complementaria de Ingenieria
Civil Industrial aplicada a datos, procesos y criterio de negocio.

## Objetivo

Este proyecto funciona como CV web y portafolio tecnico. Busca que recruiters,
equipos tecnicos y empresas puedan entender rapidamente:

- quien soy;
- que tipo de rol busco;
- que tecnologias manejo;
- que proyectos demuestran mi aprendizaje;
- como contactarme o revisar mi trabajo.

## Stack principal

- Astro
- TypeScript
- CSS personalizado
- Cloudflare Workers/Assets
- Wrangler
- Git y GitHub

El portfolio no usa React, Tailwind, base de datos, backend propio ni formulario
de contacto. La prioridad es mantener una web estatica, rapida, clara y facil
de auditar.

## Estructura del proyecto

```text
.
|-- docs/
|   |-- deploy_security.md
|   |-- final_qa_deploy_review.md
|   |-- full_improvement_summary.md
|   |-- project_decisions.md
|   |-- step_2_improvements.md
|   |-- step_3_project_case_studies.md
|   `-- visual_direction.md
|-- public/
|   |-- _headers
|   |-- cv/
|   |-- images/
|   |-- favicon.ico
|   |-- favicon.svg
|   `-- robots.txt
|-- src/
|   |-- components/
|   |-- data/
|   |-- layouts/
|   |-- pages/
|   `-- styles/
|-- astro.config.mjs
|-- package.json
|-- tsconfig.json
`-- wrangler.jsonc
```

## Contenido editable

La informacion principal del portfolio esta centralizada en `src/data/`:

- `profile.ts`: datos personales, enlaces y posicionamiento.
- `projects.ts`: proyectos, tecnologias, links y casos de estudio.
- `experience.ts`: experiencia relevante y formacion.
- `skills.ts`: grupos de habilidades.

Las paginas se encuentran en `src/pages/` y los componentes reutilizables en
`src/components/`.

## Scripts disponibles

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
npm run deploy
```

Notas:

- `npm run build` genera el sitio con el adapter de Cloudflare.
- En entornos locales, Wrangler/Miniflare puede escribir logs temporales fuera
  del repositorio.
- `npm run preview` ejecuta build y luego levanta `wrangler dev`.

## Rutas principales

- `/`
- `/sobre-mi`
- `/proyectos`
- `/proyectos/pokeparty`
- `/proyectos/mystale-catalog`
- `/proyectos/pokeprofe-oak`

## Seguridad y deploy

El archivo `public/_headers` define headers de seguridad para produccion:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security`

El checklist de validacion posterior al deploy esta documentado en
`docs/deploy_security.md`.

## Verificacion recomendada

Antes de publicar cambios:

```sh
npm run check
npm run build
```

Despues del deploy:

```sh
curl -I https://raulortega.cl
curl -I https://raulortega.cl/proyectos/
curl -I https://raulortega.cl/cv/raul-ortega-cv.pdf
```

## Estado del proyecto

El sitio es una primera version profesional del portfolio. Las mejoras
priorizadas son:

1. seguridad y deploy estable;
2. evidencia visible de proyectos;
3. accesibilidad basica;
4. SEO tecnico;
5. performance de imagenes;
6. contenido y marca personal.
