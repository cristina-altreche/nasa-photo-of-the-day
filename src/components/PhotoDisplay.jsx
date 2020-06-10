import React from "react";
import Photo from "./Photo";

export default function PhotoDisplay(props) {
  const { apodData } = props;

  return (
    <div className="photo-display-container">
      <Photo data={apodData} />
    </div>
  );
}
