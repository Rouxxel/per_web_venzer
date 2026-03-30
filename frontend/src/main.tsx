import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Always start at the top on page load/reload
window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
