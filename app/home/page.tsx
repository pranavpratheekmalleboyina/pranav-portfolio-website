export default function HomePage(){
    return(
        <div className="prose max-w-none">
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
        </div>        
    );
}