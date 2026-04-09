import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import newdining from "../assets/images/newdining.png";
import shippingIcon from "../assets/images/shipping.png";
import paymentIcon from "../assets/images/payment.png";
import supportIcon from "../assets/images/support.png";
import client from "../assets/images/client.png";
import scroll from "../assets/images/scroll.png";
import rate from "../assets/images/rate.png";
import free from "../assets/images/free.png";
import set from "../assets/images/set.png";
import wait from "../assets/images/wait.png";
import live from "../assets/images/live.png";
import home from "../assets/images/home.png";
import tour from "../assets/images/tour.png";

function Index() {
    const navigate = useNavigate();
    const items = [
    { title: "Teak Coffee Table", desc: "Crafted from solid teak wood", price: 8000, image: live },
    { title: "Classic Chair", desc: "Comfortable chair for your living room", price: 3000, image: home },
    { title: "Luxury Sofa", desc: "Elegant 3-seater sofa", price: 15000, image: tour }
  ];

  
  const [liked, setLiked] = useState(items.map(() => false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="left">
          <p className="tag">The Best Online Furniture Store</p>

          <h1>
            <span className="blink-text">Explore Our</span> Modern <br />
            <span>Furniture collection</span>
          </h1>

          <div className="buttons">
            <button className="shop">Shop now →</button>
            <p className="enquiry">Enquiry Furniture</p>
          </div>

          <div className="rating">
            <div>
            <img src={rate}></img></div>
            <div>
            <b>4.9k Ratings+</b><br></br>
            <span>Trusted by 50k customers</span></div>
          </div>
        </div>

        <div className="right">
          <img src={newdining} alt="furniture" />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h1>Why Choose Us</h1>
        <div className="features">
          <div>
            <div className="rule">
            <img src={shippingIcon} />
            <h4>Free Shipping</h4></div>
            <p className="grays">Free shipping for order above Rs.500</p>
          </div>
          <div>
            <div className="rule">
            <img src={paymentIcon} />
            <h4>Flexible payments</h4></div>
            <p className="grays">Multiple secure payment options</p>
          </div>
          <div>
            <div className="rule">
            <img src={supportIcon} />
            <h4>24 x 7 Support</h4></div>
            <p className="grays">We support online all days</p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
    
        <h2>Our product collections</h2>

        <div className="tabs">
          <button>All Products</button>
          <button className="active">Latest products</button>
          <button>Featured products</button>
          <button>Best sellers</button>
        </div>


     <div className="products">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={item.image} alt={item.title} />
            <span
              className="heart"
              onClick={() => toggleLike(index)}
              style={{ cursor: "pointer", color: liked[index] ? "red" : "black" }}
            >
              {liked[index] ? "♥" : "♡"}
            </span>
          </div>
          <h3>{item.title}</h3>
          <p className="desc">{item.desc}</p>
          <p className="price">Rs.{item.price}</p>
          <div className="actions">
            <button className="shop-btn">Shop now</button>
            <span className="add-cart" onClick={() => navigate(`/whislist/${item.id}`, { state: item })}>🛒 Add</span>
          </div>
          <div className="ratings">★★★★★</div>
        </div>
      ))}
    </div>
  



      </section>


      <section className="clients-feedback">
  <h2>Our Clients Feedback</h2>
  <div className="underline-orange"></div>

  <div className="feedback-slider">
    <div className="feedback-track">
      
      {[1,2,3,4,5,6,1,2,3,4,5,6].map((item, index) => (
        <div className="feedback-card" key={index}>
          <img src={client} alt="Client" />
          
          <div className="names">
            <img src={scroll} alt="" />
            <h4>Aaron</h4>
            <p>
              "Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit."
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* FAQ SECTION */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="underline yellow"></div>
        <div className="faq-items">
          {[
            "Do you offer free delivery?",
            "How long will it take to receive my order?",
            "Can I return or exchange furniture after purchase?",
            "Is installation included with the purchase?",
            "How can I contact customer support?"
          ].map((question, index) => (
            <details key={index}>
              <summary>{question}</summary>
              <p>Yes, we proudly offer free delivery on select products, making it easier for you to enjoy your furniture without worrying about additional shipping costs.</p>
            </details>
          ))}
        </div>
      </section>
<div className="wish">
<div className="choice">
          <div>
            <img src={free}></img>
          </div>
          <div>
            <h3>Free Shipping
            <br></br><small>Free shipping on all your order</small></h3>
            </div>
            </div>
            <div className="choice">
          <div>
            <img src={set}></img>
          </div>
          <div>
            <h3>Secure Payment
            <br></br><small>We ensure your money is save</small></h3>
            </div>
            </div>
            <div className="choice">
          <div>
            <img src={wait}></img>
          </div>
          <div>
            <h3>24/7 customer support
            <br></br><small>Free shipping on all your order</small></h3>
            </div>
            </div>
</div>
    </div>
  );
}


export default Index;