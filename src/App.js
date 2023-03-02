import React from 'react';
import "./index";
import "./index.css";
import "./alpay-picture";



function App() {
  const greet = 'Hello';
  const ownerName = 'Alpay';
  const myImg = document.querySelector("img")
  myImg.src ="alpay-picture.jpg";
  return <div>Whatsup {greet} {ownerName}<br/>
  
  </div>;
}

export default App;
