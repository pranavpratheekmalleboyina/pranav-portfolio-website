export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-between h-16 text-sm">
        <p> &copy;
            {new Date().getFullYear()}
            Developed by: Pranav Pratheek Malleboyina
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/pranavpratheekmalleboyina" 
             target="_blank" 
             rel="noreferrer" 
             className="hover:underline">
                GitHub
          </a>
          <a href="https://www.linkedin.com/in/pranav-pratheek-malleboyina-41a154191/" 
             target="_blank" 
             rel="noreferrer" 
             className="hover:underline">
                LinkedIn
          </a>
          <a 
             href="mailto:pranavp.malleboyina@gmail.com" 
             className="hover:underline">
                📩Email
          </a>
        </div>
      </div>
    </footer>
  );
}
