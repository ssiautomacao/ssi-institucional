// src/data/pages/validacao-seguranca.it.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-validazione-sicurezza",
    hero: {
        id: "hero-validazione",
        headline: "Validazione dei Sistemi di Comando (ISO 13849-1)",
        subtext: "Comprovazione tecnica (calcoli e test strutturati) del Livello di Performance (PLr) dei circuiti di sicurezza.",
        ctaPrimary: { label: "Richiedi Proposta Tecnica", href: "#contact" },
        ctaSecondary: { label: "Vedi Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1500-failsafe.webp",
        imageAlt: "PLC Fail-safe Siemens S7-1500 in quadro industriale"
    },
    painPoint: {
        id: "pain-validazione",
        title: "Il Problema che Risolviamo",
        body: "Progetti di adeguamento conclusi visivamente, ma senza la comprovazione tecnica che i circuiti raggiungano il livello di prestazione richiesto dalla norma. Questo crea un grave rischio di guasto pericoloso silenzioso nel sistema di controllo."
    },
    methodology: {
        id: "met-validazione",
        title: "Analisi e Test Strutturati",
        body: "Applicazione rigorosa della norma ISO 13849-1. Valutiamo l'architettura del SRP/CS, determiniamo parametri come MTTFd e DC, ed eseguiamo test funzionali e orientati ai guasti in campo.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-architecture.webp",
            alt: "Diagramma architettura GuardLogix",
            caption: "Analisi dell'architettura di rete sicura"
        }
    },
    deliverables: {
        id: "deliv-validazione",
        title: "Consegnabili Tracciabili",
        items: [
            { title: "Relazione con calcolo del Performance Level (PL)", codeRef: "PL_CALC" },
            { title: "Report dei test funzionali in campo", codeRef: "TEST_CAMPO" },
            { title: "Validazione software con verifica firme (CRC)", codeRef: "SOFT_CRC" },
            { title: "Certificato di Validazione Sicurezza con ART", codeRef: "LVS_ART" }
        ]
    },
    leadForm: {
        formId: "lead-validazione",
        title: "Richiedi la Validazione dei tuoi Sistemi",
        submitLabel: "Invia Richiesta",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_VALIDAZIONE_ISO13849",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Azienda", type: "text", required: true },
            { name: "email", label: "E-mail Aziendale", type: "email", required: true },
            { name: "phone", label: "Telefono", type: "tel", required: true },
            { name: "context", label: "Contesto (Architettura PLC / Relè)", type: "textarea", required: false }
        ]
    }
};
