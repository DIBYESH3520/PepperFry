import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Card from './Card'

const ProdDetails = () => {
    let x = useParams()
    let y=x.id
    console.log(y);
    const [oneData,setOneData] = useState({})

   async function fetchData(){
        let res = await fetch(`http://localhost:3000/deals/${x.id}`)
        let data = await res.json()
        setOneData(data)
        console.log(data);
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='product-page'>
      <div className='product-image'>
        <img src={oneData.image} />
        </div>
        <div className='product-details'>
          <div className='title'>
          <h3>{oneData.title}</h3>
          <p className="product-brand">By pepperfry</p>
          </div>
          <hr />
          <div className='product-price'>
          <span className="current-price">₹{oneData.price}</span>
                <span className="original-price">₹{oneData.originalPrice}</span>
                <span className="discount">{oneData.discount}%</span>
          </div>
          <p className="viewers">226 People Viewing This</p>
          <div className="delivery">
            <span>Delivery & Assembly Details</span>
            <p>Delivery FREE by Tue 30 July</p>
            <p>Assembly Not Required</p>
          </div>
          <span className="stock-warning">Hurry! Only 10 Left</span>
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>        
    </div>
  )
}

export default ProdDetails




