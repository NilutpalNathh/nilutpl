import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./image.css";

const Image = () => {
  let nativage = useNavigate();
  const [Picturename, setPicturename] = useState("");
  return (
    <div className="bgimage">
      <div></div>
      <div>
        <h1>Welcome to picture image</h1>

        <input
          type="text"
          onChange={(e) => setPicturename(e.target.value)}
          size="10"
        />
        <br />
        <button onClick={() => nativage(`/search/${Picturename}`)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Image;
