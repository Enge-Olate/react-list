import FiltroCard from '../../components/FiltroCard';
import * as s from './styles'
function BarraLateral() {
  return (
    <s.Aside>
      <div>
        <s.busca type="text" placeholder="Procurar" />
      <s.cards>
        <FiltroCard ativo={true} legenda='Pendentes' contador={1}/>
        <FiltroCard ativo={true} legenda='Concluída' contador={2}/>
        <FiltroCard ativo={true} legenda='Urgentes' contador={3}/>
        <FiltroCard ativo={true} legenda='Importantes' contador={4}/>
        <FiltroCard ativo={true} legenda='Normal' contador={5}/>
        <FiltroCard legenda='Todas' contador={6}/>
      </s.cards>
      </div>      
    </s.Aside>
  );
}

export default BarraLateral;
