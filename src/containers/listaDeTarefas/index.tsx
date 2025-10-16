import { useSelector } from "react-redux";
import Card from "../../components/Tarefas";
import type { Prioridade, Status } from "../../utils/enums/enumeracoes";
import * as s from "./styles";
import type { RootReducer } from "../../store";

function paraPrioridade(value: string): Prioridade {
  const v = value as Prioridade;
  if (v === 'Urgente' || v === 'Importante' || v === 'Normal')
    return v;
  return 'Normal' as Prioridade;
}
function paraStatus(value: string): Status {
  const v = value as Status;
  if (v === 'Pendente' || v === 'Concluído')
    return v;
  return 'Pendente' as Status;
}

function ListaDeTarefas() {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtros)
  function tarefaFiltrada() {
    let tarefasFiltradas = itens
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }else if(criterio === 'status'){
        tarefasFiltradas = tarefasFiltradas.filter(
          (item)=> item.status ===valor
        )
      }
    }
    return tarefasFiltradas
  }
  return (
    <s.Main>
      <s.Titulo>2 tarefas marcadas como: ”todas” e &#8220; {termo}&#8220; </s.Titulo>
      <s.UlCard>
        {tarefaFiltrada().map((t) => (
          <li key={t.titulo}>
            <Card id={t.id} titulo={t.titulo} descricao={t.descricao} prioridade={paraPrioridade(t.prioridade)} status={paraStatus(t.status)} />
          </li>
        ))}
      </s.UlCard>
    </s.Main>
  );
}

export default ListaDeTarefas;
