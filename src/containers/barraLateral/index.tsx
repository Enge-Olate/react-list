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
          <FiltroCard valor={enums.Status.PENDENTE} criterio='status' legenda='Pendentes'  />
          <FiltroCard valor={enums.Status.CONCLUIDO} criterio='status' legenda='Concluída'/>
          <FiltroCard valor={enums.Prioridade.URGENTE} criterio='prioridade' legenda='Urgentes'/>
          <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio='prioridade' legenda='Importantes'/>
          <FiltroCard valor={enums.Prioridade.NORMAL} criterio='prioridade' legenda='Normal'/>
          <FiltroCard criterio='todas' legenda='Todas'/>
        </s.cards>
      </div>
    </s.Aside>
  );
}

export default BarraLateral;
