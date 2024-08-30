import React, { useEffect, useState } from 'react'
import { Cart } from '../components/Cart'
import { Loading } from '../components/Loading'
import { Link } from 'react-router-dom'
import { fetchPro } from '../service/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllProducts } from '../redux/actions/ProductActions'

export const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state=>state.proReducer)
    const {categories} = useSelector(state=>state.proReducer)
    const {isLoading} = useSelector(state => state.proReducer)
    
    // local state
    // const [products,setProducts] = useState([])

    useEffect(()=>{
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
        // fetchPro()
        // .then(resp =>{
        //     setLoading(false)
        //     setProducts(resp)
        // })
    }, [])

    return (
            <div className='container mt-5'>
                {/* {
                    console.log(products)
                    
                }
                {
                    console.log(categories)
                } */}
                
                <div className='row mt-5'>
                {
                    isLoading ?
                    <Loading/> 
                    :  products.map((product)=>(
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 mt-4' key={product.id}>
                        <Link to={`/product-detail/${product.id}`} style={{textDecoration:'none',color:'black'}}>
                            <Cart
                                imageUrl={product.images[0]}
                                title={product.title}
                                description={product.description}
                            />
                        </Link>
                    </div>
                    ))
                   
                }
                </div>
            </div>
    )
}
