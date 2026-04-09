import "./index.css";
import call from "../assets/images/call.png";
import email from "../assets/images/email.png";
import hours from "../assets/images/hours.png";
import show from "../assets/images/show.png";




function Contact() {
  return (
    <div className="gallery">
        <div className="heads">
        <h2>Contact us from casino</h2>
        <p>We are here to help you make your house feel like home.</p>
        <p>Whether you have questions about a product need help with your order or simply want advice on styling your space - our team is ready to assist.</p>
    </div>
<div className="call">
        <div>
            <img src={call}></img>
            <h4>Call Us</h4>
            <p>91 9876543210</p>
        </div>
        <div>
            <img src={email}></img>
            <h4>Email Us</h4>
            <p>support@yourfurniturestore.com</p>
        </div>
        <div>
            <img src={hours}></img>
            <h4>Customer Support Hours</h4>
            <p>Monday - Saturday (9.00 am to 6.00 pm)</p>
            <p>Sunday - Closed</p>
        </div>
</div>
    <div className="store">
        <div>
            <img src={show}></img>
        </div>
        <div className="city">
            <h3>Showroom</h3>
            <p>Your furniture store<br></br>123 Home street<br></br>Design city,IN 600001<br></br></p>
        </div>
         <div>
            <img src={show}></img>
        </div>
        <div className="city">
            <h3>Connect with us on social media</h3>
            <p>Youtube | Facebook | Google</p>
        </div>
</div>
    </div>
  )
}



  export default Contact;