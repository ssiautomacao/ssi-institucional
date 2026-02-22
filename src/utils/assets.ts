// src/utils/assets.ts
// DEV-CORE Governance Rule: data files store CLEAN paths (/assets/images/...)
// This helper prepends the Astro BASE_URL at render time, keeping data layer portable.

/**
 * Resolves an asset path relative to the Astro BASE_URL.
 * If the path already includes the base (legacy Sprint 02-05 data files), it is returned as-is.
 * New data files (Sprint 06+) should use clean paths like "/assets/images/foo.webp".
 *
 * @param src - The asset path from a data payload
 * @param base - Astro's import.meta.env.BASE_URL (e.g. "/ssi-institucional/")
 * @returns Full URL-safe path for use in <img src> or <video src>
 */
export function resolveAsset(src: string, base: string): string {
    if (!src) return src;

    // Normalize the base (ensure trailing slash, no leading double-slash)
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;

    // If already includes the base (legacy Sprint 02-05 files like "/ssi-institucional/assets/...")
    if (src.startsWith(normalizedBase) || src.startsWith(base.replace(/\/$/, ''))) {
        return src;
    }

    // Clean path ("/assets/...") — prepend BASE_URL
    // Strip leading slash from src before joining to avoid double-slash
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `${normalizedBase}${cleanSrc}`;
}
