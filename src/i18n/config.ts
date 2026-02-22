// src/i18n/config.ts
// SSI i18n Configuration — Single Source of Truth
// Adding a new language only requires updating this array.

export const LOCALES = ['pt', 'en', 'es', 'de', 'it', 'zh-CN'] as const;

export type SupportedLocale = typeof LOCALES[number];
