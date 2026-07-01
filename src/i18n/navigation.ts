import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Wrappers de Next que respetan el locale actual.
// Usar Link/useRouter/usePathname desde aquí en vez de next/navigation.
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
