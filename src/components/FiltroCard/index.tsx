import * as s from  './styles'

export type Props={
  ativo?: boolean
  legenda: string
  contador: number
}
function FiltroCard({ativo, legenda, contador}: Props){
  return (
   <s.Card ativo={ativo}>
    <s.Contador>{contador}</s.Contador>
    <s.Label>{legenda}</s.Label>
   </s.Card>
  )
}

export default FiltroCard
