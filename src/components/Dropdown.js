
import '../App.css';
import React, { useState } from 'react';
import Filterblock from './Filterblock';
export default function Dropdown(props) {
    const[mode,setMode]= useState('light');
    const[on1,setOn1]=useState(0);
  
    const[items,setItems]=useState([
      {
        name: "name1",
        match: false
      },
      {
        name: "name2",
        match: false
      }
    ])

    const handleit=()=>{
      if(on1){
        setOn1(0)
      }
      else{
        setOn1(1)
      }
  }
    
  return (
    <>
    
      <h2 className="heading">Recruiter Dashboard</h2>
      <div className="arrang">
        <div className="dropdown" id="dropdown1">
          
          <button onClick={handleit}> <h4 classname="career" >Select Career</h4> </button>
          { on1 ? <Filterblock items={items} setItem={setItems} handleit={handleit}/>: null }
        
          
     

        </div>
         <div className="dropdown" id="dropdown2">
          
        <button onClick={handleit}> <h4 class="college">College Year</h4> </button>
         
        </div>
        <div className="dropdown" id="dropdown3">
        <button onClick={handleit}> <h4 class="location">Location</h4> </button>
         
          
          
        </div> 
      </div>
    </>
  );
}
