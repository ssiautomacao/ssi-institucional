// src/data/pages/maquinas-importadas.it.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-macchine-importate-it",
    hero: {
        id: "hero-importate",
        headline: "Consulenza per Macchine Importate",
        subtext: "Ispezioni pre-imbarco, validazione delle logiche e conformità normativa con supporto tecnico trilingue (EN, IT, ES).",
        ctaPrimary: { label: "Consulta Consulenza Internazionale", href: "#contact" },
        ctaSecondary: { label: "Vedi Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "Linea di produzione importata in fase di nazionalizzazione"
    },
    painPoint: {
        id: "pain-importate",
        title: "Il Problema che Risolviamo",
        body: "Blocchi doganali, interdizioni all'avvio dell'impianto e inattività del capitale generati dall'incompatibilità del macchinario straniero con la rigorosa legislazione brasiliana (NR-12)."
    },
    methodology: {
        id: "met-importate",
        title: "Ingegneria Transfrontaliera",
        body: "Operiamo in collegamento diretto con il produttore all'origine. Eseguiamo ispezioni tecniche prima dell'imbarco, validiamo i software di sicurezza (es: Siemens TIA Portal) e coordiniamo l'adeguamento normativo.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1200-failsafe.webp",
            alt: "Validazione logiche Fail-safe",
            caption: "Audit dell'architettura di sicurezza all'origine"
        }
    },
    deliverables: {
        id: "deliv-importate",
        title: "Consegnabili Tracciabili",
        items: [
            { title: "Ispezioni Tecniche Pre-Imbarco", codeRef: "INSP_ORIGEM" },
            { title: "Report di Conformità Multilingue (EN, IT, ES)", codeRef: "LAUDO_MULTI" },
            { title: "Validazione documentata Software/PLC di sicurezza", codeRef: "VAL_SOFT" },
            { title: "Adeguamento normativo Manuali e Interfacce (HMI)", codeRef: "ADEQ_DOC" }
        ]
    },
    leadForm: {
        formId: "lead-importate",
        title: "Nazionalizza i tuoi Asset in Sicurezza",
        submitLabel: "Richiedi Consulenza",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_IMPORTADAS",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Azienda", type: "text", required: true },
            { name: "email", label: "E-mail Aziendale", type: "email", required: true },
            { name: "phone", label: "Telefono", type: "tel", required: true },
            { name: "context", label: "Origine dell'Attrezzatura (Paese / Produttore)", type: "textarea", required: false }
        ]
    }
};
