import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "./Nav"; 
import Footer from "./Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The WEEKND",
  description: "Assignment 2 — Next.js + Tailwind",
};

export default function RootLayout({ children }) {
 
  const footerLinks = [
    { label: "© 2025" },
    { label: "contact", href: "mailto:mso540269@gmail.com" },
    { label: "THE WEEKND website", href: "https://aus.xo.store/" },
    { label: "facebook", href: "https://www.facebook.com/theweeknd/" },
    { label: "instagram", href: "https://www.instagram.com/theweeknd/" },
  ];

  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav /> 
        <main>{children}</main>
        <Footer footerLinks={footerLinks} />
      </body>
    </html>
  );
}
