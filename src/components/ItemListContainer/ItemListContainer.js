import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../ListProduct/ListProducts'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import style from './ItemListConteiner.module.css'

const ItemListContainer = ({greeting}) => {
    const[products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const listFunc = categoryId ? getProductsByCategory : getProducts

        listFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        }, [categoryId])
    })

    return (
        <div>
            <div >
                <h1 className= {style.titleDetailCont}>{categoryId}</h1>
                <ItemList {...{products}}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer