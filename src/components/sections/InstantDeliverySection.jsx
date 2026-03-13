export const InstantDeliverySection = () => (
  <section className="container delivery-grid">
    <div className="panel delivery-lead">
      <span className="eyebrow">Entrega instantanea</span>
      <h2>Compra limpa, confirmacao rapida e key liberada em segundos.</h2>
      <p>O fluxo da Nexus Games foi desenhado para transmitir seguranca: selecao por plataforma, resumo visivel, informacao de desconto e acesso imediato a sua biblioteca de keys.</p>
    </div>
    <div className="delivery-steps">{[['1', 'Escolha o jogo', 'Catalogo orientado por plataforma, tag, genero e oferta ativa.'], ['2', 'Feche o checkout', 'Resumo enxuto, cupom opcional e meio de pagamento claro.'], ['3', 'Copie sua key', 'Biblioteca segura com mascara, timestamp e acesso centralizado.']].map(([step, title, description]) => <article key={step} className="panel delivery-step"><span className="delivery-step__index">{step}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </section>
);
