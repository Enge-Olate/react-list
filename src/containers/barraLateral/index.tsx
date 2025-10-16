import { useDispatch, useSelector } from 'react-redux';
import type{ RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard';
import * as s from './styles'
import { alterarTermo } from '../../store/reducers/filtro';
import * as enums from '../../utils/enums/enumeracoes'
function BarraLateral() {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtros)
  return (
    <s.Aside>
      <div>
        <s.busca type="text" placeholder="Procurar" value={termo} onChange={(evento)=> dispatch(alterarTermo(evento.target.value))} />
        <s.cards>
          <FiltroCard valor={enums.Status.PENDENTE} criterio='status' legenda='Pendentes' contador={1} />
          <FiltroCard valor={enums.Status.CONCLUIDO} criterio='status' legenda='Concluída' contador={2} />
          <FiltroCard valor={enums.Prioridade.URGENTE} criterio='prioridade' legenda='Urgentes' contador={3} />
          <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio='prioridade' legenda='Importantes' contador={4} />
          <FiltroCard valor={enums.Prioridade.NORMAL} criterio='prioridade' legenda='Normal' contador={5} />
          <FiltroCard criterio='todas' ativo legenda='Todas' contador={6} />
        </s.cards>
      </div>
    </s.Aside>
  );
}

export default BarraLateral;
