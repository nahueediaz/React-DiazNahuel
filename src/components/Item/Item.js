import style from './Item.module.css'



const Item = ({id, nombre, imagen, precio, detalle}) => {
    console.log(imagen)
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
            </div>
            <footer className={style.itemFooter}>
                <button className={style.option}>Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item