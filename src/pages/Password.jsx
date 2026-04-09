import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Password() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  // handle update password
  const handleUpdate = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setMessage("❌ Please fill all fields");
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setMessage("❌ New password and confirm password do not match");
      return;
    }

    // Save to localStorage (for demo purposes)
    localStorage.setItem("password", passwords.new);
    setMessage("✅ Password updated successfully!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="account-container">
      
      <div className="sidebar">
        <button  onClick={() => navigate("/myaccount")}>Personal Information</button>
        <button  onClick={() => navigate("/myorder")}>My Order</button>
        <button className="active" onClick={() => navigate("/password")}>Password Manager</button>
        <button onClick={() => navigate("/logout")}>Logout</button>
      </div>

    
      <div className="account-content">
        <div className="header">
          <h2 style={{marginTop:"50px"}}>Password Manager</h2>
        </div>

        <div className="form">
          <div className="field full">
            <label>Current Password*</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label>New Password*</label>
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label>Confirm Password*</label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handleChange}
            />
          </div>

          {message && (
            <p style={{ color: message.includes("✅") ? "green" : "red", textAlign: "center" }}>
              {message}
            </p>
          )}

          <div className="btn-container">
            <button className="update-btn" onClick={handleUpdate}>
              Update Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;