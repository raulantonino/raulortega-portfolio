# Project Decisions - Raúl Ortega Huenuil Portfolio

## 1. Project type

Personal professional website / CV web / technical portfolio.

The website will present Raúl Ortega Huenuil as a Full Stack Trainee Developer and Industrial Civil Engineer focused on web development.

## 2. Main objective

The website should help recruiters and tech companies quickly understand:

- Who I am.
- What my professional profile is.
- What technologies I use.
- What relevant experience I have.
- What projects demonstrate my skills.
- How to contact me.

## 3. Target audience

Primary audience:

- Recruiters.
- Tech companies.
- Technical reviewers.
- Professional contacts.

The site should be understandable for both HR profiles and technical profiles.

## 4. Stack

Defined stack:

- Astro.
- Custom CSS.
- Cloudflare Pages.
- Custom domain: raulortega.cl.
- Git.
- GitHub.

## 5. MVP scope

The first version will include:

- Home page.
- About page.
- Projects page.
- Individual project pages.
- Featured project case study: Pokeparty.
- Contact links.
- CV download space prepared for future PDF.

## 6. Out of scope for MVP

The MVP will not include:

- Database.
- Django-style admin.
- Login.
- User accounts.
- Blog.
- Functional backend contact form.
- Art portfolio.
- Dark mode.
- Tailwind.
- React.

## 7. Main pages

Planned pages:

- /
- /sobre-mi
- /proyectos
- /proyectos/pokeparty
- /proyectos/mystale-catalog
- /proyectos/pokeprofe-oak

There will be no separate contact page in the MVP. Contact will be visible in the hero, final contact section and footer.

## 8. Home structure

The home page will follow this order:

1. Hero.
2. Short about section.
3. Featured experience.
4. Featured projects.
5. Technical skills.
6. Contact.

## 9. Visible name

Main visible name:

Raúl Ortega Huenuil.

The full name can be used in more formal contexts such as CV, metadata, footer or the about page.

## 10. Professional positioning

Base positioning:

Full Stack Trainee Developer and Industrial Civil Engineer, focused on web development with Python, Django, SQL and responsive frontend.

## 11. Featured experience

The home page will highlight:

1. Desarrollador Django Trainee | Proyecto para OTEC.
2. Ingeniero de Codificación | MASISA.
3. Practicante | Superintendencia de Servicios Sanitarios.

## 12. Featured projects

The home page will highlight:

1. Pokeparty.
2. Mystale Catalog Challenge.
3. PokeProfe Oak.

Pokeparty will be the main case study.

## 13. Visual direction

Visual style:

- Light background.
- Clean professional layout.
- Subtle glassmorphism.
- Controlled 2000s-inspired details.
- Blue and light blue accents.
- Card-based sections.
- Elegant but visible animations.

The site should not look like a generic dark AI-generated portfolio.

## 14. Content management

Content will be edited directly from project files.

Expected structure:

- src/data/ for profile, experience, skills and links.
- src/content/projects/ for project content and case studies.

## 15. Git workflow

Work will be organized with small commits and clear branches when needed.

Possible branches:

- eature/project-setup
- eature/base-layout
- eature/home-sections
- eature/about-page
- eature/projects-page
- eature/project-case-study
- eature/responsive-polish
- eature/deploy

## 16. Deployment

The site will be deployed with Cloudflare Pages connected to GitHub.

The custom domain will be:

raulortega.cl
