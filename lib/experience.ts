// lib/experience.ts
export type Experience = {
  company: string;
  role: string;
  type?: string;              // Full-time, Internship, etc.
  start: string;              // "Jan 2021"
  end: string;                // "Oct 2022" or "Present"
  location?: string;          // "Hyderabad, India · On-site"
  logo?: string;              // /logos/suneratech.png
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Sunera Technologies, Inc. (SuneraTech)",
    role: "Java Backend Developer",
    type: "Full-time",
    start: "Jan 2021",
    end: "Oct 2022",
    location: "Uppal, Telangana, India · Off-shore",
    logo: "/images/sunera_logo.png",
    bullets: [
      "Developed change requests on the server side in 4-week sprints.",
      "Resolved bugs in legacy and microservices modules; improved efficiency by ~40%.",
      "Delivered telecom features for activation/redemption/upgrade/porting workflows.",
      "Guided new joiners on code setup, tools, and project conventions.",
      "Completed Redemption and Password Encryption tasks ahead of schedule.",
      "Contributed to sprint planning and retrospectives; assisted in interviews."
    ]
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    type: "Full-time",
    start: "Sep 2017",
    end: "Nov 2020",
    location: "Chennai, Tamil Nadu, India · Off-shore",
    logo: "/images/tcs_logo.png",
    bullets: [
      "Built client/server enhancements for IKEA dealer websites (Sweden).",
      "Authored SQL queries and resolved defects on time across 2-week sprints.",
      "Led a 2-person offshore team in a support project; improved efficiency by ~40%.",
      "Planned sprint ceremonies and prepared agendas.",
      "Runner-up at an internal Computer Security Paper Presentation (Oct 2019)."
    ]
  }
];
