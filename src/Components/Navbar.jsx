import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {


useEffect(()=>{
  const hamburger = document.querySelector('.hamburger');
  const menu_bar = document.querySelector('.menu-bar');


  const toggle_menu = () => {
    hamburger.classList.toggle('hamactive');
    menu_bar.classList.toggle('hamactive');
  }

  const close_menu = () =>{
    hamburger.classList.remove('hamactive');
    menu_bar.classList.remove('hamactive');
  }

  if(hamburger){
    hamburger.addEventListener('click', toggle_menu)
  }

  document.querySelectorAll('.options').forEach((close) =>(
    close.addEventListener('click', close_menu)
  ));

  return()=>{
    if(hamburger){
      hamburger.removeEventListener('click', toggle_menu)
    }
    
    document.querySelectorAll('.options').forEach((close) =>(
      close.removeEventListener('click', close_menu)
    ));
  }

}, [])


  return (
    <>
      <div className="nav-section">
        <NavLink className="heading" to="/">
          <div id="devil">Glitz & Bytes </div>
        </NavLink>
        <nav>
        <ul className="menu-bar">
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/">
              Home
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Bollywood">
              Bollywood
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Technology">
              Technology
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Hollywood">
              Hollywood
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Fitness">
              Fitness
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Food">
              Food
            </NavLink>
            <div className="menu_underline"></div>
          </li>
        </ul>
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;