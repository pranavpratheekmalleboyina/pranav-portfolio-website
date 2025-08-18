export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-center h-16 text-sm">
        <p> &copy;
            {new Date().getFullYear()}<br/>
            Developed by: Pranav Pratheek Malleboyina
        </p>
      </div>
    </footer>
  );
}
