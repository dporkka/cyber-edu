import { Helmet } from 'react-helmet-async';

interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  metaRobots?: string;
  canonicalURL?: string;
  structuredData?: any;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    cardType?: string;
    handle?: string;
  };
}

interface BlogSEOProps {
  seo: SEOData;
  url: string;
  image?: string;
}

export function BlogSEO({ seo, url, image }: BlogSEOProps) {
  const openGraph = {
    title: seo.openGraph?.title || seo.metaTitle,
    description: seo.openGraph?.description || seo.metaDescription,
    image: seo.openGraph?.image || image,
    type: seo.openGraph?.type || 'article',
    url,
  };

  const twitter = {
    card: seo.twitter?.cardType || 'summary_large_image',
    site: seo.twitter?.handle || '@yourtwitterhandle',
    title: openGraph.title,
    description: openGraph.description,
    image: openGraph.image,
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      {seo.metaRobots && <meta name="robots" content={seo.metaRobots} />}
      {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}

      {/* Open Graph */}
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:url" content={openGraph.url} />
      {openGraph.image && <meta property="og:image" content={openGraph.image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      {twitter.image && <meta name="twitter:image" content={twitter.image} />}

      {/* Structured Data */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  );
} 