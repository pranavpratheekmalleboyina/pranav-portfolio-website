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

const websiteUrl = "https://pranavpratheekmalleboyina.vercel.app/"
const websiteTitle = "Pranav Pratheek Malleboyina | Senior DevOps & Software Engineer"
const websiteName = "Pranav Pratheek Malleboyina"
const websiteDescription = "Senior DevOps and software engineer with 6+ years across Java, Python, Full-Stack development(React, Node.js) and Release automation with GitHub Actions"

export const metadata: Metadata = {
  title: websiteTitle,
  description: websiteDescription,
  metadataBase: new URL(websiteUrl),
  openGraph: {
    title: websiteTitle,
    description:
      websiteDescription,
    url: websiteUrl,
    siteName: websiteName,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: websiteTitle,
    description:
      websiteDescription,
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
