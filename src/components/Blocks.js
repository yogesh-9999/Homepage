import React from 'react'
import Image from './img2.jfif'
export default function Blocks(props) {
  return (
    
        <div classname='card' id='er'>
                    <div id='firstp'>
                        <img src={Image} id='unnes'/>
                        <div className="pair">
                        <h3 id="ux1">Krishnaswamy Subramanium</h3>
                        <h6 id="ux2">Aspiring UX designer</h6>
                        <h6 id="ux3">Aspiring UX designer</h6>
                        <h6 id="ux4">Aspiring UX designer</h6>
                        </div>
                    </div>
                        
                  <hr />
                <div  id='secondp'>
                    <h4 id='firstp2'>Top areas</h4>
                    <div className="pair">
                   <button className="fb" id>Aspiring UX designer</button>
                   <button className="fb">Aspiring UX designer</button>
                   <button className="fb">Aspiring UX designer</button>
               
                   </div> 
                   </div>
                
                
            </div>

    
  )
}
