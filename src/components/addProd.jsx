import React, { useEffect, useState } from 'react';
import '../css/addProd.css'

const AddProd = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [deals, setDeals] = useState([]); // State to hold the list of products

    async function pushData() {
        let obj = {
            id: Date.now() + Math.random(),
            title,
            des,
            price,
            image,
            originalPrice,
            discount
        };

        try {
            let res = await fetch('http://localhost:3000/data', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            let data = await res.json();
            console.log(data);
            setDeals([...deals, obj]); 
            
            setTitle("");
            setDes("");
            setPrice("");
            setImage("");
            setOriginalPrice("");
            setDiscount("");
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }
    async function fetchData(){
        let deals = await fetch('http://localhost:3000/deals')
        let a = await deals.json()
        setDeals(a)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const nav = (path) => {
        // Navigation function placeholder
        console.log("Navigate to:", path);
    };

    return (
        <div className='container'>
            <h1>Add Product</h1>
            <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='Description'
                value={des}
                onChange={(e) => setDes(e.target.value)}
            />
            <input
                type="number"
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder='Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                type="number"
                placeholder='Original Price'
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder='Discount'
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />
            
            <button className="add" onClick={pushData}>Add</button>

            <div className="deals-container">
                <h2>Added Products</h2>
                <div className="deals-grid">
                    {deals.map((deal) => (
                        <div key={deal.id} className="deal-item" onClick={() => nav(`/ProdDetails/${deal.id}`)}>
                            <img src={deal.image} alt={deal.title} />
                            <h3>{deal.title}</h3>
                            <div className="pricing">
                                <span className="current-price">₹{deal.price}</span>
                                <span className="original-price">₹{deal.originalPrice}</span>
                                <span className="discount">{deal.discount}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddProd;
