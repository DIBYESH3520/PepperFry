import React, { useState, useEffect } from "react";
import "../../css/discoverCard.css";

const DiscoverCard = (img) => {
  const [deals, setDeals] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/discover");
    let data = await res.json();
    setDeals(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="brand-bazaar">
      <h1>Discover Our Newest Arrivals</h1>
      <div className="discover-section">
        {deals.map((deal) => (
          <div className="discover-card" key={deal.id}>
            <div className="discover-logo">
              <img src={deal.image} alt={deal.title} />
            </div>
            <div className="discover-details">
              <h3>{deal.title}</h3>
              <p>{deal.des}</p>
            </div>
          </div>
        ))}
        </div>
       
    </div>
  );
};

export default DiscoverCard;
