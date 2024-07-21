import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/card.css'

const Card = ({id,img,title,des,price,originalPrice,discount}) => {
  
  
  return (
    <div className='mainContainer'>
    <div className='container1'>
        <img src={img} alt={title}/>
        <h1>{title}</h1>
        <p>{des}</p>
        <div className='price'>

        <h3 className='current'>₹{price}</h3>
        <h4 className='original'>₹{originalPrice}</h4>
        <h4 className='discount'>{discount}%</h4>
        </div>
        
        
    </div>
    </div>
  )
}

export default Card