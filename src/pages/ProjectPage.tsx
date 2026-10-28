import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug, getNextProject } from '../data/projects';
import { ProjectCover } from '../components/ProjectCover';
import { publicUrl } from '../lib/assets';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ProjectPage.css';

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const next = slug ? getNextProject(slug) : undefined;

  if (!project) {
    return (
      <div className="project-missing container">
        <h1>Project not found</h1>
        <p>This case study does not exist.</p>
        <Link to="/#work" className="btn btn--primary">
          Back to work
        </Link>
      </div>
    );
  }

  return (
    <article className="project">
      <header className="project__hero">
        <div className="project__hero-bg">
          <div className="project__hero-visual">
            <ProjectCover
              title={project.title}
              accent={project.accent}
              gradient={project.coverGradient}
              slug={project.slug}
              coverImage={project.coverImage}
            />
          </div>
          <div className="project__hero-content container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/#work" className="project__back">
                <ArrowLeft size={16} />
                All work
              </Link>
              <p className="project__eyebrow">{project.category.join(' · ')}</p>
              <h1 className="project__title">{project.title}</h1>
              <p className="project__subtitle">{project.subtitle}</p>
              <div className="project__meta">
                <span>{project.year}</span>
                <span>{project.role.slice(0, 3).join(' / ')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="project__body container">
        <motion.section
          className="project__section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <h2>Overview</h2>
          <p className="project__lead">{project.description}</p>
        </motion.section>

        <motion.section
          className="project__section project__two-col"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div>
            <h2>Challenge</h2>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h2>Concept</h2>
            <p>{project.concept}</p>
          </div>
        </motion.section>

        <motion.section
          className="project__section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <h2>Role</h2>
          <ul className="project__roles">
            {project.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="project__section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <h2>Visual system</h2>
          <div className="project__system">
            <div>
              <h3>Palette</h3>
              <div className="project__palette">
                {project.palette.map((c) => (
                  <div key={c} className="project__swatch">
                    <span
                      className="project__swatch-color"
                      style={{ background: c }}
                    />
                    <span className="project__swatch-hex">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Typography</h3>
              <p className="project__type">{project.typography}</p>
            </div>
          </div>
        </motion.section>

        {project.images && project.images.length > 0 && (
          <motion.section
            className="project__section project__gallery"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
          >
            <h2>Visuals</h2>
            <div className="project__gallery-grid">
              {project.images.map((src, i) => (
                <figure key={src} className="project__gallery-item">
                  <img
                    src={src.startsWith('http') ? src : publicUrl(src)}
                    alt={project.title + " visual " + (i + 1)}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          className="project__section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
        >
          <h2>Key directions</h2>
          <div className="project__tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p className="project__note">
            This is a conceptual case study created for the OBSCURA® portfolio.
            It is not a commercial client project and does not claim real-world
            awards or results.
          </p>
        </motion.section>
      </div>

      {next && (
        <nav className="project__next" aria-label="Next project">
          <div className="container">
            <Link to={`/work/${next.slug}`} className="project__next-link">
              <div>
                <span className="project__next-label">Next project</span>
                <span className="project__next-title">{next.title}</span>
              </div>
              <ArrowRight size={24} />
            </Link>
          </div>
        </nav>
      )}
    </article>
  );
}
