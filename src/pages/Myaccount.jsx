import "./index.css";
import frame from "../assets/images/frame.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Myaccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "John",
    last_name: "Althaf",
    email: "john@example.com",
    phone: "7867980688",
    gender: "Male",
  });

  // Load from localStorage if available
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="account-container">
      <div className="sidebar">
        <button className="active" onClick={() => navigate("/myaccount")}>Personal Information</button>
        <button onClick={() => navigate("/myorder")}>My Order</button>
        <button onClick={() => navigate("/password")}>Password Manager</button>
        <button onClick={() => navigate("/logout")}>Logout</button>
      </div>

      <div className="account-content">
        <div className="header">
          <h2 style={{marginTop:"50px"}}>My Account</h2>
          <img src={frame} alt="profile" className="profile-img" />
        </div>

        <div className="form">
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field full">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className="field full">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={user.gender}
              onChange={handleChange}
            />
          </div>

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

export default Myaccount;