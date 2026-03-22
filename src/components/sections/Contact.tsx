"use client";

import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslations, useLocale } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section id="contact" className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info - Appears on the right in RTL, left in LTR visually if we don't swap, 
              but the screenshot shows title/info on the right. 
              In RTL layout, lg:grid-cols-2 will put the first child on the right if dir="rtl" is set on html.
          */}
          <div className={`space-y-8 ${isRtl ? 'lg:order-1' : ''}`}>
            <div>
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2 block">
                {t('subtitle')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                {t('title')}
              </h2>
              <div className="w-20 h-1 bg-secondary/30 rounded-full mb-8"></div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {t('description')}
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-primary rounded-lg text-white transition-transform group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl mb-1">{t('address_label')}</h4>
                  <p className="text-gray-500 font-medium">{t('address_value')}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-primary rounded-lg text-white transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl mb-1">{t('phone_label')}</h4>
                  <p className="text-gray-500 font-medium" dir="ltr">{t('phone_value')}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-primary rounded-lg text-white transition-transform group-hover:scale-110">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl mb-1">{t('hours_label')}</h4>
                  <p className="text-gray-500 font-medium">{t('hours_value')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Card on the other side */}
          <div className={`bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 ${isRtl ? 'lg:order-2' : ''}`}>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                    {t('form.name')}
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium"
                    placeholder=""
                  />
                </div>
                <div className="relative group">
                  <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                    {t('form.email')}
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                  {t('form.subject')}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium"
                  placeholder=""
                />
              </div>

              <div className="relative group">
                <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                  {t('form.message')}
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <Button type="submit" className="w-full py-5 rounded-none bg-[#0B1C2C] text-white hover:bg-[#1a2e42] transition-all flex items-center justify-center gap-3 text-lg font-bold group">
                {isRtl ? (
                  <>
                    <span className="mt-1">{t('form.submit')}</span>
                    <Send className="w-5 h-5 transition-transform group-hover:-translate-x-1 -rotate-90" />
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <span className="mt-1">{t('form.submit')}</span>
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
