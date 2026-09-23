# Franco Cortés — Portafolio

Sitio personal estático publicado en [lightdawn2.github.io](https://lightdawn2.github.io/). Proyectos, experiencia profesional, herramientas, formación y bitácora de evolución.

## Desarrollo

Node.js 22 o posterior. El sitio no requiere dependencias para construirse ni ejecutarse.

```sh
npm run build
npm run check
npm run dev
```

Vista local: `http://127.0.0.1:4173`. `index.html` es el resultado generado y se versiona para GitHub Pages. No editarlo directamente.

## Actualizar el contenido

- `content/projects.json`: proyectos actuales, estado, aportes, tecnologías, fuente y bitácora pública.
- `content/profile.json`: experiencia, formación y herramientas.
- `content/legacy.json`: cuatro proyectos anteriores y diez cursos preservados.
- `docs/BITACORA.md`: historial de cambios del portafolio y plantilla de próximo registro.
- `docs/FUENTES-Y-PENDIENTES.md`: fuentes, límites de las afirmaciones y confirmaciones pendientes.
- `docs/REVISIONES.md`: commits consultados en la revisión inicial.

Después de editar el contenido, ejecutar `npm run build` y `npm run check`. Actualizar `updated` cuando se revisen los estados. Conservar las entradas históricas: una migración o un prototipo archivado sigue siendo parte de la trayectoria.

### Registrar actividad de los repositorios locales

Crear `.local/sources.json` con una lista de objetos `name` y `path` (ruta absoluta al repositorio). Esta máquina ya tiene configurados los seis repositorios consultados.

```sh
npm run history:snapshot
```

Guarda revisión, rama, cambios pendientes y últimos veinte commits por repositorio en `.local/snapshots/`. Sólo lee Git. Los registros son privados, quedan excluidos de Git y **no publican contenido automáticamente**. Revisarlos y resumir los hitos relevantes en las fichas y la bitácora. No hay tarea programada.

## Verificación en navegador

```sh
npm ci
# Con npm run dev activo en otra terminal:
node scripts/verify-browser.mjs
```

Usa Microsoft Edge instalado, Playwright y axe. Verifica filtros, enlaces profundos, detalles por teclado, funcionamiento sin JavaScript, ausencia de desbordamiento y reglas WCAG automatizables a 1440, 390 y 320 px. Capturas y resultados quedan en `.impeccable/review/`, excluido de Git. La prueba automatizada no sustituye la revisión visual.

## Publicación

GitHub Pages está configurado desde la raíz de `main`. Construir y validar antes de enviar los cambios; el push a `main` publica el HTML versionado. `.nojekyll` evita procesamiento adicional.

Las fuentes Barlow Condensed y Source Sans 3 están alojadas localmente; sus licencias OFL se incluyen en `assets/fonts/`. Los esquemas son HTML/SVG originales y describen arquitectura y variables, sin simular datos reales ni pantallas productivas.
