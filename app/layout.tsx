import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Full‑stack engineer building fast, reliable products.",
  openGraph: {
    title: "Your Name — Portfolio",
    description: "Full‑stack engineer building fast, reliable products.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
