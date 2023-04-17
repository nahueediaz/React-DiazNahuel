import { Link } from 'react-router-dom'
import style from './Item.module.css'
import React from 'react'

const Item = ({id, nombre, imagen, precio, detalle,stock}) => {

    return (
        <article className={style.cardItem}>
            <h2 className={style.itemNombre}>
                {nombre}
            </h2>
            <picture>
                <img src= {imagen} alt={nombre} className={style.itemImg}/>
            </picture>
            <div>
                <p className={style.info}>
                    Precio: {precio}
                </p>
                <p className={style.info}>
                    Detalle: {detalle}
                </p>
                <p className={style.info}>
                    Stock: {stock}
                </p>
            </div>
            <footer className={style.itemFooter}>
                <Link to= {`/Item/${id}`} className={style.option}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item