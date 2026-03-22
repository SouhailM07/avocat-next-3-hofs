"use client";

import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('contact');
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8 p-8 bg-background rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-primary mb-6">{t('office_name')}</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-secondary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">{t('address_label')}</h4>
                <p className="text-gray-600">{t('address_value')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-secondary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">{t('hours_label')}</h4>
                <p className="text-gray-600">{t('hours_value')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-secondary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">{t('phone_label')}</h4>
                <p className="text-gray-600" dir="ltr">0553 26 57 60</p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-200">
              <Button size="lg" className="w-full text-lg gap-2" onClick={() => window.location.href='tel:0553265760'}>
                <Phone size={20} />
                {t('cta')}
              </Button>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative bg-gray-50 flex items-center justify-center">
            {/* Real Map iframe if available, or a stylized placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12836.26257321683!2d2.756247345638515!3d36.26470359873041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fbdae4b02d645%3A0x7d6b38c353ec02ba!2sM%C3%A9d%C3%A9a!5e0!3m2!1sen!2sdz!4v1716382903120!5m2!1sen!2sdz" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
