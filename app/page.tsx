import Section from "../components/Section";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";
import EducationPage from "./education/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";

export default function Page() {
  return (
    <main>
      <section id="home" className="py-24 text-center">
        <HomePage />
      </section>
      <section id="about" className="py-24 text-center">
          <AboutPage />
      </section>
      <section id="experience" className="py-24 text-center">
          <ExperiencePage />
      </section>
      <section id="education" className="py-24 text-center">
          <EducationPage />
      </section>
      <section id="projects" className="py-24 text-center">
          <ProjectsPage />
      </section>
      <section id="skills" className="py-24 text-center">
          <SkillsPage />
      </section>
      <section id="contact" className="py-24 text-center">
          <ContactPage />
      </section>
    </main>  
  );
}
