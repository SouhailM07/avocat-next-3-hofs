"use client";

import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Authority = () => {
  const t = useTranslations('authority');
  const items = t.raw('items') as string[];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">{t('title')}</h2>
            <div className="w-24 h-1 bg-secondary rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="text-secondary shrink-0" size={24} />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform lg:translate-x-4 lg:translate-y-4 -z-10"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-background/5">
              <img 
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=1200" 
                alt="Legal Authority Pen" 
                className="w-full h-[400px] lg:h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <span className="inline-block px-6 py-2 bg-secondary text-primary font-bold rounded-full text-lg shadow-lg">
                  {t('badge')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
