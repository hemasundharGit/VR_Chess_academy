import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

export const metadata: Metadata = {
  title: "VR CHESS ACADEMY",
  description: "Where Focus Meets Finesse. Join VR Chess Academy to elevate your game with personalized training programs.",
  keywords: "chess, chess coaching, chess academy, chess lessons, learn chess, chess master",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingWhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
