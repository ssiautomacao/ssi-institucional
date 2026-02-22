import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-pressure-vessels-zh",
    hero: {
        id: "hero-nr13",
        headline: "NR-13 完整性：压力容器与锅炉",
        subtext: "无损机械测试、资料手册 (Data Book) 重构以及 PMTA 计算，确保完全符合 NR-13 法律标准。",
        cta: "咨询机械工程师",
        image: "/ssi-institucional/assets/services/nr13-hero.jpg"
    },
    seo: {
        title: "NR-13 压力容器与锅炉检查 | SSI Automação",
        description: "压力容器和锅炉的全面合规检查。遵循 NR-13 的静水压测试、厚度测量和 PMTA 计算。"
    },
    painPoints: {
        title: "完整性风险",
        items: [
            {
                id: "pp-explosion",
                title: "灾难性故障",
                description: "由于缺乏定期检查或材料疲劳而导致的爆炸风险。"
            },
            {
                id: "pp-legal",
                title: "资产停工",
                description: "由于技术证书过期而导致的法律责任和运营受阻。"
            }
        ]
    },
    methodology: {
        title: "检查协议",
        steps: [
            {
                id: "m-ultrasound",
                title: "厚度测量",
                description: "超声波测试以识别腐蚀和壁厚损失。"
            },
            {
                id: "m-calc",
                title: "PMTA 重新计算",
                description: "根据当前材料数据确定最大允许工作压力。"
            }
        ]
    },
    deliverables: {
        title: "合规报告",
        items: [
            {
                id: "d-book",
                title: "单元资料手册",
                description: "每个检查资产的完整技术历史和记录。"
            },
            {
                id: "d-art",
                title: "技术责任 (ART)",
                description: "检查真实性和结构安全的官方认证。"
            }
        ]
    },
    leadForm: {
        id: "form-nr13",
        title: "申请 NR-13 检查",
        subtitle: "确保您的工厂安全合规。",
        fields: [
            { id: "company", label: "公司", type: "text", placeholder: "企业名称", required: true },
            { id: "vessels", label: "资产数量", type: "text", placeholder: "例如 10 个容器", required: false }
        ],
        submitLabel: "立即预约"
    }
};
