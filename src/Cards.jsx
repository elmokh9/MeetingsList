import React from "react";
import "./cards.css";
import data from "./data";
import List from "./List"

function Cards(props){
    console.log(props);
    return(
        <div className="cardEl" onClick={()=>{
            props.onPressed(props.id);
        }}>
            <h3 id="name" >{props.data.name}</h3>
            <h4 id="time">{props.data.age}</h4>
            <img src={props.data.image} alt="image"></img>
        </div>
    )
        
}

export default Cards;