import NavBar from "./NavBar/NavBar"
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailConteiner from "./ItemDetailConteiner/ItemDetailConteiner"

const Contenedor = () => {
    return (
        <div>
            <BrowserRouter>   
                <NavBar/>
                <Routes>
                    <Route path= '/' element={<ItemListContainer/>}/>
                    <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path= '/Item/ItemId' element ={<ItemDetailConteiner/>}/>
                    <Route path= '*' element= {<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
} 

export default Contenedor