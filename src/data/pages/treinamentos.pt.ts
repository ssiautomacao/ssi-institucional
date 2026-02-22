// src/data/pages/treinamentos.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const treinamentosPage: ServicePagePayload = {
    id: "svc-treinamentos",
    hero: {
        id: "hero-treinamentos",
        headline: "Treinamentos e Capacitação em Segurança",
        subtext: "Da qualificação operacional obrigatória (NR-12) aos programas avançados de preparação em engenharia de máquinas.",
        ctaPrimary: { label: "Consultar Turmas e Ementas", href: "#contact" },
        ctaSecondary: { label: "Ver Modalidades", href: "#deliverables" },
        imageSrc: "/assets/images/machine-safety/machine-safety-siemens-s7-1200-failsafe.webp",
        imageAlt: "Treinamento prático em painéis de segurança"
    },
    painPoint: {
        id: "pain-treinamentos",
        title: "O Problema que Resolvemos",
        body: "Sistemas de segurança de alto nível tornam-se ineficazes se a equipe de operação e manutenção não possuir qualificação. A falta de cultura de segurança gera falhas de setup, anulação (burlar) de proteções e dependência constante de consultorias externas para diagnósticos básicos."
    },
    methodology: {
        id: "met-treinamentos",
        title: "Trilha de Conhecimento Prático",
        body: "Oferecemos módulos técnicos escaláveis com foco hands-on. Atendemos a demanda de capacitação obrigatória para mantenedores (exigência MTE) e ministramos trilhas avançadas de apreciação de risco e validação, que servem como sólida base preparatória para certificações internacionais de especialização.",
        evidenceImage: {
            src: "/assets/images/machine-safety/machine-safety-control-panel.webp",
            alt: "Treinamento prático em lógicas de CLP",
            caption: "Capacitação prática em diagnóstico de falhas"
        }
    },
    deliverables: {
        id: "deliv-treinamentos",
        title: "Modalidades de Ensino",
        items: [
            { title: "Treinamentos In-Company (Customizados para a planta)", codeRef: "IN_COMPANY" },
            { title: "Capacitação Obrigatória NR-12 para Operadores", codeRef: "NR12_OP" },
            { title: "Programa Avançado de Engenharia (Preparatório)", codeRef: "ENG_ADV" },
            { title: "Emissão de Certificados de Participação", codeRef: "CERT_TREIN" }
        ]
    },
    leadForm: {
        formId: "lead-treinamentos",
        title: "Solicite um Orçamento In-Company",
        submitLabel: "Consultar Disponibilidade",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_TREINAMENTOS_CAPACITACAO",
        fields: [
            { name: "name", label: "Nome do Solicitante", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone / WhatsApp", type: "tel", required: true },
            { name: "participants", label: "Número estimado de colaboradores", type: "text", required: true }
        ]
    }
};
