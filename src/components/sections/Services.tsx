"use client";

import { Gavel, Scale, FileText, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Services = () => {
  const t = useTranslations('services');
  const items = [
    {
      title: t('criminal.title'),
      description: t('criminal.desc'),
      icon: <Gavel className="w-8 h-8" />
    },
    {
      title: t('civil.title'),
      description: t('civil.desc'),
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: t('consultation.title'),
      description: t('consultation.desc'),
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: t('urgent.title'),
      description: t('urgent.desc'),
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary mb-3">
                {srv.title}
              </h3>
              <p className="text-gray-600">
                {srv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
