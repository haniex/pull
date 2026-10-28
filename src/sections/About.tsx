import { motion } from 'framer-motion';
import { AboutScene } from '../components/AboutScene';
import './About.css';

const principles = [
  {
    title: 'Precision',
    text: 'Every decision is intentional. Nothing is decorative for its own sake.',
  },
  {
    title: 'Depth',
    text: 'Interfaces should feel spatial. Light, material and motion create presence.',
  },
  {
    title: 'Restraint',
    text: 'The strongest statements are often the quietest. We edit until it feels inevitable.',
  },
  {
    title: 'Craft',
    text: 'Code is a design material. Performance and accessibility are part of the aesthetic.',
  },
];

const tools = [
  'React', 'Three.js', 'R3F', 'TypeScript', 'GSAP', 'Figma', 'Cinema 4D', 'Blender', 'After Effects',
];

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutScene />
          </motion.div>
          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-eyebrow">About</p>
            <h2 id="about-title" className="section-title">
              Digital atelier
            </h2>
            <p className="about__lead">
              OBSCURA® is an independent creative practice operating at the
              intersection of digital design, branding, 3D and creative
              development. We treat the browser as a spatial medium.
            </p>
            <p className="about__body">
              This portfolio is a conceptual laboratory. Every project presented
              here is a fictional study designed to explore new visual and
              interactive languages — not a record of commercial commissions.
            </p>

            <div className="about__principles">
              {principles.map((p) => (
                <article key={p.title} className="about__principle">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>

            <div className="about__tools">
              <h3 className="about__tools-title">Tools & technologies</h3>
              <ul>
                {tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
