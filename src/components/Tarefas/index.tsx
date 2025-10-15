import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as s from "./styles";
import { remover, editar } from "../../store/reducers/tarefas";
import Tarefa from "../../models/Tarefas";
type Props = Tarefa


export default function Card({
  descricao: descricaoOriginal,
  status,
  prioridade,
  titulo,
  id
}: Props) {
  const [editando, setEditando] = useState(false);
  const [descricao, setDescricao] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  function cancelaEdicao() {
    setEditando(false);
    setDescricao(descricaoOriginal)
  }

  return (
    <s.Card>
      <s.Titulo>{titulo}</s.Titulo>
      <s.Tag prioridade={prioridade}>{prioridade}</s.Tag>
      <s.Tag status={status}>{status}</s.Tag>
      <s.Descricao onChange={evento => setDescricao(evento.target.value)} value={descricao} disabled={!editando} />
      <s.BarraDeAcoes>
        {editando ? (
          <>
            <s.BotaoSalvar onClick={
              () => dispatch(editar(
                {
                  id,
                  descricao,
                  titulo,
                  prioridade,
                  status
                }
              ),
              setEditando(false)
            )
            }>Salvar</s.BotaoSalvar>
        <s.BotaoRemover onClick={cancelaEdicao}>Cancelar</s.BotaoRemover>
      </>
      ) : (
      <>
        <s.Botoes onClick={() => setEditando(true)}>Editar</s.Botoes>
        <s.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</s.BotaoRemover>
      </>
        )}
    </s.BarraDeAcoes>
    </s.Card >
  );
}
