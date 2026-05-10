export type Project = {
  slug: string;
  name: string;
  type: string;
  summary: string;
  seoDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
  demoNote?: string;
  images: {
    preview: string;
    previewWebp: string;
    case: string;
    caseWebp: string;
  };
  featured: boolean;
  caseStudy: {
    role: string;
    challengeType: string;
    objective: string;
    ownership: string;
    context: string;
    challenge: string;
    approach: string;
    result: string;
    scope: string[];
    technicalHighlights: string[];
    decisions: string[];
    learnings: string[];
    nextSteps: string[];
  };
};

export const featuredProjects: Project[] = [
  {
    slug: 'pokeparty',
    name: 'Pokeparty',
    type: 'Aplicación web con integración de API externa',
    summary:
      'Aplicación Django para construir una party Pokémon usando datos reales desde PokeAPI.',
    seoDescription:
      'Caso de estudio de Pokeparty, aplicación Django con consumo de PokeAPI, transformación de datos y demo desplegada.',
    problem:
      'El desafío consistía en consumir una API externa, transformar datos y presentar una experiencia clara para comparar y construir equipos.',
    solution:
      'Se desarrolló una aplicación web con foco en backend Django, consumo de datos externos, presentación visual cuidada y documentación técnica.',
    technologies: ['Python', 'Django', 'PokeAPI', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    repoUrl: 'https://github.com/raulantonino/pokeparty',
    demoUrl: 'https://pokeparty-keqn.onrender.com',
    demoNote:
      'Demo estable desplegada en Render. El primer acceso puede tardar por cold start del servicio gratuito.',
    images: {
      preview: '/images/projects/pokeparty-preview.jpg',
      previewWebp: '/images/projects/pokeparty-preview.webp',
      case: '/images/projects/pokeparty-case.jpg',
      caseWebp: '/images/projects/pokeparty-case.webp',
    },
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto de inicio a fin',
      challengeType: 'Challenge técnico individual',
      objective:
        'Construir una aplicación web capaz de consultar PokeAPI, procesar información relevante y presentarla en una interfaz útil para armar una party Pokémon.',
      ownership:
        'Desarrollé la solución completa: estructura Django, integración con API externa, transformación de datos, templates, estilos, documentación y deploy.',
      context:
        'Proyecto técnico desarrollado como challenge para demostrar manejo de Django, integración con una API externa, organización de datos y presentación de información de forma clara.',
      challenge:
        'El principal desafío fue transformar datos externos en una experiencia útil para el usuario, manteniendo una estructura ordenada y una interfaz fácil de recorrer.',
      approach:
        'La solución se trabajó separando responsabilidades, cuidando el flujo de datos desde la API externa hasta la presentación visual, y documentando decisiones técnicas relevantes para que el proyecto fuera entendible como pieza de portafolio.',
      result:
        'La aplicación quedó disponible como demo funcional y como repositorio público, mostrando consumo de API externa, flujo de datos y presentación visual del resultado.',
      scope: [
        'Configuración y estructura base del proyecto Django.',
        'Consumo y procesamiento de datos desde PokeAPI.',
        'Construcción de templates, estilos y navegación principal.',
        'Documentación del proyecto y publicación de una demo estable.',
      ],
      technicalHighlights: [
        'Integración con una API externa real.',
        'Transformación de datos antes de presentarlos al usuario.',
        'Separación entre lógica de datos, vistas y templates.',
        'Deploy funcional para revisión técnica externa.',
      ],
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
    seoDescription:
      'Caso de estudio de Mystale Catalog, catálogo Django con filtros, ordenamiento y clasificación de entidades.',
    problem:
      'El proyecto requería organizar entidades, filtros y jerarquías visuales de forma clara y navegable.',
    solution:
      'Se creó una aplicación Django con estructura ordenada, datos semilla, filtros por tipo/nivel y una interfaz visual diferenciada.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite', 'Git'],
    repoUrl: 'https://github.com/raulantonino/mystale-catalog-challenge',
    demoUrl: '',
    images: {
      preview: '/images/projects/mystale-catalog-preview.jpg',
      previewWebp: '/images/projects/mystale-catalog-preview.webp',
      case: '/images/projects/mystale-catalog-case.jpg',
      caseWebp: '/images/projects/mystale-catalog-case.webp',
    },
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto de inicio a fin',
      challengeType: 'Challenge técnico individual',
      objective:
        'Construir un catálogo web navegable que permitiera revisar criaturas, aplicar filtros y entender rápidamente su clasificación.',
      ownership:
        'Implementé la aplicación completa: estructura Django, datos iniciales, filtros, ordenamiento, templates, estilos y documentación del repositorio.',
      context:
        'Challenge técnico enfocado en construir un catálogo navegable, con datos organizados, filtros y una propuesta visual propia.',
      challenge:
        'El desafío fue equilibrar estructura backend, claridad de filtros y una estética visual diferenciada sin perder legibilidad.',
      approach:
        'Se trabajó una aplicación Django con modelos simples, datos iniciales, ordenamiento, filtros y una interfaz inspirada en una estética retro/editorial.',
      result:
        'El resultado es un catálogo funcional que permite explorar entidades con una jerarquía clara y una presentación visual distinta al aspecto estándar de un challenge.',
      scope: [
        'Definición de entidades, atributos y criterios de clasificación.',
        'Implementación de filtros y ordenamiento para exploración del catálogo.',
        'Construcción de templates y estilos con una dirección visual propia.',
        'Organización del repositorio para facilitar revisión técnica.',
      ],
      technicalHighlights: [
        'Catálogo navegable con filtros funcionales.',
        'Ordenamiento consistente para mejorar lectura y comparación.',
        'Clasificación por nivel de amenaza como criterio de jerarquía.',
        'Diseño visual diferenciado sin sacrificar legibilidad.',
      ],
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
    seoDescription:
      'Caso de estudio de PokeProfe Oak, aplicación Django con flujos CRUD, autenticación y navegación protegida.',
    problem:
      'El desafío buscaba implementar flujos funcionales, vistas protegidas y una experiencia de uso consistente.',
    solution:
      'Se trabajó una aplicación Django con flujos CRUD, autenticación, navegación clara y mejoras funcionales sobre el alcance base.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'Git'],
    repoUrl: 'https://github.com/raulantonino/oak-lab-challenge',
    demoUrl: '',
    images: {
      preview: '/images/projects/pokeprofe-oak-preview.jpg',
      previewWebp: '/images/projects/pokeprofe-oak-preview.webp',
      case: '/images/projects/pokeprofe-oak-case.jpg',
      caseWebp: '/images/projects/pokeprofe-oak-case.webp',
    },
    featured: true,
    caseStudy: {
      role: 'Desarrollador del proyecto de inicio a fin',
      challengeType: 'Challenge técnico individual',
      objective:
        'Resolver un challenge de aplicación web con Django, implementando flujos de gestión, navegación consistente y funcionalidades útiles para el usuario.',
      ownership:
        'Desarrollé el proyecto completo: rutas, vistas, templates, flujos CRUD, autenticación, estilos y mejoras funcionales sobre el alcance base.',
      context:
        'Challenge técnico orientado a construir una aplicación web funcional con Django, flujos de gestión y navegación consistente.',
      challenge:
        'El principal desafío fue implementar flujos completos y mantener una experiencia clara, incluyendo mejoras que aportaran valor más allá del alcance mínimo.',
      approach:
        'Se desarrollaron vistas, rutas, templates y flujos de interacción, priorizando funcionalidad, estructura y una experiencia entendible para el usuario.',
      result:
        'El proyecto demuestra manejo de flujos web en Django, organización de vistas/templates y criterio para completar funcionalidades más allá del mínimo requerido.',
      scope: [
        'Definición de rutas, vistas y templates para los flujos principales.',
        'Implementación de operaciones CRUD y navegación entre secciones.',
        'Trabajo con autenticación y vistas protegidas según el flujo del challenge.',
        'Pulido de interfaz para mantener consistencia en la experiencia.',
      ],
      technicalHighlights: [
        'Flujos CRUD funcionales.',
        'Uso de autenticación y vistas protegidas.',
        'Organización de rutas, vistas y templates en Django.',
        'Mejoras funcionales agregadas sobre el alcance base del challenge.',
      ],
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
