import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { featuredProjects, focusAreas, portfolioOwner, processSteps, projects, stackGroups } from '../data/portfolioData';

export const HomePage = () => (
  <>
    <section className="portfolio-hero">
      <div className="container portfolio-hero__grid">
        <div className="panel portfolio-hero__copy">
          <span className="eyebrow">{portfolioOwner.role} / {portfolioOwner.location}</span>
          <h1>{portfolioOwner.headline}</h1>
          <p>{portfolioOwner.summary}</p>
          <div className="hero-actions">
            <Button as="a" href={portfolioOwner.primaryCta.href}>
              {portfolioOwner.primaryCta.label}
            </Button>
            <Button as="a" href={portfolioOwner.secondaryCta.href} target="_blank" rel="noreferrer" variant="secondary">
              {portfolioOwner.secondaryCta.label}
            </Button>
          </div>
          <p className="portfolio-hero__availability">{portfolioOwner.availability}</p>
        </div>

        <aside className="panel portfolio-hero__aside">
          <span className="eyebrow">Resumo rapido</span>
          <h2>{portfolioOwner.fullName}</h2>
          <p>Projetos reais, deploy publico e foco em transformar interface em algo apresentavel para cliente, recrutador ou usuario final.</p>
          <div className="metrics-grid">
            {portfolioOwner.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="portfolio-hero__links">
            <a className="inline-link" href={portfolioOwner.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="inline-link" href="#contato">
              Contato
            </a>
          </div>
        </aside>
      </div>
    </section>

    <section className="container portfolio-section" id="projetos">
      <div className="section-heading">
        <span className="eyebrow">Projetos em destaque</span>
        <h2>Trabalhos que mostram layout, sistema, integracao e deploy.</h2>
      </div>
      <div className="portfolio-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>

    <section className="container portfolio-section">
      <div className="portfolio-surface portfolio-surface--focus">
        <div className="section-heading">
          <span className="eyebrow">Foco de trabalho</span>
          <h2>Do visual forte ao fluxo autenticado.</h2>
        </div>
        <div className="portfolio-focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="panel portfolio-focus-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container portfolio-section" id="stack">
      <div className="section-heading">
        <span className="eyebrow">Stack</span>
        <h2>Tecnologias que uso para tirar projeto do layout e colocar no ar.</h2>
      </div>
      <div className="portfolio-stack-grid">
        {stackGroups.map((group) => (
          <article key={group.title} className="panel portfolio-stack-card">
            <h3>{group.title}</h3>
            <div className="portfolio-badge-list">
              {group.items.map((item) => (
                <span key={item} className="platform-badge portfolio-badge">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="container portfolio-section" id="processo">
      <div className="section-heading">
        <span className="eyebrow">Processo</span>
        <h2>Como eu conduzo um projeto para ficar apresentavel de verdade.</h2>
      </div>
      <div className="portfolio-process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="panel portfolio-process-card">
            <span className="delivery-step__index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="container portfolio-section portfolio-section--compact">
      <div className="panel portfolio-project-strip">
        <div className="section-heading">
          <span className="eyebrow">Arquivo</span>
          <h2>Mais projetos e estudos em evolucao.</h2>
        </div>
        <div className="portfolio-mini-grid">
          {projects.map((project) => (
            <LinkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>

    <section className="container portfolio-section" id="contato">
      <div className="panel portfolio-contact">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Se quiser, eu transformo teu briefing em algo que da para abrir, mostrar e testar.</h2>
          <p>Meu foco hoje e construir interface com identidade, integrar backend quando precisa e publicar tudo sem deixar o projeto preso na maquina.</p>
        </div>
        <div className="portfolio-contact__actions">
          <Button as="a" href={portfolioOwner.githubUrl} target="_blank" rel="noreferrer">
            Ver GitHub
          </Button>
          <Button as="a" href={portfolioOwner.secondaryCta.href} target="_blank" rel="noreferrer" variant="secondary">
            Abrir projeto publicado
          </Button>
        </div>
      </div>
    </section>
  </>
);

const LinkCard = ({ project }) => (
  <Link className="portfolio-mini-card" to={`/projetos/${project.slug}`}>
    <strong>{project.title}</strong>
    <span>{project.category}</span>
  </Link>
);
