// src/data/pages/apreciacao-risco.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const apreciacaoRiscoPage: ServicePagePayload = {
    id: "svc-apreciacao-risco",
    hero: {
        id: "hero-apreciacao",
        headline: "Apreciação de Risco de Máquinas (ISO 12100)",
        subtext: "Diagnóstico rigoroso e mapeamento de passivo para adequação à NR-12.",
        ctaPrimary: { label: "Solicitar Proposta Técnica", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-risk-assessment-onsite.webp",
        imageAlt: "Engenheiro realizando avaliação de riscos em campo industrial"
    },
    painPoint: {
        id: "pain-apreciacao",
        title: "O Problema que Resolvemos",
        body: "Máquinas operando com perigos ocultos, sem mapeamento de zonas de risco e sem priorização técnica. Sem este diagnóstico preliminar, a adequação física tende a ficar incompleta e sem rastreabilidade técnica."
    },
    methodology: {
        id: "met-apreciacao",
        title: "Engenharia Consultiva",
        body: "Metodologia estruturada na NBR ISO 12100. Analisamos os limites da máquina, identificamos os perigos em todas as fases de vida e realizamos a classificação estruturada do risco (utilizando métodos normativos de referência, como o HRN).",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
            alt: "Célula robotizada industrial com zonas de risco mapeadas",
            caption: "Mapeamento em automação complexa"
        }
    },
    deliverables: {
        id: "deliv-apreciacao",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Inventário fotográfico detalhado de perigos", codeRef: "INV_FOTO" },
            { title: "Classificação documentada do Nível de Risco", codeRef: "RISK_CLASS" },
            { title: "Laudo de Apreciação de Riscos (LAR) com ART", codeRef: "LAR_ART" },
            { title: "Diretrizes preliminares para o Projeto Conceitual", codeRef: "PCS_GUIDE" }
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-laser-scanner-area-protection.webp",
            alt: "Scanner laser de área protegendo perímetro industrial",
            caption: "Diretrizes de mitigação validadas"
        }
    },
    leadForm: {
        formId: "lead-apreciacao",
        title: "Solicite um Diagnóstico (ISO 12100)",
        submitLabel: "Enviar Solicitação",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_APRECIACAO_ISO12100",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Contexto (Quantidade/Tipo de Máquinas)", type: "textarea", required: false }
        ]
    }
};
