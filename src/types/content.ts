// src/types/content.ts

export interface CtaLink {
    label: string;
    href: string;
    trackId?: string;
}

export interface HeroProps {
    id: string;
    headline: string;
    subtext: string;
    ctaPrimary: CtaLink;
    ctaSecondary?: CtaLink;
    videoSrc?: string;
    imageSrc?: string;
    imageAlt: string;
}

export interface PillarCard {
    title: string;
    copy: string;
    imageSrc: string;
    link: string;
}

export interface SolutionsGridProps {
    id: string;
    pillars: PillarCard[];
}

export interface LeadFormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    required: boolean;
    options?: string[];
}

export interface DynamicLeadFormProps {
    formId: string;
    title: string;
    fields: LeadFormField[];
    submitLabel: string;
    endpoint: string;
    hiddenIntentKey: string;
}

// ─────────────────────────────────────────────────────────────
// Sprint 02 — Service Pages
// ─────────────────────────────────────────────────────────────

export interface PainPointBlock {
    id: string;
    title: string;
    body: string;
}

export interface MethodologyBlock {
    id: string;
    title: string;
    body: string;
    evidenceImage?: { src: string; alt: string; caption?: string };
}

export interface DeliverablesBlock {
    id: string;
    title: string;
    items: { title: string; codeRef?: string }[];
    evidenceImage?: { src: string; alt: string; caption?: string };
}

export interface ServicePagePayload {
    id: string;
    hero: HeroProps;
    painPoint: PainPointBlock;
    methodology: MethodologyBlock;
    deliverables: DeliverablesBlock;
    leadForm: DynamicLeadFormProps;
    // Optional media blocks — pages without these will not break
    technicalSpecs?: TechnicalSpecsBlockProps;
    evidenceGallery?: EvidenceGalleryProps;
}

// ─────────────────────────────────────────────────────────────
// Sprint 03 — Media & Spec Blocks
// ─────────────────────────────────────────────────────────────

export interface EvidenceItem {
    src: string;
    alt: string;
    caption?: string;
}

export interface EvidenceGalleryProps {
    title: string;
    items: EvidenceItem[];
}

export interface TechSpecRow {
    label: string;
    value: string | number;
    unit?: string;
}

export interface TechnicalSpecsBlockProps {
    id: string;
    title: string;
    /** Zero calculation logic — renders JSON from DEV-CORE output only */
    rows: TechSpecRow[];
}

// ─────────────────────────────────────────────────────────────
// Sprint 06 — Institutional Domain
// ─────────────────────────────────────────────────────────────

export interface ManifestoBlock {
    title: string;
    body: string;
    mission?: string;
}

export interface JointVentureBlock {
    title: string;
    body: string;
    capabilities: string[];
    evidenceImage?: EvidenceItem;
}

export interface InstitutionalPayload {
    id: string;
    hero: HeroProps;
    manifesto: ManifestoBlock;
    jointVenture: JointVentureBlock;
    credentials: DeliverablesBlock; // Reuses deliverables block for certifications
}



export interface HubPayload {
    id: string;
    seo: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
}
