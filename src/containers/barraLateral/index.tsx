import FiltroCard from '../../components/FiltroCard';
import * as s from './styles'
function BarraLateral() {
  return (
    <s.Aside>
      <div>
        <s.busca type="text" placeholder="Procurar" />
      <s.cards>
        <FiltroCard legenda='Pendentes' contador={1}/>
        <FiltroCard legenda='Concluída' contador={2}/>
        <FiltroCard legenda='Urgentes' contador={3}/>
        <FiltroCard legenda='Importantes' contador={4}/>
        <FiltroCard legenda='Normal' contador={5}/>
        <FiltroCard ativo={true} legenda='Todas' contador={6}/>
      </s.cards>
      </div>      
    </s.Aside>
  );
}

export default BarraLateral;
