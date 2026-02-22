// src/data/pages/apreciacao-risco.de.ts
import type { ServicePagePayload } from "../../types/content";

export const apreciacaoRiscoPageDE: ServicePagePayload = {
    id: "svc-apreciacao-risco-de",
    hero: {
        id: "hero-lar-de",
        headline: "Risikobeurteilung (LAR) – ISO 12100",
        subtext: "Normative Diagnose und Kartierung mechanischer und elektrischer Gefährdungen als solides Fundament für den gesamten Sicherheitslebenszyklus.",
        ctaPrimary: { label: "Beurteilung anfordern", href: "#contact" },
        ctaSecondary: { label: "Unsere Methodik", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "Industrielle Roboterzelle bei der Risikobeurteilung"
    },
    painPoint: {
        id: "pain-lar-de",
        title: "Das Problem, das wir lösen",
        body: "Maschinen, die mit verborgenen Gefahren arbeiten, ohne kartierte Risikozonen und ohne technische Priorisierung. Ohne diese vorläufige Diagnose ist jede physische Schutzmaßnahme unvollständig, nicht normkonform und ohne technische Rückverfolgbarkeit."
    },
    methodology: {
        id: "met-lar-de",
        title: "HRN-Matrix & Risikograph",
        body: "Wir wenden die HRN-Methodik (Hazard Rating Number) und den Risikographen nach ISO 13849-1 direkt über unsere proprietäre ZEUS Analytics-Software an. Dies garantiert absolute Auditierbarkeit und standardisiert die Sicherheitsparameter in Ihrem gesamten Werk.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/zeus/zeus-1.webp",
            alt: "Schnittstelle der ZEUS Risikobeurteilungssoftware",
            caption: "Proprietäre Software zur technischen Rückverfolgbarkeit"
        }
    },
    deliverables: {
        id: "deliv-lar-de",
        title: "Rückverfolgbare Ergebnisse",
        items: [
            { title: "Technischer Bericht mit HRN-Index-Kartierung", codeRef: "REP_HRN_DE" },
            { title: "Fotografische Erfassung der Gefahrenzonen", codeRef: "MAP_ZONES_DE" },
            { title: "Spezifikation des erforderlichen Performance Levels (PLr)", codeRef: "SPEC_PLR_DE" },
            { title: "Korrekturmaßnahmenplan (CAPEX-Schätzung)", codeRef: "CAPEX_PLAN_DE" }
        ]
    },
    leadForm: {
        formId: "lead-lar-de", title: "Fachgespräch vereinbaren", submitLabel: "Anfrage senden", endpoint: "/api/v1/public/leads", hiddenIntentKey: "LEAD_LAR_DE",
        fields: [{ name: "name", label: "Vollständiger Name", type: "text", required: true }, { name: "company", label: "Unternehmen", type: "text", required: true }, { name: "email", label: "Geschäftliche E-Mail", type: "email", required: true }]
    }
};
