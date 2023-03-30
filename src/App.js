import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import Contenedor from './components/contenedor';


function App() {
  return (
    <div className="App">
      <Contenedor/>
      <ItemListContainer greeting={'Bienvenidos a nuestra pagina web'}/>
    </div>
  );
}

export default App;
