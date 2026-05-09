import { motion } from 'motion/react';
import { ChefHat, Flame, Waves, Users } from 'lucide-react';

export default function BentoFeatures() {
  const features = [
    {
      title: "Cortes Nobres",
      desc: "Nossa picanha é selecionada e maturada por especialistas, garantindo maciez e sabor inigualáveis.",
      icon: <Flame className="w-10 h-10 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Vista Privilegiada",
      desc: "Desfrute do melhor da gastronomia com a brisa do mar de Rio das Ostras em nossa unidade Costa Azul.",
      icon: <Waves className="w-8 h-8 text-brand-gold" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Ambiente Familiar",
      desc: "Espaços amplos e acolhedores feitos para celebrar momentos especiais com quem você ama.",
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Mestres Churrasqueiros",
      desc: "Equipe apaixonada que entende cada ponto da carne.",
      icon: <ChefHat className="w-8 h-8 text-brand-gold" />,
      image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?q=80&w=1000&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="py-32 px-6 bg-brand-dark reveal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">Experiência Gastronômica</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold italic">O Que Nos Torna Únicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-full md:h-[800px]">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`bento-card group flex flex-col justify-between ${item.className}`}
            >
              {item.image && (
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 font-display italic tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
              
              <div className="relative z-10 self-end mt-4">
                <div className="w-10 h-1 bg-brand-gold/30 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
