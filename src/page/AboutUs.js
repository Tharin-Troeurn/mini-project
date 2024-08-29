import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/ProductActions'

export const AboutUs = () => {
  
  const dispatch = useDispatch()
  const {products} = useSelector(state=>state.proReducer)

  useEffect(()=>{
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div>
      AboutUs
      {
        console.log(products)
      }
    </div>
  )
}
