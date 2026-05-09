import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "glass py-3" : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img 
            src="https://static-images.ifood.com.br/image/upload/t_high/logosgari/79b4a44b-4b1a-4d7a-8f8d-71b3e8d97f26/202104271101_v3mK_i.png" 
            alt="Picanha da Praia Logo" 
            referrerPolicy="no-referrer"
            className="h-12 md:h-16 w-auto object-contain brightness-110 contrast-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div className="logo-fallback hidden font-display text-2xl md:text-3xl font-bold tracking-tight text-white uppercase italic">
            Picanha <span className="text-brand-gold">da Praia</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase opacity-70">
          <li className="hover:text-brand-gold transition-colors cursor-pointer"><a href="#inicio">Início</a></li>
          <li className="hover:text-brand-gold transition-colors cursor-pointer"><a href="https://deliverydireto.com.br/picanhadapraiacentro/picanhadapraiacentro?dd=menu" target="_blank" rel="noreferrer">O Menu</a></li>
          <li className="hover:text-brand-gold transition-colors cursor-pointer"><a href="#sobre">Sobre</a></li>
          <li className="hover:text-brand-gold transition-colors cursor-pointer"><a href="#unidades">Unidades</a></li>
        </ul>

        <motion.a 
          href="https://wa.me/5522999358410"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-gold text-black font-bold py-3 px-8 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] inline-block"
        >
          Reservar Mesa
        </motion.a>
      </nav>
    </header>
  );
}
