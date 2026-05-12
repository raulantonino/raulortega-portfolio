# QA final y revisión pre-deploy

Fecha de revisión: 2026-05-12
Rama: `codex/step-6-final-qa-deploy-review`

## Objetivo

Cerrar la revisión final del portfolio antes de compartirlo públicamente o
desplegar nuevos cambios. Este paso no agrega funcionalidades nuevas; verifica
estabilidad, seguridad básica, SEO, accesibilidad, assets y documentación.

## Checks ejecutados

```sh
npm run build
npm audit --audit-level=moderate
npm run astro -- check
```

Resultados:

- `npm run build`: correcto.
- Cloudflare/Astro: `Parsed 3 valid header rules`.
- `npm audit --audit-level=moderate`: `found 0 vulnerabilities`.
- `npm run astro -- check`: no disponible sin instalar `@astrojs/check` y
  `typescript`. No se instalaron dependencias nuevas en este cierre.

## Revisión técnica

- Rutas generadas correctamente:
  - `/`
  - `/sobre-mi/`
  - `/proyectos/`
  - `/proyectos/pokeparty/`
  - `/proyectos/mystale-catalog/`
  - `/proyectos/pokeprofe-oak/`
  - `/404.html`
  - `/sitemap.xml`
  - `/robots.txt`
- Revisión de enlaces internos y assets del HTML generado: OK.
- `sitemap.xml` incluye home, sobre mí, índice de proyectos y los tres casos.
- `robots.txt` permite indexación y apunta al sitemap de `raulortega.cl`.
- `public/_headers` se copia a `dist/client/_headers`.
- No se detectaron `TODO`, `FIXME` ni `console.log` en `src`, `public`, `docs`
  o `README.md`.

## Seguridad

Headers esperados en producción:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security`
- `Cache-Control` para `/_astro/*`
- `Cache-Control` para `/images/*`

Consideración: la CSP mantiene `'unsafe-inline'` porque el sitio usa Astro y
estilos/scripts generados en build. Si más adelante se agregan analytics,
formularios externos o embeds, hay que actualizar CSP antes de desplegar.

## SEO y accesibilidad

- Cada página principal genera `title`, `description`, canonical, Open Graph y
  Twitter Card.
- Se agregó JSON-LD para home, perfil, colección de proyectos y casos de
  estudio.
- Las imágenes principales tienen texto alternativo.
- Los enlaces repetidos a demo, GitHub, CV y contacto tienen `aria-label`.
- La navegación principal marca estado actual en páginas de proyecto o perfil.
- Existe skip link hacia `#contenido-principal`.

## Performance

- Assets generados en `/_astro/*` tienen cache largo e immutable.
- Imágenes locales en `/images/*` tienen cache largo e immutable.
- Las imágenes de casos de estudio cargan con `loading="lazy"`.
- La imagen del hero conserva `fetchpriority="high"` por ser parte del primer
  viewport.
- El sitio no hidrata componentes de frontend ni carga frameworks cliente.

## Checklist post-deploy

Después de publicar, revisar en producción:

```sh
curl -I https://raulortega.cl
curl -I https://raulortega.cl/proyectos/
curl -I https://raulortega.cl/cv/raul-ortega-cv.pdf
```

Validar manualmente:

- Home carga sin errores visuales en mobile y desktop.
- La foto del hero se ve bien en mobile.
- El CV abre correctamente.
- Email abre con asunto prellenado.
- LinkedIn y GitHub abren en nueva pestaña.
- Pokeparty abre la demo, considerando el cold start de Render.
- Las páginas de caso se leen bien en mobile.
- El sitemap abre en `https://raulortega.cl/sitemap.xml`.

## Pendientes recomendados

- Instalar y configurar `@astrojs/check` + `typescript` si se quiere un check
  tipado formal en CI/local.
- Ejecutar una revisión visual con navegador en anchos aproximados de 390px,
  768px y desktop.
- Revisar el sitio desplegado con Lighthouse o PageSpeed después de que
  Cloudflare sirva los assets reales.
- Revisar preview social con LinkedIn Post Inspector o una herramienta similar
  después del deploy.
