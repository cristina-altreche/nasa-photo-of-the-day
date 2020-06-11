import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
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
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=R2uwcDASDueZ1wICDgLaJEa1ramuFHSqkSFqkPgW`
        )
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

  if (loading)
    return <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />;

  return (
    <div className="App">
      <Search updater={setSearchText} />
      <PhotoDisplay apodData={apods} />
    </div>
  );
}

export default App;
