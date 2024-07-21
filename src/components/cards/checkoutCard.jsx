import React, { useState, useEffect } from "react";
import "../../css/checkoutCard.css";

const CheckoutCard = (img) => {
  const [deals, setDeals] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/check");
    let data = await res.json();
    setDeals(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="brand-bazaar">
      <h1>Check Out These Collections</h1>
      <div className="check-section">
        {deals.map((deal) => (
          <div className="check-card" key={deal.id}>
            <div className="check-logo">
              <img src={deal.image} alt={deal.title} />
            </div>
            <div className="check-details">
              <h3>{deal.title}</h3>
              <p>{deal.des}</p>
            </div>
          </div>
        ))}
        </div>
       
    </div>
  );
};

export default CheckoutCard;
