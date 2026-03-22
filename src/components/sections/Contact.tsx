"use client";

import { MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';

export const Contact = () => {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

          <div className={`bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 ${isRtl ? 'lg:order-2' : ''}`}>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-primary text-white px-8 py-3 rounded-none"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                      {t('form.name')}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
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
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium"
                    placeholder=""
                  />
                </div>

                <div className="relative group">
                  <label className="text-sm font-bold text-gray-400 mb-2 block transition-colors group-focus-within:text-secondary">
                    {t('form.message')}
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none transition-all focus:border-secondary text-primary font-medium resize-none"
                    placeholder=""
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg flex items-center gap-3 text-sm">
                    <AlertCircle size={20} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-5 rounded-none bg-[#0B1C2C] text-white hover:bg-[#1a2e42] transition-all flex items-center justify-center gap-3 text-lg font-bold group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : isRtl ? (
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
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
