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
    technologies: ['Python', 'Django', 'API externa', 'HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/raulantonino',
    demoUrl: '',
    featured: true,
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
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
    repoUrl: 'https://github.com/raulantonino',
    demoUrl: '',
    featured: true,
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
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
    repoUrl: 'https://github.com/raulantonino',
    demoUrl: '',
    featured: true,
  },
];

export const allProjects = featuredProjects;
