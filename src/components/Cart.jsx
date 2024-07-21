import React, { useEffect, useState } from 'react'
// import Card from './Card'

const Cart = () => {
    const[cart,setCart]=useState([])

    async function fetchData(){
        let res = await fetch('http://localhost:3000/cart')
        let data = await res.json()
        setCart(data);
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
    <h1>Cart</h1>
    {cart.length > 0 ? (
        cart.map(({ id, img, title, des, price }) => (
            <div key={id}>
                <Card
                    id={id}
                    img={img}
                    title={title}
                    des={des}
                    price={price}
                />
            </div>
        ))
    ) : (
        <p>No items in the cart</p>
    )}
</div>
);
  
}

export default Cart