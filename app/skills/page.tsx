export default function SkillsPage() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "VB.NET", "Kotlin", "C++"],
    },
    {
      category: "Web Technologies",
      items: ["Microservices", "JSON", "XML", "HTML5", "CSS3", "JavaScript"],
    },
    {
      category: "Frameworks",
      items: [
        "Spring Boot",
        "ASP.NET",
        "Flask",
        "Django",
        "Angular",
        "React",
        "Node.js",
        "Next.js",
        "Jetpack Compose",
        "Flutter",
      ],
    },
    {
      category: "Databases",
      items: ["SQL Server", "MySQL", "MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      items: [
        "Linux",
        "Git",
        "VS Code",
        "Eclipse",
        "Google Colab",
        "Markdown",
        "Android Studio",
        "JUnit",
      ],
    },
    {
      category: "Methodologies",
      items: ["Agile", "Test Driven Development (TDD)"],
    },
  ];

  return (
    <section id="skills" className="container py-12">
      <h2 className="mb-8 h2">SKILLS</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill, idx) => (
          <div key={idx} className="card">
            <h3 className="mb-3 text-lg font-semibold text-cyan-300">
              {skill.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 text-sm transition border rounded-full bg-slate-800 text-slate-200 border-slate-600 hover:border-cyan-400 hover:text-cyan-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
