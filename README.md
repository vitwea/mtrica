# Mtrica — web

Consultora de Business Intelligence. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Desplegar

Proyecto listo para desplegar en [Vercel](https://vercel.com): conecta el repositorio y Vercel detecta Next.js automáticamente. Configura el dominio `mtrica.com` / `mtrica.es` desde el panel de Vercel una vez esté registrado.

## Estado del desarrollo (Fase 4)

Se avanza página por página, sin empezar la siguiente hasta cerrar la anterior (ver documento de Fase 4).

- [x] Estructura base del proyecto (Tailwind con los tokens de la Fase 3, layout, Nav, Footer)
- [x] Página **Inicio** (`/`)
- [ ] Página **Servicios** (`/servicios`)
- [ ] Página **Citas** (`/citas`)
- [ ] Página **Nosotros** (`/nosotros`)
- [ ] Página **Contacto** (`/contacto`)
- [ ] Página **Proyectos** (`/proyectos` + `/proyectos/[slug]`) — sin enlazar en el menú hasta tener 3 casos

## Estructura

```
app/
  layout.tsx      Layout raíz (fuente Inter, Nav, Footer, metadata)
  page.tsx         Página de Inicio
  globals.css       Estilos base
components/
  Container.tsx     Ancho máximo reutilizable
  Button.tsx         3 variantes: primary / secondary / text (Fase 3, sección 4)
  ServiceCard.tsx     Tarjeta de servicio (Fase 3, sección 5)
  ProjectCard.tsx     Tarjeta de proyecto (Fase 3, sección 5)
  Nav.tsx             Navegación principal (Fase 2, sección 1)
  Footer.tsx           Footer (Fase 2, sección 3)
tailwind.config.ts      Tokens de color, tipografía y espaciado 1:1 con la Fase 3
```
