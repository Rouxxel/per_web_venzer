export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  live_demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Simple Chat",
    image: "/images/simple_chat/ic_launcher.png",
    description:
      "AI-powered chat app with a Flutter mobile client and Python-based FastAPI backend deployed on Render, using Gemini 2.5 Flash API and Supabase for auth and persistent chat history.",
    tags: ["Flutter", "Dart", "Python", "FastAPI", "Supabase", "PostgreSQL", "Gemini API", "REST API", "JWT", "Render", "Docker"],
    github: "https://github.com/Rouxxel/simple-chat",
  },
  {
    title: "Rift Rewind",
    image: "/images/rift_rewind/logo_helmet.png",
    description:
      "League of Legends coaching dashboard with a React frontend and FastAPI backend that interfaces with the Riot Games API for match history, champion data and performance analytics.",
    tags: ["React", "TypeScript", "Vite", "FastAPI", "Gemini API", "Python", "Riot Games API", "REST API", "Docker", "AWS", "Render", "Vercel"],
    github: "https://github.com/Rouxxel/rift_rewind_hckthn_frontnd",
    //demo: "https://www.youtube.com/watch?v=uXalS69hPrE",
    live_demo: "https://rift-rewind-hckthn-frontnd.vercel.app",
  },
  {
    title: "TuneTools",
    image: "/images/tune_tools/logo-disk.png",
    description:
      "Pipeline that turns daily context (news, weather, calendar) into personalized songs: an LLM generates music specs and lyrics, the YuE model synthesizes audio on RunPod and Gemini API creates album artwork.",
    tags: ["React", "TypeScript", "Kiro","FastAPI", "REST API", "Gemini API", "Python", "Supabase", "YuE", "RunPod", "LLM", "Docker", "Vercel", "Railway", "Google Auth"],
    github: "https://github.com/peres84/TuneTools",
    demo: "https://vimeo.com/1143501418?fl=pl&fe=vl",
  },
  {
    title: "Bachelor Thesis (Machine Learning)",
    image: "/images/thesis/graduation.png",
    description:
      "Comparative study of ML classification models for early diabetes detection on BRFSS 2015 health indicators: modular Python pipeline with Decision Tree, Logistic Regression, Random Forest, and SVM, plus EDA, SMOTE resampling, JSON config and centralized logging and results.",
    tags: ["Python", "scikit-learn", "pandas", "numpy", "Machine Learning", "Classification", "Decision Tree", "Logistic Regression", "Random Forest", "SVM", "SMOTE", "EDA", "matplotlib", "seaborn", "Data science"],
    github: "https://github.com/Rouxxel/thesis-bachelor",
  },
  {
    title: "Machine Learning Models",
    image: "/images/ml_various/ml_various.png",
    description:
      "Portfolio of ML projects: classification (Iris, breast cancer, Titanic, diabetes with Decision Tree, Logistic Regression, KNN, Random Forest, SVM), regression (company profit), and clustering (customer segmentation with K-Means and Hierarchical), using Python and scikit-learn.",
    tags: ["Python", "scikit-learn", "pandas", "numpy", "Machine Learning", "Classification", "Regression", "Clustering", "Decision Tree", "Logistic Regression", "KNN", "Random Forest", "SVM", "K-Means", "Hierarchical Clustering", "Linear Regression", "matplotlib", "seaborn", "SMOTE"],
    github: "https://github.com/Rouxxel/ai_general",
  },
  {
    title: "Drone sound detection",
    image: "/images/drone_detection/drone.png",
    description:
      "ML project for detecting and classifying drone, helicopter and background audio using CNN (Tiny and Robust) and traditional ML (Random Forest, SVM, XGBoost, Gradient Boosting) on MFCC features; target use case is to embedd it as a bulletproof vest add-on for directional drone detection.",
    tags: ["Python", "TensorFlow", "Keras", "scikit-learn", "Machine Learning", "Deep Learning", "CNN", "Audio Classification", "MFCC", "Librosa", "Random Forest", "SVM", "XGBoost", "Gradient Boosting", "pandas", "numpy", "matplotlib"],
    github: "https://github.com/Rouxxel/drone_sound_profile_detection",
  },
];
