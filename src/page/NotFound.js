import React from 'react'
import developer from '../lotties/Animation - 1725000507585.json'
import { useLottie } from "lottie-react"

export const NotFound = () => {

  const options = {
    animationData: developer,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <div 
        className='container d-flex justify-content-center align-items-center' 
        style={{marginTop:'9rem',backgroundColor:'#E8E8E8',height:'50vh'}}
    >
        <div style={{width:'300px'}}>
          {View}
        </div>
        
        <h1>404 : Page NotFound</h1>
    </div>
  )
}
