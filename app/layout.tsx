import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import ThemeScript from "./theme-script";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Pranav Pratheek Malleboyina — Portfolio",
  description:
    "Full-stack engineer (Android + Web) building fast, reliable products with Kotlin, React, Python, and ML.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Pranav Malleboyina — Portfolio",
    description:
      "Full-stack engineer (Android + Web). Kotlin • React • Python • ML.",
    url: "https://your-domain.com",
    siteName: "Pranav — Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Malleboyina — Portfolio",
    description:
      "Full-stack engineer (Android + Web). Kotlin • React • Python • ML.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
