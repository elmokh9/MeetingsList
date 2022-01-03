import React, { useState } from 'react';
import data from './data';
import List from './List';
import Cards from './Cards';
import "./App.css";

function App() { 
  const [listData, setListData] = useState(data);

  function resetData(){
    console.log(listData.length);
    setListData([]);
    console.log(listData.length);
  }

  function del(id){
    console.log(id);
    setListData((prevItems)=>{
      // the items are objects from prevItems
      return prevItems.filter((items, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div id='section'>
      <h1 id='title'> {listData.length} Meetings today</h1>
      {listData.map((value, index)=>{
        console.log(listData)
        return <Cards key = {index} id={index} data = {value} onPressed={del}/>
      })}
      <button onClick={resetData}>Clear All</button>
    </div>
    
  );

}

export default App;
