import CartWidget from "./cartWidget/cartWidget"
import '../../App.css'


const NavBar = () => {
    return (
        <nav className="barraNav">
            <div className="Container-nav">
                <a href="#" className="tittleNav">Kiro Hamburgueseria</a>
                <div className="Container-list-nav">
                    <ul className="list-nav">
                        <li><a href="#">Hamburguesas</a></li>
                        <li><a href="#">Bebidas</a></li>
                        <li><a href="#">Postres</a></li>
                    </ul>
                </div>
                </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar