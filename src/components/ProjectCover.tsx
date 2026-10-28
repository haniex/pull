import { publicUrl } from '../lib/assets';
import './ProjectCover.css';

interface ProjectCoverProps {
  title: string;
  accent: string;
  gradient: string;
  slug: string;
  coverImage?: string;
  index?: number;
}

export function ProjectCover({
  title,
  accent,
  gradient,
  slug,
  coverImage,
}: ProjectCoverProps) {
  if (coverImage) {
    const src = coverImage.startsWith('http') ? coverImage : publicUrl(coverImage);
    return (
      <div className="project-cover project-cover--image" data-variant={slug}>
        <img
          src={src}
          alt={`${title} — project cover`}
          className="project-cover__img"
          loading="lazy"
          decoding="async"
        />
        <div className="project-cover__scrim" aria-hidden />
        <div className="project-cover__content">
          <span className="project-cover__title">{title}</span>
          <span className="project-cover__accent-line" style={{ background: accent }} />
        </div>
      </div>
    );
  }

  return (
    <div className="project-cover" style={{ background: gradient }} data-variant={slug}>
      <div className="project-cover__noise" aria-hidden />
      <div className="project-cover__content">
        <span className="project-cover__title">{title}</span>
        <span className="project-cover__accent-line" style={{ background: accent }} />
      </div>
    </div>
  );
}
