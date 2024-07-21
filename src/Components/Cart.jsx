import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cart = () => {
    const [cart, setCart] = useState([]);

    async function fetchData() {
        let res = await fetch('http://localhost:3000/cart');
        let data = await res.json();
        setCart(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const imgStyle = {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        height: 'auto',
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {cart.length === 0 ? (
                <img
                    src='https://ii3.pepperfry.com/assets/w23-empty-cart-060223.jpg'
                    alt='Empty cart'
                    style={imgStyle}
                />
            ) : (
                cart.map(({ id, image, title, des, price, originalPrice, discount }) => (
                    <div key={id}>
                        <Card
                            id={id}
                            img={image}
                            title={title}
                            des={des}
                            price={price}
                            originalPrice={originalPrice}
                            discount={discount}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
