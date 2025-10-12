import BarraLateral from "./containers/barraLateral/BarraLateral";
import ListaDeTarefas from "./containers/listaDeTarefas/ListaDeTarefas";
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
