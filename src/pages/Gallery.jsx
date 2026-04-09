import "./index.css";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";
import six from "../assets/images/six.png";
import seven from "../assets/images/seven.png";

function Gallery() {
  return (
    <div className="gallery">
        <div className="pillow">
        <div>
            <img src={first}></img>
        </div>
        <div>
            <h1>Furniture Gallery</h1>
            <p className="plane">Explore our stylish & comfortable collections</p>
        </div>
        <div>
            <img src={second}></img>
        </div>
</div>

<div className="piece">
    <p>Discover our curated range of premium furniture pieces designed to bring elegance,comfort and functionality to your home.Whether you are looking to refresh your living room,upgrade your bedroom, or create a productive office space, our gallery offers inspiration and top quality craftsmanship.</p>
</div>

    <div className="comfort">
    <div>
        <img src={third}></img>
        <h2>Dining in style</h2>
        <p>Explore our dining tables,chairs,and sideboards<br></br>crafted for comfort and durability</p>
    </div>

     <div>
        <img src={fourth}></img>
        <h2>Storage and shelving</h2>
        <p>Explore our dining tables,chairs,and sideboards<br></br>crafted for comfort and durability</p>
    </div>

     <div>
        <img src={fifth}></img>
        <h2>Bedroom Bliss</h2>
        <p>Explore our dining tables,chairs,and sideboards<br></br>crafted for comfort and durability</p>
    </div>
    </div>

<div className="chairs">
<div className="units">
    <div>
        <img src={six}></img>
    </div>
    <div>
        <h2>Workspace Essentials</h2>
        <p>Ergonomic chairs,functional desks<br></br>and storage units to elevate productivity</p>
    </div>
</div>

<div className="units">
    <div>
        <img src={seven}></img>
    </div>
    <div>
        <h2>Workspace Essentials</h2>
        <p>Ergonomic chairs,functional desks<br></br>and storage units to elevate productivity</p>
    </div>
</div>
</div>


    </div>
  )}

  export default Gallery;