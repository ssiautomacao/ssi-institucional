// src/data/pages/validacao-seguranca.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const validacaoSegurancaPage: ServicePagePayload = {
    id: "svc-validacao-seguranca",
    hero: {
        id: "hero-validacao",
        headline: "Validação de Sistemas de Comando (ISO 13849-1)",
        subtext: "Comprovação técnica (cálculos e testes estruturados) do Nível de Performance (PLr) dos circuitos de segurança.",
        ctaPrimary: { label: "Solicitar Proposta Técnica", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1500-failsafe.webp",
        imageAlt: "CLP Fail-safe Siemens S7-1500 em painel industrial"
    },
    painPoint: {
        id: "pain-validacao",
        title: "O Problema que Resolvemos",
        body: "Projetos de adequação concluídos visualmente, mas sem a comprovação técnica de que os circuitos atingem o nível de desempenho exigido pela norma. Isso cria um risco grave de falha perigosa silenciosa no sistema de controle."
    },
    methodology: {
        id: "met-validacao",
        title: "Análise e Testes Estruturados",
        body: "Aplicação estrita da ISO 13849-1. Avaliamos a arquitetura do SRP/CS (Partes Relacionadas à Segurança do Sistema de Comando), determinamos parâmetros como MTTFd (Tempo Médio até Falha Perigosa) e DC (Cobertura Diagnóstica), e realizamos testes funcionais e orientados a falhas em campo.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-architecture.webp",
            alt: "Diagrama de arquitetura GuardLogix de rede segura",
            caption: "Análise de arquitetura de rede segura"
        }
    },
    deliverables: {
        id: "deliv-validacao",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Relatório com cálculo do Performance Level (PL)", codeRef: "PL_CALC" },
            { title: "Relatório de testes funcionais em campo", codeRef: "TESTE_CAMPO" },
            { title: "Validação de software com verificação de assinaturas (CRC)", codeRef: "SOFT_CRC" },
            { title: "Laudo de Validação de Segurança (LVS) com ART", codeRef: "LVS_ART" }
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-light-curtain-conveyor-system.webp",
            alt: "Cortina de luz em sistema de esteira industrial",
            caption: "Validação funcional de barreiras óticas"
        }
    },
    leadForm: {
        formId: "lead-validacao",
        title: "Solicite a Validação dos seus Sistemas",
        submitLabel: "Enviar Solicitação",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_VALIDACAO_ISO13849",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Contexto (Arquitetura de CLP / Relés)", type: "textarea", required: false }
        ]
    }
};
