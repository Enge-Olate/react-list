import Card from '../../components/Tarefas'
import * as s from './styles'
function ListaDeTarefas() {
  return (
    <s.Main>
        <s.Titulo>2 tarefas marcadas como: ”todas” e ”termo”</s.Titulo>
        <ul>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
    </s.Main>
  )
}

export default ListaDeTarefas
