export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-between h-16 text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <div className="flex gap-4">
          <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:you@example.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
