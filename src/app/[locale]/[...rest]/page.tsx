import { notFound } from 'next/navigation';

// Catch-all: cualquier ruta bajo /es/* o /en/* que no matchee otra page.tsx
// cae aquí y dispara el not-found estilizado (../not-found.tsx).
// Combinado con la middleware de next-intl (que redirige rutas sin prefijo
// al defaultLocale), esto captura TODOS los 404s.
export default function CatchAllNotFound() {
    notFound();
}
