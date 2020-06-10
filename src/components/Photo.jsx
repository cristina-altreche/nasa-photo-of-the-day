import React from "react";

export default function Photo(props) {
  const { data } = props;
  return (
    <div className="photo-display">
      <div>
        <img src={data.url}></img>
      </div>
      <div className="photo-details">
        <div>
          <h2>{data.title}</h2>
          <h3>{data.date}</h3>
          <h4>Photo Credit: {data.copyright}</h4>
          <p>{data.explanation}</p>
        </div>
      </div>
    </div>
  );
}
