// lib/projects.ts

/**
 * Project type used by <ProjectCard p={...} />
 * Add or remove fields only if your card component supports them.
 */
export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;       // path under /public (e.g., "/images/projects/habit-tracker.png")
  tags?: string[];      // short labels shown on the card
  demoUrl?: string;     // live demo / deployed URL
  repoUrl?: string;     // GitHub (or other VCS) URL
  year?: number;        // year of completion / last major update
};

/**
 * Featured and recent projects.
 * Replace demoUrl/repoUrl with your actual links. Images should live under /public/images/projects.
 */
export const projects: Project[] = [
  {
    slug: "habit-tracker",
    title: "Habit Tracker (Android)",
    description:
      "A modern habit tracking app built with Kotlin + Jetpack Compose. Firebase Auth, Firestore for data, Storage for media, and charts for weekly progress.",
    image: "/images/projects/habit-tracker.png",
    tags: ["Android", "Kotlin", "Compose", "Firebase"],
    demoUrl: "https://youtu.be/demo-habit-tracker", // placeholder
    repoUrl: "https://github.com/yourname/habit-tracker",
    year: 2025,
  },
  {
    slug: "quizoku",
    title: "Quizoku — Mobile Quiz App",
    description:
      "Multi-choice & T/F quiz app with timed rounds, sounds, and a polished results screen. Clean architecture and Room for offline caching.",
    image: "/images/projects/quizoku.png",
    tags: ["Android", "Kotlin", "Room", "Material"],
    demoUrl: "https://youtu.be/demo-quizoku",
    repoUrl: "https://github.com/yourname/quizoku",
    year: 2025,
  },
  {
    slug: "portfolio-next",
    title: "Personal Portfolio (Next.js)",
    description:
      "Blazing-fast portfolio site with Next.js App Router, Route Handlers for contact API, and image optimization. Accessible, responsive, and Lighthouse-green.",
    image: "/images/projects/portfolio-next.png",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    demoUrl: "https://your-domain.dev",
    repoUrl: "https://github.com/yourname/portfolio-next",
    year: 2025,
  },
  {
    slug: "secure-notes",
    title: "Secure Notes API",
    description:
      "Node.js + Postgres service for encrypted notes. JWT auth, Zod validation, Prisma ORM, rate limiting, and comprehensive integration tests.",
    image: "/images/projects/secure-notes.png",
    tags: ["Node.js", "Express", "Postgres", "Prisma"],
    demoUrl: "https://secure-notes.your-domain.dev",
    repoUrl: "https://github.com/yourname/secure-notes",
    year: 2024,
  },
  {
    slug: "movie-recs",
    title: "Movie Recommendation System",
    description:
      "Content-based + collaborative filtering in Python. FastAPI backend, scikit-learn pipelines, and a minimal React UI for discovery.",
    image: "/images/projects/movie-recs.png",
    tags: ["Python", "FastAPI", "scikit-learn", "React"],
    demoUrl: "https://movie-recs.your-domain.dev",
    repoUrl: "https://github.com/yourname/movie-recs",
    year: 2024,
  },
  {
    slug: "a11y-components",
    title: "Accessible UI Components",
    description:
      "A small library of headless, accessible React components (Tabs, Dialog, Combobox). Fully tested and keyboard-navigable.",
    image: "/images/projects/a11y-components.png",
    tags: ["React", "TypeScript", "a11y", "Testing"],
    demoUrl: "https://a11y-components.your-domain.dev",
    repoUrl: "https://github.com/yourname/a11y-components",
    year: 2025,
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    description:
      "WebSockets + Redis pub/sub for a snappy chat experience. Admin moderation tools, message search, and optimistic UI updates.",
    image: "/images/projects/realtime-chat.png",
    tags: ["Node.js", "WebSockets", "Redis", "Tailwind"],
    demoUrl: "https://chat.your-domain.dev",
    repoUrl: "https://github.com/yourname/realtime-chat",
    year: 2024,
  },
  {
    slug: "dev-notes-cli",
    title: "Dev Notes CLI",
    description:
      "A tiny cross-platform CLI to capture and search dev notes locally. Markdown storage, fuzzy search, and export to JSON.",
    image: "/images/projects/dev-notes-cli.png",
    tags: ["Node.js", "CLI", "TypeScript"],
    demoUrl: "https://asciinema.org/a/demo-dev-notes-cli",
    repoUrl: "https://github.com/yourname/dev-notes-cli",
    year: 2023,
  },
  {
    slug: "sensor-analytics",
    title: "IoT Sensor Analytics Dashboard",
    description:
      "Timeseries ingestion with InfluxDB and a Next.js dashboard for real-time charts, anomaly detection, and alerting.",
    image: "/images/projects/sensor-analytics.png",
    tags: ["Next.js", "InfluxDB", "Charts", "Anomaly Detection"],
    demoUrl: "https://sensors.your-domain.dev",
    repoUrl: "https://github.com/yourname/sensor-analytics",
    year: 2024,
  },
  {
    slug: "resume-parser",
    title: "Resume Parser & Matcher",
    description:
      "Python service that extracts entities from resumes and matches them to roles using embeddings. Exposes REST/JSON and a minimal UI.",
    image: "/images/projects/resume-parser.png",
    tags: ["Python", "NLP", "Embeddings", "FastAPI"],
    demoUrl: "https://resume-parser.your-domain.dev",
    repoUrl: "https://github.com/yourname/resume-parser",
    year: 2024,
  },
];
