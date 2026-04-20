import { useEffect } from 'react';
import { Button } from '../components/shared/Button';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { featuredProjects, focusAreas, portfolioOwner, stackGroups } from '../data/portfolioData';

const matrixColumns = [
  '0101<>//{}',
  'reactnodephp',
  '$ git push',
  'mysqlpgsql',
  'laraveltsx',
  'api/auth/db',
  'fullstack{}',
  'deployshipit',
];

export const HomePage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="portfolio-hero" data-reveal>
      <div className="container">
        <div className="panel portfolio-hero__copy portfolio-hero__copy--terminal">
          <div className="portfolio-terminal portfolio-terminal--hero portfolio-terminal--full" aria-label="Terminal principal">
            <div className="portfolio-terminal__matrix" aria-hidden="true">
              {matrixColumns.map((column, index) => (
                <span
                  key={column}
                  className="portfolio-terminal__matrix-column"
                  style={{ '--matrix-delay': `${index * 0.6}s` }}
                >
                  {`${column} ${column} ${column} ${column} ${column}`}
                </span>
              ))}
            </div>
            <div className="portfolio-terminal__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="portfolio-terminal__body portfolio-terminal__body--hero">
              <TerminalLine delay={0} prompt="$" text="init portfolio --mode acadêmico" />
              <TerminalLine delay={1} prompt="$" text="whoami" />
              <TerminalLine delay={2} text="Luiz Otávio / Full Stack Developer / Brasil" output />
              <TerminalLine delay={3} prompt="$" text="cat about.txt" />
              <HeroIntro
                delay={4}
                greeting={portfolioOwner.greeting}
                text={portfolioOwner.intro}
              />
              <TerminalLine delay={5} prompt="$" text="ls stack/" />
              <TerminalLine delay={6} text="React  Node.js  PHP  Laravel  MySQL  PostgreSQL  GitHub" output />
              <TerminalLine delay={7} prompt="$" text="status --portfolio" />
              <TerminalLine delay={8} text="Projetos acadêmicos publicados e organizados abaixo." output />
              <div className="metrics-grid portfolio-terminal__metrics">
                {portfolioOwner.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-actions portfolio-terminal__actions">
                <Button as="a" href={portfolioOwner.primaryCta.href}>
                  {portfolioOwner.primaryCta.label}
                </Button>
                <Button as="a" href={portfolioOwner.secondaryCta.href} variant="secondary">
                  {portfolioOwner.secondaryCta.label}
                </Button>
              </div>
              <div className="portfolio-hero__links portfolio-hero__links--terminal">
                <a className="inline-link" href={portfolioOwner.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="inline-link" href="#sobre">
                  Sobre mim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container portfolio-section" id="projetos" data-reveal>
      <div className="section-heading">
        <span className="eyebrow">Projetos</span>
        <h2>Projetos publicados com descrição, stack e link.</h2>
      </div>
      <div className="portfolio-grid">
        {featuredProjects.map((project) => (
          <div key={project.slug} data-reveal>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>

    <section className="container portfolio-section" data-reveal>
      <div className="portfolio-surface portfolio-surface--focus">
        <div className="section-heading">
          <span className="eyebrow">Foco de trabalho</span>
          <h2>Frontend, backend e entrega completa.</h2>
        </div>
        <div className="portfolio-focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="panel portfolio-focus-card" data-reveal>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container portfolio-section" id="stack" data-reveal>
      <div className="section-heading">
        <span className="eyebrow">Stack</span>
        <h2>Tecnologias que eu uso nos meus projetos.</h2>
      </div>
      <div className="portfolio-stack-grid">
        {stackGroups.map((group) => (
          <article key={group.title} className="panel portfolio-stack-card" data-reveal>
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

    <section className="container portfolio-section" id="sobre" data-reveal>
      <div className="panel portfolio-contact" data-reveal>
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2>Me chamo Luiz Otávio</h2>
          <p>
            Atualmente estudo no Centro Universitário Integrado de Campo Mourão, no curso de Análise e Desenvolvimento de Sistemas,
            trabalho como jovem aprendiz na Beontag, no setor da Qualidade, e estou buscando minha primeira oportunidade na área de tecnologia.
          </p>
          <p>
            Desde sempre fui apaixonado por software, computadores, dados, engenharia e tudo que engloba a tecnologia. Tenho muita vontade de aprender
            coisas novas e aprimorar os conhecimentos que já possuo.
          </p>
          <p>
            Na faculdade desenvolvi projetos reais de alta qualidade, como e-commerce e gestor de gastos, utilizando React, Node.js, JavaScript, PHP,
            HTML e CSS, além de bancos de dados como MySQL e PostgreSQL. Também tenho bastante experiência com versionamento de código usando Git e GitHub.
          </p>
        </div>
        <div className="portfolio-contact__actions">
          <Button as="a" href={portfolioOwner.githubUrl} target="_blank" rel="noreferrer">
            Ver GitHub
          </Button>
          <Button as="a" href="#projetos" variant="secondary">
            Ver projetos
          </Button>
        </div>
      </div>
    </section>
  </>
  );
};

const TerminalLine = ({ prompt, text, output = false, highlight = false, delay = 0 }) => (
  <div
    className={`portfolio-terminal__line${output ? ' is-output' : ''}${highlight ? ' is-highlight' : ''}`}
    style={{ '--terminal-delay': `${delay * 180}ms` }}
  >
    {prompt ? <span className="portfolio-terminal__prompt">{prompt}</span> : null}
    <span>{text}</span>
  </div>
);

const HeroIntro = ({ greeting, text, delay = 0 }) => (
  <div className="portfolio-terminal__intro" style={{ '--terminal-delay': `${delay * 180}ms` }}>
    <span className="portfolio-terminal__intro-tag">printf("hello world");</span>
    <div className="portfolio-glitch" aria-label={greeting}>
      <span className="portfolio-glitch__layer portfolio-glitch__layer--cyan" aria-hidden="true">
        {greeting}
      </span>
      <strong className="portfolio-glitch__text">{greeting}</strong>
      <span className="portfolio-glitch__layer portfolio-glitch__layer--amber" aria-hidden="true">
        {greeting}
      </span>
    </div>
    <p className="portfolio-terminal__intro-text">{text}</p>
  </div>
);
