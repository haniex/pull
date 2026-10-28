import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { Work } from '../sections/Work';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { Contact } from '../sections/Contact';

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Allow layout to settle, then scroll to target section
    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
    </>
  );
}
