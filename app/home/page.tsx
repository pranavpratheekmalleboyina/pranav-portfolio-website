import Image from "next/image";
import Link from "next/link";

export default function HomePage(){
    return(
        <main>
        <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:text-left">
            {/* Photo */}
          <Image
            src="/images/myself.png"
            alt="Pranav Pratheek Malleboyina"
            width={250}
            height={250}
            className="border-4 border-indigo-500 rounded-full shadow-lg"
            priority
           />
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 bg-clip-text"
        style={{ textShadow: "0 0 12px rgba(56,189,248,.6), 0 0 24px rgba(139,92,246,.5)"
              }}>Pranav Pratheek <br/>Malleboyina</h1>
         </div>    
         <div className="flex flex-col items-center gap-4"> 
                <p className="max-w-2xl mx-auto p">
                  Full-Stack developer with experience in Machine Learning and Artificial Intelligence
                </p> 
                  <Link href="/#contact" 
                     className="btn btn-primary"
                     scroll >
                        Contact Me
                  </Link>
        </div>
        </main>                
    );
}