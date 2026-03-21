import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const features = [
    "خبرة قانونية",
    "سرية تامة",
    "استجابة سريعة",
    "متابعة دقيقة"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl -z-10 translate-y-4 -translate-x-4" />
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200" 
              alt="Law Building Pillars" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6 relative inline-block">
              عن المكتب
              <span className="absolute bottom-0 start-0 w-1/2 h-1 bg-secondary rounded-full -mb-2"></span>
            </h2>
            <p className="text-lg text-text/80 leading-relaxed mb-8">
              يقدم المكتب خدمات قانونية شاملة مع خبرة في الدفاع عن القضايا الجنائية والمدنية، مع الالتزام بالسرية والمهنية.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-secondary bg-secondary/10 p-2 rounded-full">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-semibold text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
