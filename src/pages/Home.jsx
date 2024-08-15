import React from 'react';
import './Home.css';
import { AiFillChrome } from "react-icons/ai";


const Home = () => {
  return (
    <div className="home-container">
      <AiFillChrome className="chrome" size={130} />
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
