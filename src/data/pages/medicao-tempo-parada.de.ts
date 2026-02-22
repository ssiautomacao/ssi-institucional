import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-nachlaufmessung",
    hero: {
        id: "hero-mtp",
        headline: "Maschinen-Nachlaufmessung (ISO 13855)",
        subtext: "Trägheitsprüfungen mit kalibrierter Messtechnik (HHB Safetyman DT3) zur geometrischen Validierung von Sicherheitsabständen.",
        cta: "Nachlaufmessung anfragen",
        image: "/ssi-institucional/assets/services/mtp-hero.jpg"
    },
    seo: {
        title: "Maschinen-Nachlaufmessung & ISO 13855 Validierung | SSI Automacao",
        description: "Zertifizierte Nachlaufzeitmessung und Validierung von Sicherheitsabständen mit HHB Safetyman. ISO 13855 Konformität für Industriemaschinen."
    },
    painPoints: {
        title: "Risiken bei Sicherheitsabständen",
        items: [
            {
                id: "pp-brake",
                title: "Bremsverschleiß",
                description: "Die Trägheit der Maschine nimmt mit der Zeit zu, wodurch vorhandene Lichtgitter unzureichend werden."
            },
            {
                id: "pp-audit",
                title: "Audit-Nichtkonformität",
                description: "Fehlende Nachweise über die Validierung von Sicherheitsabständen bei Inspektionen."
            }
        ]
    },
    methodology: {
        title: "Prüfmethodik",
        steps: [
            {
                id: "m-hhb",
                title: "HHB Safetyman Analyse",
                description: "Präzise Zeitmessung zwischen Auslösung und totalem Stillstand gefährlicher Bewegungen."
            },
            {
                id: "m-math",
                title: "Abstandsberechnung",
                description: "Mathematische Anwendung der ISO 13855 Formeln zur Bestimmung des korrekten S (Sicherheitsabstand)."
            }
        ]
    },
    deliverables: {
        title: "Validierungsnachweise",
        items: [
            {
                id: "d-laudo",
                title: "Technischer Prüfbericht",
                description: "Detaillierter Bericht mit Stoppkurven und technischer Zertifizierung (ART)."
            },
            {
                id: "d-sticker",
                title: "Konformitätssiegel",
                description: "Kennzeichnung an der Maschine mit Angabe des letzten Prüfdatums und des berechneten Sicherheitsabstands."
            }
        ]
    },
    leadForm: {
        id: "form-mtp",
        title: "Validieren Sie Ihre Sicherheitsabstände",
        subtitle: "Raten Sie nicht beim Thema Sicherheit. Messen Sie.",
        fields: [
            { id: "company", label: "Unternehmen", type: "text", placeholder: "Firmenname", required: true },
            { id: "machines", label: "Anzahl der Maschinen", type: "text", placeholder: "z.B. 5 Maschinen", required: false }
        ],
        submitLabel: "Anfrage senden"
    }
};
