import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState({})

    let fetchProductDetail = (id) => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(resp => setProduct(resp))
    }
    useEffect(() => {
        fetchProductDetail(id)
    }, [])

    return (
        
        <div class="container" style={{marginTop:'8rem'}}>
            <div class="card">
                <div class="card-body">
                    
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img src={product.images} class="img-responsive" style={{width:'350px'}}/>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h3 class="card-title">{product.title}</h3>
                            <h4 class="box-title mt-4">Product description</h4>
                            <p>{product.description}</p>
                            <h4 class="mt-3 mb-3">
                                Price : ${product.price}
                            </h4>
                            <button class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                            <button class="btn btn-primary btn-rounded">Buy Now</button>
                            <h3 class="box-title mt-5">Key Highlights</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                                <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                                <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
