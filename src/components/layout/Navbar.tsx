"use client";

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');
  const tHero = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('contact'), href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'fr' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-2xl font-bold text-primary">
              {tHero('title1')}
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text hover:text-secondary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors font-bold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span>{locale === 'ar' ? 'FR' : 'عربي'}</span>
            </button>
            <Link href="#contact">
              <Button variant="primary">{t('book')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-secondary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-gray-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-lg font-bold text-primary hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary/5 text-primary font-bold uppercase"
              >
                <Globe size={20} />
                <span>{locale === 'ar' ? 'Français' : 'العربية'}</span>
              </button>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-lg py-6">{t('book')}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
