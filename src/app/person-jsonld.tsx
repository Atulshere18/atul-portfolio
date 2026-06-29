export default function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Atul Shere",
    url: "https://atul-portfolio-jade.vercel.app",
    image: "https://atul-portfolio-jade.vercel.app/og-image.png",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB and TypeScript.",
    sameAs: [
      "https://github.com/Atulshere18",
      "https://www.linkedin.com/in/atulshere/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}