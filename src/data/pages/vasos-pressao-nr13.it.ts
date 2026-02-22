import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-recipienti-pressione",
    hero: {
        id: "hero-nr13",
        headline: "Integrità NR-13: Recipienti a Pressione e Caldaie",
        subtext: "Prove meccaniche non distruttive, ricostituzione dei Data Book e calcoli PMTA per la piena conformità legale alle norme NR-13.",
        cta: "Consultare un Ingegnere Meccanico",
        image: "/ssi-institucional/assets/services/nr13-hero.jpg"
    },
    seo: {
        title: "Ispezione Recipienti a Pressione e Caldaie NR-13 | SSI Automacao",
        description: "Ispezioni di conformità per recipienti a pressione e caldaie. Prove idrostatiche, misurazione dello spessore e calcolo PMTA secondo NR-13."
    },
    painPoints: {
        title: "Rischi di Integrità",
        items: [
            {
                id: "pp-explosion",
                title: "Guasto Catastrofico",
                description: "Rischio di esplosioni dovuto alla mancanza di ispezioni periodiche o alla fatica del materiale."
            },
            {
                id: "pp-legal",
                title: "Fermo Asset",
                description: "Responsabilità legale e blocco operativo a causa di certificati tecnici scaduti."
            }
        ]
    },
    methodology: {
        title: "Protocollo di Ispezione",
        steps: [
            {
                id: "m-ultrasound",
                title: "Misurazione Spessori",
                description: "Prove a ultrasuoni per identificare la corrosione e la perdita di spessore delle pareti."
            },
            {
                id: "m-calc",
                title: "Ricalcolo PMTA",
                description: "Determinazione della Pressione Massima di Eserizio Ammissibile basata sui dati attuali del materiale."
            }
        ]
    },
    deliverables: {
        title: "Rapporti di Conformità",
        items: [
            {
                id: "d-book",
                title: "Data Book dell'Unità",
                description: "Cronologia tecnica completa e registri per ogni asset ispezionato."
            },
            {
                id: "d-art",
                title: "Responsabilità Tecnica (ART)",
                description: "Certificazione ufficiale di autenticità dell'ispezione e sicurezza strutturale."
            }
        ]
    },
    leadForm: {
        id: "form-nr13",
        title: "Richiedi un'Ispezione NR-13",
        subtitle: "Mantenete il vostro impianto sicuro e a norma.",
        fields: [
            { id: "company", label: "Azienda", type: "text", placeholder: "Nome dell'azienda", required: true },
            { id: "vessels", label: "Numero di asset", type: "text", placeholder: "es. 10 recipienti", required: false }
        ],
        submitLabel: "Pianifica Ora"
    }
};
