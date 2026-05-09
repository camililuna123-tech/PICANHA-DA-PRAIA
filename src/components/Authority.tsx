export default function Authority() {
  const logos = [
    "CHURRASCARIA TRADICIONAL",
    "PICANHA MATURADA",
    "VISTA PARA O MAR",
    "RIO DAS OSTRAS",
    "COSTA AZUL",
    "CHURRASCARIA TRADICIONAL",
    "PICANHA MATURADA",
    "VISTA PARA O MAR",
    "RIO DAS OSTRAS",
    "COSTA AZUL"
  ];

  return (
    <section className="py-20 bg-brand-surface overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center mx-12">
            <span className="text-4xl md:text-6xl font-accent font-black text-transparent stroke-1 stroke-white/20 uppercase">
              {logo}
            </span>
            <div className="w-3 h-3 bg-brand-gold rounded-full mx-12 opacity-50"></div>
          </div>
        ))}
      </div>
      
      {/* Adding a second marquee for smoothness in CSS if needed, but let's use tailwind animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .stroke-1 {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
