import { Button } from '../shared/Button';

export const ProjectCard = ({ project }) => (
  <article className="panel portfolio-card">
    <div className="portfolio-card__topline">
      <span className="soft-chip">{project.category}</span>
      <span className="portfolio-card__year">{project.year}</span>
    </div>

    <div className="portfolio-card__body">
      <div className="section-heading">
        <span className="eyebrow">Projeto</span>
        <h3>{project.title}</h3>
      </div>

      <p>{project.summary}</p>

      <div className="portfolio-card__preview">
        <img className="portfolio-preview__image" src={project.preview.src} alt={project.preview.alt} loading="lazy" />
      </div>

      <div className="portfolio-badge-list">
        {project.stack.map((item) => (
          <span key={item} className="platform-badge portfolio-badge">
            {item}
          </span>
        ))}
      </div>

      <p className="portfolio-card__meta">
        {project.liveStatus === 'online' ? 'Projeto online' : 'Projeto offline no momento'} · {project.repoLabel}
      </p>
    </div>

    <div className="portfolio-card__actions">
      {project.repoUrl ? (
        <Button as="a" href={project.repoUrl} target="_blank" rel="noreferrer">
          Repositório
        </Button>
      ) : null}
      {project.liveUrl ? (
        <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
          Link
        </Button>
      ) : null}
    </div>
  </article>
);
