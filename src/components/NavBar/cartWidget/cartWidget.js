import logo from '../Assets/Carrito.svg'
import style from '../NavBar.module.css'

const CartWidget = () => {
    return (
        <div  className={style.carrito}>
            <img src= {logo }/>
                0
        </div> 
    )
}

export default CartWidget