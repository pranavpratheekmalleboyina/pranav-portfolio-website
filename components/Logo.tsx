// Brand mark (gradient = site tokens --brand-1 / --brand-3 / --brand-2 in globals.css): lowercase "p" and "m" sharing one stroke (p's stem and bowl form m's first arch).
// Inline SVG: no network request, scales crisply, and matches app/icon.svg (the tab icon).
type LogoProps = { size?: number; className?: string };

export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="pm logo"
      className={className}
    >
      <defs>
        {/* Fixed id: safe because the mark appears once per page (header). */}
        <linearGradient id="pm-logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#pm-logo-grad)" />
      <g fill="none" stroke="#fff" strokeWidth="8">
        <path d="M16 53V22A8 8 0 0 1 32 22A8 8 0 0 1 48 22V46" strokeLinejoin="round" />
        <path d="M32 22V42H16" strokeLinejoin="miter" />
      </g>
    </svg>
  );
}
