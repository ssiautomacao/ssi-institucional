// src/data/pages/validacao-seguranca.zh-CN.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-safety-validation-zh",
    hero: {
        id: "hero-validation-zh",
        headline: "安全控制系统验证 (ISO 13849-1)",
        subtext: "通过技术论证（计算与结构化测试）确保安全电路达到要求的性能等级 (PLr)。",
        ctaPrimary: { label: "索取技术方案", href: "#contact" },
        ctaSecondary: { label: "查看方法论", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1500-failsafe.webp",
        imageAlt: "工业控制柜中的西门子 S7-1500 Failsafe PLC"
    },
    painPoint: {
        id: "pain-validation-zh",
        title: "我们解决的问题",
        body: "改造项目虽然在视觉上已完成，但缺乏技术证明其电路达到了标准要求的性能等级。这会导致控制系统中存在严重的隐性危险故障风险。"
    },
    methodology: {
        id: "met-validation-zh",
        title: "结构化分析与测试",
        body: "严格执行 ISO 13849-1 标准。我们评估 SRP/CS 的架构，确定 MTTFd（平均危险故障时间）和 DC（诊断覆盖率）等参数，并进行现场功能及故障导向测试。",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-architecture.webp",
            alt: "GuardLogix 架构图",
            caption: "安全网络架构分析"
        }
    },
    deliverables: {
        id: "deliv-validation-zh",
        title: "可追溯的交付成果",
        items: [
            { title: "性能等级 (PL) 计算报告", codeRef: "PL_CALC" },
            { title: "现场功能测试报告", codeRef: "TEST_CAMPO" },
            { title: "带签名校验 (CRC) 的软件验证", codeRef: "SOFT_CRC" },
            { title: "安全验证报告 (LVS) 及 ART 备案", codeRef: "LVS_ART" }
        ]
    },
    leadForm: {
        formId: "lead-validation-zh",
        title: "申请系统验证服务",
        submitLabel: "提交申请",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_VALIDACAO_ISO13849",
        fields: [
            { name: "name", label: "姓名", type: "text", required: true },
            { name: "company", label: "公司", type: "text", required: true },
            { name: "email", label: "企业邮箱", type: "email", required: true },
            { name: "phone", label: "电话", type: "tel", required: true },
            { name: "context", label: "背景（PLC 架构 / 继电器）", type: "textarea", required: false }
        ]
    }
};
