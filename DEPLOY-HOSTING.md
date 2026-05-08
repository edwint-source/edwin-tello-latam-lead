# Despliegue estático en Apache / HestiaCP

Este proyecto se compila como una SPA estática. **No requiere Node, Wrangler ni Cloudflare Workers en producción.**

## 1. Generar el build

```bash
npm install
npm run build
```

Se generan dos carpetas:

- `dist/client/` → **lo único que necesitas subir al hosting.**
- `dist/server/` → ignorar (artefacto SSR no usado en hosting estático).

Verifica que exista `dist/client/index.html` (~45 KB, contiene el Home prerenderizado completo, head, meta tags, hero, etc.) y `dist/client/.htaccess`.

## 2. ¿Cómo sirve Apache la página inicial?

Cuando un visitante entra a `https://edwintello.com/`:

1. Apache busca el archivo por defecto en `public_html/` y encuentra **`index.html`**.
2. Ese `index.html` ya trae el HTML prerenderizado del Home (SEO, meta, contenido visible) + referencias a los assets en `/assets/*`.
3. Apache sirve los `.js` y `.css` desde `public_html/assets/`, y React hidrata la SPA.
4. Para rutas internas (`/bio`, `/speaking`, `/eventos`, etc.) el `.htaccess` reescribe cualquier URL que no sea un archivo real a `index.html`, y TanStack Router resuelve la ruta en el cliente.

Es decir: **sí existe `index.html` y Apache lo sirve directamente, sin Node.**

## 3. Subir a HestiaCP (`/home/tello/web/edwintello.com/public_html`)

### Opción A — SCP / SFTP

```bash
# Limpia el destino (cuidado: borra contenido previo)
ssh tello@SERVIDOR "rm -rf /home/tello/web/edwintello.com/public_html/*"

# Sube todo el contenido de dist/client/ (incluye .htaccess oculto)
scp -r dist/client/. tello@SERVIDOR:/home/tello/web/edwintello.com/public_html/
```

### Opción B — rsync (recomendado)

```bash
rsync -avz --delete dist/client/ tello@SERVIDOR:/home/tello/web/edwintello.com/public_html/
```

### Opción C — ZIP + File Manager de HestiaCP

```bash
cd dist/client && zip -r ../site.zip . .htaccess
```

Sube `site.zip` por el File Manager de HestiaCP a `public_html/` y descomprime ahí mismo.

## 4. Configuración requerida en Apache / HestiaCP

El `.htaccess` que se incluye necesita estos módulos habilitados (por defecto en HestiaCP):

- `mod_rewrite` → fallback SPA.
- `mod_headers` → cache de assets.
- `mod_mime` → MIME types correctos.

Y en el VirtualHost: `AllowOverride All` (ya viene así en plantillas estándar de HestiaCP). Si el `.htaccess` se ignora, edita `/etc/apache2/conf.d/*.conf` o el template del dominio para forzar `AllowOverride All`.

## 5. Verificación post-deploy

```bash
curl -I https://edwintello.com/                 # 200 OK, text/html
curl -I https://edwintello.com/assets/index-*.js  # 200 OK, application/javascript
curl -I https://edwintello.com/bio              # 200 OK (gracias al fallback)
```

En el navegador: refrescar `https://edwintello.com/eventos` debe cargar la página, no dar 404.

## 6. ¿Y `_redirects`?

Se incluye `public/_redirects` por compatibilidad con Netlify/Cloudflare Pages. Apache lo ignora — el fallback en Apache lo hace `.htaccess`. Puedes dejarlo o borrarlo, no afecta a HestiaCP.

## 7. Resumen

| Pregunta | Respuesta |
|---|---|
| ¿Genera `index.html` estático? | **Sí**, en `dist/client/index.html`. |
| ¿Necesita Node en producción? | **No.** |
| ¿Necesita Wrangler / Cloudflare? | **No.** |
| ¿Compatible con `public_html` de HestiaCP? | **Sí**, copiando `dist/client/*` + `.htaccess`. |
| ¿Las rutas internas funcionan al refrescar? | **Sí**, gracias al fallback del `.htaccess`. |