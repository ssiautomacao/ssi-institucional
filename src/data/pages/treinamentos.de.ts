import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-schulung",
    hero: {
        id: "hero-training",
        headline: "Technische Schulung & Weiterbildung",
        subtext: "In-Company-Schulungen für Bediener, fortgeschrittene Programme für Sicherheitstechnik und Vorbereitungskurse. Offizielle Zertifizierung und Expertenberatung.",
        cta: "Schulungsangebot anfordern",
        image: "/ssi-institucional/assets/services/training-hero.jpg"
    },
    seo: {
        title: "Technische Schulungen & Sicherheitstechnik Ausbildung | SSI Automacao",
        description: "Spezialisierte Schulungen im Bereich Maschinensicherheitstechnik, Bedienerausbildung und fortgeschrittene technische Zertifikate."
    },
    painPoints: {
        title: "Der menschliche Faktor",
        items: [
            {
                id: "pp-behavior",
                title: "Unsicheres Verhalten",
                description: "Mangelndes Verständnis von Sicherheitssystemen führt zur Umgehung von Schutzvorrichtungen."
            },
            {
                id: "pp-skills",
                title: "Technische Qualifikationslücken",
                description: "Instandhaltungs- und Ingenieurteams, die Herausforderungen mit neuesten Sicherheitstechnologien haben."
            }
        ]
    },
    methodology: {
        title: "Lernpfade",
        steps: [
            {
                id: "m-theory",
                title: "Theoretische Grundlagen",
                description: "Eingehendes Studium nationaler und internationaler Sicherheitsnormen."
            },
            {
                id: "m-hands-on",
                title: "Praktische Anwendung",
                description: "Praktische Übungen an Sicherheitskomponenten und realen Industrieszenarien."
            }
        ]
    },
    deliverables: {
        title: "Qualifizierte Talente",
        items: [
            {
                id: "d-cert",
                title: "Offizielle Zertifizierung",
                description: "Nachweise für die gesetzliche Konformität und Qualifikationsprüfung."
            },
            {
                id: "d-manuals",
                title: "Technische Unterlagen",
                description: "Umfassende Leitfäden und Handbücher als fortlaufendes Referenzmaterial."
            }
        ]
    },
    leadForm: {
        id: "form-training",
        title: "Schulung für Ihr Team planen",
        subtitle: "Stärken Sie Ihre Belegschaft durch Expertenwissen.",
        fields: [
            { id: "company", label: "Unternehmen", type: "text", placeholder: "Firmenname", required: true },
            { id: "staff", label: "Anzahl der Teilnehmer", type: "text", placeholder: "z.B. 15 Personen", required: false }
        ],
        submitLabel: "Anfrage senden"
    }
};
