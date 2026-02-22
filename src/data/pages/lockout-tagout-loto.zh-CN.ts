// src/data/pages/lockout-tagout-loto.zh-CN.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-loto-zh",
    hero: {
        id: "hero-loto-zh",
        headline: "锁定/标定与零能源管理程序 (LOTO)",
        subtext: "危险能源映射与结构化锁定程序开发（符合 OSHA 1910.147、NR-10、NR-12 标准）。",
        ctaPrimary: { label: "索取 LOTO 映射方案", href: "#contact" },
        ctaSecondary: { label: "查看方法论", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-control-panel.webp",
        imageAlt: "准备进行锁定操作的工业控制面板"
    },
    painPoint: {
        id: "pain-loto-zh",
        title: "我们解决的问题",
        body: "维护或调试期间机器意外启动导致的严重甚至致命事故。缺乏严格的零能源程序会导致严重的法律责任和生产瘫痪。"
    },
    methodology: {
        id: "met-loto-zh",
        title: "能源锁定映射与验证",
        body: "现场系统识别所有能源（电、气、液压、热能和势能）。我们开发分步视觉锁定程序及验证测试 (Tryout)，确保人员在零风险状态下进行干预。",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-door-lock-keyence.webp",
            alt: "安全联锁装置",
            caption: "关键锁定点映射"
        }
    },
    deliverables: {
        id: "deliv-loto-zh",
        title: "可追溯的交付成果",
        items: [
            { title: "文档化的能源映射报告", codeRef: "MAP_LOTO" },
            { title: "视觉锁定程序 (分步说明)", codeRef: "PROC_LOTO" },
            { title: "锁具与装置规范建议 (挂锁、搭扣)", codeRef: "SPEC_HW" },
            { title: "有效性验证报告", codeRef: "VAL_EFICACIA" }
        ]
    },
    leadForm: {
        formId: "lead-loto-zh",
        title: "在您的工厂实施 LOTO 程序",
        submitLabel: "申请 LOTO 项目",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_LOTO",
        fields: [
            { name: "name", label: "姓名", type: "text", required: true },
            { name: "company", label: "公司", type: "text", required: true },
            { name: "email", label: "企业邮箱", type: "email", required: true },
            { name: "phone", label: "电话", type: "tel", required: true },
            { name: "context", label: "规模（设备/产线数量）", type: "textarea", required: false }
        ]
    }
};
