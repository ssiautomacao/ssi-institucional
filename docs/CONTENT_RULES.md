# Diretrizes de Conteúdo e Assets (SSI Automação)

## 1. Pipeline de Vídeo (Hero Backgrounds)
- **Regra:** Nenhum `.mov` ou arquivo > 10MB deve ir para o repositório.
- **Comando FFMPEG Obrigatório:** `ffmpeg -i input.mov -vcodec libx264 -crf 28 -preset fast -profile:v baseline -level 3.0 -pix_fmt yuv420p -an output.mp4`
- *Nota:* O uso do `-crf 28` é o padrão homologado para fundos em loop (leveza máxima). Execute localmente e faça o commit apenas do `.mp4` em `public/assets/videos/`.

## 2. Tipografia e Redação (Copywriting B2B)
- **Siglas:** Devem ser expandidas na primeira ocorrência com 3 a 5 palavras. Ex: *SRP/CS (Partes Relacionadas à Segurança do Sistema de Comando)*.
- **Tom de Voz:** Sóbrio, conservador e técnico. Proibido o uso de termos absolutistas (ex: "invalida qualquer projeto"). Use condicionais técnicas (ex: "tende a ficar incompleta").
- **Lógica de Cálculo:** O site não calcula nada. Use termos como "classificação estruturada" ou "validação técnica (cálculos + testes)".
