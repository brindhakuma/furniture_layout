import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Stars() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  if (!product) return <p>Product not found!</p>;

  const handleBuyNow = () => {
    // Get current cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      // If exists, increase quantity
      cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
    } else {
      // Else add new product with qty
      cart.push({ ...product, qty: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Navigate to cart
    navigate("/cart");
  };

  return (
    <div>
      <h2 style={{ marginBottom: "10px", textAlign: "center" }}>{product.title}</h2>

      <div
        className="product-main"
        style={{ display: "flex", gap: "60px", justifyContent: "center", marginTop: "50px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="300"
          style={{ borderRadius: "8px", background: "white" }}
        />
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Price: ₹{product.price}</strong>
          </p>

          <div style={{ display: "flex", gap: "5px", color: "orange", margin: "10px 0" }}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                background: "orange",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={handleBuyNow}
            >
              Buy now
            </button>
            <button
              style={{
                background: "white",
                color: "black",
                padding: "10px 20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={handleBuyNow}
            >
              Addcart+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stars;