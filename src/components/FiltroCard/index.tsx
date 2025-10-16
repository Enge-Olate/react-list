import { useDispatch } from 'react-redux'
import * as s from './styles'
import * as enums from '../../utils/enums/enumeracoes'
import { alterarFiltro } from '../../store/reducers/filtro'

export type Props = {
  ativo?: boolean
  termo?:string
  legenda: string
  contador: number
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
function FiltroCard({ ativo, legenda, contador, criterio, valor, termo }: Props) {
  const dispatch = useDispatch()

  const filtrar = ()=> {
    dispatch(
      alterarFiltro({
        criterio,
        valor,
        termo
      })
    )
  }
  return (
    <s.Card ativo={ativo} onClick={filtrar}>
      <s.Contador>{contador}</s.Contador>
      <s.Label>{legenda}</s.Label>
    </s.Card>
  )
}

export default FiltroCard
