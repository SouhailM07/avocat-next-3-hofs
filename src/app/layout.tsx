import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avocat Ayoub Ouldrouis | محامي في المدية",
  description: "محامي في المدية يقدم خدمات قانونية احترافية في القضايا الجنائية والمدنية. اتصل الآن للحصول على استشارة.",
  keywords: ["محامي المدية", "Avocat Medea", "محامي الجزائر", "قانون جنائي", "استشارة قانونية"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text">{children}</body>
    </html>
  );
}
