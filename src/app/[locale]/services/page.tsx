import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const translations = {
    fr: {
      title: "Nos Services Juridiques - Maître Ayoub Ouldrouis",
      description: "Découvrez nos domaines d'expertise : droit pénal, civil, immobilier, et accompagnement pour l'immigration.",
    },
    ar: {
      title: "خدماتنا القانونية - الأستاذ أيوب أولدرويس",
      description: "اكتشف مجالات خبرتنا: القانون الجنائي، المدني، العقاري، ومرافقة ملفات الهجرة.",
    },
  };

  const current = translations[locale as keyof typeof translations] || translations.fr;

  return {
    title: current.title,
    description: current.description,
    alternates: {
      languages: {
        fr: "/fr/services",
        ar: "/ar/services",
      },
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
