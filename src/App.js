import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CriarPost from './CriarPost';
import Header from './Header';
import Footer from './Footer';
import Posts from './BlogPosts';
import Home from './Home';
import Curiosidade from './Curiosidade';
import BuracoNegro from './BlackHole';
import Sol from './Sol';


function App() {

  const main = '/AstroBlog/';

  return (
    <Router>
      <div className="App">

<div className='header-home'>
  
          <Header />
          <Home />
          <Curiosidade />
          <BuracoNegro />
          <Sol />
  
</div>
        <div>
          <Routes>

            <Route
              path={`${main}criar-post`} element={<CriarPost />}
            ></Route>

            <Route
              path={`${main}posts`} element={<Posts />}
            ></Route>


          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
