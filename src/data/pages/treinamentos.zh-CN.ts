import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-training-zh",
    hero: {
        id: "hero-training",
        headline: "技术培训与能力建设",
        subtext: "针对操作员的内部 NR-12 培训、高级安全工程计划以及预备课程。官方认证和专家辅导。",
        cta: "申请培训报价",
        image: "/ssi-institucional/assets/services/training-hero.jpg"
    },
    seo: {
        title: "技术 NR-12 培训与安全工程教育 | SSI Automação",
        description: "机器安全工程专业培训、NR-12 操作员能力建设和高级技术课程。认证工业安全教育。"
    },
    painPoints: {
        title: "人为因素",
        items: [
            {
                id: "pp-behavior",
                title: "不安全行为",
                description: "对安全缺乏理解会导致旁路保护，从而增加风险。"
            },
            {
                id: "pp-skills",
                title: "技术技能差距",
                description: "维护和工程团队在应用最新安全技术和标准方面面临挑战。"
            }
        ]
    },
    methodology: {
        title: "学习轨迹",
        steps: [
            {
                id: "m-theory",
                title: "理论基础",
                description: "深入研究国家和国际安全标准（NR、ISO、IEC）。"
            },
            {
                id: "m-hands-on",
                title: "动手实践",
                description: "使用安全组件和现实工业场景进行实践练习。"
            }
        ]
    },
    deliverables: {
        title: "合格人才",
        items: [
            {
                id: "d-cert",
                title: "官方认证",
                description: "法律用途和技能验证所需的合规文件。"
            },
            {
                id: "d-manuals",
                title: "技术材料",
                description: "用于持续参考和改进的综合指南和手册。"
            }
        ]
    },
    leadForm: {
        id: "form-training",
        title: "安排您团队的培训",
        subtitle: "通过专家知识赋能您的员工。",
        fields: [
            { id: "company", label: "公司", type: "text", placeholder: "企业名称", required: true },
            { id: "staff", label: "参与者数量", type: "text", placeholder: "例如 15 人", required: false }
        ],
        submitLabel: "发送请求"
    }
};
