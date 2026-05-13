import type { APIRoute } from 'astro';
import { allProjects } from '../data/projects';

export const prerender = true;

const siteUrl = 'https://raulortega.cl';

const routes = [
  '/',
  '/proyectos/',
  ...allProjects.map((project) => `/proyectos/${project.slug}/`),
];

export const GET: APIRoute = () => {
  const urls = routes
    .map((route) => {
      const url = new URL(route, siteUrl);

      return [
        '  <url>',
        `    <loc>${url.toString()}</loc>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      '</urlset>',
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
