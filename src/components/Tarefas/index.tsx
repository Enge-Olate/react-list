import { useDispatch} from "react-redux";
import { useState } from "react";
import * as s from "./styles";
import { remover } from "../../store/reducers/tarefas";
import  Tarefa from "../../models/Tarefas";
type Props = Tarefa
export default function Card({
  descricao,
  status,
  prioridade,
  titulo,
  id
}: Props) {
  const [editando, setEditando] = useState(false);
  const dispatch = useDispatch();
  return (
    <s.Card>
      <s.Titulo>{titulo}</s.Titulo>
      <s.Tag prioridade={prioridade}>{prioridade}</s.Tag>
      <s.Tag status={status}>{status}</s.Tag>
      <s.Descricao value={descricao} />
      <s.BarraDeAcoes>
        {editando ? (
          <>
            <s.BotaoSalvar>Salvar</s.BotaoSalvar>
            <s.BotaoRemover onClick={() => setEditando(false)}>Cancelar</s.BotaoRemover>
          </>
        ) : (
          <>
            <s.Botoes onClick={() => setEditando(true)}>Editar</s.Botoes>
            <s.BotaoRemover onClick={()=> dispatch(remover(id))}>Remover</s.BotaoRemover>
          </>
        )}
      </s.BarraDeAcoes>
    </s.Card>
  );
}
