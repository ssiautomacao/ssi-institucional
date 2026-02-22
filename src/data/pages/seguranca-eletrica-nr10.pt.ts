// src/data/pages/seguranca-eletrica-nr10.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const segurancaEletricaPage: ServicePagePayload = {
    id: "svc-nr10",
    hero: {
        id: "hero-nr10",
        headline: "Diagnósticos e Engenharia Elétrica (NR-10)",
        subtext: "Inspeções estruturadas, elaboração de prontuários (PIE) e estudos de energia incidente (Arc Flash).",
        ctaPrimary: { label: "Solicitar Diagnóstico Elétrico", href: "#contact" },
        ctaSecondary: { label: "Ver Escopo Normativo", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/nr10/nr10-electrical-control-panel.webp",
        imageAlt: "Inspeção em painel elétrico industrial"
    },
    painPoint: {
        id: "pain-nr10",
        title: "O Problema que Resolvemos",
        body: "Risco de fatalidades por arco elétrico, choques por contato indireto devido a falhas de isolamento e risco iminente de interdição da planta fabril por ausência do Prontuário das Instalações Elétricas (PIE) atualizado."
    },
    methodology: {
        id: "met-nr10",
        title: "Inspeção Elétrica e Rastreabilidade",
        body: "Realizamos inspeções rigorosas das condições físicas e documentais das instalações. Aferimos os sistemas de aterramento e proteção (SPDA), analisamos a seletividade dos dispositivos e calculamos a classe de proteção térmica necessária para os eletricistas.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/nr10/nr10-electrical-panel-industrial.webp",
            alt: "Quadro elétrico industrial NR-10",
            caption: "Auditoria de conformidade em quadros elétricos"
        }
    },
    deliverables: {
        id: "deliv-nr10",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "RTI (Relatório Técnico de Inspeção) com plano de ação", codeRef: "RTI_NR10" },
            { title: "Elaboração e organização do PIE", codeRef: "PIE_NR10" },
            { title: "Laudos de Aterramento e Continuidade (EN 60204-1)", codeRef: "LAUDO_ATER" },
            { title: "Estudo de Energia Incidente (Arc Flash)", codeRef: "ARC_FLASH" }
        ]
    },
    leadForm: {
        formId: "lead-nr10",
        title: "Estruture a Conformidade Elétrica da Planta",
        submitLabel: "Solicitar Engenharia",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_ELETRICA_NR10",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Demanda (PIE, RTI, Arc Flash, Termografia)", type: "textarea", required: false }
        ]
    }
};
