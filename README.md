# Personal Portfolio Website

A modern, responsive portfolio website showcasing my software engineering projects, professional experience, and technical skills. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a clean, professional design.

🌐 **Live Demo**: [View Portfolio](https://your-domain.com)

---

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations using Framer Motion
- **Project Showcase**: Comprehensive portfolio of 10+ projects spanning AI/ML, web development, and game development
- **Interactive Sections**: Hero, About, Projects, Experience, and Contact sections with smooth scrolling
- **Component Library**: Built with shadcn/ui and Radix UI primitives for accessible, customizable components
- **Performance Optimized**: Fast loading times with Vite build tool and optimized assets
- **Type-Safe**: Full TypeScript implementation for robust code quality

---

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Development Tools
- **Linting**: ESLint with TypeScript support
- **Testing**: Vitest with React Testing Library
- **Package Manager**: npm

---

## 📁 Project Structure

```
per_web_venzer/
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # shadcn/ui base components
│   │   │   ├── Navbar.tsx       # Navigation bar
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   ├── Layout.tsx       # Page layout wrapper
│   │   │   └── NavLink.tsx      # Navigation link component
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx         # Hero/landing section
│   │   │   ├── About.tsx        # About me section
│   │   │   ├── Projects.tsx     # Projects showcase
│   │   │   ├── Experience.tsx   # Work & education timeline
│   │   │   └── Contact.tsx      # Contact information
│   │   ├── data/                # Static content
│   │   │   ├── projects.ts      # Project data and metadata
│   │   │   ├── experience.ts    # Work and education history
│   │   │   └── skills.ts        # Technical skills
│   │   ├── pages/               # Route pages
│   │   │   ├── Index.tsx        # Main portfolio page
│   │   │   └── NotFound.tsx     # 404 page
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utility functions
│   │   ├── contexts/            # React context providers
│   │   ├── test/                # Test setup and examples
│   │   ├── App.tsx              # Main app component
│   │   ├── main.tsx             # Application entry point
│   │   └── index.css            # Global styles
│   ├── public/
│   │   ├── images/              # Project images and assets
│   │   └── pdfs/                # CV and documents
│   ├── dist/                    # Production build output
│   ├── package.json             # Dependencies and scripts
│   ├── vite.config.ts           # Vite configuration
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── tsconfig.json            # TypeScript configuration
│   └── vitest.config.ts         # Vitest test configuration
├── LICENSE                      # Project license
└── README.md                    # This file
```

---

## 🎯 Featured Projects

### AI & Machine Learning
- **Langdrill**: AI-enhanced educational platform with React TypeScript frontend and Python FastAPI backend
- **TuneTools**: Pipeline that turns daily context into personalized songs using LLM and YuE model
- **Bachelor Thesis**: Comparative study of ML classification models for diabetes detection
- **Drone Sound Detection**: ML project for detecting and classifying drone audio using CNN and traditional ML
- **Emotional Detection**: Deep learning model for detecting 7 emotions from face images

### Web Development
- **Simple Chat**: AI-powered chat app with Flutter mobile client and FastAPI backend
- **Rift Rewind**: League of Legends coaching dashboard with React frontend and FastAPI backend
- **MaxxWatt**: Energy management platform with real-time analytics and anomaly detection

### Game Development
- **Nothingness**: Unity 2D space shooter with dynamic difficulty scaling and buff/debuff system

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rouxxel/per_web_venzer.git
   cd per_web_venzer/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

   The production build will be output to the `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint for code quality
npm run preview      # Preview production build locally
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

---

## 🎨 Customization

### Updating Content

- **Projects**: Edit `frontend/src/data/projects.ts` to add/modify project entries
- **Experience**: Edit `frontend/src/data/experience.ts` to update work history and education
- **Skills**: Edit `frontend/src/data/skills.ts` to modify technical skills
- **Images**: Add project images to `frontend/public/images/`
- **Documents**: Add CV/resume to `frontend/public/pdfs/`

### Styling

- **Theme**: Modify `frontend/tailwind.config.ts` for color schemes and design tokens
- **Global Styles**: Edit `frontend/src/index.css` for global CSS
- **Components**: Customize shadcn/ui components in `frontend/src/components/ui/`

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the root directory to `frontend`
4. Deploy

### Other Platforms

The project can be deployed to any static hosting service:
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist/` folder to an S3 bucket
- **Cloudflare Pages**: Connect your GitHub repository

---

## 💼 Professional Background

### Experience
- **UX/UI and Frontend Developer** at Langdrill (Stealth Startup) — 06.2025 to 07.2025
- **Backend Developer** at Siemens AG — 10.2024 to 04.2025

### Education
- **B.Sc. Software Engineering** from University of Europe for Applied Sciences — 09.2022 to 08.2025
- Grade: 88.64/100 (1.7 in German grading system)

### Technical Skills
- **Languages**: Python, JavaScript, TypeScript, C/C++, C#, Dart, HTML5, CSS3
- **Frameworks**: React, Tailwind, Flutter, Unity
- **Databases**: PostgreSQL, MySQL
- **DevOps**: Docker, CI/CD, Git/GitHub
- **AI/ML**: Machine Learning, Deep Learning, Data Science

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

Feel free to reach out for collaborations, opportunities, or just to connect!

- **GitHub**: [Rouxxel](https://github.com/Rouxxel)
- **Portfolio**: [View Live Site](https://your-domain.com)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
