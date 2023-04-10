import NavBar from "./NavBar/NavBar"
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemCount from './ItemCount/ItemCount'


const Contenedor = () => {
    return (
        <div>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos a nuestra pagina web'}/>
    <ItemCount initial= {1} stock= {10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>)
} 

export default Contenedor