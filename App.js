import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Box1 from './box1'
import Box2 from './box2'
import Box3 from './box3'
import Box4 from './box4'
import Box5 from './box5'
import Box6 from './box6'
import Box7 from './box7'
import Box8 from './box8'
import logo from './logo.png'
import './my-css.css'


function Home() {
  return (
    <div className="Main">
      <img src={logo} className="logo" alt="logo"></img>
      <div className="Input">
        <input></input>
        <button>검색</button>
      </div>
      <div className="_8Boxes">
      <Link to="/box1" className="_1Box"></Link>
      <Link to="/box2" className="_2Box"></Link>
      <Link to="/box3" className="_3Box"></Link>
      <Link to="/box4" className="_4Box"></Link>
      <Link to="/box5" className="_5Box"></Link>
      <Link to="/box6" className="_6Box"></Link>
      <Link to="/box7" className="_7Box"></Link>
      <Link to="/box8" className="_8Box"></Link>
    </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/box1" element={<Box1 />}></Route>
        <Route path="/box2" element={<Box2 />}></Route>
        <Route path="/box3" element={<Box3 />}></Route>
        <Route path="/box4" element={<Box4 />}></Route>
        <Route path="/box5" element={<Box5 />}></Route>
        <Route path="/box6" element={<Box6 />}></Route>
        <Route path="/box7" element={<Box7 />}></Route>
        <Route path="/box8" element={<Box8 />}></Route>
      </Routes>
    </Router>
  )
}

export default App
