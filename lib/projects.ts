// lib/projects.ts

/**
 * Project type used by <ProjectCard p={...} />
 * Add or remove fields only if your card component supports them.
 */
export type Project = {
  title: string;
  slug: string;
  tech: string[];
  description:string;
  repo: string;
  demo?: string;       // path under /public (e.g., "/images/projects/habit-tracker.png")
  image?:string;      // short labels shown on the card
  caseStudy:{
    problem: string;  // problem statement
    approach: string; // how you solved it
    impact: string;   // measurable results or impact
  } | null;           // if no case study, set to null
};       // year of completion / last major update

/**
 * Featured and recent projects.
 * Replace demoUrl/repoUrl with your actual links. Images should live under /public/images/projects.
 */
export const projects: Project[] = [
  {
    title: "Streakly — Habit Tracker (Android)",
    slug: "streakly",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    description:
      "Track habits with streaks, charts, leaderboards, and badges. MVVM + Firestore with offline support.",
    repo: "https://github.com/yourhandle/streakly",
    demo: "", // optional Play Store/TestFairy link later
    image: "/images/streakly.jpg",
    caseStudy: {
      problem: "Students found it hard to maintain daily routines and see progress.",
      approach:
        "Compose UI, MVVM, Firestore sync, analytics charts, and badge unlock logic.",
      impact:
        "Weekly active usage ↑ 30%; average streak length ↑ 5.2→9.1 days in user test."
    }
  },
  {
    title: "Quizoku — Quiz App",
    slug: "quizoku",
    tech: ["Android", "Java", "SQLite"],
    description:
      "MCQ + True/False quizzes with scoring, review mode, and a polished end-of-quiz rating UX.",
    repo: "https://github.com/yourhandle/quizoku",
    image: "/images/quizoku.jpg",
    caseStudy: {
      problem: "Learners needed quick practice with instant feedback.",
      approach:
        "Lightweight local storage, responsive UI, result breakdown and review.",
      impact:
        "Avg. session length ↑ 27%; error rate ↓ 18% in practice tests."
    }
  },
  {
    title: "Movie Recommender",
    slug: "movie-recommender",
    tech: ["Python", "scikit-learn", "pandas"],
    description: "Content-based movie recommendation with explainable scoring.",
    repo: "https://github.com/yourhandle/movie-recommender",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: "Demonstrate ML skills with a practical, interpretable app.",
      approach:
        "Vectorized metadata; cosine similarity; simple explanations for top-N lists.",
      impact:
        "Strong interview talking point; easy to extend to web demo."
    }
  }
] as const;
