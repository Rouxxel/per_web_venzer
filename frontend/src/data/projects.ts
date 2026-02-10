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
    tags: ["React", "TypeScript", "FastAPI", "REST API", "Gemini API", "Python", "Supabase", "YuE", "RunPod", "LLM", "Docker", "Vercel", "Railway", "Google Auth"],
    github: "https://github.com/peres84/TuneTools",
    demo: "https://vimeo.com/1143501418?fl=pl&fe=vl",
  },
];
