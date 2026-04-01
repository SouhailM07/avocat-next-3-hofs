import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Authority } from "@/components/sections/Authority";
import { Values } from "@/components/sections/Values";
import { Emergency } from "@/components/sections/Emergency";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const translations = {
    fr: {
      title: "Avocat à Chéraga - Ayoub Ouldrouis",
      description: "Cabinet d'avocat à Chéraga en Algérie. Services juridiques professionnels.",
    },
    ar: {
      title: "محامي في الشراقة - أيوب أولدرويس",
      description: "محامي في الشراقة، الجزائر. خدمات قانونية احترافية.",
    },
  };

  const current = translations[locale as keyof typeof translations] || translations.fr;

  return {
    title: current.title,
    description: current.description,
    alternates: {
      languages: {
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Authority />
        <Values />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
