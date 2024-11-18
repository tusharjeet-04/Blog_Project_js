import React, { useContext } from "react";
import Navbar from "./Navbar";
import DataContext from "./DataContext";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const data = useContext(DataContext);
  const AdData = [
    {
      id: "1",
      ad_img:
        "https://coreldrawdesign.com/resources/previews/preview-creative-burger-food-restaurant-poster-advertisement-template-1650387145.jpg",
    },
    {
      id: "2",
      ad_img:
        "https://img.freepik.com/premium-psd/advertisement-advertisement-adidas-brand_987701-2530.jpg?w=740",
    },
    {
      id: "3",
      ad_img:
        "https://asset.gecdesigns.com/img/social-media-poster-templates/furniture-shop-advertisement-instagram-poster-template-1683124415404-cover.webp",
    },
    {
      id: "4",
      ad_img:
        "https://img.freepik.com/premium-photo/realistic-soft-drink-advertisement-text-soft-drinks-soda-poster-generative-ai_1092559-16801.jpg?semt=ais_hybrid",
    },
    {
      id: "5",
      ad_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHiA3LVCjCgCRbVO7sUJ9l9SVpQHVa1kDgg&s",
    }
  ];

  const SelectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 31, 32, 35, 36, 45,
    51, 53, 62, 65, 66, 67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];

  const img1 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length-2)))+1])
  );
  const img2 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() *(SelectedArray.length-2)))+1])
  );
  const img3 = data.find(
    (item) =>
      item.id ===
      parseInt(SelectedArray[(Math.round(Math.random() * (SelectedArray.length-2)))+1])
  );

  
  let random = Math.round(Math.random() * (data.length - 2));
  if(random == 0){
    random = random + 1;
  }

  if(random == (data.length - 2)){
    random = random - 1;
  }
  const limitdescription =(text)=>{
    const words =text.split(' ');
    return words.slice(0,45).join(' ') + (words.length > 45 ? '...' : '');
  }
  const description =(text)=>{
    const words =text.split(' ');
    return words.slice(0,45).join(' ') + (words.length > 50? '...' : '');
  }
  return (
    <>
      <Navbar />

      <div className="home-page-parent">
        <div className="home-page-header">
          <div className="headerbox1 headerbox">
            <div className="home-page-child-one">
              <img className="home-page-image" alt="loading" src={img1.img_url} />
              <div className="home-page-empty">
                <h2>{img1.title}</h2>
                <p>{img1.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox2 headerbox">
            <div className="home-page-child-two">
              <img className="home-page-image" alt="loading" src={img2.img_url} />
              <div className="home-page-empty">
                <h2>{img2.title}</h2>
                <p>{img2.description}</p>
              </div>
            </div>
          </div>
          <div className="headerbox3 headerbox">
            <div className="home-page-child-three">
              <img className="home-page-image" alt="loading" src={img3.img_url} />
              <div className="home-page-empty">
                <h2>{img3.title}</h2>
                <p>{img3.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-trending">
        <div className="latest">
          <h1>The Latest</h1>
        </div>
        <div className="Bollywoodmain">
          <div className="three-row">
            {data.slice(random, random + 3).map((item) => (
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
      </div>

      <div className="story-post">
        <div className="top-stories">
          <div className="latest">
            <h1>Top Stories</h1>
            <div className="home-page-header-line"></div>
          </div>
          {data.slice(0, 14).map((item) => (
            <>
              <Link className="story-data" to={`/details/${item.id}`}>
                <div className="storyimage">
                  <img className="imagestory" src={item.img_url} alt="data" />
                  <h3 className="story-category">{item.category}</h3>
                </div>
                <div className="title-description">
                  <h2 className="Title storytitle">{item.title}</h2>
                  <p className="story-description description">
                    {description(item.description)}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="top-post-main">
          <div className="top-post">
            <h1>Top Posts</h1>
            <Link to={`/details/${data[random].id}`} className="main-post">
              <img className="main-post-image"src={data[random].img_url} />
              <p className="main-post-text">{limitdescription(data[random].description)}</p>
            </Link>
          </div>
          <div className="normal-post">
            {data.slice(12, 16).map((item) => (
              <>
                <Link to={`/details/${item.id}`}>
                  <div className="post">
                    <img src={item.img_url} />
                    <p>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>

          <div className="advertisement">
            <div className="Ad-Heading">
              <p>Advertisement</p>
            </div>
            <div className="advertise-image">
              {AdData.map((item) => (
                <>
                  <img
                    className="Advertise-Img"
                    src={item.ad_img}
                    alt="advertisement"
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;