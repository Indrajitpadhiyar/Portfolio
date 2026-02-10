<div align="center">

# 🚀 Cinematic Developer Portfolio

### ✨ Scroll • Animate • Experience

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/FramerMotion-Animation-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-88ce02?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Lenis-SmoothScroll-purple?style=for-the-badge" />
</p>

---

### 🎥 A cinematic, scroll-driven, animated portfolio built with React & Tailwind CSS

</div>

---

## 🌌 Preview

> A premium developer portfolio that feels like a movie while scrolling.

---

## ✨ Features

- 🎬 Scroll-controlled Hero Video (GSAP ScrollTrigger)
- 🌗 Light / Dark Theme Toggle
- 🧊 Glassmorphism UI
- 🧭 Ultra Smooth Scrolling (Lenis)
- 🌀 3D Motion Effects (No 3D models)
- 💫 Parallax & Reveal Animations
- 📱 Fully Responsive
- 🧩 Modular Component Structure
- ⚡ Optimized Performance

---

## 🧠 Tech Stack

| Technology | Usage |
|------------|-------|
| React.js | Frontend Framework |
| Tailwind CSS | Styling |
| Framer Motion | Entry Animations |
| GSAP + ScrollTrigger | Scroll Based Effects |
| Lenis | Smooth Scrolling |
| React Icons | Icons |

src/
├── components/
│   ├── ThemeToggle.jsx        # Theme Switcher
│   ├── ThemeTransition.jsx    # Theme Transition Overlay
│   ├── Navbar.jsx             # Navigation
│   └── Footer.jsx             # Footer
├── context/
│   └── ThemeContext.jsx       # Theme Management
├── hooks/
│   └── useScroll.js           # Scroll Detection
├── sections/
│   ├── Hero.jsx               # Hero Section
│   ├── About.jsx              # About Section
│   ├── Skills.jsx             # Skills Section
│   ├── Projects.jsx           # Projects Section
│   └── Contact.jsx            # Contact Section
├── App.jsx                    # Main App
└── main.jsx                   # Entry Point
```

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🚀 Usage

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🎨 Customization

### Change Video
Edit `src/sections/Hero.jsx`:
```javascript
<video src="/your-video.mp4" ... />
```

### Change Theme Colors
Edit `src/index.css`:
```css
:root {
  --primary: #3b82f6;   /* Blue */
  --secondary: #8b5cf6; /* Purple */
}
```

### Add Projects
Edit `src/sections/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Description...",
    image: "/project.jpg",
    link: "#"
  }
];
