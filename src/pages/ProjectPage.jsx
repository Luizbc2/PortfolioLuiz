import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { projects } from '../data/portfolioData';
import { NotFoundPage } from './NotFoundPage';

export const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);
  const relatedProjects = projects.filter((entry) => entry.slug !== slug).slice(0, 2);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <section className="container portfolio-detail">
      <div className="portfolio-detail__grid">
        <article className="panel portfolio-detail__main">
          <div className="portfolio-detail__header">
            <span className="soft-chip">{project.category}</span>
            <span className="portfolio-card__year">{project.year}</span>
          </div>
          <div className="section-heading">
            <span className="eyebrow">Detalhe do projeto</span>
            <h1>{project.title}</h1>
          </div>
          <p className="portfolio-detail__lead">{project.description}</p>

          <div className="portfolio-detail__section">
            <h2>Impacto</h2>
            <p>{project.impact}</p>
          </div>

          <div className="portfolio-detail__section">
            <h2>Resumo</h2>
            <ul className="portfolio-detail__list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="portfolio-detail__section">
            <h2>Stack</h2>
            <div className="portfolio-badge-list">
              {project.stack.map((item) => (
                <span key={item} className="platform-badge portfolio-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-detail__section">
            <h2>Preview do frontend</h2>
            <div className="portfolio-detail__preview">
              <img className="portfolio-preview__image" src={project.preview.src} alt={project.preview.alt} />
              <p>{project.summary}</p>
            </div>
          </div>

          <div className="portfolio-detail__actions">
            <Button as={Link} to="/">
              Voltar para a home
            </Button>
            {project.liveUrl ? (
              <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
                Abrir projeto
              </Button>
            ) : null}
          </div>
        </article>

        <aside className="panel portfolio-detail__aside">
          <span className="eyebrow">Resumo</span>
          <h2>{project.callout}</h2>
          <p>{project.summary}</p>

          <div className="portfolio-detail__section">
            <h3>Status</h3>
            <p>{project.liveStatus === 'online' ? 'Deploy confirmado online.' : 'Deploy atualmente fora do ar ou retornando pagina nao encontrada.'}</p>
            <p>{project.repoLabel}</p>
          </div>

          <div className="portfolio-detail__actions portfolio-detail__actions--stacked">
            {project.liveUrl ? (
              <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary">
                {project.liveStatus === 'online' ? 'Abrir projeto publicado' : 'Ver link informado'}
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button as="a" href={project.repoUrl} target="_blank" rel="noreferrer">
                Ver repositorio no GitHub
              </Button>
            ) : null}
          </div>

          <div className="portfolio-detail__section">
            <h3>Projetos relacionados</h3>
            <div className="portfolio-mini-grid portfolio-mini-grid--stacked">
              {relatedProjects.map((relatedProject) => (
                <LinkCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

const LinkCard = ({ project }) => (
  <Link className="portfolio-mini-card" to={`/projetos/${project.slug}`}>
    <strong>{project.title}</strong>
    <span>{project.category}</span>
  </Link>
);
