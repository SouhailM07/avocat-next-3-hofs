"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن المكتب', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-2xl font-bold text-primary">
              Avocat Ayoub
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
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
            <Link href="#contact">
              <Button variant="primary">احجز استشارة</Button>
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
            <div className="pt-4">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-lg py-6">احجز استشارة</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
