// import { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";


// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/products/")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);
//   const navigate = useNavigate();
//   const shopnow = (item) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));
    
//     navigate("/cart");
//   };

//   return (
//     <div className="furn-root">
//       <h1 className="furn-heading">Categories Our Furniture</h1>

//       <div className="furn-grid">
//         {products.map((item) => (
//           <div key={item.id} className="furn-card">

//             {/* Wishlist */}
//             <FaHeart className="furn-wish" />

//             {/* Image */}
//             <img src={item.image} onClick={() => navigate(`/stars/${item.id}`, { state: item })}  alt={item.title} className="furn-img" />

//             {/* Content */}
//             <h2 className="furn-title">{item.title}</h2>

//             <p className="furn-desc">
//               {item.description || "Premium quality furniture for your home."}
//             </p>

//             <p className="furn-price">₹{item.price}</p>

//             {/* Actions */}
//             <div className="furn-actions">
              
//                 <button className="furn-shop-btn"  onClick={() => shopnow(item)}>Shop now</button>
              

//             {/* <Link to={`/product/${item.id}`}>
//               <button className="furn-cart-btn">
//                 <FaShoppingCart /> Add
//               </button>
//               </Link> */}
//               <button
//   className="furn-cart-btn"
//   onClick={() => {
//     navigate(`/product/${item.id}`, { state: item });  // 👈 pass product
//   }}
// >
//   <FaShoppingCart /> Add
// </button>
//             </div>

        
          
//             <div className="furn-stars" 
//      style={{cursor: "pointer"}}
//      onClick={() => navigate(`/stars/${item.id}`, { state: item })}>
//   {[...Array(5)].map((_, i) => (
//     <FaStar key={i} />
//   ))}
// </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;









import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = "https://sydneyremo.pythonanywhere.com";

  // Fetch products from deployed backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  // Add product to cart
  const shopNow = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, qty: 1 }); // add qty for future cart handling
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  if (!products.length) return <h2 style={{ textAlign: "center" }}>No products found.</h2>;

  return (
    <div className="furn-root">
      <h1 className="furn-heading">Categories Our Furniture</h1>

      <div className="furn-grid">
        {products.map((item) => {
          const imageUrl = item.image
            ? item.image.startsWith("http")
              ? item.image
              : `${BASE_URL}${item.image}`
            : "/placeholder.png";

          return (
            <div key={item.id} className="furn-card">

              {/* Wishlist */}
              <FaHeart className="furn-wish" />

              {/* Product Image */}
              <img
                src={imageUrl}
                onClick={() => navigate(`/stars/${item.id}`, { state: item })}
                alt={item.title}
                className="furn-img"
              />

              {/* Product Info */}
              <h2 className="furn-title">{item.title}</h2>
              <p className="furn-desc">
                {item.description || "Premium quality furniture for your home."}
              </p>
              <p className="furn-price">₹{item.price}</p>

              {/* Actions */}
              <div className="furn-actions">
                <button className="furn-shop-btn" onClick={() => shopNow(item)}>
                  Shop now
                </button>

                <button
                  className="furn-cart-btn"
                  onClick={() => navigate(`/product/${item.id}`, { state: item })}
                >
                  <FaShoppingCart /> Add
                </button>
              </div>

              {/* Star Ratings (static 5 stars for now) */}
              <div
                className="furn-stars"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/stars/${item.id}`, { state: item })}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
