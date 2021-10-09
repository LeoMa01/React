import logo from './logo.svg';
import './App.css';
import {Listado} from './Componentes/listaPelicula';
import { Pelicula } from './Componentes/pelicula';
import {ListadoGmg} from "./CompoGaming/listaGaming";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA MUNDO
        </p>
       {/*<Pelicula 
        pelicula ="spiderman"
        fecha = "15-07-2022"
        entradas ="20"
        msg="Hola mundo desde Propiedades"/>*/ } 


        {/*<Listado/>*/}
        <ListadoGmg/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
