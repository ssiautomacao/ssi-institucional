// src/data/pages/vasos-pressao-nr13.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const vasosPressaoPage: ServicePagePayload = {
    id: "svc-nr13",
    hero: {
        id: "hero-nr13",
        headline: "Conformidade e Integridade NR-13",
        subtext: "Ensaios mecânicos, reconstituição de Data Books e laudos técnicos de isenção estruturada.",
        ctaPrimary: { label: "Solicitar Inspeção NR-13", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/nr13/nr13-pressure-vessel-industrial.webp",
        imageAlt: "Vaso de pressão industrial NR-13"
    },
    painPoint: {
        id: "pain-nr13",
        title: "O Problema que Resolvemos",
        body: "Risco de falhas estruturais catastróficas em fluidos pressurizados e ausência de rastreabilidade no ciclo de vida do ativo. Plantas frequentemente sofrem exigências indevidas para equipamentos que tecnicamente não se enquadram no rigor pleno da norma."
    },
    methodology: {
        id: "met-nr13",
        title: "Engenharia Mecânica de Integridade",
        body: "Executamos ensaios mecânicos não destrutivos, auditorias de segurança em tubulações (pipelines) e análise estrutural de projeto. Elaboramos fundamentação técnica rigorosa para atestar a isenção de equipamentos não caracterizados pela norma, reduzindo o OPEX da planta.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/nr13/nr13-industrial-process-plant.webp",
            alt: "Planta de processos industriais",
            caption: "Mapeamento de integridade em campo"
        }
    },
    deliverables: {
        id: "deliv-nr13",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Laudos de Ensaios e Testes Mecânicos (com ART)", codeRef: "ENSAIO_NR13" },
            { title: "Reconstituição de Prontuários (Data Books)", codeRef: "DATA_BOOK" },
            { title: "Cartas de Exclusão de NR-13 (Isenção fundamentada)", codeRef: "CARTA_ISENCAO" },
            { title: "Inspeção de Segurança em Tubulações", codeRef: "INSP_TUB" }
        ]
    },
    leadForm: {
        formId: "lead-nr13",
        title: "Solicite Inspeção ou Estudo de Isenção",
        submitLabel: "Enviar Solicitação",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_MECANICA_NR13",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Demanda (Inspeção Periódica, Data Book, Carta de Exclusão)", type: "textarea", required: false }
        ]
    }
};
