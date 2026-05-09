import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import BentoFeatures from './components/BentoFeatures';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animations on scroll
    const sections = gsap.utils.toArray('.reveal');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <div ref={containerRef} className="min-h-screen bg-brand-dark overflow-x-hidden">
        <Header />
        <main>
          <div id="inicio"><Hero /></div>
          <Authority />
          <div id="diferenciais"><BentoFeatures /></div>
          <div id="sobre"><About /></div>
          <div id="depoimentos" className="text-white"><Testimonials /></div>
        </main>
        <div id="unidades"><Footer /></div>
      </div>
    </ReactLenis>
  );
}
