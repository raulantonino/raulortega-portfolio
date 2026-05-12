# Resumen completo de mejoras del portfolio

Fecha de cierre: 2026-05-12

Este documento resume, de inicio a fin, el trabajo realizado sobre el portfolio
profesional de Raúl Ortega. El objetivo fue pasar de una primera versión funcional
a una versión más segura, clara, mantenible y presentable para recruiters y equipos
técnicos.

## 1. Diagnóstico inicial

Se revisó el proyecto Astro completo antes de modificar archivos:

- estructura de carpetas, páginas, componentes, datos, assets y configuración;
- `package.json`, scripts disponibles, dependencias y adapter de Cloudflare;
- SEO, accesibilidad, seguridad, performance, contenido y experiencia visual;
- rutas principales, sitemap, robots, headers, CV, imágenes y casos de estudio;
- riesgos reales versus mejoras preventivas.

También se definió el posicionamiento profesional:

- 70% desarrollador web;
- 30% Ingeniero Civil Industrial;
- foco en empleo trainee/junior;
- tecnologías principales: Python, Django, SQL, Git, GitHub, PostgreSQL, HTML,
  CSS y JavaScript;
- diferenciador principal: base de Ingeniería Civil Industrial aplicada a datos,
  procesos y criterio de negocio.

## 2. Roadmap por ramas

El trabajo se organizó en ramas pequeñas y revisables:

- `codex/step-1-seguridad`
- `codex/step-2-v2-improvements`
- `codex/step-3-project-case-studies`
- `codex/step-4-a11y-seo-performance`
- `codex/step-5-content-conversion-polish`
- `codex/step-6-final-qa-deploy-review`

Durante el proceso también se corrigió un problema de flujo Git:

- se evitó hacer push desde `main`;
- se creó una rama de respaldo;
- se hizo `fetch`;
- se rebaseó la rama de trabajo sobre `origin/main`;
- se confirmó que no hubo conflictos;
- se validó con build antes de continuar.

## 3. Step 1: seguridad básica

Se agregó `public/_headers` para Cloudflare con headers preventivos:

- `Content-Security-Policy`;
- `X-Frame-Options`;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- `Permissions-Policy`;
- `Strict-Transport-Security`.

Resultado:

- mejora de seguridad web básica;
- reducción de riesgos de clickjacking, sniffing y exposición innecesaria;
- base documentada para revisar CSP si se agregan analytics, formularios o
  servicios externos.

## 4. Step 2: mejoras técnicas y base del sitio

Se hicieron mejoras de estructura, documentación, SEO inicial y accesibilidad:

- documentación de deploy y seguridad en `docs/deploy_security.md`;
- documentación de decisiones del proyecto;
- mejoras en README;
- sitemap y robots;
- página 404 con `noindex`;
- skip link hacia el contenido principal;
- foco visible;
- enlaces externos con `rel="noopener noreferrer"`;
- optimización inicial de imágenes WebP;
- ajustes de navegación y rutas.

Resultado:

- sitio más auditable;
- mejor base para deploy en Cloudflare;
- navegación más clara;
- SEO técnico inicial más ordenado.

## 5. Step 3: proyectos, casos de estudio y dirección visual

Fue la etapa más grande. Se trabajó el contenido técnico y la jerarquía visual.

Cambios principales:

- `src/data/projects.ts` se enriqueció con:
  - objetivo;
  - ownership;
  - contexto;
  - requisitos;
  - desafío técnico;
  - decisiones;
  - aprendizajes;
  - métricas;
  - highlights técnicos;
  - notas de demo.
- cada proyecto se presentó como caso de estudio;
- se reforzó que cada challenge fue desarrollado de inicio a fin;
- se mejoró la página `/proyectos`;
- se mejoraron las páginas `/proyectos/[slug]`;
- se ajustó el contenido específico de Pokeparty, Mystale Catalog y PokeProfe
  Oak;
- se documentó el trabajo en `docs/step_3_project_case_studies.md`.

También se hizo una simplificación visual importante:

- hero más sobrio, con foto rectangular y mejor jerarquía;
- nombre con fuente display;
- reducción de CTAs;
- eliminación de texto sobrante en hero;
- fondos alternados por sección;
- proyectos sin imágenes en vistas generales;
- números decorativos en cards de proyectos;
- experiencia más liviana y separada;
- skills convertidas a chips agrupados por categoría;
- simplificación de títulos de sección.

Resultado:

- menos ruido visual;
- proyectos más técnicos y menos genéricos;
- lectura más clara para recruiters y programadores;
- mejor evidencia profesional.

## 6. Step 4: accesibilidad, SEO y performance

Se trabajó sobre aspectos técnicos de presentación e indexación:

- JSON-LD para home, perfil, colección de proyectos y casos de estudio;
- `og:image:alt` y `twitter:image:alt`;
- preconnect a `fonts.gstatic.com`;
- navegación con `aria-current`;
- `aria-label` en enlaces repetidos como GitHub, demo, CV y correo;
- mejora de `prefers-reduced-motion`;
- imágenes de casos con `loading="lazy"`;
- cache largo para `/_astro/*` e `/images/*` en `_headers`.

Resultado:

- mejor lectura por buscadores;
- mejor accesibilidad para enlaces repetidos;
- menor prioridad de carga para imágenes fuera del primer viewport;
- headers de cache más adecuados para assets estáticos.

## 7. Step 5: contenido, conversión y marca personal

Se pulió el mensaje profesional y la conversión a contacto:

- se ajustó el posicionamiento 70% desarrollo web / 30% criterio industrial;
- se mejoró el texto de contacto;
- se agregó una etiqueta sobria de disponibilidad;
- se destacó la base de Ingeniería Civil Industrial como diferenciador;
- se agregó asunto prellenado al enlace de email;
- se agregó acceso al CV desde el footer.

Resultado:

- mensaje más específico;
- mejor orientación a empleo trainee/junior;
- menos tono genérico;
- menos fricción para contactar o descargar el CV.

## 8. Step 6: QA final y revisión pre-deploy

Se ejecutó una revisión final del proyecto y se documentó en
`docs/final_qa_deploy_review.md`.

Checks realizados:

```sh
npm run check
npm run build
npm audit --audit-level=moderate
```

Resultados:

- `npm run check`: correcto, con 0 errores, 0 warnings y 0 hints;
- `npm run build`: correcto;
- Cloudflare/Astro: `Parsed 3 valid header rules`;
- `npm audit --audit-level=moderate`: `found 0 vulnerabilities`.

También se revisó:

- sitemap generado;
- robots;
- headers copiados a `dist/client/_headers`;
- rutas principales generadas;
- enlaces internos y assets del HTML compilado;
- ausencia de `TODO`, `FIXME` y `console.log`;
- documentación de deploy actualizada.

## 9. Estado final

El portfolio quedó como una versión profesional más sólida:

- más seguro;
- mejor documentado;
- con mejor SEO técnico;
- con contenido de proyectos más convincente;
- con mejor accesibilidad básica;
- con mejor jerarquía visual;
- con mejor conversión a CV, email, LinkedIn y GitHub;
- con checklist final para deploy.

## 10. Pendientes recomendados

Pendientes razonables para una futura iteración:

- mantener `npm run check`, `npm run build` y `npm audit` como rutina antes de
  PR o deploy;
- revisar visualmente en navegador real en mobile, tablet y desktop;
- ejecutar Lighthouse o PageSpeed sobre el sitio desplegado;
- revisar preview social con LinkedIn Post Inspector;
- agregar capturas más específicas por funcionalidad;
- agregar más evidencia de tests o validaciones en los proyectos si existe;
- evaluar analytics liviano y respetuoso con privacidad solo si realmente se
  necesita medir conversión.

## 11. Comandos principales usados

Durante el proceso se usaron principalmente:

```sh
git status
git log --oneline --decorate --graph --all
git fetch origin
git rebase origin/main
npm run build
npm audit --audit-level=moderate
npm run check
```

No se hizo push desde Codex durante las etapas solicitadas. Los merges y PRs se
cerraron manualmente por el propietario del proyecto.
