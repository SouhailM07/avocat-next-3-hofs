"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gray-100/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              {t('subtitle')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-primary leading-tight mb-6">
              {t('title1')} <br className="hidden sm:block" /> {t('title2')}
            </h1>
            <p className="text-lg text-text/80 mb-8 max-w-lg leading-relaxed">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t('cta_book')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => (window.location.href = "tel:0553265760")}
              >
                <PhoneCall size={20} />
                <span dir="ltr">{t('cta_call')}</span>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] lg:aspect-square flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl lg:rotate-3 lg:scale-105 -z-10 transition-transform duration-500 hover:rotate-6" />
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-primary relative">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <Image
                src="/hero.webp"
                fill
                priority
                fetchPriority="high"
                loading="eager"
                alt="Premium Lawyer Office"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105 relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
