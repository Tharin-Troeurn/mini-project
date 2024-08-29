import axios from "axios"
import { base_URL } from "../util/constant"

export const fetchCategories =async () =>{
    let resp =await fetch(`${base_URL}/categories`)

    return resp.json()
}

export const fetchPro =async ()=> {
    let resp =await fetch(`${base_URL}/products`)
    
    return resp.json()
}

// create function to insert product
export const insertProduct=async (product)=>{
    let resp =await fetch(`${base_URL}/products`, {
        method : 'post',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp

}

// function to insert file image
export const fileUploadToServer = async (image) =>{
    let resp = await axios({
        method : 'POST',
        headers : {
            "Content-Type" : "multipart/form-data"
        },
        url : `${base_URL}/files/upload`,
        data : image
    })
    return resp
}

// update product by id
export const updateProduct=async (product, id)=>{
    let resp =await fetch(`${base_URL}/products/${id}`, {
        method : 'PUT',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    
    return resp
}

// function search Product
export const searchProduct=async (title)=>{
    let resp = await fetch(`${base_URL}/products?title=${title}`)

    return resp.json()
}
