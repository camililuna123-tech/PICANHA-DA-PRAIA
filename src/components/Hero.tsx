import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.hero-bg', { scale: 1.1, duration: 20, ease: 'linear', repeat: -1, yoyo: true });
    
    tl.fromTo(headlineRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' },
      0.5
    );
    
    tl.fromTo(sublineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
    
    tl.fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
          alt="Picanha Premium na Brasa" 
          referrerPolicy="no-referrer"
          className="hero-bg w-full h-full object-cover grayscale-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/40 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-brand-gold text-xs font-bold uppercase tracking-[0.5em] mb-6 block"
        >
          Desde 1999 • Rio das Ostras
        </motion.span>
        
        <h1 
          ref={headlineRef}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 italic"
        >
          A Arte da <br /> 
          <span className="text-brand-gold underline decoration-white/20 underline-offset-8">Picanha Perfeta.</span>
        </h1>
        
        <p 
          ref={sublineRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-sans tracking-wide leading-relaxed"
        >
          Descubra o sabor inigualável da verdadeira churrascaria tradicional brasileira. 
          Cortes nobres, ambiente exclusivo e a brisa mar RJ.
        </p>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="https://deliverydireto.com.br/picanhadapraiacentro/picanhadapraiacentro?dd=menu" target="_blank" rel="noreferrer" className="bg-brand-gold text-black font-bold py-5 px-12 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-block">
            Explorar Menu
          </a>
          <a href="#unidades" className="glass text-white font-bold py-5 px-12 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-all inline-block">
            Nossas Unidades
          </a>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-gold to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
      </div>
    </section>
  );
}
