import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const translations = {
    fr: {
      title: "Contactez le Cabinet - Maître Ayoub Ouldrouis",
      description: "Prenez rendez-vous ou posez vos questions juridiques. Cabinet situé à Chéraga, Alger.",
    },
    ar: {
      title: "اتصل بنا - مكتب الأستاذ أيوب أولدرويس",
      description: "احجز موعدًا أو اطرح استفساراتك القانونية. المكتب يقع في الشراقة، الجزائر.",
    },
  };

  const current = translations[locale as keyof typeof translations] || translations.fr;

  return {
    title: current.title,
    description: current.description,
    alternates: {
      languages: {
        fr: "/fr/contact",
        ar: "/ar/contact",
      },
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
