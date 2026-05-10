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
- Se actualizó la home para mostrar `Qué demuestra` en los proyectos destacados.
- Se actualizó la página `/proyectos` para mostrar:
  - tipo de challenge;
  - rol;
  - evidencia técnica;
  - problema y solución.
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

## Verificación realizada

Se ejecutó:

```bash
npm run build
```

Resultado: build correcto.

También se verificó en HTML compilado:

- presencia de `Qué demuestra` en la home;
- evidencia técnica en `/proyectos`;
- objetivo, alcance, resultado y nota de demo en el caso Pokeparty;
- `og:type="article"` y meta description específica en casos de estudio.

## Riesgos y consideraciones

- La información agregada evita sobreprometer métricas o impacto que todavía no están documentados.
- La nota de Render explica la lentitud inicial de Pokeparty sin sonar defensiva.
- Los casos mejoran, pero todavía pueden ser más fuertes con datos concretos del proceso real.

## Información pendiente que conviene completar

- Requisitos originales de cada challenge, aunque sea resumidos.
- Capturas más específicas de funcionalidades clave.
- Decisiones técnicas con ejemplos de código o arquitectura.
- Qué parte fue más difícil en cada proyecto.
- Qué mejorarías si lo llevaras a producción.
- Si hubo tests, validaciones manuales o checklist de QA.
- Métricas simples si existen: tiempo de carga, número de vistas, cantidad de entidades, endpoints, modelos o flujos.
