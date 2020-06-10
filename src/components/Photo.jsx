import React from "react";

export default function Photo(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="photo-display">
      <div>
        <img src={data.url}></img>
      </div>
      <div className="photo-details">
        <div>
          <h2>{data.title}</h2>
          <h3>{data.date}</h3>
          <p>{data.explanation}</p>
        </div>
      </div>
    </div>
  );
}
//variable data = props

//return div of photo
//and div data
