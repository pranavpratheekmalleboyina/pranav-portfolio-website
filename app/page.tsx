import Section from "../components/Section";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";
import EducationPage from "./education/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";

export default function Page() {
  return (
    <main>
      <section id="home" className="py-24 text-center md:py-32">
       <h1 className="h1">Pranav Pratheek Malleboyina</h1>
        <p className="max-w-2xl mx-auto p">
          Full-Stack developer with experience in Machine Learning and Artificial Intelligence
        </p>
        <div className="flex justify-center gap-4">
          <a href="/Pranav_Pratheek_Malleboyina_Resume.pdf" 
             className="btn btn-primary" 
             download="Pranav_Pratheek_Malleboyina_Resume.pdf">
                Download Resume
          </a>
        </div> 
      </section>
      <section id="about" className="py-24 text-center md:py-32">
          <AboutPage />
      </section>
      <section id="projects" className="py-24 text-center md:py-32">
          <ProjectsPage />
      </section>
      <section id="experience" className="py-24 text-center md:py-32">
          <ExperiencePage />
      </section>
      <section id="education" className="py-24 text-center md:py-32">
          <EducationPage />
      </section>
      <section id="skills" className="py-24 text-center md:py-32">
          <SkillsPage />
      </section>
      <section id="contact" className="py-24 text-center md:py-32">
          <ContactPage />
      </section>
    </main>  
  );
}
