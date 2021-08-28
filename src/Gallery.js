import React from "react";

const Gallery = ({ title, imgLink, des, setImages, deleteHandle, id }) => {
  return (
    <div className="col-md-4 p-3">
      <div className="card card-body p-2">
        <img style={{ width: "200px", height: "200px", minWidth:"100%" }} src={imgLink} alt="" />
        <button 
        className="btn btn-danger"
        onClick={()=> deleteHandle(id)}
        >Delete</button>
      </div>
    </div>
  );
};

export default Gallery;
