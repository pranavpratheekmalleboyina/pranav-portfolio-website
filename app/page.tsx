import Section from "../components/Section";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";
import EducationPage from "./education/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FiPhone } from "react-icons/fi";

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
        <div className="fixed flex flex-col gap-5 text-2xl right-6 top-1/3">
          <a href="https://github.com/pranavpratheekmalleboyina" 
             target="_blank" 
             rel="noopener noreferrer"
             className="transition hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pranav-pratheek-malleboyina-41a154191/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="transition hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="mailto:pranavp.malleboyina@gmail.com" 
             className="transition hover:text-cyan-400">
            <MdEmail />
          </a>
          <a href="https://leetcode.com/u/pranav_malleboyina/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="transition hover:text-cyan-400">
            <SiLeetcode />
          </a>
          <a href="tel:+ 361-905-5923" 
             className="transition hover:text-cyan-400">
             <FiPhone />
           </a>
        </div>
    </main>  
  );
}
