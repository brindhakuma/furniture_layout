// import "./index.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Checkout() {
//   const [cart, setCart] = useState([]);
//   const [billing, setBilling] = useState({
//     firstName: "",
//     lastName: "",
//     country: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "",
//     email: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load cart from localStorage
//     let data = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedData = data.map(item => ({ ...item, qty: item.qty || 1 }));
//     setCart(updatedData);

//     // Optionally load saved billing info
//     const savedBilling = JSON.parse(localStorage.getItem("billing")) || {};
//     setBilling(prev => ({ ...prev, ...savedBilling }));
//   }, []);

//   // Handle dynamic input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBilling(prev => ({ ...prev, [name]: value }));
//     localStorage.setItem("billing", JSON.stringify({ ...billing, [name]: value }));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div>
//       <div className="fragrance">
//         <div className="checking">
//           <div><input type="radio" onClick={() => navigate("/home")} /><label>Cards</label></div>
//           <div><input type="radio" /><label>Checkout Page</label></div>
//           <div><input type="radio" onClick={() => navigate("/payment")} /><label>Payment page</label></div>
//         </div> 
//       </div>

//       <h2 className="inhead">Checkout</h2>

//       <div className="checkout-container">
//         <div className="shares">
//           <form className="listing">
//             <h4>Billing Details</h4>
//             <div className="doc">
//               <div>
//                 <label>First Name*</label><br />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={billing.firstName}
//                   placeholder="enter first name"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Last Name*</label><br />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={billing.lastName}
//                   placeholder="enter last name"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="counts">
//               <div>
//                 <label>Country*</label><br />
//                 <input
//                   type="text"
//                   name="country"
//                   value={billing.country}
//                   placeholder="enter country"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Street Address*</label><br />
//                 <input
//                   type="text"
//                   name="address"
//                   value={billing.address}
//                   placeholder="enter address"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>City*</label><br />
//                 <input
//                   type="text"
//                   name="city"
//                   value={billing.city}
//                   placeholder="enter city"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>State*</label><br />
//                 <input
//                   type="text"
//                   name="state"
//                   value={billing.state}
//                   placeholder="enter state"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Zip code*</label><br />
//                 <input
//                   type="text"
//                   name="zip"
//                   value={billing.zip}
//                   placeholder="enter code"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Phone*</label><br />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={billing.phone}
//                   placeholder="enter number"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label>Email*</label><br />
//                 <input
//                   type="text"
//                   name="email"
//                   value={billing.email}
//                   placeholder="enter mail id"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <h4>Delivery Address</h4>
//             <div className="doc">
//               <div>
//                 <input type="radio" />
//                 <label>Use a different billing address</label>
//               </div>
//               <div>
//                 <input type="radio" />
//                 <label>Same billing address</label>
//               </div>
//             </div>
//           </form>
//         </div>

//         <div className="apply">
//           <div className="summary-box">
//             <h3>Order Summary</h3>
//             <div className="summary-row">
//               <span>Items</span>
//               <span>{cart.length}</span>
//             </div>
//             <div className="summary-row">
//               <span>Subtotal</span>
//               <span>₹{total}</span>
//             </div>
//             <div className="summary-row">
//               <span>Shipping</span>
//               <span>₹0</span>
//             </div>
//             <div className="summary-row">
//               <span>Taxes</span>
//               <span>₹0</span>
//             </div>
//             <div className="summary-total">
//               <strong>Total</strong>
//               <strong>₹{total}</strong>
//             </div>

//             <button className="checkout-btn" onClick={() => navigate("/payment")}>
//               Proceed to checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;


import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedData = data.map(item => ({ ...item, qty: item.qty || 1 }));
    setCart(updatedData);

    // Optionally load saved billing info
    const savedBilling = JSON.parse(localStorage.getItem("billing")) || {};
    setBilling(prev => ({ ...prev, ...savedBilling }));

    const savedDiscount = localStorage.getItem("discount") || 0;
  setDiscount(Number(savedDiscount));
  }, []);

  // Handle dynamic input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling(prev => ({ ...prev, [name]: value }));
    localStorage.setItem("billing", JSON.stringify({ ...billing, [name]: value }));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <div className="fragrance">
        <div className="checking">
          <div><input type="radio" onClick={() => navigate("/home")} /><label>Cards</label></div>
          <div><input type="radio" /><label>Checkout Page</label></div>
          <div><input type="radio" onClick={() => navigate("/payment")} /><label>Payment page</label></div>
        </div> 
      </div>

      <h2 className="inhead">Checkout</h2>

      <div className="checkout-container">
        <div className="shares">
          <form className="listing">
            <h4>Billing Details</h4>
            <div className="doc">
              <div>
                <label>First Name*</label><br />
                <input
                  type="text"
                  name="firstName"
                  value={billing.firstName}
                  placeholder="enter first name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name*</label><br />
                <input
                  type="text"
                  name="lastName"
                  value={billing.lastName}
                  placeholder="enter last name"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="counts">
              <div>
                <label>Country*</label><br />
                <input
                  type="text"
                  name="country"
                  value={billing.country}
                  placeholder="enter country"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Street Address*</label><br />
                <input
                  type="text"
                  name="address"
                  value={billing.address}
                  placeholder="enter address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>City*</label><br />
                <input
                  type="text"
                  name="city"
                  value={billing.city}
                  placeholder="enter city"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>State*</label><br />
                <input
                  type="text"
                  name="state"
                  value={billing.state}
                  placeholder="enter state"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Zip code*</label><br />
                <input
                  type="text"
                  name="zip"
                  value={billing.zip}
                  placeholder="enter code"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone*</label><br />
                <input
                  type="text"
                  name="phone"
                  value={billing.phone}
                  placeholder="enter number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email*</label><br />
                <input
                  type="text"
                  name="email"
                  value={billing.email}
                  placeholder="enter mail id"
                  onChange={handleChange}
                />
              </div>
            </div>

            <h4>Delivery Address</h4>
            <div className="doc">
              <div>
                <input type="radio" />
                <label>Use a different billing address</label>
              </div>
              <div>
                <input type="radio" />
                <label>Same billing address</label>
              </div>
            </div>
          </form>
        </div>

        <div className="apply">
          <div className="summary-box">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="summary-row">
              <span>Taxes</span>
              <span>₹0</span>
            </div>
            <div className="summary-row">
  <span>Discount</span>
  <span>-₹{discount}</span>
</div>
            <div className="summary-total">
              <strong>Total</strong>
              <strong>₹{total - discount}</strong>
            </div>

            <button className="checkout-btn"  onClick={() =>
    navigate("/payment", {
      state: { total: total - discount }
    })
  }>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
