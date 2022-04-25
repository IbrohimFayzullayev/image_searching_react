import React from "react";

const ImageList = () => {
  const onClickBtn = () => {
    console.log("Meni bosding");
  };
  return <button onClick={onClickBtn}>Click Me !</button>;
};
export default ImageList;
