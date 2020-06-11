import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from "reactstrap";

export default function Photo(props) {
  const { data } = props;
  const photoCred = () => {
    if (!data.copyright) {
      return "";
    } else if (data.copyright) {
      return `Photo Credit: ${data.copyright}`;
    }
  };

  return (
    <div className="photo-display">
      <div className="miniBar">
        <i className="fas fa-arrow-left"></i>
        <i className="fas fa-share-alt"></i>
      </div>
      <CardBody>
        <CardTitle style={{ fontSize: "20px" }}>{data.title}</CardTitle>
        <CardSubtitle fontSize="14px">{data.date}</CardSubtitle>
      </CardBody>

      <Card className="cover" inverse>
        <CardImg src={data.url} alt="Random Astronomy Photo of the day" />
      </Card>

      <CardBody>
        <Card
          body
          inverse
          style={{
            backgroundColor: "rgba(41, 36, 77, 1)",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.7)",
          }}
        >
          <CardSubtitle>{photoCred()}</CardSubtitle>
          <CardBody>{data.explanation}</CardBody>
        </Card>
      </CardBody>
    </div>
  );
}
