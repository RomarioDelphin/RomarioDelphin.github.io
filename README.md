<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=DIGITAL%20HQ&fontSize=70&fontAlignY=35&desc=Source%20Code%20|%20Portfolio%20Oficial%20v2.0&descAlignY=55&descSize=18&fontColor=ffffff&customColorList=06b6d4,000205&animation=fadeIn" width="100%"/>
</div>

<div align="center">
  <br />
  
  <a href="https://romariodelphin.github.io/">
    <img src="https://img.shields.io/badge/LIVE-VER%20ONLINE-000205?style=for-the-badge&logo=google-chrome&logoColor=06b6d4&labelColor=000205&color=06b6d4" />
  </a>
  <img src="https://img.shields.io/badge/ENGINE-VANILLA%20JS-000205?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=000205&color=F7DF1E" />
  <img src="https://img.shields.io/badge/STYLE-TAILWIND-000205?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC&labelColor=000205&color=38B2AC" />

</div>

<br />

## ⚡ Sobre o Projeto

Este repositório hospeda o código-fonte do meu **Portfólio Profissional** e Landing Page da **RAM.IO Holdings**. 

O objetivo técnico deste projeto foi criar uma experiência imersiva e performática (**High-End Performance**), utilizando **Zero Dependências de Build** (No-Node modules) para carregamento instantâneo, mantendo uma estética Cyberpunk/Executive.

### 🎨 Destaques de UX/UI
* **🕸️ Neural Particle Engine:** Um sistema de partículas desenvolvido em **JavaScript Puro (Canvas API)** que simula conexões neurais interativas com o mouse.
* **🔮 Glassmorphism Avançado:** Uso intenso de `backdrop-filter: blur` e transparências em camadas para criar profundidade.
* **✨ Micro-interações:** Efeitos de `Tilt 3D` (inclinação) nos cards de livros e animações de scroll (`IntersectionObserver`).

---

## 🛠️ Stack Tecnológica

A arquitetura foi pensada para ser leve e universal, rodando diretamente no navegador sem necessidade de transpilação.

| Componente | Tecnologia | Detalhe Técnico |
| :--- | :--- | :--- |
| **Estrutura** | `HTML5 Semântico` | SEO otimizado e acessibilidade. |
| **Estilização** | `Tailwind CSS (CDN)` | Design System utilitário para prototipagem rápida. |
| **Interatividade** | `Vanilla JavaScript` | Lógica de modais, canvas e animações (sem jQuery/React). |
| **Ícones** | `FontAwesome 6` | Iconografia vetorial. |
| **Fontes** | `Google Fonts` | Famílias *Outfit* e *Space Mono*. |

---

## 🧬 Anatomia do Código

### 1. O Motor de Partículas (`particle-canvas`)
O fundo animado não é um vídeo (o que seria pesado). É renderizado em tempo real via matemática vetorial:

```javascript
// Exemplo da lógica de conexão neural usada no código
if (distance < connectionDistance) {
    ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distance / connectionDistance})`;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

```

### 2. Efeito de Vidro (Glassmorphism)

As "janelas" dos projetos utilizam CSS moderno para criar o efeito fosco sobre o fundo em movimento:

```css
.glass-panel {
    background: rgba(10, 15, 25, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

```

---

## 🚀 Como Rodar Localmente

Como o projeto não utiliza bundlers complexos (como Webpack ou Vite), ele é extremamente simples de testar.

### 1. Clone o Repositório

```bash
git clone [https://github.com/RomarioDelphin/RomarioDelphin.github.io.git](https://github.com/RomarioDelphin/RomarioDelphin.github.io.git)

```

### 2. Execute

Basta clicar duas vezes no arquivo `index.html` ou usar a extensão "Live Server" do VS Code.

---

<div align="center">
<p>Design & Engenharia por <strong>Romário Delphin</strong>.</p>
<p>© 2026 RAM.IO Holdings.</p>
</div>
