import Style from './ItemList.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return(
        <div className={Style.contListGroup}>
            <h1 className={Style.tittleItemList}>Bienvenidos a <span className= {Style.nameTittle}>KIRO</span> la mejor hamburguesa de Buenos Aires 🍔.  </h1>
            <div className={Style.ListGroup} >
            {products.map(prod => <Item key={prod.id}{...prod} />)}
            </div>
        </div>
    )
}

export default ItemList