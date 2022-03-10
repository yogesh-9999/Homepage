import React, { useState } from "react";
import "./App1.css";
export default function Filterblock({ items,handleit}) {
  const filterHandler = () => {};

  return (
    <div id="lala">
      <div className="first">
        <input className="one1" type="radio" /> Fullstack Developer
        <div className="firc">
          <span ><input className="mar" type="checkbox" name="Software development lifecycle" />
          Software development lifecycle</span><br/>
          <span > <input className="mar" type="checkbox" name="Programming" />
          Programming</span><br/>
          <span ><input className="mar" type="checkbox" name="Mobile app development" />
          Mobile app development</span><br/>
          <span ><input className="mar" type="checkbox" name="Github version control" />
          Github version control</span><br/>
         
          
          
          <span > <input className="mar" type="checkbox" name="Backend" />
          Backend</span><br/>
        </div>
      </div>

      <div className="first">
        <input className="one1" type="radio" /> UX Designer
        <div className="firc">
          <span><input className="mar" type="checkbox" name="Designer" />
          Designer</span><br/>
          <span><input className="mar" type="checkbox" name="Wireframing" />
          Wireframing</span><br/>
          <span> <input className="mar" type="checkbox" name="Figma" />
          Figma</span><br/>
          <span> <input className="mar" type="checkbox" name="Problem Solving" />
          Problem Solving</span><br/>
        </div>
        <div className="btnfamily">
        <button id="uniq1">clear</button>
        <button id="uniq2" onclick={handleit}>Apply</button>     
        </div>
      </div>
      

      {/* {filteredItems.map(item => <div key={item.name}> {item.name} </div>)} */}
    </div>
  );
}
// class={props.mode==='light'?'dark':'light'}
