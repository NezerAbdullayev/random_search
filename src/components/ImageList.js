import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList({ images }) {
  const rederedImages=images.map(image=> <ImageShow image={image} key={image.id}/>)
  return (
    <>
    <div className="image_list">{rederedImages}</div>
    </>
  );
}

export default ImageList;
