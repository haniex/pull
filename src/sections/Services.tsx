import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';


const services = [
  {
    id: '01',
    title: 'Digital Design',
    description:
      'Interfaces, systems and visual languages designed for clarity, hierarchy and lasting presence.',
  },
  {
    id: '02',
    title: 'Web Design & Development',
    description:
      'End-to-end experiences from concept to production-ready code with performance and accessibility at the core.',
  },
  {
    id: '03',
    title: 'Brand Identity',
    description:
      'Marks, type systems, color and motion languages that give organisations a distinct and coherent voice.',
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description:
      'Research-informed product design focused on flow, feedback and the quiet details that build trust.',
  },
  {
    id: '05',
    title: '3D Art & CGI',
    description:
      'Sculptural objects, material studies and spatial compositions for digital environments and campaigns.',
  },
  {
    id: '06',
    title: 'Motion Design',
    description:
      'Purposeful animation systems that guide attention, reveal information and give interfaces a pulse.',
  },
  {
    id: '07',
    title: 'Creative Development',
    description:
      'Advanced front-end and WebGL implementations that turn ambitious concepts into real, shippable experiences.',
  },
];

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container">
        <motion.header
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Services</p>
          <h2 id="services-title" className="section-title">
            Capabilities
          </h2>
          <p className="services__intro">
            A focused set of practices spanning strategy, design and engineered
            craft. Engagements are tailored — never packaged.
          </p>
        </motion.header>

        <ul className="services__list">
          {services.map((s, i) => (
            <motion.li
              key={s.id}
              className="services__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <a href={`${base}/#contact`} className="services__card">
                <span className="services__id">{s.id}</span>
                <div className="services__body">
                  <h3 className="services__title">{s.title}</h3>
                  <p className="services__desc">{s.description}</p>
                </div>
                <span className="services__arrow" aria-hidden>
                  <ArrowUpRight size={20} />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
