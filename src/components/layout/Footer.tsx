import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-700 pb-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">Avocat Ayoub Ouldrouis</h2>
            <p className="text-gray-300 max-w-sm">
              دفاع قانوني احترافي وخبرة في القضايا الجنائية والمدنية مع التزام كامل بخدمة موكليك.
            </p>
          </div>
          <div className="hidden md:flex justify-end gap-x-8">
            {['الرئيسية', 'عن المكتب', 'الخدمات', 'اتصل بنا'].map((item) => (
              <Link key={item} href={`#${item}`} className="text-gray-300 hover:text-secondary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 جميع الحقوق محفوظة لـ Avocat Ayoub Ouldrouis</p>
          <div className="mt-4 md:mt-0">
            <p>Made with perfection</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
