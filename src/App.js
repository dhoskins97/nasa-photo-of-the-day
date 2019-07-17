import React, { useState , useEffect } from "react";
import "./App.scss";
import Component from './Component';
import axios from 'axios';


function App() {
  const [photoObject, setPhotoObject] = useState({});
  useEffect ( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then( (res) => {
      setPhotoObject(res.data)
    })
  }, [])
  return (
    <div className="App">
      <Component url={photoObject.url} title={photoObject.title} explanation={photoObject.explanation} />
    </div>
  );
}

export default App;
