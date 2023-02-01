import React from 'react'
import './App.css'
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import TvShows from './components/TvShows';
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Nav/>
      <h2>Movies</h2>
      <div className="container">
        <Movies/>
        <TvShows/>
      </div>
      <Footer/>
    </>
  )
}

export default App
