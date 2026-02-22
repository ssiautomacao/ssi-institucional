import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-formazione",
    hero: {
        id: "hero-training",
        headline: "Formazione Tecnica e Capacitazione",
        subtext: "Corsi In-Company NR-12 per operatori, programmi avanzati di ingegneria della sicurezza e percorsi preparatori.",
        cta: "Richiedi Preventivo Formazione",
        image: "/ssi-institucional/assets/services/training-hero.jpg"
    },
    seo: {
        title: "Formazione Tecnica NR-12 e Educazione all'Ingegneria | SSI Automacao",
        description: "Formazione specializzata nell'ingegneria della sicurezza delle macchine, capacitazione operatori NR-12 e percorsi tecnici avanzati."
    },
    painPoints: {
        title: "Il Fattore Umano",
        items: [
            {
                id: "pp-behavior",
                title: "Comportamenti Insicuri",
                description: "La mancanza di comprensione dei sistemi di sicurezza porta all'elusione delle protezioni e aumenta il rischio."
            },
            {
                id: "pp-skills",
                title: "Gap di Competenze Tecniche",
                description: "Team di manutenzione e ingegneria con difficoltà nell'applicare le ultime tecnologie e standard."
            }
        ]
    },
    methodology: {
        title: "Percorsi di Apprendimento",
        steps: [
            {
                id: "m-theory",
                title: "Fondamenti Teorici",
                description: "Studio approfondito degli standard di sicurezza nazionali e internazionali."
            },
            {
                id: "m-hands-on",
                title: "Pratica Applicata",
                description: "Esercitazioni pratiche utilizzando componenti di sicurezza e scenari industriali reali."
            }
        ]
    },
    deliverables: {
        title: "Talento Qualificato",
        items: [
            {
                id: "d-cert",
                title: "Certificazione Ufficiale",
                description: "Documenti di conformità validi per scopi legali e verifica delle competenze."
            },
            {
                id: "d-manuals",
                title: "Materiali Tecnici",
                description: "Guide e manuali completi per riferimento continuo e miglioramento."
            }
        ]
    },
    leadForm: {
        id: "form-training",
        title: "Pianifica la Formazione del Tuo Team",
        subtitle: "Potenzia la tua forza lavoro con conoscenze specialistiche.",
        fields: [
            { id: "company", label: "Azienda", type: "text", placeholder: "Nome dell'azienda", required: true },
            { id: "staff", label: "Numero di partecipanti", type: "text", placeholder: "es. 15 persone", required: false }
        ],
        submitLabel: "Invia Richiesta"
    }
};
