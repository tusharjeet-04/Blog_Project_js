import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "./DataContext";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./Home.css";

const Details = () => {
  const { id } = useParams();
  const Navigate = useNavigate();

  const data = useContext(DataContext);
  const post = data.find((item) => item.id === parseInt(id));

  const datacategory = data[id].category;
  const suggest = data.filter((item) => item.category == datacategory);
  const random = Math.round(Math.random() * suggest.length);

  return (
    <>
      <div className="pardetailslogo">
        <NavLink className="heading detailslogo" to="/">
          <div id="devil">Glitz & Bytes</div>
        </NavLink>
      </div>
      <div className="detailsParMain">
        <div className="detailschildmain">
          <button className="BackButton" onClick={() => Navigate(-1)}>
            <div className="BackEroImg"></div>
            Go Back
          </button>
          <div className="MainDetails">
            <h1 className="DetailsTitle">{post.title}</h1>

            <div className="personalintro">
              <div className="paranimenamedate">
                <div className="animeImg"></div>
                <div className="namedate">
                  <h3>Tusharjeet Rout</h3>
                  <h4>22 April 2024</h4>
                </div>
              </div>
              <div className="socialmedia">
                <div className="twitter"></div>
                <div className="facebook"></div>
                <div className="YouTube"></div>
                <div className="instagram"></div>
              </div>
            </div>

            <img className="Detailsimg" src={post.img_url} alt={post.title} />
            <p className="DetailsDescription">{post.description}</p>
            <div className="parlike">
              <div className="like">
                <div className="likeimg"></div>
                <div>Like</div>
              </div>

              <div className="likepotioned">
                <div className="like">
                  <div className="likeimg"></div>
                  <div className="like-para">Like</div>
                </div>

                <div className="forward">
                  <div className="forwardimg"></div>
                  <div>Forward</div>
                </div>
              </div>

              <div className="parlikeanime">
                <div className="animeImg"></div>
                <div className="namedate">
                  <h3>Tusharjeet Rout</h3>
                  <h4>22 April 2024</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DetailsMore">
        <h1 className="DetailsMoreHead">More From The Domain</h1>

        <div className="home-page-child-one">
          {suggest.slice(random, random + 3).map((item) => (
            <>
              <div className="BollyMainMovie">
                <Link to={`/details/${item.id}`}>
                  <img
                    src={item.img_url}
                    alt="Bollywood movie"
                    className="BollyMainimg"
                  />
                  <h3 className="Title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;