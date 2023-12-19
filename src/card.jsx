import React from "react";
import css from './index.css';



    function Cards(props) {
        return  <div className="main">
       
        <div>
        <h2>{props.name}</h2>
        <img  
         src={props.img}
        />
       <p>{props.active}</p> 
       <p>{props.center}</p>
        </div>
        </div>
      }



export default Cards;