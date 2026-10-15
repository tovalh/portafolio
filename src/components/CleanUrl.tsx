'use client';
import { useEffect } from 'react';

// Quita de la barra de direcciones los parámetros de tracking que agregan
// LinkedIn, Instagram, Google, etc. (?trk=..., ?utm_source=..., ?fbclid=...)
// para que la URL quede limpia (toval.dev/) sin recargar la página.
const TRACKING = /^(utm_.*|fbclid|gclid|gbraid|wbraid|msclkid|igshid|igsh|trk|trkInfo|trackingId|lipi|li_fat_id|originalSubdomain|si|ref|mc_cid|mc_eid|_hsenc|_hsmi)$/i;

export default function CleanUrl() {
    useEffect(() => {
        const url = new URL(window.location.href);
        const keys = [...url.searchParams.keys()];
        const dirty = keys.filter((k) => TRACKING.test(k));
        if (dirty.length === 0) return;
        dirty.forEach((k) => url.searchParams.delete(k));
        window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    }, []);
    return null;
}
