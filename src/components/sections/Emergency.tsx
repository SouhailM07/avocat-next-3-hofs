"use client";

import { Button } from '../ui/Button';
import { AlertTriangle, PhoneCall } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Emergency = () => {
  const t = useTranslations('emergency');
  const items = t.raw('items') as string[];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-secondary/5 pattern-grid-lg text-secondary/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl border border-secondary/20 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold mb-6">
              <AlertTriangle size={20} />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
              {t('title')}
            </h2>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {items.map((item, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-100 font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-auto text-center shrink-0">
            <div className="bg-primary/5 p-8 rounded-3xl">
              <p className="text-gray-500 font-medium mb-3">{t('help_text')}</p>
              <Button size="lg" className="w-full lg:w-auto text-lg gap-3 py-6 shadow-xl shadow-secondary/20 bg-secondary hover:bg-amber-600 font-bold" onClick={() => window.location.href='tel:0553265760'}>
                <PhoneCall size={24} />
                {t('cta')}
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
