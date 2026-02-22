// src/data/pages/lockout-tagout-loto.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const lockoutTagoutPage: ServicePagePayload = {
    id: "svc-loto",
    hero: {
        id: "hero-loto",
        headline: "Programa de Bloqueio e Energia Zero (LOTO)",
        subtext: "Mapeamento de energias perigosas e desenvolvimento de procedimentos estruturados de bloqueio (OSHA 1910.147, NR-10, NR-12).",
        ctaPrimary: { label: "Solicitar Mapeamento LOTO", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-control-panel.webp",
        imageAlt: "Painel de controle industrial preparado para bloqueio"
    },
    painPoint: {
        id: "pain-loto",
        title: "O Problema que Resolvemos",
        body: "Acidentes graves e fatais causados pela reenergização inesperada de máquinas durante intervenções de manutenção ou setup. A ausência de um procedimento rigoroso de Energia Zero gera passivos trabalhistas severos e paralisações por embargo do Ministério do Trabalho."
    },
    methodology: {
        id: "met-loto",
        title: "Mapeamento e Validação de Bloqueios",
        body: "Atuação sistemática em campo para identificação de todas as fontes de energia (elétrica, pneumática, hidráulica, térmica e potencial). Desenvolvemos procedimentos visuais passo a passo para o bloqueio, descompressão e teste de verificação (Tryout), garantindo que a intervenção humana ocorra em estado de risco zero.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-door-lock-keyence.webp",
            alt: "Dispositivo de intertravamento de segurança",
            caption: "Mapeamento de pontos críticos de bloqueio"
        }
    },
    deliverables: {
        id: "deliv-loto",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Mapeamento documentado de fontes de energia", codeRef: "MAP_LOTO" },
            { title: "Procedimentos visuais de bloqueio (Passo a Passo)", codeRef: "PROC_LOTO" },
            { title: "Especificação de hardwares e dispositivos (Cadeados, Garras)", codeRef: "SPEC_HW" },
            { title: "Relatório de validação de eficácia", codeRef: "VAL_EFICACIA" }
        ]
    },
    leadForm: {
        formId: "lead-loto",
        title: "Implemente o Programa LOTO na sua Planta",
        submitLabel: "Solicitar Projeto LOTO",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_LOTO",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Escopo (Número de equipamentos/linhas)", type: "textarea", required: false }
        ]
    }
};
