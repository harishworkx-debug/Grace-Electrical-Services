import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  structuredData?: object;
};

const BASE_URL = 'https://www.electricalwiringinstallationhahnville.com';

export function useSEO({ title, description, canonicalPath, ogImage, structuredData }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('canonical', `${BASE_URL}${canonicalPath}`);

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${BASE_URL}${canonicalPath}`, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage || `${BASE_URL}/og-default.jpg`, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || `${BASE_URL}/og-default.jpg`);

    // Structured data
    const existingScript = document.getElementById('page-structured-data');
    if (existingScript) existingScript.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-structured-data';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('page-structured-data');
      if (script) script.remove();
    };
  }, [title, description, canonicalPath, ogImage, structuredData]);
}

export { BASE_URL };
