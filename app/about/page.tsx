export default function AboutPage() {
  return (
    <div className="prose max-w-none">
      <h2 className="mb-8 h2">ABOUT</h2>
      <div className="space-y-6 leading-relaxed text-justify text-slate-300">
        <p>
          I’m a release and CI/CD-focused software engineer with 6+ years of
          experience across release management, Java backend, full-stack web and
          Python desktop development. I hold an M.S. in Computer Science from
          Texas A&M University–Corpus Christi, with coursework in Machine
          Learning, Artificial Intelligence and Android development.
        </p>
        <p>
          Currently, I’m a Senior DevOps Engineer at EyeKon Technology Inc.,
          owning end-to-end release management through GitHub Actions. I define
          and enforce Git branching, commit and versioning standards (GitFlow,
          semantic versioning, Conventional Commits), supervise compliance checks
          in the pipeline and resolve complex merge and version conflicts to
          keep production deployments reliable.
        </p>
        <p>
          Previously, as a Software Engineering Intern at Enablor Inc., I was the
          sole developer of a production Windows application for real-time
          attention monitoring for the above client (Eyekon), built with Python, 
          MediaPipe and OpenCV andshipped through a WiX MSI installer. I also diagnosed 
          a Windows 11 24H2 compositor regression and traced it to its root cause.
        </p>
        <p>
          Earlier, I delivered Spring Boot features for a telecom client
          (Tracfone Wireless) at Sunera Technologies and full-stack enhancements
          for the client IKEA at Tata Consultancy Services. I’m actively interested 
          in DevOps, release engineering and full-stack development roles and the 
          contact section at the bottom is the best way to reach me.
        </p>
        <p>
          To know more about me, please visit my resume which is available for
          download below.
        </p>
      </div>
      <a
        href="/Pranav_Pratheek_Malleboyina_Resume.pdf"
        className="mt-6 btn btn-primary"
        download="Pranav_Pratheek_Malleboyina_Resume.pdf"
      >
        Download Resume
      </a>
    </div>
  );
}