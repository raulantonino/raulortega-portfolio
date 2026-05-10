# Checklist de seguridad y deploy

Este documento acompana la configuracion de headers definida en `public/_headers`.
El objetivo es dejar un checklist breve para validar el deploy en Cloudflare antes
de seguir con mejoras de contenido, SEO o diseno.

## Contexto actual

- El sitio usa Astro con `@astrojs/cloudflare`.
- El deploy esta preparado para Cloudflare Workers/Assets mediante `wrangler.jsonc`.
- Las rutas del portfolio se prerenderizan como archivos estaticos.
- `public/_headers` se copia al build como `dist/client/_headers`.
- Durante `npm run build`, Astro/Cloudflare debe mostrar `Parsed 1 valid header rule`.

Si en el futuro se agregan rutas SSR reales, formularios, analytics, fuentes externas,
imagenes remotas o embeds, hay que revisar de nuevo la Content Security Policy.

## Headers configurados

- `Content-Security-Policy`: limita el origen de scripts, estilos, imagenes,
  formularios y embeds. Reduce riesgo de XSS e inyeccion de contenido.
- `X-Frame-Options: DENY`: evita que el sitio sea cargado dentro de iframes.
  Ayuda a prevenir clickjacking.
- `X-Content-Type-Options: nosniff`: evita que el navegador interprete archivos
  con un tipo distinto al declarado.
- `Referrer-Policy: strict-origin-when-cross-origin`: reduce la informacion enviada
  como referrer al navegar hacia sitios externos.
- `Permissions-Policy`: deshabilita permisos que el portfolio no usa, como camara,
  microfono, geolocalizacion, pagos y USB.
- `Strict-Transport-Security`: indica al navegador que use HTTPS en futuras visitas.

La CSP permite `'unsafe-inline'` en `script-src` y `style-src` de forma deliberada.
Es una configuracion prudente para esta etapa porque Astro y Cloudflare pueden generar
estilos o scripts inline. Mas adelante se puede endurecer si el deploy queda estable.

## Checklist de Cloudflare

Antes de publicar ampliamente:

1. Confirmar que el dominio principal sirve por HTTPS:

   ```sh
   curl -I https://raulortega.cl
   ```

2. Confirmar que HTTP redirige a HTTPS. Si no redirige, activar una regla equivalente
   a "Always Use HTTPS" en Cloudflare:

   ```sh
   curl -I http://raulortega.cl
   ```

3. Confirmar que los headers nuevos aparecen en home, rutas internas y PDF:

   ```sh
   curl -I https://raulortega.cl
   curl -I https://raulortega.cl/proyectos/
   curl -I https://raulortega.cl/cv/raul-ortega-cv.pdf
   ```

4. Confirmar que las paginas principales siguen cargando visualmente:

   - `/`
   - `/sobre-mi`
   - `/proyectos`
   - `/proyectos/pokeparty`
   - `/proyectos/mystale-catalog`
   - `/proyectos/pokeprofe-oak`

5. Confirmar que el PDF del CV abre correctamente.

## Riesgos conocidos

- Si se agregan analytics, la CSP debe permitir el dominio en `script-src` y
  `connect-src`.
- Si se agregan fuentes externas, la CSP debe permitirlas en `font-src` y
  posiblemente `style-src`.
- Si se agregan imagenes remotas, la CSP debe permitir esos dominios en `img-src`.
- Si se agrega un formulario externo, revisar `form-action` y `connect-src`.
- `Strict-Transport-Security` con `includeSubDomains` exige que cualquier subdominio
  usado tambien funcione correctamente con HTTPS.

## Resultado esperado despues del deploy

El sitio debe responder con los headers de seguridad en produccion, mantener el build
estable y no romper la navegacion actual. El cambio es preventivo: mejora la confianza
tecnica del portfolio sin introducir nuevas funcionalidades.
