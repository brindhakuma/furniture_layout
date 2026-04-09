import "./index.css";
import { useEffect, useState } from "react";


function Tracking() {
     const [order, setOrder] = useState([]);

    useEffect(() => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  
  if (orders.length > 0) {
    setOrder(orders[orders.length - 1]);
  }
}, []);
     return (
    <div>
        <h2 className="odds">Track your Order</h2>
        <h4 className="odd">Order Status</h4>
        <h4 className="odd">Order ID: hggv87thgv6</h4>
        
<div className="ways">
        <div className="tracking-container">
  <div className="steps">

    <div className="step active">
         <p>Order Placed</p>
      <div className="circle">✓</div>
     
      <span>28 June 2026</span><br></br>
      <span>11 AM</span>
    </div>

    <div className="step active">
        <p>Accepted</p>
      <div className="circle">✓</div>
      
      <span>28 June 2025</span><br></br>
      <span>11:15 AM</span>
    </div>

    <div className="step">
        <p>In Progress</p>
      <div className="circle"></div>
      
      <span>Expected</span>
      <span>28 June 2025</span>
    </div>

    <div className="step">
        <p>On The Way</p>
      <div className="circle"></div>
      
      <span>Expected</span>
      <span>28 June 2025</span>
    </div>

    <div className="step">
          <p>Delivered</p>
      <div className="circle"></div>
    
      <span>Expected</span>
      <span>28 June 2025</span>
    </div>

  </div>

  <div className="progress-line"></div>
  <div className="progress-fill"></div>
  

</div>
</div>
         <div className="elect">
        <div className="drug">
        {order?.cartItems?.map((item, i) => (
  <div key={i} className="carts-row">
    <img src={item.image} alt="" className="cart-img" />
    <p>{item.title}</p>
    <p>₹{item.price * item.qty}</p>
  </div>
          ))}
          </div>
          
    </div>
    </div>
    )
}

 export default Tracking;