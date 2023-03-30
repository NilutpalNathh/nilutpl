import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { pictureName } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=34801686-d9e827c375153e58fb61bc0bd&q=${pictureName}&image_type=photo`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.hits);
      });
  }, []);

  return (
    <>
      <div className="output">
        {data.map((hits) => {
          return <img src={hits.webformatURL} alt="image"></img>;
        })}
      </div>
    </>
  );
};
export default SearchPage;
