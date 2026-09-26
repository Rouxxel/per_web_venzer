import { readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pdfsDir = join(__dirname, "..", "public", "pdfs");
const outFile = join(__dirname, "..", "src", "data", "cvPdfManifest.json");

const filenames = readdirSync(pdfsDir)
  .filter((name) => name.startsWith("CV") && name.toLowerCase().endsWith(".pdf"))
  .sort();

writeFileSync(outFile, `${JSON.stringify(filenames, null, 2)}\n`);
console.log(`cvPdfManifest.json generated (${filenames.length} CV PDFs)`);
