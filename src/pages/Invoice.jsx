import "./index.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Invoice() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];

    // 👉 add quantity if not present
    const updatedData = data.map(item => ({
      ...item,
      qty: item.qty || 1
    }));

    setCart(updatedData);
  }, []);

  useEffect(() => {
  if (location.state?.cartItems) {
    setCart(location.state.cartItems);
  }
}, [location.state]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
      );

    return (
    <div>
        <h1 className="odd">Order Completed</h1>
        <p className="odd">Thankyou,your order has been received</p>
      <div className="upi">
        <div className="receive">
            <div>
                <p>Order ID</p><br></br><p>#SD546DSVC65</p>
            </div>
            <div>
                <p>Payment Method</p><br></br><p>UPI</p>
            </div>
            <div>
                <p>Transaction ID</p><br></br><p>#SD546DSVC65</p>
            </div>
            <div>
                <p>Estimate Delivery Date</p><br></br><p>20-04-2026</p>
            </div>
            <div>
                <button onClick={() => navigate("/myorder")}>Download Invoice</button>
            </div>
        </div>
        </div>

       

      <div className="upi">
        <div>
           <h2>Order Details</h2>
        <h2>Products</h2>
        <div className="elect">
        <div className="drug">
        {cart.map((item, i) => (
            <div key={i} className="carts-row">

              <img src={item.image} alt="" className="cart-img" />

              <p>{item.title}</p>

              {/* Subtotal */}
              <p>₹{item.price * item.qty}</p>

              
            </div>
          ))}</div>
          </div>
          <div className="acts">
           <div className="summary-row">
            <span>Shipping</span>
            <span>₹0</span>
          </div>

          <div className="summary-row">
            <span>Taxes</span>
            <span>₹0</span>
          </div>

          <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>
          </div>
      </div>
      </div>
      </div>
    )
}

  export default Invoice;