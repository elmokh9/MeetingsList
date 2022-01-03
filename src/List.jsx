import React from 'react';
import "./list.css";



const List = (props) => {
  
  return (
    <div className="cardEl" onClick={props.onPressed}>
      <h3 id="name" >{props.data.name}</h3>
      <h4 id="age">{props.data.age}</h4>
      <img src={props.data.image} alt="image"></img>
    </div>
  );
};


export default List;
