import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoDisplay from "./components/PhotoDisplay";
import Search from "./components/Search";
import axios from "axios";

function App() {
  //slice of state here for data
  const [apods, setApods] = useState([]);
  //slice of state here for search to keep track of value
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((res) => {
          setApods(res.data);
          setLoading(!loading);
        })
        .catch((err) => {
          console.log("this did not work");
        });
    };
    fetchData();
  }, []);

  if (loading) return <p>I'm loading! Please be patient</p>;

  return (
    <div className="App">
      <h1>
        Astronomy Picture of The Day{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </h1>
      <Search updater={setSearchText} />
      <PhotoDisplay apodData={apods} />
    </div>
  );
}

export default App;
