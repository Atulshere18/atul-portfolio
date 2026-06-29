import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PersonJsonLd from "./person-jsonld";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata: Metadata = {
  metadataBase: new URL("https://atul-portfolio-jade.vercel.app"),

  title: {
    default: "Atul Shere | Full Stack Developer",
    template: "%s | Atul Shere",
  },

  description: "Full Stack Developer building scalable web apps and AI-powered platforms.",
icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Atul Shere",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [{ name: "Atul Shere" }],

  creator: "Atul Shere",

  openGraph: {
    title: "Atul Shere | Full Stack Developer",
    description:
      "Explore my portfolio, projects, skills and experience.",
    url: "https://atul-portfolio-jade.vercel.app",
    siteName: "Atul Shere Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Atul Shere | Full Stack Developer",
    description:
      "React • Next.js • Node.js • MongoDB",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
           <PersonJsonLd />
        <Navbar />  
        <main>{children}</main>
        <Footer />
          <GoogleAnalytics gaId="G-QRXDQHLWQV" />

      </body>
    </html>
  );
}