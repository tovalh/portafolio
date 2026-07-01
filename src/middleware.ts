import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Aplica el middleware a todas las rutas EXCEPTO api, _next, _vercel y archivos con extensión
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
