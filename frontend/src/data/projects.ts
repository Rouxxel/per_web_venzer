import type { ProjectClassification } from "./projectClassifications";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  classifications: ProjectClassification[];
  github?: string;
  demo?: string;
  live_demo?: string;
  image?: string;
}

export const projects_en: Project[] = [
  {
    title: "Siemens - High-Frequency Real Time Monitoring System",
    image: "/images/siemens/siemens_logo.png",
    description:
      "This is a joint project between RWTH Aachen university, Weiss spindletechnologies and Siemens; I architected, developed, tested and deployed a production-grade, multi-threaded real-time high-frequency monitoring backend system. The Python-based system ingests high-volume sensor data via a message broker (MQTT), monitors and analyzes machine runtime behavior and exports CSV outputs and Pandas/Matplotlib visualizations for further analysis. Source code and demos are not public (Siemens proprietary).",
    tags: [
      "Python",
      "Backend",
      "Real-time",
      "Pandas",
      "NumPy",
      "EDA",
      "Matplotlib",
      "SciPy",
      "Multithreading",
      "Message Broker",
      "Docker",
      "Git",
      "CI/CD",
      "Industrial",
    ],
    classifications: ["Backend", "Professional", "Industrial", "Standalone", "Research/Experimental"],
  },
  {
    title: "Langdrill (Stealth startup)",
    image: "/images/langdrill/langdrill_logo.png",
    description:
      "As a frontend developer, I worked on an AI-enhanced educational platform built on a React+TS frontend framework and Python-based FastAPI backend. It features role-based access for teachers/students, AI-powered exercise generation (writing, reading, listening with TTS and coversation with AI/voice agent), classroom management, assignment tracking, student analytics and template system. It was also connected to a Supabase database (PostgreSQL) for user authentication and data storage.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Generative AI",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "OpenAI API",
      "Redis",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Radix UI",
      "TanStack Query",
      "React Router",
      "Figma",
      "UX/UI Design",
      "REST API",
      "JWT",
      "Render",
      "Vercel"
    ],
    classifications: ["Frontend", "Database", "Web", "AI/Data", "Professional", "Educational"],
    github: "https://github.com/Rouxxel/langdrill",
    live_demo: "https://langdrill.vercel.app",
  },
  {
    title: "Simple Chat - AI-powered chatbot app",
    image: "/images/simple_chat/ic_launcher.jpeg",
    description:
      "AI-powered chatbot app built with a Flutter mobile client and Python-based FastAPI backend deployed on Render, using Gemini 2.5 Flash API and Supabase for user authentication, persistent chat history and user preferences and log in. The app is designed to be a way for users to converse with an AI chatbot with a personality of their choosing and maintain somewhat lasting conversation with it, although context and longterm memory remains a problem.",
    tags: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Generative AI",
      "Gemini API",
      "REST API",
      "JWT",
      "Render",
      "Docker",
      "Android Studio"
    ],
    classifications: ["Fullstack", "Mobile", "Database", "AI/Data", "Personal"],
    github: "https://github.com/Rouxxel/simple-chat",
  },
  {
    title: "Lol Coach - Rift Rewind platform",
    image: "/images/rift_rewind/logo_helmet.jpeg",
    description:
      "League of Legends coaching dashboard with a React+TS frontend and FastAPI backend that interfaces with the Riot Games API for match history, champion data and performance analytics. The webapp features a selection of pages for the user to go into detail about their match history, heroes sinergy, predictions among other things, always with a floating bubble to open a chatbot assistant that contains the context of the current page they are so they can obtain more precise insights.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Gemini API",
      "Python",
      "Riot Games API",
      "Game Analytics",
      "Context-aware chatbot",
      "REST API",
      "Docker",
      "Redis",
      "AWS",
      "Render",
      "Vercel"
    ],
    classifications: ["Fullstack", "Web", "AI/Data", "Hackathon", "Gaming"],
    github: "https://github.com/Rouxxel/rift_rewind_hckthn_frontnd",
    demo: "https://youtu.be/9y8Wq2M8i0E",
    live_demo: "https://rift-rewind-hckthn-frontnd.vercel.app",
  },
  {
    title: "TuneTools",
    image: "/images/tune_tools/logo-disk.jpeg",
    description:
      "Pipeline that turns daily context (news, weather, calendar) into personalized songs: an LLM generates music specs and lyrics, the YuE model synthesizes audio on RunPod and Gemini API creates album artwork to end up with a song for the user. Frontend is deployed on Vercel, Backed on Railway and it is connected to a Supabase database for user authentication, data collection and output (audio and artwork) preservation.",
    tags: [
      "React",
      "TypeScript",
      "Kiro",
      "FastAPI",
      "REST API",
      "Gemini API",
      "Python",
      "Supabase",
      "YuE",
      "RunPod",
      "LLM",
      "Generative AI",
      "Docker",
      "Vercel",
      "Railway",
      "Google Auth"
    ],
    classifications: ["Fullstack", "Web", "Database", "AI/Data", "Hackathon"],
    github: "https://github.com/peres84/TuneTools",
    demo: "https://youtu.be/93G2gHTA_DU",
  },
  {
    title: "Fintech CheckAI",
    image: "/images/fintech_checkai/opt_logo.jpg",
    description:
      "Fact-checking platform that verifies claims made in YouTube videos against official company quarterly reports with immutable versioned storage. Built with React+TS frontend and FastAPI backend, it uses Tower.dev + Apache Iceberg for document storage, RunPod for OCR/audio transcription, and LangChain + OpenAI for AI-powered analysis with credibility scoring and follow-up chat capabilities.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "OpenAI API",
      "LangChain",
      "Tower.dev",
      "Apache Iceberg",
      "RunPod",
      "Generative AI",
      "REST API",
      "Tailwind CSS",
      "shadcn/ui",
      "Docker",
      "ImageKit",
      "yt-dlp"
    ],
    classifications: ["Fullstack", "Web", "Finance/Fintech", "AI/Data", "Hackathon"],
    github: "https://github.com/peresramirez/FintechCheckAI",
  },
  {
    title: "Bachelor Thesis (Machine Learning)",
    image: "/images/thesis/graduation.png",
    description:
      "Comparative study of ML classification models for early diabetes detection on BRFSS 2015 health indicators: modular Python pipeline with Decision Tree, Logistic Regression, Random Forest, and SVM, plus EDA, SMOTE resampling, JSON config and centralized logging and results.",
    tags: [
      "Python",
      "scikit-learn",
      "pandas",
      "numpy",
      "ML",
      "Classifications",
      "Decision Tree",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "SMOTE",
      "EDA",
      "matplotlib",
      "seaborn",
      "Data science"
    ],
    classifications: ["AI/Data", "Research/Experimental", "MLOps", "University", "Personal"],
    github: "https://github.com/Rouxxel/thesis-bachelor",
  },
  {
    title: "Emotional Detection DL model",
    image: "/images/deep_learning/deep_learning.png",
    description:
      "Deep learning project for detecting 7 emotions from grayscale face images using transfer learning (DenseNet121) and a custom CNN, with CLI, webcam UI so it is possible to test the trained model live with their own faces, FER dataset from Kaggle, and optional TFLite/TensorRT/ONNX optimization.",
    tags: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "EDA",
      "CNN",
      "DenseNet121",
      "Transfer Learning",
      "Emotion Detection",
      "Computer Vision",
      "OpenCV",
      "FER",
      "Kaggle",
      "pandas",
      "numpy",
      "matplotlib",
      "Docker",
      "pytest"
    ],
    classifications: ["AI/Data", "Research/Experimental", "MLOps", "University"],
    github: "https://github.com/Rouxxel/Emotion_detection_DL_model_from_images",
  },
  {
    title: "Drone sound detection ML models",
    image: "/images/drone_detection/drone.png",
    description:
      "ML project for detecting and classifying the sound profile of a drone, a helicopter and background audio using CNN (Tiny and Robust) and traditional ML (Random Forest, SVM, XGBoost, Gradient Boosting) with MFCC features; target use case is to embedd it as a bulletproof vest add-on for omindirectional drone detection for preemptive alert to individual soldiers in the field.",
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "EDA",
      "ML",
      "DL",
      "CNN",
      "Audio Classifications",
      "Audio Recognition",
      "MFCC",
      "Librosa",
      "Random Forest",
      "SVM",
      "XGBoost",
      "Gradient Boosting",
      "pandas",
      "numpy",
      "matplotlib"
    ],
    classifications: ["AI/Data", "MLOps", "Hackathon", "Military", "Research/Experimental"],
    github: "https://github.com/Rouxxel/drone_sound_profile_detection",
  },
  {
    title: "Machine Learning Models",
    image: "/images/ml_various/ml_various.png",
    description:
      "Compilation of ML projects: classifications (Iris, breast cancer, Titanic, diabetes with Decision Tree, Logistic Regression, KNN, Random Forest, SVM), regression (company profit), and clustering (customer segmentation with K-Means and Hierarchical), using Python notebooks, scikist/-learn and other related libraries.",
    tags: [
      "Python",
      "scikit-learn",
      "pandas",
      "numpy",
      "EDA",
      "ML",
      "Clustering",
      "Decision Tree",
      "Logistic Regression",
      "KNN",
      "Random Forest",
      "SVM",
      "K-Means",
      "Hierarchical Clustering",
      "Linear Regression",
      "matplotlib",
      "seaborn"
    ],
    classifications: ["AI/Data", "MLOps", "University", "Research/Experimental"],
    github: "https://github.com/Rouxxel/ai_general",
  },
  {
    title: "Reusable code repository",
    image: "/images/python-various/web_programming_background.jpg",
    description:
      "Originally a python-only repository with a handful of terminal games written on scripts; nowadays I use it to store any kind of code snippet from any language that I have used that could be reused in future projects. There are utils, terminal games, games with UI, examples of API calls, UI components and even full deployable backend templates (RESTful, GraphQL and WebSocket). It is in constant growth because with each project I always end up extracting something that might be useful in the future",
    tags: [
      "Python",
      "C#",
      "Java",
      "Typescript",
      "React",
      "Tailwind CSS",
      "Nginx",
      "Linux",
      "Docker",
      "API integration",
      "Chrome extensions",
      "UI components",
      "Backend templates",
    ],
    classifications: ["Backend", "Tooling", "Personal", "Dev Tools"],
    github: "https://github.com/Rouxxel/python-various",
  },
  {
    title: "HelpVenz - Aid for Venezuela",
    image: "/images/helpvenz/logo.jpg",
    description:
      "Humanitarian aid coordination platform for Venezuela after the June 2026 earthquake. Mobile-first, Spanish-first platform that works with weak connection: unified feed for needs (rescue, water, medicine) and offers, person registry (missing/safe/deceased) searchable by name/age/zone, shelter offers/requests, affected buildings reporting with damage level and rescue priority, map view with clustering, and live dashboard. Features 'Brújula' AI assistant (LangChain ReAct over MiniMax M3) that queries HelpVenz database and web (Tavily) with live tool usage display. No registration required, real-time updates via Supabase Realtime, bilingual (ES/EN), Web Push notifications, and PWA. Built with Next.js 16 frontend, FastAPI backend, Supabase PostgreSQL (RLS for public reads, backend writes for security), and deployed on Vercel + FastAPI Cloud.",
    tags: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Supabase",
      "PostgreSQL",
      "Realtime",
      "Row Level Security",
      "MapLibre GL",
      "PWA",
      "MiniMax M3",
      "LangChain",
      "Tavily",
      "AI Assistant",
      "Rate Limiting",
      "CORS",
      "Cloudflare Turnstile",
      "Vercel",
      "FastAPI Cloud",
      "Disaster Response",
      "i18n"
    ],
    classifications: ["Fullstack", "Personal","Database","Web","Humanitarian","Disaster Relieve"],
    github: "https://github.com/peresramirez/helpvenz",
    live_demo: "https://helpvenz.vercel.app/",
  },
  {
    title: "MaxxWatt Energy Management Platform",
    image: "/images/maxxwatt/lightning.png",
    description:
      "Berlin Energy Hackathon 2025 submission: BESS monitoring and management platform with real-time analytics, anomaly detection and energy forecasting for Li-Ion Batteries used in Solar Panel systems for energy storage and management. System architecture and component design were modeled in Draw.io. FastAPI backend with SSE streaming and React dashboard (Vite, shadcn-ui, Tailwind).",
    tags: [
      "Python",
      "React",
      "TypeScript",
      "Vite",
      "shadcn-ui",
      "Tailwind CSS",
      "Live monitoring system",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-Learn",
      "SSE",
      "BESS",
      "Energy Management",
      "Anomaly Detection",
      "EDA",
      "Draw.io",
      "Software Architecture"
    ],
    classifications: ["Fullstack", "Web", "AI/Data", "Hackathon", "Industrial"],
    github: "https://github.com/Rouxxel/maxxwatt_hackathon",
    demo: "https://www.youtube.com/watch?v=sgxkg72gOhw",
  },
  {
    title: "MAXergy - Your green planer",
    image: "/images/maxergy/logo_bckgrnd_512.jpg",
    description:
      "AI-powered home energy upgrade planner for households. Features a mobile-first TanStack Start frontend and a FastAPI backend with Gemini API integration for personalized advice. Powered by a production-grade residential energy modeling pipeline that simulates BDEW H0 load profiles, degree-day heating, PV sizing, and annuity financing across 6 upgrade scenarios. Highlights rigorous research where four price forecasting models (Constant, Trend, ETS, SARIMA) were backtested against Destatis indices (2019–2025)",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Vite",
      "TanStack Start/Router/Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn-ui",
      "Gemini API",
      "Pandas",
      "Matplotlib",
      "BDEW",
      "Price Forecasting",
      "Docker",
      "Energy Management/Planning",
      "Solar PV",
    ],
    classifications: ["Fullstack", "Web", "Mobile", "AI/Data", "Hackathon", "Research/Experimental"],
    github: "https://github.com/Rouxxel/MAXergy",
    demo: "https://youtu.be/33z1vDMA3CQ",
  },
  {
    title: "Nothingness - 2D arcade game",
    image: "/images/nothingness/deepspace.jpeg",
    description:
      "Unity/C# 2D Arcade space shooter with 8-directional movement, dynamic difficulty scaling and a buff/debuff system. Features two enemy types (asteroids and enemy ships), several power-ups and power-downs (shield, speed boost/reduction), persistent high score tracking with JSON serialization, and comprehensive audio system with custom sprites made from scratch using pixel art software.",
    tags: [
      "Unity",
      "C#",
      "2D Game",
      "Game Development",
      "Unity 2D Physics",
      "Data Persistence",
      "JSON",
      "Singleton Pattern",
      "Component Pattern",
      "Audio System",
      "Dynamic Difficulty",
      "Collision Detection",
      "Sprite painting",
      "Animation",
      "AI orchestration",
      "Game design",
    ],
    classifications: ["Fullstack", "Personal", "Gaming", "Standalone"],
    github: "https://github.com/Rouxxel/Nothingness",
  },
  {
    title: "Pongilike - 2D Pong Game",
    image: "/images/pongilike/pingpongballart.png",
    description:
      "Unity/C# classic two-player Pong arcade game built with Unity's 2D physics system. Features physics-based ball movement with randomized direction and velocity control, collision detection for paddles and walls, an automatic scoring system with real-time UI updates and point notifications, pause/resume game flow control, and a comprehensive audio system with sound effects for hits, bounces, and scoring. All sprites and graphics were hand-drawn from scratch.",
    tags: [
      "Unity",
      "C#",
      "2D Game",
      "Game Development",
      "Unity 2D Physics",
      "JSON",
      "Singleton Pattern",
      "Component Pattern",
      "Audio System",
      "Multiplayer",
      "Collision Detection",
      "Sprite painting",
      "Animation",
      "Game design",
    ],
    classifications: ["Fullstack", "Personal", "Gaming", "Standalone"],
    github: "https://github.com/Rouxxel/Pongilike",
  },
  {
    title: "Atryon Chrome Extension",
    image: "/images/atryon_extension/logo.jpeg",
    description:
      "Chrome extension for virtual try-on: pick a garment from the page or by drag-and-drop, add your photo and get an AI-generated try-on result. Side panel UI with content script for \"select from page\"; FastAPI backend that performs calls to the Black Forest Labs API for their FLUX model for multi-image composition (MIC), with polling and download endpoints. Extra endpoints for future projects feat Text-To-Image (TTI) and Image Edit With Mask (IDWM) generation.",
    tags: [
      "Chrome Extension",
      "Manifest V3",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "Uvicorn",
      "Black Forest Labs",
      "FLUX model",
      "Virtual Try-On",
      "Multi-Image Composition (MIC)",
      "Image AI",
      "Docker",
      "SlowAPI",
      "Text-To-Image (TTI)",
      "Chrome APIs"
    ],
    classifications: ["Fullstack", "Web", "AI/Data", "Personal", "AR"],
    github: "https://github.com/Rouxxel/atryon_chrome_extension",
    demo:"https://youtu.be/chbujM2-rrA",
  },
  {
    title: "Prod Watch - Inventory and cashier system",
    image: "/images/prod_watch/logo_downscaled.jpg",
    description:
      "Multi-tenant SaaS inventory and point-of-sale system for businesses with one or more warehouses. Built with React 19 + TanStack Start frontend and Spring Boot 3 + Java 17 backend, it features stock movements (/IN /OUT /TRANSFER /ADJUSTMENT), cashier with multi-warehouse cart, transaction history, audit log and ecosystem-based multi-tenancy with RBAC. Uses Supabase PostgreSQL with Flyway migrations and Supabase Auth for JWT authentication.",
    tags: [
      "React",
      "TypeScript",
      "TanStack Start",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Java",
      "Spring Boot",
      "JPA",
      "Flyway",
      "PostgreSQL",
      "Supabase",
      "REST API",
      "Redis",
      "JWT",
      "Multi-tenancy",
      "RBAC",
      "Docker",
      "Vercel",
      "Render"
    ],
    classifications: ["Fullstack", "Database", "Web", "Personal", "Industrial", "Finance/Fintech", "Logistics/Supply Chain"],
    github: "https://github.com/Rouxxel/Prod_Watcher",
    //demo: "",
    live_demo: "https://prod-watcher.vercel.app/"
  },
  {
    title: "CorpuScan - Financial document summarization",
    image: "/images/corpus_scan/logo.jpeg",
    description:
      "Collaborated on a Big Berlin Hack project: CorpuScan turns dense financial documents into short executive video briefings and provides AI-powered audit investigation. Users upload a PDF, paste a URL, or type a query for video generation; or upload financial documents (CSV, TXT, XLSX, PDF, DOCX) for fraud investigation. The multi-agent pipeline (Gemini 2.5 Pro, OpenAI) extracts key financials, writes scripts, generates voiceover via ElevenLabs TTS, renders motion graphics with Hera API, and performs DFS-based document graph analysis with cross-file discrepancy detection and evidence-backed findings.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Python",
      "FastAPI",
      "Gemini API",
      "OpenAI API",
      "Generative AI",
      "ElevenLabs",
      "Hera API",
      "Tavily",
      "Cognee",
      "ffmpeg",
      "LLM",
      "Multi-agent",
      "Document Graph",
      "Fraud Detection",
      "Audit Investigation",
      "REST API",
      "Docker",
      "Vercel",
      "Business",
      "Finance",
      "Railway",
    ],
    classifications: ["Fullstack", "Web", "AI/Data", "Hackathon", "Finance/Fintech"],
    github: "https://github.com/peres84/corpuscan",
    demo: "https://youtu.be/tFiiEdAA90Q",
  },
  {
    title: "Companion Sonion - VSCode extension",
    image: "/images/companion_sonion/logo_companion.png",
    description:
      "VS Code extension and standalone Electron desktop app that brings animated companions into your workspace. The VS Code extension offers Panel and Explorer render modes with drag-and-drop movement, mouse wheel resize, custom assets (GIF/PNG/WebM), profile save/load, import/export, and persistent state. The standalone app provides transparent frameless windows that stay on top of other applications with system tray integration, keyboard shortcuts, and asset caching. Built for fun and customization.",
    tags: [
      "TypeScript",
      "VS Code Extension",
      "Electron",
      "Node.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Vanilla JS",
      "UX/UI Design",
      "Animation",
      "Developer Tools",
      "Productivity",
      "Customization",
      "Interactive UI",
      "Desktop App",
      "System Tray"
    ],
    classifications: ["Frontend", "Personal", "Tooling", "Dev Tools", "Standalone"],
    live_demo: "https://marketplace.visualstudio.com/items?itemName=Rouxxel.companion-sonion",
    github: "https://github.com/Rouxxel/companion_sonion",
  },
  {
    title: "Cogmerge - Collab tool",
    image: "/images/cogmerge/cogmerge.svg",
    description:
      "Cogmerge preserves the 'why' behind code decisions across a team - rejected alternatives, deliberate omissions, and load-bearing constraints that vanish when an agent conversation closes. Unlike Git, which indexes what exists, it indexes reasoning by code surface (path:symbol) via Cognee and Qdrant. SEAL captures intent from finished branches through agent subagents; CHECK retrieves matching records before merges and blocks contradictions with the original author's rationale. Zero-dependency Python stdlib install into any repo, works with Claude Code, Cursor, and Codex via agent skills and AGENTS.md - no CLI daemon, no MCP server. Optional Slack slash command for querying team memory without leaving chat.",
    tags: [
      "Python",
      "Cognee",
      "Qdrant",
      "Knowledge Graph",
      "Vector Search",
      "Agent Skills",
      "Claude Code",
      "Cursor",
      "Codex",
      "Git",
      "Slack",
      "OpenAI API",
      "Shell",
    ],
    classifications: ["AI/Data", "Backend", "Standalone", "Tooling", "Hackathon", "Dev Tools"],
    //live_demo: "",
    //demo: "",
    github: "https://github.com/peresramirez/Cogmerge",
  },
  {
    title: "Drone battery performance prediction system",
    image: "/images/drone_battery_prfmnce/drone_battery.png",
    description:
      "Hybrid physics + ML system for predicting and optimizing drone battery performance in cold environments. A 4-layer architecture: a feature engineering pipeline extracts 22 time-series features (thermal, electrical, motion) from raw telemetry; a PyTorch LSTM network forecasts next-step voltage and battery temperature using a sliding window; an Equivalent Circuit Model + lumped thermal simulator provides a physics baseline that the ML layer corrects residually; and a rule-based controller triggers current limiting and thermodynamic preheating based on predictions. Verified with a Hypothesis property-based test suite covering physics, model states, data transforms and controller boundaries.",
    tags: [
      "Python",
      "PyTorch",
      "LSTM",
      "scikit-learn",
      "TensorFlow",
      "EDA",
      "ML",
      "Deep Learning",
      "Time-Series",
      "Physics Simulation",
      "Hybrid Model",
      "Feature Engineering",
      "Performance Prediction",
      "Hypothesis",
      "Property-Based Testing",
      "pandas",
      "numpy",
      "matplotlib",
      "SciPy",
    ],
    classifications: ["AI/Data", "MLOps", "Hackathon", "Research/Experimental", "Industrial", "Military"],
    github: "https://github.com/Rouxxel/drone_battery_performance_prediction",
  },
  {
    title: "Ranting Chant - Housing middleman platform",
    image: "/images/ranting_chant/frut_logo.jpeg",
    description:
      "Full-stack property ops platform with a Frutiger Aero design. Tenants report housing and maintenance issues through natural-language chat with optional voice input; Google Gemini classifies requests by type, urgency, sentiment and escalation. Managers and owners use role-based dashboards to filter, approve and resolve requests, coordinate vendors and trigger email/SMS notifications via Resend and Twilio; possesses ElevenLabs and Gradium powering transcription and text-to-speech. Features a production-ready PostgreSQL database schema with normalized tables (units, request status/assignment history), Row Level Security (RLS) policies, and Supabase Auth mapping.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Python",
      "FastAPI",
      "Gemini API",
      "Generative AI",
      "ElevenLabs",
      "Twilio",
      "REST API",
      "PostgreSQL",
      "Supabase",
      "RLS",
      "MCP",
      "Docker",
      "Render",
      "Property Management",
    ],
    classifications: ["Fullstack", "Web", "Database", "Hackathon", "AI/Data", "MCP"],
    github: "https://github.com/Rouxxel/ranting_chant",
    demo: "https://youtu.be/IO3J0MM25KE",
    live_demo: "https://ranting-chant.vercel.app/",
  },
  {
    title: "VERTIAS protocol - PPAVI",
    image: "/images/veritas_ppavi/logo.png",
    description:
      "Privacy-Preserving Age Verification Infrastructure (PPAVI) - the v1 reference implementation of the VERITAS protocol. Monorepo MVP with a React + TanStack Start frontend (untrusted presentation layer on Cloudflare Workers), an ASP.NET Core 8 public REST API (multipart document intake, orchestration, one-time private-key delivery), a Rust gRPC cryptographic core (Ed25519 keys, issuer-scoped PseudoID, credential signing), and Supabase/PostgreSQL for public credential metadata only. Core privacy invariant: verify identity once, discard the document, retain only cryptographic proof, no PII, OCR output, or private keys stored server-side; the frontend never parses documents or performs crypto. The full registration pipeline is wired and testable end-to-end locally with synthetic documents; real government ID extraction and production HMAC/key custody remain deferred.",
    tags: [
      "React",
      "TypeScript",
      "TanStack Start",
      "TanStack Router",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Rust",
      "gRPC",
      "C#",
      "ASP.NET Core",
      ".NET",
      "Supabase",
      "PostgreSQL",
      "REST API",
      "Zod",
      "Docker",
      "Vitest",
      "Playwright",
    ],
    classifications: ["Fullstack", "Web", "Personal", "Privacy", "Government"],
    //live_demo: "",
    //demo: "",
    //github: "",
  },
  {
    title: "Personal portfolio website",
    image: "/images/logo.jpeg",
    description:
      "The website you are currently on: a responsive portfolio built with React + TypeScript (Vite), Tailwind CSS, and shadcn/ui (Radix UI). Uses Framer Motion animations, React Router, TanStack Query, and forms with React Hook Form + Zod; tested with Vitest/React Testing Library, linted with ESLint, and deployed on Vercel with GitHub Actions security auditing. Supports multiple languages.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "lucide-react",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "Vercel",
      "Responsive Design",
      "UX/UI Design",
      "HTML5"
    ],
    classifications: ["Frontend", "Web", "Personal"],
    live_demo: "https://per-web-venzer.vercel.app",
    github: "https://github.com/Rouxxel/per_web_venzer",
  },
];

//-------------------------------------------------------------------------
//------------------------SPANISH DESCRIPTIONS-----------------------------
//-------------------------------------------------------------------------
const projectDescriptionsEs: Record<string, string> = {
  "Siemens - High-Frequency Real Time Monitoring System":
    "Este es un proyecto conjunto entre la universidad RWTH Aachen, Weiss spindletechnologies y Siemens. Yo arquitecté, desarrollé, probé y desplegué un backend de monitoreo en tiempo real y alta frecuencia, multihilo y de nivel productivo para un proyecto conjunto con RWTH Aachen y Weiss Spindletechnologies. El sistema en Python admite grandes volúmenes de datos de sensores mediante un message broker, monitorea y analiza el comportamiento de la máquinas, exporta resultados en CSV y gráficos	con Pandas/Matplotlib para análisis post-test. El código fuente y demos no son públicos (propiedad de Siemens).",
  "Langdrill (Stealth startup)":
    "Como desarrollador frontend, trabajé en una plataforma educativa mejorada con IA construida con React+TS en frontend y FastAPI en backend. Incluye acceso por roles para profesores/estudiantes, generación de ejercicios con IA (escritura, lectura, escucha con TTS y conversación con agente de voz/IA), gestión de clases, seguimiento de tareas, analíticas de estudiantes y sistema de plantillas. También estaba conectada a Supabase (PostgreSQL) para autenticación y almacenamiento de datos.",
  "Simple Chat - AI-powered chatbot app":
    "Aplicación de chatbot que implementa una API de IA y fue construida con cliente móvil Flutter y backend FastAPI en Python desplegado en Render, usando la API Gemini 2.5 Flash y Supabase para autenticación, historial persistente y preferencias de usuario. La app está diseñada para conversar con un chatbot con personalidad configurable y mantener conversaciones más duraderas, aunque el contexto y la memoria a largo plazo siguen siendo un reto.",
  "Lol Coach - Rift Rewind platform":
    "Dashboard de coaching para League of Legends con frontend en React+TS y backend en FastAPI que se integra con la API de Riot Games para historial de partidas, datos de campeones y analíticas de rendimiento. La web ofrece varias páginas para profundizar en historial, sinergias y predicciones, además de una burbuja flotante para abrir un asistente conversacional con contexto de la página actual y obtener insights más precisos.",
  "TuneTools":
    "Pipeline que convierte contexto diario (noticias, clima, calendario) en canciones personalizadas: un LLM genera especificaciones y letras, el modelo YuE sintetiza audio en RunPod y la API de Gemini crea el arte del álbum para entregar una canción al usuario. El frontend está desplegado en Vercel, el backend en Railway, conectado a Supabase para autenticación y almacenamiento de audios/arte generados.",
  "Fintech CheckAI":
    "Plataforma de verificación de hechos que verifica las afirmaciones realizadas en videos de YouTube contra informes trimestrales oficiales de empresas con almacenamiento versionado inmutable. Construida con frontend React+TS y backend FastAPI, utiliza Tower.dev + Apache Iceberg para almacenamiento de documentos, RunPod para OCR/transcripción de audio, y LangChain + OpenAI para análisis potenciado por IA con puntuación de credibilidad y capacidades de chat de seguimiento.",  
  "Bachelor Thesis (Machine Learning)":
    "Estudio comparativo de modelos de clasificación de ML para detección temprana de diabetes en indicadores de salud BRFSS 2015: pipeline modular en Python con Decision Tree, Logistic Regression, Random Forest y SVM, además de EDA, remuestreo SMOTE, configuración JSON y logging centralizado de resultados.",
  "Emotional Detection DL model":
    "Proyecto de deep learning para detectar 7 emociones a partir de imágenes faciales en escala de grises usando transfer learning (DenseNet121) y una CNN personalizada, con CLI, interfaz de webcam para pruebas en vivo, dataset FER de Kaggle y optimización opcional con TFLite/TensorRT/ONNX.",
  "Drone sound detection ML models":
    "Proyecto de ML para detectar y clasificar el perfil sonoro de drones, helicópteros y audio de fondo usando CNN (Tiny y Robust) y ML tradicional (Random Forest, SVM, XGBoost, Gradient Boosting) con características MFCC; el caso de uso objetivo es integrarlo como accesorio en el chaleco antibalas para detección omnidireccional de drones y alerta preventiva para los soldados en el campo.",
  "Machine Learning Models":
    "Recopilación de proyectos de ML: clasificaciones (Iris, cáncer de mama, Titanic, diabetes con Decision Tree, Logistic Regression, KNN, Random Forest y SVM), regresión (beneficio empresarial) y clustering (segmentación de clientes con K-Means y Hierarchical), usando notebooks en Python, scikit-learn y otras librerías relacionadas.",
  "Reusable code repository":
    "Originalmente un repositorio de Python con algunos juegos en terminal en scripts; Hoy en día lo uso para almacenar cualquier tipo de snippet de código de cualquier lenguaje que haya usado y que podría ser reutilizado en futuros proyectos. Hay utils, juegos de terminal, juegos con UI, ejemplos de llamadas a APIs, componentes de UI e incluso plantillas de backend completas y desplegables (RESTful, GraphQL y WebSocket). Está en constante crecimiento porque con cada proyecto siempre termino extrayendo algo que podría ser útil en el futuro.",
  "HelpVenz - Aid for Venezuela":
    "Plataforma de coordinación de ayuda humanitaria para Venezuela tras el terremoto de junio de 2026. Plataforma móvil-primero, español-primero que funciona con conexión débil: feed unificado de necesidades (rescate, agua, medicinas) y ofertas, registro de personas (desaparecidas/a salvo/fallecidas) buscable por nombre/edad/zona, ofertas/solicitudes de refugio, reporte de edificios afectados con nivel de daño y prioridad de rescate, vista de mapa con clustering y dashboard en vivo. Incluye asistente de IA 'Brújula' (LangChain ReAct sobre MiniMax M3) que consulta la base de datos de HelpVenz y la web (Tavily) con visualización en vivo del uso de herramientas. Sin registro requerido, actualizaciones en tiempo real vía Supabase Realtime, bilingüe (ES/EN), notificaciones Web Push y PWA. Construido con frontend Next.js 16, backend FastAPI, Supabase PostgreSQL (RLS para lecturas públicas, escrituras vía backend para seguridad) y desplegado en Vercel + FastAPI Cloud.",
  "MaxxWatt Energy Management Platform":
    "Proyecto presentado en Berlin Energy Hackathon 2025: plataforma de monitoreo y gestión BESS con analíticas en tiempo real, detección de anomalías y pronóstico energético para baterias Li-Ion usadas en sistemas de Paneles Solares para manejo y almacenamiento de energía. La arquitectura del sistema y diseño de componentes se modelaron en Draw.io. Backend FastAPI con streaming SSE y dashboard en React (Vite, shadcn-ui, Tailwind).",
  "MAXergy - Your green planer":
    "Planificador de mejoras energéticas del hogar con IA para hogares. Cuenta con un frontend móvil en TanStack Start y un backend en FastAPI con integración de la API Gemini para asesoramiento personalizado. Impulsado por un pipeline de modelado de energía residencial de nivel de producción que simula perfiles de carga BDEW H0, calefacción por grados-día, dimensionamiento fotovoltaico y financiamiento de anualidades en 6 escenarios de mejora. Destaca una investigación rigurosa en la que se evaluaron cuatro modelos de previsión de precios (Constante, Tendencia, ETS, SARIMA) frente a los índices de precios de Destatis (2019-2025).",
  "Nothingness - 2D arcade game":
    "Juego 2D estilo arcade en Unity/C# con movimiento en 8 direcciones, escalado dinámico de dificultad y sistema de buffs/debuffs. Incluye dos tipos de enemigos (asteroides y nave enemigas), varios power-ups y power-downns (escudo, aumento/reducción de velocidad), persistencia de puntuación con serialización JSON y sistema de audio integral con sprites creados desde cero usando software para pixel art.",
  "Pongilike - 2D Pong Game":
    "Juego clásico de Pong para dos jugadores en Unity/C# con físicas 2D. Incluye movimiento de pelotas controlado por física (dirección y velocidad aleatorias), colisión con paletas y paredes, sistema automático de puntuación con notificaciones, control de flujo de pausa/reanudar y sistema de sonido con efectos para golpes, rebotes y puntuación. Todos los gráficos y sprites fueron dibujados a mano desde cero.",
  "Atryon Chrome Extension":
    "Extensión de Chrome como probador virtual: permite seleccionar una prenda desde la página o mediante arrastrar y soltar, subir una selfie y generar un resultado de prueba virtual con IA. Tiene interfaz en panel lateral con content script para 'seleccionar desde la página'; backend FastAPI que ejecuta llamados API de FLUX de Black Forest Labs para composición multi-imagen (MIC), con endpoints de sondeo y descarga. Incluye endpoints extra para futuras funciones de Text-To-Image (TTI) e Image Edit With Mask (IDWM).",
  "Prod Watch - Inventory and cashier system":
    "Sistema SaaS multi-arrendatario de inventario y punto de venta para empresas con uno o más almacenes. Construido con frontend React 19 + TanStack Start y backend Spring Boot 3 + Java 17, cuenta con movimientos de stock (/ENTRADA /SALIDA /TRANSFERENCIA /AJUSTE), cajero con carrito multi-almacén, historial de transacciones, log de auditoría y multi-tenancy basado en ecosistema con RBAC. Usa Supabase PostgreSQL con migraciones Flyway y Supabase Auth para autenticación JWT.",
  "Drone battery performance prediction system":
    "Sistema híbrido de física + ML para predecir y optimizar el rendimiento de baterías de drones en entornos fríos. Arquitectura de 4 capas: un pipeline de ingeniería de características extrae 22 features de series temporales (térmicas, eléctricas, de movimiento) de la telemetría bruta; una red LSTM en PyTorch predice el voltaje y la temperatura de la batería en el siguiente paso usando una ventana deslizante; un Modelo de Circuito Equivalente + simulador térmico proporciona una línea base física que la capa ML corrige de forma residual; y un controlador basado en reglas activa la limitación de corriente y el precalentamiento termodinámico según las predicciones. Verificado con una suite de tests de propiedades con Hypothesis que cubre física, estados del modelo, transformaciones de datos y límites del controlador.",
  "CorpuScan - Financial document summarization":
    "Colaboré en un proyecto para el Big Berlin Hack: CorpuScan convierte documentos financieros densos en breves briefings ejecutivos en video y proporciona investigación de auditoría potenciada por IA. Los usuarios suben un PDF, pegan una URL o escriben una query para generación de video; o suben documentos financieros (CSV, TXT, XLSX, PDF, DOCX) para investigación de fraude. El pipeline multi-agente (Gemini 2.5 Pro, OpenAI) extrae datos financieros clave, redacta guiones, genera narración con ElevenLabs TTS, renderiza gráficos en movimiento con Hera API, y realiza análisis de grafos de documentos basado en DFS con detección de discrepancias entre archivos y hallazgos respaldados por evidencia.",
  "Companion Sonion - VSCode extension":
    "Extensión de VS Code y aplicación de escritorio Electron independiente que añade compañeros animados a tu espacio de trabajo. La extensión de VS Code ofrece modos de renderizado Panel y Explorer con movimiento arrastrar-y-soltar, redimensionamiento con rueda del ratón, activos personalizados (GIF/PNG/WebM), guardar/cargar perfiles, importar/exportar y estado persistente. La aplicación independiente proporciona ventanas sin marco transparentes que se mantienen encima de otras aplicaciones con integración a la bandeja del sistema, atajos de teclado y caché de activos. Creado por diversión y personalización.",
  "Cogmerge - Collab tool":
    "Cogmerge preserva el 'por qué' detrás de las decisiones de código en un equipo - alternativas rechazadas, omisiones deliberadas y restricciones críticas que desaparecen cuando se cierra una conversación con el agente. A diferencia de Git, que indexa lo que existe, indexa el razonamiento por superficie de código (ruta:símbolo) vía Cognee y Qdrant. SEAL captura la intención de ramas terminadas mediante subagentes; CHECK recupera registros coincidentes antes de los merges y bloquea contradicciones con el razonamiento original del autor. Instalación con Python stdlib sin dependencias en cualquier repo, compatible con Claude Code, Cursor y Codex mediante agent skills y AGENTS.md - sin daemon CLI ni servidor MCP. Comando slash opcional en Slack para consultar la memoria del equipo sin salir del chat.",
  "Ranting Chant - Housing middleman platform":
    "Plataforma full-stack de operaciones inmobiliarias con diseño Frutiger Aero. Los inquilinos reportan incidencias de vivienda y mantenimiento mediante chat en lenguaje natural con entrada de voz opcional; Google Gemini clasifica solicitudes por tipo, urgencia, sentimiento y escalamiento. Gerentes y propietarios usan dashboards por rol para filtrar, aprobar y resolver solicitudes, coordinar proveedores y enviar notificaciones por email/SMS con Resend y Twilio; posee transcripción y text-to-speech de ElevenLabs y Gradium. Incorpora un esquema de base de datos PostgreSQL listo para producción con relaciones normalizadas (unidades, historial de estados/asignaciones), políticas de seguridad a nivel de fila (RLS) y mapeo de cuentas de usuario para la integración con Supabase Auth.",
  "VERTIAS protocol - PPAVI":
    "Infraestructura de Verificación de Edad que Preserva la Privacidad (PPAVI) - implementación de referencia v1 del protocolo VERITAS. MVP monorepo con frontend React + TanStack Start (capa de presentación no confiable en Cloudflare Workers), API REST pública ASP.NET Core 8 (ingesta multipart de documentos, orquestación, entrega única de clave privada), núcleo criptográfico Rust gRPC (claves Ed25519, PseudoID con alcance de emisor, firma de credenciales) y Supabase/PostgreSQL solo para metadatos públicos de credenciales. Invariante de privacidad central: verificar la identidad una vez, descartar el documento, conservar solo la prueba criptográfica, sin PII, salida OCR ni claves privadas almacenadas en el servidor; el frontend nunca analiza documentos ni realiza criptografía. El pipeline completo de registro está conectado y es testeable end-to-end localmente con documentos sintéticos; la extracción de IDs gubernamentales reales y la custodia de claves/HMAC de producción quedan pendientes.",
  "Personal portfolio website":
    "El sitio web en el que estás ahora: portafolio responsivo construido con React + TypeScript (Vite), Tailwind CSS y shadcn/ui (Radix UI). Usa animaciones con Framer Motion, React Router, TanStack Query y formularios con React Hook Form + Zod; probado con Vitest/React Testing Library, linting con ESLint y desplegado en Vercel con auditorías de seguridad en GitHub Actions. Tiene soporte para varios lenguajes",
};

//-------------------------------------------------------------------------
//------------------------FRENCH DESCRIPTIONS------------------------------
//-------------------------------------------------------------------------
const projectDescriptionsFr: Record<string, string> = {
  "Siemens - High-Frequency Real Time Monitoring System":
    "Ce un projet conjoint entre RWTH Aachen université, Weiss Spindletechnologies et Siemens. J’ai architecturé, développé, testé et déployé un backend de surveillance a temps réel et haute fréquence, multithread et de niveau production. Le système Python ingère de grands volumes de données de capteurs via un message broker, surveille et analyse le comportement des machines, et exporte des résultats en CSV et graphiques avec Pandas/Matplotlib pour analyse post-test. Le code source et les démonstrations sont pas publics (propriété de Siemens).",
  "Langdrill (Stealth startup)":
    "En tant que développeur frontend, j’ai travaillé sur une plateforme éducative améliorée par IA, construite avec React+TS pour le frontend et FastAPI pour le backend. Elle inclut un accès par rôle pour enseignants/étudiants, génération d’exercices IA (écriture, lecture, écoute avec TTS et conversation avec agent IA/voix), gestion de classes, suivi des devoirs, analyses des étudiants et système de templates. Elle était également connectée à Supabase (PostgreSQL) pour l’authentification et le stockage des données.",
  "Simple Chat - AI-powered chatbot app":
    "Application de chatbot alimentée par une API IA, construite avec un client mobile Flutter et un backend FastAPI en Python déployé sur Render, utilisant l’API Gemini 2.5 Flash et Supabase pour l’authentification, l’historique persistant et les préférences utilisateur. L’application permet de converser avec un chatbot à personnalité configurable et de maintenir des conversations relativement longues, bien que le contexte et la mémoire à long terme restent un défi.",
  "Lol Coach - Rift Rewind platform":
    "Tableau de bord de coaching pour League of Legends avec frontend en React+TS et backend FastAPI intégré à l’API Riot Games pour l’historique des matchs, les données des champions et les analyses de performance. Le site propose plusieurs pages pour explorer l’historique, les synergies et les prédictions, avec une bulle flottante ouvrant un assistant conversationnel contextualisé pour obtenir des insights précis.",
  "TuneTools":
    "Pipeline transformant le contexte quotidien (actualités, météo, calendrier) en chansons personnalisées : un LLM génère les spécifications et les paroles, le modèle YuE synthétise l’audio sur RunPod, et l’API Gemini crée la pochette de l’album pour livrer la chanson à l’utilisateur. Le frontend est déployé sur Vercel, le backend sur Railway, connecté à Supabase pour l’authentification et le stockage des fichiers audio et images générés.",
  "Fintech CheckAI":
    "Plateforme de vérification des faits qui vérifie les affirmations faites dans les vidéos YouTube par rapport aux rapports trimestriels officiels des entreprises avec un stockage versionné immuable. Construite avec un frontend React+TS et un backend FastAPI, elle utilise Tower.dev + Apache Iceberg pour le stockage de documents, RunPod pour l'OCR/transcription audio, et LangChain + OpenAI pour l'analyse alimentée par l'IA avec notation de crédibilité et capacités de chat de suivi.",
  "Bachelor Thesis (Machine Learning)":
    "Étude comparative de modèles de classification ML pour la détection précoce du diabète sur les indicateurs de santé BRFSS 2015 : pipeline Python modulaire avec Decision Tree, Logistic Regression, Random Forest et SVM, plus EDA, suréchantillonnage SMOTE, configuration JSON et journalisation centralisée des résultats.",
  "Emotional Detection DL model":
    "Projet de deep learning pour détecter 7 émotions à partir d’images faciales en niveaux de gris, utilisant transfer learning (DenseNet121) et un CNN personnalisé, avec CLI, interface webcam pour tests en direct, dataset FER de Kaggle, et optimisation optionnelle TFLite/TensorRT/ONNX.",
  "Drone sound detection ML models":
    "Projet ML pour détecter et classifier le profil sonore de drones, hélicoptères et sons de fond en utilisant CNN (Tiny et Robust) et ML traditionnel (Random Forest, SVM, XGBoost, Gradient Boosting) avec caractéristiques MFCC; cas d’usage cible : intégrer le système comme accessoire sur un gilet pare-balles pour détection omnidirectionnelle de drones et alertes préventives pour les soldats sur le terrain.",
  "Machine Learning Models":
    "Portfolio de projets ML : classifications (Iris, cancer du sein, Titanic, diabète avec Decision Tree, Logistic Regression, KNN, Random Forest, SVM), régressions (profits d’entreprise) et clustering (segmentation clients avec K-Means et Hierarchical), utilisant des notebooks Python, scikit-learn et autres librairies associées.",
  "Reusable code repository":
    "À l’origine un repo de code Python avec quelques jeux de terminal écrits dans des scripts; Aujourd’hui je l’utilise pour stocker tout type de snippet de code de n’importe quel langage que j’ai utilisé et qui pourrait être réutilisé dans de futurs projets. Il contient des utils, des jeux de terminal, des jeux avec UI, des exemples d’appels API, des composants UI et même des templates backend complets et déployables (RESTful, GraphQL et WebSocket). Il est en constante évolution car à chaque projet j’y extrais toujours quelque chose qui pourrait être utile à l’avenir.",
  "HelpVenz - Aid for Venezuela":
    "Plateforme de coordination d'aide humanitaire pour le Venezuela après le séisme de juin 2026. Plateforme mobile-first, espagnol-first qui fonctionne avec connexion faible : feed unifié de besoins (secours, eau, médicaments) et offres, registre de personnes (disparues/saines/décédées) searchable par nom/âge/zone, offres/demandes de refuge, signalement de bâtiments affectés avec niveau de dégâts et priorité de secours, vue de carte avec clustering et dashboard en temps réel. Inclut assistant IA 'Brújula' (LangChain ReAct sur MiniMax M3) qui interroge la base de données HelpVenz et le web (Tavily) avec visualisation en temps réel de l'utilisation des outils. Sans inscription requise, mises à jour en temps réel via Supabase Realtime, bilingue (ES/EN), notifications Web Push et PWA. Construit avec frontend Next.js 16, backend FastAPI, Supabase PostgreSQL (RLS pour lectures publiques, écritures via backend pour sécurité) et déployé sur Vercel + FastAPI Cloud.",
  "MaxxWatt Energy Management Platform":
    "Projet présenté au Berlin Energy Hackathon 2025 : plateforme de monitoring et gestion BESS avec analytics temps réel, détection d’anomalies et prévisions énergétiques pour batteries Li-Ion utilisées dans des systèmes de panneaux solaires. Architecture système et design des composants modélisés sur Draw.io. Backend FastAPI avec streaming SSE et dashboard React (Vite, shadcn-ui, Tailwind).",
  "MAXergy - Your green planer":
    "Planificateur de rénovation énergétique résidentielle alimenté par l'IA pour les ménages. Comprend un frontend mobile sous TanStack Start et un backend FastAPI intégré à l'API Gemini pour des conseils personnalisés. Propulsé par un pipeline de modélisation énergétique résidentielle de niveau production qui simule les profils de charge BDEW H0, le chauffage par degrés-jours, le dimensionnement photovoltaïque et le financement par annuités à travers 6 scénarios d'évolution. Met en valeur une recherche rigoureuse où quatre modèles de prévision des prix (Constant, Tendance, ETS, SARIMA) ont été testés par rapport aux indices de Destatis (2019-2025).",
  "Nothingness - 2D arcade game":
    "Jeu arcade 2D Unity/C# avec mouvement sur 8 directions, scaling dynamique de la difficulté et système de buffs/debuffs. Comprend deux types d’ennemis (astéroïdes et vaisseau spatial ennemi), plusieurs power-ups et power-downs (bouclier, augmentation/diminution de vitesse, augmentation/diminution de la vie), persistance du meilleur score via sérialisation JSON et système audio complet avec sprites faits maison avec pixel art software.",
  "Pongilike - 2D Pong Game":
    "Jeu de Pong classique à deux joueurs créé avec Unity/C# et son système de physique 2D. Inclut un mouvement de balle contrôlé par la physique avec direction et vitesse aléatoires, détection de collision avec les palettes et les murs, système de score automatique avec mises à jour UI en temps réel et notifications de points, contrôle de flux pour pause/relance, et un système audio complet avec effets sonores pour les impacts, les rebonds et le score. Tous les graphiques et sprites ont été dessinés à la main.",
  "Atryon Chrome Extension":
    "Extension Chrome de try-on virtuel : permet de sélectionner un vêtement depuis la page ou par glisser-déposer, ajouter un selfie et obtenir un résultat IA. UI en panneau latéral avec content script pour « sélectionner depuis la page »; backend FastAPI exécutant l’API FLUX de Black Forest Labs pour composition multi-images (MIC), avec endpoints de polling et téléchargement. Endpoints supplémentaires pour futures fonctionnalités Text-To-Image (TTI) et Image Edit With Mask (IDWM).",
  "Prod Watch - Inventory and cashier system":
    "Système SaaS multi-tenancy d'inventaire et de point de vente pour entreprises avec un ou plusieurs entrepôts. Construit avec frontend React 19 + TanStack Start et backend Spring Boot 3 + Java 17, il comporte des mouvements de stock (/ENTRÉE /SORTIE /TRANSFERT /AJUSTEMENT), caisse avec panier multi-entrepôt, historique de transactions, log d'audit et multi-tenancy basé sur écosystème avec RBAC. Utilise Supabase PostgreSQL avec migrations Flyway et Supabase Auth pour authentification JWT.",  
  "Drone battery performance prediction system":
    "Système hybride physique + ML pour prédire et optimiser les performances des batteries de drones dans des environnements froids. Architecture en 4 couches : un pipeline d’ingénierie des caractéristiques extrait 22 features de séries temporelles (thermiques, électriques, de mouvement) depuis la télémétrie brute ; un réseau LSTM PyTorch prédit la tension et la température de la batterie à l’étape suivante via une fenêtre glissante ; un Modèle de Circuit Équivalent + simulateur thermique fournit une baseline physique que la couche ML corrige de façon résiduelle ; et un contrôleur à base de règles déclenche la limitation de courant et le préchauffage thermodynamique selon les prédictions. Vérifié avec une suite de tests de propriétés Hypothesis couvrant la physique, les états du modèle, les transformations de données et les limites du contrôleur.",
  "CorpuScan - Financial document summarization":
    "J'ai collaboré à un projet pour le Big Berlin Hack: CorpuScan transforme des documents financiers denses en courtes vidéos de briefing exécutif et fournit une investigation d'audit alimentée par l'IA. Les utilisateurs téléchargent un PDF, collent une URL ou saisissent une requête pour la génération de vidéo; ou téléchargent des documents financiers (CSV, TXT, XLSX, PDF, DOCX) pour l'investigation de fraude. Le pipeline multi-agents (Gemini 2.5 Pro, OpenAI) extrait les données financières clés, rédige des scripts, génère la narration via ElevenLabs TTS, rend les motion graphics avec l'API Hera, et effectue une analyse de graphes de documents basée sur DFS avec détection de discrepancies inter-fichiers et résultats soutenus par des preuves.",
  "Companion Sonion - VSCode extension":
    "Extension VS Code et application de bureau Electron autonome qui ajoute des compagnons animés à votre espace de travail. L'extension VS Code offre des modes de rendu Panel et Explorer avec mouvement glisser-déposer, redimensionnement à la molette, actifs personnalisés (GIF/PNG/WebM), sauvegarde/chargement de profils, import/export et état persistant. L'application autonome fournit des fenêtres transparentes sans cadre qui restent au-dessus des autres applications avec intégration à la barre d'état système, raccourcis clavier et cache d'actifs. Créé pour le plaisir et la personnalisation.",
  "Cogmerge - Collab tool":
    "Cogmerge préserve le « pourquoi » des décisions de code au sein d'une équipe - alternatives rejetées, omissions délibérées et contraintes critiques qui disparaissent quand une conversation agent se ferme. Contrairement à Git, qui indexe ce qui existe, il indexe le raisonnement par surface de code (chemin:symbole) via Cognee et Qdrant. SEAL capture l'intention des branches terminées via des sous-agents ; CHECK récupère les enregistrements correspondants avant les merges et bloque les contradictions avec le raisonnement original de l'auteur. Installation Python stdlib sans dépendances dans n'importe quel repo, compatible avec Claude Code, Cursor et Codex via agent skills et AGENTS.md - pas de daemon CLI ni de serveur MCP. Commande slash Slack optionnelle pour interroger la mémoire d'équipe sans quitter le chat.",
  "Ranting Chant - Housing middleman platform":
    "Plateforme full-stack d'opérations immobilières avec un design Frutiger Aero. Les locataires signalent des problèmes de logement et de maintenance via un chat en langage naturel avec saisie vocale optionnelle ; Google Gemini classe les demandes par type, urgence, sentiment et escalade. Gestionnaires et propriétaires utilisent des tableaux de bord par rôle pour filtrer, approuver et résoudre les demandes, coordonner les prestataires et déclencher des notifications email/SMS via Resend et Twilio, avec transcription et synthèse vocale ElevenLabs et Gradium. Intègre un schéma de base de données PostgreSQL prêt pour la production avec des relations normalisées (unités, historique des statuts/affectations), des politiques de sécurité au niveau des lignes (RLS) et un mappage des comptes utilisateurs pour l'intégration de Supabase Auth.",
  "VERTIAS protocol - PPAVI":
    "Infrastructure de Vérification d'Âge Préservant la Confidentialité (PPAVI) - implémentation de référence v1 du protocole VERITAS. MVP monorepo avec frontend React + TanStack Start (couche de présentation non fiable sur Cloudflare Workers), API REST publique ASP.NET Core 8 (prise en charge multipart de documents, orchestration, livraison unique de clé privée), cœur cryptographique Rust gRPC (clés Ed25519, PseudoID à portée émetteur, signature de credentials) et Supabase/PostgreSQL pour les métadonnées publiques uniquement. Invariant de confidentialité central : vérifier l'identité une fois, supprimer le document, ne conserver que la preuve cryptographique, pas de PII, sortie OCR ni clés privées stockées côté serveur ; le frontend n'analyse jamais les documents ni effectue de cryptographie. Le pipeline d'enregistrement complet est câblé et testable end-to-end localement avec des documents synthétiques ; l'extraction d'IDs gouvernementaux réels et la garde de clés/HMAC de production restent à implémenter.",
  "Personal portfolio website":
    "Le site que vous consultez actuellement : portfolio responsive construit avec React + TypeScript (Vite), Tailwind CSS et shadcn/ui (Radix UI). Utilise Framer Motion, React Router, TanStack Query et formulaires avec React Hook Form + Zod; testé avec Vitest/React Testing Library, linté avec ESLint et déployé sur Vercel avec audits de sécurité GitHub Actions. Prise en charge multilingue incluse.",
};

//-------------------------------------------------------------------------
//------------------------GERMAN DESCRIPTIONS------------------------------
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//---------------------------------Exports---------------------------------
//-------------------------------------------------------------------------
//export const projects_language: Project[] = projects_en.map((project) => ({
//  ...project,
//  description: projectDescriptionslanguage[project.title] ?? project.description,
//  tags: [...project.tags],
//  classifications: [...project.classifications],
//}));
export const projects_fr: Project[] = projects_en.map((project) => ({
  ...project,
  description: projectDescriptionsFr[project.title] ?? project.description,
  tags: [...project.tags],
  classifications: [...project.classifications],
}));

export const projects_es: Project[] = projects_en.map((project) => ({
  ...project,
  description: projectDescriptionsEs[project.title] ?? project.description,
  tags: [...project.tags],
  classifications: [...project.classifications],
}));

/** Returns language-specific projects, with English fallback. */
export const getProjectsByLanguage = (languageCode: string): Project[] => {
  //if (languageCode === "languagecode") return projects_language;
  if (languageCode === "fr") return projects_fr;
  if (languageCode === "es") return projects_es;
  return projects_en;
};
