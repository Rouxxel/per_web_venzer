import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the portfolio data from the source file
const sourceFile = join(__dirname, '..', 'src', 'data', 'portfolio-data.json');
const portfolioData = JSON.parse(readFileSync(sourceFile, 'utf-8'));

// Ensure the public data directory exists
const publicDir = join(__dirname, '..', 'public', 'data');
mkdirSync(publicDir, { recursive: true });

// Write to the public directory
writeFileSync(
  join(publicDir, 'portfolio.json'),
  JSON.stringify(portfolioData, null, 2)
);

console.log('portfolio.json generated successfully');
