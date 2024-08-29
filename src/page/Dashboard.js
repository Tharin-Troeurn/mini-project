import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchPro, searchProduct } from '../service/ProductAction'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const [products,setProducts] = useState([])
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    
    const columns = [
        {
            name : 'ID',
            selector : row=>row.id
        },
        {
            name : 'Title',
            selector : row=>row.title
        },
        {
            name : 'Price',
            selector : row=>row.price
        },
        {
            name : 'Category',
            selector : row=>row.category.name
        },
        {
            name : 'Photo',
            selector : row=><img src={row.images[0]} alt='' style={{width:'70px',height:'70px'}}/>
        },
        {
            name : 'Action',
            selector : row=><div>
                <button 
                    className='btn btn-warning me-3 btn-sm' 
                    onClick={()=>navigate("/edit",{
                        state : row
                    })}
                >Edit</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
            </div>
        }
    ]

    useEffect(()=>{
        fetchPro()
        .then(resp => setProducts(resp))
    }, [])

    useEffect(()=>{
        searchProduct(search)
        .then(resp => setProducts(resp))

    }, [search])

    return (
        <div className='container border border-dark' style={{marginTop:'7rem'}}>
            <DataTable
                columns={columns}
                data={products}
                pagination
                subHeader
                subHeaderComponent={
                    <input type='text'
                        placeholder='search here'
                        className='form-control'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            console.log(search)
                        }}
                    />
                }
            />
        </div>
    )
}
