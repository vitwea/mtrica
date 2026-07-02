# Cambios en la home — Fase 4 (rediseño orientado a conversión)

## Archivos incluidos
- `components/Hero.tsx` — reemplaza el actual. Quita la dependencia de `/public/hero.jpg`.
- `components/Testimonial.tsx` — componente nuevo.
- `app/page.tsx` — reemplaza el actual. Reordena las secciones e incorpora
  `ProcessSteps` y `Testimonial`.

## Cómo aplicarlos
1. Copia los 3 archivos a las mismas rutas dentro de tu repo (sobrescribiendo
   `components/Hero.tsx` y `app/page.tsx`).
2. `npm run dev` y revisa `/` en local.
3. Si ya no usas `public/hero.jpg` en ningún otro sitio, puedes borrarlo.

## Pendiente antes de publicar (contenido real, no código)
- Sustituir el testimonio de ejemplo por uno real (aunque sea de un cliente
  piloto o beta tester) o quitar la sección hasta tenerlo.
- Las cifras del hero (`+12 pymes`, `+300h ahorradas`) son ilustrativas —
  cámbialas por datos reales o quítalas si aún no las tienes.
- Cuando tengas una captura real de un dashboard (Power BI), sustituye el
  icono de `ProjectCard` por la imagen real — es el cambio visual con más
  impacto en credibilidad pendiente.

## Siguientes pasos sugeridos (fuera del alcance de este cambio)
- Añadir `metadata` con Open Graph e imagen social en `app/layout.tsx` para
  mejorar el SEO al compartir enlaces.
- Marcar el testimonio y el caso de éxito con datos estructurados
  (`schema.org/Review`, `schema.org/CaseStudy`) cuando el contenido sea real.
- Optimizar `next/image` para las capturas de dashboards en cuanto existan
  (usar `sizes` y `priority` solo en la primera imagen visible).
