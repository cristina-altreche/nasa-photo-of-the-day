import React from "react";

export default function Search(props) {
  const { updater } = props;
  const changeHandler = (event) => {
    updater(event.target.value);
  };

  return (
    <div className="search-container">
      <h2>
        APOD<i className="fas fa-user-astronaut"></i>
      </h2>
      <input placeholder="Search" onChange={changeHandler} />
    </div>
  );
}
