import Link from 'next/link';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const links = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن المكتب', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-2xl font-bold text-primary">
              Avocat Ayoub
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text hover:text-secondary font-medium transition-colors"
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
        </div>
      </div>
    </nav>
  );
};
