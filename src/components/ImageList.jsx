import React from "react";
import "../StyleImage.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // const arrs = props.dataImg.map((val) => val);
  // console.log(arrs);
  const imageRender = () => {
    return props.dataImg.map((val) => {
      return <ImageCard key={val.id} data={val} />;
    });
  };
  return <div className="img-list">{imageRender()}</div>;
};
export default ImageList;
