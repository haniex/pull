import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories, type ProjectCategory } from '../data/projects';
import { ProjectCover } from '../components/ProjectCover';
import { ArrowUpRight } from 'lucide-react';
import './Work.css';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.22 } },
};

export function Work() {
  const [active, setActive] = useState<ProjectCategory>('ALL');

  const filtered = useMemo(() => {
    if (active === 'ALL') return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="container">
        <header className="work__header">
          <div>
            <p className="section-eyebrow">Selected Work</p>
            <h2 id="work-title" className="section-title">
              The Gallery
            </h2>
          </div>
          <p className="work__intro">
            Eight fictional studies exploring the edges of digital craft,
            spatial design and brand systems. Pure research — not client work.
          </p>
        </header>

        <div className="work__filters" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`work__filter ${active === cat ? 'work__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className="work__empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No projects in this category.
            </motion.p>
          ) : (
            <motion.ul className="work__grid" layout>
              {filtered.map((project, i) => (
                <motion.li
                  key={project.id}
                  className={`work__item ${i % 5 === 0 || i % 5 === 3 ? 'work__item--wide' : ''}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <Link to={`/work/${project.slug}`} className="work__card">
                    <div className="work__cover">
                      <ProjectCover
                        title={project.title}
                        accent={project.accent}
                        gradient={project.coverGradient}
                        slug={project.slug}
                        coverImage={project.coverImage}
                        index={i}
                      />
                      <div className="work__cover-overlay">
                        <ArrowUpRight size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="work__meta">
                      <div className="work__meta-top">
                        <h3 className="work__name">{project.title}</h3>
                        <span className="work__year">{project.year}</span>
                      </div>
                      <p className="work__subtitle">{project.subtitle}</p>
                      <div className="work__tags">
                        {project.category.map((c) => (
                          <span key={c} className="work__tag">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
