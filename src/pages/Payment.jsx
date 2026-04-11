// import "./index.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// function    Payment() {
//      const [cart, setCart] = useState([]);
//      const [paymentSuccess, setPaymentSuccess] = useState(null);
//      const navigate = useNavigate();
//       useEffect(() => {
//         let data = JSON.parse(localStorage.getItem("cart")) || [];
    
//         // 👉 add quantity if not present
//         const updatedData = data.map(item => ({
//           ...item,
//           qty: item.qty || 1
//         }));
    
//         setCart(updatedData);
//       }, []);

//       useEffect(() => {
//   if (paymentSuccess) {
//     navigate("/invoice", { state: paymentSuccess });
//   }
// }, [paymentSuccess]);

//     const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const handlePayment = async () => {
//     try {

//       const res = await fetch("https://sydneyremo.pythonanywhere.com/create-order/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//       },
//         body: JSON.stringify({ amount: total })
//     });

//       const data = await res.json();

//       console.log("TOTAL:", total);
//       console.log("ORDER DATA:", data);
//       const options = {
//         key: "rzp_test_Sb1t8YhKEyuXxF", // your key
//         amount: data.amount,
//         currency: "INR",
//         order_id: data.id,   // 👈 from backend

//         name: "My Store",   // ✅ ADD THIS
//         description: "Test Transaction",

//         prefill: {
//           name: "User",
//           email: "test@test.com",
//           contact: "9999999999"
//   },


//   handler: function (response) {
//   alert("Payment Successful ✅");

//   const orderData = {
//     paymentId: response.razorpay_payment_id,
//     orderId: response.razorpay_order_id,
//     amount: total,
//     cartItems: cart
//   };


//   let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
//   existingOrders.push(orderData);
//   localStorage.setItem("orders", JSON.stringify(existingOrders));
//   localStorage.removeItem("cart");
//   setPaymentSuccess(orderData);
// },
    
  

//       theme: {
//         color: "#f37254"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.on("payment.failed", function (response) {
//   console.log("FAILED ERROR FULL:", response);
//   alert(response.error.description);
// });
//     rzp.open();

//   } catch (error) {
//     console.log(error);
//     alert("Payment failed");
//   }
// };
//   return (
//     <div>
//         <div className="fragrance">
//          <div className="checking">
//         <div>
//             <input type="radio" onClick={() => navigate("/home")}></input>
//             <label>Cards</label>
//         </div>
//          <div>
//             <input type="radio" onClick={() => navigate("/checkout")}></input>
//             <label>Checkout Page</label>
//         </div>
//          <div>
//             <input type="radio"></input>
//             <label>Payment page</label>
//         </div>
//         </div> 
//         </div>

//     <div className="tally">
//         <div className="application">
//          <div className="summary-box">

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

//           </div>
//     </div>

//         <div className="law">
//             <h3>Payment Page</h3>
//             <h4>Select payment</h4>
//             <button onClick={handlePayment}>Pay</button>
//         </div>
// </div>

//     </div>
//   )
// }


// export default Payment;

import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function    Payment() {
     const [cart, setCart] = useState([]);
     const [paymentSuccess, setPaymentSuccess] = useState(null);
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
  if (paymentSuccess) {
    navigate("/invoice", { state: paymentSuccess });
  }
}, [paymentSuccess]);

  //   const total = cart.reduce(
  //   (sum, item) => sum + item.price * item.qty,
  //   0
  // );
  const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

const discount = Number(localStorage.getItem("discount")) || 0;

// ✅ FINAL amount
const finalAmount = location.state?.total || (cartTotal - discount);

  const handlePayment = async () => {
    try {

      const res = await fetch("https://sydneyremo.pythonanywhere.com/create-order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({ amount: finalAmount })
    });

      const data = await res.json();

      console.log("TOTAL:", finalAmount);
      console.log("ORDER DATA:", data);
      const options = {
        key: "rzp_test_Sb1t8YhKEyuXxF", // your key
        amount: data.amount,
        currency: "INR",
        order_id: data.id,   // 👈 from backend

        name: "My Store",   // ✅ ADD THIS
        description: "Test Transaction",

        prefill: {
          name: "User",
          email: "test@test.com",
          contact: "9999999999"
  },


  handler: function (response) {
  alert("Payment Successful ✅");

  const orderData = {
    paymentId: response.razorpay_payment_id,
    orderId: response.razorpay_order_id,
    amount: finalAmount,
    cartItems: cart
  };
  localStorage.removeItem("discount");


  let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  existingOrders.push(orderData);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
  localStorage.removeItem("cart");
  setPaymentSuccess(orderData);
},
    
  

      theme: {
        color: "#f37254"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
  console.log("FAILED ERROR FULL:", response);
  alert(response.error.description);
});
    rzp.open();

  } catch (error) {
    console.log(error);
    alert("Payment failed");
  }
};
  return (
    <div>
        <div className="fragrance">
         <div className="checking">
        <div>
            <input type="radio" onClick={() => navigate("/home")}></input>
            <label>Cards</label>
        </div>
         <div>
            <input type="radio" onClick={() => navigate("/checkout")}></input>
            <label>Checkout Page</label>
        </div>
         <div>
            <input type="radio"></input>
            <label>Payment page</label>
        </div>
        </div> 
        </div>

    <div className="tally">
        <div className="application">
         <div className="summary-box">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{finalAmount}</span>
          </div>

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
            <strong>₹{finalAmount}</strong>
          </div>

          </div>
    </div>

        <div className="law">
            <h3>Payment Page</h3>
            <h4>Select payment</h4>
            <button onClick={handlePayment}>Pay</button>
        </div>
</div>

    </div>
  )
}


export default Payment;

