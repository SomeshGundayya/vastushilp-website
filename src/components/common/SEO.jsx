
import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  image,
}) {
  const siteName =
    "Vastushilp Associates & Consulting Engineers";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {canonical && (
        <link rel="canonical" href={canonical} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description}
      />

      {canonical && (
        <meta property="og:url" content={canonical} />
      )}

      {image && (
        <meta property="og:image" content={image} />
      )}

      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
    </Helmet>
  );
}

export default SEO;
