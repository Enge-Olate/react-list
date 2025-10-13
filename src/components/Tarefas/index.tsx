import { useState } from "react";
import * as s from "./styles";
import type { Prioridade, Status } from "../../utils/enums/enumeracoes";
type Props = {
  descricao: string;
  prioridade: Prioridade;
  status: Status;
  titulo: string;
};
export default function Card({
  descricao,
  status,
  prioridade,
  titulo,
}: Props) {
  const [editando, setEditando] = useState(false);
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
            <s.BotaoRemover>Remover</s.BotaoRemover>
          </>
        )}
      </s.BarraDeAcoes>
    </s.Card>
  );
}
