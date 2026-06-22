import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Barkund — AI & Machine Learning Engineer",
  description:
    "Portfolio of Siddharth Barkund — AI/ML Engineer, Data Scientist, and Python Developer. Building intelligent applications that solve real-world problems. Specializing in Machine Learning, Deep Learning, NLP, and Generative AI.",
  keywords: [
    "Siddharth Barkund",
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Python Developer",
    "NLP",
    "Deep Learning",
    "Generative AI",
    "Computer Vision",
    "Portfolio",
  ],
  authors: [{ name: "Siddharth Barkund" }],
  creator: "Siddharth Barkund",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddharthbarkund.dev",
    title: "Siddharth Barkund — AI & Machine Learning Engineer",
    description:
      "AI/ML Engineer building intelligent applications that solve real-world problems. Explore my projects, skills, and experience.",
    siteName: "Siddharth Barkund Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddharth Barkund — AI & Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Barkund — AI & Machine Learning Engineer",
    description:
      "AI/ML Engineer building intelligent applications that solve real-world problems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://siddharthbarkund.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
