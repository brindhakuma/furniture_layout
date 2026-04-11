// import "./index.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Myorder() {
//      const [cart, setCart] = useState([]);
//      const [orders, setOrders] = useState([]);
//      const navigate = useNavigate();
//      const latestOrder = orders[orders.length - 1];

//   useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("orders")) || [];
//   setOrders(data);
// }, []);

//   return (
//     <div className="mine">
//         <h2>My Order</h2>
        
//             <div className="account-container">
//       <div className="sidebar">
//          <button  onClick={() => navigate("/myaccount")}>Personal Information</button>
//         <button className="active" onClick={() => navigate("/myorder")}>My Order</button>
//         <button onClick={() => navigate("/password")}>Password Manager</button>
//         <button onClick={() => navigate("/logout")}>Logout</button>
//       </div>
      
// <div className="desk">

// {latestOrder && (
//   <div>
//     <h3>Order ID: {latestOrder.orderId}</h3>

//     {latestOrder.cartItems.map((item, i) => (
//       <div key={i} className="cartrow">
//         <img src={item.image} alt="" className="cart-img" />
//         <p>{item.title}</p>
//         <p>₹{item.price * item.qty}</p>
//       </div>
//     ))}
//   </div>
// )}
// </div>
// </div>
//       <div className="accept">
//       <button>Accepted</button>
//       <p>Your order has been accepted</p></div>
//       <div className="into">
//         <button className="duty" onClick={() => navigate("/tracking")}>Track Order</button>
//         <button  onClick={() => navigate("/invoice")}>Invoice</button>
//         <h2>Cancel Order</h2>
//       </div>
//         </div>
    
//   )}

//   export default Myorder;


// import "./index.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Myorder() {
//      const [cart, setCart] = useState([]);
//      const [orders, setOrders] = useState([]);
//      const navigate = useNavigate();
//      const latestOrder = orders[orders.length - 1];

//   useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("orders")) || [];
//   setOrders(data);
// }, []);

//   return (
//     <div className="mine">
//         <h2>My Order</h2>
        
//             <div className="account-container">
//       <div className="sidebar">
//          <button  onClick={() => navigate("/myaccount")}>Personal Information</button>
//         <button className="active" onClick={() => navigate("/myorder")}>My Order</button>
//         <button onClick={() => navigate("/password")}>Password Manager</button>
//         <button onClick={() => navigate("/logout")}>Logout</button>
//       </div>
      
// <div className="desk">

// {latestOrder && (
//   <div>
//     <h3>Order ID: {latestOrder.orderId}</h3>

//     {latestOrder.cartItems.map((item, i) => (
//       <div key={i} className="cartrow">
//         <img src={item.image} alt="" className="cart-img" />
//         <p>{item.title}</p>
//         <p>₹{item.price * item.qty}</p>
//       </div>
//     ))}
//   </div>
// )}
// </div>
// </div>
//       <div className="accept">
//       <button>Accepted</button>
//       <p>Your order has been accepted</p></div>
//       <div className="into">
//         <button className="duty" onClick={() => navigate("/tracking")}>Track Order</button>
//         <button  onClick={() => navigate("/invoice")}>Invoice</button>
//         <h2>Cancel Order</h2>
//       </div>
//         </div>
    
//   )}

//   export default Myorder;

// import "./index.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Myorder() {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   const latestOrder = orders[orders.length - 1];

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(data);
//   }, []);

//   return (
//     <div className="mine">
//       <h2>My Order</h2>

//       <div className="account-container">
//         <div className="sidebar">
//           <button onClick={() => navigate("/myaccount")}>
//             Personal Information
//           </button>
//           <button className="active" onClick={() => navigate("/myorder")}>
//             My Order
//           </button>
//           <button onClick={() => navigate("/password")}>
//             Password Manager
//           </button>
//           <button onClick={() => navigate("/logout")}>Logout</button>
//         </div>

//         <div className="desk">
//           {latestOrder && (
//             <div>
//               <h3>Order ID: {latestOrder.orderId}</h3>

//               {/* Products */}
//               {latestOrder.cartItems.map((item, i) => (
//                 <div key={i} className="cartrow">
//                   <img src={item.image} alt="" className="cart-img" />
//                   <p>{item.title}</p>

//                   {/* Optional: show original subtotal */}
//                   <p>₹{item.price * item.qty}</p>
//                 </div>
//               ))}

//               {/* ✅ Order Summary */}
//               <div className="summary">
//                 <p>Discount: -₹{latestOrder.discount}</p>
//                 <h3>Total Paid: ₹{latestOrder.amount}</h3>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Status */}
//       <div className="accept">
//         <button>Accepted</button>
//         <p>Your order has been accepted</p>
//       </div>

//       {/* Actions */}
//       <div className="into">
//         <button
//           className="duty"
//           onClick={() =>
//             navigate("/tracking", { state: latestOrder })
//           }
//         >
//           Track Order
//         </button>

//         <button
//           onClick={() =>
//             navigate("/invoice", { state: latestOrder })
//           }
//         >
//           Invoice
//         </button>

//         <h2>Cancel Order</h2>
//       </div>
//     </div>
//   );
// }

// export default Myorder;



import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Myorder() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const latestOrder = orders[orders.length - 1];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // ✅ Cancel Order (mark as cancelled)
  const handleCancelOrder = () => {
    const updatedOrders = orders.map((order, index) => {
      if (index === orders.length - 1) {
        return { ...order, status: "cancelled" };
      }
      return order;
    });

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="mine">
      <h2>My Order</h2>

      <div className="account-container">
        <div className="sidebar">
          <button onClick={() => navigate("/myaccount")}>
            Personal Information
          </button>
          <button className="active" onClick={() => navigate("/myorder")}>
            My Order
          </button>
          <button onClick={() => navigate("/password")}>
            Password Manager
          </button>
          <button onClick={() => navigate("/logout")}>Logout</button>
        </div>

        <div className="desk">
          {latestOrder ? (
            <div>
              <h3>Order ID: {latestOrder.orderId}</h3>

              {/* Products */}
              {latestOrder.cartItems.map((item, i) => (
                <div key={i} className="cartrow">
                  <img src={item.image} alt="" className="cart-img" />
                  <p>{item.title}</p>
                  <p>₹{item.price * item.qty}</p>
                </div>
              ))}

              {/* ✅ Order Summary */}
              <div className="summary">
                <p>Discount: -₹{latestOrder.discount}</p>
                <h3>Total Paid: ₹{latestOrder.amount}</h3>
              </div>
            </div>
          ) : (
            <p>No Orders Found</p>
          )}
        </div>
      </div>

      {/* ✅ Dynamic Status */}
      {latestOrder && (
        <div className="accept">
          <button>
            {latestOrder.status === "cancelled"
              ? "Cancelled ❌"
              : "Accepted "}
          </button>

          <p>
            {latestOrder.status === "cancelled"
              ? "Your order has been cancelled"
              : "Your order has been accepted"}
          </p>
        </div>
      )}

      {/* Actions */}
      {latestOrder && latestOrder.status !== "cancelled" && (
        <div className="into">
          <button
            className="duty"
            onClick={() =>
              navigate("/tracking", { state: latestOrder })
            }
          >
            Track Order
          </button>

          <button
            onClick={() =>
              navigate("/invoice", { state: latestOrder })
            }
          >
            Invoice
          </button>

          {/* ✅ Cancel Button */}
          <button onClick={handleCancelOrder}>
            Cancel Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Myorder;

