import Card from "../../components/Tarefas";
import db from "../../services/db.json";
import type { Prioridade, Status } from "../../utils/enums/enumeracoes";
import * as s from "./styles";

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
  const tarefas = db;
  return (
    <s.Main>
      <s.Titulo>2 tarefas marcadas como: ”todas” e ”termo”</s.Titulo>
      <s.UlCard>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Card  titulo={t.título} descricao={t.descrição} prioridade={paraPrioridade(t.prioridade)} status={paraStatus(t.status)}/>
          </li>
        ))}
      </s.UlCard>
    </s.Main>
  );
}

export default ListaDeTarefas;
