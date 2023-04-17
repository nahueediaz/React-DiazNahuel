import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
                    <Route path= '/React-DiazNahuel' element={<ItemListContainer/>}/>
                    <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path= '/Item/:itemId' element ={<ItemDetailConteiner/>}/>
                    <Route path= '*' element= {<h1>404 NOT FOUND</h1>}/>
                </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
