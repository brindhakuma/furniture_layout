// import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Navbar from "./components/Navbar";
// import Index from "./pages/Index";
// import "./index.css";
// import Blogs from "./pages/Blogs";
// import Gallery from "./pages/Gallery";
// import Aboutus from "./pages/Aboutus";
// import Contact from "./pages/Contact";
// import Myaccount from "./pages/Myaccount";
// import Password from "./pages/Password";
// import Logout from "./pages/Logout";
// import Checkout from "./pages/Checkout";
// import Payment from "./pages/Payment";
// import Myorder from "./pages/Myorder";
// import Invoice from "./pages/Invoice";
// import Tracking from "./pages/Tracking";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Stars from "./pages/Stars";

// function App() {
//     const location = useLocation(); 
//     const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

//   return (
//      <>
//       {!hideNavbar && <Navbar />}
//     <BrowserRouter>
//      <Navbar />
   
//       <Routes>
//          <Route path="/" element={<Index />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/myaccount" element={<Myaccount />} />
//         <Route path="/password" element={<Password />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/myorder" element={<Myorder />} />
//         <Route path="/invoice" element={<Invoice />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/stars/:id" element={<Stars />} />
//       </Routes>
//         <Footer />
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import "./index.css";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Myaccount from "./pages/Myaccount";
import Password from "./pages/Password";
import Logout from "./pages/Logout";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Myorder from "./pages/Myorder";
import Invoice from "./pages/Invoice";
import Tracking from "./pages/Tracking";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stars from "./pages/Stars";
import Whislist from "./pages/Whislist";


// Wrap the app content in a separate component so we can use useLocation
function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/password" element={<Password />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stars/:id" element={<Stars />} />
         <Route path="/whislist/:id" element={<Whislist />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;