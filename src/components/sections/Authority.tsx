import { CheckCircle } from 'lucide-react';

export const Authority = () => {
  const items = [
    "متابعة شخصية لكل ملف",
    "التزام كامل بالدفاع عن الحقوق",
    "خبرة في مختلف أنواع القضايا",
    "تواصل مباشر وسريع"
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">لماذا تختارنا</h2>
            <div className="w-24 h-1 bg-secondary rounded-full mb-8"></div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              نحن نؤمن بأن كل قضية تحتاج إلى استراتيجية فريدة ومتابعة دقيقة. من خلال خبرتنا، نقدم لك الحماية القانونية الكاملة بكل مهنية وسرية.
            </p>
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="text-secondary shrink-0" size={24} />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-background/5">
              <img 
                src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1200" 
                alt="Legal Authority" 
                className="w-full h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <span className="inline-block px-6 py-2 bg-secondary text-primary font-bold rounded-full text-lg shadow-lg">
                  ثقة ومصداقية
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
