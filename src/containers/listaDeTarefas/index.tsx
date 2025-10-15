import { useSelector} from "react-redux";
import Card from "../../components/Tarefas";
import type { Prioridade, Status } from "../../utils/enums/enumeracoes";
import * as s from "./styles";
import type { RootReducer } from "../../store";

function paraPrioridade(value: string):Prioridade{
  const v = value as Prioridade;
  if(v === 'Urgente' || v === 'Importante' || v==='Normal')
    return v;
  return 'Normal' as Prioridade;
}
function paraStatus(value: string):Status{
  const v = value as Status;
  if(v === 'Pendente' || v === 'Concluído') 
    return v;
  return 'Pendente' as Status;
}

function ListaDeTarefas() {
  const {items} = useSelector((state: RootReducer)=>state.tarefas )
  return (
    <s.Main>
      <s.Titulo>2 tarefas marcadas como: ”todas” e ”termo”</s.Titulo>
      <s.UlCard>
        {items.map((t) => (
          <li key={t.titulo}>
            <Card id={t.id} titulo={t.titulo} descricao={t.descricao} prioridade={paraPrioridade(t.prioridade)} status={paraStatus(t.status)}/>
          </li>
        ))}
      </s.UlCard>
    </s.Main>
  );
}

export default ListaDeTarefas;
