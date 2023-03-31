import "./App.css";
import "./image.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Image from "./Image";
import SearchPage from "./SearchPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="image" element={<Image />} />
        <Route path="form" element={<Form />} />
        <Route path="/search/:pictureName" element={<SearchPage />} />
      </Routes>
    </div>
  );
};
export default App;
