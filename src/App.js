import "./App.css";
import data from "./data.json";
import Gallery from "./Gallery";
import { useReducer, useState } from "react";
import NavBar from "./NavBar";

const initialState = {
  data: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
function App() {
  const [images, setImages] = useState(data);

  const deleteHandle = (id) => {
    const newState = images.filter((img) => img.id.$oid !== id);
    setImages(newState);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <NavBar/>
      <div className="row">
        {images.map((img, index) => (
          <Gallery
            key={index}
            title={img.title}
            imgLink={img.image}
            des={img.description}
            setImages={setImages}
            deleteHandle={deleteHandle}
            id={img.id.$oid}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
