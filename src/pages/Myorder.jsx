import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Myorder() {
     const [cart, setCart] = useState([]);
     const [orders, setOrders] = useState([]);
     const navigate = useNavigate();
     const latestOrder = orders[orders.length - 1];

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("orders")) || [];
  setOrders(data);
}, []);

  return (
    <div className="mine">
        <h2>My Order</h2>
        
            <div className="account-container">
      <div className="sidebar">
         <button  onClick={() => navigate("/myaccount")}>Personal Information</button>
        <button className="active" onClick={() => navigate("/myorder")}>My Order</button>
        <button onClick={() => navigate("/password")}>Password Manager</button>
        <button onClick={() => navigate("/logout")}>Logout</button>
      </div>
      
<div className="desk">

{latestOrder && (
  <div>
    <h3>Order ID: {latestOrder.orderId}</h3>

    {latestOrder.cartItems.map((item, i) => (
      <div key={i} className="cartrow">
        <img src={item.image} alt="" className="cart-img" />
        <p>{item.title}</p>
        <p>₹{item.price * item.qty}</p>
      </div>
    ))}
  </div>
)}
</div>
</div>
      <div className="accept">
      <button>Accepted</button>
      <p>Your order has been accepted</p></div>
      <div className="into">
        <button className="duty" onClick={() => navigate("/tracking")}>Track Order</button>
        <button  onClick={() => navigate("/invoice")}>Invoice</button>
        <h2>Cancel Order</h2>
      </div>
        </div>
    
  )}

  export default Myorder;