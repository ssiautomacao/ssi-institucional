// src/i18n/payloadLoader.ts

/**
 * Payload Loader Motor Central (DEV-CORE)
 * Responsável por carregar payloads dinâmicos com suporte a multi-level fallback.
 * Utiliza o import.meta.glob do Vite para discovery automático de arquivos.
 */

// O Vite varre a pasta de payloads e gera um mapa de caminhos para módulos.
const allPayloads = import.meta.glob('../data/pages/*.ts', { eager: true });

/**
 * Normaliza o locale para garantir match com o sistema de arquivos (Case-Sensitivity).
 * 'zh-cn' -> 'zh-CN', outros -> lowercase.
 */
function normalizeLocale(locale: string): string {
    if (!locale) return 'pt';
    const low = locale.toLowerCase();
    if (low === 'zh-cn') return 'zh-CN';
    return low;
}

/**
 * Retorna o payload de uma página baseado no slug e no idioma.
 * @param slug Nome base do arquivo (ex: 'apreciacao-risco')
 * @param currentLang Idioma atual (ex: 'en', 'zh-CN')
 */
export function getPagePayload(slug: string, currentLang: string) {
    const normalized = normalizeLocale(currentLang);

    // 1. Lógica de Fallback (Se não for PT ou EN, o fallback estratégico é EN)
    const defaultFallback = (normalized === 'pt' || normalized === 'en') ? normalized : 'en';

    // 2. Caminhos candidatos
    const idealPath = `../data/pages/${slug}.${normalized}.ts`;
    const preferredFallbackPath = `../data/pages/${slug}.${defaultFallback}.ts`;
    const absoluteFallbackPath = `../data/pages/${slug}.pt.ts`;

    // 3. Resolução do módulo
    const moduleToLoad =
        allPayloads[idealPath] ||
        allPayloads[preferredFallbackPath] ||
        allPayloads[absoluteFallbackPath];

    if (!moduleToLoad) {
        if (import.meta.env.DEV) {
            console.warn(`[DEV-CORE WARNING] Payload not found: "${slug}" for locale "${normalized}" (URL was "${currentLang}")`);
            console.warn(`Available keys in index:`, Object.keys(allPayloads).filter(k => k.includes(slug)));
        }
        throw new Error(`[DEV-CORE] Payload não encontrado para o slug: ${slug}`);
    }

    return Object.values(moduleToLoad)[0] as any;
}
