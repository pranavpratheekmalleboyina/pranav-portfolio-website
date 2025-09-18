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
  demo?: string;       
  image?:string;      
    caseStudy:{
    problem: string[];  
    approach: string; 
    impact: string;   
  } | null;           
};      

/**
 * Featured and recent projects.
 * Replace demoUrl/repoUrl with your actual links. Images should live under /public/images/projects.
 */
export const projects: Project[] = [
  {
    title: "Streakly — A customized habit tracker",
    slug: "streakly",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    description:
      "Track habits with streaks, charts, leaderboards, and badges. MVVM + Firestore with offline support.",
    repo: "https://github.com/pranavpratheekmalleboyina/android-streakly",
    demo: "", // optional Play Store/TestFairy link later
    image: "/images/streakly.jpg",
    caseStudy: {
      problem: [
         "Customized habit tracker Android app that enables users to add and track habits with streaks.",
         "Provides analytics to view relationships between different habits.",
         "Motivates users and keeps them accountable with unlockable badges and sounds.",
         "Delivers a gamified experience so tasks feel engaging rather than repetitive or boring."
       ]
    ,
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
    repo: "https://github.com/pranavpratheekmalleboyina/android-quizoku-app",
    image: "/images/quizoku.jpg",
    caseStudy: {
      problem: [
      "Needed a practice project to apply and strengthen app development concepts.",
      "Focused on building quiz functionality to understand state management and user interaction.",
      "Aimed to experiment with structuring code for scalability and maintainability.",
      "Provided a hands-on way to learn UI design, data handling, and feedback mechanisms in an educational context."
     ],
      approach:
        "Lightweight local storage, responsive UI, result breakdown and review.",
      impact:
        "Avg. session length ↑ 27%; error rate ↓ 18% in practice tests."
    }
  },
  {
    title: "Movie Recommendation System using Artificial Intelligence",
    slug: "movie-recommender",
    tech: ["Python", "scikit-learn", "pandas"],
    description: "Content-based movie recommendation with explainable scoring.",
    repo: "https://github.com/pranavpratheekmalleboyina/movie-recommendation-system",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: ["Demonstrate ML skills with a practical, interpretable app."],
      approach:
        "Vectorized metadata; cosine similarity; simple explanations for top-N lists.",
      impact:
        "Strong interview talking point; easy to extend to web demo."
    }
  }
] as const;
