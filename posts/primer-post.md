---
title: "Mi Primer Post en Next.js con Markdown"
date: "2026-09-16"
description: "Aprende a construir un blog estático rápido y modular usando Next.js App Router, gray-matter y remark."
---

# Bienvenidos a mi blog

Este es el primer artículo generado estáticamente a partir de un archivo **Markdown**. Con este enfoque obtenemos un rendimiento excepcional, optimización SEO y facilidad de escritura.

## ¿Qué ventajas ofrece esta arquitectura?

- **Rendimiento estático**: Las páginas se pre-renderizan en el build.
- **Portabilidad**: Tus contenidos residen en archivos `.md` versionados en Git.
- **Flexibilidad**: Posibilidad de añadir estilos y componentes personalizados fácilmente.

## Ejemplo de código en JavaScript

A continuación, un ejemplo sencillo de cómo consumimos los datos:

```javascript
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPostsData();
  console.log(`Total de posts: ${posts.length}`);
}
```

## Próximos pasos

1. Crear más artículos en la carpeta `/posts`.
2. Personalizar los estilos globales.
3. Desplegar en plataformas como Vercel o Netlify.
