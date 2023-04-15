import CartWidget from "./cartWidget/cartWidget"
import '../../App.css'
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="barraNav">
            <Link to= '/' >
                <h3 className="tittleNav">Kiro Hamburgueseria</h3>
            </Link>
                <div className="Categories">
                    <NavLink to= {`/category/Hamburguesas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hamburguesas</NavLink>
                    <NavLink to= {`/category/Bebidas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Bebidas</NavLink>
                    <NavLink to= {`/category/Postres`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Postres</NavLink>
                </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar