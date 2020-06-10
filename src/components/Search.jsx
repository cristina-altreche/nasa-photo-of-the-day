import React from "react";

export default function Search(props) {
  const { updater } = props;
  const changeHandler = (event) => {
    updater(event.target.value);
  };

  return (
    <div className="search-container">
      <input onChange={changeHandler} />
    </div>
  );
}
