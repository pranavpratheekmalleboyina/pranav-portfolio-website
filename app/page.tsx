import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-center">
        <h1 className="h1">Pranav Pratheek Malleboyina</h1>
        <p className="max-w-2xl mx-auto p">
          Hi! I’m a Computer Science graduate student at Texas A&M University–Corpus Christi,
          with 5+ years of experience as a backend engineer in Java Springboot and .NET.
          My expertise spreads across Android (Kotlin, Jetpack Compose), full-stack web development, and Python/ML.
          I enjoy building products that are reliable, scalable, and intuitive for users.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/Pranav_Pratheek_Malleboyina_Resume.pdf" 
             className="btn btn-primary" 
             download="Pranav_Pratheek_Malleboyina_Resume.pdf">
                Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
