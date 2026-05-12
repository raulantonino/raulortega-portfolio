# Paso 3: casos de estudio de proyectos

Este paso trabaja sobre la rama `codex/step-3-project-case-studies`.
El objetivo es que los proyectos funcionen mejor como evidencia profesional ante recruiters y programadores.

## Cambios aplicados

- Se enriqueció `src/data/projects.ts` con campos más específicos:
  - tipo de challenge;
  - objetivo;
  - ownership;
  - resultado;
  - alcance;
  - evidencia técnica;
  - descripción SEO por proyecto;
  - nota de demo externa cuando aplica.
- Se reforzó el mensaje de ownership:
  - cada proyecto fue desarrollado de inicio a fin;
  - se evita presentar los challenges como ejercicios genéricos sin contexto.
- Se actualizó la home para mostrar evidencia técnica breve en los proyectos destacados.
- Se actualizó la página `/proyectos` para mostrar:
  - tipo de challenge;
  - rol;
  - evidencia técnica;
  - datos clave de implementación.
- Se actualizó cada caso de estudio en `/proyectos/[slug]` para mostrar:
  - objetivo;
  - nota de demo lenta en Render para Pokeparty;
  - alcance;
  - ownership;
  - resultado;
  - highlights técnicos.
- Se ajustaron metadatos SEO de los casos:
  - descripciones específicas por proyecto;
  - `og:type="article"` para páginas de caso.
- Se incorporaron detalles concretos de cada challenge:
  - requisitos originales;
  - dificultad técnica principal;
  - números y métricas verificables de implementación.
- Se simplificaron las vistas generales de proyectos:
  - se retiraron las imágenes de home y `/proyectos`;
  - se redujo el contenido repetido en cards;
  - se dejó la profundidad técnica para las páginas de caso completo.

## Verificación realizada

Se ejecutó:

```bash
npm run build
```

Resultado: build correcto.

También se verificó en HTML compilado:

- presencia de evidencia técnica breve en la home;
- evidencia técnica en `/proyectos`;
- objetivo, alcance, resultado y nota de demo en el caso Pokeparty;
- `og:type="article"` y meta description específica en casos de estudio.
- ausencia de previews de proyectos en home y `/proyectos`;
- presencia de requisitos, datos clave y dificultad técnica en páginas de caso.

## Riesgos y consideraciones

- La información agregada evita sobreprometer métricas o impacto que todavía no están documentados.
- La nota de Render explica la lentitud inicial de Pokeparty sin sonar defensiva.
- Los casos mejoran, pero todavía pueden ser más fuertes con datos concretos del proceso real.
- La simplificación visual se hizo en step 3 porque el aumento de contenido estaba afectando la jerarquía de lectura.

## Información pendiente que conviene completar

- Capturas más específicas de funcionalidades clave.
- Decisiones técnicas con ejemplos de código o arquitectura.
- Qué mejorarías si lo llevaras a producción.
- Si hubo tests, validaciones manuales o checklist de QA.
- Métricas adicionales si existen: tiempo de carga, endpoints, coverage, validaciones manuales o checklist de QA.
