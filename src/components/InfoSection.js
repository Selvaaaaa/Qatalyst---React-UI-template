import React from "react";
import "./InfoSection.css";
import logo from "./Assests/logo.svg" 
import disney from './Assests/Disney.png'
import kfc from "./Assests/kfc.png"
import acc from "./Assests/accenturelogo.png"
import amazon from "./Assests/amazon.png"
import prototype from "./Assests/prototype.png"
import personal from "./Assests/personal.png"
import drag from "./Assests/drag.png"

function InfoSection() {
  return (
    <div className="info-section">
      <div class='logo'>
    <img src={logo} alt="logo"  id="logo"></img>
    </div>
      <h1>Harnessing user insights for  accelerated <br/> product innovation</h1>
      
          <div className="cards">
        <div className="card">
          <img id="prototype" src={prototype} alt="Prototype" />
         
        </div>
        <div  className="card">
          <img id="personal" src={personal} alt="Insights" />
        
        </div>
        <div  className="card">
          <img id="Drag" src={drag} alt="Feedback" />
          
        </div>
      </div>
      <div className="partners">
        <p>Partnered with the best:</p>
        <div className="brand">
        <img src={amazon} alt="amazonlogo" />
        <img src={kfc} alt="kfclogo" />
        <img src={acc} alt="asslogo" />
        <img src={disney} alt="disneylogo" />

        </div>
      </div>
    </div>
  );
}

export default InfoSection;
