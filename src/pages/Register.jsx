import "./index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png"

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // === FRONTEND VALIDATION ===
    const { username, email, password } = data;

    // Validate name (letters and spaces only)
    if (!username || !/^[a-zA-Z ]{2,30}$/.test(username)) {
      alert("Please enter a valid name (letters only)");
      return;
    }

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password (at least 6 characters)
    if (!password || password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const res = await axios.post('https://sydneyremo.pythonanywhere.com/api/register/', data);

      if (res.status === 201 || res.data.message === "User created") {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        alert("Registration failed: " + JSON.stringify(res.data));
      }
    } catch (err) {
      if (err.response && err.response.data) {
        alert("Registration Error: " + JSON.stringify(err.response.data));
      } else {
        alert("Error in registration");
      }
    }
  };

  return (
    <div className="register-container" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>

      <div className="register-box">
        <span className="close">×</span>

        <h2>Sign Up</h2>

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Sign Up</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </p>
      </div>

    </div>
  );
}

export default Register;