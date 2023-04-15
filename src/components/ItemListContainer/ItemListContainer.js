import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../ListProduct/ListProducts'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const[products, setProducts] = useState([])

    const {productCategory} = useParams()

    useEffect(() => {
        const listFunc = productCategory ? getProductsByCategory : getProducts

        listFunc(productCategory)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        }, [])
    })

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer