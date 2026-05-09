import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ricardo Silva",
      text: "A melhor picanha da região, sem dúvidas. A carne derrete na boca e o atendimento na unidade Costa Azul é impecável, com uma vista de tirar o fôlego.",
      role: "Empresário",
      stars: 5
    },
    {
      name: "Juliana Mendes",
      text: "Ambiente extremamente familiar e acolhedor. O rodízio de petiscos nas sextas é sensacional, muita variedade e tudo fresquinho.",
      role: "Arquiteta",
      stars: 5
    },
    {
      name: "Marcus Oliveira",
      text: "Frequentemente visito Rio das Ostras e o Picanha da Praia é parada obrigatória. Qualidade constante há anos. Recomendo muito!",
      role: "Turista",
      stars: 4
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-dark reveal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">Prova Social</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold italic leading-tight">
              O Que Dizem <br /> <span className="text-brand-gold">Nossos Clientes.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all">←</div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all">→</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed mb-8 italic italic font-display">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold uppercase text-xs">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{item.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
