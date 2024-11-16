import React from "react";
import {NavLink } from "react-router-dom";
import "./Home.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <>

        <div className="footer">
          <div className="footerlogo">
            <NavLink className="heading footermainlogo" to="/">
              <div id="devil"> Glitz & Bytes </div>
              <span id="domain"></span>
            </NavLink>
            <p className="footerboutblog">
            "Glitz" represents the glamorous world of Bollywood and Hollywood, while "Bytes" brings in the tech aspect. This name hints at a fusion of entertainment, technology, and lifestyle.
            </p>
            <div className="socialmedia">
              <div className="twitter"></div>
              <div className="facebook"></div>
              <div className="YouTube"></div>
              <div className="instagram"></div>
            </div>
          </div>

          <div className="footernav">
            <div className="footerservices">
              <h3>Services</h3>

              <div className="footernavbutton">
                <ul className="footermenulist">
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Bollywood
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Technology
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Hollywood
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Fitness
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className="footer-text"
                      to="/"
                    >
                      Food
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerresources">
              <h3>Resources</h3>
              <div className="footerresoption">
                <p>Blog</p>
                <p>Help Center</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div className="footerenjoy">
            <h1>Get Ready to Enjoy on the Blog-Machine !!!</h1>
          </div>
          <button onClick={scrollToTop} className="scrollbutton">
            <div className="scrolltoperoimg"></div>
            Back to Top
          </button>
        </div>
    </>
  );
};

export default Footer;