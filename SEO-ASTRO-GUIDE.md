# SEO en Astro — Guía completa aplicada

Checklist y código listo para aplicar en cualquier proyecto Astro estático.  
Basado en la implementación real de **chiguirotec.com**.

---

## 1. Sitemap automático con `@astrojs/sitemap`

```bash
npm install @astrojs/sitemap
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tudominio.com',   // ← OBLIGATORIO para que genere las URLs correctas
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

> El build genera `dist/sitemap-index.xml` y `dist/sitemap-0.xml` automáticamente.  
> **No crear** `public/sitemap.xml` manual — sobreescribiría el generado.

---

## 2. `robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /404

Sitemap: https://tudominio.com/sitemap-index.xml
```

> Nota: apunta a `sitemap-index.xml`, no a `sitemap.xml`.

---

## 3. Layout.astro — Props y meta tags base

```astro
---
interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}

const {
  title = "Tu Título Principal | Ciudad, País | Tu Empresa",
  description = "Descripción con keyword principal + ciudad + propuesta de valor. Máx 160 caracteres.",
  canonical = "https://tudominio.com/",
  keywords = "keyword principal ciudad, keyword secundaria país, tecnología usada, nombre empresa",
} = Astro.props;
---
```

```html
<head>
  <meta charset="utf-8" />
  <title>{title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content="Tu Empresa" />

  <!-- Robots: permite snippets largos e imágenes grandes en resultados -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="language" content="es" />
  <meta name="revisit-after" content="7 days" />
  <meta name="rating" content="general" />

  <!-- Geo / Local SEO -->
  <!-- Busca tus coordenadas en: latlong.net -->
  <meta name="geo.region" content="CO-ATL" />             <!-- ISO 3166-2 de tu región -->
  <meta name="geo.placename" content="Barranquilla, Colombia" />
  <meta name="geo.position" content="10.9685;-74.7813" /> <!-- lat;lon -->
  <meta name="ICBM" content="10.9685, -74.7813" />        <!-- lat, lon -->

  <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="https://tudominio.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Tu Empresa" />
  <meta property="og:locale" content="es_CO" />

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonical} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="https://tudominio.com/og-image.png" />

  <!-- Canonical -->
  <link rel="canonical" href={canonical} />

  <!-- PWA -->
  <meta name="theme-color" content="#TU_COLOR" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="manifest" href="/site.webmanifest" />

  <!-- Slot para JSON-LD específico por página -->
  <slot name="schema" />

  <!-- JSON-LD global: Organization + LocalBusiness + WebSite -->
  <script type="application/ld+json">
    [
      {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "name": "Tu Empresa",
        "alternateName": "Tu Empresa S.A.S.",
        "url": "https://tudominio.com",
        "logo": "https://tudominio.com/logo.svg",
        "image": "https://tudominio.com/og-image.png",
        "description": "Descripción completa de tu empresa con keywords.",
        "telephone": "+57XXXXXXXXXX",
        "email": "contacto@tudominio.com",
        "foundingDate": "2024",
        "taxID": "NIT-XXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Barranquilla",
          "addressRegion": "Atlántico",
          "addressCountry": "CO"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+57XXXXXXXXXX",
          "contactType": "sales",
          "availableLanguage": "Spanish"
        },
        "areaServed": ["CO", "MX", "AR", "CL", "PE", "EC", "ES"],
        "sameAs": [
          "https://www.instagram.com/tuusuario/",
          "https://www.linkedin.com/company/tuempresa/"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Tu Empresa",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nombre del servicio",
                "description": "Descripción del servicio."
              }
            }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Tu Empresa",
        "url": "https://tudominio.com",
        "description": "Descripción del sitio.",
        "inLanguage": "es",
        "publisher": { "@type": "Organization", "name": "Tu Empresa" }
      }
    ]
  </script>
</head>
```

---

## 4. FAQ JSON-LD — Página de inicio

Hace que Google muestre las preguntas directamente en los resultados de búsqueda.

```astro
<!-- pages/index.astro -->
<Layout title="..." canonical="https://tudominio.com/">
  <script type="application/ld+json" slot="schema">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta desarrollar una página web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Respuesta completa aquí. Incluye precios o rangos si puedes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tecnologías utilizan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usamos Angular, Node.js, NestJS, PostgreSQL..."
        }
      }
      // Agrega entre 4 y 8 preguntas
    ]
  })}</script>
```

---

## 5. Service JSON-LD con precios — Página de servicios

Permite que Google muestre precios en los resultados.

```astro
<!-- pages/services.astro -->
<Layout
  title="Servicios de Desarrollo Web | Ciudad | Tu Empresa"
  description="Descripción con precios y ciudad."
  canonical="https://tudominio.com/services"
  keywords="servicios desarrollo web ciudad, crear página web país..."
>
  <script type="application/ld+json" slot="schema">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicios — Tu Empresa",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Nombre del servicio",
          "description": "Descripción del servicio.",
          "provider": { "@type": "Organization", "name": "Tu Empresa" },
          "areaServed": "CO",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "COP",
            "price": "490000",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/MinimumAnnotatedPrice"
            }
          }
        }
      }
    ]
  })}</script>
```

---

## 6. BreadcrumbList — Páginas internas / portafolio

Muestra la ruta de navegación en Google: `Inicio › Portafolio › Proyecto`.

```astro
<!-- pages/portfolio/[slug].astro -->
<Layout
  title={`${project.title} | Desarrollo ${project.category} | Tu Empresa`}
  description={`${project.description} Desarrollado con ${tecnologias}. Tu Empresa, Barranquilla.`}
  canonical={`https://tudominio.com/portfolio/${project.slug}`}
>
  <script type="application/ld+json" slot="schema">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://tudominio.com/" },
      { "@type": "ListItem", "position": 2, "name": "Portafolio", "item": "https://tudominio.com/portfolio" },
      { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://tudominio.com/portfolio/${project.slug}` }
    ]
  })}</script>
```

---

## 7. `site.webmanifest`

```json
{
  "name": "Tu Empresa",
  "short_name": "Tu Empresa",
  "description": "Descripción corta.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#050e17",
  "theme_color": "#08aad6",
  "lang": "es",
  "categories": ["business", "productivity"],
  "icons": [
    { "src": "/favicon.ico", "sizes": "48x48", "type": "image/x-icon" },
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "maskable any" }
  ]
}
```

---

## 8. Títulos por página — Fórmula

```
[Keyword principal] | [Ciudad/País] | [Nombre empresa]
```

| Página | Ejemplo |
|---|---|
| Home | `Desarrollo de Software a la Medida \| Barranquilla, Colombia \| Tu Empresa` |
| Servicios | `Servicios de Desarrollo Web y Apps \| Barranquilla \| Tu Empresa` |
| Portafolio | `Portafolio de Proyectos Web \| Tu Empresa Barranquilla` |
| Sobre nosotros | `Empresa de Software en Barranquilla, Colombia \| Tu Empresa` |
| Proyecto (slug) | `Nombre Proyecto \| Desarrollo Web Colombia \| Tu Empresa` |

---

## 9. Checklist post-deploy

- [ ] Subir sitemap en Google Search Console: `https://tudominio.com/sitemap-index.xml`
- [ ] Solicitar indexación en GSC para las páginas principales (URL Inspection → Request Indexing)
- [ ] Validar JSON-LD en [schema.org/validator](https://validator.schema.org/) o [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verificar Open Graph con [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Verificar que `robots.txt` apunta a `sitemap-index.xml`
- [ ] Confirmar que todas las páginas tienen `<link rel="canonical">`
- [ ] Asegurarse de que la `og:image` existe y mide 1200×630px
- [ ] Instalar Google Analytics o similar (opcional pero recomendado)

---

## 10. Herramientas útiles

| Herramienta | Para qué |
|---|---|
| [search.google.com/search-console](https://search.google.com/search-console) | Indexación, errores, sitemaps |
| [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | Validar FAQ, Service, Breadcrumb schemas |
| [validator.schema.org](https://validator.schema.org/) | Validar JSON-LD |
| [opengraph.xyz](https://www.opengraph.xyz/) | Preview de Open Graph / Twitter Card |
| [latlong.net](https://www.latlong.net/) | Obtener coordenadas para geo tags |
| [pagespeed.web.dev](https://pagespeed.web.dev/) | Core Web Vitals (afectan ranking) |
| [ahrefs.com/webmaster-tools](https://ahrefs.com/webmaster-tools) | Backlinks y keywords gratis |
