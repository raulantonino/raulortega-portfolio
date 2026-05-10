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
    technicalChallenge: string;
    approach: string;
    result: string;
    requirements: string[];
    metrics: string[];
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
        'Proyecto técnico desarrollado como challenge Django para capturar Pokémon random por tipo usando PokeAPI y administrar una party con reglas de negocio propias.',
      challenge:
        'El desafío era capturar Pokémon por tipo, guardarlos localmente, administrar una Party de máximo 6, enviar excedentes a la PC Box, ordenar por stats y calcular el mejor equipo posible.',
      technicalChallenge:
        'Lo más difícil fue estabilizar la lógica de negocio de Party, Box, liberación, autopromoción y optimización sin romper restricciones del modelo, además de separar bien responsabilidades entre vistas, servicios y modelos.',
      approach:
        'La solución se trabajó separando responsabilidades entre modelos, servicios y vistas, cuidando el flujo desde PokeAPI hasta la persistencia local y la presentación del equipo optimizado.',
      result:
        'La aplicación quedó disponible como demo funcional y como repositorio público, mostrando consumo de API externa, flujo de datos y presentación visual del resultado.',
      requirements: [
        'Capturar Pokémon random por tipo usando PokeAPI.',
        'Guardar Pokémon localmente y administrar una Party de máximo 6.',
        'Enviar excedentes a la PC Box y permitir liberación/autopromoción.',
        'Ordenar por stats y calcular el mejor equipo posible.',
      ],
      metrics: [
        '1 app principal',
        '2 modelos principales',
        'Party máxima de 6 Pokémon',
        'total_power calculado con 6 stats',
        'Algoritmo de optimización con 5 prioridades',
      ],
      scope: [
        'Configuración y estructura base del proyecto Django.',
        'Consumo y procesamiento de datos desde PokeAPI.',
        'Construcción de templates, estilos y navegación principal.',
        'Documentación del proyecto y publicación de una demo estable.',
      ],
      technicalHighlights: [
        'Integración con una API externa real.',
        'Lógica de Party, PC Box, liberación y autopromoción.',
        'Cálculo de total_power y mejor equipo posible.',
        'Separación entre modelos, servicios y vistas.',
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
        'Challenge técnico enfocado en construir un sistema web interno en Django para catalogar criaturas energéticas con templates, SQLite, formulario web, catálogo navegable y migraciones coherentes.',
      challenge:
        'El desafío base pedía catálogo, formulario, filtro por elemento e historial de migraciones; luego lo extendí con detalle, edición, eliminación, filtro por amenaza, seed y tests básicos.',
      technicalChallenge:
        'Lo más difícil fue diseñar un modelo donde threat_level no fuera un dato manual, sino derivado automáticamente de las stats, manteniendo al mismo tiempo filtros, ordenamiento y migraciones con una evolución creíble.',
      approach:
        'Se trabajó una aplicación Django con CBV, modelo principal consistente, datos semilla, filtros por elemento y amenaza, ordenamiento y una interfaz retro/editorial sin perder legibilidad.',
      result:
        'El resultado es un catálogo funcional que permite explorar entidades con una jerarquía clara y una presentación visual distinta al aspecto estándar de un challenge.',
      requirements: [
        'Catalogar criaturas energéticas con templates Django y SQLite.',
        'Agregar formulario web, catálogo navegable y filtro por elemento.',
        'Mantener un historial de migraciones coherente.',
        'Extender el alcance con detalle, edición, eliminación, seed, tests y filtro por amenaza.',
      ],
      metrics: [
        '1 entidad principal',
        '5 vistas principales CRUD con CBV',
        '2 filtros',
        '8 elementos',
        '5 niveles de amenaza',
        '6 stats para calcular threat_level',
        '2 migraciones reales',
        'Seed de 40 criaturas',
      ],
      scope: [
        'Definición de entidades, atributos y criterios de clasificación.',
        'Implementación de filtros y ordenamiento para exploración del catálogo.',
        'Construcción de templates y estilos con una dirección visual propia.',
        'Organización del repositorio para facilitar revisión técnica.',
      ],
      technicalHighlights: [
        'CBV para flujos principales de catálogo y CRUD.',
        'threat_level derivado automáticamente desde stats.',
        'Filtros por elemento y nivel de amenaza.',
        'Seed de 40 criaturas y tests básicos.',
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
        'Challenge técnico orientado a construir un sistema de reservas en Django para que un entrenador pudiera registrarse, iniciar sesión, elegir criatura inicial, seleccionar horario, confirmar reserva y revisarla después.',
      challenge:
        'El sistema debía permitir reservas desde el lado del usuario y administración de criaturas, horarios y reservas desde el admin para el Profesor Oak.',
      technicalChallenge:
        'Lo más difícil fue hacer robusto el flujo de reservas del lado servidor: una reserva activa por usuario, disponibilidad dinámica, validaciones correctas, wizard con sesión y confirmación protegida frente a inconsistencias.',
      approach:
        'Se desarrolló un flujo de reserva por pasos con validaciones de servidor, cálculo dinámico de cupos, consultas optimizadas y protección transaccional para evitar inconsistencias.',
      result:
        'El proyecto demuestra manejo de flujos web en Django, organización de vistas/templates y criterio para completar funcionalidades más allá del mínimo requerido.',
      requirements: [
        'Registro e inicio de sesión de entrenadores.',
        'Selección de criatura inicial y horario disponible.',
        'Confirmación y visualización posterior de la reserva.',
        'Administración de criaturas, horarios y reservas desde Django admin.',
      ],
      metrics: [
        '1 app principal',
        '3 modelos principales',
        '1 reserva activa por usuario',
        'Flujo de reserva de 3 pasos principales',
        'Mejora extra de cancelación de reserva',
      ],
      scope: [
        'Definición de rutas, vistas y templates para los flujos principales.',
        'Implementación de operaciones CRUD y navegación entre secciones.',
        'Trabajo con autenticación y vistas protegidas según el flujo del challenge.',
        'Pulido de interfaz para mantener consistencia en la experiencia.',
      ],
      technicalHighlights: [
        'OneToOneField para limitar una reserva activa por usuario.',
        'Cálculo dinámico de cupos disponibles.',
        'Uso de select_related para optimizar consultas.',
        'Uso de transaction.atomic() y select_for_update() en confirmación.',
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
