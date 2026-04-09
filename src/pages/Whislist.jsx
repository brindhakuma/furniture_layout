import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Whislist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/products/${id}/`)
        .then((res) => setProduct(res.data));
    }
  }, [id, location.state]);

  if (!product) return <h2>Loading...</h2>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="pdw-container">

      <h2 className="pdw-title">Whislist Details</h2>

      {/* Header */}
      <div className="pdw-header">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Date Added</p>
        <p>Stock Status</p>
        <p></p>
      </div>

      {/* Single Row */}
      <div className="pdw-row">

        {/* <img src={product.image} alt="" className="pdw-img" /> */}
        <img src={product.image} alt={product.title} className="pdw-img" />
        <p>{product.title}</p>

        <p>₹{product.price}</p>

        <p>{new Date().toLocaleDateString()}</p>

        <p className="pdw-stock">In Stock</p>

        <button className="pdw-btn" onClick={addToCart}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default Whislist;