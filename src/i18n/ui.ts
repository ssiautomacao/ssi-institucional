// src/i18n/ui.ts
// SSI Automação — UI String Dictionary (Phase 1)
// Contains only fixed interface strings (nav, buttons, labels).
// Content payloads (service pages) are translated separately in Phase 2.

export const languages = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
    it: 'Italiano',
    de: 'Deutsch',
    'zh-CN': '中文',
} as const;

export const defaultLang = 'pt' as const;

export type SupportedLang = keyof typeof languages;

// ─────────────────────────────────────────────────────────────
// UI String Dictionary
// Only add keys that exist in 'pt' (the canonical source).
// Incomplete translations fall back to 'pt' via useTranslations().
// ─────────────────────────────────────────────────────────────
export const ui = {
    pt: {
        'nav.home': 'Home',
        'nav.services': 'Serviços',
        'nav.about': 'Sobre Nós',
        'nav.contact': 'Contato',
        'cta.specialist': 'Falar com Especialista',
        'cta.request': 'Solicitar Proposta Técnica',
        'form.submit': 'Enviar Solicitação',
        'form.sending': 'Enviando...',
        'form.success': 'Solicitação recebida! Entraremos em contato em breve.',
        'form.error': 'Erro ao enviar. Tente pelo WhatsApp: (11) 94454-6380',
        'footer.rights': 'Todos os direitos reservados.',
        'footer.contact': 'Contato Corporativo',
        'footer.links': 'Acesso Rápido',
        'footer.updated': 'Atualizado em',
        'footer.brand': 'Engenharia Consultiva',
        'whatsapp.label': 'Suporte de Engenharia',
        'whatsapp.cta': 'Solicitar Orçamento',
        'whatsapp.msg': 'Olá! Gostaria de falar com a equipe de engenharia da SSI sobre os vossos serviços.',
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'cta.specialist': 'Talk to a Specialist',
        'cta.request': 'Request Technical Proposal',
        'form.submit': 'Send Request',
        'form.sending': 'Sending...',
        'form.success': 'Request received! We will contact you shortly.',
        'form.error': 'Failed to send. Try via WhatsApp: +55 11 94454-6380',
        'footer.rights': 'All rights reserved.',
        'footer.contact': 'Corporate Contact',
        'footer.links': 'Quick Links',
        'footer.updated': 'Updated at',
        'footer.brand': 'Consulting Engineering',
        'whatsapp.label': 'Engineering Support',
        'whatsapp.cta': 'Request Quote',
        'whatsapp.msg': 'Hello! I would like to speak with the SSI engineering team about your services.',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Sobre Nosotros',
        'nav.contact': 'Contacto',
        'cta.specialist': 'Contactar Especialista',
        'cta.request': 'Solicitar Propuesta Técnica',
        'form.submit': 'Enviar Solicitud',
        'form.sending': 'Enviando...',
        'form.success': 'Solicitud recibida. Un especialista se pondrá en contacto pronto.',
        'form.error': 'Hubo un error de comunicación. Inténtelo de nuevo.',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.contact': 'Contacto Corporativo',
        'footer.links': 'Acceso Rápido',
        'footer.updated': 'Actualizado en',
        'footer.brand': 'Ingeniería Consultiva',
        'whatsapp.label': 'Soporte de Ingeniería',
        'whatsapp.cta': 'Solicitar Presupuesto',
        'whatsapp.msg': '¡Hola! Me gustaría hablar con el equipo de ingeniería de SSI sobre sus servicios.',
    },
    de: {
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        'cta.specialist': 'Fachgespräch vereinbaren',
        'cta.request': 'Angebot anfordern',
        'form.submit': 'Anfrage senden',
        'form.sending': 'Wird gesendet...',
        'form.success': 'Anfrage erhalten! Wir werden Sie in Kürze kontaktieren.',
        'form.error': 'Fehler beim Senden. Versuchen Sie es über WhatsApp: +55 11 94454-6380',
        'footer.rights': 'Alle Rechte vorbehalten.',
        'footer.contact': 'Unternehmen Kontakt',
        'footer.links': 'Schnellzugriff',
        'footer.updated': 'Aktualisiert am',
        'footer.brand': 'Beratende Ingenieure',
        'whatsapp.label': 'Technischer Support',
        'whatsapp.cta': 'Angebot anfordern',
        'whatsapp.msg': 'Hallo! Ich möchte mit dem SSI-Engineering-Team über Ihre Dienstleistungen sprechen.',
    },
    it: {
        'nav.home': 'Home',
        'nav.services': 'Servizi',
        'nav.about': 'Chi Siamo',
        'nav.contact': 'Contatto',
        'cta.specialist': 'Parla con uno Specialista',
        'cta.request': 'Richiedi Proposta Tecnica',
        'form.submit': 'Invia Richiesta',
        'form.sending': 'Invio in corso...',
        'form.success': 'Richiesta ricevuta! Vi contatteremo al più presto.',
        'form.error': 'Errore durante l\'invio. Riprova via WhatsApp: +55 11 94454-6380',
        'footer.rights': 'Tutti i diritti riservati.',
        'footer.contact': 'Contatto Aziendale',
        'footer.links': 'Link Rapidi',
        'footer.updated': 'Aggiornato il',
        'footer.brand': 'Ingegneria di Consulenza',
        'whatsapp.label': 'Supporto Tecnico',
        'whatsapp.cta': 'Richiedi Preventivo',
        'whatsapp.msg': 'Ciao! Vorrei parlare con il team di ingegneria SSI dei vostri servizi.',
    },
    'zh-CN': {
        'nav.home': '首页',
        'nav.services': '服务项目',
        'nav.about': '关于我们',
        'nav.contact': '联系我们',
        'cta.specialist': '向专家咨询',
        'cta.request': '索取技术方案',
        'form.submit': '提交申请',
        'form.sending': '正在发送...',
        'form.success': '申请已收到！我们将尽快与您联系。',
        'form.error': '发送失败。请通过 WhatsApp 联系：+55 11 94454-6380',
        'footer.rights': '保留所有权利。',
        'footer.contact': '企业联系方式',
        'footer.links': '快速链接',
        'footer.updated': '更新于',
        'footer.brand': '咨询工程服务',
        'whatsapp.label': '工程支持',
        'whatsapp.cta': '索取报价',
        'whatsapp.msg': '您好！我想咨询 SSI 工程团队关于贵司的服务项目。',
    },
} as const;

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/**
 * Extracts the language code from an Astro URL pathname.
 * Handles: /pt/..., /en/..., /zh-CN/...
 * Falls back to defaultLang if not found.
 */
export function getLangFromUrl(url: URL): SupportedLang {
    const segments = url.pathname.split('/').filter(Boolean);
    for (const seg of segments) {
        if (seg in languages) return seg as SupportedLang;
    }
    return defaultLang;
}

/**
 * Returns a translate function `t(key)` for the given language.
 * Falls back to PT (defaultLang) if the key is missing in the target lang.
 */
export function useTranslations(lang: SupportedLang) {
    return function t(key: keyof typeof ui[typeof defaultLang]): string {
        const langDict = ui[lang] as Record<string, string>;
        const ptDict = ui[defaultLang] as Record<string, string>;
        return langDict[key] ?? ptDict[key] ?? key;
    };
}
