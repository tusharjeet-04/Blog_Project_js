import React, { useContext } from "react";
import DataContext from "./DataContext";
import { Link, useParams, useNavigate } from "react-router-dom";

const Searchbar= () => {
  const { searchText } = useParams();
  const data = useContext(DataContext);
  const navigate = useNavigate();

  const searchData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="search-result">
        <button onClick={()=>navigate("/")}>Back to home</button>
        <h1>Search Result for : {searchText}</h1>

        {searchData.length > 0 ? (
          <div className="result-contain">
            {searchData.map((item) => (
              <Link to={`details/${item.id}`} key={item.id}>
                <img src={item.img_url} alt={item.title} />
                <p>{item.description.split(" ").slice(0, 20).join(" ")}</p>
              </Link>
            ))}
          </div>
        ) : (
          <h2>No results found</h2>
        )}
      </div>
    </>
  );
};

export default Searchbar;


