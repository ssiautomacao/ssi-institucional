import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-elektrische-sicherheit",
    hero: {
        id: "hero-nr10",
        headline: "Elektrotechnik & Sicherheit (NR-10)",
        subtext: "Strukturierte Inspektionen, PIE (Dokumentation elektrischer Anlagen) und Störlichtbogen-Studien (Arc Flash) nach internationalen Standards.",
        cta: "Elektroingenieur konsultieren",
        image: "/ssi-institucional/assets/services/nr10-hero.jpg"
    },
    seo: {
        title: "Elektrosicherheit & Störlichtbogen-Studien (Arc Flash) | SSI Automacao",
        description: "Technische Inspektionen, PIE-Entwicklung und wissenschaftliche Störlichtbogen-Studien. Sicherheit für Ihre elektrischen Anlagen."
    },
    painPoints: {
        title: "Management elektrischer Risiken",
        items: [
            {
                id: "pp-risk-high",
                title: "Störlichtbogenrisiko",
                description: "Fehlende Berechnungen der Energielevel und Sicherheitsabstände."
            },
            {
                id: "pp-legacy",
                title: "Veraltete Infrastruktur",
                description: "Schaltschränke und Schaltpläne, die nicht dem Ist-Zustand entsprechen."
            }
        ]
    },
    methodology: {
        title: "Unser technischer Ansatz",
        steps: [
            {
                id: "m-diagnosis",
                title: "Diagnose-Audit",
                description: "Vor-Ort-Aufnahme aller elektrischen Assets und Schaltschrankzustände."
            },
            {
                id: "m-studies",
                title: "Computersimulationen",
                description: "Selektivitätsprüfung und Koordination mittels spezialisierter Engineering-Software."
            }
        ]
    },
    deliverables: {
        title: "Technische Dokumentation",
        items: [
            {
                id: "d-pie",
                title: "PIE-Prontuário",
                description: "Vollständige Dokumentation entsprechend der gesetzlichen Anforderungen."
            },
            {
                id: "d-labels",
                title: "Arc Flash Markierung",
                description: "Dauerhafte Warnschilder mit Angabe der PSA-Anforderungen und Risikostufen."
            }
        ]
    },
    leadForm: {
        id: "form-nr10",
        title: "Audit für Elektrosicherheit anfragen",
        subtitle: "Vereinbaren Sie einen Vor-Ort-Termin mit unseren Experten.",
        fields: [
            { id: "company", label: "Unternehmen", type: "text", placeholder: "Firmenname", required: true },
            { id: "panels", label: "Geschätzte Schaltschrankanzahl", type: "text", placeholder: "z.B. 50", required: false }
        ],
        submitLabel: "Anfrage senden"
    }
};
