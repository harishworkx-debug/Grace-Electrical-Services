import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const contentFilePath = path.join(rootDir, 'src', 'data', 'content.ts');
const content = fs.readFileSync(contentFilePath, 'utf8');

// Extract domain
const domainMatch = content.match(/domain:\s*['"]([^'"]+)['"]/);
const domain = domainMatch ? domainMatch[1] : 'https://www.electricalwiringinstallationhahnville.com';

const serviceSection = content.substring(
  content.indexOf('export const SERVICES'),
  content.indexOf('export const SERVICE_AREAS')
);

// Extract service slugs
const serviceSlugs = [
  ...new Set(
    Array.from(
      serviceSection.matchAll(/slug:\s*['"]([^'"]+)['"]/g),
      (m) => m[1]
    ).filter((slug) => !slug.startsWith('electrician-'))
  ),
];

const areaSection = content.substring(
  content.indexOf('export const SERVICE_AREAS'),
  content.indexOf('export const GENERAL_FAQS') > -1 ? content.indexOf('export const GENERAL_FAQS') : content.length
);

// Extract service area slugs (only top-level electrician-*-la slugs)
const areaSlugs = [
  ...new Set(
    Array.from(
      areaSection.matchAll(/slug:\s*['"]([^'"]+)['"]/g),
      (m) => m[1]
    ).filter((slug) => slug.startsWith('electrician-'))
  ),
];

// Google Sitemap Guidelines: Only set lastmod when content is genuinely modified.
// Do NOT auto-bump to current timestamp on every build.
const CONTENT_LASTMOD = '2026-10-16';

const coreRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'services', changefreq: 'weekly', priority: '0.9' },
  { path: 'service-areas', changefreq: 'weekly', priority: '0.9' },
  { path: 'reviews', changefreq: 'weekly', priority: '0.9' },
  { path: 'guides', changefreq: 'weekly', priority: '0.8' },
  { path: 'contact', changefreq: 'monthly', priority: '0.9' },
  { path: 'about', changefreq: 'monthly', priority: '0.8' },
  { path: 'faq', changefreq: 'monthly', priority: '0.7' },
  { path: 'sitemap', changefreq: 'weekly', priority: '0.7' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

xml += `  <!-- Core Pages -->\n`;
for (const route of coreRoutes) {
  const url = route.path ? `${domain}/${route.path}` : `${domain}/`;
  xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${CONTENT_LASTMOD}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
}

xml += `\n  <!-- Electrical Service Pages (Hahnville, LA) -->\n`;
for (const slug of serviceSlugs) {
  xml += `  <url>\n    <loc>${domain}/${slug}</loc>\n    <lastmod>${CONTENT_LASTMOD}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

xml += `\n  <!-- Service Area Locations (St. Charles Parish, LA) -->\n`;
for (const slug of areaSlugs) {
  xml += `  <url>\n    <loc>${domain}/${slug}</loc>\n    <lastmod>${CONTENT_LASTMOD}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

const publicSitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
fs.writeFileSync(publicSitemapPath, xml, 'utf8');

const robotsTxt = `# Robots.txt for Grace Electrical Services
# Website: ${domain}

User-agent: *
Allow: /
Disallow: /404

# Host
Host: ${domain}

# Sitemap
Sitemap: ${domain}/sitemap.xml
`;

const publicRobotsPath = path.join(rootDir, 'public', 'robots.txt');
fs.writeFileSync(publicRobotsPath, robotsTxt, 'utf8');

console.log(`Successfully generated sitemap.xml with ${coreRoutes.length + serviceSlugs.length + areaSlugs.length} URLs at ${publicSitemapPath}`);
console.log(`Successfully synced robots.txt at ${publicRobotsPath}`);
