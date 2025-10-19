import { useDispatch, useSelector } from 'react-redux'
import * as s from './styles'
import * as enums from '../../utils/enums/enumeracoes'
import { alterarFiltro } from '../../store/reducers/filtro'
import type { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
function FiltroCard({ legenda, criterio, valor }: Props) {
  const { filtros, tarefas } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const verificaAtivo = () => {
    const mesmoCriterio = filtros.criterio === criterio
    const mesmoValor = filtros.valor === valor
    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const ativo = verificaAtivo()
  const contador = contarTarefas()
  return (
    <s.Card ativo={ativo} onClick={filtrar}>
      <s.Contador>{contador}</s.Contador>
      <s.Label>{legenda}</s.Label>
    </s.Card>
  )
}

export default FiltroCard
