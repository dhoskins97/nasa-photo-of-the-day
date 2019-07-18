import React, { useState , useEffect } from "react";
import "./App.scss";
import Component from "./Component.js";
import axios from "axios";

function App() {
  
  const [apodObject, setApodObject] = useState({});

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then( res => {
      setApodObject(res.data)
    })
  }, [])
  
  return (
    <div className="App">
      <Component title={apodObject.title} url={apodObject.url} explanation={apodObject.explanation} />
    </div>
  );
}

export default App;