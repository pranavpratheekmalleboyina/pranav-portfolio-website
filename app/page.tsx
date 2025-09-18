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
      <section id="home" className="text-center py-14">
        <HomePage />
      </section>
      <section id="about" className="text-center py-14">
          <AboutPage />
      </section>
      <section id="experience" className="text-center py-14">
          <ExperiencePage />
      </section>
      <section id="education" className="text-center py-14">
          <EducationPage />
      </section>
      <section id="projects" className="text-center py-14">
          <ProjectsPage />
      </section>
      <section id="skills" className="text-center py-14">
          <SkillsPage />
      </section>
      <section id="contact" className="text-center py-14">
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
