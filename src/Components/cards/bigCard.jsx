import React, { useState, useEffect } from "react";
import "../../css/bigCard.css";

const BigCard = (img) => {
  const [deals, setDeals] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/bigCard");
    let data = await res.json();
    setDeals(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="brand-bazaar">
      <h1>Brand Bazaar</h1>
      <div className="brand-section">
        {deals.map((deal) => (
          <div className="brand-card" key={deal.id}>
            <div className="brand-logo">
              <img src={deal.image} alt={deal.title} />
            </div>
            <div className="brand-details">
              <h3>{deal.title}</h3>
              <p>{deal.des}</p>
            </div>
          </div>
        ))}
        </div>
       
    </div>
  );
};

export default BigCard;
