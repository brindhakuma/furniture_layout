import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../assets/images/notify.png";
import cart from "../assets/images/cart.png"
import heart from "../assets/images/heart.png"
import frame from "../assets/images/frame.png"
import logo from "../assets/images/logo.png"



function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "15px",
      background:"#eceae2",
      minWidth:"1250px",
      fontFamily: "'Open Sans', sans-serif" ,
    }}>
      
      <div style={{display: "flex",justifyContent:"space-around",gap :"105px"}}>
        <div>
         <img src={logo} width="50"></img>
         </div>

         <div style={{gap :"35px",display: "flex"}}>
        <Link to="/" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>Home</Link>
        <Link to="/blogs" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>Blogs</Link>

        <Link to="/gallery" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>Gallery</Link>

        <Link to="/home" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>Categories</Link>
        <Link to="/aboutus" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>About Us</Link>
        <Link to="/contact" style={{fontSize:"25px",color:"black",fontWeight:"550",textDecoration:"none"}}>Contact</Link>
</div>

   
        {/* <img src={notify} width="40" style={{height:"35px",borderRadius:"50%",cursor:"pointer",background:"white",color:"yellow"}}></img> */}
        <div style={{gap :"35px", display:"flex", position:"relative"}}>
          {/* 🔔 Notification Bell */}
          <img 
            src={notify} 
            width="40" 
            style={{height:"35px", borderRadius:"50%", cursor:"pointer", background:"white"}} 
            onClick={() => setShowNotif(!showNotif)}
            alt="Notifications"
          />
         {showNotif && (
            <div style={{
              position: "absolute",
              top: "45px",
              right: "140px",
              width: "300px",
              backgroundColor: "orange",
              border: "1px solid #ddd",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              zIndex: 100,
              padding: "15px"
            }}>
              <h4 style={{marginBottom: "10px"}}>Notifications</h4>
              <div style={{borderBottom: "1px solid #eee", paddingBottom:"10px", marginBottom:"10px"}}>
                <p style={{margin:0, fontWeight:"500"}}>New Order Received</p>
                <small>Your order #1234 has been shipped</small>
              </div>
              
              <div>
                <p style={{margin:0, fontWeight:"500"}}>Promotion</p>
                <small>Get 20% off on your next purchase!</small>
              </div>
            </div>
            
          )}

        <Link to="/cart">  <img src={cart} width="40" style={{height:"35px",borderRadius:"50%",cursor:"pointer",background:"white",color:"yellow"}}></img></Link>
        <Link to="/whislist/2/"><img src={heart} width="40" style={{height:"35px",borderRadius:"50%",cursor:"pointer",background:"white",color:"yellow"}}></img></Link>
        <div className="profile-container" style={{position:"relative"}}>
  <img 
    src={frame} 
    width="40" 
    style={{height:"35px", borderRadius:"50%", cursor:"pointer", background:"white"}} 
    onClick={() => setShowProfile(!showProfile)} 
  />
  
  {showProfile && (
    <div className="profile-box" style={{
      position: "absolute",
      top: "45px",
      right: 0,
      backgroundColor: "orange",
      border: "1px solid #ddd",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      width: "250px",
      zIndex: 100,
      padding: "10px"
    }}>
      <h2 style={{padding:"8px", cursor:"pointer"}} onClick={() => navigate("/myaccount")}>My Account</h2>
       <p style={{padding:"8px", cursor:"pointer"}} onClick={() => navigate("/myaccount")}>Personal Information</p>
      <p style={{padding:"8px", cursor:"pointer"}} onClick={() => navigate("/myorder")}>My Orders</p>
       <p style={{padding:"8px", cursor:"pointer"}} onClick={() => navigate("/password")}>Password Manager</p>
      
      <p style={{padding:"8px", cursor:"pointer"}} onClick={() => {
        localStorage.removeItem("token");
        navigate("/logout");
      }}>Logout</p>
    </div>
  )}
</div>
    </div>
      </div>
    </nav>

  );
}


export default Navbar;