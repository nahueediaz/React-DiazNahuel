import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import style from "./ItemDetail.module.css"
import { Link } from "react-router-dom";

const ItemDetail = ({id, category, nombre, imagen, precio, detalle,stock}) => {


    return (
        <article className={style.cardItem}>
            <header>
                <h2 className={style.itemNombre}>{nombre}</h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className={style.itemImg}/>
            </picture>
            <section>
                <p className={style.info}>Categoria: {category} </p>
                <p className={style.info}>Descripcion: {detalle}</p>
                <p className={style.info}>Precio: ${precio}</p>
            </section>
            <footer>
                    <ItemCount initial= {1} stock= {stock} onAdd={(quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail