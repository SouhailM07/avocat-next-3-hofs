import { Scale, Users, Clock } from 'lucide-react';

export const Values = () => {
  const items = [
    {
      title: "الاحترافية",
      icon: <Scale className="w-12 h-12" />
    },
    {
      title: "الإنسانية",
      icon: <Users className="w-12 h-12" />
    },
    {
      title: "السرعة",
      icon: <Clock className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">قيمنا</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {items.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 text-secondary transform transition-transform hover:scale-110 duration-300 shadow-lg">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading">{val.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
