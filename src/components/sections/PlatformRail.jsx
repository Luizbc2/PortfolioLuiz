export const PlatformRail = ({ platforms }) => (
  <section className="container platform-rail">
    <div className="section-heading"><span className="eyebrow">Ecossistema conectado</span><h2>Steam, PlayStation, Xbox e Nintendo em uma unica linguagem visual.</h2></div>
    <div className="platform-rail__track">{[...platforms, ...platforms].map((platform, index) => <span key={`${platform.id}-${index}`} className="platform-rail__item" style={{ '--platform-accent': platform.accent }}>{platform.name}</span>)}</div>
  </section>
);
