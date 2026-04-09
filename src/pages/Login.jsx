import { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Frontend validation
    if (!data.email || !data.password) {
      alert("Please enter both username and password");
      return;
    }

    try {
      const res = await axios.post('https://sydneyremo.pythonanywhere.com/api/login/', data);

      localStorage.setItem("token", res.data.access);
      alert(`Welcome ${res.data.message}`);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Invalid credentials");
      } else {
        alert("Server error");
      }
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-box">
        <span className="close">×</span>
        <h2>Register Free!</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <div className="login-actions">
          <button onClick={handleSubmit}>Login</button>
          <p>Forget your password?</p>
        </div>

        <div className="divider">
          <span></span>
          <p>Sign Up Using</p>
          <span></span>
        </div>

        <div className="socials">
          <span><img src={google} alt="google"/></span>
          <span><img src={facebook} alt="facebook"/></span>
          <span><img src={instagram} alt="instagram"/></span>
          <span><img src={twitter} alt="twitter"/></span>
        </div>

        <p className="bottom-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Create New Account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;