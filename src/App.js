import React, { useState, useEffect } from "react"; 
import "./App.css";
import PhotoDisplay from "./components/PhotoDisplay";
import Search from "./components/Search";
import axios from "axios";


function App() {
  //slice of state here for data
  const [apods, setApods] = useState([])
  //slice of state here for search to keep track of value

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("this did not work");
      });
  }, []);
  
  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      {/*Render Search */}
      {/*Render PhotoDisplay also dataName=data(to use as prop for this function)*/}
    </div>
  );
}

export default App;
