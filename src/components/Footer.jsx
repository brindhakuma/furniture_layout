import logo from "../assets/images/logo.png"
import foot from "../assets/images/foot.png"
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <div className="footing">
    <div className="footlog">
        <img src ={logo}></img><br></br>
        <img src={foot}></img>
    </div>

    <div>
        <ul>
            <li><h4>About Us</h4></li>
            <li>Who we are</li>
            <li>Our mission</li>
            <li>How it works</li>
            <li>Success stories</li>
        </ul>
    </div>
     <div>
        <ul>
            <li><h4>Quick links</h4></li>
            <li>Browse</li>
            <li>Products</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Blog</li>
        </ul>
    </div>
     <div>
        <ul>
            <li><h4>contact & Social</h4></li>
            <li>123,saikstreet,chennai TN </li>
            <li>+91 9876543210</li>
            <li>furn@furniturecadino.com</li>
            <li>@ 2025 furniture casino,All rights reserved</li>
            <li>Terms & conditions | Privacy Policy</li>
        </ul>
    </div>

    <div>
        <h4>Follow Us On:</h4>
        <img src={google}></img>
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
    </div>


    </div>
  )
}

export default Footer;