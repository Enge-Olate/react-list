import BarraLateral from "./containers/barraLateral";
import ListaDeTarefas from "./containers/listaDeTarefas";
import * as s from "./styles/global";
function App() {
  return (
    <s.container>
      <BarraLateral />
      <ListaDeTarefas />
    </s.container>
  );
}

export default App;
