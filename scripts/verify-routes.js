import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const contentFilePath = path.join(rootDir, 'src', 'data', 'content.ts');
const content = fs.readFileSync(contentFilePath, 'utf8');

const targetInventory = [
  // Core
  '/',
  '/services',
  '/service-areas',
  '/contact',
  '/about',
  '/faq',
  '/sitemap',
  '/reviews',
  '/guides',
  // Services (10)
  '/electrical-wiring-installation-hahnville-la',
  '/electrical-repairs-troubleshooting-hahnville-la',
  '/outlet-installation-hahnville-la',
  '/switch-installation-hahnville-la',
  '/electrical-panel-repair-hahnville-la',
  '/electrical-panel-upgrades-hahnville-la',
  '/lighting-installation-hahnville-la',
  '/electrical-rewiring-hahnville-la',
  '/residential-electrical-services-hahnville-la',
  '/commercial-electrical-services-hahnville-la',
  // Locations (10)
  '/electrician-hahnville-la',
  '/electrician-luling-la',
  '/electrician-destrehan-la',
  '/electrician-norco-la',
  '/electrician-boutte-la',
  '/electrician-paradis-la',
  '/electrician-st-rose-la',
  '/electrician-new-sarpy-la',
  '/electrician-ama-la',
  '/electrician-montz-la',
];

console.log(`Checking inventory of ${targetInventory.length} URLs...`);

const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');

let allMatched = true;

for (const url of targetInventory) {
  const fullUrl = `https://www.electricalwiringinstallationhahnville.com${url === '/' ? '/' : url}`;
  const inSitemap = sitemap.includes(`<loc>${fullUrl}</loc>`);
  
  // Check if slug is in content.ts if it's a dynamic slug
  let inContent = true;
  if (url !== '/' && !['/services', '/service-areas', '/contact', '/about', '/faq', '/sitemap', '/reviews', '/guides'].includes(url)) {
    const slug = url.replace('/', '');
    inContent = content.includes(`slug: '${slug}'`);
  }

  if (!inSitemap || !inContent) {
    console.error(`FAIL: ${url} (inSitemap: ${inSitemap}, inContent: ${inContent})`);
    allMatched = false;
  } else {
    console.log(`OK: ${url} -> Verified in Sitemap & Routes`);
  }
}

if (allMatched) {
  console.log(`\nALL ${targetInventory.length} CANONICAL INVENTORY URLS VERIFIED SUCCESSFULLY!`);
} else {
  process.exit(1);
}
