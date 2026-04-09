import "./index.css";
import style from "../assets/images/style.png";
import brand from "../assets/images/brand.png";
import care from "../assets/images/care.png";
import guide from "../assets/images/guide.png";
import trend from "../assets/images/trend.png";




function Blogs() {
  return (
    <div className="blogs">
      <div className="headers">
        <h1>Blogs for our casino</h1>
        <button className="tagline">
          Tips, Trends, and Inspiration for Your Dream Home
        </button>
      </div>

      <div className="blog-grid">
        {/* Card 1 */}
        <div className="cardlist">
            <div>
            <img src={care}></img></div>
            <div>
          <h2>Furniture Care & Maintenance</h2>
          <p>How to Clean and Maintain Wooden Furniture</p>
          <p>Best Tips to Keep Your Sofa Looking New for Years</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cardlist">
            <div>
            <img src={style}></img></div>
            <div>
          <h2>Style & Decor Inspiration</h2>
          <p>Scandinavian vs. Modern: What’s Right for Your Home</p>
          <p>10 Living Room Layout Ideas That Actually Work</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="cardlist">
            <div>
            <img src={guide}></img></div>
            <div>
          <h2>Buying Guides</h2>
          <p>How to Choose the Right Dining Table for Your Family</p>
          <p>A Complete Guide to Mattress Types and Comfort Levels</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="cardlist">
            <div>
            <img src={trend}></img></div>
            <div>
          <h2>Trends & Insights</h2>
          <p>2025 Furniture Trends You’ll Want in Your Home</p>
          <p>Why Minimalist Furniture is Still Going Strong</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="brand-section">
        <div>
        <img src={brand}></img></div>
        <div>
        <h2>Behind the Scenes / Brand Stories</h2>
        <p>Meet the Makers: How Our Furniture is Handcrafted</p>
        <p>Our Sustainability Journey</p>
        <p>From Forest to Furniture 2025 Trends</p>
        <p>A Complete Guide to Mattress Types and Comfort Levels</p>
        <p>How to Clean and Maintain Wooden Furniture</p>
        <p>Best Tips to Keep Your Sofa Looking New for Years...</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;