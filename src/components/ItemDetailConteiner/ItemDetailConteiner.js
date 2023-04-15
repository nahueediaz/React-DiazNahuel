
import { useState, useEffect } from 'react'
import { getProductsById } from '../ListProduct/ListProducts'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () =>{
    const [products, setProducts] = useState(null)

    const {itemId } = useParams()

    useEffect(() => {
        getProductsById (itemId)
        .then(response => {
            setProducts (response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailConteiner