"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { href: string; label: string };

/**
 * Menu for screens narrower than md. The seven nav links need ~700px, so they
 * cannot sit in one row on a phone. This is the only client component in the
 * header; the desktop nav stays a plain server-rendered list.
 */
export default function MobileNav({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);

  // Close on Escape so keyboard users are not trapped in the open menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-slate-200"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 top-16 border-b border-slate-700/60 bg-slate-800/95 backdrop-blur"
        >
          <ul className="container px-4 py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  scroll
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base tracking-wide text-slate-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
