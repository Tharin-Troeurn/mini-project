import React, { useEffect, useState } from 'react'
import { Cart } from '../components/Cart'
import { Navbar } from '../components/Navbar'
import { Loading } from '../components/Loading'

export const Home = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setLoading] = useState(true)

    const fetchPro =()=> {
        fetch('https://api.escuelajs.co/api/v1/products?limit=16&offset=0')
        .then(res=>res.json())
        .then(resp => {
            setProducts(resp)
            setLoading(false)
        })
    }

    useEffect(()=>{
        fetchPro()
    }, [])

    return (
        <div className='container-fluid'>
            
            <div className='container'>
                <div className='row mt-5'>
                {
                    isLoading ?
                    <Loading/> 
                    :  products.map((product)=>(
                    <div className='col-lg-3 col-md-4 col-sm-6 col-6 mt-4' key={product.id}>
                        <Cart
                            imageUrl={product.images[0]}
                            title={product.title}
                            description={product.description}
                        />
                    </div>
                    ))
                   
                }
                </div>
            </div>
        </div>
    )
}
