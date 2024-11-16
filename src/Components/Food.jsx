import React, { useContext } from 'react'
import DataContext from './DataContext'
import Navbar from './Navbar';
import "./Home.css"
import { Link } from 'react-router-dom';

const Food = () => {
    const data = useContext(DataContext);
    const Food = data.filter((item) => item.category == "Food");
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
    const random = Math.round(Math.random() * (Food.length-2));

    return (
        <>
    
          <Navbar />
          <div className="Bollywood-main-page">
            <h1 className="main-heading">Food</h1>
            <div className="home-page-child-one">
              {Food.slice(4, 7).map((item) => (
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
        <div className="tops-tories">
          <div className="latest">
            <h1>Top Stories</h1>
            <div className="home-page-header-line"></div>
          </div>
          {Food.slice(0, 16).map((item) => (
            <>
              <Link className="story-data" to={`/details/${item.id}`}>
                <div className="storyimage">
                  <img className="imagestory" src={item.img_url} alt="data" />
                  <h3 className="story-category">{item.category}</h3>
                </div>
                <div className="title-description">
                  <h2 className="Title storytitle">{item.title}</h2>
                  <p className="story-description description">
                    {item.description}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="top-post-main">
          <div className="top-post">
            <h1>Top Posts</h1>
            <Link to={`/details/${Food[random].id}`}
            className="mainpost">
              <img className="main-post-image" src={Food[random].img_url} width={680} height={400}/>
              <p className="main-post-text">{Food[random].description}</p>
            </Link>
          </div>
          <div className="normal-post">
            {Food.slice(12, 16).map((item) => (
              <>
              <Link to={`/details/${item.id}`}>
                <div className="post">
                  <img src={item.img_url} />
                  <p>{item.description}</p>
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
        </>
      );
}

export default Food