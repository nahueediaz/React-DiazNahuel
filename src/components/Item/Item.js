
const Item = ({id, nombre, imagen, precio, detalle}) => {
    return (
        <article className="cardItem">
            <h2 className="ItemNombre">
                {nombre}
            </h2>
            <picture>
                <img src= {imagen} alt={nombre} className="itemImg"/>
            </picture>
            <div>
                <p className="info">
                    Precio: {precio}
                </p>
                <p className="info">
                    Detalle: {detalle}
                </p>
            </div>
            <footer className="itemFooter">
                <button className="option">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item