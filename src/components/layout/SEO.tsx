import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({ title, description, path = '' }: SEOProps) {
  const siteName = 'Anusha Shrestha | Full-Stack Developer';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription =
    description ||
    'Full-Stack JavaScript Developer portfolio. React, Node.js, Fastify, PostgreSQL. Internship experience at MedicSewa.';
  const url = `https://anushashrestha.dev${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a0a0f" />
      <meta name="color-scheme" content="dark" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />

      <link rel="canonical" href={url} />
      <html lang="en" />
    </Helmet>
  );
}
