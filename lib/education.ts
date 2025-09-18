// lib/education.ts
export type Edu = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  logo?: string;          
  gpa?: string;           
  activities?: string[];  
  coursework?: string[];  
  skills?: string[];      
};

export const education: Edu[] = [
  {
    school: "Texas A&M University–Corpus Christi",
    degree: "Master of Science — MS, Computer Science",
    start: "Aug 2023",
    end: "Aug 2025",
    location: "Corpus Christi, TX",
    logo: "/images/tamucc_logo.jpg",
    gpa: "3.2/4.0",
    activities: [
      "Islander table tennis club member",
      "Event Manager @ Indian Student Association (ISA)",
    ],
    coursework: [
      "Advanced Operating Systems",
      "Design & Analysis of Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Advanced Software Engineering",
      "Information Assurance",
      "Mobile Software Development",
    ],
    skills: [
      "Artificial Intelligence (AI)",
      "Software Project Management",
      "Next.js",
      "Cybersecurity",
      "Android",
      "Machine Learning",
    ],
  },
  {
    school: "Gokaraju Rangaraju Institute of Engineering and Technology",
    degree: "Bachelor of Technology — BTech, Information Technology",
    start: "Sep 2013",
    end: "Jul 2017",
    location: "Hyderabad, India",
    logo: "/images/griet_logo.png",
    gpa: "3.2/4.0",
    activities: ["IEEE", "OSSD"],
    coursework: [],
    skills: [],
  },
  {
    school: "Sri Chaitanya Junior Kalasala",
    degree: "Intermediate, MPC",
    start: "Jun 2011",
    end: "Jul 2013",
    location: "Hyderabad, India",
    logo: "/images/srichaithanya_logo.jpg",
    gpa: "3.68/4.00",
  },
];
