import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-surface pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <span className="font-display text-4xl font-bold tracking-tight text-white uppercase italic">
              Picanha <span className="text-brand-gold">da Praia</span>
            </span>
            <p className="text-white/50 max-w-sm leading-relaxed font-sans">
              A melhor experiência gastronômica de Rio das Ostras. Cortes premium, 
              ambiente exclusivo e tradição que atravessa gerações desde 1999.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="https://instagram.com/picanhadapraiacostazul" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <span className="text-xs text-white/40 self-center uppercase tracking-widest font-bold">@picanhadapraiacostazul</span>
              </div>
              <div className="flex gap-4">
                <a href="https://instagram.com/picanhadapraiatradicional" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <span className="text-xs text-white/40 self-center uppercase tracking-widest font-bold">@picanhadapraiatradicional</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-brand-gold">Unidades</h4>
            <ul className="space-y-8">
              <li className="space-y-2">
                <div className="font-bold text-sm flex items-center gap-2">
                  <MapPin size={14} className="text-brand-gold" />
                  Centro Tradicional
                </div>
                <div className="text-xs text-white/40 leading-relaxed ml-6 mb-2">
                  Av. Cristóvão Barcelos, 77<br />Centro, Rio das Ostras - RJ
                </div>
                <div className="text-[10px] text-white/30 italic ml-6 mb-4">
                  Tradição e sabor no coração da cidade.
                </div>
                <div className="flex items-center gap-2 ml-6 text-xs font-bold text-white/60">
                  <Phone size={12} className="text-brand-gold" />
                  (22) 99844-8386
                </div>
              </li>
              <li className="space-y-2">
                <div className="font-bold text-sm flex items-center gap-2">
                  <MapPin size={14} className="text-brand-gold" />
                  Costa Azul Gourmet
                </div>
                <div className="text-xs text-white/40 leading-relaxed ml-6 mb-2">
                  Av. Costa Azul, 980<br />Rio das Ostras - RJ
                </div>
                <div className="text-[10px] text-white/30 italic ml-6 mb-4">
                  Casa na orla com grelhados e camarões.
                </div>
                <div className="flex items-center gap-2 ml-6 text-xs font-bold text-white/60">
                  <Phone size={12} className="text-brand-gold" />
                  (22) 99992-8080
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-brand-gold">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:atendimento@picanhadapraia.com" className="text-sm font-medium hover:text-brand-gold transition-colors">atendimento@picanhadapraia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
            © 2026 PICANHA DA PRAIA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30 font-bold">
            <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
