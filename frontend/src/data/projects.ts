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
    classifications: ["Frontend", "Database", "Web", "AI / Data", "Professional", "Educational"],
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
    classifications: ["Fullstack", "Mobile", "Database", "AI / Data", "Personal"],
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
      "AWS",
      "Render",
      "Vercel"
    ],
    classifications: ["Fullstack", "Web", "AI / Data", "Hackathon", "Gaming"],
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
    classifications: ["Fullstack", "Web", "Database", "AI / Data", "Hackathon"],
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
    classifications: ["Fullstack", "Web", "Finance/Fintech", "AI / Data", "Hackathon"],
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
    classifications: ["AI / Data", "Research/Experimental", "MLOps", "University", "Personal"],
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
    classifications: ["AI / Data", "Research/Experimental", "MLOps", "University"],
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
    classifications: ["AI / Data", "MLOps", "Hackathon", "Military", "Research/Experimental"],
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
    classifications: ["AI / Data", "MLOps", "University", "Research/Experimental"],
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
    classifications: ["Backend", "Tooling", "Personal", "Dev Tools", "Customization"],
    github: "https://github.com/Rouxxel/python-various",
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
    classifications: ["Fullstack", "Web", "AI / Data", "Hackathon", "Industrial"],
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
    classifications: ["Fullstack", "Web", "Mobile", "AI / Data", "Hackathon", "Research/Experimental"],
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
    classifications: ["Fullstack", "Web", "AI / Data", "Personal", "AR"],
    github: "https://github.com/Rouxxel/atryon_chrome_extension",
  },
  {
    title: "CorpuScan - Financial document summarization",
    image: "/images/corpus_scan/logo.jpeg",
    description:
      "Collaborated on a Big Berlin Hack project: CorpuScan turns dense financial documents into short executive video briefings. Users upload a PDF, paste a URL, or type a query; a multi-agent pipeline (Gemini 2.5 Pro) extracts key financials, writes a 4-scene script, generates voiceover via ElevenLabs TTS, renders motion graphics with the Hera API in parallel, and stitches everything into a playable MP4 with ffmpeg.",
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
      "Generative AI",
      "ElevenLabs",
      "Hera API",
      "Tavily",
      "ffmpeg",
      "LLM",
      "Multi-agent",
      "REST API",
      "Docker",
      "Vercel",
      "Business",
      "Finance",
      "Railway",
    ],
    classifications: ["Fullstack", "Web", "AI / Data", "Hackathon", "Finance/Fintech"],
    github: "https://github.com/peres84/corpuscan",
    demo: "https://youtu.be/-YFkeoVrajU",
  },
  {
    title: "Companion Sonion - VSCode extension",
    image: "/images/companion_sonion/logo_companion.png",
    description:
      "Simple VSCode extension to adds animated 'companion' entities into a panel. Users can spawn multiple GIF/PNG/WebM companions, drag and resize them freely and customize the one they want to render. It supports persistent state across sessions and profile saving/loading. I just wanted to have fun, might add more things",
    tags: [
      "TypeScript",
      "VS Code Extension",
      "Node.js",
      "Electron (VS Code runtime)",
      "React (UI panel)",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "UX/UI Design",
      "Animation",
      "Developer Tools",
      "Productivity",
      "Customization",
      "Interactive UI"
    ],
    classifications: ["Frontend", "Personal", "Tooling", "Dev Tools", "Customization"],
    live_demo: "https://marketplace.visualstudio.com/items?itemName=Rouxxel.companion-sonion",
    github: "https://github.com/Rouxxel/companion_sonion",
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
    classifications: ["AI / Data", "MLOps", "Hackathon", "Research/Experimental", "Industrial", "Military"],
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
    classifications: ["Fullstack", "Web", "Database", "Hackathon", "AI / Data", "MCP"],
    github: "https://github.com/Rouxxel/ranting_chant",
    live_demo: "https://ranting-chant.vercel.app/",
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
  "Drone battery performance prediction system":
    "Sistema híbrido de física + ML para predecir y optimizar el rendimiento de baterías de drones en entornos fríos. Arquitectura de 4 capas: un pipeline de ingeniería de características extrae 22 features de series temporales (térmicas, eléctricas, de movimiento) de la telemetría bruta; una red LSTM en PyTorch predice el voltaje y la temperatura de la batería en el siguiente paso usando una ventana deslizante; un Modelo de Circuito Equivalente + simulador térmico proporciona una línea base física que la capa ML corrige de forma residual; y un controlador basado en reglas activa la limitación de corriente y el precalentamiento termodinámico según las predicciones. Verificado con una suite de tests de propiedades con Hypothesis que cubre física, estados del modelo, transformaciones de datos y límites del controlador.",
  "CorpuScan - Financial document summarization":
    "Colaboré en un proyecto para el Big Berlin Hack: CorpuScan convierte documentos financieros densos en breves briefings ejecutivos en video. Usuarios suben un PDF, pegan una URL o una query; el pipeline multi-agente (Gemini 2.5 Pro) extrae los datos financieros clave, redacta un guion de 4 escenas, genera la narración con ElevenLabs TTS, renderiza gráficos en movimiento con la API de Hera en paralelo y ensambla todo en un MP4 reproducible con ffmpeg.",
  "Companion Sonion - VSCode extension":
    "Extensión simple de VSCode que agrega entidades 'companion' animadas en un panel. Usuarios pueden generar múltiples compañeros en formato GIF/PNG/WebM, arrastrarlos y redimensionarlos, también personalizar el que quieran renderizar. Posee estado persistente entre sesiones y guardado/carga de perfiles. Solo quería divertirme",
  "Ranting Chant - Housing middleman platform":
    "Plataforma full-stack de operaciones inmobiliarias con diseño Frutiger Aero. Los inquilinos reportan incidencias de vivienda y mantenimiento mediante chat en lenguaje natural con entrada de voz opcional; Google Gemini clasifica solicitudes por tipo, urgencia, sentimiento y escalamiento. Gerentes y propietarios usan dashboards por rol para filtrar, aprobar y resolver solicitudes, coordinar proveedores y enviar notificaciones por email/SMS con Resend y Twilio; posee transcripción y text-to-speech de ElevenLabs y Gradium. Incorpora un esquema de base de datos PostgreSQL listo para producción con relaciones normalizadas (unidades, historial de estados/asignaciones), políticas de seguridad a nivel de fila (RLS) y mapeo de cuentas de usuario para la integración con Supabase Auth.",
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
  "Drone battery performance prediction system":
    "Système hybride physique + ML pour prédire et optimiser les performances des batteries de drones dans des environnements froids. Architecture en 4 couches : un pipeline d’ingénierie des caractéristiques extrait 22 features de séries temporelles (thermiques, électriques, de mouvement) depuis la télémétrie brute ; un réseau LSTM PyTorch prédit la tension et la température de la batterie à l’étape suivante via une fenêtre glissante ; un Modèle de Circuit Équivalent + simulateur thermique fournit une baseline physique que la couche ML corrige de façon résiduelle ; et un contrôleur à base de règles déclenche la limitation de courant et le préchauffage thermodynamique selon les prédictions. Vérifié avec une suite de tests de propriétés Hypothesis couvrant la physique, les états du modèle, les transformations de données et les limites du contrôleur.",
  "CorpuScan - Financial document summarization":
    "J'ai collaboré à un projet pour le Big Berlin Hack: CorpuScan transforme des documents financiers denses en courtes vidéos de briefing exécutif. Les utilisateurs téléchargent un PDF, collent une URL ou saisissent une requête; un pipeline multi-agents (Gemini 2.5 Pro) extrait les données financières clés, rédige un script en 4 scènes, génère la narration via ElevenLabs TTS, rend les motion graphics avec l'API Hera en parallèle, et assemble le tout en un MP4 lisible avec ffmpeg.",
  "Companion Sonion - VSCode extension":
    "Extension VSCode simple qui ajoute des entités 'companion' animées dans un panneau. Users peuvent générer plusieurs compagnons au format GIF/PNG/WebM, les faire glisser et les redimensionner, ainsi que personnaliser celui qu'ils souhaitent rendre. Il dispose d'un état persistant entre les sessions et de la sauvegarde/chargement de profils. Je voulais juste m'amuser",
  "Ranting Chant - Housing middleman platform":
    "Plateforme full-stack d'opérations immobilières avec un design Frutiger Aero. Les locataires signalent des problèmes de logement et de maintenance via un chat en langage naturel avec saisie vocale optionnelle ; Google Gemini classe les demandes par type, urgence, sentiment et escalade. Gestionnaires et propriétaires utilisent des tableaux de bord par rôle pour filtrer, approuver et résoudre les demandes, coordonner les prestataires et déclencher des notifications email/SMS via Resend et Twilio, avec transcription et synthèse vocale ElevenLabs et Gradium. Intègre un schéma de base de données PostgreSQL prêt pour la production avec des relations normalisées (unités, historique des statuts/affectations), des politiques de sécurité au niveau des lignes (RLS) et un mappage des comptes utilisateurs pour l'intégration de Supabase Auth.",
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
