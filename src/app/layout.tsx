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
  title: "محامي في المدية | Avocat Ayoub Ouldrouis",
  description: "محامي في المدية متخصص في القضايا الجنائية والمدنية. استشارة قانونية احترافية واتصال مباشر.",
  keywords: ["محامي المدية", "Avocat Medea", "قانون جنائي", "استشارة قانونية"],
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
