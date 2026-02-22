import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-misura-tempo-arresto",
    hero: {
        id: "hero-mtp",
        headline: "Misurazione del Tempo di Arresto (ISO 13855)",
        subtext: "Test di inerzia con strumentazione calibrata (HHB Safetyman DT3) per la validazione geometrica delle distanze di sicurezza.",
        cta: "Richiedi Misura Tempo Arresto",
        image: "/ssi-institucional/assets/services/mtp-hero.jpg"
    },
    seo: {
        title: "Misurazione del Tempo di Arresto e Validazione ISO 13855 | SSI Automacao",
        description: "Test certificati del tempo di arresto delle macchine e validazione delle distanze di sicurezza con HHB Safetyman. Conformità ISO 13855."
    },
    painPoints: {
        title: "Rischi nelle Distanze di Sicurezza",
        items: [
            {
                id: "pp-brake",
                title: "Degradazione della Frenata",
                description: "L'inerzia della macchina aumenta nel tempo, rendendo insufficienti le barriere fotoelettriche esistenti."
            },
            {
                id: "pp-audit",
                title: "Non Conformità negli Audit",
                description: "Mancata presentazione delle prove di validazione delle distanze di sicurezza durante le ispezioni."
            }
        ]
    },
    methodology: {
        title: "Metodologia di Test",
        steps: [
            {
                id: "m-hhb",
                title: "Analisi HHB Safetyman",
                description: "Misurazione precisa del tempo tra l'attivazione e l'arresto totale dei movimenti pericolosi."
            },
            {
                id: "m-math",
                title: "Calcolo della Distanza",
                description: "Applicazione matematica delle formule ISO 13855 per determinare la S (Distanza di Sicurezza) corretta."
            }
        ]
    },
    deliverables: {
        title: "Prove di Validazione",
        items: [
            {
                id: "d-laudo",
                title: "Rapporto di Validazione Tecnica",
                description: "Rapporto dettagliato con curve di arresto e certificazione tecnica (ART)."
            },
            {
                id: "d-sticker",
                title: "Sigillo di Conformità",
                description: "Etichettatura sulla macchina indicante l'ultima data del test e la distanza di sicurezza calcolata."
            }
        ]
    },
    leadForm: {
        id: "form-mtp",
        title: "Validate le vostre Distanze di Sicurezza",
        subtitle: "Non indovinate la sicurezza. Misuratela.",
        fields: [
            { id: "company", label: "Azienda", type: "text", placeholder: "Nome dell'azienda", required: true },
            { id: "machines", label: "Numero di macchine", type: "text", placeholder: "es. 5 macchine", required: false }
        ],
        submitLabel: "Invia Richiesta"
    }
};
