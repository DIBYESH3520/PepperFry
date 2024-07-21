import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../css/DealComponent.css'

const DealsComponent = ({}) => {
    const [deals,setDeals] = useState([])
    let nav = useNavigate()

    async function fetchData(){
        let res = await fetch('http://localhost:3000/deals')
        let data = await res.json()
        setDeals(data);
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
      <div className="deals-container">
        <h2>Shop What the Fry Deals</h2>
        <div className="deals-grid">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-item" onClick={()=>(nav(`/ProdDetails/${deal.id}`))}>
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
    );
  };
  
  export default DealsComponent;