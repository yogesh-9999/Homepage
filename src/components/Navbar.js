import React from "react";
import Image from './imag.png';
export default function Todo() {
    return (
      
     <header>
      <nav className="navi">
       
          <img src = {Image} />
          <div>
          <li className="item">ASSIGNMENTS</li>
          <li className="item">CONTACT US</li>
          <li className="item">INTERNSHIP</li>
          <li className="item">ABOUT US</li>
          </div>
        
      </nav>
      </header>
      
    );
  }
  