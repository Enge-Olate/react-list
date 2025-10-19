import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as s from "./styles/global";
import { store } from "./store";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <s.container>
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
      </s.container>
    </Provider>
  );
}

export default App;
