import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeScript from "./theme-script";
import { Poppins, Raleway } from "next/font/google";
import { ReactNode } from "react";

/** Fancy headings + elegant body */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Malleboyina — Portfolio",
    description:
      "Full-stack engineer (Android + Web). Kotlin • React • Python • ML.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${poppins.variable}`}>
        {/* (If you use dark-mode sync) */}
        <ThemeScript />

        <Header />
        {/* pt-20 to clear the fixed header; container spacing kept */}
        <main className="container px-4 py-12 pt-20 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
