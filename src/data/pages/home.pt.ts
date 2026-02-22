// src/data/pages/home.pt.ts
import type { HeroProps, SolutionsGridProps, DynamicLeadFormProps } from "../../types/content";

export const homeHero: HeroProps = {
    id: "hero-home",
    headline: "Engenharia de Segurança com Rastreabilidade e Validação Normativa.",
    subtext: "Atuamos em todo o ciclo de vida da segurança de máquinas, garantindo conformidade e continuidade operacional (ISO 12100 e ISO 13849).",
    ctaPrimary: { label: "Solicitar Diagnóstico Técnico", href: "#contact", trackId: "hero-cta-diagnostico" },
    ctaSecondary: { label: "Falar com Especialista", href: "https://wa.me/5511944546380", trackId: "hero-cta-wpp" },
    videoSrc: "/ssi-institucional/assets/videos/machine-safety-robotic-production-line.mp4",
    imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
    imageAlt: "Linha de produção automatizada com sistemas de segurança integrados"
};

export const homePillars: SolutionsGridProps = {
    id: "home-pillars",
    pillars: [
        {
            title: "Apreciação, Validação e Projetos",
            copy: "Diagnóstico normativo avançado, engenharia de adequação estruturada e validação técnica (cálculos + testes) de sistemas Fail-safe.",
            imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-plc.webp",
            link: "/pt/solucoes/ciclo-de-vida"
        },
        {
            title: "Ensaios, Instrumentação e Laudos",
            copy: "Medição de Tempo de Parada com instrumentação calibrada, diagnósticos elétricos (NR-10) e integridade de vasos de pressão (NR-13).",
            imageSrc: "/ssi-institucional/assets/images/ensaios/stop-time-meter-hhb-dt3.webp",
            link: "/pt/solucoes/servicos-tecnicos"
        },
        {
            title: "Governança e Adequação Internacional",
            copy: "Programa corporativo NR-12, bloqueio de energias (LOTO) e nacionalização de máquinas importadas com suporte trilíngue.",
            imageSrc: "/ssi-institucional/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
            link: "/pt/solucoes/gestao-corporativa"
        }
    ]
};

export const homeLeadForm: DynamicLeadFormProps = {
    formId: "lead-home",
    title: "Inicie seu Projeto de Adequação",
    submitLabel: "Solicitar Proposta Técnica",
    endpoint: "/api/v1/public/leads",
    hiddenIntentKey: "HOME_PAGE_GENERAL_INQUIRY",
    fields: [
        { name: "name", label: "Nome Completo", type: "text", required: true },
        { name: "email", label: "E-mail Corporativo", type: "email", required: true },
        { name: "company", label: "Empresa", type: "text", required: true },
        { name: "phone", label: "Telefone / WhatsApp", type: "tel", required: true },
        {
            name: "interest",
            label: "Área de Interesse",
            type: "select",
            required: true,
            options: [
                "Apreciação de Risco (ISO 12100)",
                "Projetos de Engenharia",
                "Validação Técnica (ISO 13849)",
                "Ensaios e Medições",
                "Laudos NR-10 / NR-13",
                "Máquinas Importadas"
            ]
        }
    ]
};
