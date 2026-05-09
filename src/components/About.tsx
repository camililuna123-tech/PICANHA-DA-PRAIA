export default function About() {
  return (
    <section className="py-32 px-6 bg-brand-surface relative overflow-hidden reveal">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <span className="text-[20vw] font-black text-white/20 select-none -rotate-12 translate-x-1/2">MATURADA</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" 
                alt="Picanha Premium Selecionada" 
                referrerPolicy="no-referrer"
                className="rounded-2xl w-full h-[400px] object-cover shadow-2xl"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
                alt="Variedade de Pratos e Acompanhamentos" 
                referrerPolicy="no-referrer"
                className="rounded-2xl w-full h-[400px] object-cover mt-[-40px] shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">Nossa História</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight italic">
            Tradição que se <br /> <span className="text-brand-gold">Sente no Paladar.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Há mais de duas décadas, Picanha da Praia é sinônimo de churrasco de qualidade em Rio das Ostras. 
            Fundado em 1999, o restaurante mantém a tradição familiar de servir carnes maturadas e acompanhamentos caseiros.
          </p>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Nossa missão é proporcionar momentos inesquecíveis com sabor, hospitalidade e vista privilegiada para o mar. 
            Todos os nossos cortes são selecionados e grelhados à perfeição.
          </p>
          
          <div className="pt-8 flex gap-12 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold font-display italic text-brand-gold">1999</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Fundação</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-display italic text-brand-gold">2</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Unidades</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-display italic text-brand-gold">4.5</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Nota Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
