// src/data/pages/lockout-tagout-loto.it.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-loto-it",
    hero: {
        id: "hero-loto",
        headline: "Programma di Blocco e Energia Zero (LOTO)",
        subtext: "Mappatura delle energie pericolose e sviluppo di procedure strutturate di blocco (OSHA 1910.147, NR-10, NR-12).",
        ctaPrimary: { label: "Richiedi Mappatura LOTO", href: "#contact" },
        ctaSecondary: { label: "Vedi Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-control-panel.webp",
        imageAlt: "Quadro di controllo industriale predisposto per il blocco"
    },
    painPoint: {
        id: "pain-loto",
        title: "Il Problema che Risolviamo",
        body: "Gravi incidenti causati dalla rienergizzazione inaspettata delle macchine durante la manutenzione. L'assenza di una procedura rigorosa di Energia Zero genera pesanti responsabilità legali e paralisi operative."
    },
    methodology: {
        id: "met-loto",
        title: "Mappatura e Validazione dei Blocchi",
        body: "Identificazione in campo di tutte le fonti di energia (elettrica, pneumatica, idraulica, termica e potenziale). Sviluppiamo procedure visive passo-passo per il blocco e il test di verifica (Tryout).",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-door-lock-keyence.webp",
            alt: "Dispositivo di interblocco di sicurezza",
            caption: "Mappatura dei punti critici di blocco"
        }
    },
    deliverables: {
        id: "deliv-loto",
        title: "Consegnabili Tracciabili",
        items: [
            { title: "Mappatura documentata delle fonti di energia", codeRef: "MAP_LOTO" },
            { title: "Procedure visive di blocco (Passo-passo)", codeRef: "PROC_LOTO" },
            { title: "Specifica dei dispositivi (Lucchetti, Staffe)", codeRef: "SPEC_HW" },
            { title: "Report di validazione dell'efficacia", codeRef: "VAL_EFICACIA" }
        ]
    },
    leadForm: {
        formId: "lead-loto",
        title: "Implementa il Programma LOTO nel tuo Impianto",
        submitLabel: "Richiedi Progetto LOTO",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_LOTO",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Azienda", type: "text", required: true },
            { name: "email", label: "E-mail Aziendale", type: "email", required: true },
            { name: "phone", label: "Telefono", type: "tel", required: true },
            { name: "context", label: "Ambito (Numero di macchine/linee)", type: "textarea", required: false }
        ]
    }
};
