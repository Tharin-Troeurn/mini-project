import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUploadToServer, insertProduct, updateProduct } from '../service/ProductAction'
import { useLocation } from 'react-router-dom'

export const CreateProduct = ({edit}) => {
    // get data from naviagtion
    const location = useLocation()
    const [categories , setCategories] = useState([])
    const [imageFile,setImageFile] = useState("")
    const [product, setProduct] = useState({
        id : 0,
        title : "",
        price : 0,
        description : "",
        categoryId : 1,
        images : [
            "https://tse2.mm.bing.net/th?id=OIP.tgCY0ludPdPHJYPrzc0Q-wHaE8&pid=Api&P=0&h=220"
        ]
    })
    const onChangeHandler=(e)=>{
        // console.log(e.target.value)
        const {name,value} = e.target
        // console.log(name)
        // console.log(value)
        setProduct(prevState=>{
            return{
                ...prevState,
                [name] : value
            }
        })
        // console.log(product)
    }

    const handleOnSubmit=()=>{
        console.log('submited')
        const formdata = new FormData()
        formdata.append("file", imageFile)

        // fileUploadToServer(formdata)
        // .then(res=>{
        //     product.images = [res.data.location]
        //     console.log(product.images)
        //     insertProduct(product)
        //     .then(res => res.json())
        //     .then(resp => {
        //         console.log(resp.images)
        //     })
        // })

        if(edit){
            if(imageFile == ""){ // if : user choose old image to update
                // console.log('edit id = '+product.id)
                updateProduct(product, product.id)
                .then(res=>res.json())
                .then(res => console.log(res))
            }else{   // else : user choose new image to update
                // create image object
                
                fileUploadToServer(formdata)
                .then(resp=>{
                    product.images = [resp.data.location]
                    // console.log(product.images)
                    updateProduct(product, product.id)
                    .then(res=>res.json())
                    .then(res => console.log(res))
                })
            }
        }else{
            fileUploadToServer(formdata)
            .then(res=>{
                product.images = [res.data.location]
                console.log(product.images)
                insertProduct(product)
                .then(res => res.json())
                .then(resp => {
                    console.log(resp.images)
                })
            })
        }
    }

    const onPreviewImage= (e) =>{
        // console.log(e.target.files)
        setImageFile(e.target.files[0])

    }

    useEffect(()=>{
        console.log(edit)
        if(edit){
            // console.log(location.state)
            const {id,title,price,description,images,category} = location.state
            product.id = id
            product.title = title
            product.price = price
            product.description = description
            product.categoryId = category.id
            product.images = images

            // console.log(product.images)
        }
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

    

    return (
        <div className='container p-4' style={{marginTop:'9rem', backgroundColor:'#E8E8E8'}}>
            <form method='post'>
                <h1 className='text-center mb-3'>Insert Product Form</h1>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title" 
                        value={product.title}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="price" 
                        value={product.price}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label for="categoryId" className="form-label">Choose Category</label>
                    <select 
                        className='form-select' 
                        name="categoryId" 
                        value={product.categoryId}
                        onChange={onChangeHandler}>
                        
                        {
                            categories.map(item =>(
                                <option value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        name="description" 
                        rows="10"
                        value={product.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="image" 
                        onChange={onPreviewImage}
                    />
                </div>
                <div className='mb-3 preview'>
                    <img 
                        src={ imageFile == "" ? product.images[0] : URL.createObjectURL(imageFile)} 
                        alt=''
                        style={{width:'100px', height:'90px', objectFit:'cover'}}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={()=>handleOnSubmit()}
                >{edit ? "Update Product" : "Create Product"}</button>
            </form>
        </div>
    )
}
