import { useSelector } from "react-redux";
import Card from "../../components/Tarefas";
import { Prioridade, type Status } from "../../utils/enums/enumeracoes";
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
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0)
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${`${criterio}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }
  
  const tarefas = tarefaFiltrada()
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <s.Main>
      <s.Titulo>{mensagem} </s.Titulo>
      <s.UlCard>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Card id={t.id} titulo={t.titulo} descricao={t.descricao} prioridade={paraPrioridade(t.prioridade)} status={paraStatus(t.status)} />
          </li>
        ))}
      </s.UlCard>
    </s.Main>
  );
}

export default ListaDeTarefas;
