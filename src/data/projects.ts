export const featuredProjects = [
  {
    slug: 'pokeparty',
    name: 'Pokeparty',
    type: 'Aplicación web con integración de API externa',
    summary:
      'Aplicación para construir y optimizar una party Pokémon usando datos reales desde PokeAPI.',
    problem:
      'El desafío consistía en consumir una API externa, transformar datos y presentar una experiencia clara para comparar y construir equipos.',
    solution:
      'Se desarrolló una aplicación web con foco en estructura backend, consumo de datos, presentación visual cuidada y documentación técnica.',
    technologies: ['Python', 'Django', 'PokeAPI', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    repoUrl: 'https://github.com/raulantonino/pokeparty',
    demoUrl: '',
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto',
      context:
        'Proyecto técnico desarrollado como challenge para demostrar manejo de Django, integración con una API externa, organización de datos y presentación de información de forma clara.',
      challenge:
        'El principal desafío fue transformar datos externos en una experiencia útil para el usuario, manteniendo una estructura ordenada y una interfaz fácil de recorrer.',
      approach:
        'La solución se trabajó separando responsabilidades, cuidando el flujo de datos desde la API externa hasta la presentación visual, y documentando decisiones técnicas relevantes para que el proyecto fuera entendible como pieza de portafolio.',
      decisions: [
        'Usar Django como base para organizar vistas, lógica y templates.',
        'Encapsular la integración con la API externa para evitar mezclar llamadas directas con la presentación.',
        'Priorizar una interfaz clara, visual y fácil de entender para mostrar el resultado funcionando.',
        'Documentar decisiones del proyecto para explicar no solo qué se hizo, sino por qué se hizo.',
      ],
      learnings: [
        'Profundización en consumo y transformación de datos desde una API externa.',
        'Mejor comprensión de cómo presentar proyectos técnicos como casos de estudio.',
        'Refuerzo de estructura, documentación y criterio visual en proyectos Django.',
      ],
      nextSteps: [
        'Agregar métricas o reglas de optimización más detalladas.',
        'Mejorar capturas y presentación visual del caso de estudio.',
        'Agregar tests específicos para la lógica de transformación de datos.',
      ],
    },
  },
  {
    slug: 'mystale-catalog',
    name: 'Mystale Catalog Challenge',
    type: 'Catálogo web con Django',
    summary:
      'Catálogo de criaturas con filtros, ordenamiento, clasificación por amenaza y estética retro/editorial.',
    problem:
      'El proyecto requería organizar entidades, filtros y jerarquías visuales de forma clara y navegable.',
    solution:
      'Se creó una aplicación Django con estructura ordenada, datos semilla, filtros por tipo/nivel y una interfaz visual diferenciada.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite', 'Git'],
    repoUrl: 'https://github.com/raulantonino/mystale-catalog-challenge',
    demoUrl: '',
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto',
      context:
        'Challenge técnico enfocado en construir un catálogo navegable, con datos organizados, filtros y una propuesta visual propia.',
      challenge:
        'El desafío fue equilibrar estructura backend, claridad de filtros y una estética visual diferenciada sin perder legibilidad.',
      approach:
        'Se trabajó una aplicación Django con modelos simples, datos iniciales, ordenamiento, filtros y una interfaz inspirada en una estética retro/editorial.',
      decisions: [
        'Clasificar entidades por nivel de amenaza para facilitar lectura y jerarquía.',
        'Ordenar los resultados por amenaza y nombre para mantener una navegación predecible.',
        'Usar una estética visual propia sin sacrificar claridad ni usabilidad.',
      ],
      learnings: [
        'Mejor manejo de filtros y ordenamiento en vistas Django.',
        'Importancia de conectar decisiones visuales con la estructura de datos.',
        'Valor de una interfaz diferenciada para que un challenge técnico destaque más.',
      ],
      nextSteps: [
        'Agregar página de detalle más completa para cada criatura.',
        'Mejorar el sistema de búsqueda.',
        'Agregar pruebas para filtros y ordenamiento.',
      ],
    },
  },
  {
    slug: 'pokeprofe-oak',
    name: 'PokeProfe Oak',
    type: 'Aplicación web Django',
    summary:
      'Proyecto web de gestión inspirado en el universo Pokémon, desarrollado como challenge técnico con Django.',
    problem:
      'El desafío buscaba implementar flujos funcionales, vistas protegidas y una experiencia de uso consistente.',
    solution:
      'Se trabajó una aplicación Django con flujos CRUD, autenticación, navegación clara y mejoras funcionales sobre el alcance base.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'Git'],
    repoUrl: 'https://github.com/raulantonino/oak-lab-challenge',
    demoUrl: '',
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto',
      context:
        'Challenge técnico orientado a construir una aplicación web funcional con Django, flujos de gestión y navegación consistente.',
      challenge:
        'El principal desafío fue implementar flujos completos y mantener una experiencia clara, incluyendo mejoras que aportaran valor más allá del alcance mínimo.',
      approach:
        'Se desarrollaron vistas, rutas, templates y flujos de interacción, priorizando funcionalidad, estructura y una experiencia entendible para el usuario.',
      decisions: [
        'Mantener una navegación clara entre las secciones principales.',
        'Agregar acciones útiles para completar mejor el flujo de gestión.',
        'Cuidar que la interfaz mantuviera coherencia visual en todo el proyecto.',
      ],
      learnings: [
        'Refuerzo de flujos CRUD y navegación en Django.',
        'Mayor práctica con templates, rutas y estructura de vistas.',
        'Importancia de revisar casos de uso reales antes de cerrar un challenge.',
      ],
      nextSteps: [
        'Pulir más la presentación visual del proyecto.',
        'Agregar pruebas de flujos principales.',
        'Documentar con más profundidad las decisiones técnicas.',
      ],
    },
  },
];

export const allProjects = featuredProjects;

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
