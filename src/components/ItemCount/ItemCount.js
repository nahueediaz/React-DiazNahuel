import style from './ItemCount.module.css'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity (quantity + 1)
        }
    }

    const decrement = () =>{
        if (quantity > initial){
            setQuantity (quantity - 1)
        }
    }

    return(
        <div className={style.counter}>
            <div className={style.controls}>
                <button className={style.Button} onClick={decrement}>-</button>
                <h4 className={style.Number}>{quantity}</h4>
                <button className={style.Button} onClick={increment}>+</button>
            </div>
            <div>
                <button className={style.Button} onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount