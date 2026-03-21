"use client";

import { Button } from '../ui/Button';
import { PhoneCall } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-gray-100/50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              محامٍ في المدية
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-primary leading-tight mb-6">
              Avocat Ayoub <br/> Ouldrouis
            </h1>
            <p className="text-lg text-text/80 mb-8 max-w-lg leading-relaxed">
              دفاع قانوني احترافي في القضايا الجنائية والمدنية مع التزام كامل بحماية حقوقك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                احجز استشارة
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => window.location.href='tel:0553265760'}>
                <PhoneCall size={20} />
                <span dir="ltr">اتصال مباشر</span>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] lg:aspect-square flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105 -z-10 transition-transform duration-500 hover:rotate-6" />
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-primary relative">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8dcee3aa8f52?auto=format&fit=crop&q=80&w=1200" 
                alt="Law Architecture" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105 relative z-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
