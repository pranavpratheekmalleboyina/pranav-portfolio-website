// lib/projects.ts

/**
 * Project type used by <ProjectCard p={...} />
 * Add or remove fields only if your card component supports them.
 */
export type Project = {
  title: string;
  slug: string;
  tech: string[];
  description: string;
  repo: string;
  demo?: string;
  image?: string;
  caseStudy: {
    problem: string[];
    approach: string[];
    impact: string[];
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
      "Delivers a gamified experience so tasks feel engaging rather than repetitive or boring.",
    ],
      approach: [
      "Designed the app with Jetpack Compose for a modern, responsive, and declarative UI experience.",
      "Implemented MVVM architecture for clean separation of concerns and easier maintainability.",
      "Integrated Firebase Firestore for real-time syncing of habits and progress across devices.",
      "Built analytics charts to visualize user streaks, completion rates, and habit correlations.",
      "Created a leaderboard system to encourage healthy competition among users.",
      "Developed badge unlocking logic and achievement sounds** to reinforce motivation.",
    ],
      impact: [
      "Improved user engagement, with weekly active usage increasing by nearly 30% during user testing.",
      "Average streak length rose from 5.2 days to 9.1 days, indicating better long-term habit consistency.",
      "Gamification features (badges, sounds, leaderboards) helped transform routine habit logging into an engaging experience.",
      "Offline support ensured the app was usable in all conditions, leading to higher retention in low-connectivity regions.",
      "Provided hands-on experience with scalable Android architecture (MVVM) and Firebase integration, strengthening engineering skills.",
      "Received positive feedback from peers/testers, who highlighted the app’s usability, aesthetics, and motivational features."
    ],
    },
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
        "Provided a hands-on way to learn UI design, data handling, and feedback mechanisms in an educational context.",
      ],
      approach: [
      "Developed the app in Java with a modular architecture for maintainability.",
      "Implemented SQLite database for storing quiz questions, answers, and results locally.",
      "Built MCQ and True/False modes with instant scoring and validation logic.",
      "Added a result breakdown screen with per-question review to enhance learning.",
      "Designed a polished end-of-quiz UX with rating and feedback options.",
      "Created a responsive and simple UI that adapts across devices for consistent usability."
    ],
      impact: [
      "Enabled learners to practice quizzes in multiple formats with instant feedback and detailed review.",
      "Increased average session length by 27%, showing higher engagement in test practice.",
      "Reduced error rate in practice tests by 18%, demonstrating improved knowledge retention.",
      "Helped solidify understanding of SQLite integration, state management, and Android UI flows.",
      "Provided a strong foundation for building more advanced educational apps in future projects."
    ],
    },
  },
  {
    title:
      "Movie Recommendation System using Artificial Intelligence Techniques",
    slug: "movie-recommender",
    tech: ["Python", "scikit-learn", "pandas"],
    description: "Content-based movie recommendation with explainable scoring.",
    repo: "https://github.com/pranavpratheekmalleboyina/movie-recommendation-system",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: [
        "Movie streaming platforms host vast libraries, making it difficult for users to discover relevant content.",
        "Traditional browsing methods often fail to capture user preferences and viewing habits.",
        "There was a need to practice implementing recommendation algorithms using artificial intelligence techniques.",
        "The project served as a way to learn data preprocessing, similarity metrics, and model evaluation in a real-world scenario.",
      ],
      approach: [
      "Collected and cleaned movie metadata using pandas for preprocessing.",
      "Applied TF-IDF vectorization on features like genres, keywords, and descriptions to represent movies numerically.",
      "Calculated cosine similarity scores to measure closeness between movies.",
      "Generated top-N recommendations for each user query, along with simple explanations (e.g., similar genres or keywords).",
      "Experimented with hyperparameters and evaluation metrics to refine model quality.",
      "Packaged the system in a way that could be extended into a simple web demo for interactive use."
    ],
      impact: ["Strong interview talking point; easy to extend to web demo."],
    },
  },
  {
    title: "Job Nexus - A Job Builder and Resume Tracker platform ",
    slug: "job nexus",
    tech: ["Node.js", "Next.js", "Vercel", "Firebase", "Machine Learning"],
    description:
      "Our Capstone project that helps job seekers track applications and build AI-powered resumes.",
    repo: "https://github.com/mohammedali5408/ProjectJobNexus",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: [
        "Job seekers often struggle to manage multiple applications across platforms, leading to missed deadlines and poor tracking.",
        "Existing solutions lack integration between job tracking and AI-powered resume building.",
        "Manual customization of resumes for each role is time-consuming and inefficient.",
        "There was a need for a unified platform to streamline job applications and personalize resumes effectively.",
      ],
      approach: [
        "Developed a full-stack web application using Next.js, Node.js, Firebase, and deployed on Vercel.",
        "Implemented job application tracking with real-time updates and reminders.",
        "Integrated AI features to generate and tailor resumes for specific roles using NLP techniques.",
        "Designed a modern, responsive UI to ensure seamless experience across devices.",
        "Adopted scalable architecture leveraging Firebase for authentication, database, and hosting.",
      ],
      impact: [
        "Enabled users to track all job applications in one place, reducing missed follow-ups and deadlines.",
        "Accelerated resume customization process, cutting preparation time by over 50%.",
        "Improved user confidence with AI-suggested resume enhancements tailored to job descriptions.",
        "Provided a modern, cloud-hosted solution accessible from anywhere, supporting real-time collaboration and updates.",
      ],
    },
  },
  {
    title: "Keywords Extractor using NLP",
    slug: "keywords-extractor",
    tech: ["Machine Learning", "NLP", "HTML", "Google Colab"],
    description:
      "An applicataion that extracts keywords from a text-based document using NLP.",
    repo: "https://github.com/mohammedali5408/ProjectJobNexus",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: [
        "Manually identifying the most relevant keywords from large text documents is time-consuming and error-prone.",
        "Traditional keyword extraction methods often fail to capture context or semantic meaning accurately.",
        "There was a need to practice natural language processing (NLP) techniques to automate and improve keyword detection.",
        "The project aimed to build an educational prototype to explore core concepts in text preprocessing and feature extraction.",
      ],
      approach: [
        "Built a lightweight application in Google Colab integrating Python and NLP libraries.",
        "Preprocessed text with tokenization, stop-word removal, stemming/lemmatization to clean input data.",
        "Applied statistical techniques such as TF-IDF and RAKE, along with ML-based methods, to extract high-value keywords.",
        "Developed a simple HTML interface to demonstrate keyword extraction on text-based files or user input.",
      ],
      impact: [
        "Enabled quick identification of important keywords, reducing manual effort in text analysis.",
        "Improved understanding of NLP workflows including preprocessing, feature engineering, and evaluation.",
        "Provided a reusable foundation for applications such as document summarization, tagging, and search optimization.",
        "Served as a practical learning project bridging theoretical NLP concepts with real-world applications.",
      ],
    },
  },
  {
    title: "Resume Screener using NLP",
    slug: "resume-screener",
    tech: ["Machine Learning", "NLP", "HTML", "streamlit"],
    description:
      "An application that screens an uploaded resume and predicts the type of the job depending on the keywords extracted from the document.",
    repo: "https://github.com/pranavpratheekmalleboyina/resume-screening-application",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: [
        "Recruiters and hiring managers receive hundreds of resumes, making manual screening slow and error-prone.",
        "Traditional keyword matching often overlooks context, leading to inaccurate classification of resumes.",
        "There was a need to practice NLP techniques by building a system that could extract key terms and map them to job categories.",
        "The project aimed to demonstrate how AI can reduce repetitive HR tasks and speed up candidate shortlisting.",
      ],
      approach: [
        "Developed a Streamlit web application for uploading and screening resumes in real time.",
        "Preprocessed text with tokenization, stop-word removal, and lemmatization to standardize resume content.",
        "Applied NLP and ML techniques (TF-IDF, classifiers) to identify relevant keywords and predict job categories.",
        "Designed a simple HTML/Streamlit UI for uploading resumes and displaying screening results.",
      ],
      impact: [
        "Automated the initial resume screening process, reducing the effort required for manual shortlisting.",
        "Provided consistent classification of resumes into job types based on extracted keywords.",
        "Demonstrated practical use of NLP for real-world HR tech applications.",
        "Enhanced understanding of end-to-end ML workflows — from preprocessing to deployment with Streamlit.",
      ],
    },
  },
  {
    title: "Rainfall Prediction System using Deep Learning",
    slug: "rainfall-prediction",
    tech: ["Deep Learning", "MATLAB"],
    description:
      "An application that analyzes the weather data from previous years and predicts whether it would rain the next day or not.",
    repo: "https://github.com/pranavpratheekmalleboyina/DL-rainfall-prediction-project",
    image: "/images/movies.jpg",
    caseStudy: {
      problem: [
        "Accurate rainfall prediction is critical for agriculture, water resource management, and disaster preparedness.",
        "Traditional statistical forecasting methods often fail to capture complex, non-linear patterns in climate data.",
        "There was a need to explore deep learning models that can learn from large-scale historical weather datasets.",
        "The project also served as a hands-on way to apply deep learning for time-series prediction in MATLAB.",
      ],
      approach: [
        "Collected and preprocessed historical weather data including temperature, humidity, wind speed, and rainfall records.",
        "Implemented deep learning models in MATLAB to identify hidden patterns and relationships in the data.",
        "Trained and validated the models on past years’ weather data to predict the likelihood of rainfall the next day.",
        "Evaluated performance using accuracy and error metrics to measure predictive reliability.",
      ],
      impact: [
        "Improved prediction accuracy compared to traditional forecasting methods on the dataset used.",
        "Demonstrated the potential of deep learning techniques for environmental and meteorological applications.",
        "Provided insights that could support better planning in agriculture and resource management.",
        "Strengthened practical skills in applying deep learning for real-world time-series prediction tasks.",
      ],
    },
  },
] as const;
