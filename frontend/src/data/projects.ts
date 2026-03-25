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
    title: "High-Frequency Real Time Monitoring System",
    image: "/images/siemens/siemens_logo.png",
    description:
      "As a backend developer at Siemens AG, I architected, developed, tested and deployed a production-grade, multi-threaded real-time high-frequency monitoring backend for a joint project with RWTH Aachen and Weiss Spindletechnologies. The Python system ingests high-volume sensor data via a message broker, monitors and analyzes machine runtime behavior, and exports CSV outputs and Pandas/Matplotlib visualizations for further analysis. Source code and demos are not public (Siemens proprietary).",
    tags: [
      "Python",
      "Backend",
      "Real-time",
      "Pandas",
      "NumPy",
      "Data analysis",
      "Matplotlib",
      "SciPy",
      "Multithreading",
      "Message Broker",
      "Docker",
      "Git",
      "CI/CD",
      "Industrial",
    ],
    classifications: ["Backend", "Professional", "Industrial"],
  },
  {
    title: "Langdrill (Stealth startup)",
    image: "/images/langdrill/logo.png",
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
    title: "Simple Chat",
    image: "/images/simple_chat/ic_launcher.png",
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
    title: "Rift Rewind",
    image: "/images/rift_rewind/logo_helmet.png",
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
      "REST API", 
      "Docker", 
      "AWS", 
      "Render", 
      "Vercel"
    ],
    classifications: ["Fullstack", "Web", "AI / Data", "Hackathon", "Gaming"],
    github: "https://github.com/Rouxxel/rift_rewind_hckthn_frontnd",
    //demo: "https://www.youtube.com/watch?v=uXalS69hPrE",
    live_demo: "https://rift-rewind-hckthn-frontnd.vercel.app",
  },
  {
    title: "TuneTools",
    image: "/images/tune_tools/logo-disk.png",
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
    demo: "https://vimeo.com/1143501418?fl=pl&fe=vl",
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
      "Data analysis",
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
    classifications: ["AI / Data", "University", "Research"],
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
      "Data analysis",
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
    classifications: ["AI / Data", "University", "Research"],
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
      "ML", 
      "DL", 
      "CNN", 
      "Data analysis",
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
    classifications: ["AI / Data", "Backend", "Hackathon", "Military", "Research"],
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
      "Data analysis",
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
    classifications: ["AI / Data", "University", "Research"],
    github: "https://github.com/Rouxxel/ai_general",
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
      "Pandas", 
      "SSE", 
      "BESS", 
      "Energy Management", 
      "Anomaly Detection", 
      "Data analysis",
      "Draw.io"
    ],
    classifications: ["Fullstack", "Web", "AI / Data", "Hackathon", "Industrial"],
    github: "https://github.com/Rouxxel/maxxwatt_hackathon",
    demo: "https://www.loom.com/share/cc96c4b830e947ff919d3910525a2384?sid=8c8c50da-bc06-47db-bb79-8650f1cb143f",
  },
  {
    title: "Nothingness 2D arcade game",
    image: "/images/nothingness/deepspace.png",
    description:
      "Unity/C# 2D space shooter with 8-directional movement, dynamic difficulty scaling and a buff/debuff system. Features two enemy types (asteroids, comet), several power-ups (shield, speed boost/reduction), persistent high score tracking with JSON serialization, and comprehensive audio system with custom sprites made from scratch.",
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
      "Sprite painting"
    ],
    classifications: ["Fullstack", "Personal", "Gaming"],
    github: "https://github.com/Rouxxel/Nothingness",
  },
  {
    title: "Atryon Chrome Extension",
    image: "/images/atryon_extension/logo.png",
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
      "FLUX", 
      "Virtual Try-On", 
      "AI", 
      "Docker", 
      "SlowAPI", 
      "Chrome APIs"
    ],
    classifications: ["Fullstack", "Web", "AI / Data", "Personal", "AR"],
    github: "https://github.com/Rouxxel/atryon_chrome_extension",
  },
  {
    title: "Personal portfolio website",
    image: "/images/logo.png",
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
      "HTML5"],
    classifications: ["Frontend", "Web", "Personal"],
    live_demo: "https://per-web-venzer.vercel.app",
    github: "https://github.com/Rouxxel/per_web_venzer",
  },
];

//-------------------------------------------------------------------------
//------------------------SPANISH DESCRIPTIONS-----------------------------
//-------------------------------------------------------------------------
const projectDescriptionsEs: Record<string, string> = {
  "High-Frequency Real Time Monitoring System":
    "Como desarrollador backend en Siemens AG, arquitecté, desarrollé, probé y desplegué un backend de monitoreo en tiempo real y alta frecuencia, multihilo y de nivel productivo para un proyecto conjunto con RWTH Aachen y Weiss Spindletechnologies. El sistema en Python admite grandes volúmenes de datos de sensores mediante un message broker, monitorea y analiza el comportamiento de la máquinas, exporta resultados en CSV y gráficos	con Pandas/Matplotlib para análisis post-test. El código fuente y demos no son públicos (propiedad de Siemens).",
  "Langdrill (Stealth startup)":
    "Como desarrollador frontend, trabajé en una plataforma educativa mejorada con IA construida con React+TS en frontend y FastAPI en backend. Incluye acceso por roles para profesores/estudiantes, generación de ejercicios con IA (escritura, lectura, escucha con TTS y conversación con agente de voz/IA), gestión de clases, seguimiento de tareas, analíticas de estudiantes y sistema de plantillas. También estaba conectada a Supabase (PostgreSQL) para autenticación y almacenamiento de datos.",
  "Simple Chat":
    "Aplicación de chatbot que implementa una API de IA y fue construida con cliente móvil Flutter y backend FastAPI en Python desplegado en Render, usando la API Gemini 2.5 Flash y Supabase para autenticación, historial persistente y preferencias de usuario. La app está diseñada para conversar con un chatbot con personalidad configurable y mantener conversaciones más duraderas, aunque el contexto y la memoria a largo plazo siguen siendo un reto.",
  "Rift Rewind":
    "Dashboard de coaching para League of Legends con frontend en React+TS y backend en FastAPI que se integra con la API de Riot Games para historial de partidas, datos de campeones y analíticas de rendimiento. La web ofrece varias páginas para profundizar en historial, sinergias y predicciones, además de una burbuja flotante para abrir un asistente conversacional con contexto de la página actual y obtener insights más precisos.",
  "TuneTools":
    "Pipeline que convierte contexto diario (noticias, clima, calendario) en canciones personalizadas: un LLM genera especificaciones y letras, el modelo YuE sintetiza audio en RunPod y la API de Gemini crea el arte del álbum para entregar una canción al usuario. El frontend está desplegado en Vercel, el backend en Railway, conectado a Supabase para autenticación y almacenamiento de audios/arte generados.",
  "Bachelor Thesis (Machine Learning)":
    "Estudio comparativo de modelos de clasificación de ML para detección temprana de diabetes en indicadores de salud BRFSS 2015: pipeline modular en Python con Decision Tree, Logistic Regression, Random Forest y SVM, además de EDA, remuestreo SMOTE, configuración JSON y logging centralizado de resultados.",
  "Emotional Detection DL model":
    "Proyecto de deep learning para detectar 7 emociones a partir de imágenes faciales en escala de grises usando transfer learning (DenseNet121) y una CNN personalizada, con CLI, interfaz de webcam para pruebas en vivo, dataset FER de Kaggle y optimización opcional con TFLite/TensorRT/ONNX.",
  "Drone sound detection ML models":
    "Proyecto de ML para detectar y clasificar el perfil sonoro de drones, helicópteros y audio de fondo usando CNN (Tiny y Robust) y ML tradicional (Random Forest, SVM, XGBoost, Gradient Boosting) con características MFCC; el caso de uso objetivo es integrarlo como accesorio en el chaleco antibalas para detección omnidireccional de drones y alerta preventiva para los soldados en el campo.",
  "Machine Learning Models":
    "Recopilación de proyectos de ML: clasificaciones (Iris, cáncer de mama, Titanic, diabetes con Decision Tree, Logistic Regression, KNN, Random Forest y SVM), regresión (beneficio empresarial) y clustering (segmentación de clientes con K-Means y Hierarchical), usando notebooks en Python, scikit-learn y otras librerías relacionadas.",
  "MaxxWatt Energy Management Platform":
    "Proyecto presentado en Berlin Energy Hackathon 2025: plataforma de monitoreo y gestión BESS con analíticas en tiempo real, detección de anomalías y pronóstico energético para baterias Li-Ion usadas en sistemas de Paneles Solares para manejo y almacenamiento de energía. La arquitectura del sistema y diseño de componentes se modelaron en Draw.io. Backend FastAPI con streaming SSE y dashboard en React (Vite, shadcn-ui, Tailwind).",
  "Nothingness 2D arcade game":
    "Juego 2D estilo arcade en Unity/C# con movimiento en 8 direcciones, escalado dinámico de dificultad y sistema de buffs/debuffs. Incluye dos tipos de enemigos (asteroides, cometas), varios power-ups (escudo, aumento/reducción de velocidad), persistencia de puntuación con serialización JSON y sistema de audio integral con sprites creados desde cero.",
  "Atryon Chrome Extension":
    "Extensión de Chrome como probador virtual: permite seleccionar una prenda desde la página o mediante arrastrar y soltar, subir una selfie y generar un resultado de prueba virtual con IA. Tiene interfaz en panel lateral con content script para 'seleccionar desde la página'; backend FastAPI que ejecuta llamados API de FLUX de Black Forest Labs para composición multi-imagen (MIC), con endpoints de sondeo y descarga. Incluye endpoints extra para futuras funciones de Text-To-Image (TTI) e Image Edit With Mask (IDWM).",
  "Personal portfolio website":
    "El sitio web en el que estás ahora: portafolio responsivo construido con React + TypeScript (Vite), Tailwind CSS y shadcn/ui (Radix UI). Usa animaciones con Framer Motion, React Router, TanStack Query y formularios con React Hook Form + Zod; probado con Vitest/React Testing Library, linting con ESLint y desplegado en Vercel con auditorías de seguridad en GitHub Actions. Tiene soporte para varios lenguajes",
};

//-------------------------------------------------------------------------
//------------------------FRENCH DESCRIPTIONS------------------------------
//-------------------------------------------------------------------------
const projectDescriptionsFr: Record<string, string> = {
  "High-Frequency Real Time Monitoring System":
    "En tant que développeur backend chez Siemens AG, j’ai architecturé, développé, testé et déployé un backend de surveillance a temps réel et haute fréquence, multithread et de niveau production pour un projet conjoint avec RWTH Aachen et Weiss Spindletechnologies. Le système Python ingère de grands volumes de données de capteurs via un message broker, surveille et analyse le comportement des machines, et exporte des résultats en CSV et graphiques avec Pandas/Matplotlib pour analyse post-test. Le code source et les démonstrations sont pas publics (propriété de Siemens).",
  "Langdrill (Stealth startup)":
    "En tant que développeur frontend, j’ai travaillé sur une plateforme éducative améliorée par IA, construite avec React+TS pour le frontend et FastAPI pour le backend. Elle inclut un accès par rôle pour enseignants/étudiants, génération d’exercices IA (écriture, lecture, écoute avec TTS et conversation avec agent IA/voix), gestion de classes, suivi des devoirs, analyses des étudiants et système de templates. Elle était également connectée à Supabase (PostgreSQL) pour l’authentification et le stockage des données.",
  "Simple Chat":
    "Application de chatbot alimentée par une API IA, construite avec un client mobile Flutter et un backend FastAPI en Python déployé sur Render, utilisant l’API Gemini 2.5 Flash et Supabase pour l’authentification, l’historique persistant et les préférences utilisateur. L’application permet de converser avec un chatbot à personnalité configurable et de maintenir des conversations relativement longues, bien que le contexte et la mémoire à long terme restent un défi.",
  "Rift Rewind":
    "Tableau de bord de coaching pour League of Legends avec frontend en React+TS et backend FastAPI intégré à l’API Riot Games pour l’historique des matchs, les données des champions et les analyses de performance. Le site propose plusieurs pages pour explorer l’historique, les synergies et les prédictions, avec une bulle flottante ouvrant un assistant conversationnel contextualisé pour obtenir des insights précis.",
  "TuneTools":
    "Pipeline transformant le contexte quotidien (actualités, météo, calendrier) en chansons personnalisées : un LLM génère les spécifications et les paroles, le modèle YuE synthétise l’audio sur RunPod, et l’API Gemini crée la pochette de l’album pour livrer la chanson à l’utilisateur. Le frontend est déployé sur Vercel, le backend sur Railway, connecté à Supabase pour l’authentification et le stockage des fichiers audio et images générés.",
  "Bachelor Thesis (Machine Learning)":
    "Étude comparative de modèles de classification ML pour la détection précoce du diabète sur les indicateurs de santé BRFSS 2015 : pipeline Python modulaire avec Decision Tree, Logistic Regression, Random Forest et SVM, plus EDA, suréchantillonnage SMOTE, configuration JSON et journalisation centralisée des résultats.",
  "Emotional Detection DL model":
    "Projet de deep learning pour détecter 7 émotions à partir d’images faciales en niveaux de gris, utilisant transfer learning (DenseNet121) et un CNN personnalisé, avec CLI, interface webcam pour tests en direct, dataset FER de Kaggle, et optimisation optionnelle TFLite/TensorRT/ONNX.",
  "Drone sound detection ML models":
    "Projet ML pour détecter et classifier le profil sonore de drones, hélicoptères et sons de fond en utilisant CNN (Tiny et Robust) et ML traditionnel (Random Forest, SVM, XGBoost, Gradient Boosting) avec caractéristiques MFCC ; cas d’usage cible : intégrer le système comme accessoire sur un gilet pare-balles pour détection omnidirectionnelle de drones et alertes préventives pour les soldats sur le terrain.",
  "Machine Learning Models":
    "Portfolio de projets ML : classifications (Iris, cancer du sein, Titanic, diabète avec Decision Tree, Logistic Regression, KNN, Random Forest, SVM), régressions (profits d’entreprise) et clustering (segmentation clients avec K-Means et Hierarchical), utilisant des notebooks Python, scikit-learn et autres librairies associées.",
  "MaxxWatt Energy Management Platform":
    "Projet présenté au Berlin Energy Hackathon 2025 : plateforme de monitoring et gestion BESS avec analytics temps réel, détection d’anomalies et prévisions énergétiques pour batteries Li-Ion utilisées dans des systèmes de panneaux solaires. Architecture système et design des composants modélisés sur Draw.io. Backend FastAPI avec streaming SSE et dashboard React (Vite, shadcn-ui, Tailwind).",
  "Nothingness 2D arcade game":
    "Jeu arcade 2D Unity/C# avec mouvement sur 8 directions, scaling dynamique de la difficulté et système de buffs/debuffs. Comprend deux types d’ennemis (astéroïdes, comètes), plusieurs power-ups (bouclier, augmentation/diminution de vitesse), persistance du score via sérialisation JSON et système audio complet avec sprites faits maison.",
  "Atryon Chrome Extension":
    "Extension Chrome de try-on virtuel : permet de sélectionner un vêtement depuis la page ou par glisser-déposer, ajouter un selfie et obtenir un résultat IA. UI en panneau latéral avec content script pour « sélectionner depuis la page » ; backend FastAPI exécutant l’API FLUX de Black Forest Labs pour composition multi-images (MIC), avec endpoints de polling et téléchargement. Endpoints supplémentaires pour futures fonctionnalités Text-To-Image (TTI) et Image Edit With Mask (IDWM).",
  "Personal portfolio website":
    "Le site que vous consultez actuellement : portfolio responsive construit avec React + TypeScript (Vite), Tailwind CSS et shadcn/ui (Radix UI). Utilise Framer Motion, React Router, TanStack Query et formulaires avec React Hook Form + Zod ; testé avec Vitest/React Testing Library, linté avec ESLint et déployé sur Vercel avec audits de sécurité GitHub Actions. Prise en charge multilingue incluse.",
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
