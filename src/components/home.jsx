import React, { useState } from 'react';
// import Card from './Card';
import { Link, useNavigate } from 'react-router-dom';
import DealsComponent from './cards/DealComponent';
import BigCard from './cards/bigCard';
import DiscoverCard from './cards/discoverCard';
import MoreCard from './cards/moreCrad';
import CheckoutCard from './cards/checkoutCard';
import Footer from './Footer';
import '../css/Home.css';  // Import the CSS file

const Home = ({ data }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = async (item) => {
        try {
            let res = await fetch('http://localhost:3000/cart', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            let cart = await res.json();
            console.log(cart);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        addToCart(product);
    };

    const nav = useNavigate();

    function showDetails(id){
        nav(`/ProdDetails/${id}`);
    }

    return (
        <div>
            <div className='banner'>

            <img src='https://ii1.pepperfry.com/assets/5404ea9e-cb60-4429-87fc-3f66edbb1a5b.jpg' alt='banner'/>
            </div>
            <div className='offers'>
                    <img src='https://ii1.pepperfry.com/assets/abfeaaa7-88b8-4339-b5d5-7875f0903b8d.jpg' alt='small banner'/>
                    <img src='https://ii1.pepperfry.com/assets/44fad4df-0989-49a9-abe0-c849cb6661ad.jpg' alt='small banner'/>
                    <img src='https://ii1.pepperfry.com/assets/cca90874-cf5a-476f-9fc0-eb9cd5480de2.jpg' alt='small banner'/>
                
            </div>
            <Link to={'./signup'}>
            <div className='ads'>
        <img src='https://ii1.pepperfry.com/assets/a7f49ef5-f5c8-4430-a656-fbd129e4db8a.jpg' alt='ads'/>
            </div></Link>
            <div className="deals-component">
                <DealsComponent />
            </div>
            <div className='ads'>
                <img src='https://ii1.pepperfry.com/assets/c96876cb-e2bc-4c28-95fe-d7d9d0bd4f2e.jpg' alt='offer ad'/>
            </div>
            <div className="big-card">
                <BigCard />
            </div>
            <div className="discover-card">
                <DiscoverCard />
            </div>
            <div className="more-card">
                <MoreCard />
            </div>
            <div className="checkout-card">
                <CheckoutCard />
            </div>
            <hr />
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
