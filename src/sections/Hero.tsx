import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroScene } from '../components/HeroScene';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.14, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section className="hero" ref={sectionRef} aria-label="Introduction">
      <div className="hero__atmosphere" aria-hidden />
      
      <motion.div className="hero__grid container" style={{ y, opacity, scale }}>
        <div className="hero__content">
          <motion.div
            className="hero__brand"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__logo">OBSCURA®</span>
            <span className="hero__practice">Independent Digital Practice</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Designing worlds,
            <br />
            <span className="hero__title-line">not just websites.</span>
          </motion.h1>

          <motion.p
            className="hero__lead"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Digital experiences, identities and visual worlds crafted at the
            intersection of design and technology.
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href={`${base}/#work`} className="btn btn--primary">
              Explore the Work
            </a>
            <a href={`${base}/#contact`} className="btn btn--ghost">
              Start a Project
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroScene />
          <div className="hero__scene-label">
            <span className="hero__scene-dot" />
            Interactive scene
          </div>
        </motion.div>
      </motion.div>

      <a href={`${base}/#work`} className="hero__scroll" aria-label="Scroll to work">
        <span>Scroll</span>
        <ChevronDown size={15} strokeWidth={1.5} />
      </a>
    </section>
  );
}
