import * as s from './styles'
function BarraLateral() {
  return (
    <s.Aside>
      <div>
        <s.busca type="text" placeholder="Procurar" />
      </div>      
      <s.cards>
        <s.cardFiltrado>
          <span>3</span>
          <p>Pendentes</p>
        </s.cardFiltrado>
        <s.cardFiltrado>
          <span>3</span>
          <p>Concluídas</p>
        </s.cardFiltrado>
        <s.cardFiltrado>
          <span>3</span>
          <p>Normal</p>
        </s.cardFiltrado>
        <s.cardFiltrado>
          <span>3</span>
          <p>Todas</p>
        </s.cardFiltrado>
        <s.cardFiltrado>
          <span>3</span>
          <p>Importantes</p>
        </s.cardFiltrado>
        <s.cardFiltrado>
          <span>3</span>
          <p>Pendente</p>
        </s.cardFiltrado>
      </s.cards>
    </s.Aside>
  );
}

export default BarraLateral;
