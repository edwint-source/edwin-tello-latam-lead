
# Sitio web edwintello.com — Plan de construcción (v3)

## Dirección creativa

**Tono**: Executive thought leader internacional. Referencia editorial: estructura y alternancia de **alliekmiller.com**, reinterpretada para un líder LATAM de infraestructura digital, IA y Data Centers. NO influencer, NO motivacional, NO startup.

**Jerarquía narrativa del hero (orden de prioridad)**:
1. Visión regional ("Latinoamérica más competitiva")
2. Autoridad (ACOLDC, ICREA, 25+ años)
3. Claridad estratégica (frase corta, concreta)
4. Tecnología — solo como soporte visual, nunca protagonista (sin renders 3D, sin nodos animados, sin ilustraciones futuristas)

**Sobre Edwin**: humano, cercano y confiable. Equilibrio entre autoridad ejecutiva y cercanía personal. Foto real editorial / de speaking en primer plano, no ilustraciones ni renders.

**Verde lima**: solo resaltador, hover, acentos, CTAs, líneas editoriales y palabras clave. Nunca fondo dominante.

**Animaciones**: sutiles, tipo Apple/NVIDIA/Gartner. Fades + slide-up de 12px, 300–500ms, easing suave. Sin rebotes, sin partículas, sin efectos gamer.

**Iconografía**: lucide-react `strokeWidth={1.5}`, monocromo, consistente. Sin íconos coloridos o caricaturescos.

**Ritmo vertical**: `py-20 md:py-28`. Continuidad con divisores editoriales finos lima entre secciones, sin saltos en blanco.

## 1. Mobile-first (prioridad explícita)

El sitio se diseña pensando en tráfico desde LinkedIn (mayoritariamente móvil):

- **Lectura cómoda**: cuerpo `text-base` (16px) mínimo, line-height 1.65, ancho máximo de párrafo 65ch.
- **Jerarquía visual fuerte**: H1 móvil clamp(2.25rem, 8vw, 3rem); kicker lima siempre visible; subtítulo en gris medio.
- **Espacios limpios**: padding lateral `px-6`, vertical entre secciones `py-16` en móvil; separación clara entre bloques sin amontonar.
- **CTAs visibles**: botón **Book Edwin** persistente (bottom-fixed en móvil tras scroll del hero, fondo lima sólido, alto 52px, sombra elegante; oculto al volver al hero o cuando la sección de contacto está en viewport).
- **Navegación rápida**: header móvil con logo + selector idioma compacto + menú hamburguesa que abre `Sheet` lateral con enlaces grandes (44px hit target) y CTA al final.
- **Hero en móvil**: una sola columna, retrato arriba (aspect 4/5), texto debajo, CTAs en stack vertical full-width.
- **Stat strip en móvil**: scroll horizontal con snap, sin amontonar 4 métricas en una sola fila apretada.
- **Imágenes**: `loading="lazy"`, `srcset` con tamaños 640/1024/1600, `sizes` correcto.

## 2. Hero — especificación detallada

**Desktop (asimétrico editorial, dos columnas)**:

- **Izquierda (texto, 6/12)** — orden visual = orden narrativo:
  1. `.kicker` lima: "EXECUTIVE THOUGHT LEADER · LATAM"
  2. H1 display (Montserrat 800, clamp 3rem–5rem):
     "Conectando el **futuro digital** de Latinoamérica."
     ("futuro digital" con `.highlight` lima editorial)
  3. Subtítulo (texto del usuario):
     "Conectando infraestructura, inversión y transformación digital para una Latinoamérica más competitiva."
  4. Línea de credenciales discreta: `Presidente ACOLDC · Chief LATAM ICREA · 25+ años`
  5. CTAs:
     - Primario lima sólido (texto negro): **Book Edwin**
     - Secundario outline blanco: **Ver videos**
     - Terciario link con flecha y hover underline lima: Explorar Insights →

- **Derecha (visual, 6/12)**:
  - Retrato profesional de Edwin (placeholder `src/assets/edwin-portrait.jpg` con comentario claro para reemplazo). Foto real editorial — sin renders ni overlays tecnológicos pesados.
  - Marco fino lima en una esquina (acento editorial mínimo).
  - Glow morado radial muy difuso detrás del retrato.
  - Logo tll discreto en superposición (esquina, pequeño).

- **Fondo**: oscuro premium (gradiente `--brand-purple-deep` → casi negro), grid técnico sutilísimo a 3% de opacidad. La tecnología es ambiente, no protagonista.

- **Animación de entrada**: fade + slide-up 12px, stagger 80ms (kicker → H1 → subtítulo → credenciales → CTAs → imagen). Total <900ms, una sola vez.

- **Banda inferior (puente a stat cards)**: 4 métricas en línea con divisores verticales finos lima. Continuidad sin corte abrupto.

**Mobile**: una columna, retrato arriba (4/5), texto debajo, CTAs full-width en stack vertical, banda de stats en scroll horizontal con snap.

## 3. Sección "Sobre Edwin" — humana y cercana

Fondo blanco editorial. Layout de dos columnas en desktop, una en móvil.

- **Izquierda**: foto editorial cálida de Edwin (placeholder con comentario; preferir foto real de speaking o retrato editorial — nunca render). Marco simple, sombra elegante.
- **Derecha**:
  - `.kicker` lima: "SOBRE EDWIN"
  - Título editorial: "Liderazgo regional con visión humana"
  - Párrafo corto cercano (2–3 frases) que combine autoridad y cercanía: ingeniero, padre/colombiano, líder regional.
  - Línea de credenciales con íconos finos.
  - Link "Conoce su trayectoria completa →" (ruta `/bio`).

Tono del texto: primera frase humaniza, segunda da autoridad, tercera proyecta visión. Sin tecnicismos en este bloque — los detalles van en `/bio`.

## 4. Resto del Home

Hero (oscuro) → Stat strip (puente) → Sobre Edwin (blanco editorial humano) → Temas que lidera (gris claro, grid de TopicCards) → Videos destacados (oscuro, 3 cards) → Speaking formatos (blanco, lista editorial numerada) → Eventos próximos (gris claro, 3 cards) → Insights/Newsletter (blanco) → CTA final (oscuro premium con glow morado sutil).

## 5. Internacionalización (ES default, EN, PT)

- Diccionarios `src/i18n/dictionaries/{es,en,pt}.ts`.
- `LanguageProvider` + `useI18n()` con persistencia en `localStorage`.
- Selector header: `ES · EN · PT` minimalista, activo subrayado lima.
- ES completo; EN/PT estructura preparada con placeholders.

## 6. Arquitectura de rutas (TanStack Start, file-based)

```
src/routes/
  __root.tsx        Header + Outlet + Footer
  index.tsx         Inicio
  bio.tsx
  speaking.tsx
  eventos.tsx
  videos.tsx
  insights.tsx
  contacto.tsx
```

Cada ruta con `head()` único (title, description, og:title, og:description). H1 único por página.

## 7. Componentes (src/components/)

- `Header.tsx` — fijo, blur al scroll, logo tll, nav, selector idioma, CTA Book Edwin
- `MobileMenu.tsx` — Sheet lateral con enlaces grandes
- `StickyMobileCTA.tsx` — CTA fijo inferior móvil tras scroll del hero
- `Footer.tsx` — oscuro elegante, contacto, redes, frase de cierre
- `Hero.tsx` — composición descrita
- `StatStrip.tsx` — banda de métricas (puente)
- `AboutEdwinSection.tsx` — bloque humano descrito
- `TopicCard.tsx`, `VideoCard.tsx`, `EventCard.tsx`, `InsightCard.tsx`
- `SectionHeader.tsx` — kicker lima + H2 + descripción
- `EditorialDivider.tsx` — línea fina lima 80px
- `CTASection.tsx` — bloque final oscuro premium reutilizable
- `LanguageSwitcher.tsx`
- `Reveal.tsx` — fade+slide-up sutil con IntersectionObserver (CSS, sin framer-motion)

## 8. Páginas

- **Bio**: hero claro con retrato + semblanza ejecutiva (texto del brief). Secciones: Perfil, Liderazgo regional, Certificaciones (DCOM®, CCRE®), Trayectoria, Visión, Presencia internacional. JSON-LD `Person`.
- **Speaking**: temas + formatos (Keynote, Panel, Moderación, Workshop, Advisory, Entrevista) + CTA.
- **Eventos**: Próximos · Recientes · Internacionales (placeholders en `src/data/events.ts`).
- **Videos**: filtro por categoría (pills minimalistas), datos en `src/data/videos.ts` con `youtubeId`.
- **Insights**: grid con cards "Próximamente" + bloque newsletter.
- **Contacto**: formulario completo (Nombre, Empresa, Cargo, Email, Teléfono, País, Tipo de solicitud, Mensaje, checkbox de tratamiento de datos). Estado de envío exitoso simulado. Bloque comentado para pegar embed Brevo.

## 9. Datos editables

`src/data/`: `events.ts`, `videos.ts`, `insights.ts`, `topics.ts`, `certifications.ts` — arrays tipados.

## 10. Hosting estático Apache/HestiaCP

Configurar **prerender estático completo**:
- `vite.config.ts`: `prerender: { enabled: true, crawlLinks: true, routes: ['/', '/bio', '/speaking', '/eventos', '/videos', '/insights', '/contacto'] }`, preset estático.

Archivos:
- `public/.htaccess` con el bloque exacto del brief.
- `public/_redirects` con `/* /index.html 200`.
- `DEPLOY-HOSTING.md`:
  - `npm install`, `npm run build`
  - Si hay `dist/client/` → esa va a `public_html/`; si solo `dist/` → esa. Verificar `index.html` en raíz.
  - Ignorar `dist/server/`.
  - Subir incluyendo `.htaccess`.
  - Activar `mod_rewrite`, apuntar dominio a `public_html`.
  - Verificar refresh en `/bio` → 200.

## 11. Assets

- `Diseño_sin_título.svg` → `src/assets/logo-tll.svg`.
- `src/assets/edwin-portrait.jpg` (placeholder con comentario para foto profesional real).
- `src/assets/edwin-about.jpg` (placeholder para foto humana de Sobre Edwin).
- Sin logos de terceros, sin medios inventados.

## 12. SEO técnico

- `head()` único por ruta (title <60, description <160, og:*).
- Jerarquía semántica, alt text descriptivo, lazy loading, viewport responsive.
- JSON-LD `Person` en Bio (sameAs: LinkedIn, YouTube, Instagram).

## 13. Tipografía y tokens

- Display: **Montserrat** (700/800)
- Body: **Inter** (400/500)
- Tokens en `src/styles.css` (oklch): `--brand-purple`, `--brand-purple-deep`, `--brand-lime`, `--ink`, `--surface`, `--surface-soft`, `--surface-dark`, `--rule`, `--shadow-elegant`, `--shadow-glow-purple`, `--gradient-hero`.
- Utilidades: `.highlight` (resaltador lima inline), `.kicker` (etiqueta uppercase tracking lima).

---

### Exclusiones

- Sin Media Kit en menú.
- Sin HostDime, sin medios/logos/alianzas inventadas.
- Sin diseño totalmente oscuro: alternancia estricta blanco / gris claro / oscuro de impacto.
- Sin Cloudflare Workers / Wrangler en producción.
- Sin renders 3D, partículas, animaciones gamer ni espacios verticales excesivos.

### Orden de implementación

1. Tokens, fonts, utilidades (`.highlight`, `.kicker`, `Reveal`).
2. Layout: Header (con i18n + mobile menu + sticky CTA), Footer.
3. Home: Hero → Stat strip → Sobre Edwin → resto.
4. Páginas: Bio, Speaking, Eventos, Videos, Insights, Contacto.
5. Hosting: `.htaccess`, `_redirects`, `vite.config.ts` estático, `DEPLOY-HOSTING.md`.
