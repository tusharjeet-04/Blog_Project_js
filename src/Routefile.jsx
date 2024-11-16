import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Details from './Components/Details';

const Routefile = () => {
  return (
    <>

    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Bollywood' element={<Bollywood/>} />
            <Route path='/Technology' element={<Technology/>} />
            <Route path='/Hollywood' element={<Hollywood/>} />
            <Route path='/Fitness' element={<Fitness/>} />
            <Route path='/Food' element={<Food/>} />
            <Route path='/details/:id' element={<Details/>}></Route>
        </Routes>
    </Router>
    </>
)
}

export default Routefile