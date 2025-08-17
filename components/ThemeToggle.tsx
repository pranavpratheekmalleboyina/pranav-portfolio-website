"use client";

export default function ThemeToggle() {
  function toggle() {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    html.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  }
  return (
    <button onClick={toggle} className="px-3 py-1 text-sm border rounded-xl">
      Toggle theme
    </button>
  );
}
