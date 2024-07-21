import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProdDetails.css';  // Make sure this path is correct

const ProdDetails = () => {
    let x = useParams();
    let y = x.id;
    console.log(y);
    const [oneData, setOneData] = useState({});

    async function fetchData() {
        let res = await fetch(`http://localhost:3000/deals/${x.id}`);
        let data = await res.json();
        setOneData(data);
        console.log(data);
    }

    let obj = {
        id: oneData.id,
        title: oneData.title,
        image: oneData.image,
        price: oneData.price,
        originalPrice: oneData.originalPrice,
        discount: oneData.discount
    };

    async function pushData() {
        let cart = await fetch('http://localhost:3000/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        let data1 = await cart.json();
        console.log(data1);
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                <button className='addtocart' onClick={pushData}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProdDetails;