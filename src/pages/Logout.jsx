import "./index.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    
    <div className="account-container">
      
      {/* Left Menu */}
      <div className="sidebar">
        <button  onClick={() => navigate("/myaccount")}>Personal Information</button>
        <button onClick={() => navigate("/myorder")}>My Order</button>
        <button onClick={() => navigate("/password")}>Password Manager</button>
        <button className="active" onClick={() => navigate("/logout")}>Logout</button>
      </div>

      {/* Right Content */}
      <div className="account-content">
        
        <div className="header">
          <h2>My Account</h2>
          
        </div>

        <div className="forms">

            <p className="log">Log Out</p>
            <p className="out">Are you sure you want to logout?</p>
          <div className="btn-container">
            <button className="update-btn" onClick={() => navigate("/login")}>Yes,Logout</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Logout;