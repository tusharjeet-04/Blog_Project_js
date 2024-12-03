import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DataContext from "./DataContext";
import { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Bollywood = () => {
  const[visible,setVisible]=useState(5)
  const[show,setShow]=useState(6);

  const handleLoad=()=>{
    setVisible((prev)=>prev+3)
    setShow((prev)=>prev+6)
  }
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    };
    loader();
  }, []);

  const data = useContext(DataContext);
  const bollyMovies = data.filter((item) => item.category == "Bollywood");
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
  
  ];
  const random = Math.round(Math.random() * (bollyMovies.length - 2));

  const limitdescription =(text)=>{
    const words =text.split(' ');
    return words.slice(0,15).join(' ') + (words.length > 15 ? '...' : '');
  }
  const description =(text)=>{
    const words =text.split(' ');
    return words.slice(0,45).join(' ') + (words.length > 50? '...' : '');
  }
  return (
    <>
      <Navbar />
      {isloading ? (<div class="loader"></div>):(
<>
      <div className="Bollywood-main-page">
        <h1 className="main-heading">Bollywood</h1>
        <div className="home-page-child-one">
          {bollyMovies.slice(4, 7).map((item) => (
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

      <div className="story-post">
        <div className="top-stories">
          <div className="latest">
            <h1>Top Stories</h1>
            <div className="home-page-header-line"></div>
          </div>
          {bollyMovies.slice(0, visible).map((item) => (
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

        <div className="top-post-main-bollywood">
          <div className="top-post-bollywood">
            <h1>Top Posts</h1>
            <Link
              to={`/details/${bollyMovies[random].id}`}
              className="mainpost-bollywood"
            >
              <img className="main-post-image-bollywood" src={bollyMovies[random].img_url} width={680} height={400}/>
              <p className="main-post-text-bollywood">{description(bollyMovies[random].description)}</p>
            </Link>
          </div>
          <div className="normal-post-bollywood">
            {bollyMovies.slice(0, show).map((item) => (
              <>
                <Link to={`/details/${item.id}`}>
                  <div className="post-bollywood">
                    <img src={item.img_url} />
                    <p>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>
           <button className="Load-more" onClick={handleLoad}>LoadMore
           </button>
           
          
        </div>
      </div>
      <div className="Ad-Heading">
              <p>Advertisement</p>
            </div>
          {/* <div className="advertisement"> */}
           
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
            {/* </div> */}
      <Footer />
      </>
    )}

    </>
  );
};

export default Bollywood;