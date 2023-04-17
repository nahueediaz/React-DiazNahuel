import CartWidget from "./cartWidget/cartWidget"
import { NavLink, Link } from "react-router-dom"
import Style from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={Style.barraNav}>
            <Link to= '/' className={Style.navOption}>
                <h3 className={Style.tittleNav}>Kiro Hamburgueseria</h3>
            </Link>
                <div className={Style.Categories}>
                    <NavLink to= {`/category/Comida`}  className={Style.navOption}>Hamburguesas</NavLink>
                    <NavLink to= {`/category/Bebida`} className={Style.navOption} >Bebidas</NavLink>
                    <NavLink to= {`/category/Postre`} className={Style.navOption} >Postres</NavLink>
                </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar