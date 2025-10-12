import * as s from "./styles";

export default function Card() {
  return (
    <s.Card>
      <s.Titulo>Estudar programação</s.Titulo>
      <s.Tag>Imortante</s.Tag>
      <s.Tag>Pendente</s.Tag>
      <s.Descricao />
        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui commodi
        nulla corrupti in debitis cum dolorem deserunt facere. Perspiciatis,
        consectetur ducimus saepe accusantium tenetur suscipit ipsum labore
        quisquam hic ut! */}
     
      <s.BarraDeAcoes>
        <s.Botoes>Editar</s.Botoes>
        <s.Botoes>remover</s.Botoes>
      </s.BarraDeAcoes>
    </s.Card>
  );
}
