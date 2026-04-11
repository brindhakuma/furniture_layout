// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     let data = JSON.parse(localStorage.getItem("cart")) || [];

//     // 👉 add quantity if not present
//     const updatedData = data.map(item => ({
//       ...item,
//       qty: item.qty || 1
//     }));

//     setCart(updatedData);
//   }, []);

//   // ✅ Increase quantity
//   const increaseQty = (index) => {
//     const updated = [...cart];
//     updated[index].qty += 1;
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ Decrease quantity
//   const decreaseQty = (index) => {
//     const updated = [...cart];
//     if (updated[index].qty > 1) {
//       updated[index].qty -= 1;
//     }
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ Remove item
//   const removeItem = (index) => {
//     let updated = [...cart];
//     updated.splice(index, 1);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ Total calculation
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (
//     <div className="cart-container">
// <div className="fragrance">
//        <div className="checking">
//         <div>
//             <input type="radio"></input>
//             <label>Cards</label>
//         </div>
//          <div>
//             <input type="radio"></input>
//             <label>Checkout Page</label>
//         </div>
//          <div>
//             <input type="radio"></input>
//             <label>Payment page</label>
//         </div>
//         </div> </div>

//       <h2 className="cart-title">Shopping Cart</h2>

//       <div className="cart-layout">

//         {/* LEFT SIDE */}
//         <div className="cart-items">

//           <div className="cart-header">
//             <p>Product</p>
//             <p>Name</p>
//             <p>Quantity</p>
//             <p>Subtotal</p>
//             <p>Remove</p>
//           </div>

//           {cart.map((item, i) => (
//             <div key={i} className="cart-row">

//               <img src={item.image} alt="" className="cart-img" />

//               <p>{item.title}</p>

//               {/* Quantity */}
//               <div className="qty-box">
//                 <button onClick={() => decreaseQty(i)}>-</button>
//                 <span>{item.qty}</span>
//                 <button onClick={() => increaseQty(i)}>+</button>
//               </div>

//               {/* Subtotal */}
//               <p>₹{item.price * item.qty}</p>

//               <button onClick={() => removeItem(i)}>❌</button>
//             </div>
//           ))}

//             <div className="coders">
//               <div>
//               <button>Couponcode</button></div>
//               <div className="nope">
//               <button >Apply Coupon</button></div>
//               <div>
//               <p>Clear Shopping Cart</p></div>
//             </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="summary-box">

//           <h3>Order Summary</h3>

//           <div className="summary-row">
//             <span>Items</span>
//             <span>{cart.length}</span>
//           </div>

//           <div className="summary-row">
//             <span>Subtotal</span>
//             <span>₹{total}</span>
//           </div>

//           <div className="summary-row">
//             <span>Shipping</span>
//             <span>₹0</span>
//           </div>

//           <div className="summary-row">
//             <span>Taxes</span>
//             <span>₹0</span>
//           </div>

//           <div className="summary-total">
//             <strong>Total</strong>
//             <strong>₹{total}</strong>
//           </div>

//           <button className="checkout-btn"   onClick={() => navigate("/checkout")}>Proceed to checkout</button>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Cart;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
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
  if (coupon === "SAVE10") {
    const discountValue = total * 0.1;
    setDiscount(discountValue);
    localStorage.setItem("discount", discountValue);
  }
}, [cart]);

  

  // ✅ Increase quantity
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const applyCoupon = () => {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  if (coupon === "SAVE10") {
    const discountValue = total * 0.1;
    setDiscount(discountValue);
    localStorage.setItem("discount", discountValue);
  } else {
    alert("Invalid Coupon");
    setDiscount(0);
    localStorage.removeItem("discount");
  }
};

  // ✅ Decrease quantity
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    }
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Remove item
  const removeItem = (index) => {
    let updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Total calculation
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const clearCart = () => {
  setCart([]);
  setDiscount(0);
  setCoupon("");
  localStorage.removeItem("cart");
  localStorage.removeItem("discount");
};

  return (
    <div className="cart-container">
<div className="fragrance">
       <div className="checking">
        <div>
            <input type="radio"></input>
            <label>Cards</label>
        </div>
         <div>
            <input type="radio"></input>
            <label>Checkout Page</label>
        </div>
         <div>
            <input type="radio"></input>
            <label>Payment page</label>
        </div>
        </div> </div>

      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-layout">

        {/* LEFT SIDE */}
        <div className="cart-items">

          <div className="cart-header">
            <p>Product</p>
            <p>Name</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>

          {cart.map((item, i) => (
            <div key={i} className="cart-row">

              <img src={item.image} alt="" className="cart-img" />

              <p>{item.title}</p>

              {/* Quantity */}
              <div className="qty-box">
                <button onClick={() => decreaseQty(i)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(i)}>+</button>
              </div>

              {/* Subtotal */}
              <p>₹{item.price * item.qty}</p>

              <button onClick={() => removeItem(i)}>❌</button>
            </div>
          ))}

            <div className="coders">
              <div>
              <p>Have a coupon?</p></div>
              {/* <div className="nope">
              <button >Apply Coupon</button></div> */}
              <input
  type="text"
  placeholder="Enter coupon"
  value={coupon}
  onChange={(e) => setCoupon(e.target.value)}
/>

<button onClick={applyCoupon} disabled={discount > 0}>Apply Coupon</button>
              {/* <div>
              <p>Clear Shopping Cart</p></div> */}
              <p onClick={clearCart} style={{ cursor: "pointer" }}>
  Clear Shopping Cart
</p>
            </div>

        </div>

        {/* RIGHT SIDE */}
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

          {/* <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div> */}

          <button className="checkout-btn"   onClick={() => navigate("/checkout")}>Proceed to checkout</button>

        </div>

      </div>
    </div>
  );
}

export default Cart;
