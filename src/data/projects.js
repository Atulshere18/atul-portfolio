export const projects = [
  {
    slug: "luminis",
    title: "Luminis",
    tagline: "Market research & business intelligence platform",
    description:
      "Enterprise-grade BI platform built at Fortune Business Insights. Luminis enables market researchers and analysts to explore reports, track industry trends, and derive business insights through a clean, performant interface.",
    longDescription:
      "Luminis is a full-scale internal platform I contribute to at Fortune Business Insights. It handles complex data relationships across market research domains, supports multi-user workflows, and delivers fast, reliable performance at scale. My contributions include building core UI modules in Next.js, designing RESTful APIs in Node.js, and working with both SQL and MongoDB data layers.",
    tech: ["Next.js", "Node.js", "MongoDB", "SQL", "REST APIs", "TypeScript"],
    github: null,
    live: null,
    status: "production",
    featured: true,
    category: "Full Stack",
    highlights: [
      "Built and maintained core modules for a production BI platform",
      "Designed RESTful APIs consumed by multiple frontend clients",
      "Worked across SQL and MongoDB data layers for hybrid data needs",
      "Contributed to performance optimization and code architecture",
    ],
  },
  {
    slug: "movie-reservation",
    title: "Movie Reservation System",
    tagline: "Full-stack seat booking platform with JWT auth",
    description:
      "A complete movie booking system with real-time seat selection, user authentication, and admin controls. Built with a React frontend and Node.js/Express backend backed by PostgreSQL and Prisma ORM.",
    longDescription:
      "This project demonstrates end-to-end full-stack development — from database schema design with Prisma to building a responsive React UI with real-time seat state. Features include JWT-based auth, role-based access (user vs admin), seat locking to prevent double-booking, and a clean REST API.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/Atulshere18/Movie-Reservation",
    live: null,
    status: "completed",
    featured: true,
    category: "Full Stack",
    highlights: [
      "JWT authentication with role-based access control",
      "Real-time seat selection with conflict prevention",
      "Prisma ORM with PostgreSQL for type-safe database access",
      "RESTful API with full CRUD for movies, seats, and bookings",
    ],
  },
  {
    slug: "agrocraft",
    title: "AgroCraft — Farmer Marketplace",
    tagline: "Multi-portal marketplace connecting farmers and buyers",
    description:
      "A full-stack marketplace platform with three separate portals — Farmer, Buyer, and Admin. Farmers list produce, buyers browse and order, and admins manage the ecosystem.",
    longDescription:
      "AgroCraft solves a real-world distribution problem in agriculture by directly connecting farmers with buyers. The platform features role-based portals, product listing and management, order workflows, and an admin dashboard. Built with PHP and MySQL on the backend and React on the frontend.",
    tech: ["React", "PHP", "MySQL", "REST APIs"],
    github: "https://github.com/Atulshere18/Farmer_MarketPlace",
    live: null,
    status: "completed",
    featured: true,
    category: "Full Stack",
    highlights: [
      "Three-portal architecture: Farmer, Buyer, and Admin",
      "Product listing, inventory, and order management flows",
      "Role-based access control across all portals",
      "Relational database design for complex entity relationships",
    ],
  },
  {
    slug: "sourcik",
    title: "Sourcik — AI Supplier Platform",
    tagline: "AI-powered supplier-buyer matching platform",
    description:
      "Built during my internship at Floatinity Systems. Sourcik is an AI-based platform that matches suppliers with buyers intelligently. I worked on the React frontend and Node.js backend APIs.",
    longDescription:
      "Sourcik uses AI to streamline the supplier discovery process for businesses. During my internship at Floatinity, I developed the frontend in React, built and integrated RESTful APIs, and connected the application to MongoDB for data management.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    github: null,
    live: "https://sourcik.com",
    status: "internship",
    featured: false,
    category: "AI / Full Stack",
    highlights: [
      "Developed React frontend for supplier-buyer matching UI",
      "Built and integrated RESTful APIs with Node.js",
      "MongoDB integration for flexible supplier data storage",
      "Worked in a startup environment with fast iteration cycles",
    ],
  },
];