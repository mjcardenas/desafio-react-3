import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from './BaseColaboradores.js';
import Formulario from "./Componentes/Formulario";
import ListaColaboradores from "./Componentes/ListaColaboradores";
import Header from "./Componentes/Header.jsx";


function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [valorDeLaCaja, setValorDeLaCaja] = useState("");
  return (
    <div className="App">
      <Header
        setValorDeLaCaja={setValorDeLaCaja}>
      </Header>
      <Formulario
        lstColaboradores={lstColaboradores}
        setLstColaboradores={setLstColaboradores}
      ></Formulario>
      <ListaColaboradores
        valorDeLaCaja={valorDeLaCaja}
        lstColaboradores={lstColaboradores} >

      </ListaColaboradores>
    </div>
  );
}

export default App;
