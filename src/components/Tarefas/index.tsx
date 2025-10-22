import { useDispatch } from "react-redux";
import { useEffect, useState, type ChangeEvent, type ReactEventHandler } from "react";
import * as s from "./styles";
import * as enums from '../../utils/enums/enumeracoes'
import { remover, editar, alteraStatus } from "../../store/reducers/tarefas";
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
  function marqStatus(evento: ChangeEvent<HTMLInputElement>){
    if(evento)
    dispatch(
      alteraStatus(
        {
          id,
          finalizado: evento.target.checked
        }
      )
    )
  }

  return (
    <s.Card>
      <label htmlFor={titulo}>
        <input checked={status === enums.Status.CONCLUIDO} onChange={marqStatus} type="checkbox" name={titulo} id={titulo} />
        
        <s.Titulo>
          {editando && <em>Editando: </em>}
          {titulo}
          </s.Titulo>
      </label>
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
