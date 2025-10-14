import { Provider } from "react-redux";
import BarraLateral from "./containers/barraLateral";
import ListaDeTarefas from "./containers/listaDeTarefas";
import * as s from "./styles/global";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <s.container>
        <BarraLateral />
        <ListaDeTarefas />
      </s.container>
    </Provider>
  );
}

export default App;
