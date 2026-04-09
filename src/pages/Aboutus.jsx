import "./index.css";
import quality from "../assets/images/quality.png";
import glass from "../assets/images/glass.png";
import leaf from "../assets/images/leaf.png";
import remote from "../assets/images/remote.png";

function Aboutus() {
  return (
    <div className="about">
        <h1 className="abouthead">About us for our casino</h1>
        <div className="flower">
        <div className="qualityimg">
            <img src={quality}></img>
        </div>
        <div className="pass">
            <h3>Welcome to a better way to furnish our home</h3>
            <p>We are a passionate team of furniture enthusiasts dedicated to bringing you thoughtfully designed high quality pieces.</p>
        </div>
        </div>

        <div className="full">
            <p>At [Furniture Casino],we believe that your home should reflect who you are - comfortable,stylish and full of character.We are passinate team of furniture enthusiast dedicated to bring you thoughtfully designed high quality pieces that transform every space into something truly special.</p>
        </div>

<div className="design">
    <div className="float">
        <div>
            <img src={remote}></img>
        </div>
        <div>
            <i>Our Philosophy</i>
            <p>We believe furniture should do more than fill a sspace - it should inspire.That's why everry piece we offer combines function,form and feeling.Whether you are furnishing a cozy apartment or designing your dream home,we aim to help you express your personal style efforlessly.</p>
        </div>
</div>

        
    <div className="float">
        <div>
            <img src={glass}></img>
        </div>
        <div>
            <i>Our Philosophy</i>
            <p>We believe furniture should do more than fill a sspace - it should inspire.That's why everry piece we offer combines function,form and feeling.Whether you are furnishing a cozy apartment or designing your dream home,we aim to help you express your personal style efforlessly.</p>
        </div>
</div>
        
    <div className="float">
        <div>
            <img src={leaf}></img>
        </div>
        <div>
            <i>Our Philosophy</i>
            <p>We believe furniture should do more than fill a sspace - it should inspire.That's why everry piece we offer combines function,form and feeling.Whether you are furnishing a cozy apartment or designing your dream home,we aim to help you express your personal style efforlessly.</p>
        </div>
    </div>
</div>
    
</div>
  )
}


  export default Aboutus;