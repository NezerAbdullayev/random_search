import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const res = await searchImages(term);
    console.log(res);
   setImages(res)
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
