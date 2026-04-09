import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
  const navigate = useNavigate();
  const shopnow = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    navigate("/cart");
  };

  return (
    <div className="furn-root">
      <h1 className="furn-heading">Categories Our Furniture</h1>

      <div className="furn-grid">
        {products.map((item) => (
          <div key={item.id} className="furn-card">

            {/* Wishlist */}
            <FaHeart className="furn-wish" />

            {/* Image */}
            <img src={item.image} onClick={() => navigate(`/stars/${item.id}`, { state: item })}  alt={item.title} className="furn-img" />

            {/* Content */}
            <h2 className="furn-title">{item.title}</h2>

            <p className="furn-desc">
              {item.description || "Premium quality furniture for your home."}
            </p>

            <p className="furn-price">₹{item.price}</p>

            {/* Actions */}
            <div className="furn-actions">
              
                <button className="furn-shop-btn"  onClick={() => shopnow(item)}>Shop now</button>
              

            {/* <Link to={`/product/${item.id}`}>
              <button className="furn-cart-btn">
                <FaShoppingCart /> Add
              </button>
              </Link> */}
              <button
  className="furn-cart-btn"
  onClick={() => {
    navigate(`/product/${item.id}`, { state: item });  // 👈 pass product
  }}
>
  <FaShoppingCart /> Add
</button>
            </div>

        
          
            <div className="furn-stars" 
     style={{cursor: "pointer"}}
     onClick={() => navigate(`/stars/${item.id}`, { state: item })}>
  {[...Array(5)].map((_, i) => (
    <FaStar key={i} />
  ))}
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;