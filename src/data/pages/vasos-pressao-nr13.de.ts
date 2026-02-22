import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-druckbehaelter",
    hero: {
        id: "hero-nr13",
        headline: "NR-13 Integrität: Druckbehälter & Kessel",
        subtext: "Zerstörungsfreie mechanische Prüfungen, Rekonstruktion von Data Books und PMTA-Berechnungen für die vollständige Einhaltung der NR-13-Normen.",
        cta: "Maschinenbauingenieur konsultieren",
        image: "/ssi-institucional/assets/services/nr13-hero.jpg"
    },
    seo: {
        title: "NR-13 Inspektion von Druckbehältern & Kesseln | SSI Automacao",
        description: "Vollständige Compliance-Inspektionen für Druckbehälter und Kessel. Hydropfprüfungen, Wanddickenmessung und PMTA-Berechnung."
    },
    painPoints: {
        title: "Integritätsrisiken",
        items: [
            {
                id: "pp-explosion",
                title: "Katastrophales Versagen",
                description: "Explosionsgefahr durch fehlende regelmäßige Inspektionen oder Materialermüdung."
            },
            {
                id: "pp-legal",
                title: "Anlagenstillstand",
                description: "Haftungsrisiken und Betriebsblockaden durch abgelaufene technische Zertifikate."
            }
        ]
    },
    methodology: {
        title: "Inspektionsprotokoll",
        steps: [
            {
                id: "m-ultrasound",
                title: "Wanddickenmessung",
                description: "Ultraschallprüfung zur Identifizierung von Korrosion und Schichtdickenverlust."
            },
            {
                id: "m-calc",
                title: "PMTA-Berechnung",
                description: "Bestimmung des maximal zulässigen Betriebsdrucks basierend auf aktuellen Materialdaten."
            }
        ]
    },
    deliverables: {
        title: "Compliance-Berichte",
        items: [
            {
                id: "d-book",
                title: "Einheiten-Data Book",
                description: "Vollständige technische Historie und Aufzeichnungen für jedes geprüfte Asset."
            },
            {
                id: "d-art",
                title: "Technische Verantwortung (ART)",
                description: "Offizielle Zertifizierung der Inspektionsauthentizität und strukturellen Sicherheit."
            }
        ]
    },
    leadForm: {
        id: "form-nr13",
        title: "NR-13 Inspektion anfragen",
        subtitle: "Halten Sie Ihre Anlage sicher und gesetzeskonform.",
        fields: [
            { id: "company", label: "Unternehmen", type: "text", placeholder: "Firmenname", required: true },
            { id: "vessels", label: "Anzahl der Behälter", type: "text", placeholder: "z.B. 10 Behälter", required: false }
        ],
        submitLabel: "Jetzt planen"
    }
};
