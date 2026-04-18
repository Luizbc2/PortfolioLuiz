import { Link } from 'react-router-dom';
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
      <ul className="portfolio-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
    <div className="portfolio-card__actions">
      <Button as={Link} to={`/projetos/${project.slug}`}>
        Ver detalhes
      </Button>
      {project.liveUrl ? (
        <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
          Abrir online
        </Button>
      ) : null}
    </div>
  </article>
);
