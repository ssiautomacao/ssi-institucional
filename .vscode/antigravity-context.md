# 🧠 SSI Engenharia — Project Memory & Architecture Context

## 🎯 Project Overview
- **Tech Stack:** Astro (static-first), React (isolated islands only), Tailwind CSS.
- **Deployment:** GitHub Pages (ssiautomacao/ssi-institucional).
- **Production URL:** `https://ssiautomacao.github.io/ssi-institucional/{lang}/`.
- **Core Goal:** Multilingual engineering HUB emphasizing technical authority without exposing proprietary logic.

---

## 📂 Core Structure (FAILSAFE)
- **Pages:** `src/pages/[lang]/` (Strictly follow this for i18n). `prefixDefaultLocale: true`.
- **Services Folder:** `src/pages/[lang]/servicos/`.
- **Assets:** `src/assets/tech/` (Contains `zeus-1.png`, `zeus-2.png`, `zeus-3.png`).
- **Components:** `src/components/` (`ZeusWindow.astro`, `Header.astro`, `Footer.astro`).

⚠️ **DO NOT** create pages outside `src/pages/[lang]/`.
⚠️ **DO NOT** bypass the i18n folder structure.

---

## 🌐 i18n, Routing & GitHub Pages (CRITICAL)
- **Locales:** `pt` (default), `en`, `it`, `es`, `de`.
- **GitHub Pages Subpath:** `/ssi-institucional/`.
- **Astro Config:** `site: "https://ssiautomacao.github.io"` and `base: "/ssi-institucional"`.

### ❗ FAILSAFE RULE — Link Construction
- **NEVER** hardcode links like `/pt/...` or `/en/...`.
- **ALWAYS** use `import.meta.env.BASE_URL` (aliased as `BASE`).
- **Correct Example:** `${BASE}${lang}/servicos/teste-aterramento`.
- **Root Redirect:** `src/pages/index.astro` MUST use `Astro.redirect(`${import.meta.env.BASE_URL}pt/`, 308)`.

---

## 🛡️ Compliance, Legal & IP Protection (NON-NEGOTIABLE)
- **Forbidden Terms:** "ZEUS", "Simulator", "Simulation", "Real-time", "Integrated", "Ecosystem".
- **Mandatory Caption:** "Visualização conceitual da abordagem HRN aplicada em projetos de engenharia."
- **Visual Integrity:** Conceptual only. No real formulas, scores, or proprietary thresholds.

---

## 🖼️ ZeusWindow Usage & Layout
- **Scope:** Home page (Technology section) and HRN service page only.
- **Scale Guideline:** Enforce `scale-85` via parent container with `origin-top` to maintain hierarchy.
- **Interactivity:** NONE. Must remain a visual-only crossfade loop.

---

## 🛠️ Current Mission (The "Bug Hunt")
1. **Fix 404s:** Ensure `BASE_URL` is implemented in all menu and service links.
2. **Language Switcher:** Swap locale prefix while preserving slug/hash and respecting `BASE`.
3. **Scale Fix:** Apply the visual reduction to `ZeusWindow` on Home and Service pages.
4. **Cleanup:** Fully purge `RiskAnimation.jsx` and its imports.

---

## 🚫 Explicit "DO NOT" List
- **DO NOT** expose internal software names.
- **DO NOT** recreate ZEUS logic in JS/React.
- **DO NOT** hardcode absolute paths without `BASE`.
- **DO NOT** add user inputs or sliders to visualizations.