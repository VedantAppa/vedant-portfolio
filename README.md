# Vedant Sanjay Ghodeswar - Personal Developer Portfolio

A modern, responsive personal developer portfolio website designed for **Vedant Sanjay Ghodeswar** (Computer Engineering Student at Dr. D. Y. Patil College of Engineering and Innovation, Varale, Pune).

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Key Highlights & Design

- **Architecture:** Centralized configuration in `src/data/portfolio.ts` allows updating all information from a single file without modifying UI components.
- **Honest Proficiency Representation:** Explicit skill labels (**Intermediate** for C and C++, **Beginner** for Python and Data Structures) without exaggerated progress bars.
- **Dedicated Sections:**
  - **Hero:** Impactful introduction, quick tags, call-to-action buttons, and social profiles.
  - **About:** Comprehensive introduction, personal philosophy, "What makes me different" split-layout, and focus areas.
  - **Professional Strengths:** 8 core qualities with custom icons (Creativity, Leadership, Practical Thinking, etc.).
  - **Skills & Learning Trajectory:** Verified active skills alongside a curriculum roadmap for upcoming semesters.
  - **Projects Showcase:** Filterable showcase with editable demo cards, technology tags, and status badges.
  - **Education Timeline:** Highlights B.E. in Computer Engineering with editable placeholders for 12th/10th standard.
  - **Certifications & Achievements:** Placeholders with strict anti-fabrication policies.
  - **Interests & Hobbies:** Sports, Learning New Things, and Travelling with reflections on personal growth.
  - **Interactive Contact:** Form with real-time validation, copy-to-clipboard email utility, and mailto fallback.
  - **Theme Switcher:** Dark mode default (Deep Charcoal `#0B0D12` & Dark Navy `#111827`) with Light mode toggle.
  - **Resume Modal:** Preview and structured download with clear placement instructions.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure **Node.js** (v18 or higher) and **npm** are available on your system.

### 2. Run the Development Server
Open PowerShell or Terminal inside this folder:

```bash
npm run dev
```

The application will start at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
To create an optimized production build:

```bash
npm run build
```

---

## ✏️ How to Customize Your Portfolio

All data is separated from UI logic. You can update virtually everything inside one file:
📂 `src/data/portfolio.ts`

### 1. Updating Projects
In `src/data/portfolio.ts`, look for the `projects` array:
```ts
{
  id: "proj-1",
  title: "Your Project Name",
  description: "A description of what your application does and the problems it solves.",
  technologies: ["C++", "Data Structures", "Algorithms"],
  role: "Lead Developer",
  status: "Completed", // or 'Ongoing'
  githubUrl: "https://github.com/VedantAppa/your-repo",
  liveDemoUrl: "https://your-demo-link.com",
  featured: true,
  isPlaceholder: false,
  category: "Systems & Algorithms"
}
```

### 2. Adding Your Real Photograph
1. Save your photograph inside `src/assets/avatar.jpg` (or `.png`).
2. In `src/components/Hero.tsx`, replace the avatar placeholder container with an `<img>` tag:
```tsx
<img 
  src="/src/assets/avatar.jpg" 
  alt="Vedant Sanjay Ghodeswar" 
  className="w-full h-full object-cover rounded-2xl" 
/>
```

### 3. Adding Your Real Resume PDF
1. Place your compiled PDF in the `public/` directory named:
   `Vedant_Ghodeswar_Resume.pdf`
2. The download links in the Navbar, Hero, and Resume Modal will automatically serve it.

### 4. Adding Certifications & Achievements
In `src/data/portfolio.ts`, populate `certificationsPlaceholder` and `achievementsPlaceholder` with your genuine course completions (NPTEL, Coursera, HackerRank, etc.) and college hackathon results.

### 5. Connecting Contact Form to EmailJS / Formspree (Optional)
Currently, the contact form validates input and opens your pre-filled email client. If you want direct background email delivery:
1. Sign up for free at [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com).
2. Follow the integration comments in `src/components/Contact.tsx`.

---

## 🌐 Deploying to the Web

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### Deploying to Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).
