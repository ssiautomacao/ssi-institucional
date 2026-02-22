import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-sicurezza-elettrica",
    hero: {
        id: "hero-nr10",
        headline: "Ingegneria della Sicurezza Elettrica (NR-10)",
        subtext: "Ispezioni strutturate, sviluppo del PIE (Prontuario delle Installazioni Elettriche) e studi di Energia Incidente (Arc Flash) secondo le norme NR-10.",
        cta: "Consultare un Ingegnere Elettrico",
        image: "/ssi-institucional/assets/services/nr10-hero.jpg"
    },
    seo: {
        title: "Ingegneria della Sicurezza Elettrica e Studi Arc Flash | SSI Automacao",
        description: "Ispezioni tecniche, sviluppo PIE e studi sull'energia incidente da arco elettrico. Rapporti ingegneristici professionali per la sicurezza."
    },
    painPoints: {
        title: "Gestione dei Rischi Elettrici",
        items: [
            {
                id: "pp-risk-high",
                title: "Rischio di Arco Elettrico",
                description: "Mancanza di studi sui livelli di energia incidente e sui confini di approccio sicuro."
            },
            {
                id: "pp-legacy",
                title: "Infrastruttura Obsoleta",
                description: "Quadri elettrici e schemi unifilari che non riflettono la realtà attuale."
            }
        ]
    },
    methodology: {
        title: "Nostro Approccio di Ingegneria",
        steps: [
            {
                id: "m-diagnosis",
                title: "Audit Diagnostico",
                description: "Mappatura in loco di tutti gli asset elettrici e delle condizioni dei quadri."
            },
            {
                id: "m-studies",
                title: "Studi Computazionali",
                description: "Selettività e coordinamento tramite software di ingegneria specializzato."
            }
        ]
    },
    deliverables: {
        title: "Documentazione Tecnica",
        items: [
            {
                id: "d-pie",
                title: "PIE (Dossier Tecnico)",
                description: "Documentazione completa richiesta per la conformità legale e normativa."
            },
            {
                id: "d-labels",
                title: "Etichettatura Arc Flash",
                description: "Etichette di avvertimento resistenti che indicano i requisiti DPI e i livelli di rischio."
            }
        ]
    },
    leadForm: {
        id: "form-nr10",
        title: "Richiedi un Audit di Sicurezza Elettrica",
        subtitle: "Pianifica una visita tecnica con i nostri specialisti.",
        fields: [
            { id: "company", label: "Azienda", type: "text", placeholder: "Nome dell'azienda", required: true },
            { id: "panels", label: "Numero stimato di quadri", type: "text", placeholder: "es. 50", required: false }
        ],
        submitLabel: "Invia Richiesta"
    }
};
