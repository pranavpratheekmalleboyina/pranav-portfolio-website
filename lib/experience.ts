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
    company: "EyeKon Technology Inc.",
    role: "Senior DevOps Engineer",
    type: "Full-time",
    start: "Jun 2026",
    end: "Present",
    location: "Richardson, TX, USA · Remote",
    logo: "/images/eyekon_logo.png",
    bullets: [
      "Own end-to-end release management across every product release, coordinating the build, test and deployment stages through GitHub Actions CI/CD workflows so that each release follows a consistent and repeatable path from commit to production.",
      "Define and enforce Git branching, commit and versioning standards (GitFlow, semantic versioning, Conventional Commits) across the engineering workflow, supervising compliance checks in the pipeline to keep releases consistent and predictable and every change traceable to its purpose.",
      "Resolve complex merge and version conflicts between concurrent branches, keeping releases stable and production deployments reliable.",
      "Maintain an atomic, bisectable commit history, with one logical change per commit and outcome-focused messages, so that regressions can be isolated quickly with git bisect and git blame and any change can be reverted independently."
    ]
  },
  {
    company: "Enablor Inc.",
    role: "Software Engineering Intern",
    type: "Internship",
    start: "Dec 2025",
    end: "May 2026",
    location: "Pleasanton, CA, USA · On-site",
    logo: "/images/enablor_logo.png",
    bullets: [
      "Built and packaged the Windows release of the application as an MSI installer using WiX Toolset, with custom elevated installation actions, registry configuration and automated post-install launch handling, and bundled the application for release using PyInstaller.",
      "Sole developer of a production Windows desktop application for real-time attention monitoring during video calls, built end-to-end in Python with MediaPipe and OpenCV from architecture through MSI installer deployment.",
      "Diagnosed a Windows 11 24H2 platform-specific compositor regression during beta testing that left application windows invisible, performing root cause analysis through multiple hypotheses to a withdrawn-parent window manager behaviour and implementing a precise, targeted fix.",
      "Engineered a thread-safe multi-threaded pipeline across camera processing, UI and system tray components with cross-thread communication patterns, eliminating race conditions and UI blocking."
    ]
  },
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
