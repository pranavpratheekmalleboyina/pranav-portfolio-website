export default function AboutPage() {
  return (
    <div className="prose max-w-none">
      <h1>ABOUT</h1>
      <p className="max-w-2xl mx-auto p">
          Hi! I’m Pranav and I am a Computer Science student who has completed my master's degree 
          at Texas A&M University–Corpus Christi,
          with 5+ years of experience as a backend engineer in Java Springboot and .NET.
          My expertise spreads across Android (Kotlin, Jetpack Compose), full-stack web development, and Python/ML.
          I enjoy building products that are reliable, scalable, and intuitive for users.

          To know more about me, please visit my resume which is available for download below.
      </p>
      <a href="/Pranav_Pratheek_Malleboyina_Resume.pdf" 
         className="btn btn-primary" 
         download="Pranav_Pratheek_Malleboyina_Resume.pdf">
            Download Resume
      </a>
    </div>
  );
}
