// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (location.state) {
//       setProduct(location.state);
//     } else {
//       axios
//         .get(`https://sydneyremo.pythonanywhere.com/products/${id}/`)
//   //       .then((res) => setProduct(res.data));
//   //   }
//   // }, [id, location.state]);
//             .then((res) => {
//         console.log("API Response:", res.data);
//         setProduct(res.data);
//       })
//       .catch(err => console.log("API Error:", err));
//   }
// }, [id, location.state]);
//   if (!product) return <h2>Loading...</h2>;

//   const addToCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     navigate("/cart");
//   };

//   return (
//     <div className="pdw-container">

//       <h2 className="pdw-title">Product Details</h2>

//       {/* Header */}
//       <div className="pdw-header">
//         <p>Product</p>
//         <p>Name</p>
//         <p>Price</p>
//         <p>Date Added</p>
//         <p>Stock Status</p>
//         <p></p>
//       </div>

//       {/* Single Row */}
//       <div className="pdw-row">

//         <img src={product.image} alt="" className="pdw-img" />

//         <p>{product.title}</p>

//         <p>₹{product.price}</p>

//         <p>{new Date().toLocaleDateString()}</p>

//         <p className="pdw-stock">In Stock</p>

//         <button className="pdw-btn" onClick={addToCart}>
//           Add to Cart
//         </button>

//       </div>

//     </div>
//   );
// }

// export default ProductDetails;















import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "https://sydneyremo.pythonanywhere.com";

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
      setLoading(false);
    } else {
      axios
        .get(`${BASE_URL}/api/products/${id}/`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setError("Failed to load product");
          setLoading(false);
        });
    }
  }, [id, location.state]);

  if (loading) return <h2>Loading product...</h2>;
  if (error) return <h2>{error}</h2>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${BASE_URL}${product.image}`
    : "/placeholder.png";

  return (
    <div className="pdw-container">
      <h2 className="pdw-title">Product Details</h2>
      <div className="pdw-header">
        <p>Product</p>
        <p>Name</p>
        <p>Price</p>
        <p>Date Added</p>
        <p>Stock Status</p>
        <p></p>
      </div>
      <div className="pdw-row">
        <img src={imageUrl} alt={product.title} className="pdw-img" />
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

export default ProductDetails;
