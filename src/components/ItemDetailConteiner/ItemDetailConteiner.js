
import { useState, useEffect } from 'react'
import { getProductsById } from '../ListProduct/ListProducts'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import style from './ItemDetailConteiner.module.css'

const ItemDetailConteiner = () =>{

    const [products, setProducts] = useState(null)

    const { itemId } = useParams()


    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className= {style.detailCont}>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailConteiner